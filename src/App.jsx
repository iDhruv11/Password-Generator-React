import React, { useRef, useState } from "react";

const App = () => {
  
  const [length, setLength] = useState(8);
  const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const characters = '%*&^@';
  const numbers = '1234567890';
  const [charStr, setCharStr] = useState(alphabets);
  const sliderValue = useRef();
  let password = '';
  let passwordIsGood = false;
  const numCheckbox = useRef(
    {
      checked : null
    }
  );
  const charCheckbox = useRef(
    {
      checked : null
    }
  );

  // Function to generate a password 
  const generatePassword = () => {
    password = '';
    for (let i = 0; i < length; i++) {
      password += charStr[Math.floor(Math.random() * charStr.length)]
    }
  }

  // Function to Verify the password
  const verifyPassword = () => {

    let numCount = null;
    let charCount = null;

    if(numCheckbox.current.checked){

      numCount = 0;
      for(let i = 0; i<numbers.length; i++){
        if(password.includes(numbers[i])){
          numCount++;
          break;
        }
      }

    }
    if(charCheckbox.current.checked){

      charCount = 0;
      for(let i = 0; i<characters.length; i++){
        if(password.includes(characters[i])){
          charCount++;
          break;
        }
      }

    }

    if(numCount == null && charCount == null) return true;
    if(numCount == 0 || charCount == 0) return false;
    return true;
      
  }

  // Function to handle password length slider 
  const handleSlider = () => {
    setLength(sliderValue.current.value);
  }
  
  // Loop to keep generating password untill the password meets required criteria
  while(!passwordIsGood){
    generatePassword();
    passwordIsGood = verifyPassword();
  }

  return (

    <div className="bg-black h-lvh pt-20">

      {/* Main Card */}
      <div className="w-[900px] bg-gray-800 px-8 py-6 rounded-md mx-auto">

        {/* Generated Password Field */}
        <div className="bg-white flex justify-between rounded-md mb-10">
          <p className="text-orange-500 text-2xl py-2 px-4">{password}</p>
          <p className="bg-blue-600 rounded-r-md text-2xl text-white py-2 px-4 cursor-pointer ring-[.1px] ring-blue-600">copy</p>
        </div>

        {/* Password Structure Controls */}
        <div className="flex gap-5 text-xl text-orange-500">

          {/* Password Length Control Slider */}
          <div className="flex">
            <input
              type="range"
              name="length"
              min="8"
              max="50"
              defaultValue="8"
              step="1"
              ref={sliderValue}
              onInput={handleSlider}
            />
            <label className="ml-2">Length ({length})</label>
          </div>

          {/* Number Inclusion Checkbox */}
          <div className="flex">
            <input
              type="checkbox"
              name="numbers"
              id="numbers"
              className="w-4"
              ref={numCheckbox}
              onChange={
                () => {

                  if (numCheckbox.current.checked) {

                    setCharStr(charStr + numbers)
                  }
                  else {
                    setCharStr(charStr.replace('1234567890', ''))
                  }
                }
              }
            />
            <label htmlFor="numbers" className="ml-2">Numbers</label>
          </div>

          {/* Character Inclusion Checkbox  */}
          <div className="flex">
            <input
              type="checkbox"
              name="characters"
              id="characters"
              className="w-4"
              ref={charCheckbox}
              onChange={
                () => {

                  if (charCheckbox.current.checked) {
                    setCharStr(charStr + characters)
                  }
                  else {
                    setCharStr(charStr.replace('%*&^@', ''))
                  }
                }
              }
            />
            <label htmlFor="characters" className="ml-2">Characters</label>
          </div>

        </div>
      </div>

    </div>

  )
}

export default App;