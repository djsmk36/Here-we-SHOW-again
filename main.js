const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

let documentBody = document.querySelector("body")


//KATAS
//#1
let Kata1Div = document.createElement(`div`);
Kata1Div.classList.add(`KataDiv`)
documentBody.append(Kata1Div)
let Kata1Title = document.createElement(`h1`);
Kata1Title.classList.add(`KataTitle`)
Kata1Title.append("Kata #1")
Kata1Div.append(Kata1Title)

for (let index1 = 1; index1  <= 20; index1++) {
    let currentNumber = index1;
    Kata1Div.append(`${currentNumber}, `)
    
}

//#2
let Kata2Div = document.createElement(`div`);
Kata2Div.classList.add(`KataDiv`)
documentBody.append(Kata2Div)
let Kata2Title = document.createElement(`h1`);
Kata2Title.classList.add(`KataTitle`)
Kata2Title.append("Kata #2")
Kata2Div.append(Kata2Title)

for (let index2 = 2; index2 <= 20; index2 += 2) {
    let currentNumber = index2;
    Kata2Div.append(`${currentNumber}, `)
}

//#3
let Kata3Div = document.createElement(`div`);
Kata3Div.classList.add(`KataDiv`)
documentBody.append(Kata3Div)
let Kata3Title = document.createElement(`h1`);
Kata3Title.classList.add(`KataTitle`)
Kata3Title.append("Kata #3")
Kata3Div.append(Kata3Title)

for (let index3 = 1; index3 <= 20; index3 += 2) {
    let currentNumber = index3;
    Kata3Div.append(`${currentNumber}, `)
}

//#4
let Kata4Div = document.createElement(`div`);
Kata4Div.classList.add(`KataDiv`)
documentBody.append(Kata4Div)
let Kata4Title = document.createElement(`h1`);
Kata4Title.append("Kata #4")
Kata4Title.classList.add(`KataTitle`)
Kata4Div.append(Kata4Title)

for (let index4 = 5; index4 <= 100; index4 += 5) {
    let currentNumber = index4;
    Kata4Div.append(`${currentNumber}, `)
}

//#5
let Kata5Div = document.createElement(`div`);
Kata5Div.classList.add(`KataDiv`)
documentBody.append(Kata5Div)
let Kata5Title = document.createElement(`h1`);
Kata5Title.classList.add(`KataTitle`)
Kata5Title.append("Kata #5")
Kata5Div.append(Kata5Title)

for (let index5 = 1; index5 <= 10; index5++) {
    let currentSquare = index5 * index5;
    Kata5Div.append(`${currentSquare}, `)
}

//#6
let Kata6Div = document.createElement(`div`);
Kata6Div.classList.add(`KataDiv`)
documentBody.append(Kata6Div)
let Kata6Title = document.createElement(`h1`);
Kata6Title.classList.add(`KataTitle`)
Kata6Title.append("Kata #6")
Kata6Div.append(Kata6Title)

for (let index6 = 20; index6 >= 1; index6 -- ) {
    let currentNumber = index6;
    Kata6Div.append(`${currentNumber}, `)
}

//#7
let Kata7Div = document.createElement(`div`);
Kata7Div.classList.add(`KataDiv`)
documentBody.append(Kata7Div)
let Kata7Title = document.createElement(`h1`);
Kata7Title.classList.add(`KataTitle`)
Kata7Title.append("Kata #7")
Kata7Div.append(Kata7Title)

for (let counteven = 20; counteven >= 2; counteven -= 2) {
    let evenNum = counteven;
    Kata7Div.append(evenNum + ' , ')
}

//#8
let Kata8Div = document.createElement(`div`);
Kata8Div.classList.add(`KataDiv`)
documentBody.append(Kata8Div)
let Kata8Title = document.createElement(`h1`);
Kata8Title.classList.add(`KataTitle`)
Kata8Title.append("Kata #8")
Kata8Div.append(Kata8Title)

for (let counteven = 19; counteven >= 1; counteven -= 2) {
    let evenNum = counteven;
    Kata8Div.append(evenNum + ' , ')
}

//#9
let Kata9Div = document.createElement(`div`);
Kata9Div.classList.add(`KataDiv`)
documentBody.append(Kata9Div)
let Kata9Title = document.createElement(`h1`);
Kata9Title.classList.add(`KataTitle`)
Kata9Title.append("Kata #9")
Kata9Div.append(Kata9Title)

for (let index9 = 100; index9 >= 5; index9 -= 5) {
    let currentNumber = index9;
    Kata9Div.append(`${currentNumber}, `)
}

