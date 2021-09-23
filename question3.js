// a. Print odd numbers in an array
const oddNums = () => {
    let arr = [11, 12, 13, 14, 15]
    let result = ""
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            result = result + arr[i] + " "
        }

    }
    return result.trim()
}
console.log("\nPrint odd numbers in an array")
console.log(oddNums())



// b. Convert all the strings to title caps in a string array
const titleCase = () => {
    let str = "i will learn anonymous functions today"
    str = str.split(" ")
    for (let i = 0; i < str.length; i++)
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
    return str.join(" ")
}
console.log("\nConvert all the strings to title caps in a string array")
console.log(titleCase())



// c. Sum of all numbers in an array
const summOfArr = () => {
    let arr = [11, 12, 13, 14, 15]
    let sum = 0
    arr.map((x) => sum = x + sum)
    return sum
}
console.log("\nSum of all numbers in an array")
console.log(summOfArr())



// d. Return all the prime numbers in an array
const primesInArr = () => {
    let arr = [11, 12, 13, 14, 15]
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            console.log(arr[i])
        }
    }
    return ""
}
const isPrime = (n) => {
    if (n != 1 && n != 0) {
        for (let i = 2; i <= n / 2; i++) {
            if (n % i === 0) {
                return false;
            }
        };
        return n;
    }
    return false
}
console.log("\nReturn all the prime numbers in an array")
console.log(primesInArr())



// e. Return all the palindromes in an array
const palindromeInArr = () => {
    let arr = ["aba", "bbabb", "cdde", "exe"]
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            console.log(arr[i])
        }
    }
    return ""
}
const isPalindrome = (data) => {
    if (data.length <= 1) return true
    if (data[0] !== data[data.length - 1]) return false

    return isPalindrome(data.slice(1, -1));
}
console.log("\nReturn all the palindromes in an array")
console.log(palindromeInArr())