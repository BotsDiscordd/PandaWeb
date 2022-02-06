import logo from './logo.svg';
import './App.css';
import { Features, Header, Footer, Updates, Possibility}  from './containers';
import { Brand, CTA, Navbar } from "./components";

const App = () => {
  return (
      <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
          <Brand />
          <Features />
          <Possibility />
          <CTA />
          <Updates />
          <Footer />
      </div>
  )
}

export default App;
