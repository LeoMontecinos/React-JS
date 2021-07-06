import { NavbarComponent } from "../../Component/NavbarComponents";
import ItemCount from "../../Component/HomeContainer";

const ButtonComponent = () => {
    return <button>Registrate</button>
}
export const HomeContainer = () => {

   const carrito = [];
    return (
        <>
        <header>
          <NavbarComponent cart={carrito} Boton={ButtonComponent}/>
        </header>
        </>
    )
}