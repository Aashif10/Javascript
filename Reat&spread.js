// Rest Parameter is used to accept multiple values stored in array and array reference stored in variavle that we usedfor rest..
// Rest can accept 'n' number of values and stored in array...
// In a function  there can be only one rest Parameter and it should be last parameter..

//syntax :- let ...variable_name;

/*
function display( ...rest){
    let sum=0;
    for (let i of rest)
    sum= sum+i;
    console.log(sum);
}
display(10,20,30,40,50);*/
/*
function print(a,b,c,...input){

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(input);
}
print(1,2,3,4,5,6,7,8,9,10);*/
/*
//spread Operator

  let array=[10,20,30,40,50,60,70];
function spread(a,b,c,d){
    // console.log(a);
    // console.log(b);
    // console.log(c);
    console.log(...array);

}*/

/*
//copy of array using spread
let array=[10,20,30,40]
let array1=[...array];
//console.log(array1);//10,20,30,40
array1[4]=50;
console.log(array);*/ // it will not modify original array*/

/*
//create copy of object
let object1={
    name:"Aashif",
    age:22,
    city:"Noida",

}
let object2={...object1}
console.log(object2);
console.log(object1);*/

/*Spread operator
let array=[10,20,30,40,50,60]
function spread(a,b,c){
    console.log(...array)
    console.log(a);
    console.log(b);
    console.log(c);
}
spread(...array);*/

/*
// Rest Parameter can be used in array destructuring....
let array=[10,20,30,40,50,60,70,80,90,100];
let[a,b,c,...rest]=array;//array destructuring using Rest Parameter..
console.log(a);
console.log(b);
console.log(c);
console.log(...rest);
console.log(...rest[3])*/

/*
//Reat Parameter can be used in object destructuring..
let object1 = {
  name: "Aashif",
  age: 22,
  city: "Noida",
};
let {...rest } = object1;
console.log(name);
console.log(age);
console.log(city);
console.log(rest);
console.log(rest.city);
*/