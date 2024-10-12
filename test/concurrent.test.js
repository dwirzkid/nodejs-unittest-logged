import { sayHelloAsync } from "../src/async"

test.concurrent("concurrent 1", async () => {
    await expect(sayHelloAsync("Jhon")).resolves.toBe("Hello Jhon");
});

test.concurrent("concurrent 2", async () => {
    await expect(sayHelloAsync("Noel")).resolves.toBe("Hello Noel");
})

test.concurrent("concurrent 3", async () => {
    await expect(sayHelloAsync("Savi")).resolves.toBe("Hello Savi");
})