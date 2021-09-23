// Write a function called “addFive”.
var num = 10;
function addFive(num) {
    return num + 5
}
var result = addFive(num)
console.log(result)



// Write a function called “getOpposite”.
var num = 5;
function getOpposite(num) {
    return num * -1
}
var result = getOpposite(num)
console.log(result)



// Fill in your code that takes an number minutes and converts it to seconds.
var min = 5;
function toSeconds(min) {
    return min * 60
}
var secs = toSeconds(min)
console.log(secs)



// Create a function that takes a string and returns it as an integer.
var mystr = "5";
function toInteger(mystr) {
    return +mystr
}
var myint = toInteger(mystr)
console.log(myint)



// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
var myint = 0;
function nextNumber(myint) {
    return myint + 1
}
var myNextint = nextNumber(myint)
console.log(myNextint)



// Create a function that takes an array and returns the first element.
var arr = [1, 2, 3];
function getFirstElement(arr) {
    return arr[0]
}
var data = getFirstElement(arr)
console.log(data)



// Write a function that converts hours into seconds.
var hrs = 2;
function hourToSeconds(hrs) {
    return hrs * 60 * 60
}
var data = hourToSeconds(hrs)
console.log(data)



// Create a function that takes height and width and finds the perimeter of a rectangle.
function findPerimeter(num1, num2) {
    return 2 * (num1 + num2)
}
var peri = findPerimeter(6, 7)
console.log(peri)



//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(num1, num2) {
    if (num1 + num2 < 100) { return true }
    return false
}
var res = lessThan100(22, 15)
console.log(res)



//There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. 
//The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
function remainder(num1, num2) {
    return num1 % num2
}
var res = remainder(1, 3)
console.log(res)



// MacDonald is asking you to tell him how many legs can be counted among all his animals.
function CountAnimals(tur, horse, pigs) {
    return tur * 2 + horse * 4 + pigs * 4
}
var legs = CountAnimals(2, 3, 5)
console.log(legs)



// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
function frames(num1, num2) {
    return num1 * num2 * 60
}
var fps = frames(1, 2)
console.log(fps)



// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
function divisibleByFive(num1) {
    if (num1 % 5 == 0) { return true }
    return false
}
var divisible = divisibleByFive(5)
console.log(divisible)



// Write a function called “isEven”.
function isEven(num) {
    if (num % 2 == 0) { return ture }
    return false
}
var even = isEven(5)



// Write a function called “areBothOdd”.
function areBothOdd(num1, num2) {
    if (num1 % 2 == 1 && num2 % 2 == 1) { return true }
    return false
}
console.log(areBothOdd(1, 3))



// Write a function called “getFullName”.
function getFullName(firstName, lastName) {
    return firstName + " " + lastName
}
console.log(getFullName("GUVI", "GEEK"))



// Write a function called “getLengthOfWord”.
function getLengthOfWord(word1) {
    if (typeof (word1) !== "string") { return -1 }
    return word1.length
}
console.log(getLengthOfWord(9))



// Write a function called “isSameLength”
function isSameLength(word1, word2) {
    return word1.length === word2.length
}
console.log(isSameLength("GUVI", "GEEK"))



// Create a function to calculate the distance between two points defined by their x, y coordinates
function getDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2))
}
console.log(getDistance(100, 100, 400, 300));



// Write a function called “getNthElement”.
function getNthElement(array, n) {
    return array[n]
}
console.log(getNthElement([1, 3, 5], 1))



//Write a function called “getLastElement”.
function getLastElement(array) {
    return array[array.length - 1]
}
console.log(getLastElement([1, 2, 3, 4]))



// Write a function called “getProperty”
var obj = {
    mykey: "value"
};
function getProperty(obj, key) {
    return obj.mykey
}
console.log(getProperty(obj, "mykey"))



// Write a function called “addProperty”.
var obj = {
};
function addProperty(obj, key) {
    obj.mykey = true
    return obj
}
console.log(addProperty(obj, "mykey"))



//Write a function called “removeProperty”.
var obj = {
    name: "value"
};
function removeProperty(obj, key) {
    delete obj.name
    return obj.name
}
console.log(removeProperty(obj, "name"))



//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
    let positiveTemp = 0
    let negativeTemp = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            positiveTemp = positiveTemp + arr[i]
        }
        else {
            negativeTemp = negativeTemp + arr[i]
        }
    }
    return positiveTemp + " " + negativeTemp
}
console.log(ar2(arr));



//Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar) {
    let arr = []
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] > 0) {
            arr.push(ar[i])
        }
    }
    return arr
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);



//Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
function powersOfTwo(n) {
    let res = ""
    for (let i = 0; i < n; i++) {
        res = res + Math.pow(2, i) + ","
    }
    return res.replace(/,\s*$/, "");
}
console.log(powersOfTwo(2))



//Find the maximum number in an array of numbers
function findMax(ar) {
    return Math.max(...ar)
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);



// Print the first 100 prime numbers
function printPrimes(nPrimes) {
    var n = 0;
    var i = 2;

    while (n < nPrimes) {
        if (isPrime(i)) {
            console.log(n, " → ", i);
            n++;
        }

        i++;
    }
}
function isPrime(n) {
    if (n != 1 && n != 0) {
        for (let i = 2; i <= n / 2; i++) {
            if (n % i === 0) {
                return false;
            }
        };
        return true;
    }
    return false
}
printPrimes(5);



//Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”
console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt) {
    var n = 0;
    var i = startAt;

    while (n < nPrimes) {
        if (isPrime(i)) {
            console.log(n, " → ", i);
            n++;
        }

        i++;
    }
}
function isPrime(n) {
    if (n != 1 && n != 0) {
        for (let i = 2; i <= n / 2; i++) {
            if (n % i === 0) {
                return false;
            }
        };
        return true;
    }
    return false
}



//Reverse a string
var s = reverseString("JavaScript");
console.log(s);
function reverseString(s) {
    return s.split("").reverse().join("")
}



//Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2) {
    var result = [];
    for (let el of ar1) {
        result.push(el);
    }
    for (let el of ar2) {
        result.push(el);
    }

    return result;
}



// Calculate the sum of numbers received in a comma delimited string
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s) {
    let sum = 0
    s = s.split(", ").map(Number).map((a) => sum = sum + a)
    return sum
}