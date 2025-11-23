// localStorage.setItem("key", "I love JavaScript")
// const user = {
//     name: "Artem",
//     age: 16
// }
// localStorage.setItem("userInfo", JSON.stringify(user))
// const parsedData = localStorage.getItem("userInfo")
// console.log(JSON.parse(parsedData))


// const boxEl = document.querySelector(".box")
// const checkEl = document.querySelector(".check")
// const bodyEl = document.querySelector("body")
// const savedThema = localStorage.getItem('isActive') || ""

// if (savedThema === "dark") {
//     checkEl.classList.toggle("active")
//     bodyEl.classList.add("dark")
// }else {
//         bodyEl.classList.remove("dark")
//         localStorage.setItem("isActive", "light")
// }

// boxEl.addEventListener('click', () => {
//     checkEl.classList.toggle("active")
//     if (checkEl.classList.contains('active')) {
//         localStorage.setItem("isActive", "dark")
//         bodyEl.classList.add("dark")
//     } else {
//         bodyEl.classList.remove("dark")
//         localStorage.setItem("isActive", "light")
//     }
// })


// Додати кнопку "Очистити", яка видалить значення з localStorage.
// const saveName = document.querySelector('#nameInput')
// const btn = document.querySelector('#saveBtn')
// const clearBtn = document.getElementById("clearBtn");
// const text = document.querySelector("#textArea")

// const savedName = localStorage.getItem("userName") || ""
// saveName.value = savedName

// clearBtn.addEventListener("click", () => {
//     localStorage.removeItem("userName")
//     localStorage.removeItem("coment")
// })

// btn.addEventListener("click", () => {
//     localStorage.setItem("userName", saveName.value)
//     saveName.value = ""
// })

// const saveText = localStorage.getItem("coment") || ""
// text.value = saveText

// text.addEventListener("input", () => {
//     localStorage.setItem("coment", text.value)
    
// })









const form = document.querySelector(".form-js");

const STORAGE_KEY = 'formData'

function loadForm() {
    const parseData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || ""
    console.log(parseData)
    if (!parseData) {
        return
    }
    const {name, email, tel, comment} = parseData
    form.elements.name.value = name
    form.elements.email.value = email
    form.elements.tel.value = tel
    form.elements.comment.value = comment
}
function savedForm() {
    const data = {
        name: form.elements.name.value,
        email: form.elements.email.value,
        tel: form.elements.tel.value,
        comment: form.elements.comment.value
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

form.addEventListener('input', () => {
    savedForm()
})


form.addEventListener('submit', (event) => {
    event.preventDefault()
    form.reset()
    localStorage.removeItem(STORAGE_KEY)
})

loadForm()