test("test toBe", () => {
    const name = "akbar";
    const hello = `hello ${name}`;

     expect(hello).toBe("hello akbar")
});

test("test toEqual", () => {
    let person = {id: "akbar"};
    Object.assign(person, {name: "Akbar"});

    let obj = { a: '1' }
    expect(person).toEqual({id:"akbar", name:"Akbar" })
})