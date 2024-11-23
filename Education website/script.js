// change navbar style on scroll

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 1)
})

// show/Hide fasq answer

const faq = document.querySelectorAll('.fasq');
faq.forEach(fasq => {
    fasq.addEventListener('click', ()=>{
        fasq.classList.toggle('open');

        //change icon
        const icon = fasq.querySelector('.faq-icon i');
        if(icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus'
        }
        else{
            icon.className = 'fa-solid fa-plus'
        }
    })
    
});