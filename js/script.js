{
console.log("hello!");

const buttonClick = () =>{
    const lightBackground = document.querySelector(".body--light");
    //const darkBackground = document.querySelector(".body--dark");
    const buttonInnerText = document.querySelector(".button--word")

    lightBackground.classList.toggle("body--dark");

    if (lightBackground.classList.contains("body--dark")) {
        buttonInnerText.innerText = "jaśniejszy";
    } else {
        buttonInnerText.innerText = "ciemiejszy";
    }
};

const init = () => {
    const buttonElement = document.querySelector(".js-button");
    buttonElement.addEventListener("click", buttonClick);
};

init();
};