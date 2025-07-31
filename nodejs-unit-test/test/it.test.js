import { sum } from "../src/sum"

describe("when call sum(2,3)", () => {
    it("should be 5", () => {
         expect(sum(2,3)).toBe(5)
    })
})