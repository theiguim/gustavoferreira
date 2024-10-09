

const welcome = document.querySelector("#welcome");

document.addEventListener("DOMContentLoaded", () => {
    welcome.style.transition = "opacity 1s ease"
    
    setTimeout(() => {
        welcome.style.opacity = "0"
        setTimeout(()=>   welcome.style.display = "none", 1000)
    }, 1000)
});


const obs = new IntersectionObserver((ent)=> {
    ent.forEach(et =>{
        if(et.isIntersecting){
           setTimeout(()=>  et.target.classList.add("in-view"), 2000)
        }
    })
});

const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    obs.observe(card);
})