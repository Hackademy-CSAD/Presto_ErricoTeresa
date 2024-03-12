// SCROLL NAVBAR

let navbar = document.querySelector('#nav')
window.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY
    if (scrollY > 500){
        navbar.classList.add ('navbarScroll')
    }else{
        navbar.classList.remove('navbarScroll')
    }
})

// SEZIONE CARD
let chiSiamo = [
    {
        name: 'Giorgia Rossi',
        job: 'Amministratore Delegato e Co-Fondatore',
        description: 'Vanta oltre 15 anni di esperienza nel settore. Offre un servizio di consulenza personalizzato.',
        img :'./Media_Presto/Ceo_2.png',
    },
    {
        name: 'Giulio Bianchi',
        job: 'Direttore Creativo e Co-Fondatore',
        description: 'Rinomata deisgner con 10 anni di esperienza, nota per la il suo design elegante e ricercato.',
        img:'./Media_Presto/Ceo_1.png',
    },
    {
        name: 'Maria Neri',
        job: 'SEO Specialist e Consulente Marketing Digitale',
        description: 'Oltre 5 anni di esperienza maturata in agenzie di marketing digitale.',
        img:'./Media_Presto/Ceo_3.png',
    },
    ]

let containerCard = document.querySelector('#containerCard')

chiSiamo.forEach (card=>{
let div = document.createElement('div')
div.classList.add ('col-6', 'col-md-3')
div.innerHTML = `<div class="card">
<img src="${card.img}" class="card-img-top img-fluid" alt="...">
<div class="card-body">
  <h5 class="card-title">${card.name}</h5>
  <p class="card-text">${card.job}</p>
  <a href="#" class="nav-link">${card.description}</a>
</div>
</div>`
containerCard.appendChild(div)
})