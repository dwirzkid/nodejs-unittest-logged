test("string", () => {
    const name = "Jonhg Knnin Jk";

    expect(name).toBe("Jonhg Knnin Jk");
    expect(name).toMatch(/nh/);
});