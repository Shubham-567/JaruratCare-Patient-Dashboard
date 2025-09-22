import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <h1>App</h1>
      </BrowserRouter>
    </div>
  );
};

export default App;
