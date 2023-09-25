function reverseNum(num) {
    const reversedStr= num.toString().split('').reverse().join('');
    const reversedNum = parseFloat(reversedStr);

    return reversedNum;
}

console.log(reverseNum(32243))