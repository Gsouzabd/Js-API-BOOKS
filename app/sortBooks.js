const btnSortByPrice = document.getElementById('btnOrdenarPorPreco');

btnSortByPrice.addEventListener('click', sortByPrice);

function sortByPrice(){
   let sortBooks = books.sort((a, b)=> a.preco - b.preco);
   showBooks(sortBooks);
}