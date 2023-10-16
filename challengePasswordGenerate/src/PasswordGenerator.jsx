import { useState } from 'react'
import './PasswordGenerator.css'
import Slider from "./Slider";

function PasswordGenerator() {
  const [password, setPassword] = useState("P4$5W0rD!");
  const [includeLowerCase, setIncludeLowerCase]= useState(false)
  const [includeUpperCase, setIncludeUpperCase]= useState(false)
  const [includeNumbers, setIncludeNumbers]= useState(false)
  const [includeSymbols, setIncludeSymbols]= useState(false)

  //Funções auxiliares para a geração de senhas
  function getLowerCase(){
    return String.fromCharCode( (Math.floor(Math.random() * 26) + 97) )
  }

  function getUpperCase(){
    return String.fromCharCode( (Math.floor(Math.random() * 26) + 65) )
  }

  function getNumber(){
    return Math.floor((Math.random()*10)).toString()
  }

  function getSymbols(){
    const symbols= "!@#$%&*.?[]{}()"  
    return symbols[Math.floor(Math.random()*symbols.length)]
  }

  function setArrayFunctions(array){
    if(includeLowerCase){
      array.push(getLowerCase)
    }
    if(includeUpperCase){
      array.push(getUpperCase)
    }
    if (includeNumbers) {
      array.push(getNumber)
    }
    if(includeSymbols){
      array.push(getSymbols)
    }
  }

  //Geração de uma senha com no mínimo 4 caracteres
  function generatePassword() {
    let passwordLength= Math.floor( Math.random()* 20)
    if (passwordLength<4) {
      passwordLength= passwordLength+ (4 - passwordLength)
    }

    let arrayFunctions= []
    setArrayFunctions(arrayFunctions)

    let new_password=""
    let i=0
    for(i=0;i<passwordLength;i++){
      new_password += arrayFunctions[Math.floor( Math.random()* arrayFunctions.length)]() 
    }
    
    const newPassword = new_password
    setPassword(newPassword);
  }

  
  return (
    <>
      <div className="main-container">

        <h1>Password Generator</h1>

        <input
          type="text"
          id="password-input"
          value={password}
          readOnly
          placeholder={password}
        />

        <div id='box'>

          <Slider />

          <div id='checkboxes'>
            <input type="checkbox" name="upperCaseLetters" id="upperCaseLetters" checked={includeUpperCase} onChange={()=>setIncludeUpperCase(!includeUpperCase)}/>
            <label htmlFor="upperCaseLetters">Include UpperCase Letters</label>
            <input type="checkbox" name="lowerCaseLetters" id="lowerCaseLetters" checked={includeLowerCase} onChange={()=>setIncludeLowerCase(!includeLowerCase)}/>
            <label htmlFor="lowerCaseLetters">Include LowerCase Letters</label>
            <input type="checkbox" name="numbers" id="numbers" checked={includeNumbers} onChange={()=>setIncludeNumbers(!includeNumbers)}/>
            <label htmlFor="numbers">Include Numbers</label>
            <input type="checkbox" name="symbols" id="symbols" checked={includeSymbols} onChange={()=>setIncludeSymbols(!includeSymbols)}/>
            <label htmlFor="symbols">Include Symbols</label>
          </div>

          <div id='strength'>Strength</div>

          <div id="div-generator">
             <button id='generate' onClick={generatePassword}>GENERATE</button>
          </div>

        </div>
      </div>
    </>
  );
}

export default PasswordGenerator