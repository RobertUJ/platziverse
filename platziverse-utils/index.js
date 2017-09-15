'use strict'

function parsePayload (payload) {
  console.log('utils', payload)
  console.log(payload instanceof Buffer)

  if (payload instanceof Buffer) {
    payload = payload.toString('utf8')
    console.log(payload)
  }

  try {
    payload = JSON.parse(payload)
  } catch (e) {
    console.log(e)
    payload = null
  }

  return payload
}

module.exports = {
  parsePayload
}
