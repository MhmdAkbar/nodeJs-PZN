import { sayHello } from "../src/sayHello"

test('say hello success', () => {
     expect(sayHello('akbar')).toBe('hello akbar');
})

test.failing('sayhello error' , () => {
    sayHello(null)
})