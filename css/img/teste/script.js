var banners = ["011.png","012.png"];
var bannerAtual = 0;

function trocaBanner() {
  bannerAtual = (bannerAtual + 1) % 2;
  document.querySelector('').src = banners[bannerAtual];
}

setInterval(trocaBanner, 4000);