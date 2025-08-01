import { getbalance } from "../src/async";

test("mock async function", async () => {
    const from = jest.fn().mockResolvedValueOnce(1000);
    await expect(getbalance("akbar", from)).resolves
    .toEqual({
        name: "akbar",
        balance: 1000
    });

    await expect(from.mock.calls.length).toBe(1);
});