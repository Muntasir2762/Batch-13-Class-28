
// let i =10;
// for(i=0; i<=10; i++){    
//     console.log(i);  
//     console.log(i);
// }

// let i = 10;

// console.log(--i);

// console.log(i--);
// console.log(i);


// let marks = [45, 50, 80, 50, 56, 70, 54, 90, 78, 20];
//              0,   1,  2,  3,   4, 5,  6,  7,  8,  9
//              console.log(marks[0]);
//              console.log(marks[1]);
// let arrayLength = marks.length;

// for (let i=0; i<arrayLength; i++){

//     if(marks[i] > 32){
//         console.log(marks[i]+'=Pass');
//     }

//     else{
//         console.log(marks[i]+'=Fail');
//     }
// }


let number = [20, 30, 40, 47, 42, 52, 43, 69, 475, 100, 130,500, 343];

let numberLength = number.length;

//20%2==0 (Even)/(Odd);
for (let i=0; i<numberLength; i++){
    let remainder = number[i]%2;//numlber[0]/20%2==0; number[1]/30%2==0; number[3]/47%2==1

    if(remainder==0){
        console.log(number[i]+'=Even');
    }
    else{
        console.log(number[i]+'=Odd');
    }
}

