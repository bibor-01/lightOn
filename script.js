$(function () {
  //a szülő elem és a sablon elem meghatározása
  const szuloElem = $("article");
  const sablonElem = $(".lampa");
  const lampaTomb = [];
  const meret = 9;

  //sablon elem klónozása és a szülőelem csatolása
  for (let index = 0; index < meret; index++) {
    const ujElem = sablonElem.clone().appendTo(szuloElem);
    //példányosítás
    const lampa = new Lampa(ujElem, index);
    //az objektumokat bele tesszük egy tömbe
    lampaTomb.push(lampa);
  }
  console.log(lampaTomb);
  sablonElem.remove();

  $(window).on("lampakattintas", (event) => {
    console.log(event.detail); //az aktuális kártya adata

    let index = Number(event.detail.index);
    //az, amelyik kiváltotta az esemenyt
    //lampaTomb.push(event.detail);
    if (index % 3 !== 0) {
      lampaTomb[index - 1].fordit();
    }
    if (index % 3 !== 2) {
      lampaTomb[index + 1].fordit();
    }
    if (index >= 3) {
      lampaTomb[index - 3].fordit();
    }
    if (index <= 5) {
      lampaTomb[index + 3].fordit();
    }
  });
});
