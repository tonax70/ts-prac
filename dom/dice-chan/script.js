let data = [];

function dicePic (times) {
    let arr = [];
    let randomNum = 0;

    for (let i = 0; i < times; i++) {
        randomNum = Math.floor(Math.random()*6)+1;
        data.push(randomNum);
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
const decide = (str) => document.getElementsByTagName("h3")[0].innerHTML = str;

function chooseWinner () {
  setDice(3);

  if (data[0] === data[1] && data[1] === data[2]) {
    decide("All 3 players won!")
  } else if (data[0] === data[1]) {
    if (data[2] > data[1]) decide("Player 3 won")
    else decide("Player 1 and 2 won");
  } else if (data[1] === data[2]) {
    if (data[0] > data[1]) decide("Player 1 won")
    else decide("Player 2 and 3 won");
  } else if (data[0] === data[2]) {
    if (data[1] > data[0]) decide("Player 2 won")
    else decide("Player 1 and 3 won");
  } else {
    let max = Math.max(...data);

    if (data[0] === max) decide("Player 1 won")
    else if (data[1] === max) decide("Player 2 won")
    else decide("Player 3 won");
  }
}

window.addEventListener("DOMContentLoaded", () => {
chooseWinner();
});
