// Lang lebe die 12NP!
// 28.03.2023
// Aaron und Tim

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* Render Header component inside App-header div */}
      <div className="App-header">
        <Header />
      </div>
      {/* Render Footer component */}
      <Footer />
    </div>
  );
}

export default App;

