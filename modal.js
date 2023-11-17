// classList adiciona uma classe 

const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");

const clickOpen = function() {
    popup.classList.add("d-block");
}

const popupGeneral =  function(event) {
    const clickOffElement = (event.target.classList[0]);
    const classNameArray = ["popup-close", "popup-link", "popup-wrapper"]

    const isClassList = classNameArray.includes(clickOffElement);
    if (isClassList) {
        popup.classList.remove("d-block");
    }
}
button.addEventListener("click", clickOpen)

popup.addEventListener("click",popupGeneral)