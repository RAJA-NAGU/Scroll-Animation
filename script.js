const sections = document.querySelectorAll(".section")

window.onscroll = ()=>{
  sections.forEach((section)=>{
    let scrollDistance = window.scrollY 
    let secDistance = section.offsetTop

    
    if (scrollDistance >= secDistance -350 ) {
      section.classList.add("showanimate")

  } 

  })
}

const progressbar = document.querySelector(".progess-bar")

window.addEventListener("scroll",()=>{
  const scrollTop = window.scrollY

  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const progress = (scrollTop / height) *100

  progressbar.style.width = progress + "%"

})
