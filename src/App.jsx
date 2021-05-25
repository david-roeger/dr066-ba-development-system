import React from 'react'
import { Button, Text, Light} from './components'

function App() {
  function callback() {
    alert('Hello!');
  }
  return (
    <section className="container p-md font-inter">
      <h1 className="text-xl my-md">
        Development System
      </h1>
      <ul className="p-sm border-2 border-black">
        <li className="list-disc list-inside text-base">
          Build Components
        </li>
        <li className="list-disc list-inside text-base">
          Compare Componets
        </li>
        <li className="list-disc list-inside text-base">
          Test Componts
        </li>
        <li className="list-disc list-inside text-base">
          Distribute Components
        </li>
        <li className="list-disc list-inside text-base">
          Single Source of Truth
        </li>
      </ul>
      <p className="my-md">
        Build using React and Storybook :(
      </p>
      <Button primary handleClick={callback}>Hallo</Button>
      <Light state={10}></Light>
    </section>
  )
}

export default App
