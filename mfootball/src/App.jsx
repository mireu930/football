import './App.css'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './layout/AppRouter';
import Topbar from './layout/topbar';
import Footer from './layout/footer';


function App() {

  return (
    <BrowserRouter>
    <div className="wrapper">
    <Topbar/>
    <div className="content">
      <AppRouter />
    </div>
    <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
