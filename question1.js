// a. Print odd numbers in an array
var oddNums = function () {
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
console.log(
    (function () {
        let arr = [11, 12, 13, 14, 15]
        let result = ""
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 1) {
                result = result + arr[i] + " "
            }
        }
        return result.trim()
    })()
)


// b. Convert all the strings to title caps in a string array
var titleCase = function () {
    let str = "i will learn anonymous functions today"
    str = str.split(" ")
    for (let i = 0; i < str.length; i++)
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
    return str.join(" ")
}
console.log("\nConvert all the strings to title caps in a string array")
console.log(titleCase())
console.log(
    (function () {
        let str = "i will learn anonymous functions today"
        str = str.split(" ")
        for (let i = 0; i < str.length; i++)
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
        return str.join(" ")
    })()
)


// c. Sum of all numbers in an array
var summOfArr = function () {
    let arr = [11, 12, 13, 14, 15]
    let sum = 0
    arr.map((x) => sum = x + sum)
    return sum
}
console.log("\nSum of all numbers in an array")
console.log(summOfArr())
console.log(
    (function () {
        let arr = [11, 12, 13, 14, 15]
        let sum = 0
        arr.map((x) => sum = x + sum)
        return sum
    })()
)


// d. Return all the prime numbers in an array
var primesInArr = function () {
    let arr = [11, 12, 13, 14, 15]
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            console.log(arr[i])
        }
    }
    return ""
}
var isPrime = function (n) {
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
console.log(
    (function () {
        let arr = [11, 12, 13, 14, 15]
        for (let i = 0; i < arr.length; i++) {
            if (isPrime(arr[i])) {
                console.log(arr[i])
            }
        }
        return ""
    })()
)



// e. Return all the palindromes in an array
var palindromeInArr = function () {
    let arr = ["aba", "bbabb", "cdde", "exe"]
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            console.log(arr[i])
        }
    }
    return ""
}
var isPalindrome = function (data) {
    if (data.length <= 1) return true
    if (data[0] !== data[data.length - 1]) return false

    return isPalindrome(data.slice(1, -1));
}
console.log("\nReturn all the palindromes in an array")
console.log(palindromeInArr())
console.log(
    (function () {
        let arr = ["aba", "bbabb", "cdde", "exe"]
        for (let i = 0; i < arr.length; i++) {
            if (isPalindrome(arr[i])) {
                console.log(arr[i])
            }
        }
        return ""
    })()
)



// f. Return median of two sorted arrays of same size
var medianOf2SortedArr = function () {
    let arr1 = [1, 2, 3, 11, 13]
    let arr2 = [7, 8, 9, 15, 18]
    arr1 = arr1.concat(arr2).sort((a, b) => a - b)
    if (arr1.length % 2 == 0) {
        return (arr1[arr1.length / 2] + arr1[(arr1.length / 2) - 1]) / 2
    }
    else {
        return arr1[Math.ceil(arr1.length / 2)]
    }
}
console.log("\nReturn median of two sorted arrays of same size")
console.log(medianOf2SortedArr())
console.log(
    (function () {
        let arr1 = [1, 2, 3, 11, 13]
        let arr2 = [7, 8, 9, 15, 18]
        arr1 = arr1.concat(arr2).sort((a, b) => a - b)
        if (arr1.length % 2 == 0) {
            return (arr1[arr1.length / 2] + arr1[(arr1.length / 2) - 1]) / 2
        }
        else {
            return arr1[Math.ceil(arr1.length / 2)]
        }
    })()
)


// g. Remove duplicates from an array
var removeDuplicates = function () {
    let arr = [1, 2, 3, 11, 1]
    return [...new Set(arr)]
}
console.log("\nRemove duplicates from an array")
console.log(removeDuplicates())
console.log(
    (function () {
        let arr = [1, 2, 3, 11, 1]
        return [...new Set(arr)]
    })()
)


// h. Rotate an array by k times
var rotateArr = function () {
    let k = 2
    let arr = [1, 2, 3, 11, 20]
    for (let i = 0; i < k; i++) {
        arr.push(arr.shift())
    }
    return arr
}
console.log("\nRotate an array by k times")
console.log(rotateArr())
console.log(
    (function () {
        let k = 2
        let arr = [1, 2, 3, 11, 20]
        for (let i = 0; i < k; i++) {
            arr.push(arr.shift())
        }
        return arr
    })()
)


