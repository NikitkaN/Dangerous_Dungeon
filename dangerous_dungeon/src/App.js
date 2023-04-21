import { Routes, Route, Link } from 'react-router-dom'
import { Canvas } from '@react-three/fiber';
import './App.css';
import Start from './Start';
import PrisonCell from './PrisonCell';
import DungeonCorridorOne from './DungeonCorridorOne';
import DungeonCorridorTwo from './DungeonCorridorTwo';



function App() {
  return (
    <Canvas style={{ width: '100%',
                     height: '100%',
                     background: 'black'}} 
      size={[window.innerWidth, window.innerHeight]}
      orthographic camera={{ zoom: 1 }}>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/PrisonCell' element={<PrisonCell />}/>
        <Route path='/CorridorOne' element={<DungeonCorridorOne />}/>
        <Route path='/CorridorTwo' element={<DungeonCorridorTwo />}/>
        {/* <Route path='*' element={<ErrorPage />} /> */}
      </Routes>
      
    </Canvas>
  );
}

export default App;
