import MyCard from "./components/cards";
import Navbar from "./components/navbar"; 
import MiProvider  from "./context/Miprovider";

import "./App.css";
// cambiar a useState 
function App() {

    return (
        
        <div> 
            <MiProvider> 
                <Navbar />
                <h1>Autos</h1>
                <MyCard />
           </MiProvider>
      </div>
  );
}

export default App;