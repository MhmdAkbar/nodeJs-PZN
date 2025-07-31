import { sayHelloAsync } from "../src/async"


test("test async function", async () => {
    const result = await sayHelloAsync("akbar");
    expect(result).toBe("hello akbar");
});

// test("name empty",async ()=> {
//     const result = await sayHelloAsync();
//     expect(result).toBe("name is empty");
// })