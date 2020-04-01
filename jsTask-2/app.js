let data = [
  { Principal:2500,time:1.8},
  {Principal:1000,time:5},
  {Principal:3000,time:1},
  {Principal:2000,time:3}
];
const interestCalculator=(arr)=>{
  let rate;
  let interest;
  let interestData = [];
  arr.forEach((item)=>{
    if(item.Principal >= 2500 && item.time > 1 && item.time < 3){
      rate = 3;
    }else if(item.Principal >= 2500 && item.time >= 3){
      rate = 4;
    }else if(item.Pricipal < 2500 || item.time <= 1){
      rate = 2;
    }else{
      rate = 1;
    }
    interest = (item.Principal * rate * item.time)/100;
    interestData.push({Principal:item.Principal,time:item.time,rate:rate,interest:interest});
    console.log(interestData);
    return;
  });
return interestData;
}
// function called with the data array as argurment
interestCalculator(data);
