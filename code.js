let btEnviar = document.getElementById('btn-send');


function alertaEnvio() {
    alert('Mensagem enviada com sucesso!')
}

btEnviar.onclick = () => alertaEnvio();

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { 'lat: -34.397, lng: 150.644' },
    disableDefaultUI: true,
    zoom: 8,
  });
}

initMap();

// Quantity should be the same in Sass
- var quantity = 15

- for (var i = 1; i <= quantity; i++)
  .firefly