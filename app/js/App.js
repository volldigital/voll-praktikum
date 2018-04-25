/**
 * App Class - Main Entry Point
 */
class App {
  constructor(props) {
    const buttons = document.getElementsByClassName("termin");
    var datum = "!Nicht Beantwortet!";
    console.log(buttons);
    buttons[0].addEventListener("click", (e) => {
      console.log("Button wurde gedrückt", this, e);
      datum = buttons[0].value;
      console.log("Hier ist das datum:", datum);
    })

    buttons[1].addEventListener("click", (e) => {
      console.log("Button wurde gedrückt", this, e);
      datum = buttons[1].value;
      console.log("Hier ist das datum:", datum);
    })

    buttons[2].addEventListener("click", (e) => {
      console.log("Button wurde gedrückt", this, e);
      datum = buttons[2].value;
      console.log("Hier ist das datum:", datum);
    })

    buttons[3].addEventListener("click", (e) => {
      console.log("Button wurde gedrückt", this, e);
      datum = buttons[3].value;
      console.log("Hier ist das datum:", datum);
    })

    buttons[4].addEventListener("click", (e) => {
      console.log("Button wurde gedrückt", this, e);
      datum = buttons[4].value;
      console.log("Hier ist das datum:", datum);
    })

    buttons[9].addEventListener("click", (e) => {
      console.log("Button wurde gedrückt", this, e);
      datum = buttons[9].value;
      console.log("Hier ist das datum:", datum);
    })

    buttons[5].addEventListener("click", (e) => {
      console.log("Button wurde gedrückt", this, e);
      datum = buttons[5].value;
      console.log("Hier ist das datum:", datum);
    })

    buttons[6].addEventListener("click", (e) => {
      console.log("Button wurde gedrückt", this, e);
      datum = buttons[6].value;
      console.log("Hier ist das datum:", datum);
    })

    buttons[7].addEventListener("click", (e) => {
      console.log("Button wurde gedrückt", this, e);
      datum = buttons[7].value;
      console.log("Hier ist das datum:", datum);
    })

    buttons[8].addEventListener("click", (e) => {
      console.log("Button wurde gedrückt", this, e);
      datum = buttons[8].value;
      console.log("Hier ist das datum:", datum);
    })

    buttons[10].addEventListener("click", (e) => {
      console.log("Button wurde gedrückt", this, e);
      datum = buttons[10].value;
      console.log("Hier ist das datum:", datum);
    })

    buttons[11].addEventListener("click", (e) => {
      console.log("Button wurde gedrückt", this, e);
      datum = buttons[11].value;
      console.log("Hier ist das datum:", datum);
    })

    buttons[12].addEventListener("click", (e) => {
      console.log("Button wurde gedrückt", this, e);
      datum = buttons[12].value;
      console.log("Hier ist das datum:", datum);
    })

    buttons[13].addEventListener("click", (e) => {
      console.log("Button wurde gedrückt", this, e);
      datum = buttons[13].value;
      console.log("Hier ist das datum:", datum);
    })

    buttons[14].addEventListener("click", (e) => {
      console.log("Button wurde gedrückt", this, e);
      datum = buttons[14].value;
      console.log("Hier ist das datum:", datum);
    })

    buttons[15].addEventListener("click", (e) => {
      console.log("Button wurde gedrückt", this, e);
      datum = buttons[15].value;
      console.log("Hier ist das datum:", datum);
    })

    buttons[16].addEventListener("click", (e) => {
      console.log("Button wurde gedrückt", this, e);
      datum = buttons[16].value;
      console.log("Hier ist das datum:", datum);
    })

    buttons[17].addEventListener("click", (e) => {
      console.log("Button wurde gedrückt", this, e);
      datum = buttons[17].value;
      console.log("Hier ist das datum:", datum);
    })

    const privacy = document.getElementsByClassName("privacy");
    console.log(privacy);
    var privat = "!Nicht Beantwortet!";

    privacy[0].addEventListener("click", (e) => {
      console.log("Button wurde gedrückt", this, e);
      privat = privacy[0].value;
      console.log("Dürfen wir?", privat);
    })

    privacy[1].addEventListener("click", (e) => {
      console.log("Button wurde gedrückt", this, e);
      privat = privacy[1].value;
      console.log("Dürfen wir?", privat);
    })

    const absenden = document.getElementById("absenden");
    console.log(absenden);
    absenden.addEventListener("click", (e) => {
      console.log("Button wurde gedrückt", this, e);
      window.alert("Ihr Termin findet am " +datum+ " statt.\n\n Auf unsere Datenschutzfrage haben Sie mit " +privat+ " geantwortet.\n\n Vielen Dank für Ihre Anmeldung.")
    })



  }
}

export default App;
