import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function contador() {
  const [totalSegundos, SettotalTempoemsegundos] = useState(5);
  const minutos = Math.floor(totalSegundos / 60);
  const segundos = totalSegundos % 60;
  useEffect(() => {
    if (totalSegundos === 0) {
       return;
    } else {
      setTimeout(() => {
        SettotalTempoemsegundos(totalSegundos - 1);
      }, 1000);
    }
    [totalSegundos];
  });
    
  return (
    <div>
      <span>{minutos.toString().padStart(2, "0")}</span>
      <span>:</span>
      <span>{segundos.toString().padStart(2, "0")}</span>
    </div>
  );
}
export default contador;