var facinput=523;
facinput=String(facinput);
facinput=Array.from(facinput);

var facarray=[];
facinput.forEach(str => {
  facarray.push(Number(str));
});

var factorial = (n) => {
    if(n==0)
      return 1
    else
      return n*factorial(n-1)
}

var factvalue = [];
factvalue=facarray.map(factorial);

var sumOfFact = (n) => {
    let sum=0;
    n.forEach(num => {
        sum+=num;
    })
    return sum;
}

var sumOfDigits = (n) => {
    let sum=0;
    while(n){
        sum+=(n%10);
        n=Math.floor(n/10); 
    }
    return sum;
}

var checkNumber = (n) => {
    while(n>9)
        n=sumOfDigits(n)
    console.log(n);
}
var output = sumOfFact(factvalue)
checkNumber(output)