
window.addEventListener('DOMContentLoaded',(load)=>{
 let visit=Number(localStorage.getItem('counter'))
 visit==0?visit+=1:visit
 document.querySelector('#visitCounter').innerText=`Number of Visits: ${visit}`
 localStorage.setItem('counter',visit+=1)
})

let emoji =
  "😄🙃🤪🤩🤓🤔🤨🧐🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐🤓🤩🤪🤨🤔🤯🤠🥳🤫🤭🧐";


  console.log("you are already console but i console some emojies" + emoji);
