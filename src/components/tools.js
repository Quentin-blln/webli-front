import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import axios from 'axios'
import ParticlesBg from 'particles-bg'
import Particles, { ISourceOptions } from "react-tsparticles";
import particleOptions from './particlesOptions';


const Tools = (toolIndexOb) => {
    const [johnPassToCrack, setJohnPassToCrack] = React.useState('')
    const toolIndex = toolIndexOb.toolIndex


    const sendJohnHashToBack = (hash) => {
        let obj = {
            cmd: 'john hash.txt',
            hash: hash
        }
        axios
        .post('http://localhost:3001/john', obj)
        .then(resp=>{
            alert('Réponse de John: ', resp.data)
        })
        .catch(err=>{alert(err)})
    }

    console.log(toolIndex)
    switch (toolIndex){
        case 1:
            return(
                <div>
                    <Typography variant="h5" sx={{ m: 4}}>JOHN THE RIPPER</Typography>
                    <Box
                        component="form"
                        sx={{'& > :not(style)': { m: 1, width: '80ch' }}}
                        noValidate
                        autoComplete="off">
                        <TextField id="outlined-basic" label="Password hash" variant="outlined" onChange={(event)=>{setJohnPassToCrack(event.target.value)}}/>
                        <Button onClick={()=>{sendJohnHashToBack(johnPassToCrack)}}>Crack now</Button> 
                    </Box>
                </div>
            )
        case 2:
            return(
                <div>
                    TOOL 2
                </div>
            )
        case 3:
            return(
                <div>
                    TOOL 3
                </div>
            )
        default:
            return(
                <div style={{backgroundColor:'black', width:'100%', height:'100vh'}}>
                    {/* <ParticlesBg type="cobweb" bg={true} color="#000000" num={100}/> */}
                    <Particles options={particleOptions} />
                </div>
                )
    }
}

export default Tools