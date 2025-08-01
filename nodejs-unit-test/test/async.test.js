import { sayHelloAsync } from "../src/async"


test("test async function", async () => {
    const result = await sayHelloAsync("akbar");
    expect(result).toBe("hello akbar");
});