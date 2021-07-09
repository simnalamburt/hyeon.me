import header from './header.md'
import main from './main.md'
import profile from './img/profile.jpg'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faFacebookSquare,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

// Stylesheets
import 'normalize.css/normalize.css'
import 'github-markdown-css/github-markdown.css'
import './index.scss'

// Render markdown
;(document.getElementById('me') as HTMLImageElement).src = profile
document.getElementById('header')!.innerHTML = header
document.getElementById('main')!.innerHTML = main

// Enable font awesome
library.add(faGithub, faFacebookSquare, faTwitter)
dom.i2svg()
