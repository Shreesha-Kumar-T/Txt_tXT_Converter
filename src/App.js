import Navbar from "./Components/Navbar";//import Navbar function
import TextForm from "./Components/TextForm";
import React, { useState } from 'react';
import Alert from "./Components/Alert";
function App() {
  const [mode, setMode] = useState("light");
  const [mystyle, setmystyle] = useState({
    color: 'black',
    backgroundColor: "white"
  });
  const [butntxt, butntxtset] = useState("Enable White Mode");
  const [alert, setalert] = useState(null);
  const changemystyle = () => {
    if (mode === "light") {
      setMode("black");
      setmystyle({
        color: 'white'
      });
      document.body.style.backgroundColor = "#111f3f";
      butntxtset("Enable Dark Mode");
      setalert("You have enabled Dark Mode");
    }
    else {
      setMode("light");
      setmystyle({
        color: 'black'
      });
      document.body.style.backgroundColor = "white";
      butntxtset("Enable Light Mode");
      setalert("You have enabled White Mode");
    }
  }
  setTimeout(() => { setalert(null) }, 2500);
  return (
    <>
      <Navbar title="Txt-tXT" aboutText="AboutUs" modeset={mode} changemystyle={changemystyle} mystyle={mystyle} butntxt={butntxt} />
      {/* all Navbar related code is kept separately with neatness. We can change the the title and abouttext from this part itself and will be reflected wherever it is supposed to be. */}
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading="Text Converter" mystyle={mystyle} />
      </div>
    </>
  );
}

export default App;
