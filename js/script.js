console.log("hello!");

let button = document.querySelector(".js-button");
let light = document.querySelector(".body--light");
let dark = document.querySelector(".body--dark");
let buttonWord = document.querySelector(".button--word")

/*przycisk.addEventListener("click", () => {
    naglowek.remove();
});
console.log(remove);*/

button.addEventListener("click", () => {
    light.classList.toggle("body--dark");

    if (light.classList.contains("body--dark")) {
        buttonWord.innerText = "jaśniejszy";
    } else {
        buttonWord.innerText = "ciemiejszy";
    }
});
console.log(button);