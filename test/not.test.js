test("string.not", () => {
    const name = "Kojo Nhue Jojx";

    expect(name).not.toBe("Joko");
    expect(name).not.toEqual("Joko");
    expect(name).not.toMatch(/joko/);
});

//tidakbolehlebihdari
test("number.not", () => {
    const value = 2 + 2;

    expect(value).not.toBeGreaterThan(7);
    expect(value).not.toBeLessThan(3);
    expect(value).not.toBe(10);
});