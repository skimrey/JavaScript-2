//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


for(let i = 0; i < Object.keys(person3).length; i++){
    console.log('My favorite ' + Object.keys(person3)[i] + ':')
    if(Array.isArray(Object.values(person3)[i]) && typeof Object.values(person3)[i][0] === 'string' ){
        for(let x = 0; x < Object.values(person3)[i].length; x++){
            console.log(Object.values(person3)[i][x])
        }
    }else if(typeof Object.values(person3)[i][0] === 'string' || Object.values(person3)[i][0] instanceof String){
        console.log(Object.values(person3)[i])
    }else{
        for(let y = 0; y < Object.keys(Object.values(person3)[i][0]).length; y++){
              console.log('From ' + Object.keys(Object.values(person3)[i][0])[y] 
              + ' I like ' + Object.values(Object.values(person3)[i][0])[y])
          }
    }
    console.log('')
    
}

//for(let y = 0; y < Object.keys(person3.shakes[0]).length; y++){
  //  console.log(Object.keys(person3.shakes[0])[y])
 //  console.log(Object.values(person3.shakes[0])[y])
 //   console.log(Object.keys(Object.values(person3)[4][0])[y])
 //   console.log(Object.values(Object.values(person3)[4][0])[y])
//}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name,age){
    this.name = name;
    this.age = age;

    // A Method inside of a JS Prototype
    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        return `${this.name} is ${this.age} years old.`
    };
    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    this.addAge = () => {
        this.age = this.age + 1
        return `Happy birthday ${this.name}!`
    }
}

// Call our prototype method
let carla = new Person('Carla', 27)
let boris = new Person('Boris', 85)

console.log(carla.printInfo())
console.log(boris.printInfo())
console.log(carla.addAge())
console.log(carla.addAge())
console.log(carla.addAge())
console.log(carla.printInfo())
console.log(boris.printInfo())
console.log('')


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if its length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const lengthCheck = (word) => {
    return new Promise( (resolve,reject) => {
        if(word.length > 10){
            resolve(word)
        } else {
            reject(word)
        }
    })
}

lengthCheck('Cat')


.then( (result) => {
    console.log(`${result} is a big word`)
})

.catch( (error) => {
    console.log(`${error} is a small word`)
})


// -------------- Two CodeWars problems ------------ //

// one new - Who likes it?
//You probably know the "like" system from Facebook and other pages.
//People can "like" blog posts, pictures or other items. 
//We want to create the text that should be displayed next to such an item.

//Implement the function which takes an array containing the names 
//of people that like an item. It must return the display text as 
//shown in the examples:

//[]                                -->  "no one likes this"
//["Peter"]                         -->  "Peter likes this"
//["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
//["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
//["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
    if(names.length == 0){
      return 'no one likes this'
    }else if(names.length == 2){
      return names[0] + ' and ' + names[1] + ' like this'
    }else if(names.length == 1){
      return names[0] + ' likes this'
    }else if(names.length == 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    let num = names.length - 2
    return `${names[0]}, ${names[1]} and ` + num.toString() + ` others like this`
  }
console.log(likes(["Alex", "Jacob", "Mark", "Max"]))
//one I solved in Python
// Count the Smiley Faces
//Given an array (arr) as an argument complete the function 
//countSmileys that should return the total number of smiling faces.

//Rules for a smiling face:

//Each smiley face must contain a valid pair of eyes. 
//Eyes can be marked as : or ;
//A smiley face can have a nose but it does not have to. 
//Valid characters for a nose are - or ~
//Every smiling face must have a smiling mouth 
//that should be marked with either ) or D
//No additional characters are allowed except for those mentioned.

//Valid smiley face examples: :) :D ;-D :~)
//Invalid smiley faces: ;( :> :} :]

//Example
//countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
//countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
//countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
//Note
//In case of an empty array return 0. 
//You will not be tested with invalid input (input will always be an array). 
//Order of the face (eyes, nose, mouth) elements will always be the same.


// original solution 
//def count_smileys(arr):
//    x =  0
//    for i in arr:
//        if i[0] == ':' or ';':
//            if i[len(i)-1] == ')' or i[len(i)-1] == 'D':
//                if i[1] == ')' or i[1] == 'D':
//                    x += 1
//                elif i[1] == '~' or i[1] == '-':
//                    x += 1
//    return x

function countSmileys(arr) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === ':' || arr[i][0] === ';') {
        if (arr[i][arr[i].length - 1] === ')' || arr[i][arr[i].length - 1] === 'D') {
          if (arr[i][1] === '~' && arr[i][2] !== '~' && arr[i][2] !== '-'
           || arr[i][1] === '-' && arr[i][2] !== '-' && arr[i][2] !== '~') {
            x++;
          } else if(arr[i][1] === ')' || arr[i][1] === 'D') {
            x++;
          }
        }
      }
    }
    return x;
  }


  console.log(`[':D',':~)',';~D',':)']`)
  console.log(countSmileys([':D',':~)',';~D',':)']) + ' smileys')