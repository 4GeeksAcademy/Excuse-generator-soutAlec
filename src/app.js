/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let accion = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
      "before the class!",
      "when I was sleeping!",
      "while I was exercising!",
      "during my lunch!",
      "while I was praying!"
  ];
  
  let randIndex = (array) => Math.floor(Math.random() * array.length);

  function generarExcusa(who, accion, what, when) {
      let randWho = randIndex(who);
      let randAccion = randIndex(accion);
      let randWhat = randIndex(what);
      let randWhen = randIndex(when);

      let excusa = `${who[randWho]} ${accion[randAccion]} ${what[randWhat]} ${when[randWhen]}`
      return excusa;
  }
  

  document.getElementById("excusa").innerHTML = generarExcusa(who, accion, what, when);

  
}

