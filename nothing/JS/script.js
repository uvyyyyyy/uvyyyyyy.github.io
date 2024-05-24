let currentPage = 1;

function changePage(page) {
    hideAllPages();
    showPage(page);
    currentPage = page;
    updateNavigationButtons();
}

function showPage(page) {
    document.getElementById(`page${page}`).style.display = 'block';
}

function hideAllPages() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`page${i}`).style.display = 'none';
    }
}

function nextPage() {
    if (currentPage < 5) {
        changePage(currentPage + 1);
    }
}

function previousPage() {
    if (currentPage > 1) {
        changePage(currentPage - 1);
    }
}

function updateNavigationButtons() {
    const prevButton = document.querySelector('.navigation button:nth-child(1)');
    const nextButton = document.querySelector('.navigation button:nth-child(2)');

    prevButton.innerHTML = currentPage === 1 ? 'Previous' : `Page ${currentPage - 1}`;
    nextButton.innerHTML = currentPage === 5 ? 'Next' : `Page ${currentPage + 1}`;
}
