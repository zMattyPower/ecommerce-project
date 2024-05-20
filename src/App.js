import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Payment from "./Components/Payment/payment"
function App() {
  return (
    <div>
      <Navbar/>
        <Payment></Payment>
      <Footer/>
    </div>
  );
}

export default App;
