const form = document.getElementById("loginForm")
form.addEventListener("submit", function (e) {
    e.preventDefault()

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    console.log(email, password)

    if (!email || !password) {
        alert("Please fill all fields")
        return
    }

    console.log(`Form Submitted: ${email}, ${password}`)

})

// Input & Change Events
const emailInput = document.getElementById("email")
console.log(emailInput)

// emailInput.addEventListener("input", function () {
//     const isValid = this.value.inculdes("@")
//     console.log(isValid)
//     this.style.borderColor = isValid ? "green" : "red"
// })

emailInput.addEventListener("change", function () {
    console.log("Email changed to:", this.value)
})

// Focus & Blur Events
const basicInput = document.getElementById("basicInput")

basicInput.addEventListener("focus", function () {
    this.style.backgroundColor = "#fff9c4"
    console.log("Focused")
})
basicInput.addEventListener("blur", function () {
    this.style.backgroundColor = "white"
    console.log("Blured")
})