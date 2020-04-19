// Add your code here

function divisible(int){
  var result = [];
  // using a for loop we loop and push the numbers from 1 to the given integer into an empty array
    for(let i = 1; i <= int;i ++){
      result.push(i);
// using the findIndex method of arrays we find the exact numbers that fit the conditions for replacement
// i.e divisible by 2,3,5 all or not divisible by them

// this first line checks if the values in the array fits the condition of divisible by 2,3,5 and so on down the code.
      var newRes1 = result.findIndex((val) =>{
      if(val % 2 == 0 && val % 3 == 0 && val % 5 == 0){
      result.splice(newRes1,i,"yu-gi-oh");
      }
      });
        var newRes2 = result.findIndex((val) =>{
        if(val % 2 == 0  && val % 3 == 0 ){
          result.splice(newRes2,i,"yu-gi");
        }
      });
        var newRes3 = result.findIndex((val) =>{
        if(val % 2 == 0  && val % 5 == 0 ){
          result.splice(newRes3,i,"yu-oh");
        }
      });
      var newRes4 = result.findIndex((val) =>{
      if(val % 3 == 0  && val % 5 == 0 ){
      result.splice(newRes4,i,"gi-oh");
      }
      });     
      var newRes5 = result.findIndex((val) =>{
        if(val % 2 == 0 ){
          result.splice(newRes5,i,"yu");
        }
      });
      var newRes6 = result.findIndex((val) =>{
        if(val % 3 == 0 ){
          result.splice(newRes6,i,"gi");
        }
      });
       var newRes7 = result.findIndex((val) =>{
        if(val % 5 == 0 ){
          result.splice(newRes7,i,"0h");
        }
      });
      }

console.log(result);
}
divisible(100);
divisible(50);