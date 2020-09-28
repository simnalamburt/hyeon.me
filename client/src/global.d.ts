declare module '*.md' {
  const compiledHTML: string
  export default compiledHTML
}

declare module '*.jpg' {
  const path: string
  export default path
}
