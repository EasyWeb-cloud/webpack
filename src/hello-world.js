import HelloWorldButton from './components/hello-world-button/func.js'
import Header from './components/header/header.js'
import addImage from './add-image.js'
import _ from 'lodash'
import React from 'react'

const helloWorldButton = new HelloWorldButton()
helloWorldButton.render()

const header = new Header()
header.render(_.upperFirst('hello world'))

const keyWord = process.env.NODE_ENV
console.log(keyWord[0].toUpperCase() + keyWord.slice(1) + ' mode')

helloWorldButton.arentExistingMethod()
