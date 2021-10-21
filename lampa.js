class Lampa {
  constructor(elem,index) {
    this.elem = elem;
    this.index = index;
    this.allapot = false;
    this.setSzin();
    this.elem.on("click", () => {
      this.fordit();
      this.kattintasTrigger();
    });
  }
  fordit() {
      this.allapot = !this.allapot;
      this.setSzin();
  }

  setSzin() {
    if (this.allapot) {
      this.elem.css("background-color", "#cc33ff");
    } else {
      this.elem.css("background-color", "#39004d");
    }
  }

  kattintasTrigger(){
    let esemeny = new CustomEvent("lampakattintas",{detail:this});
    window.dispatchEvent(esemeny);
}
}
