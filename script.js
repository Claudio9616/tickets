const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
const generateTicket = document.querySelector('.generate-ticket');
function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
function loading() {
    let load = 0;
    let intervall = setInterval(bluring, 30);
    function bluring() {
        bg.classList.remove('d-none')
        load++;
        if (load > 99) {
            clearInterval(intervall);
        }
        loadText.innerHTML = `${load}%`
        loadText.style.opacity = scale(load, 0, 100, 1, 0);
        bg.style.filter = `blur(${scale(load, 0, 100, 50, 0)}px)`;
    }
}

generateTicket.addEventListener('click', function () {
    loading();
    // una volta raccolti i valori degli input fai le verifiche e metti gli eventuali errori
    // degli utenti
})






