const filterButtons = document.querySelectorAll('.btn');
filterButtons.forEach(button => button.addEventListener('click', filterBooks));

function filterBooks(){
    const button = document.getElementById(this.id);
    const category = button.value;
    let filteredBooks = books.filter(book => book.categoria == category);
    showBooks(filteredBooks);
}

const btnAvailableBooks = document.getElementById('btnLivrosDisponiveis');
btnAvailableBooks.addEventListener('click', filterAvailableBooks);

function filterAvailableBooks(){
    let availableBooks = books.filter(book => book.quantidade > 0);
    console.log(availableBooks)
    showBooks(availableBooks);
}