import Header from './components/header/header.js'
import CatImage from './components/cat-image/cat-image.js'
import _ from 'lodash'
import React from 'react'

const header = new Header()
header.render(_.upperFirst('cat'))

const catImage = new CatImage()
catImage.render()