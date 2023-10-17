import React, { useState } from 'react';
import './PasswordGenerator.css';
import Slider from './Slider';

function PasswordGenerator() {
  const [password, setPassword] = useState('P4$5W0rD!');
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [passwordLength, setPasswordLength] = useState(10);

  function getLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getNumber() {
    return Math.floor(Math.random() * 10).toString();
  }

  function getSymbols() {
    const symbols = '!@#$%&*.?[]{}()';
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  function setArrayFunctions(array) {
    if (includeLowerCase) {
      array.push(getLowerCase);
    }
    if (includeUpperCase) {
      array.push(getUpperCase);
    }
    if (includeNumbers) {
      array.push(getNumber);
    }
    if (includeSymbols) {
      array.push(getSymbols);
    }
  }

  function generatePassword() {
    let arrayFunctions = [];
    setArrayFunctions(arrayFunctions);

    let new_password = '';
    let i = 0;
    for (i = 0; i < passwordLength; i++) {
      new_password += arrayFunctions[Math.floor(Math.random() * arrayFunctions.length)]();
    }

    const newPassword = new_password;
    setPassword(newPassword);
  }

  function determineStrengthClass() {
    const selectedCount = [includeLowerCase, includeUpperCase, includeNumbers, includeSymbols].filter(
      (value) => value
    ).length;

    

    switch (selectedCount) {
      case 1:
        return 'weak';
      case 2:
        return 'medium';
      case 3:
        return 'strong';
      case 4:
        return 'very-strong';
      default:
        return 'strenght';
    }
  }

  return (
    <div className="main-container">
      <h1>Password Generator</h1>

      <input type="text" id="password-input" value={password} readOnly placeholder={password} />

      <div id="box">
        <Slider passwordLength={passwordLength} setPasswordLength={setPasswordLength} />
        <div id="checkboxes">
          <input
            type="checkbox"
            name="upperCaseLetters"
            id="upperCaseLetters"
            checked={includeUpperCase}
            onChange={() => setIncludeUpperCase(!includeUpperCase)}
          />
          <label htmlFor="upperCaseLetters">Include UpperCase Letters</label>
          <input
            type="checkbox"
            name="lowerCaseLetters"
            id="lowerCaseLetters"
            checked={includeLowerCase}
            onChange={() => setIncludeLowerCase(!includeLowerCase)}
          />
          <label htmlFor="lowerCaseLetters">Include LowerCase Letters</label>
          <input
            type="checkbox"
            name="numbers"
            id="numbers"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          <label htmlFor="numbers">Include Numbers</label>
          <input
            type="checkbox"
            name="symbols"
            id="symbols"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          <label htmlFor="symbols">Include Symbols</label>
        </div>

        <div id="strength" className={determineStrengthClass()}>
          {determineStrengthClass().toUpperCase()}
        </div>

        <div id="div-generator">
          <button id="generate" onClick={generatePassword}>
            GENERATE
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
