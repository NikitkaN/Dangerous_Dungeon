import { Canvas } from '@react-three/fiber';
import './App.css';
import Character from './Character';

const imgUrl = ["corridor1", "corridor1", "corridor1"];



function App() {
  return (
    <Canvas className='App' orthographic camera={{zoom: 2}}>
      <Character></Character>
      
      
    </Canvas>
  );
}

export default App;
