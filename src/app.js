// localStorage.setItem("key", "I love JavaScript")
// const user = {
//     name: "Artem",
//     age: 16
// }
// localStorage.setItem("userInfo", JSON.stringify(user))
// const parsedData = localStorage.getItem("userInfo")
// console.log(JSON.parse(parsedData))


const boxEl = document.querySelector(".box")
const checkEl = document.querySelector(".check")
const bodyEl = document.querySelector("body")
const savedThema = localStorage.getItem('isActive')

if (savedThema === "dark") {
    checkEl.classList.toggle("active")
    bodyEl.classList.add("dark")
}else {
        bodyEl.classList.remove("dark")
        localStorage.setItem("isActive", "light")
}

boxEl.addEventListener('click', () => {
    checkEl.classList.toggle("active")
    if (checkEl.classList.contains('active')) {
        localStorage.setItem("isActive", "dark")
        bodyEl.classList.add("dark")
    } else {
        bodyEl.classList.remove("dark")
        localStorage.setItem("isActive", "light")
    }
})

// const boxEl = document.querySelector(".box");
// const checkEl = document.querySelector(".check");
// const bodyEl = document.querySelector("body");

// const theme = localStorage.getItem("isActive") ?? "light";
// bodyEl.classList.toggle("dark", theme === "dark");
// checkEl.classList.toggle("active", theme === "dark");

// boxEl.addEventListener("click", () => {
//   const isDark = !checkEl.classList.contains("active");

//   checkEl.classList.toggle("active", isDark);
//   bodyEl.classList.toggle("dark", isDark);

//   localStorage.setItem("isActive", isDark ? "dark" : "light");
// });