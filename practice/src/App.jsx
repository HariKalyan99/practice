import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ProductList from './components/ProductList'
import Footer from './components/Footer'

function App() {

  const [displaySidebar, setDisplaySidebar] = useState(false)
  return (
    <>
    <Header displaySidebar={displaySidebar} setDisplaySidebar={setDisplaySidebar}/>
    <section>
    <ProductList />
    <Sidebar displaySidebar={displaySidebar}/>
    </section>
    <Footer />
    </>
  )
}

export default App
