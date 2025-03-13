import header from './header.md'
import profile from './img/profile.jpg'
import main from './main.md'

import { dom, library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebookSquare,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

// Stylesheets
import 'normalize.css/normalize.css'
import 'github-markdown-css/github-markdown.css'
import './index.scss'

// Render markdown
const domMe = document.getElementById('me') as HTMLImageElement | undefined
const domHeader = document.getElementById('header')
const domMain = document.getElementById('main')

if (domMe == null || domHeader == null || domMain == null) {
  throw new Error('Element not found')
}

domMe.src = profile
domHeader.innerHTML = header
domMain.innerHTML = main

// Enable font awesome
library.add(faGithub, faFacebookSquare, faTwitter)
dom.i2svg()
