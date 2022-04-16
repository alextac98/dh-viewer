import { Visualizer } from './Visualizer';
import DHTableSection from './DHTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <Visualizer/>
      <SideMenu/>
    </div>
  );
}

export default App;

function SideMenu(){
  return(
    <div className="AppComponent SideMenu">
      <DHTableSection/>
    </div>
  );
}