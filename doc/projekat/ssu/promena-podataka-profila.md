# 1. Увод

## 1.1. Резиме

Спецификација сценарија случаја употребе "промена података профила".

## 1.2. Намена документа и циљне групе

Документ се може користити у фазама

1. Имплементације
2. Тестирања
3. Писања корисничких упутстава

## 1.3. Референце

Упутство за писање спецификација сценарија случаја употребе

## 1.4. Отворена питања

Нема.

# 2. Сценарио промене података профила

## 2.1. Кратак опис

Пријављен корисник има опцију да измени податке на свом профилу.

## 2.2. Ток догађаја

### 2.2.1. Успешно мењање података

1. Пријављени корисник кликне на дугме "Профил" из главног навигационог менија.
2. Отвара му се страница са његовим профилом, где су приказани сви његови подаци.
3. Корисник кликне на дугме "Измени".
4. Отвара му се страница на којој може да измени податке.
5. Корисник исправно уноси нове податке. (у овом сценарију не мења слику)
6. Корисник кликне дугме "Потврди".
7. Отвара се страница његовог профила са измењеним подацима.

### 2.2.2. Успешно мењање података - промена слике

1. Пријављени корисник кликне на дугме "Профил" из главног навигационог менија.
2. Отвара му се страница са његовим профилом, где су приказани сви његови подаци.
3. Корисник кликне на дугме "Измени".
4. Отвара му се страница на којој може да измени податке.
5. Корисник кликне на дугме "Додај другу слику".
6. Отвара се прозор у ком корисник може да изабере неку слику са рачунара.
7. Корисник изабере слику.
8. Корисник кликне на дугме "Потврди" унутар тог прозора.
9. Отвара се страница његовог профила са промењеном сликом.

### 2.2.3. Неуспешно мењање података - неки од података није исправан (не задовољава критеријуме)

1. Пријављени корисник кликне на дугме "Профил" из главног навигационог менија.
2. Отвара му се страница са његовим профилом, где су приказани сви његови подаци.
3. Корисник кликне на дугме "Измени".
4. Отвара му се страница на којој може да измени податке.
5. Корисник неисправно уноси нове податке. (у овом сценарију не мења слику)
6. Корисник кликне дугме "Потврди".
7. Корисник остаје на страници за измену података, излази му обавештење да је погрешно унео неке податке.

### 2.2.4. Неуспешно мењање слике - слика није валидна

1. Пријављени корисник кликне на дугме "Профил" из главног навигационог менија.
2. Отвара му се страница са његовим профилом, где су приказани сви његови подаци.
3. Корисник кликне на дугме "Измени".
4. Отвара му се страница на којој може да измени податке.
5. Корисник кликне на дугме "Додај другу слику".
6. Отвара се прозор у ком корисник може да изабере неку слику са рачунара.
7. Корисник изабере неки фајл са свог рачунара.
8. Корисник кликне на дугме "Потврди" унутар тог прозора.
9. Отвара се прозор са обавештењем да слика није валидна.
10. Корисник кликне на дугме "Ок".
11. Корисник је враћен на страницу за мењање података.

## 2.3. Посебни захтеви

Нема.

## 2.4. Предуслови

Корисник мора бити пријављен да би могао да мења податке на профилу.

## 2.5. Последице

Промене су ажуриране у бази података.