import React from "react"
import Index from "./routes"


function App() {
  return <React.Suspense fallback={<p>loading</p>}>
    <Index />
  </React.Suspense>
}

export default App