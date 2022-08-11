const places = [
  {
    id: 1,
    place: 'Ankara, Turki',
    image: 'https://ik.imagekit.io/lza/bazaar-1853361_1920_dSHdm_jrs.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660231908333' 
  },
  {
    id: 2,
    place: 'Gurun Sahara',
    image: 'https://ik.imagekit.io/lza/desert_etjNclDSo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660231908405'
  },
  {
    id: 3,
    place: 'Madrid, Spanyol',
    image: 'https://ik.imagekit.io/lza/spain-4522800_1920_i_Ov7ck4c.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660231906591'
  },
  {
    id: 4,
    place: 'Jawa Barat, Indonesia',
    image: 'https://ik.imagekit.io/lza/sawah_I8_yCsvUl.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660231925092'
  },
  {
    id: 5,
    place: 'Kota Tangier, Maroko',
    image: 'https://ik.imagekit.io/lza/maroko_x6gz7i8KG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660231914125'
  },
  {
    id: 6,
    place: 'Kota Yogyakarta, DI Yogyakarta',
    image: 'https://ik.imagekit.io/lza/pantai_mNQMsOfoq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660231915654'
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

