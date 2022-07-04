let challenge = require('./app')
//
it('No Null Return', () =>
{
expect(challenge.one()).toBe(null)
});
//
it('Truthy Test', () =>
{
expect(challenge.two()).toBe(true)
});
//
it('Falsy Test', () =>
{
expect(challenge.three()).toBe(false)
});
//
it("Equal Properties", ()=> {
    expect(challenge.four()).toEqual({age:32, name:"Bob"})
});
//
it("6 letter words in Array", ()=> {
    expect(challenge.five()).toHaveLength >= (6)
});
//
it("Num to String", ()=> {
    expect(typeof challenge.six(22)).toBe("string")
});
it("Show Planet(Earth)", ()=> {
    expect(challenge.seven(3)).toBe("Earth")
})
//
it("Count the students", ()=> {
    expect(challenge.eight()).toBe(4)
});
//
