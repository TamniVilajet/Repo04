function main() {
    // Only change code below this line
    var firstNum = 6;
    var secondNum = 25;
    var thirdNum = 5.2;
    firstNum*=9;
    secondNum/=5;
    thirdNum*=10;
    // Variable declarations
    return {
        firstNum,
        secondNum,
        thirdNum
    };
}

console.log(main());
module.exports = main;