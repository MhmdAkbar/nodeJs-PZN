test("test", () => {
    const name = ["akbar", "ahmad", "maulana"];
     expect(name).toContain("akbar");
     expect(name).toEqual(["akbar", "ahmad", "maulana"]);
});