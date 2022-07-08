import healthIndex from '../src/main.js'


test('testing healthIndex', ()=> {
    const pers = {name: 'Маг', health: '90'}
    const testingFunc = healthIndex(pers)
if(pers.health >= 50) {
    expect(testingFunc).toBe('healthy')
} else if(pers.health >=15 && pers.health< 50) {
    expect(testingFunc).toBe('wounded')
} else {
    expect(testingFunc).toBe('critical')
}
})

test('testing healthIndexMassiv', ()=> {
    const pers = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ]
      let sortPers = pers.sort((prev, next)=> {
        prev.health - next.health
      })
      sortPers.forEach((el)=> {
        let testingFunc = healthIndex(el)
        if(el.health >= 50) {
            expect(testingFunc).toBe('healthy')
        } else if(el.health >= 15 && el.health < 50) {
            expect(testingFunc).toBe('wounded')
        } else  {
            expect(testingFunc).toBe('critical')
        }
      })

})