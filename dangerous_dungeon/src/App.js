import { Canvas } from '@react-three/fiber';
import './App.css';
import Character from './Character';
import Battle from './battle/battle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const imgUrl = ["corridor", "corridor2", "corridor2"];

function App() {
  return (
    <>
    <Canvas className='App' orthographic camera={{zoom: 2}}>
    </Canvas>
    <Battle/>
    </>
    
    // <Canvas className='App' orthographic camera={{zoom: 2}}>
    //   {/* <Character></Character> */}
    //    <Battle/>
    // </Canvas>
  );
}

export default App;
