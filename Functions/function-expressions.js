// //Function Expressions

// let calcNums = function (z,w){
//     return (z+w) /(z-w);
// };
// console.log(calcNums(6, 5));
// console.log(calcNums(2, 3));
// console.log(calcNums(10, 2));
// console.log(calcNums(4, 2));

//Function in arrays and objects
function avgMikeScore(score, mikeScore){
    return (mikeScore + 5) /score;
};

let avgJoeScore = function (score, joeScore) {
      return joeScore /score;
};

// const scores = [avgMikeScore, avgJoeScore];

// // console.log(scores)

//  for(let i=0; i < scores.length; i++){
//      let result = scores[i](100,20);
//      console.log(result);
// };


// // for of loop
// for(let avgScore of scores){
//     let result = avgScore(100,20);
//     console.log(result);
// };

//Functions as Objects Properties

const scores ={
    mikeScore: avgMikeScore,
    joeScore: avgJoeScore,
};

console.log(scores.mikeScore(100,20));
console.log(scores.joeScore(50,10));







