//fetche
fetch("https://kea-alt-del.dk/t7/superheroes/")
  .then((res) => res.json())
  .then(showBeers);

function showBeers(beers) {
  //loope
  beers.forEach(showBeer);
}

function showBeer(Beer) {
  //clone, ændre, appende
  const template = document.querySelector("#temp").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".realName").textContent = Beer.realName;
  copy.querySelector(".alias").textContent = Beer.alias;
  copy.querySelector(".origin").textContent = Beer.origin;

  //appende
  document.querySelector("body").appendChild(copy);
}

/*
{
    powers: ["LL, Run"];
    realName: "Sky";
    alias: "Raccon";
    origin: "Rome";
    weaknesses: "Metal";
    active: "true";
    isEvil: "true";
    height: "172";
    birthday: {
      day: 19;
      month: 7;
      year: 1998;
    }
  
    image: "https://youtu.be/2KcNm6ftD7g?si=rvX9GRx7n3afs-F1";
  }


        <article class="beer">
        <h2 class="realName">Ceva</h2>
        <h2 class="alias">Godcille</h2>
        <h2 class="origin">Nødebo</h2>
        <h2 class="weaknesses">Code, Alcohol</h2>
        <h2 class="active">True</h2>
        <h2 class="isEvil">True</h2>

        <img src="https://images.punkapi.com/v2/keg.png" alt="run" />

      </article>
*/
