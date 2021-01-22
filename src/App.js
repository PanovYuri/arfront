import logo from './logo.png';
import './App.css';
import 'bulma/css/bulma.min.css';

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';



function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
