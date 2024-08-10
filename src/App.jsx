import React, { useRef, useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const characters = '%*&^@';
  const numbers = '1234567890';
  const [charStr, setCharStr] = useState(alphabets);
  const sliderValue = useRef();
  const numCheckbox = useRef();
  const charCheckbox = useRef();
  const prevState = useRef(charStr)
  let password = '';
  for(let i=0; i<length; i++){
    password += charStr[Math.floor(Math.random()*charStr.length)]
  }
  const handleSlider = () => {
    setLength(sliderValue.current.value);
  }
  // let validateNum  = true;
  // let validateChar = true;
  // if(numCheckbox.current.checked){
  //   for(let i = 0; i<=numbers.length; i++){
  //     if(password.includes(numbers[i])){
  //       validateNum = true;
  //       break;
  //     }
  //     validateNum = false;
  //   }
  // }
  // if(charCheckbox.current.checked){
  //   for(let i = 0; i<=characters.length; i++){
  //     if(password.includes(characters[i])){
  //       validateChar = true;
  //       break;
  //     }
  //     validateChar = false;
  //   }
  // }
  // if(validateNum == false || validateNum == false){
  //   setCharStr(sliderValue.current.value)
  // }

  return (
    <div className="bg-black h-lvh pt-20">
      <div className="w-[900px] bg-gray-800 px-8 py-6 rounded-md mx-auto">
        <div className="bg-white flex justify-between rounded-md mb-10">
          <p className="text-orange-500 text-2xl py-2 px-4">{password}</p>
          <p className="bg-blue-600 rounded-r-md text-2xl text-white py-2 px-4 cursor-pointer ring-[.1px] ring-blue-600">copy</p>
        </div>
        <div className="flex gap-5 text-xl text-orange-500">
          <div className="flex">
            <input type="range" name="length" min="8" max="50" defaultValue="8" step="1" ref={sliderValue} onInput={handleSlider}/>
            <label className="ml-2">Length ({length})</label>
          </div>
          <div className="flex">
            <input type="checkbox" name="numbers" id="numbers" className="w-4" ref={numCheckbox} onChange={
              ()=>{
                
                if(numCheckbox.current.checked){
                  
                  setCharStr(charStr + numbers)
                }
                else{
                  setCharStr(charStr.replace('1234567890', ''))
                }
              }
            }/>
            <label htmlFor="numbers" className="ml-2">Numbers</label>
          </div>
          <div className="flex">
            <input type="checkbox" name="characters" id="characters" className="w-4" ref={charCheckbox} onChange={
              ()=>{
                
                if(charCheckbox.current.checked){
                  setCharStr(charStr + characters)
                }
                else{
                  setCharStr(charStr.replace('%*&^@', ''))
                }
              }
            }/>
            <label htmlFor="characters" className="ml-2">Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;