import { callMe, MyException } from "../src/exception"

test("exceptions", () => {
    expect(() => callMe("Koko")).toThrow();
    expect(() => callMe("Koko")).toThrow(MyException);
    expect(() => callMe("Koko")).toThrow("Ups my exceptions happens");
});

test("exception not happens", () => {
    expect(callMe("Koki")).toBe("Ok");
});