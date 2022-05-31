import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Service from './components/Service/Service';
import Counter from './components/Counter/Counter';
import Section from './components/Section/Section';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div>
      <h2>
        <Header></Header>
        <Hero></Hero>
        <Service></Service>
        <Counter></Counter>
        <Section></Section>
        <Footer></Footer>
      </h2>
    </div>
  );
}

export default App;
