//The return keyword

//Example-1
function sum(a,b){
    return a + b;
    console.log(12+22); //returnden sonrasını sallamıyor.
}
console.log(sum(10, 12));

let sumNums = sum(10,12);
console.log(sumNums);

//Example-2
function checkScore(currentScore, passingScore){
    if(currentScore >= passingScore){
        return 'Passed'
    } else {
        return 'Failed'
    }
}

//let result = checkScore(45,70);
//let result = checkScore(70,70);
let result = checkScore(74,70);
console.log(result);







