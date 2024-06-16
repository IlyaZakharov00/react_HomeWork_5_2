import { Header } from './components/header/Header'
import { NewsList } from './components/newList/NewsList'
import { CurrencyRatesList } from './components/currencyRatesList/CurrencyRatesList'
import { MainWidgetSearch } from './components/mainWidgetSearch/MainWidgetSearch'
import { CardsList } from './components/cardsList/CardsList'
import './components/Components.css'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <NewsList />
      <CurrencyRatesList />
      <MainWidgetSearch />
      <CardsList />
    </>
  )
}

export default App
