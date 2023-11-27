//1.Do the below programs in anonymous function & IIFE
 // a.Print odd numbers in an array
// anonymous function

 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 (function() {
   for (let number of numbers) {
    
     if (number % 2 !== 0) {
       console.log(number);
     }
   }
 })();
 // IIFE
 const number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 (function() {
   for (let number of numbers) {
     if (number % 2 !== 0) {
       console.log(number);
     }
   }
 })();

//b.Convert all the strings to title caps in a string array
 //Using an anonymous function:
 const stringArray = ["hello world", "good morning", "have a nice day"];
 (function(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
  })(stringArray);
  
  console.log(stringArray);

  //// IIFE
  const stringArray1 = ["hello world", "good morning", "have a nice day"];
  
(function(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
})(stringArray);

console.log(stringArray);

// c.Sum of all numbers in an array
//Using an anonymous function:
const numberArray = [1, 2, 3, 4, 5];
let sum = 0;
(function(arr) {
  for (let number of arr) {
    sum += number;
  }
})(numberArray);

console.log(sum);
//IIFE
const numberArray1= [1, 2, 3, 4, 5];

let sum1= (function(arr) {
  let result = 0;
  for (let number of arr) {
    result += number;
  }
  return result;
})(numberArray);

console.log(sum);

//d.Return all the prime numbers in an array
//Using an anonymous function:
const numberArray2 = [2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16];
   function isprime(num){
    for(let i=2;i<num;i++){
      if(num%i===0){
        return false
      }
    }
    return num>1
   }
   console.log(numberArray2.filter(isprime))
  //IIFE
  const numberArray3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    let primenumbers=numberArray3.filter (function(num){
      if(num<2) return false
      for(let i=2;i<num;i++){
        if(num%i===0){
          return false
        }
      }return true

    })
    console.log(primenumbers)


//e.Return all the palindromes in an array
//Using an anonymous function:
const stringArray2 = ["racecar", "hello", "level", "world", "deified"];
(function(arr) {
    function isPalindrome(str) {
      str = str.toLowerCase();
      return str === str.split('').reverse().join('');
    }
  
    const palindromes = arr.filter(word => isPalindrome(word));
    console.log(palindromes);
  })(stringArray2);

  //IIFE
  const stringArray3 = ["racecar", "hello", "level", "world", "deified"];

const palindromes = (function(arr) {
  function isPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
  }

  return arr.filter(word => isPalindrome(word));
})(stringArray3);

console.log(palindromes);

//f.Return median of two sorted arrays of the same size.
// using an anonymous function:
const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8, 10];
(function(arr1, arr2) {
    function findMedianSortedArrays(nums1, nums2) {
      const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
      const n = mergedArray.length;
      if (n % 2 === 0) {
        return (mergedArray[n / 2 - 1] + mergedArray[n / 2]) / 2;
      } else {
        return mergedArray[Math.floor(n / 2)];
      }
    }
  
    const median = findMedianSortedArrays(arr1, arr2);
    console.log(median);
  })(arr1, arr2);
  
  //IIFE
  const arr3 = [1, 3, 5, 7, 9];
const arr4 = [2, 4, 6, 8, 10];

const median = (function(nums1, nums2) {
  function findMedianSortedArrays(nums1, nums2) {
    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    const n = mergedArray.length;
    if (n % 2 === 0) {
      return (mergedArray[n / 2 - 1] + mergedArray[n / 2]) / 2;
    } else {
      return mergedArray[Math.floor(n / 2)];
    }
  }

  return findMedianSortedArrays(arr1, arr2);
})(arr3, arr4);

console.log(median);

//g.Remove duplicates from an array
//using an anonymous function:
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 5];
(function(arr) {
    const uniqueArray = [...new Set(arr)];
    console.log(uniqueArray);
  })(arrayWithDuplicates);

// IIFE
const arrayWithDuplicatess = [1, 2, 2, 3, 4, 4, 5, 5];

const uniqueArray = (function(arr) {
  return [...new Set(arr)];
})(arrayWithDuplicates);

console.log(uniqueArray);

//h.Rotate an array by k times
//using an anonymous function:
const originalArray = [1, 2, 3, 4, 5];
const k = 2;
(function(arr, k) {
    k = k % arr.length; // Ensure k is within the array length
    const rotatedArray = arr.slice(k).concat(arr.slice(0, k));
    console.log(rotatedArray);
  })(originalArray, k);

// IIFE
const originalArray1 = [1, 2, 3, 4, 5];
const m = 2;

const rotatedArray = (function(arr, k) {
  k = m % arr.length; // Ensure k is within the array length
  return arr.slice(m).concat(arr.slice(0, m));
})(originalArray, m);

console.log(rotatedArray);


//2. Do the below programs in arrow functions.
  // a.Print odd numbers in an array

  const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printOddNumbers = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers(numbers1);


// Do the below programs in arrow functions
// b.Convert all the strings to title caps in a string array
const stringArray5 = ['hello', 'world', 'how', 'are', 'you'];

const convertToTitleCaps = (arr) => {
  return arr.map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
};

const titleCapsArray = convertToTitleCaps(stringArray5);
console.log(titleCapsArray);

// Do the below programs in arrow functions.
// c.Sum of all numbers in an array
const numbers3 = [1, 2, 3, 4, 5];

const sumOfNumbers = (arr) => {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const totalSum = sumOfNumbers(numbers3);
console.log(totalSum);


// Do the below programs in arrow functions.
// d.Return all the prime numbers in an array

const numbers5 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = num => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const getPrimeNumbers = arr => arr.filter(num => isPrime(num));

const primeNumbers = getPrimeNumbers(numbers5);
console.log(primeNumbers);


// Do the below programs in arrow functions.
// e.Return all the palindromes in an array
const words = ['level', 'hello', 'radar', 'world', 'madam'];

const isPalindrome = str => {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
};

const getPalindromes = arr => arr.filter(word => isPalindrome(word));

const palindromeWords = getPalindromes(words);
console.log(palindromeWords);










  




  



  



  
 
 
