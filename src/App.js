import React from 'react';
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"

function App() {
  const [toggleRegisterPage, setToggleRegister] = React.useState(false)

  function handleClick() {
    setToggleRegister(prevValue => {
      return !prevValue
    })
  }
  

  return (
    <div className="App">
        <Header toggle={handleClick}/>
        <Body register={toggleRegisterPage} toggle={handleClick} />
        <Footer />
    </div>
  );
}

export default App;
