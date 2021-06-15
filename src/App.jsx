import React, { useState } from 'react'

import { Grid, Navigation, NavIcon, NavIconButton, Card} from './components'
import { Text, Button} from './components'
import { StateIconContainer, StateIconLight} from './components'
import { DeviceIconContainer, DeviceIcon} from './components'
import { SliderScala, Slider, VideoElement } from './components'


function App() {
  const [lightState, setLightState] = useState(20);
  function updateLightState(value) {
    setLightState(value)
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

    <SliderScala>
      <Slider colorClass="zwavsse" value={lightState} callback={(v) => updateLightState(v)}/>
    </SliderScala>

      <Grid>
        <Navigation>
        </Navigation>
        <Card col title="Hallo">
        <Text>
          Element
        </Text>
        <Text>
          Element
        </Text>
        <Text>
          Element
        </Text>
        <VideoElement />
        <Text>
          Element
        </Text>
      </Card>
      <Card col title="Hallo">
        <Text>
          Element
        </Text>
        <Text>
          Element
        </Text>
        <Text>
          Element
        </Text>
        <VideoElement />
        <Text>
          Element
        </Text>
      </Card>
      <Card col title="Hallo">
        <Text>
          Element
        </Text>
        <Text>
          Element
        </Text>
        <Text>
          Element
        </Text>
        <VideoElement />
        <Text>
          Element
        </Text>
      </Card>
      <Card col title="Hallo">
        <Text>
          Element
        </Text>
        <Text>
          Element
        </Text>
        <Text>
          Element
        </Text>
        <VideoElement />
        <Text>
          Element
        </Text>
      </Card>
      <Card col title="Hallo">
        <Text>
          Element
        </Text>
        <Text>
          Element
        </Text>
        <Text>
          Element
        </Text>
        <VideoElement />
        <Text>
          Element
        </Text>
      </Card>
      <Card col title="Hallo">
        <Text>
          Element
        </Text>
        <Text>
          Element
        </Text>
        <Text>
          Element
        </Text>
        <VideoElement />
        <Text>
          Element
        </Text>
      </Card>
      <Card col title="Hallo">
        <Text>
          Element
        </Text>
        <Text>
          Element
        </Text>
        <Text>
          Element
        </Text>
        <VideoElement />
        <Text>
          Element
        </Text>
      </Card>
      </Grid>




      <Card col title="Hallo">
        <Text>
          Element
        </Text>
        <Text>
          Element
        </Text>
        <Text>
          Element
        </Text>
        <VideoElement />
        <Text>
          Element
        </Text>
      </Card>
    </section>
  )
}

export default App
