
import './App.css'
import Form from './components/form/Form'
import Header from './components/header/Header'

function App() {
  return (
    <div className='container'>
      <div className='containerImage' />
      <div className="infoContainer">
        <Header />
        <Form />
      </div>
    </div>
  )
}

export default App
