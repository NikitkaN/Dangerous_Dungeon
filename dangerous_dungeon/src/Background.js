import * as THREE from 'three'
import Coridor from './img/locations/corridor1.png';
import { useThree } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from "three/src/loaders/TextureLoader"

// const locationImg = ['corridor1', 'coridor2', 'coridor3'];

function Background() {
    const { scene } = useThree();

    const location = useLoader(TextureLoader, Coridor)
    location.encoding = THREE.sRGBEncoding;
    scene.background = location;
}

export default Background;