//#10
let Kata10Div = document.createElement(`div`);
Kata10Div.classList.add(`KataDiv`)
documentBody.append(Kata10Div)
let Kata10Title = document.createElement(`h1`);
Kata10Title.classList.add(`KataTitle`)
Kata10Title.append("Kata #10")
Kata10Div.append(Kata10Title)

for (let index5 = 10; index5 >= 1; index5--) {
    let currentSquare = index5 * index5;
    Kata10Div.append(`${currentSquare}, `)
}

//#11
let Kata11Div = document.createElement(`div`);
Kata11Div.classList.add(`KataDiv`)
documentBody.append(Kata11Div)
let Kata11Title = document.createElement(`h1`);
Kata11Title.classList.add(`KataTitle`)
Kata11Title.append("Kata #11")
Kata11Div.append(Kata11Title)

for (let index11 = 0; index11 <= sampleArray.length; index11++){
    if (sampleArray[index11] % 2 === 0){
        Kata11Div.append(sampleArray[index11] + ' ,')
    }
}

//#12
let Kata12Div = document.createElement(`div`);
Kata12Div.classList.add(`KataDiv`)
documentBody.append(Kata12Div)
let Kata12Title = document.createElement(`h1`);
Kata12Title.classList.add(`KataTitle`)
Kata12Title.append("Kata #12")
Kata12Div.append(Kata12Title)

for (let index12 = 0; index12 <= sampleArray.length; index12++){
    if (sampleArray[index12] % 2 === 0){
        Kata12Div.append(sampleArray[index12] + ' ,')
    }
}

//#13
let Kata13Div = document.createElement(`div`);
Kata13Div.classList.add(`KataDiv`)
documentBody.append(Kata13Div)
let Kata13Title = document.createElement(`h1`);
Kata13Title.classList.add(`KataTitle`)
Kata13Title.append("Kata #13")
Kata13Div.append(Kata13Title)

for (let index13 = 0; index13 <= sampleArray.length; index13++){
    if (sampleArray[index13] % 2 === 0){
        Kata13Div.append(sampleArray[index13] + ' ,')
    }
}

//#14
let Kata14Div = document.createElement(`div`);
Kata14Div.classList.add(`KataDiv`)
documentBody.append(Kata14Div)
let Kata14Title = document.createElement(`h1`);
Kata14Title.classList.add(`KataTitle`)
Kata14Title.append("Kata #14")
Kata14Div.append(Kata14Title)

for (let index14 = 0; index14 <= sampleArray.length; index14++){
    if (sampleArray[index14] % 2 === 0){
        Kata14Div.append(sampleArray[index14] + ' ,')
    }
}

//#15
let Kata15Div = document.createElement(`div`);
Kata15Div.classList.add(`KataDiv`)
documentBody.append(Kata15Div)
let Kata15Title = document.createElement(`h1`);
Kata15Title.classList.add(`KataTitle`)
Kata15Title.append("Kata #15")
Kata15Div.append(Kata15Title)

let currentNumber = 0
for (let index15 = 1; index15 <= 20; index15++){
    currentNumber = currentNumber + index15;
    Kata15Div.append(currentNumber + ' ,')
}



//#16
let Kata16Div = document.createElement(`div`);
Kata16Div.classList.add(`KataDiv`)
documentBody.append(Kata16Div)
let Kata16Title = document.createElement(`h1`);
Kata16Title.classList.add(`KataTitle`)
Kata16Title.append("Kata #16")
Kata16Div.append(Kata16Title)

for (let index16 = 0; index16 <= sampleArray.length; index16++){
    if (sampleArray[index16] % 2 === 0){
        Kata16Div.append(sampleArray[index16] + ' ,')
    }
}




//#17
let Kata17Div = document.createElement(`div`);
Kata17Div.classList.add(`KataDiv`)
documentBody.append(Kata17Div)
let Kata17Title = document.createElement(`h1`);
Kata17Title.classList.add(`KataTitle`)
Kata17Title.append("Kata #17")
Kata17Div.append(Kata17Title)

for (let index17 = 0; index17 <= sampleArray.length; index17++){
    if (sampleArray[index17] % 2 === 0){
        Kata17Div.append(sampleArray[index17] + ' ,')
    }
}





//#18
let Kata18Div = document.createElement(`div`);
Kata18Div.classList.add(`KataDiv`)
documentBody.append(Kata18Div)
let Kata18Title = document.createElement(`h1`);
Kata18Title.classList.add(`KataTitle`)
Kata18Title.append("Kata #18")
Kata18Div.append(Kata18Title)

for (let index18 = 0; index18 <= sampleArray.length; index18++){
    if (sampleArray[index18] % 2 === 0){
        Kata18Div.append(sampleArray[index18] + ' ,')
    }
}