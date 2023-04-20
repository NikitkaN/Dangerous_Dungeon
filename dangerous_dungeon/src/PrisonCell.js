import PrisonCell_img from './assets/locations/PrisonCell_img.png'
import { useNavigate } from 'react-router-dom'
import * as THREE from 'three'
import { Suspense } from 'react'
import { useThree } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from "three/src/loaders/TextureLoader"

function Background() {
    const { scene } = useThree();

    const location = useLoader(TextureLoader, PrisonCell_img)
    location.encoding = THREE.sRGBEncoding;
    scene.background = location;
    // scene.scale=[1, 1 , 1]
}

const PrisonCell = () => {
    let nav = useNavigate();
    return (
        <Suspense>
            <sprite scale={[110 * 2, 273 * 2]} position={[20, -215, 0]} 
            onClick={() => {
                nav("/CorridorOne")
            }}>
                <spriteMaterial color={"red"}/>
            </sprite>
            <Background />
        </Suspense>
    )
}

export default PrisonCell;