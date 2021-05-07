import React from 'react'
import { Button, Text } from './components'

function App() {
  return (
    <section className="container p-4">
      <h1 className="text-8xl my-8">
        Development System
      </h1>
      <ul className="p-8 bg-gradient-to-r border-2 border-black bg-opacity-20">
        <li className="list-disc list-inside text-xl">
          Build Components
        </li>
        <li className="list-disc list-inside text-xl">
          Compare Componets
        </li>
        <li className="list-disc list-inside text-xl">
          Test Componts
        </li>
        <li className="list-disc list-inside text-xl">
          Distribute Components
        </li>
        <li className="list-disc list-inside text-xl">
          Single Source of Truth
        </li>
      </ul>
      <p>	
        <br/>
        Build using React and Storybook :(
      </p>
      <Button primary>Hallo</Button>
    </section>
  )
}

export default App
