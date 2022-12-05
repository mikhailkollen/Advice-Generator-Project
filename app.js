const url = "https://api.adviceslip.com/advice";
const btn = document.querySelector(".random-btn");
const adviceText = document.querySelector(".advice-text");
const adviceID = document.querySelector(".advice-id");

btn.addEventListener("click", () => {
  adviceText.textContent = "Loading wisdom...";
  setTimeout(fetchAdvice, 2000);
});

const fetchAdvice = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("there was an error");
    }
    const data = await response.json();
    adviceID.textContent = `Advice #${data.slip.id}`;
    adviceText.textContent = `"` + data.slip.advice + `"`;
  } catch (error) {
    adviceText.textContent = "Something went wrong :(";
  }
};
