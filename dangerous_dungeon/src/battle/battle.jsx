import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Html } from "@react-three/drei"
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


function Battle() {
    const style = {
        flexGrow: 1
    };

    const modelStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const playerInfo = useSelector((state) => state.player)

    const giveRandomDamage = () => {
        console.log(Math.floor(Math.random() * 21) + playerInfo.weapon.damage)
    }
    //это для инвенторя
    const [openInventory, setOpenInventory] = React.useState(false);
    const handleCloseInventory = () => {
        setOpenInventory(false);
    };
    const handleOpenInventory = () => {
        setOpenInventory(true);
    };
    //это для меню действий
    const [openAcMenu, setOpenAcMenu] = React.useState(false);
    const handleCloseAcMenu = () => {
        setOpenAcMenu(false);
    };
    const handleOpenAcMenu = () => {
        setOpenAcMenu(true);
    };


    return (
        // <Html>
        <>
        {/* это инвентарь */}
        <Modal
        open={openInventory}
        onClose={handleCloseInventory}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={modelStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Inventory
                </Typography>
                {Object.keys(playerInfo.inventory).map(item => (
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} key={item}>
                        {item} : {playerInfo.inventory[item]}
                    </Typography>
                ))}
            </Box>
        </Modal>

        {/* это меню действий */}
        <Modal
        open={openAcMenu}
        onClose={handleCloseAcMenu}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={modelStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Action menu
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    действия должны браться из объекта enemy
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    в нем же еще и хп, и что нужно сделать, чтобы помиловать, наверное
                </Typography>
            </Box>
        </Modal>




        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color="transparent" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar sx={{ gap: 1}}>
                    <Container maxWidth="sm" align='center'>
                        <Button variant="contained" sx={{flexGrow: 1}} onClick={giveRandomDamage}>
                            attack
                        </Button>
                    </Container>
                    <Container maxWidth="sm" align='center'>
                        <Button variant="contained"  sx={style} onClick={handleOpenAcMenu}>
                            action
                        </Button>
                    </Container>
                    <Container maxWidth="sm" align='center'>
                        <Button variant="contained"  sx={style} onClick={handleOpenInventory}>
                            inventory
                        </Button>
                    </Container>
                    <Container maxWidth="sm" align='center'>
                        <Button variant="contained"  sx={style}>
                            mercy
                        </Button>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
        </>
        // </Html>
            
    )
}

export default Battle;