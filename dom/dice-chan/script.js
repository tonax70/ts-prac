function dicePic (times) {
    let arr = [];
    let randomNum = 0;

    for (let i = 0; i < times; i++) {
        randomNum = Math.floor(Math.random()*6)+1;
        arr.push(`./images/dice${randomNum}.png`);
    }

    return arr;
}

function setDice (times) {
    let arr = [...dicePic(times)];
        console.log(arr);
    for (let i = 0; i < times; i++) {
        document.getElementsByClassName("dice")[i].getElementsByTagName("img")[0].setAttribute("src", arr[i]);
    }
}