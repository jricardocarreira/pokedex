import { FilterSection } from "./components/filterSection/FilterSection"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { PokemonSection } from "./components/pokemonSection/PokemonSection"
import "./styles/app.css"

function App() {

  return (
    <>
      <Header />
      <FilterSection />
      <PokemonSection />
      <Footer />
    </>
  )
}

export default App
