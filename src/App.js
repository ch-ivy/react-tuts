import "./styles/App.scss";
import Header from "./components/header";
import Home from "./components/home";

function App() {
   return (
      <>
         <div className="App">
            <Header />
         </div>
         <Home></Home>
      </>
   );
}

export default App;
