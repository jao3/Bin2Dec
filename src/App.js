import React,{ useState, useEffect } from 'react';
//  import './App.css';
import Display from './Components/Display/Index'
import Input from './Components/Input'
import NavbarComponent from './Components/Navbar-Component'
import  GlobalStyled  from './Styles/GlobalStyles'
import CarouselComponent from './Components/CarouselComponent'

function App() {

  const [inputBin, setInputBin] = useState({
    value:'',
    binary: false,
  })
  const [decNum, setDecNum] = useState();

  useEffect(()=> {
    if (inputBin.value.length  > 0 && inputBin.binary){
      setDecNum(convertToDec(inputBin.value))
    }else if (inputBin.value.length === 0){
      setDecNum ('')
    }
  }, [inputBin])

  const notBin = /[^01]/

  const handleBinaryInput = (e) => {
    const { value } = e.target
    setInputBin ({value, binary : !notBin.test(value)})
  }
  
  const convertToDec = (num) => {
    let convertedNum = 0
    num
      .split('')
      .reverse()
      .map((item, index) => {
        return item === '1' && ( convertedNum += Math.pow(2,index ))
      })
      return convertedNum    
  }
  const Alert = () => {
    if(inputBin.length > 0){
      if(!inputBin.binary){
        return (
          <span>Por favor, insira um numero Binario</span>
        )
      }else if (inputBin.binary){
        return (
          <span>Isso é um numero binario</span>
        )
      }else{
        return '';
      }

    }
    return null;
  }
  return (
    
    <>
    <GlobalStyled/>
    <NavbarComponent/>
    <CarouselComponent/>
    <Alert />
    <Input inputBin={inputBin} handleBinaryInput={handleBinaryInput}/>
    <Display inputBin = {inputBin} decNum={decNum}/>
    </>
  )
}

export default App;
