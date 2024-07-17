const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
const generateTicket = document.querySelector('.generate-ticket');
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const name = document.getElementById('name');
const nome = document.querySelector('.nome');
const lastName = document.getElementById('last-name');
const cognome = document.querySelector('.cognome');
const age = document.getElementById('age');
const età = document.querySelector('.età');
const km = document.getElementById('km');
const distanza = document.querySelector('.distanza');
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
// PER QUANDO DEVO PRENDERE I VALORI DEGLI INPUT
// const user = {
//     nome: name.value.trim(),
//     cognome: lastName.value.trim(),
//     età: parseInt(age.value.trim()),
//     distanza: parseInt(km.value.trim())
// }
let currentActive = 1;
next.addEventListener('click', () => {
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update()
})
prev.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1;
    }
    update()
})
function update() {
    circles.forEach((circle, i) => {
        if (i < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
    if (currentActive === 1) {
        prev.disabled = true;
        prev.classList.remove('text-white', 'bg-primary');
        prev.classList.add('text-black', 'bg-secondary');
    } else if (currentActive === circles.length) {
        next.disabled = true;
        next.classList.add('text-black', 'bg-secondary');
        next.classList.remove('text-white', 'bg-primary');
    } else {
        next.disabled = false;
        prev.disabled = false;
        next.classList.add('text-white', 'bg-primary');
        next.classList.remove('text-black', 'bg-secondary');
        prev.classList.add('text-white', 'bg-primary');
        prev.classList.remove('text-black', 'bg-secondary');
    }
    const userClass = {
        nome, cognome, età, distanza
    }
    switch (currentActive) {
        case 1:
            userClass.nome.classList.add('d-inline-block'),
                userClass.nome.classList.remove('d-none'),
                userClass.cognome.classList.remove('d-inline-block'),
                userClass.cognome.classList.add('d-none'),
                userClass.età.classList.remove('d-inline-block'),
                userClass.età.classList.add('d-none'),
                userClass.distanza.classList.remove('d-inline-block'),
                userClass.distanza.classList.add('d-none')
            break;
        case 2:
            userClass.nome.classList.remove('d-inline-block'),
                userClass.nome.classList.add('d-none'),
                userClass.cognome.classList.add('d-inline-block'),
                userClass.cognome.classList.remove('d-none'),
                userClass.età.classList.remove('d-inline-block'),
                userClass.età.classList.add('d-none'),
                userClass.distanza.classList.remove('d-inline-block'),
                userClass.distanza.classList.add('d-none')
            break;
        case 3:
            userClass.nome.classList.remove('d-inline-block'),
                userClass.nome.classList.add('d-none'),
                userClass.cognome.classList.remove('d-inline-block'),
                userClass.cognome.classList.add('d-none'),
                userClass.età.classList.add('d-inline-block'),
                userClass.età.classList.remove('d-none'),
                userClass.distanza.classList.remove('d-inline-block'),
                userClass.distanza.classList.add('d-none')
            break;
        case 4:
            userClass.nome.classList.remove('d-inline-block'),
                userClass.nome.classList.add('d-none'),
                userClass.cognome.classList.remove('d-inline-block'),
                userClass.cognome.classList.add('d-none'),
                userClass.età.classList.remove('d-inline-block'),
                userClass.età.classList.add('d-none'),
                userClass.distanza.classList.add('d-inline-block'),
                userClass.distanza.classList.remove('d-none')
            break;
    }


    // const user = {
    //     nome: name.value.trim(),
    //     cognome: lastName.value.trim(),
    //     età: parseInt(age.value.trim()),
    //     distanza: parseInt(km.value.trim())
    // }
    // if (user.età < 7) {
    //     errore.classList.remove('d-none')
    //     errore.innerHTML = `Attenzione l'età deve essere superiore hai 7 anni`;
    // }
    // sono controlli da verificare al click del bottone che genera il biglietto 
    // al click recupero i dati e if(determinate cose) non si avverano allora non si 
    // genera il biglietto
}

