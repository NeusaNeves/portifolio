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