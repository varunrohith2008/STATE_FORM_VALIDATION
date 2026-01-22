import TypedValues from './components/TypedValues';
import ButtonClickData from './components/ButtonClickData';
import AgeValidation from './components/AgeValidation';
import EvenNumberList from './components/EvenNumberList';
import OddNumberValidator from './components/OddNumberValidator';
import NumberArrayMap from './components/NumberArrayMap';
import './index.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Day 17 - Form Handling & State Management</h1>

      </header>

      <div className="grid">
        <TypedValues />
        <ButtonClickData />
        <AgeValidation />
        <EvenNumberList />
        <OddNumberValidator />
        <NumberArrayMap />
      </div>
    </div>
  );
}

export default App;
