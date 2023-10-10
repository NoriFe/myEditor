const textarea = document.querySelector(".textarea--js");
const save = document.querySelector(".save--js");
const load = document.querySelector(".load--js");

save.addEventListener('click', () => {
    localStorage.setItem('content', textarea.value)
})

load.addEventListener('click', () => {
    textarea.value = localStorage.getItem('content');

})
