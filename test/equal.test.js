test("test toBe", () => {
    const name = "Meki";
    const hello = `Hello ${name}`;

    expect(hello).toBe('Hello Meki');
});

test("test toEquals", () => {
    let person = {id: "kos"};
    Object.assign(person, {name: "Noun"});

    expect(person).toEqual({id: "kos", name: "Noun"});
})