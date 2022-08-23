
import './App.css';
import app from './firebase.init';
import {getAuth} from 'firebase/auth'
import Title from './components/Title';

const auth = getAuth(app)


function App() {
  return (
    <div>
      <Title/>
    </div>
  );
}

export default App;
