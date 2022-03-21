const loader = document.querySelector("#loader");
const loading = () => {
    loader.classList.add("display");
}
const hideLoading = () => {
    loader.classList.remove("display");
}

export {
    loading,
    hideLoading
};