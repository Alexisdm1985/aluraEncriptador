import { VOCALS, VOCALS_REVERSE } from "./constants.js";


export function encriptar(userInput){
    let palabraEncriptada = "";
  
    for (const char of userInput) {
      let vocal = VOCALS[char]; 
      if (vocal){
        palabraEncriptada += vocal;  
      } else {
        palabraEncriptada += char;
      }
    }

    return palabraEncriptada;
  } 
  
  
export function desEncriptar(palabra){
    let palabraDesencriptada = "";

    for (let i in VOCALS_REVERSE){
        if (palabra.includes(i)) {
          let regex = new RegExp(i, "g");
          palabra = palabra.replace(regex, VOCALS_REVERSE[i]);

        } 
    }

    return palabra;
}