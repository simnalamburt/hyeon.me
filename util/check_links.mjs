import { readFile } from 'node:fs/promises'
import { parse as compile } from 'marked'
import { parse, walk } from 'html5parser'

const reset = '\x1b[0m'
const red = '\x1b[31m'
const green = '\x1b[32m'
const yellow = '\x1b[33m'

const filePath = new URL('../src/main.md', import.meta.url)
const markdown = await readFile(filePath, { encoding: 'utf8' })
const html = compile(markdown)
const ast = parse(html, { setAttributeMap: true })

const urls = new Set()
walk(ast, {
  enter: (node) => {
    let url
    switch (node.name) {
      case 'a':
        url = node.attributeMap.href.value.value
        break
      case 'img':
        url = node.attributeMap.src.value.value
        break
      default:
        return
    }
    if (!/https?:\/\//.test(url)) {
      return
    }
    urls.add(url)
  },
})

for (const url of urls) {
  forEachUrl(url)
}

async function forEachUrl(url) {
  try {
    const res = await fetch(url, {
      redirect: 'manual',
      signal: AbortSignal.timeout(5000),
    })
    const stat = res.status
    const c =
      200 <= stat && stat < 300
        ? green
        : 100 <= stat && stat < 400
        ? yellow
        : red
    console.log(`${c}${stat}   - ${url} (${res.statusText})${reset}`)
  } catch (e) {
    console.log(`${red}ERROR - ${url} (${e})${reset}`)
  }
}
