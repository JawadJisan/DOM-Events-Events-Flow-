// Bubbling (default)
// document.getElementById("child").addEventListener("click", () => console.log("Child clicked"), false)
document.getElementById("parent").addEventListener("click", () => console.log("Parent clicked"), false)
document.getElementById("grandparent").addEventListener("click", () => console.log("Grandparent clicked"), false)

// Capturing - third parameter true
document.getElementById("child").addEventListener("click", () => console.log("Child captured"), true)
document.getElementById("parent").addEventListener("click", () => console.log("Parent captured"), true)
document.getElementById("grandparent").addEventListener("click", () => console.log("Grandparent captured"), true)


// Stop Propagation
document.getElementById("child").addEventListener("click", function (e) {
    console.log("Child Clicked")
    e.stopPropagation()
})


// Event Delegation

const todoList = document.querySelector(".todoList")

todoList.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        const li = e.target.closest("li")
        console.log(li)
        li.remove()
    }
})