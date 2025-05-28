import './App.css';
// Components are Functions
// we can pass props
import {PizzaComponent} from "./components/PizzaComponent";
import {Header} from "./components/Header";
import{Footer} from "./components/Footer";
import{Menu} from "./components/Menu";

// reuseable block of code
// const App = ()=>
  // const App = function
function App() {
  return (
    <div className="App">
      <Header/>
      <Menu />
  

 
<Footer/>
    </div>

  
  );
  
}

export default App;
