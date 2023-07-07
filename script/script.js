window.onload = function () {
  logo();
};

// funzione per far generare un numero casuale al click del pulsante

//prendo il container per generare l'html

const row = document.getElementById("row");
const random = function () {
  const div = document.createElement("div");
  div.classList.add("col");
  div.innerHTML = `<div class="contain ">
  <img id="img" style="cursor:pointer" src="https://lirp.cdn-website.com/f8677140/dms3rep/multi/opt/Logo+moto+360+senza+Rettangolo-160w.png"/>
<h1 class="title fs-4 text-center text-capitalize" id="h1">Premi per scoprire se hai vinto!</h1>
<button class="fs-4" id="btn-lottery">Gioca</button>
<p id="p"></p>
</div>
`;
  row.appendChild(div);
  //prendo il bottone
  const btn = document.getElementById("btn-lottery");
  //creo numeri casuali
  let rnd = Math.floor(Math.random() * 20);
  console.log(rnd);

  //prendo il testo h1 della pagina
  const h1 = document.getElementById("h1");
  //prendo p
  const p = document.getElementById("p");
  //funzione al  singolo click, senza possibilità di ripetere
  btn.addEventListener("click", function () {
    //assegno la vincita all'uscita di un numero specifico per maggiorare possibilità di perdita
    if (rnd === 10) {
      h1.innerHTML = `Hai vinto un premio piccolo!!`;
      btn.style.display = "none";
      p.classList.add("fs-4", "text-center");
      p.innerHTML = `Complimenti! fai uno screenshot e invialo qui <a id="wa" class="text-success" target="_blank" href="https://wa.me/3275498216"> Imoto360</a>  `;
      //funzione per riportare l'utente sul sito, sezione contatti(solo se vince), se perde rimando sulla home del sito
      const a = document.getElementById("wa");
      a.addEventListener("click", function () {
        a.innerHTML = `id="wa" target="_blank" href="https://wa.me/3275498216">Imoto360</a>
        `;
        p.classList.add("d-none");
        setTimeout(function () {
          window.location.href = "https://www.imoto360.it/contatti";
        }, 5000);
      });
      // setTimeout(function () {
      //   window.location.href = "https://www.imoto360.it/contatti";
      // }, 3000);
    } else if (rnd === 15) {
      h1.innerHTML = `Hai vinto un premio medio!!`;
      btn.style.display = "none";
      p.classList.add("fs-4", "text-center");
      p.innerHTML = `Complimenti! fai uno screenshot e invialo qui <a id="wa" class="text-success" target="_blank" href="https://wa.me/3275498216"> Imoto360</a>  `;
      //funzione per riportare l'utente sul sito, sezione contatti(solo se vince), se perde rimando sulla home del sito
      const a = document.getElementById("wa");
      a.addEventListener("click", function () {
        a.innerHTML = `id="wa" target="_blank" href="https://wa.me/3275498216">Imoto360</a>
        `;
        p.classList.add("d-none");
        setTimeout(function () {
          window.location.href = "https://www.imoto360.it/contatti";
        }, 5000);
      });
    } else if (rnd === 20) {
      h1.innerHTML = `Hai vinto un premio grande!!`;
      btn.style.display = "none";
      p.classList.add("fs-4", "text-center");
      p.innerHTML = `Complimenti! fai uno screenshot e invialo qui <a id="wa" class="text-success" target="_blank" href="https://wa.me/3275498216"> Imoto360</a>  `;
      //funzione per riportare l'utente sul sito, sezione contatti(solo se vince), se perde rimando sulla home del sito
      const a = document.getElementById("wa");
      a.addEventListener("click", function () {
        a.innerHTML = `id="wa" target="_blank" href="https://wa.me/3275498216">Imoto360</a>
        `;
        p.classList.add("d-none");
        setTimeout(function () {
          window.location.href = "https://www.imoto360.it/contatti";
        }, 5000);
      });
    } else {
      h1.innerHTML = `Ohhh nooo non hai vinto!`;
      btn.style.display = "none";
      setTimeout(function () {
        window.location.href = "https://www.imoto360.it/";
      }, 3000);
    }
  });
};

//faccio apparire il logo al load della pagina,con il click
const logo = function () {
  const row = document.getElementById("row");
  const div = document.createElement("div");
  div.classList.add("col");
  div.innerHTML = `<img id="img" style="cursor:pointer" src="https://lirp.cdn-website.com/f8677140/dms3rep/multi/opt/Logo+moto+360+senza+Rettangolo-160w.png"/>`;
  row.appendChild(div);
  document.getElementById("img").addEventListener("click", function () {
    div.classList.add("d-none");
    random();
  });
};
