import { useState } from "react";
import React from 'react';

export const HomeContainer = () => {
   const [contador, setContador] = useState(0);

   /*function validaContador() {
       if(){}
       setContador(contador-1);
   }*/

    return (
        <>
        <section>
            <button onClick={() => {validaContador()}}>-</button>
            {contador}
            <button onClick={() => {setContador(contador+1)}}>+</button>
        </section>
        </>
    )
}

export default itemCount