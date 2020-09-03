const parentElement= document.querySelector('.katas-list')

//kata1 
const kata1heading=document.createElement('h3')
const kata1Results=document.createElement('p')
parentElement.append(kata1heading)
parentElement.append(kata1Results)

kata1heading.append('KATA 1' )

for (let counter1=1; counter1 <=20; counter1+=1){ 
    kata1Results.append(counter1 + ', ')
  }

//kata2 
const kata2heading=document.createElement('h3')
const kata2Results=document.createElement('p')
parentElement.append(kata2heading)
parentElement.append(kata2Results)

kata2heading.append('KATA 2' )

for(let counter2=2; counter2<=20; counter2 +=2){
    kata2Results.append(counter2 + ', ')
  } 

//kata3 
const kata3heading=document.createElement('h3')
const kata3Results=document.createElement('p')
parentElement.append(kata3heading)
parentElement.append(kata3Results)

kata3heading.append('KATA 3' )

for(let counter3=1; counter3<=19; counter3 +=2){
    kata3Results.append(counter3 + ', ')
  } 

//kata4 
const kata4heading=document.createElement('h3')
const kata4Results=document.createElement('p')
parentElement.append(kata4heading)
parentElement.append(kata4Results)

kata4heading.append('KATA 4' )

for(let counter4=5; counter4<=100; counter4 +=5){
    kata4Results.append(counter4 + ', ')
  } 

//kata 5
const kata5heading=document.createElement('h3')
const kata5Results=document.createElement('p')
parentElement.append(kata5heading)
parentElement.append(kata5Results)

kata5heading.append('KATA 5' )

//number is passed - if statement only displays sq NO#
for(let counter5=1; counter5<=100; counter5 +=1){
    const perfectSquare=Number.isInteger(Math.sqrt(counter5))

    if (perfectSquare){
kata5Results.append(counter5 + ', ')
    }
  } 

//kata 6
const kata6heading=document.createElement('h3')
const kata6Results=document.createElement('p')
parentElement.append(kata6heading)
parentElement.append(kata6Results)

kata6heading.append('KATA 6' )

for(let counter6=20; counter6>=1; counter6 -=1){
kata6Results.append(counter6 + ', ')
} 

//kata 7
const kata7heading=document.createElement('h3')
const kata7Results=document.createElement('p')
parentElement.append(kata7heading)
parentElement.append(kata7Results)

kata7heading.append('KATA 7' )

for(let counter7=20; counter7>=1; counter7 -=2){
kata7Results.append(counter7 + ', ')
  } 

//kata 8
const kata8heading=document.createElement('h3')
const kata8Results=document.createElement('p')
parentElement.append(kata8heading)
parentElement.append(kata8Results)

kata8heading.append('KATA 8' )

for(let counter8=19; counter8>=1; counter8 -=2){
kata8Results.append(counter8 + ', ')
  } 

//kata 9
const kata9heading=document.createElement('h3')
const kata9Results=document.createElement('p')
parentElement.append(kata9heading)
parentElement.append(kata9Results)

kata9heading.append('KATA 9' )

for(let counter9=100; counter9>=5; counter9 -=5){
kata9Results.append(counter9 + ', ')
  } 

//kata 10
const kata10heading=document.createElement('h3')
const kata10Results=document.createElement('p')
parentElement.append(kata10heading)
parentElement.append(kata10Results)

kata10heading.append('KATA 10' )

for(let counter10=100; counter10>=1; counter10 -=1){
    const perfectSquareBack=Number.isInteger(Math.sqrt(counter10))
if(perfectSquareBack)
    kata10Results.append(counter10 + ', ')
  }
  
//kata 11
const kata11heading=document.createElement('h3')
const kata11Results=document.createElement('p')
parentElement.append(kata11heading)
parentElement.append(kata11Results)

kata11heading.append('KATA 11' )

const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

for(let counter11=0; counter11<sampleArray.length; counter11 +=1){
    kata11Results.append(sampleArray[counter11] + ', ')
  }
  

//kata 12
const kata12heading=document.createElement('h3')
const kata12Results=document.createElement('p')
parentElement.append(kata12heading)
parentElement.append(kata12Results)

kata12heading.append('KATA 12' )

for(let counter12=0; counter12<sampleArray.length; counter12 +=1){
    if(sampleArray[counter12]%2===0){
    kata12Results.append(sampleArray[counter12] + ', ')
    }
  }

//kata 13
const kata13heading=document.createElement('h3')
const kata13Results=document.createElement('p')
parentElement.append(kata13heading)
parentElement.append(kata13Results)

kata13heading.append('KATA 13' )

for(let counter13=0; counter13<sampleArray.length; counter13 +=1){
    if(sampleArray[counter13]%2!==0){
    kata13Results.append(sampleArray[counter13] + ', ')
    }
  }

  //kata 14
const kata14heading=document.createElement('h3')
const kata14Results=document.createElement('p')
parentElement.append(kata14heading)
parentElement.append(kata14Results)

kata14heading.append('KATA 14' )

for(let counter14=0; counter14<sampleArray.length; counter14 +=1){
    
    kata14Results.append(sampleArray[counter14] + sampleArray[counter14] + ', ')
    }
  
  //kata 15
  const kata15heading=document.createElement('h3')
  const kata15Results=document.createElement('p')
  parentElement.append(kata15heading)
  parentElement.append(kata15Results)
  let sum=0
  kata15heading.append('KATA 15' )
  
  for(let counter15=1; counter15<=20; counter15 +=1){
      sum+=counter15
      }
kata15Results.append(sum)

//kata 16
  const kata16heading=document.createElement('h3')
  const kata16Results=document.createElement('p')
  parentElement.append(kata16heading)
  parentElement.append(kata16Results)
  let sumArr=0

  kata16heading.append('KATA 16' )
  
  for(let counter16=0; counter16<sampleArray.length; counter16 +=1){
      sumArr+=sampleArray[counter16]
      } 
     kata16Results.append(sumArr)

     //kata 17
  const kata17heading=document.createElement('h3')
  const kata17Results=document.createElement('p')
  parentElement.append(kata17heading)
  parentElement.append(kata17Results)

  kata17heading.append('KATA 17' )

      let minNum=Math.min(...sampleArray)
      
     kata17Results.append(minNum)

        //kata 18
  const kata18heading=document.createElement('h3')
  const kata18Results=document.createElement('p')
  parentElement.append(kata18heading)
  parentElement.append(kata18Results)

  kata18heading.append('KATA 18' )

      let maxNum=Math.max(...sampleArray)
      
     kata18Results.append(maxNum)