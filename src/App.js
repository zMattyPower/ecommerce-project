import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Account/Login'
import Footer from './Components/Footer/Footer'
import Payment from "./Components/Payment/payment"


function App() {
  return (
    <div>
      <Navbar/>
      <Payment></Payment>
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
