let container =document.querySelector(".container")
let username = document.querySelector(".username")
let password = document.querySelector(".password")


btn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(pInp.value, uInp.value);
    container.style.display = "none"
    username.innerHTML = uInp.value
    document.body.style = "flex-direction:column"
    password.innerHTML = pInp.value
})