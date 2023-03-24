import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Greetings from './Greetings'
import Counter from './Counter'
import MyForm from './MyForm'
import ReducerSample from './ReducerSample'
import { SampleProvider } from './SampleContext'

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  }

  const onSubmit = (form: {name: string; description: string}) => {
    console.log(form); // Submit 버튼 누르면 콘솔에 띄워줌
  }

  return (
    <div>
      <Greetings name="Hello" onClick={onClick}/>
      <Counter />
      <MyForm onSubmit={onSubmit}></MyForm>
      <ReducerSample />

      <SampleProvider>
        <ReducerSample />
      </SampleProvider>
      
    </div>

  )
}

export default App
