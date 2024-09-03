
document.addEventListener('DOMContentLoaded', function() {
    const books = document.querySelectorAll('.book');
    let currentIndex = 0;

    books[currentIndex].addEventListener('click', function() {
        books.forEach((book, index) => {
            if (index > currentIndex) {
                setTimeout(() => {
                    book.classList.remove('hidden');
                    book.classList.add('visible');
                }, (index - currentIndex) * 300); 
            }
        });
    });
});

