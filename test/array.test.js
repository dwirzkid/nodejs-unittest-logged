test("array", () => {
    const names = ["kojo", "nuno", "hunc"];
    expect(names).toEqual(["kojo", "nuno", "hunc"]);
    expect(names).toContain("hunc");
});

test("array object", () => {
    const persons = [
        {
            name: "Love"
        },
        {
            name: "Kosc"
        },
    ];
    expect(persons).toContainEqual({
        name: "Kosc"
    });
});