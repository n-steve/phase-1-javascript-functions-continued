function saturdayFun(string = "roller-skate") {
    return (`This Saturday, I want to ${string}!`);

}

function mondayWork(string = "go to the office") {
    return (`This Monday, I will ${string}.`);
}



function wrapAdjective(wrap = ("*")) {

    return (function (string = "special") {
        return ("You are " + wrap + string + wrap + "!");
    });
}



