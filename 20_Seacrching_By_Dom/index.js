// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
// const appendAlert = (message, type) => {
//     const wrapper = document.createElement('div')
//     wrapper.innerHTML = [
//         `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//         `   <div>${message}</div>`,
//         '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//         '</div>'
//     ].join('')

//     alertPlaceholder.append(wrapper)
// }

// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//     alertTrigger.addEventListener('click', () => {
//         appendAlert('Nice, you triggered this alert message!', 'success')
//     })
// }
// getElementByclassName
let ctitle = document.getElementsByClassName("card-title")[0]
let c = document.getElementsByClassName("card-text")[0]
// console.log(ctitle.style.color = "red")
console.log(c.style.color = "blue")

// getElementById
// let d = document.getElementById("just")
// console.log(d.style.color = "blue")
let d = document.getElementById("justid");
d.style.color = "Olive ";
console.log(d.style.color);
console.log(d)

// querySelectorAll and querselector 
let e = document.querySelectorAll(".card-title")
console.log(e)
e[0].style.color = "red"
e[1].style.color = "blue"
e[2].style.color = "green"

// getElementByTagname
console.log(document.body.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))

console.log(document.getElementsByName("search"))

