const id = document.getElementById("id");
const advice = document.getElementById("advice");

document.getElementById("button").addEventListener("click", () => {
  getAdvice();
})

const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice?t=' + Math.random())
    .then(res => res.json())
    .then((adviceData) => {
      const adviceSlip = adviceData.slip;
      id.innerHTML = `Advice #${adviceSlip.id}`;
      advice.innerHTML = `&ldquo;${adviceSlip.advice}&rdquo;`;
    })
    .catch((error) => {
      console.log(error);
      id.innerHTML = `Error`;
      advice.innerHTML = `Sorry. Something went wrong :(`;
    });
}

window.onload = getAdvice();
