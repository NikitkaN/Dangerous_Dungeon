import DungeonCorridorTwo_img from './assets/locations/corridor2.png'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from "three/src/loaders/TextureLoader"

function Background() {
    const { scene } = useThree();

    const location = useLoader(TextureLoader, DungeonCorridorTwo_img)
    location.encoding = THREE.sRGBEncoding;
    scene.background = location;
}

const DungeonCorridorTwo = () => {
    return (
        
        <Background />
    )
}

export default DungeonCorridorTwo;