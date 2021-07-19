import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './spotify';



function App() {
    //[variable, function]
    const [token, setToken] = useState(null);

  // Run code based on a given condition and always a function
    useEffect(() => {
      const hash = getTokenFromUrl();
        // = "" is suppose to hide key
      window.location.hash = "";
      const _token = hash.access_token;

      if(_token){
        setToken(_token)
      }
      console.log("I HAVE A TOKEN >>>>>", token);

    }, []);

  return (
    <div className="App">
      {token ? (<h1>I am logged-in</h1>) : <Login />}

      {/*/ Spotift Logo */}
      {/*/ Login with spotify button */}
     


    </div>
  );
}

export default App;


// NOTES
  // use effect: 
  // useEffect(() => {
  //   //code...
  // }, []); this will only run once because of the empty brackets and if a param is inside the brackets, it'll run once on that variable param change

  // Use State is a short term memory store. On reload variable memory is gone