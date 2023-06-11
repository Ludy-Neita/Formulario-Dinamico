import { Button, Badge } from 'react-bootstrap';
import Introduction from './componests/Introduction/Introduction';
import NavBarMenu from './componests/NavBarMenu';
import Services from './componests/Services/Services';

function App() {

  return (

    <div>

      <NavBarMenu />
      <Introduction />
      <Services />

    </div>
  );
}

export default App;