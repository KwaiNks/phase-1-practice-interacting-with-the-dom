setTimeout(1000)
const counter =  document.querySelector("#counter")
const minus =  document.querySelector("#minus")
const plus =  document.querySelector("#plus")
const heart =  document.querySelector("#heart")
const pause =  document.querySelector("#pause")
const likes =  document.querySelector(".likes")


minus.addEventListener("click", (e)=>{
    e.preventDefault()
 counter.innerHTML--;

})

plus.addEventListener("click", (e)=>{
    e.preventDefault()
 counter.innerHTML++;

})

heart.addEventListener("click", (e)=>{
    e.preventDefault()
    const number = counter.innerHTML
 likes.innerHTML = number + " has been liked 1 time " 

})

