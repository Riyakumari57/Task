import './App.css'
import Content from './components/Content'
import Form from './components/Form'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
      <Navbar/>
      <div className="container">
        <Content></Content>
        <Form/>
      </div>
    </>
  )
}

export default App
