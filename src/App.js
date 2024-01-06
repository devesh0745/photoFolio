import './App.css';
import Albumlist from './Components/albumList';
import Navbar from './Components/navbar';

//react toasts
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar/>
      <Albumlist toast={toast} />
    </div>
  );
}

export default App;
