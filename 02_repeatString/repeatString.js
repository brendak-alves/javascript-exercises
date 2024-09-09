function getRandomInt() {
    return Math.floor(Math.random() *999);
}

const repeatString = function(string, num) {
    string;
    +num;

    let result = "";

    if (num < 0) {
        result = 'ERROR';
    }

    for (let i = 1; i <= num; i++) {
        result += string;

    }

    return result;
 
};

repeatString('', 10);

// Do not edit below this line
module.exports = repeatString;
