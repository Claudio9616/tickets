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
const buttonValidation = document.querySelector('.button-validation');
const error = document.querySelector('.error');
const success = document.querySelector('.success');
let ticket = document.querySelector('.ticket');
const header = document.querySelector('header');
let currentActive = 1;
function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
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
        buttonValidation.classList.add('d-none');
    } else if (currentActive === circles.length) {
        next.disabled = true;
        next.classList.add('text-black', 'bg-secondary');
        next.classList.remove('text-white', 'bg-primary');
        buttonValidation.classList.remove('d-none');

    } else {
        next.disabled = false;
        prev.disabled = false;
        next.classList.add('text-white', 'bg-primary');
        next.classList.remove('text-black', 'bg-secondary');
        prev.classList.add('text-white', 'bg-primary');
        prev.classList.remove('text-black', 'bg-secondary');
        buttonValidation.classList.add('d-none');
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
}
function loading(user) {
    generateTicket.classList.add('d-none');
    const numeroCarrozza = Math.floor(Math.random() * 5) + 1;
    const numeroPosto = Math.floor(Math.random() * 30) + 1;
    const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
    let randomLetters = letters.sort(() => Math.random() - 0.5);
    let userPosto = numeroPosto + randomLetters[0].toUpperCase();
    const fixedPrice = 0.40;
    let totalPrice = fixedPrice * user.distanza;
    let discount = 0.20;
    if (user.età <= 17) {
        totalPrice -= (totalPrice * discount);
    } else if (user.età >= 65) {
        discount = 0.40;
        totalPrice -= (totalPrice * discount);
    }
    ticket.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5LDz5NRMXX7EbAHN0g-72Dbqk-x_jHRTM9Q&s"
        class="card-img-top" alt="train">
    <div class="card-body">
        <h5 class="card-title text-center">Buon Viaggio</h5>
        <p class="card-text">Gentile <strong>${user.nome}</strong> goditi il tuo viaggio
            in tutta tranquillità, usufruendo dei nostri servizi</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>${user.nome}</strong> <strong>${user.cognome}</strong></li>
        <li class="list-group-item">NUMERO CARROZZA: <strong>${numeroCarrozza}</strong></li>
        <li class="list-group-item">POSTO A SEDERE: <strong>${userPosto}</strong></li>
        <li class="list-group-item">COSTO DEL BIGLIETTO: <strong>${totalPrice.toFixed(2)}</strong></li>
    </ul>
</div>
    `;
    let load = 0;
    let intervall = setInterval(bluring, 30);
    function bluring() {
        bg.classList.remove('d-none');
        load++;
        if (load > 99) {
            clearInterval(intervall);
        }
        loadText.innerHTML = `${load}%`
        loadText.style.opacity = scale(load, 0, 100, 1, 0);
        bg.style.filter = `blur(${scale(load, 0, 100, 50, 0)}px)`;
    }
}
function generateTickets() {
    const user = {
        nome: name.value.trim(),
        cognome: lastName.value.trim(),
        età: parseInt(age.value.trim()),
        distanza: parseInt(km.value.trim())
    }
    if (isNaN(user.età) || user.età <= 5 || isNaN(user.distanza) || !user.cognome || !user.nome || !isNaN(user.nome) || !isNaN(user.nome)) {
        error.classList.remove('d-none');
        error.innerHTML = `<ul>
        <li><strong>I DATI INSERITI NON SONO CORRETTI SI PREGA DI CONTROLLARE</strong></li>
        <li>NOME: <strong>${user.nome || 'nessun NOME inserito'}</strong> </li>
        <li>COGNOME: <strong>${user.cognome || 'nessun COGNOME inserito'}</strong> </li>
        <li>ETA': <strong style="color: red;">(si ricorda che i minori sotti i 5 anni non posso viaggiare)</strong> <strong>${user.età || `nessuna ETA' inserita`}</strong> </li>
        <li>DISTANZA: <strong>${user.distanza || 'dati inseriti SCORRETTAMENTE'}</strong> </li>
        </ul>`
    } else {
        let messageSucces = 'DATI INSERITI CORRETTAMENTE';
        success.append(messageSucces);
        error.classList.add('d-none');
        buttonValidation.classList.add('d-none');
        header.classList.add('d-none');
        generateTicket.classList.remove('d-none');
        generateTicket.addEventListener('click', function () {
            loading(user);
        })
    }
}
buttonValidation.addEventListener('click', function () {
    generateTickets();
});
const faqs = [
    {
        domanda: 'QUALI TECNOLOGIE HAI USATO?',
        risposta: 'Ho utilizzato le seguenti tecnologie: HTML, CSS, BOOTSTRAP, JAVASCRIPT'
    },
    {
        domanda: 'QUALE IMPORTANZA HA AVUTO BOOTSTRAP IN QUESTO PROGETTO?',
        risposta: `L'ho usato solamente per velocizzare i processi di layout ad esempio la forma 
        della card del biglietto e lo stile dei bottoni`
    },
    {
        domanda: '',
        risposta: 'risposta 3'
    }
]
let item = '';
const provaDomanda = faqs.map((faq) => {
    return item += `<div class='faq border mb-4 p-3 position-relative'>
    <div class="row align-items-center justify-content-between">
    <div class="col">
    <h3 class='faq-title'>${faq.domanda}</h3 >
    </div >
    <div class="col col-2">
        <button class='btn faq-button'>
            <i class="fa-solid fa-xmark"></i>
            <i class="fa-solid fa-angle-down"></i>
        </button>
    </div>
</div >
    <p class='faq-answer'>${faq.risposta}</p>
</div >`

})
const content = document.querySelector('.content');
content.innerHTML += item;
const buttons = document.querySelectorAll('.faq-button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentNode.parentNode.parentNode.classList.toggle('active')
    })
})
