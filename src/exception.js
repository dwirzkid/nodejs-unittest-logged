export class MyException extends Error {

}

export const callMe = (name) => {
    if (name === "Koko") {
        throw new MyException("Ups my exceptions happens");
    } else {
        return "Ok";
    }
};