// Ativar link
const links = document.querySelectorAll(".header-menu a")

function ativarLink(link) {
  const url = location.href
  const href = link.href.replace(".html", "")

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink)


// Ativar itens do orçamento

const params = new URLSearchParams(location.search)

function ativarProduto(param) {
  element = document.getElementById(param);

  if (element) {
    element.checked = true;
  }

}

params.forEach(ativarProduto);



// Ativar perguntas em perguntas frequentes em seguros.html
perguntas = document.querySelectorAll(".perguntas button")

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");

  const ativa = resposta.classList.contains("ativa");

  pergunta.setAttribute("aria-expanded", ativa);
}

function addPerguntaListener(pergunta) {
  pergunta.addEventListener("click", ativarPergunta)

}

perguntas.forEach(addPerguntaListener)


// Trocar imagem bicicleta


imagens = document.querySelectorAll(".bicicleta-imagens img")
galeria = document.querySelector(".bicicleta-imagens")

function prependImagem(event) {
  const imagem = event.currentTarget

  const media = matchMedia("(min-width:1000px)").matches

  if (media) {
    galeria.prepend(imagem)
  }
}

function imagemEventos(imagem) {
  imagem.addEventListener("click", prependImagem)
}

imagens.forEach(imagemEventos)

// Animação index


if (window.SimpleAnime) {
  new SimpleAnime()
}