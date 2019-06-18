import header from './header.md'
import main from './main.md'
import profile from './img/profile.jpg'

// Stylesheets
import 'normalize.css/normalize.css'
import 'github-markdown-css/github-markdown.css'
import 'font-awesome/css/font-awesome.css'
import './index.scss'

// Render markdown
document.getElementById('me').src = profile
document.getElementById('header').innerHTML = header
document.getElementById('main').innerHTML = main

// Google Analytics
// prettier-ignore
;(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga')
ga('create', 'UA-47724944-1', 'auto')
ga('send', 'pageview')
