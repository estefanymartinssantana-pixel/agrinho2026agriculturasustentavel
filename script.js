// Efeito de mudar a cor do menu ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#1e4b2b'; // Verde mais escuro ao rolar
        header.style.padding = '15px 50px'; // Diminui o tamanho do menu sutilmente
    } else {
        header.style.backgroundColor = '#2e6f40'; // Cor original
        header.style.padding = '20px 50px';
    }
});