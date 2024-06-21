import './App.css'
import CategorySection from './components/CategorySection'
import Footer from './components/Footer'
import Header from './components/Header'
import ItemSection from './components/ItemSection'
import LogoReveal from './components/LogoReveal'
import Section from './components/Section'
import TopSellerSection from './components/TopsellerSection'

function App() {


  return (
    <>
      <div className=''>   
          <Header/>
          <Section/>
          <TopSellerSection/>
          <ItemSection/>
          <CategorySection/>
          <LogoReveal/>
          <Footer/>
      </div>
    </>
  )
}

export default App
