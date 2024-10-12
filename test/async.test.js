import { sayHelloAsync } from "../src/async";

test("test async function", async () => {
    const result = await sayHelloAsync("joko");
    expect(result).toBe("Hello joko");
})

test("test async matchers", async () => {
    await expect(sayHelloAsync("koko")).resolves.toBe("Hello koko");
    await expect(sayHelloAsync()).rejects.toBe("Name is empty");
    
});