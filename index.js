// Code your solution in this file!


function distanceFromHqInBlocks(block){
  if(block>42)
  {
  return block -  42;

  }else{
    return 42 - block;
  }
  
  }
  
  
  
function distanceFromHqInFeet (blockNumber) {
    if(blockNumber>42)
  {
  return (blockNumber -  42) * 264;

  }else{
    return (42 - blockNumber) * 264;
  }
}

function distanceTravelledInFeet(a ,b){
    if(b>=a)
  {
  return (b-a) * 264;

  }else{
    return (a-b) * 264;
  }
}


function calculatesFarePrice(a,b){
  let c=distanceTravelledInFeet(a ,b);
  
  if(c <=400){
    return 0;
  }
  else if(c > 400 && c <= 2000){
    return .02 * c;
  }else if (c > 2000 && c < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
