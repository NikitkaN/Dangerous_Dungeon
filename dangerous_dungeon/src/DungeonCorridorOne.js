import DungeonCorridorOne_img from './assets/locations/corridor1.png'
import * as THREE from 'three'
import { useNavigate } from 'react-router-dom'
import { Suspense } from 'react'
import { useThree } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from "three/src/loaders/TextureLoader"

function Background() {
    const { scene } = useThree();

    const location = useLoader(TextureLoader, DungeonCorridorOne_img)
    location.encoding = THREE.sRGBEncoding;
    scene.background = location;
}

const DungeonCorridorOne = () => {
    let nav = useNavigate();
    return (
        <Suspense>
            <sprite scale={[80 * 2, 215 * 2]} position={[0, 50, 0]} 
            onClick={() => {
                nav("/CorridorTwo")
            }}>
                <spriteMaterial color={"red"}/>
            </sprite>
            <Background />
        </Suspense>
    )
}

export default DungeonCorridorOne;