function sleep_in(weekday,vacation) {
    var sleepy = !weekday || vacation;
    return sleepy;
}

//write second method


//add 2-10 below here...

function monkey_trouble(a_smile, b_smile){

    var bruh = a_smile && b_smile || !a_smile && !b_smile;

    return bruh;
}


function string_times(x, num){
    var line = "";

    for(var i = 0; i < num; i++){
        line += x;
    }
    return line;

}

function front_times(word, num){
    var line = "";
    var someword = word.slice(0,3)
    for(var i = 0; i < num; i++){
        line += someword;
    }
    return line;
}


function string_bits(word) {
    var newString = "";
    for (var i = 0; i < word.length; i++) {
        if(i % 2 == 0){

            newString += word.substring(i, i + 1)

        }

    }

    return newString;
}


function caughtSpeeding(speed, birthday) {
    var ticket = "";
    if (birthday == true) {
        speed -= 5;
    }
    if (speed <= 60) {
        ticket = 0;
    } else {
        if (speed >= 81) {
            ticket = 2;
        } else {
            ticket = 1;
        }
    }
    return ticket;
}
function fizz_buzz(num) {
    var fizz_buzz = "";
    if (num % 3 == 0 && num % 5 == 0) {
        fizz_buzz = "FizzBuzz";
    }else if(num%3==0){
        fizz_buzz = "Fizz"
    }else if(num%5==0){
        fizz_buzz = "Buzz"
    } else {
        fizz_buzz = num + "!"
    }
    return fizz_buzz;
}

function teaParty(candy, tea){
    var decide = "";
    if(candy < 5|| tea < 5){
        decide = 0
    } else if(candy >= tea*2 || tea >= candy*2){
        decide = 2
    } else if(candy >= 5 && tea >= 5){
        decide = 1
    }
    return decide;
}
function blackjack(num1, num2){
    var blackjack = "";
    if(num1 > 21){
        num1 = 0;
    }
    if(num2 > 21){
        num2 = 0;
    }
    if(num1 > num2){
        blackjack = num1;
    } else {
        blackjack = num2;
    }
    return blackjack;
}
function loneSum(num1, num2, num3){
    var num1x = num1;
    var num2x = num2;
    var num3x = num3;
    if(num1 == num2){
        num1x = 0;
        num2x = 0;
    }
    if(num2 == num3){
        num3x = 0;
        num2x = 0;
    }
    if(num1 == num3){
        num1x = 0;
        num3x = 0;
    }
    var sum = num1x + num2x + num3x;
    return sum;
}

//add 2-10 below here...

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times(brother, 4);
    document.getElementById("output").innerHTML += front_times(brother, 4);
    document.getElementById("output").innerHTML += string_bits(brother);
    document.getElementById("output").innerHTML += caughtSpeeding(70, false);
    document.getElementById("output").innerHTML += fizz_buzz(15);
    document.getElementById("output").innerHTML += teaParty(6, 13);
    document.getElementById("output").innerHTML += blackjack(6, 13);
    document.getElementById("output").innerHTML += loneSum(1, 1, 1);
    //test third method, etc
}