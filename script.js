const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
console.log(circles)
let currentActive = 1;
// QUI IMPONGO IO CHE PARTE DA 1, MA SULL'HTML MANTENGO LA CLASSE ACTIVE, 
// SE SULL'HTML NON LA MANTENESSI ALLORA DEVO PARTIRE DA 0-----RIGA 18 HTML
next.addEventListener('click', () => {
    currentActive++
    // NON PUO' SUPERARE LA LUNGHEZZA DEL CIRCLE
    if (currentActive > circles.length) {
        // SE VOLESSI FARE UN CAROSELLO SEMPLICE DEVO METTERE IL "-=" QUI SOTTO
        currentActive = circles.length;
    }
    update()
})
prev.addEventListener('click', () => {
    currentActive--
    // NON PUO' SUPERARE LA LUNGHEZZA IMPOSTA A RIGA 5
    if (currentActive < 1) {
        // SE DOVESSI FARE UN CAROSELLO SEMPLICE DEVO METTERE "CIRCLES.LENGTH" QUI SOTTO
        currentActive = 1;
    }
    update()
})
function update() {
    circles.forEach((circle, i) => {
        // QUESTO PERCHE' IL CIRCLES COMPORTANDOSI COME UN ARRAY CONTA DA 0 VEDI IL CONSOLE.LOG(RIGA5)
        if (i < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        next.disabled = false
        prev.disabled = false
    }
    // fare uno switch, considera che qui non messo l'elemento text, ma devi far mostare un form alla volta, tipo nome e cognome, età, km, etc
    // if (currentActive === 1) {
    //     text.style.color = 'black'
    //     text.style.display = 'block'
    // } else if (currentActive === 2) {
    //     text.style.color = 'red'
    //     text.style.display = 'block'
    // } else if (currentActive === 3) {
    //     text.style.display = 'none'
    // } else if (currentActive === 4) {
    //     text.style.color = 'yellow'
    //     text.style.display = 'block'
    // }
}