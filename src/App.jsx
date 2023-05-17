import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Navbars from './Components/Navbars';
import Routings from './Pages/Routings';

function App() {

  return (
    <BrowserRouter>
      <Navbars/>
      <Routings/>
    </BrowserRouter>
  )
}

export default App
