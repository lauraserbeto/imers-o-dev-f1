
const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next'); 


let currentImageIndex = 0;
const totalImages = images.length;

function showImage(index) {
  images.forEach((image, i) => {
    image.classList.remove('active');
    image.classList.add('inactive');
    if (i === index) {
      image.classList.add('active');
      image.classList.remove('inactive');
    }
  });
}



prevButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
  showImage(currentImageIndex);
});

nextButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % totalImages;
  showImage(currentImageIndex);   

});






const botoesMais = document.querySelectorAll('.btn-mais');

botoesMais.forEach(botao => {
    const conteudoCompleto = botao.nextElementSibling;
    // Inicialmente, esconde o conteúdo completo
    conteudoCompleto.style.display = 'none';

    botao.addEventListener('click', () => {
        conteudoCompleto.style.display = conteudoCompleto.style.display === 'none' ? 'block' : 'none';
    });
});







