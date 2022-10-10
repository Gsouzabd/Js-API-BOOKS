const filterButtons = document.querySelectorAll('.btn');
filterButtons.forEach(button => button.addEventListener('click', filterBooks));

function filterBooks(){
    const button = document.getElementById(this.id);
    const category = button.value;
    let filteredBooks = books.filter(book => book.categoria == category);
    showBooks(filteredBooks);
}

