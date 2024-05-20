import Display from './components/Display';
import ButtonContainer from './components/ButtonContainer';
import styles from './App.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';



function App() {
  let [calVal,setcalVal]=useState("");
  const onButtonClick=(buttonText)=>{
    if(buttonText==='C'){
      setcalVal("")
    }
    else if(buttonText==='='){
      // eval jo bhi mathematical expression hoga usko execute kr dega
      const result =eval(calVal);
      setcalVal(result);
    }
    else{
      const newDisplayval=calVal +buttonText;
      setcalVal(newDisplayval);
    }
  };

  return (
       <div classNameNameNameNameName={styles.calculator}>
        <Display displayVal={calVal}></Display>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    
  );
}

export default App;
