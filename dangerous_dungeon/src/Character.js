import * as THREE from 'three'
// import Oko from './img/Oko.png'
import God from './img/God.png'
import { Suspense } from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useTexture } from '@react-three/drei'

function Image() {
    const texture = useLoader(THREE.TextureLoader, '/Oko.png')
    texture.repeat.set(1, 1)
    texture.offset.x = 0
    texture.offset.y = 0

    return (
      <mesh>
        <planeBufferGeometry args={[121, 273]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
    )
  }

// function Image() {
//   const texture = useTexture(Oko)
//   return (
//           <mesh>
//             <planeBufferGeometry attach="geometry" args={[121, 273]} />
//             <meshBasicMaterial attach="material" map={texture} toneMapped={false} />
//           </mesh>
//   )
// }

const Character = (props) => {
    return (
        <Suspense fallback={null}>
            <Image />
        </Suspense>
    )
}

export default Character;