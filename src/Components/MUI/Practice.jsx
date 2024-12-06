import React from "react";
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab'
import Rating from '@mui/material/Rating';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import { Accordion, AccordionDetails, AccordionSummary, Alert, AppBar, Avatar, AvatarGroup, Badge, BottomNavigation, BottomNavigationAction, Box, Card, CardActions, CardContent, CardHeader, Checkbox, Chip, Collapse, Container, CssBaseline, Dialog, DialogTitle, Divider, Drawer, FormControl, FormControlLabel, FormGroup, Grid2, IconButton, Input, InputBase, InputLabel, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Modal, Pagination, Paper, Skeleton, Slide, Slider, Snackbar, SpeedDial, SpeedDialAction, SpeedDialIcon, Stack, Switch, Tab, Tabs, TextareaAutosize, ThemeProvider, ToggleButton, ToggleButtonGroup, Toolbar, Tooltip, Typography, Zoom, createTheme, useTheme } from "@mui/material";
import { FaInbox, FaSearch } from "react-icons/fa";
import { MdClose, MdDrafts, MdExpandLess, MdExpandMore, MdFavorite, MdFileCopy, MdInbox, MdLocationOn, MdLocationPin, MdMail, MdMenu, MdPrint, MdRestore, MdSave, MdShare } from "react-icons/md";
import { styled, alpha } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import {BarChart} from '@mui/x-charts/BarChart'
import { LineChart, PieChart } from "@mui/x-charts";
import Grid from '@mui/material/Grid2';
import { blue, orange, red } from "@mui/material/colors";
import Button1 from '@mui/joy/Button'


function ChildModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>{props.title}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}


