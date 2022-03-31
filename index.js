const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const chars = {
    a: "4",
    b: "I3",
    c: "c",
    d: "d",
    e: "3",
    f: "|=",
    g: "6",
    h: "h",
    i: "1",
    j: "j",
    k: "k",
    l: "1",
    m: "/\\/\\",
    n: "n",
    o: "0",
    p: "p",
    q: "q",
    r: "r",
    s: "5",
    t: "7",
    u: "u",
    v: "\\/",
    w: "\\v/",
    x: "}{",
    y: "y",
    z: "2",
};

const convertToLeet = (str) => {
    const split = str.toLowerCase().replaceAll(" ", "").split("");
    let endString = [];

    if (str.includes(" ")) {
        return "No spaces allowed";
    }

    split.forEach((letter) => {
        endString.push(chars[letter]);
    });

    return "".concat(endString).replaceAll(",", "");
};

rl.question("Type string to convert to Leet:\n", (input) => {
    console.log(`Your string: ${convertToLeet(input)}`);

    process.exit(0);
});
