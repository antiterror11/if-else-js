//first
let ism = prompt("ismingizni kiriting")
let parol = prompt("endi esa parolni")
if(ism == "admin" && parol == "1234"){
    console.log(`xush kelibsiz admin`)
}else{
    console.log(`xato`)
}

//second
let year = +prompt("please enter a year")
if(year % 4 === 0 && year % 100 !== 0){
    console.log(`this is a leap year`)
}else{
    console.log(`this is not a leap year`)
}

//third
let Fnum = +prompt("please enter a plus number")
let Snum = +prompt("now enter the second number")

if(Fnum > 0 && Snum > 0){
    console.log(`these numbers are plus`)
}else{
    console.log(`these numbers are minus`)
}

//fourth
let num = +prompt(`please enter a couple number`)
if(num % 2 === 0){
    console.log(`this is a couple number`)
}else{
    console.log(`this is not a couple number`)
}

//fifth
let num = +prompt("please enter a number")
if(num % 3 === 0 && num % 7 === 0){
    console.log(`bu ham 7 ga ham 3 ga karrali son`)
}else if(num % 3 === 0){
    console.log(`bu faqat 3 ga karrali son`)
}else if(num % 7 === 0){
    console.log(`bu faqat 7 ga karrali son`)
}else{
    console.log(`bu 3 ga ham 7 ga ham karrali son emas`)
}

//sixth
let ball = [63, 71, 92];
for (let i = 0; i < ball.length; i++) {
    if (ball[i] >= 55 && ball[i] <= 70) {
        console.log(ball[i], `bahoingiz 3`);
    } else if (ball[i] > 70 && ball[i] < 88) {
        console.log(ball[i], `bahoingiz 4`);
    } else if (ball[i] >= 88 && ball[i] <= 100) {
        console.log(ball[i], `bahoingiz 5`);
    } else {
        console.log(ball[i], `siz testdan o'tolmadingiz`);
    }
}
