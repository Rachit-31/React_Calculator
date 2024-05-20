import styles from "./ButtonContainer.module.css";
const ButtonContainer=({onButtonClick})=>{
    const ButtonNames=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."];
   return(
    <div classNameNameNameNameName={styles.buttonContainer}>
          {ButtonNames.map((buttonName)=>(<button classNameNameNameNameName={styles.button} onClick={()=>onButtonClick(buttonName)}>{buttonName}</button>
          ))}
        </div>
   );   
}
export default ButtonContainer; 