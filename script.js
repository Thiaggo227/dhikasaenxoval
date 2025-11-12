// ---- Texto animado ----
const topText = document.querySelector('.top-text');
const bottomText = document.querySelector('.bottom-text');

const words = [
  { top: 'SEU', bottom: 'ENXOVAL' },
  { top: 'SEU', bottom: 'ESTILO' },
  { top: 'SUA', bottom: 'ESTÉTICA' }
];

let indexTexto = 0;

setInterval(() => {
  if (!topText || !bottomText) return;
  topText.classList.add('fade-out');
  bottomText.classList.add('fade-out');

  setTimeout(() => {
    indexTexto = (indexTexto + 1) % words.length;
    topText.style.fontFamily = '"Playwrite DE SAS", cursive';
    bottomText.style.fontFamily = '"Playwrite DE SAS", cursive';
    topText.textContent = words[indexTexto].top;
    bottomText.textContent = words[indexTexto].bottom;
    topText.classList.remove('fade-out');
    bottomText.classList.remove('fade-out');
  }, 800);
}, 3000);


// ---- Carrossel Automático ----
let indiceAuto = 0;
const imagensAuto = document.querySelectorAll('.imgCarrosel img');
const totalAuto = imagensAuto.length;

function trocarImagem() {
  imagensAuto[indiceAuto].classList.remove('ativa');
  indiceAuto = (indiceAuto + 1) % totalAuto;
  imagensAuto[indiceAuto].classList.add('ativa');
}

if (imagensAuto.length > 0) {
  setInterval(trocarImagem, 4000);
}


// ---- Efeito de ampliar imagens ao clicar ----
// Ignora imagens com a classe .no-zoom (ex: imagem do WhatsApp)
const imagens = document.querySelectorAll('img:not(.no-zoom)');
const modal = document.getElementById('modal-imagem');
const modalImg = document.getElementById('img-ampliada');
const fechar = document.querySelector('.fechar');

// Quando clicar em qualquer imagem (exceto .no-zoom), abre o modal
imagens.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
  });
});

// Fecha o modal ao clicar no X
if (fechar) {
  fechar.onclick = function() {
    modal.style.display = 'none';
  };
}

// Fecha o modal ao clicar fora da imagem
if (modal) {
  modal.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
}

// ---- MENU HAMBÚRGUER FUNCIONAL (LATERAL ESQUERDO) ----
const menuIcon = document.getElementById('menu');
const navList = document.querySelector('.topo ul');

menuIcon.addEventListener('click', () => {
  navList.classList.toggle('ativo');
});

// Fecha o menu automaticamente ao clicar em um link
navList.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('ativo');
  });
});

