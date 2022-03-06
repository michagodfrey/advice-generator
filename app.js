const id = document.getElementById("id");
const advice = document.getElementById("advice");

fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(adviceData => {
    const adviceSlip = adviceData.slip;
    id.innerHTML = `Advice #${adviceSlip.id}`;
    advice.innerHTML = `&ldquo;${adviceSlip.advice}&rdquo;`;
  }).catch(error => {
    console.log(error);
    id.innerHTML = `Error`;
    advice.innerHTML = `Sorry. Something went wrong :(`;
  });
