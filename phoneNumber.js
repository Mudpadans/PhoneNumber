const phoneNumGenerator = (arr) => {
    let shuffledArr = arr.length, randomIndex;
    newPhoneNum = ""

    while (shuffledArr != 0) {
        randomIndex = Math.floor(Math.random() * shuffledArr);
        shuffledArr--;

        [arr[shuffledArr], arr[randomIndex]] = [arr[randomIndex], arr[shuffledArr]];
    }
    newPhoneNum = `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
    return newPhoneNum
}


let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(phoneNumGenerator(arr))