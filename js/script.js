// Criado as funções que direciona para as áreas de contato
function abrirGitHub() {
    window.open("https://github.com/NeusaNeves", "_blank", "noopener noreferrer");
};

function abrirLinkedin(){
    window.open("https://www.linkedin.com/in/neusa-neves-81947b253/", "_blank", "noopener noreferrer");
};

function abrirWhatsApp() {
    window.open("https://wa.me/5511985837200", "_blank", "noopener noreferrer");
};

function sendEmail() {
    window.location.href = "mailto:neusanneves13@gmail.com?subject=Contato%20do%20site&body=Olá%20Neusa,%20gostaria%20de%20falar%20com%20você.";
};



// projetos notas e img
const project = {
    projeto1: {
        title:"Kanban", description:"Um Kanaban que permite arastar a tarefa para cada uma das áreas, retirando ela da área onde estava. Usado HTML, CSS e JavaScript para a sua criação.", image:"assets/copo1.png"
    },
    projeto2: {
        title:"Calculadora de IMC", description:"Um Kanaban que permite arastar a tarefa para cada uma das áreas, retirando ela da área onde estava. Usado HTML, CSS e JavaScript para a sua criação.", image:"assets/copo2.png"
    },
    projeto3: {
        title:"Tela Login", description:"Um Kanaban que permite arastar a tarefa para cada uma das áreas, retirando ela da área onde estava. Usado HTML, CSS e JavaScript para a sua criação.", image:""
    }
  
};

function showProject(id) {
    const projeto = project[id];

    document.getElementById("nota-project").innerHTML = `
    <h2>${projeto.title}</h2>
    <p>${projeto.description}</p>
    `;

    document.getElementById("foto-project").innerHTML = `
    <img src ="${projeto.image}" alt="${projeto.title}">
    `;

}

// secção com um texto fixo
const text = [
        {texto:"Code doesn`t have to be perfect to be wonderful", autor:"Developer Wisdom"},
];

const container = document.getElementById("texto-fixo")

text.forEach((item) => {
        const textoCard = document.createElement('article');

        textoCard.className = 'cursor-pointer';

        textoCard.innerHTML =`
            <div class="flex gap-3 mt-3">
                <div>
                    <p><q>${item.texto}</q></p>
                    <small class="text-gray-600">- ${item.autor}</small>
                </div>
            </div> `;
            container.appendChild(textoCard);
    });
