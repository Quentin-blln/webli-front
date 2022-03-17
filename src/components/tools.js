import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import axios from 'axios'
import ParticlesBg from 'particles-bg'
import Particles, { ISourceOptions } from "react-tsparticles";
import particleOptions from './particlesOptions';
import CircularProgress from '@mui/material/CircularProgress';



const Tools = (toolIndexOb) => {
    const [johnPassToCrack, setJohnPassToCrack] = React.useState('')
    const [nmapIpOrDomain, setNmapIpOrDomain] = React.useState('')
    const [waitingForResponse, setWaitingForResponse] = React.useState(false)
    const toolIndex = toolIndexOb.toolIndex


    const sendJohnHashToBack = (hash) => {
        setWaitingForResponse(true)
        let obj = {
            cmd: 'john hash.txt',
            hash: hash
        }
        axios
        .post('http://localhost:3001/john', obj)
        .then(resp=>{
            setWaitingForResponse(false)
            alert('Réponse de John: ', resp.data)
        })
        .catch(err=>{
            setWaitingForResponse(false)
            alert(err)
        })
    }

    const sendIpOrDomainToBack = (ipOrDomain) => {
        setWaitingForResponse(true)
        axios
        .post('http://localhost:3001/nmap', {ipOrDomain: ipOrDomain})
        .then(resp=>{
            setWaitingForResponse(false)
            alert('Réponse de John: ', resp.data)
        })
        .catch(err=>{
            alert(err)
            setWaitingForResponse(false)
        })
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
                    {waitingForResponse
                    ?
                    <Box className='loading'>
                        <CircularProgress />
                    </Box>
                    :null
                    }
                </div>
            )
        case 2:
            return(
                <div>
                    <Typography variant="h5" sx={{ m: 4}}>NMAP</Typography>
                    <Box
                        component="form"
                        sx={{'& > :not(style)': { m: 1, width: '80ch' }}}
                        noValidate
                        autoComplete="off">
                        <TextField id="outlined-basic" label="IP or Domain" variant="outlined" onChange={(event)=>{setNmapIpOrDomain(event.target.value)}}/>
                        <Button onClick={()=>{sendIpOrDomainToBack(nmapIpOrDomain)}}> Send </Button> 
                    </Box>
                    {waitingForResponse
                    ?
                    <Box className='loading'>
                        <CircularProgress />
                    </Box>
                    :null
                    }
                </div>
            )
        case 3:
            return(
                <div>
                    <Typography variant="h5" sx={{ m: 4}}>DDOS</Typography>
                    <Box
                        component="form"
                        sx={{'& > :not(style)': { m: 1, width: '80ch' }}}
                        noValidate
                        autoComplete="off">
                        <TextField id="outlined-basic" label="IP or Domain" variant="outlined" onChange={(event)=>{setJohnPassToCrack(event.target.value)}}/>
                        <Button onClick={()=>{sendJohnHashToBack(johnPassToCrack)}}> Send </Button> 
                    </Box>
                    {waitingForResponse
                    ?
                    <Box className='loading'>
                        <CircularProgress />
                    </Box>
                    :null
                    }
                </div>
            )
        case 4:
                return(
                        <div>
                            <Typography variant="h5" sx={{ m: 4}}>FIERCE</Typography>
                            <Box
                                component="form"
                                sx={{'& > :not(style)': { m: 1, width: '80ch' }}}
                                noValidate
                                autoComplete="off">
                                <TextField id="outlined-basic" label="Domain name" variant="outlined" onChange={(event)=>{setJohnPassToCrack(event.target.value)}}/>
                                <Button onClick={()=>{sendJohnHashToBack(johnPassToCrack)}}> Send </Button> 
                            </Box>
                            {waitingForResponse
                                ?
                                <Box className='loading'>
                                    <CircularProgress />
                                </Box>
                                :null
                                }
                        </div>
                    )
        case 5:
                return(
                            <div>
                                <Typography variant="h5" sx={{ m: 4}}>WPSCAN</Typography>
                                <Box
                                    component="form"
                                    sx={{'& > :not(style)': { m: 1, width: '80ch' }}}
                                    noValidate
                                    autoComplete="off">
                                    <TextField id="outlined-basic" label="Domain name" variant="outlined" onChange={(event)=>{setJohnPassToCrack(event.target.value)}}/>
                                    <Button onClick={()=>{sendJohnHashToBack(johnPassToCrack)}}> Send </Button> 
                                </Box>
                                {waitingForResponse
                                    ?
                                    <Box className='loading'>
                                        <CircularProgress />
                                    </Box>
                                    :null
                                    }
                            </div>
                        )
        default:
            return(
                <div style={{backgroundColor:'black', width:'100%', height:'100vh', transition: 'background-color 2s linear'}}>
                    <img id="logo_homepage" src="../Webli_v2.png" alt="logo"/>
                    <Particles options={particleOptions} />
                </div>
                )
    }
}

export default Tools