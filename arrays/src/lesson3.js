
// function test() {console.log('Declaration func')}
// test()
// const sum = function () {console.log('123')}
// const miltiply = () => {alert('22')};
//
//
// miltiply()
// sum()
//
// sum = 5;
// console.log(typeof sum);
//

//2.Callbacks

// const funct1 = (number) => {
//     return number ** 2;
// };
// const funct1 = (number) => {
//    return number + 1;
//  };
// const funct2 = (number,callback) => {
//     return callback(number) + 1;
// };
//
// console.log(funct2(10,funct1));

// const props = {
//     getAge: (age) => console.log('Age: ', age),
//     sayHello: (name) => console.log('My name is,',name),
// }
//
// const func = (props, age,name) => {
//      props.getAge(age);
//      props.sayHello(name);
// };
//
// func(props,45, 'Filipp')



// const a = num => num ** 2;
// const b = num => num - 100;
// const c = num => num / 2;
// const d = num => num + 2;
//
// const callbacks = [a,b,c,d];
// const func = (callbacks,numbers) => {
//     return callbacks.reduce((acc,elem,i) => {
//         acc = [...acc, {[i]: elem(numbers)}];
//         return acc
//     }, []);
// }
//
// const func1 = (callback1,callback2,callback3) => {
//     return callback1(callback2,callback3);
//
// }
//
// const func2 = (callback1,callback2) => {
//     return callback1(callback2)
// }
//
// const func3 = (callback) => {
//     callback()
// }
// const func4 = (callback) => {
//     console.log('last hero')
// }
//
// const func = (callback1,callback2,callback3,callback4) => {
//     return callback1(callback2,callback3,callback4)
// }
// func(func1,func2,func3,func4);

// const result = [];
//         for(let i = 0; i < callbacks.length; i++) {
//             result.push(callbacks[i](number));
//         }
//             return result
//

// const func = (callbacks,number) => {
//     return callbacks.map(t => t(number))
// }
// const result = func(callbacks, 10)
// console.log(result)

// const example = [1,2,3,4,5,6];
//
// const [a,...rest] = example
// console.log(rest)
// console.log(a)

const props = {
    name: 'Fil',
    age: 28,
    city: 'Kiev'
}

const {name,...rest} = props;

console.log(name);
console.log(rest);