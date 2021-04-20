import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Main from './components/Main';
import Aside from "./components/Aside";
import Footer from "./components/Footer";


function App() {
  return (
    <div >
      <Header/>
      <div className="ml-auto mr-auto mt-1 mb-1 w-75 d-flex flex-wrap flex-xl-nowrap align-items-start">
        <Main />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;
