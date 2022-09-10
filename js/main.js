
let arr = [];
let count = 0;

function sumInput() {
  for (;;) {
    var sum = +prompt("son kiriting")  ;
    if (sum == "" || sum == "") {
     break;
    }
     else  {
        
    count += sum;
    arr.push(sum);
    console.log(arr);
      
    }
  }

}
sumInput()
alert(count)

//let salaries = {
// 	"Akmal": 1200,
// 	"Salim": 5200,
// 	"Karima": 1800
// }
// let sum = 0;
// function sumSalaries(salaries){
//     let values = Object.values(salaries)
//     for (let key of values) {

//         console.log(key);
//         sum += key;
//     }
//     return sum ;

// }
// alert(sumSalaries(salaries));
