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

import ReactTerminal from 'react-terminal-component';

import {
    EmulatorState, OutputFactory, Outputs
} from 'javascript-terminal';


const Tools = (toolIndexOb) => {
    const [johnPassToCrack, setJohnPassToCrack] = React.useState('')
    const [ipOrDomain, setIpOrDomain] = React.useState('')
    const [waitingForResponse, setWaitingForResponse] = React.useState(false)
    const [backResponse, setBackResponse] = React.useState('Here will appear the kali command response')

    const toolIndex = toolIndexOb.toolIndex

    const defaultState = EmulatorState.createEmpty();
    const defaultOutputs = defaultState.getOutputs();

    const newOutputs = Outputs.addRecord(
        defaultOutputs, OutputFactory.makeTextOutput(backResponse)
    );
    let emulatorState = defaultState.setOutputs(newOutputs);

    React.useEffect(()=>{
        setJohnPassToCrack('')
        setIpOrDomain('')
    },[toolIndexOb])


    const sendJohnHashToBack = (hash) => {
        setWaitingForResponse(true)
        let obj = {
            cmd: 'john hash.txt',
            hash: hash
        }
        axios
            .post('http://localhost:3001/john', obj)
            .then(resp => {
                setWaitingForResponse(false)
                setBackResponse(resp.data)

            })
            .catch(err => {
                setWaitingForResponse(false)
                alert(err)
            })
    }

    const sendNmapIpOrDomainToBack = (ipOrDomain) => {
        setWaitingForResponse(true)
        axios

            .post('http://localhost:3001/nmap', { ipOrDomain: ipOrDomain })
            .then(resp => {
                setWaitingForResponse(false)
                setBackResponse(resp.data)
            })
            .catch(err => {
                alert(err)
                setWaitingForResponse(false)
            })
    }

    const sendSqlmapIpOrDomainToBack = (ipOrDomain) => {
        setWaitingForResponse(true)
        axios
            .post('http://localhost:3001/sqlmap', { ipOrDomain: ipOrDomain })
            .then(resp => {
                setWaitingForResponse(false)
                setBackResponse(resp.data)
            })
            .catch(err => {
                alert(err)
                setWaitingForResponse(false)
            })
    }

    const sendDnsscanIpOrDomainToBack = (ipOrDomain) => {
        setWaitingForResponse(true)
        axios
            .post('http://localhost:3001/dnsscan', { ipOrDomain: ipOrDomain })
            .then(resp => {
                setWaitingForResponse(false)
                setBackResponse(resp.data)
            })
            .catch(err => {
                alert(err)
                setWaitingForResponse(false)
            })
    }

    const sendWpscanIpOrDomainToBack = (ipOrDomain) => {
        setWaitingForResponse(true)
        axios
            .post('http://localhost:3001/wpscan', { ipOrDomain: ipOrDomain })
            .then(resp => {
                setWaitingForResponse(false)
                if(resp.data.includes('Command failed')){
                    setBackResponse('This website do not use Wordpress.')
                }
                else{
                    setBackResponse(resp.data)
                }
            })
            .catch(err => {
                alert(err)
                setWaitingForResponse(false)
            })
    }

    const sendDDOSIpOrDomainToBack = (ipOrDomain) => {
        setWaitingForResponse(true)
        axios
            .post('http://localhost:3001/ddos', { ipOrDomain: ipOrDomain })
            .then(resp => {
                setWaitingForResponse(false)
                setBackResponse(resp.data)
            })
            .catch(err => {
                alert(err)
                setWaitingForResponse(false)
            })
    }

    console.log(toolIndex)
    switch (toolIndex) {
        case 1:
            return (
                <div>
                    <Typography variant="h5" sx={{ m: 4 }}>JOHN THE RIPPER</Typography>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '80ch' } }}
                        noValidate
                        autoComplete="off">
                        <TextField id="outlined-basic" label="Password hash" variant="outlined" onChange={(event) => { setJohnPassToCrack(event.target.value) }} />
                        <Button onClick={() => { sendJohnHashToBack(johnPassToCrack) }}>Crack now</Button>
                    </Box>
                    <div id="terminal"><ReactTerminal emulatorState={emulatorState} acceptInput={false} /></div>
                    {waitingForResponse
                        ?
                        <Box className='loading'>
                            <CircularProgress />
                        </Box>
                        : null
                    }
                </div>
            )
        case 2:
            return (
                <div>
                    <Typography variant="h5" sx={{ m: 4 }}>NMAP</Typography>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '80ch' } }}
                        noValidate
                        autoComplete="off">

                        <TextField id="outlined-basic" label="IP or Domain" variant="outlined" onChange={(event) => { setIpOrDomain(event.target.value) }} />
                        <Button onClick={() => { sendNmapIpOrDomainToBack(ipOrDomain) }}> Send </Button>
                    </Box>
                    <div id="terminal"><ReactTerminal emulatorState={emulatorState} acceptInput={false} /></div>
                    {waitingForResponse
                        ?
                        <Box className='loading'>
                            <CircularProgress />
                        </Box>
                        : null
                    }

                </div>
            )
        case 3:
            return (
                <div>

                    <Typography variant="h5" sx={{ m: 4 }}>Sql Map</Typography>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '80ch' } }}
                        noValidate
                        autoComplete="off">

                        <TextField id="outlined-basic" label="IP or Domain" variant="outlined" onChange={(event) => { setIpOrDomain(event.target.value) }} />
                        <Button onClick={() => { sendSqlmapIpOrDomainToBack(ipOrDomain) }}> Send </Button>
                    </Box>
                    <div id="terminal"><ReactTerminal emulatorState={emulatorState} acceptInput={false} /></div>
                    {waitingForResponse
                        ?
                        <Box className='loading'>
                            <CircularProgress />
                        </Box>
                        : null
                    }
                </div>
            )
        case 4:
            return (
                <div>
                    <Typography variant="h5" sx={{ m: 4 }}>DNS Scan</Typography>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '80ch' } }}
                        noValidate
                        autoComplete="off">
                        <TextField id="outlined-basic" label="Domain name" variant="outlined" onChange={(event) => { setIpOrDomain(event.target.value) }} />
                        <Button onClick={() => { sendDnsscanIpOrDomainToBack(ipOrDomain) }}> Send </Button>
                    </Box>
                    <div id="terminal"><ReactTerminal emulatorState={emulatorState} acceptInput={false} /></div>
                    {waitingForResponse
                        ?
                        <Box className='loading'>
                            <CircularProgress />
                        </Box>
                        : null
                    }
                </div>
            )
        case 5:
            return (
                <div>
                    <Typography variant="h5" sx={{ m: 4 }}>WPSCAN</Typography>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '80ch' } }}
                        noValidate
                        autoComplete="off">
                        <TextField id="outlined-basic" label="Domain name" variant="outlined" onChange={(event) => { setIpOrDomain(event.target.value) }} />
                        <Button onClick={() => { sendWpscanIpOrDomainToBack(ipOrDomain) }}> Send </Button>
                    </Box>
                    <div id="terminal"><ReactTerminal emulatorState={emulatorState} acceptInput={false} /></div>
                    {waitingForResponse
                        ?
                        <Box className='loading'>
                            <CircularProgress />
                        </Box>
                        : null
                    }
                </div>
            )
            case 6:
                return (
                    <div>
                        <Typography variant="h5" sx={{ m: 4 }}>DDOS</Typography>
                        <Box
                            component="form"
                            sx={{ '& > :not(style)': { m: 1, width: '80ch' } }}
                            noValidate
                            autoComplete="off">
                            <TextField id="outlined-basic" label="Domain name" variant="outlined" onChange={(event) => { setIpOrDomain(event.target.value) }} />
                            <Button onClick={() => { sendDDOSIpOrDomainToBack(ipOrDomain) }}> Send </Button>
                        </Box>
                        <div id="terminal"><ReactTerminal emulatorState={emulatorState} acceptInput={false} /></div>
                        {waitingForResponse
                            ?
                            <Box className='loading'>
                                <CircularProgress />
                            </Box>
                            : null
                        }
                    </div>
                )

        default:
            return (
                <div style={{ backgroundColor: 'black', width: '100%', height: '100vh', transition: 'background-color 2s linear' }}>
                    <img id="logo_homepage" src="../Webli_v2.png" alt="logo" />
                    <Particles options={particleOptions} />
                </div>
            )
    }
}

export default Tools