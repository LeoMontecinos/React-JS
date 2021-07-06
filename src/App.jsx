import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {NavbarComponent} from './Component/NavbarComponents';
import {HomeContainer} from './Containers/HomeContainer';
import ItemListContainer from './ItemListContainer';
import ItemCount from './ItemCount';

function App() {
  return (
    <div className='App'>
    <HomeContainer/>
    <ItemListContainer greeting={'Hola a todos'}/>
    <ItemCount/>
    </div>
  );
}

export default App;
