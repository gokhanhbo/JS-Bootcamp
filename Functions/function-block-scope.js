// Variable Function Scope
/* variable declarations
let
const
var
*/

// // let
// function myFunc(){
//     let myName = 'Gokhan'
//     console.log(myName); //fonksiyonun scope'unda kaldığı için çalışır.
// }
// myFunc();
// console.log(myName); //fonksiyonun scope'undan çıktığın için hata alırsın

// // const
// function myFunc(){
//     const myName = 'Gokhan'
//     console.log(myName); //fonksiyonun scope'unda kaldığı için çalışır.
// }
// myFunc();
// console.log(myName); //fonksiyonun scope'undan çıktığın için hata alırsın


// // var
// function myFunc(){
//     var myName = 'Gokhan'
//     console.log(myName); //fonksiyonun scope'unda kaldığı için çalışır.
// }
// myFunc();
// console.log(myName); //fonksiyonun scope'undan çıktığın için hata alırsın


// // let
// if (2>1 && 3<5){
//     let result = true;
//     console.log(result); //fonksiyonun scope'unda kaldığı için çalışır.
// }
// console.log(result); //fonksiyonun scope'undan çıktığın için hata alırsın

// // const
// if (2>1 && 3<5){
//     const result = true;
//     console.log(result);  //fonksiyonun scope'unda kaldığı için çalışır.
// }
// console.log(result); //fonksiyonun scope'undan çıktığın için hata alırsın

// // var
var result = 15; // var'ı önceden tanımlamamıza rağmen if döngüsünde (en son) tanımlandığı değeri alıyor.
if (2>1 && 3<5){
    var result = true;
    console.log(result); //fonksiyonun scope'unda kaldığı için çalışır.
}
console.log(result); //===> var ile buradan çıkabilirsin... bu kodu karıştıracağı için tercih etmiyoruz.

