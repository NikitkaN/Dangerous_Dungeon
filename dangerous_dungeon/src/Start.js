import { Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import { Html } from '@react-three/drei';

const Start = () => {
    let nav = useNavigate();
    return (
        <Suspense>
            <Html center>
                <Button sx={{fontSize: '5rem',
                             color: 'white',
                             borderRadius: '35px'}}
                        variant="text"
                        onClick={() => {
                            nav("/PrisonCell")
                        }}>Start</Button>

            </Html>
        </Suspense>
    )
}

export default Start;