var fontSize=10;
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const navItems = ['Home', 'About', 'Contact'];
export default function Practice(props)
{   
 const theme = useTheme();

  const [open1, setOpen1] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);

    const handleClose = () => {
        setOpen(false);
      };
      const handleOpen1 = () => {
        setOpen1(true);
      };
      const handleClose1 = () => {
        setOpen1(false);
      };
    const handleClickOpen = () => {
        setOpen(true);
      };
    const handleClick = () => {
      setOpen(!open);
    };
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked((prev) => !prev);
    };

    const action = (
        <React.Fragment>
            <IconButton onClick={handleClose}>
                <MdClose/>
            </IconButton>
        </React.Fragment>
       );

        const Search =styled('div')(({ theme }) => ({
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.common.white, 0.15),
            '&:hover': {
              backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
              marginLeft: theme.spacing(1),
              width: 'auto',
            },
          }));
          
        const SearchIconWrapper = styled('div')(({ theme }) => ({
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }));
          
          const StyledInputBase = styled(InputBase)(({ theme }) => ({
            color: 'inherit',
            width: '100%',
            '& .MuiInputBase-input': {
              padding: theme.spacing(1, 1, 1, 0),
              paddingLeft: `calc(1em + ${theme.spacing(4)})`,
              transition: theme.transitions.create('width'),
              [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                  width: '20ch',
                },
              },
            },
          }));

          const toggleDrawer = (newOpen) => () => {
            setOpen(newOpen);
          };
        
          const DrawerList = (
            <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
              <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <FaInbox /> : <MdMail />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <MdInbox /> : <MdMail />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          );
          const actions1 = [
            { icon: <MdFileCopy />, name: 'Copy' },
            { icon: <MdSave />, name: 'Save' },
            { icon: <MdPrint />, name: 'Print' },
            { icon: <MdShare />, name: 'Share' },
          ];
          const [value1, setValue1] = React.useState('one');

          const handleChange1 = (event, newValue1) => {
            setValue1(newValue1);
          };
        

           
    return(
        <div>
            <Button variant="text">Text</Button>
            <Fab variant="secondary">No</Fab><br/><br/>
            <Typography component="legend">Rating</Typography>
            <Rating value={2.5} precision={0.5}></Rating>
            <Slider value={30}></Slider>
            <FormGroup>
                <FormControlLabel  label='Switch' control={ <Switch color="secondary"/>} ></FormControlLabel>
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">Name</InputLabel>
                    <Input id="component-simple" defaultValue="" />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">Age</InputLabel>
                    <Input id="component-simple" defaultValue="" />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">Mobile</InputLabel>
                    <Input id="component-simple" defaultValue="" />                
                </FormControl>
               
                <ToggleButtonGroup value="bold">
                <ToggleButton value='bold'><FormatBoldIcon/></ToggleButton>
                </ToggleButtonGroup>
            </FormGroup>
            <Divider/>
            <Stack direction="row" className="mt-3 mb-3" spacing={2}>
                <AvatarGroup max={4}>
                    <Badge badgeContent={3} color="secondary">
                <Avatar src="sanket.jpeg"/></Badge>
                <Avatar src="client.jpg"/>
                <Avatar src="xyz.jpeg"/>
                <Avatar>S</Avatar>
                <Avatar>K</Avatar>
                </AvatarGroup>  
            </Stack>
            <Chip label='Avatar with chip' avatar={<Avatar src="sanket.jpeg"/>}/>
            <nav>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <FaInbox/>
                            </ListItemIcon>
                            <ListItemText primary='Inbox'></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <MdMail/>
                            </ListItemIcon>
                            <ListItemText primary='Mail'></ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <MdDrafts/>
                        </ListItemIcon>
                        <ListItemText primary='Drafts'></ListItemText>
                        {open ? <MdExpandLess/>:<MdExpandMore/>}
                    </ListItemButton>
                    <Collapse in={open} unmountOnExit>
                    <List component='div'>
                        <ListItemButton sx={{pl:4}}>
                            <ListItemAvatar>
                                <Avatar src="sanket.jpeg"></Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='Week Start' secondary={<React.Fragment><Typography component='span' fontWeight='bold'>Sanket Gaware</Typography>{' - sep 09, 2024'}</React.Fragment>}></ListItemText>
                        </ListItemButton>
                    </List>
                    <List component='div'>
                        <Tooltip title='Draft mail'>
                        <ListItemButton sx={{pl:4}}>
                            <ListItemAvatar>
                                <Avatar src="file.jpg"></Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='Ganpati Days' secondary={<React.Fragment><Typography component='span' fontWeight='bold'>Shrutika Deshmukh</Typography>{' - How about we all go to see bappa this Sunday !'}</React.Fragment>}></ListItemText>
                        </ListItemButton>
                        </Tooltip>
                    </List>
                    </Collapse>
                </List>
            </nav>
            <Divider/>
            <Alert severity="success">This i success Alert</Alert>
            <Alert variant="filled" className="mt-1 mb-2" severity="warning">This i warning Alert</Alert>
            <Alert variant="outlined" severity="error">This i error Alert</Alert>
           <Divider/>
           <React.Fragment>
           <Button variant="outlined" onClick={handleClickOpen}>Dialog</Button>
           <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Message</DialogTitle>
            <List component='div'>
                        <ListItemButton sx={{pl:4}}>
                            <ListItemAvatar>
                                <Avatar src="sanket.jpeg"></Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='Week Start' secondary={<React.Fragment><Typography component='span' fontWeight='bold'>Sanket Gaware</Typography>{' - sep 09, 2024'}</React.Fragment>}></ListItemText>
                        </ListItemButton>
                    </List>
                    <List component='div'>
                        <Tooltip title='Draft mail'>
                        <ListItemButton sx={{pl:4}}>
                            <ListItemAvatar>
                                <Avatar src="file.jpg"></Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='Ganpati Days' secondary={<React.Fragment><Typography component='span' fontWeight='bold'>Shrutika Deshmukh</Typography>{' - How about we all go to see bappa this Sunday !'}</React.Fragment>}></ListItemText>
                        </ListItemButton>
                        </Tooltip>
                    </List>
           </Dialog>
           </React.Fragment>
           <Stack spacing={1}>
           <Skeleton variant="text" className="fs-2"></Skeleton>
            <Skeleton variant="circular" width={40} height={40}/>
            <Skeleton variant="rectangle" width={210} height={60}/>
            <Skeleton variant="rounded" width={210} height={60}/>
           </Stack>
           
           <Button variant="outlined" onClick={handleClick}>Open</Button>
           <Snackbar open={open} autoHideDuration={6000} message='Not archieved' action={action} onClose={handleClose}/>
           <Divider>----------</Divider>
           <Accordion>
            <AccordionSummary expandIcon={<MdExpandMore/>}>Accordin</AccordionSummary>
            <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
           </Accordion>
           <Divider>----------</Divider>
           <Card sx={{Width:75}}>
            <CardContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
            </CardContent>
            <CardActions><Button size="small">Leran More</Button></CardActions>
           </Card>
           <Divider>----------</Divider>
           <Box sx={{display:"flex",padding:5,justifyContent:"center"}}>
            <Paper sx={{padding:5}}>Paper 1</Paper>
            <Paper sx={{padding:5}} variant="elevated">Paper 2</Paper>
            <Paper sx={{padding:5}} variant="outlined">Paper 3 </Paper>
           </Box>
           <Box sx={{flexGrow:1}}>
            <CssBaseline/>
            <AppBar position="static">
                <Toolbar sx={{display:"flex"}}>
                    <IconButton size="large" edge='start' color="inherit" onClick={toggleDrawer(true)} sx={{mr:2}}>
                        <MdMenu/>
                    </IconButton>
                    MUI
                    <Search sx={{display:"flex",justifyContent:"end"}}>
                        <SearchIconWrapper>
                            <FaSearch/>
                        </SearchIconWrapper>
                        <StyledInputBase placeholder='search' ></StyledInputBase>
                    </Search>
                </Toolbar>
                </AppBar>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          </Box>
           </Box>
           <Divider>---------</Divider>
           <Box className='ms-auto me-auto' sx={{ width: 500 }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                >
                <BottomNavigationAction label="Recents" icon={<MdRestore />} />
                <BottomNavigationAction label="Favorites" icon={<MdFavorite />} />
                <BottomNavigationAction label="Nearby" icon={<MdLocationPin />} />
                </BottomNavigation>
            </Box>
            <Divider>-------</Divider>
            <Stack spacing={2}>
               <Pagination count={20} variant="outlined" shape="rounded" />
            </Stack>
            <Box sx={{ height: 320,  flexGrow: 1 }}>  `
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}>
                 
                {actions1.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                />
                ))}
            </SpeedDial>
            </Box>
            <Box>
                <Tabs value={value1} onChange={handleChange1} textColor='secondary' indicatorColor="secondary">
                    <Tab value="one" label='Item One'/>
                    <Tab value="two" label='Item Two'/>
                    <Tab value="three" label='Item Three'/>
                </Tabs>
                
            </Box>
            <Button onClick={handleOpen1}>Open modal</Button>
            <Modal
              open={open1}
              onClose={handleClose1}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal(Parent)
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                 <TextareaAutosize placeholder="empty"/>
                </Typography>
                <ChildModal title="child modal open"/>
              </Box>
            </Modal>
            <Switch checked={checked} onChange={handleChange} ></Switch>
            <Slide direction="down" in={checked}>{icon}</Slide>
            <Zoom in={checked}>{icon}</Zoom>
            <Divider>----------</Divider>
            <Box sx={{width:500}}>
              <DataGrid  rows={rows} columns={columns}/>
            </Box>
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker/>
            </LocalizationProvider> */}
            <Box sx={{padding:5,display:'flex',justifyContent:'center',border:1,m:1}}>
              <BarChart 
              xAxis={[{data:xLabels,scaleType:'band'}]}
              series={[{data:uData,label:'uv',id:'uvid',stack:'total'},{data:pData,label:'pv',id:'pvid',stack:'total'},{data:amtData,label:'amt',id:'amtid'}]}
              width={600}
              height={400}
              yAxis={[{ max: 10000 }]}
              />    
              <Divider orientation="vertical" variant="middle" className="me-5 border" flexItem ></Divider>
              <PieChart className="d-flex mt-auto mb-auto"
              series={[{
                data:[
                  {id:1,value:20,label:'E'},
                {id:2,value:45,label:'S'},
                {id:3,value:35,label:'K'},
                ],
                  highlightScope: { fade: 'global', highlight: 'item' },
                  faded: { innerRadius: 30, additionalRadius: -30, color: 'gray'},
                  innerRadius:25,
                  cornerRadius:5,
                  paddingAngle:3,
                  outerRadius:100,

              }]}  
              width={300}   
              height={300} />
            </Box>
              <Grid container className="row border bg-light d-flex justify-content-center p-5"> a  main container<Divider/>
                <Grid sx={{border:1,backgroundColor:'aquamarine'}} size={3}> 1St Grid</Grid>
                <Grid sx={{border:1,backgroundColor:'aquamarine'}} size={3}> 2nd Grid</Grid>
                <Grid sx={{border:1,backgroundColor:'aquamarine'}} size={3}>
                  <Container fixed sx={{border:1,backgroundColor:'primary.main'}} > 3rd Grid "child container inside grid"</Container>  
                </Grid>
                <Grid sx={{border:1,backgroundColor:'aquamarine'}} size={3}> 4th Grid</Grid>
                
              </Grid>
              <Root>
              down(md): red
              up(md): blue
              up(lg): green
              </Root><Divider className="mt-3"/>
              <ThemeProvider theme={theme1}>
                <CustomCheckbox defaultChecked />
              </ThemeProvider>
              <Box sx={{
                '.btn1':{
                  color:'white',
                  backgroundColor:'black',
                  borderColor:'black',
                  fontWeight:600,
                  padding:2,
                }
              }}>
                <Button className="btn1">Style by className in sx</Button>
              </Box>
              <Divider>------------Joy UI-------------</Divider>
              <Box>
                  <Button1 variant="soft">Soft</Button1>
              </Box>
        </div>
    );
}

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.status.danger,
  '&.Mui-checked': {
    color: theme.status.danger,
  },
}));

const theme1 = createTheme({
  status: { 
    danger: orange[500],
  },
});

const Root =styled('box')(({theme}) => ({
  padding:theme.spacing(3),
  [theme.breakpoints.down('md')]:{ backgroundColor:'green' },
  [theme.breakpoints.up('md')]:{ backgroundColor:red[500] },
  [theme.breakpoints.up('lg')]:{ backgroundColor:blue[700] },
}));

const mystyle = styled(Button)(({theme2}) =>({
    padding:theme2.spacing(2),
    fontSize:theme2.medium,
}));
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [-2400, 1398, 9800, -3908, 4800, -3800, 4300];
const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100];

const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];
const columns =[
  {field :'id',headerName:'ID'},
  {field:'firstName',headerName:'First Name'},
  {field:'lastName',headerName:'Last Name'},
  {field:'age',headerName:'Age'},
  
];
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
const icon = (
  <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
    <svg>
      <Box
        
      />
    </svg>
  </Paper>
);