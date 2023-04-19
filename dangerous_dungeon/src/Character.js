import Oko from './img/Oko.png'
import { Suspense } from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

function Image() {
    const texture = useLoader(TextureLoader, Oko)
    return (
      <mesh>
        <planeBufferGeometry attach="geometry" args={[125, 250]} />
        <meshBasicMaterial attach="material" map={texture} toneMapped={false} />
      </mesh>
    )
  }

const Character = (props) => {
    return (
        <Suspense fallback={null}>
            <Image />
        </Suspense>
    )
}

export default Character;