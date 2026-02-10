function rollDice (times:number) : number[]{
    let dice:number[] = [];

    for (let i = 0; i < times; i++){
        dice.push(Math.floor(Math.random() * 6)+1);
    }
    return dice;
}

function decideWinner(players:number) : string {
    let winners:number[] = [];
    const dices = rollDice(players);
    dices.forEach((value, index) => {
        if (Math.max(...dices) === value) winners.push(index + 1);
    });
    return `Rolled ${JSON.stringify(dices)}. Player ${winners.join(" and ")} won`;
}

console.log(decideWinner(5));