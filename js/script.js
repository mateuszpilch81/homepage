{
    const welcome = () => {
        console.log("Hello to all developers");
    }
    welcome();

    const buttonR = document.querySelector(".button");
    const pictureMP = document.querySelector(".picture");
    const theName = document.querySelector(".theName");

    buttonR.addEventListener("click", () => {
        pictureMP.classList.toggle("display");
        if (pictureMP.classList.contains("display")) {
            theName.innerText = "Pokaż"
        } else {
            theName.innerText = "Usuń"
        }
    });
}