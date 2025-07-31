export class MyException extends Error {

}

export const callMe = (name) => {
    if (name === "eko") {
        throw new MyException("ups my exception happens");
    } else {
        return "ok"
    }
}