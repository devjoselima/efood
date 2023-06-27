import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'
import Rotas from './routes'

import { GlobalCss } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container"></div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
