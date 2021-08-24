const dataBtn = document.querySelector('[data-btn]')
const inputBtn = document.querySelector('[data-input]')
const submitForm = document.querySelector('[sub-form]')
dataBtn.addEventListener("click", () =>{
    console.log("clicked");
})
submitForm.addEventListener("submit", (e) => {
    e.preventDefault
    console.log("SUbMitted This")
})

const sForm = document.querySelector('[sub-form]')
sForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("It will DOne by Allah");
})

const port = document.querySelector('[port-folio]')

port.addEventListener('click', (e) =>{
    e.preventDefault()
    console.log("Jhankar ra click marsa");
})