//This is data attributes=== How we can use data attributes in JS and how to add and read elements.
const buttons = document.querySelectorAll("button")
buttons.forEach(button =>{
    button.addEventListener("click", () =>{
      const afterClick = (parseInt(button.dataset.clicks))
      button.dataset.clicks = afterClick + 1;
    })
})