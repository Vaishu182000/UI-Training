var num=5;
var elements=[9,2,1,3,8]
var sum=3

var consecutiveIndex = (elements, sum) =>{
  for(let i=0;i<num;i++){
    if(elements[i]+elements[i+1]==sum)
      return i+1
  }
  return -1
}

console.log(consecutiveIndex(elements,sum))