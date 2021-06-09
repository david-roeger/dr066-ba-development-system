import React, { useState } from 'react'
import { Text, Button} from './components'
import { StateIconContainer, StateIconLight} from './components'
import { DeviceIconContainer, DeviceIcon} from './components'
import { Nav } from './components'
import { Grid } from './components'

import * as tokens from "dr066-ba-design-token-builder/tokens"
function App() {
  const [lightState, setLightState] = useState(20);
  function updateLightState(e) {
    setLightState(parseInt(e.target.value))
  }

  return (
    <section className="bg-gray-100 h-screen w-screen m-auto font-inter text-basetext-gray-700">
      <h1 className="my-md">
        <Text size="xl">Build Components</Text>
      </h1>
      <ul className="p-sm border-2 border-black">
        <li className="list-disc list-inside">
          <Text>Build Components</Text>
        </li>
        <li className="list-disc list-inside">
          <Text>Compare Components</Text>
        </li>
        <li className="list-disc list-inside">
          <Text>Test Components</Text>
        </li>
        <li className="list-disc list-inside">
          <Text>Distribute Components</Text>
        </li>
        <li className="list-disc list-inside">
          <Text>Single Source of Truth</Text>
        </li>
      </ul>
      <p className="my-md">
      <Text>Build using React (😵) + Design Tokens (😍) and Storybook</Text>

        
      </p>
      <Button primary>Hallo</Button>
      <Button>Hallo</Button>
      <StateIconContainer >
        <StateIconLight state={lightState}></StateIconLight>
      </StateIconContainer>
      <DeviceIconContainer>
        <DeviceIcon></DeviceIcon>
      </DeviceIconContainer>

      <input type="range" min="1" max="100" value={lightState} className="slider" onChange={updateLightState}/>
  
      <Grid>
        <Nav></Nav>
      </Grid>

    </section>
  )
}

export default App
