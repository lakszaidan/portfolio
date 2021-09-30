const places = [
  {
    id: 1,
    place: 'Ankara, Turki',
    image: 'assets/images/bazaar-1853361_1920.jpg' 
  },
  {
    id: 2,
    place: 'Gurun Sahara',
    image: 'assets/images/desert.jpg'
  },
  {
    id: 3,
    place: 'Madrid, Spanyol',
    image: 'assets/images/spain-4522800_1920.jpg'
  },
  {
    id: 4,
    place: 'Jawa Barat, Indonesia',
    image: 'assets/images/sawah.jpg'
  },
  {
    id: 5,
    place: 'Kota Tangier, Maroko',
    image: 'assets/images/maroko.jpg'
  },
  {
    id: 6,
    place: 'Kota Yogyakarta, DI Yogyakarta',
    image: 'assets/images/pantai.jpg'
  }
]

function renderPlaces(item){
  const catalogs = document.getElementById('catalog')

  for(index = 0; index < item.length; index++){
    catalogs.innerHTML += `<div class="catalog-list">
    <img src=${item[index].image} alt="image">
    <p><i class="fas fa-map-marker-alt"></i> ${item[index].place}</p>
  </div>`
  }

  console.log(places[0])
}

const navbar = document.getElementById("navbar");
const footer = document.getElementById("footer");

footer.innerHTML = `<div class="brand col-lg-4">
<h1 class="title">TRAVA</h1>
<p>Have Your Trip Undoubtedly</p>
<p style="letter-spacing: normal; margin-top: 50px;">&#169; TRAVA. All Rights Reserved</p>
</div>
<div class="address col-lg-3">
<h5>Visit Us</h5>
<table>
  <tr>
    <td><i class="fas fa-map-pin"></i></td>
    <td><a href="#">Jl. Diponegoro No.22, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115</a>
    </td>
  </tr>
</table>
</div>
<div class="contact col-lg-3">
<h5>Business Inquiries</h5>
<p><i class="fas fa-at"></i><a href="#">travabdg@travel.vom</a></p>
</div>
<div class="socials col-lg-2">
<h5>Follow Us</h5>
<table>
  <tr>
    <td><i class="fab fa-instagram"></i></td>
    <td><a href="#">Instagram</a></td>
  </tr>
  <tr>
    <td><i class="fab fa-facebook-f"></i></td>
    <td><a href="#">Facebook</a></td>
  </tr>
  <tr>
    <td><i class="fab fa-twitter"></i></td>
    <td><a href="#">Twitter</a></td>
  </tr>
</table>
</div>`;

renderPlaces(places)

