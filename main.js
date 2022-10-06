//random numbers shoot

function myFunction() {
  let displayNumbers = 6;
  let array = Array.from({ length: 37 }, (v, k) => k + 1);
  let goRandom = array.sort(function () {
    return 0.6 - Math.random();
  });

  goRandom = goRandom.slice(0, displayNumbers);

  goRandom = goRandom.join(" | ");

  $("#out").html(goRandom.toString());

  document.getElementById("goStrong").innerHTML = Math.floor(
    Math.random() * 7 + 1
  );
}
