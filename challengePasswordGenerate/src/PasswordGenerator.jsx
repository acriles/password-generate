import { useState } from 'react'
import './PasswordGenerator.css'
import Slider from "./Slider";

function PasswordGenerator() {
  const [password, setPassword] = useState("P4$5W0rD!");

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

  function generatePassword() {
    // Lógica para gerar uma senha
    const newPassword = "NovaSenhaAqui"; // Substituir pela lógica de geração de senha
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
            <input type="checkbox" name="upperCaseLetters" id="upperCaseLetters" />
            <label htmlFor="upperCaseLetters">Include UpperCase Letters</label>
            <input type="checkbox" name="lowerCaseLetters" id="lowerCaseLetters" />
            <label htmlFor="lowerCaseLetters">Include LowerCase Letters</label>
            <input type="checkbox" name="numbers" id="numbers" />
            <label htmlFor="numbers">Include Numbers</label>
            <input type="checkbox" name="symbols" id="symbols" />
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

