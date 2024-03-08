let navbar = document.querySelector('#nav')
window.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY
    if (scrollY > 500){
        navbar.classList.add ('navbarScroll')
    }else{
        navbar.classList.remove('navbarScroll')
    }
})

fetch("annunci.json").then((response)=>response.json ()).then((data)=>{
    
    let containerCard = document.querySelector('#containerCard')
    console.log(data)
    
    function showCards (array){
        array.forEach (annuncio =>{
            let div = document.createElement ('div')
            div.classList.add('col-6', 'col-md-3', 'mb-3')
            div.innerHTML = `<div class="card">
            <img src="${annuncio.img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title titleCard">${annuncio.name}</h5>
            <p class="card-text">${annuncio.category}</p>
            <a href="#" class="btn btn-outline-dark">${annuncio.price}</a>
            </div>
            </div>`
            containerCard.appendChild(div)
            console.log('ciao')
        })
    }
    showCards(data)
    
    data.sort ((a,b)=> a.price - b.price)
    
    let containerCategories = document.querySelector('#containerCategories')
    function radioCreate (array){
        let categorie = array.map (annuncio => annuncio.category)
        let uniquecategories = Array.from (new Set (categorie))
        uniquecategories.forEach (categoria =>{
            let div = document.createElement('div')
            div.innerHTML = `<input class="form-check-input" type="radio" id="${categoria}" name="categoria" value="" id="flexCheckDefault">
            <label class="form-check-label" for="${categoria}">
            ${categoria}
            </label>`
            containerCategories.appendChild(div)
            
        })      
    }
    radioCreate(data)
    
    let radioBtn = document.querySelectorAll('.form-check-input')
    
    function filterbycategories (array){
        let btnChecked = Array.from(radioBtn).find (btn=> btn.checked)
        if (btnChecked.id != 'All'){
            let filtered = array.filter (annuncio => annuncio.category == btnChecked.id)
            containerCard.innerHTML = ``
            showCards(filtered)
        }else{
            showCards(array) 
        }
        
    }
    
    radioBtn.forEach (btn=>{
        btn.addEventListener('click', ()=>{
            filterbycategories (data)
        })
    })
    
})