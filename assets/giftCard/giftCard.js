const divGiftCard = document.querySelector('.contenedor-card');

const htmlCard = (dato1, dato2, dato3) => {
  const card = `
    <section class="section-card">
        

        <div class="info-card">
            <div>
                <img class="logo-gifCard" src="./img/logo.svg" width="250" height="180"">
            </div>

            <div class="datos-card">
                <p id="nombre-card">Hola, ${dato1}</p>
                <p id="nombre-card">¡Tenes un obsequio!</p>
                <p id="producto-card">Voucher válido para disfrutar de ${dato2} en Nairobi Lounge Bar, Suipacha 238 de Ciudad.</p>
                <p id="vencimiento-card">Vto: ${dato3}</p>
            </div>
        </div>
    </section>
  `;

  const div = document.createElement('div');
  div.innerHTML = card;

  divGiftCard.append(div.firstElementChild);

  return div.firstElementChild;
}

const agregarDatos = () => {
  let nombre = document.querySelector('.nombre').value;
  let producto = document.querySelector('.producto').value;
  let vencimiento = document.querySelector('.vencimiento').value;

  htmlCard(nombre, producto, vencimiento);

  // Reestablece los valores del input
  document.querySelector('.nombre').value = '';
  document.querySelector('.producto').value = '';
  document.querySelector('.vencimiento').value = '';
}
