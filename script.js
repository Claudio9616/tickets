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
        console.log(button.parentNode.parentNode.parentNode)
        button.parentNode.parentNode.parentNode.classList.toggle('active')
        // PURTROPPO HO INDENTATO MALE IL CODICE E QUIDI SONO DOVUTO RISALIRE FINO AL TERZO PARENT NODE 
        // PER TOGLARE LA CLASSE ACTIVE
    })
})










// const asd = qwe.map(domanda => student.name);
// for (const key in questions) {
//     item += `${ questions[key] } `
//     console.log(questions[key])
// }
// for (let i = 1; i <= 1; i++) {
//     item += `< div class='faq border mb-4 p-3 position-relative' >
//                 <div class="row align-items-center justify-content-between">
//                 <div class="col">
//                 <h3 class='faq-title'>QUALI TECNOLIGIE HAI USATO PER QUESTO PROGETTO?</h3>
//                 </div>
//                 <div class="col col-2">
//                      <button class='btn faq-button'>
//             <i class="fa-solid fa-xmark"></i>
//             <i class="fa-solid fa-angle-down"></i>
//         </button>
//                 </div>
//             </div>
//             <p class='faq-answer'>risposta ${i}
//                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, error vero nobis facilis minima deserunt laborum illo nisi dolorum? Sed necessitatibus maiores enim nam laboriosam labore natus debitis tempora praesentium.</p>
//             </div>`
// }