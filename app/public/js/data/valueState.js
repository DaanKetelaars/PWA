const message = document.querySelector(".message");

const validValue = () => {
    message.classList.remove("display");
}
const inValidValue = () => {
    message.classList.add("display");
}

export {
    validValue,
    inValidValue
}