let navbar = document.querySelector('#nav')
window.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY
    if (scrollY > 500){
        navbar.classList.add ('navbarScroll')
    }else{
        navbar.classList.remove('navbarScroll')
    }
})

let numeroUno = document.querySelector('#numeroUno')
let numeroDue = document.querySelector('#numeroDue')
let numeroTre = document.querySelector('#numeroTre')
let check = true

// chiamate asincrone
function createInterval (n, element, time){
    let counter = 0;
    let interval = setInterval (()=>{
        if(counter < n){
            counter ++
            element.innerHTML = counter
        }else{
            clearInterval(interval)
        }
    }, time)
    setTimeout(()=>{
        check = true
    }, "5000")
}

let osservatore = new IntersectionObserver((entries)=>{
    entries.forEach (entry =>{
        if (entry.isIntersecting && check == true){
            createInterval(100, numeroUno, 20)
            createInterval(150, numeroDue, 10)
            createInterval(180, numeroTre, 5)
            check = false
        }
    })
})
osservatore.observe(numeroTre)


