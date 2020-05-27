//random numbers shoot
n=6;
array=Array.from({length:37},(v,k)=>k+1);
var goRandom = array.sort(function(){return .6 - Math.random()});

var goRandom=goRandom.slice(0,n);

goRandom = goRandom.join(" ");


$('#out').html(goRandom.toString() );
