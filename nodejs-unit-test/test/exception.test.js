import { callMe, MyException } from "../src/exception"

test("exception", () => {
    expect(()=> callMe("eko")).toThrow();
    expect(()=> callMe("eko")).toThrow(MyException);
    expect(()=> callMe("eko")).toThrow("ups my exception happens");
})

test("exception not happen", () => {
    expect(callMe("ahmad")).toBe("ok");
})