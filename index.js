// code your solution h
function superbowlWin(array) {
    const win = array.find(obj => obj.result === "W");
    return win ? win.year : undefined;
}

const games = [
    { year: 2019, result: "L" },
    { year: 2020, result: "W" },
    { year: 2021, result: "L" }
];

console.log(superbowlWin(games)); 


