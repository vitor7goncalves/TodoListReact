import './App.css';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Images from './components/Images';
import Hooks from './components/Hooks';
import List from './components/List';
import RenderCond from './components/RenderCond';
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <Images />
      <h2>Storm Wizard</h2>
      <FirstComponent />
      <SecondComponent />
      <Hooks />
      <List />
      <RenderCond x={7} />
      <Fragment />
      <Container>
        <h1>Storm Wizard</h1>
      </Container>
    </div>
  );
}

export default App;
