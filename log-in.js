let btn=document.getElementById('btn')
// let display =document.querySelector('.display')
let content =document.querySelector('.content')
let inputs =document.querySelector('.inputs')
let forget =document.querySelector('.forget')
let form =document.getElementById('form1')
let text =document.getElementById('text')
let btn1 =document.getElementById('btn1')
let btn2 =document.getElementById('btn2')
let h1 =document.getElementById('h1')
console.log(form)

btn.addEventListener('click',() =>{
    form.classList.add('active')
    form.classList.remove('none')
    text.textContent ='sign-up'
    inputs.innerHTML =`
    <input type="text"  id="" placeholder="user name">
    <input type="password" name="" id="" placeholder="password">
    <input type="email"  placeholder="enter your email">
    `
    forget.innerHTML = `
    <a>signin with email </a>
    `
    forget.style.cssText =`
    color:#fff;
    text-transform: capitalize;
    font-size:18px;
    cursor:pointer;
    `
    btn.style.display ='none'
    btn2.style.display ='block'
    btn1.innerHTML ='sign up'
    h1.innerHTML ='hellow, friends'
})
btn2.addEventListener('click',() =>{
    form.classList.add('none')
    form.classList.remove('active')
    text.textContent ='log-in'
    inputs.innerHTML =`
    <input type="text"  id="" placeholder="user name">
    <input type="password" name="" id="" placeholder="password">
    `
    btn.style.display ='block'
    btn2.style.display ='none'
    btn1.innerHTML ='log in'
    h1.innerHTML ='welcome,back!'
    forget.innerHTML =`
                    <a href="#">for get the password</a>
                    <div class="check">
                        <input type="checkbox" name="" id="check">
                        <label for="check">remember me</label>
    `
})




