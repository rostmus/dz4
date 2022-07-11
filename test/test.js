import healthIndex from '../src/main.js'
import { sortPers } from '../src/main.js'

test('testing healthIndex', () => {
    const pers = { name: 'Маг', health: '90' }
    const testingFunc = healthIndex(pers)
    if (pers.health >= 50) {
        expect(testingFunc).toBe('healthy')
    } else if (pers.health >= 15 && pers.health < 50) {
        expect(testingFunc).toBe('wounded')
    } else {
        expect(testingFunc).toBe('critical')
    }
})

test('testing sort', () => {
    const pers = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ]
    const sortResult = sortPers(pers)
    expect(sortResult).toEquel([
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 }
      ])


})