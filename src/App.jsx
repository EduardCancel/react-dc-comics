import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import navHeader from './data/navHeader'


function App() {

  return (
    <>
      < Header navHeader={navHeader} />
      < Main />
      < Footer />
    </>
  )
}

export default App
