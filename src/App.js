import './App.css';
import { Signup } from './Components/Signup'

function App() {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-5'>
          <Signup/>
        </div>
        <div className='col-md-7'>
          some image
        </div>
      </div>
    </div>
  );
}

export default App;
