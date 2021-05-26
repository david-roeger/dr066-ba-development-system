import React, { useState } from 'react'
import { Button, IconContainer, Light, Heating } from './components'

function App() {
  const [lightState, setLightState] = useState(20);
  function updateLightState(e) {
    setLightState(parseInt(e.target.value))
  }

  return (
    <section className="container bg-gray-100 h-screen w-screen m-auto p-md font-inter text-gray-700">
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
      <Button primary>Hallo</Button>
      <IconContainer >
        <Light state={lightState}></Light>
      </IconContainer>
      <IconContainer >
        <Heating state={lightState}></Heating>
      </IconContainer>

      <input type="range" min="1" max="100" value={lightState} className="slider" onChange={updateLightState}/>
    </section>
  )
}

export default App
