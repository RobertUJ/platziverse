# platziverse-agent

## Usage

```js
const PlatziverseAgent = require('platziverse-agent')

const agent = new PlatziverseAgent({
  interval: 2000
})

agent.connect()

// This agent only
agent.on('connected')
agent.on('disconnected')
agent.on('message')

// From others agents except me
agent.on('agent/connected')
agent.on('agent/disconnected')
agent.on('agent/message/', payload => {
  console.log(payload)
})

setTimeout(() => agent.disconnected(), 2000)
```