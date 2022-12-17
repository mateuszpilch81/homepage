{
    const welcome = () => {
        console.log("Hello to all developers");
    }
    welcome();
}
{
    const buttonR = document.querySelector(".button");
    const pictureMP = document.querySelector(".picture");
    const theName = document.querySelector(".theName");

    buttonR.addEventListener("click", () => {
        pictureMP.classList.toggle("display");
        theName.innerText = pictureMP.classList.contains("display") ? "Pokaż" : "Usuń";
    });
}