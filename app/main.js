let books = [];

const apiEndpoint = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
const livrosSection = document.getElementById('livros')

getSearchBooks()

async function getSearchBooks(){
    const response = await fetch(apiEndpoint);
    books = await response.json();
    console.table(books);

    let booksdiscounted = applyDiscount(books);

    showBooks(booksdiscounted);
    
}

function showBooks(booksList){
    livrosSection.innerHTML = '';
    
    booksList.forEach(book => {
        let stock = book.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';
        
        livrosSection.innerHTML +=     `<div class="livro">
        <img class="${stock}" src="${book.imagem}" alt="${book.alt}" />
        <h2 class="livro__titulo">
          ${book.titulo}
        </h2>
        <p class="livro__descricao">${book.autor}</p>
        <p class="livro__preco" id="preco">R$${book.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${book.categoria}</span>
        </div>
      </div>`
    });
}

