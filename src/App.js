import logo from './logo.svg';
import './App.css';
import {auth,provider} from "./components/config";
import {signInWithPopup} from "firebase/auth";

function App() {

  const handleClick =()=>{
    signInWithPopup(auth,provider).then((data)=>{
        console.log(data)
    })
}

  return (
    <div className="App">
      <button onClick={handleClick}>Google signin</button>
    </div>
  );
}

export default App;
