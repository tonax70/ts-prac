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
    const maxVal = Math.max(...dices);
    dices.forEach((value, index) => {
        if (maxVal === value) winners.push(index + 1);
    });
    return `Rolled ${JSON.stringify(dices)}. Player ${winners.join(" and ")} won`;
}

function decideWinnerBest(players: number): string {
    const dices = rollDice(players);
    const max = Math.max(...dices);

    const winners = dices
        .map((v, i) => v === max ? i + 1 : null)
        .filter((v): v is number => v !== null);

    return `Rolled ${JSON.stringify(dices)}. Player ${winners.join(" and ")} won`;
}

console.log(decideWinnerBest(5000));