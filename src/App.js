import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MainSearch from './components/MainSearch'
import CompanySearchResults from './components/CompanySearchResults'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListFavorite from './components/ListFavorite'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/listfavorite" element={<ListFavorite/>} />
        <Route path="/" element={<MainSearch />} />
        <Route path="/:companyName" element={<CompanySearchResults />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
