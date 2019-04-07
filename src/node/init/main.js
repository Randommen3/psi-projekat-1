'use strict';

const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const O = require('../omikron');
const config = require('../config');
const fsRec = require('../fs-rec');

const DB_NAME = config.dbName;

const TAB_SIZE = 2;
const TAB = ' '.repeat(TAB_SIZE);

const dataDir = config.dirs.data;
const initDateFile = path.join(dataDir, 'init-date.txt');
const dbInitFile = path.join(dataDir, 'db-init.sql');

setTimeout(() => main().catch(err));

async function main(){
  /*
    Await all functions even if some of them are synchronous.
    That allows asynchronizing other functions without modifying
    the main function.
  */

  log('Resetting data directory');
  await resetDataDir();

  log('Initializing data subdirectories');
  await initSubdirs();

  log('Updating initialization date');
  await initializeDate();

  log('Adapting exported script');
  await adaptSQLScript();

  log('Initializing database')
  await initDB();
}

function resetDataDir(){
  fsRec.resetDirSync(dataDir);
}

function initSubdirs(){
  const {dirs} = config;

  for(const key of O.keys(dirs))
    fsRec.createDirSync(dirs[key]);
}

function initializeDate(){
  O.wfs(initDateFile, O.gmt());
}

function adaptSQLScript(){
  let src = O.lf(O.lf(config.files.dbInit.toString('utf8').trim()));

  src = `${O.sanl(`
    drop database if exists \`${DB_NAME}\`;
    create database \`${DB_NAME}\` character set utf32 collate utf32_general_ci;
    use \`${DB_NAME}\`;
  `.trim()).map(a => a.trim()).join('\n')}\n\n${src}`;

  O.wfs(dbInitFile, O.crlf(src));
}

function initDB(){
  return new Promise((res, rej) => {
    const proc = cp.spawn(config.exe.mysql, [
      '-u', 'root',
      'mysql',
    ]);

    const bufs = [];

    proc.stdin.on('data', buf => bufs.push(buf));
    proc.stderr.on('data', buf => bufs.push(buf));

    proc.on('exit', code => {
      if(code !== 0){
        log(`\n${Buffer.concat(bufs).toString('utf8').trim()}`);
        return rej(`MySQL NZEC ${code}`);
      }

      res();
    })

    proc.on('error', rej);

    fs.createReadStream(dbInitFile).pipe(proc.stdin);
  });
}

function err(msg){
  if(msg instanceof Error)
    msg = msg.message;

  log(`\nERROR: ${msg}`);
  O.proc.exit(1);
}