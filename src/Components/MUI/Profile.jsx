import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Divider, Paper, TextField, Typography, useTheme } from "@mui/material";
import React from "react";
import './MUI.css'
import Button from "@mui/material/Button";
import Row from "react-bootstrap/esm/Row";
import { useColorScheme } from '@mui/material/styles';
import { FaExpand } from "react-icons/fa";


const Profile =()=>{
    const theme = useTheme();
    const { mode, setMode } = useColorScheme();

    return(
        <div>
            <div className="row">
                <Box className='col-md-5 col-xs-12' sx={{padding:'30px',height:'auto',width:'40%',
                 
                '.profile-img':{
                    borderBottomLeftRadius:'200px',
                    borderBottomRightRadius:'200px',
                    border:'3px solid  #635BFF',
                    borderTop:'none',
                    display:'flex',
                    mx:'auto',
                },
                [theme.breakpoints.down('md')]:{
                    padding:'2px',
                    width:'100%',
                    mt:3,
                    mb:3,
                }
            }}> <Paper className="profilepaper" sx={{borderRadius:'20px',boxShadow:'3px 3px 3px 3px #c2bfba',
            background: 'linear-gradient(to left, #635BFF 1%, white 0%)',
            backgroundSize: '200% 100%',
            transition: 'all .4s ease-out',
            }}>
                    <img width="70%" src="/sanket.jpeg" className="profile-img mb-3"></img>
                    <Divider className="mx-3 mb-2" sx={{borderWidth:''}}/>
                    <Typography sx={{fontWeight:'bold',fontSize:'larger',fontFamily:'monospace',display:'flex',justifyContent:'center'}}>{localStorage.getItem("Name")}</Typography>
                </Paper>
                    <Button className="mt-3 fw-bold" sx={{ color: '#635BFF',borderColor:'#635BFF'}} variant='outlined'>Edit Profile</Button>
                </Box>
                <Paper className="col-md-7 col-xs-12" sx={{border:'1px solid gray'}}>
                    <Row>
                        <Typography sx={{mt:3,mb:2,fontSize:'x-large',fontWeight:'bold',fontFamily:'monospace'}}>
                            Profile
                            <Typography sx={{fontSize:'medium',color:'gray',fontFamily:'monospace'}}>The information can be edited</Typography>
                        </Typography>
                        <Divider sx={{height:'1px',backgroundColor:'black',me:5}} />
                    </Row>
                    <Typography sx={{}} className="">
                        <TextField sx={{border:'none'}} className="col-md-6 px-2 mt-4" variant="outlined" label="First name" type="text" defaultValue="Sanket" />
                        <TextField className="col-md-6 px-2 mt-4" variant="outlined" label="Last name" type="text" defaultValue="Gaware"/>
                    </Typography>
                    <Row>
                    <Typography className="">
                        <TextField className="col-md-6 px-2 mt-4" id="outlined-search" label="Email address" type="text"  defaultValue="gawaresanket03@gmail.com" />
                        <TextField className="col-md-6 px-2 mt-4" id="outlined-search" label="Phone number" type="text" defaultValue="8412031538" /> 
                    </Typography>                    
                    </Row>
                    <Row>
                    <Typography className="">
                        <TextField className="col-md-6 px-2 mt-4" id="outlined-search" label="State" type="text" defaultValue="Maharashtra" />
                        <TextField className="col-md-6 px-2 mt-4" id="outlined-search" label="City" type="text" defaultValue="Pune" />
                    </Typography> 
                    </Row>
                    <Divider sx={{height:'1px',backgroundColor:'black',me:0 ,mt:4}}/>
                        <Typography className="m-3 d-flex justify-content-end">
                        
                            <Button sx={{ backgroundColor: '#635BFF'}} variant="contained">Save deatils</Button>
                        </Typography> 
                       
                    <Row>
                    </Row>
                </Paper>
                
            </div>
        </div>
    )
}

export default Profile;

