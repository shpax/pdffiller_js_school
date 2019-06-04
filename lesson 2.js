/**
 * __Loops__
 *  - for loop ( for i < 10, i <=10, i >= 0, i += 2, 3, etc.), looping backwards
 *  - - console log example
 * [ 'vanilla js', 'angular', 'react', 'vue', 'jQuery', 'knockout', 'ember']
 * 
 * - while loop (previous example)
 *
 * - do while
 * 
 * - continue, break
 * - - typeof for strings example, ===, then continue
 * - - break on first found element
 */

const frameworks = [ 'vanilla js', 'angular', 'react', 'vue', 'jQuery', 'knockout', 'ember']
 
console.log(
  frameworks.filter(f => f.charAt(0) === 'r')
)
 

//   const arr = [11, 23, 34, 54, 'sove value', 89, 92]
// console.log(arr);

//  for (let i = 0; i < arr.length; i++) {
//    const item = arr[i];
   
//    console.log(item);
//  }

 /** 
 * __Array iterations__
 * - forEach
 * - map
 * - some
 * - every
 * - reduce
 * - find
 * - filter
 */

//  var arr = ['Haytham', 'Ezio', 'Altair', 'Connor', 'Edward']
 
//  var names = arr.filter(function(e) {
//    return e !== 'Ezio';
//  })

// console.log(names);


/**
 * __Challenge 1__ - array methods
 * http://jsfiddle.net/shpax/27mf1rjn/17/
 */


/**
 * __ES6 - history__
 * 
 * - 1996 - LiveScript -> JavaScript
 * - 1997 - ES1 (ECMAScript 1) - first JS language standart
 * - 2009 - ES5 was released
 * - 2015 - ES6/ES2015 was released -> the biggest update ever
 * - 2015 - ES is being released every year from now on, instead of shipping huge new version
 * 
 * - ES5 is fully supported
 * - ES6+ is mostly supported (https://caniuse.com/#search=ES6) in modern browsers. Most other features are available via transpiling & polyfilling
 * - ES10+ is called ESNext, partially supported by browsers, some other features are available via transpiling & polyfilling
 */

/**
 * __ES6 vs ES5__
 * - still have to understand ES5
 * - lots of code samples in ES5
 * - older codebases may still be in ES5
 */

/**
 * __ES6 features__
 * - let, const
 * - destructuring (with renaming), composition
 * - arrow functions
 * 
 */

 function createPerson(name, age) {
   var birthYear = 2019 - age;
   return {
     name,
     age,
     birthYear,
   }
 }



const myFunc = text => {
  console.log(text);
}


 /**
  * __Scoping & Closures__
  * - what is scoping
  * - modules
  * - object factory
  * - block scope, var vs let
  */

 var i = 5;
 for (var i = 0; i < 10; i++) {
   // some statements
 }
 // Here i is ?

 /** 
  * __Challenge 1 via ES6__ 
  */

  var a = 'number 1';
  first()

  function first() {
    var b = ' number 2';
    second()

    function second() {
      var c = ' number 3';
      third();
      
      console.log(a + b + c)
    }
  }

  function third() {
    var d = ' number 4';

    console.log(a + b + c + d)
  }


/** 
 * __Challenge 2__
 * Animal Zoo
 * (https://jsfiddle.net/shpax/vomda52x/10/)
 */