const jokeText = document.querySelector(".joke-text");
const jokeBtn = document.querySelector(".joke-btn");

jokeBtn.addEventListener("click", fetchJoke);

async function fetchJoke() {
  jokeText.textContent = "Loading a masterpiece.....";

  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const response = await fetch("https://icanhazdadjoke.com", config);
    const data = await response.json();
    jokeText.textContent = data.joke;
  } catch (error) {
    jokeText.textContent = "Oops! Something went wrong. Try again!";
    console.error("Error fetching joke:", error);
  }
}
