/**
 * App Class - Main Entry Point
 */
class App {
  constructor(props) {

    /*Variabeln*/
    const buttons = document.getElementsByClassName("termin");
    const privacy = document.getElementsByClassName("privacy");
    const absenden = document.getElementById("absenden");
    const buttonArray = Array.from(buttons);
    var datum = "!Nicht Beantwortet!";
    var privat = "!Nicht Beantwortet!";
    var date;
    var time;
    var recolor;
    console.log(buttonArray);
    console.log(privacy);
    console.log(absenden);

    /*Buttons für Zeit und Wochentagen*/
    {
      buttonArray.forEach(button => 
      {
        button.addEventListener('click', (e) => 
        {
          console.log("Button Click:", e.target.value);
          datum = e.target.value;
          buttonArray.forEach(button =>
          {
            button.style.backgroundColor= "black";
            button.style.color= "white";
          })
          e.target.style.backgroundColor= "white";
          e.target.style.color= "black";
        });
      })
    }

    /*Buttons für Datenschutz*/
    {
      privacy[0].addEventListener("click", (e) => 
      {
        console.log("Button Click:", e.target.value);
        privat = e.target.value;
        document.getElementsByTagName("button")[19].style.backgroundColor= "black";
        document.getElementsByTagName("button")[19].style.color= "white";
        document.getElementById("b19").style.backgroundColor= "white";
        document.getElementById("b19").style.color= "black";
      })

      privacy[1].addEventListener("click", (e) => 
      {
        console.log("Button Click:", e.target.value);
        privat = e.target.value;
        document.getElementsByTagName("button")[18].style.backgroundColor= "black";
        document.getElementsByTagName("button")[18].style.color= "white";
        document.getElementById("b20").style.backgroundColor= "white";
        document.getElementById("b20").style.color= "black";
      })
    }

    /*Button fürs Absenden der Anmeldung*/
    {
      absenden.addEventListener("click", (e) => 
      {
        console.log("Button Click:", e.target, "Anmelden");
        if (datum == "!Nicht Beantwortet!")
          {
            window.alert("Nicht komplett ausgefüllt!");
          }else if (privat == "!Nicht Beantwortet!")
            {
              window.alert("Nicht komplett ausgefüllt!");
            }else
              {
                console.log("Datum: ", datum, ", ", "Privacy: ", privat );
                window.alert("Ihr Termin findet am " +datum+ " statt.\n\n Auf unsere Datenschutzfrage haben Sie mit " +privat+ " geantwortet.\n\n Vielen Dank für Ihre Anmeldung.");
                datum = "!Nicht Beantwortet!";
                privat = "!Nicht Beantwortet!";
                recolor = document.querySelectorAll("button[type='button']");
                const recolorArray = Array.from(recolor);
                recolorArray.forEach(button =>
                {
                  button.style.backgroundColor= "black";
                  button.style.color="white";
                })
              }
      })
    }

  }
}

export default App;