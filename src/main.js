// @flow
import contact from './contact.md'
import header from './header.md'

import 'normalize.css/normalize.css'
import 'github-markdown-css/github-markdown.css'
import 'font-awesome/css/font-awesome.css'
import './main.styl'

document.getElementById('contact').innerHTML = contact;
document.getElementById('header').innerHTML = header;
