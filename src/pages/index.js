import * as React from "react"

const pageStyles = {
  color: "#222222",
  fontFamily: "Roboto"
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Alene Wecker</title>
      <h1 style={headingStyles}>Alene Wecker</h1>
    </main>
  )
}

export default IndexPage
