
import React from 'react'
import {StatusBar} from 'react-native'
import Amplify from '@aws-amplify/core'
import {Authenticator} from 'aws-amplify-react-native'
import awsconfig from '../aws-exports'
import {Localei18n} from './components'
import * as Keychain from 'react-native-keychain'
import {AmplifyTheme} from './components'

const MEMORY_KEY_PREFIX = '@MyStorage:'
let dataMemory = {}

class MyStorage {
  static syncPromise = null

  static setItem(key, value) {
    Keychain.setGenericPassword(MEMORY_KEY_PREFIX + key, value)
    dataMemory[key] = value
    return dataMemory[key]
  }

  static getItem(key) {
    return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined
  }

  static removeItem(key) {
    Keychain.resetGenericPassword()
    return delete dataMemory[key]
  }

  static clear() {
    dataMemory = {}
    return dataMemory
  }
}

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
})

const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password',
    },
  ],
}

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Localei18n />
      <Authenticator
        usernameAttributes="email"
        signUpConfig={signUpConfig}
        theme={AmplifyTheme}
      />
    </>
  )
}

export default App
