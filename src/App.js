import Header from "./common/components/header";
import Footer from "./common/components/footer";
import './App.css';
import "./common/style/styles.css";
import Register from "./pages/register/register";
function App() {


  return (
    <div className="App">
     <Header/>
     <Register/>
     <Footer/>
    </div>
  );
}

export default App;
