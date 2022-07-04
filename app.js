let one = () =>
{return null;}
////////////////////////////////////
let two = ()=>
{if ((1+2) === 3); return true}
///////////////////////////////////
let three = ()=>
{if ((1+2) === 4); return false}
///////////////////////////////////
let four = ()=> {
    let  person = {
        name: "Bob",
        age: 32,
    }
    return person
}///////////////////////
let five = ()=> {
    let colours = ['Red', 'Orange', 'blue', 'Green', 'Cyan', 'yellow', 'Black']
    let showlist = ()=> {
        return colours.filter((str) => str.length >= 6);
    }
    return showlist()
}
console.log(five())
//////////////////////////
let six = (num)=> {
    let string = num.toString();
    return string;
}
six(22)
//////////////////////////
let seven = (planNum)=> {
    let planetList = [
        "Mercury",
        "Venus",
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune",
    ]
    let planNum2 = (planNum - 1)
    let planet = (planetList[planNum2])
    return planet
    }
    seven(3)
    /////////////////////////
    let eight = ()=> {
        let students = {
            Andrew: true,
            Ben: true,
            Chris: false,
            Dan: true,
            Eddy: false,
            Francis: true,
            Gerry: false,
        }
        let count = Object.values(students).filter(item => item === true).length;
        return count
    }
    eight()
    
//////////////////////////

module.exports = {one,two,three,four,five,six,seven,eight}
