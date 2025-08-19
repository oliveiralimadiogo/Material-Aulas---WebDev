// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        image: "https://placedog.net/150?random=3",
        date: "12/10/2023 12:00:00"
    }
];


// Inicialização
window.onload = function() {
    carregarPostsLocalStorage()
    displayPosts();

    document.getElementById('postForm').addEventListener('submit', addPost); 
    document.querySelector("#postList").addEventListener('click', handleClick)
};

// Função para exibir os posts
function displayPosts() {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';

    posts.forEach((pegaPost, index) => {
            const postElement = document.createElement('div');
            postElement.classList.add('card-post');
  
            postElement.innerHTML = `
                <p>${pegaPost.text}</p>
                ${pegaPost.image ? `<img src="${pegaPost.image}" alt="Imagem do post" style="max-width:150px;">` : ""}
                <p><em>Categoria: ${pegaPost.category}</em></p>
                <p><em>Data e Hora: ${pegaPost.date}</em></p>
                <button data-action="Editar" data-index=${index}><i class="fa-solid fa-pen-to-square"></i> Editar</button>
                <button data-action="Apagar" data-index=${index}><i class="fa-solid fa-eraser"></i> Apagar</button>
                <hr style="margin:30px;">`;
               
            postList.append(postElement);
        });
}

// Função para adicionar um novo post
function addPost(event) {
    event.preventDefault();
    
    const postText = document.getElementById('postText').value;
    const postCategory = document.getElementById('postCategory').value;
    const postImage = document.getElementById('postImage').value
    const postDate = new Date().toLocaleString(); 

    const post = { 
        text: postText, 
        category: postCategory, 
        image: postImage, 
        date: postDate 
    };
    
    posts.unshift(post);
    salvarLocalStorage()
    
    document.getElementById('postForm').reset();
    
    displayPosts();
}


function handleClick(event){
    const acaoBotao = event.target.dataset.action
    const indicePost = event.target.dataset.index
    
    if (!acaoBotao) return

    if(acaoBotao === "Editar"){
        editarPost(indicePost)
    } 
    else if (acaoBotao === "Apagar"){
        apagarPost(indicePost)
    }

}

function editarPost(index){
    const novoTexto = prompt("Edite o conteúo do seu post")
    posts[index].text = novoTexto
    salvarLocalStorage()
    displayPosts()
}

function apagarPost(index){

    if(confirm("Deseja realmente excluir esse post")){
        posts.splice(index, 1)
        salvarLocalStorage()
        displayPosts()
    }
}

function salvarLocalStorage(){
    localStorage.setItem("posts", JSON.stringify(posts))
}

function carregarPostsLocalStorage(){
    let localPosts = localStorage.getItem("posts")

    if(localPosts){
        posts = JSON.parse(localPosts)
    }
}