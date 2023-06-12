//import { Button, Badge } from 'react-bootstrap';
import Introduction from './components/Introduction/Introduction';
import NavBarMenu from './components/NavBarMenu';
import Services from './components/Services/Services';
import DynamicForm from './components/DynamicForm/DynamicForm';

function App() {

  return (

    <div>

      <NavBarMenu />
      <Introduction />
      <Services />
      <DynamicForm />
      

    </div>
  );
}

export default App;