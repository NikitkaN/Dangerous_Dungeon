import { Suspense } from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Oko from './assets/characters/Oko.png'


function Image() {
    const texture = useLoader(TextureLoader, Oko)

    return (
      <sprite scale={[121 * 2, 273 * 2]} position={[35, 35, 0]} >
        <spriteMaterial map={texture}/>
      </sprite>
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