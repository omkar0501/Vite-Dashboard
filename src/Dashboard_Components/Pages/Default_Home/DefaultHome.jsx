import { BorderRight, DashboardOutlined, FiberSmartRecord, Lock, LockOutlined, MoreHoriz, Storefront } from "@mui/icons-material";
import { MuiBox, MuiIconButton, MuiPaper, MuiTypography } from "../../../MUIComponents/Mui";
import BarChartComponent from "./Charts/BarChartComponent";
import LineChartComponent from "./Charts/LineChartComponent";
// import HttpsIcon from '@mui/icons-material/Https';
// import FenceIcon from '@mui/icons-material/Fence';
// import WeekendOutlinedIcon from '@mui/icons-material/WeekendOutlined';
import './Default_Home.css'

export default function DefaultHome() {
  return (
    <>
      <div className="container-fluid">
        <div className="row gy-3 ">
        <div className='col-md-4 col-xs-12 d-flex paper-bg-page'>
            <MuiPaper className='paper-bg1'>
              <div className="row m-1">
           <div className="col-6 d-flex">
            <MuiIconButton className='CardIcon1' >
              <FiberSmartRecord/>
            </MuiIconButton>
           </div>
           <div className="col-6">
            <MuiIconButton className='CardIcon1'>
              <MoreHoriz />
            </MuiIconButton>
           </div>
           </div>
           <div className="row m-1">
            <div className="col-6">
            <MuiTypography className='text1'>
              $ 502.00
            </MuiTypography>
            <MuiTypography className='text2'>
            Total Earning
            </MuiTypography>
            </div>
            </div>
            </MuiPaper>
          </div>
          <div className='col-md-4 col-xs-12 d-flex paper-bg-page'>
            <MuiPaper className='paper-bg2'>
            <div className="row m-1">
           <div className="col-6 d-flex">
            <MuiIconButton className='CardIcon2' >
              <Lock/>
            </MuiIconButton>
           </div>
           <div className="col-6">
            <MuiIconButton className='CardIcon2'>
              <MoreHoriz />
            </MuiIconButton>
           </div>
           </div>
           <div className="row m-1">
            <div className="col-6">
            <MuiTypography className='text1' >
              $ 361.00
            </MuiTypography>
            <MuiTypography className='text2'>
            Total Order
            </MuiTypography>
            </div>
            </div>
            </MuiPaper>
          </div>
          <div className='col-md-4 col-xs-12 paper-bg-page'>
          <div className='row'>
            <MuiPaper className='paper-bg1' sx={{width:'auto'}}>
              <div style={{ display: 'flex',justifyContent:'space-around' }}>
              <MuiIconButton className='CardIcon1'>
                <Storefront />
              </MuiIconButton>  
            
              <MuiBox sx={{ }}>
            <MuiTypography className='text1'>
              $ 500.00
            </MuiTypography>
            <MuiTypography className='text2'>
            Total Income
            </MuiTypography>
            </MuiBox>
            </div>
            </MuiPaper>
            </div>
            <div className='row'>
            <MuiPaper className='paper-bg2' sx={{width:'auto'}}>
              <div style={{ display: 'flex',justifyContent:'space-around' }}>
              <MuiIconButton className='CardIcon2'>
                <Storefront />
              </MuiIconButton>  
            
              <MuiBox sx={{ }}>
            <MuiTypography className='text1'>
              $ 500.00
            </MuiTypography>
            <MuiTypography className='text2'>
            Total Income
            </MuiTypography>
            </MuiBox>
            </div>
            </MuiPaper>
            </div>
        </div>
        
          <div className="col-sm-12 col-md-8 d-flex">
            <BarChartComponent className="flex-fill" />
          </div>
          <div className="col-12 col-md-4">
            <LineChartComponent />
          </div>
          <div className="col-12 col-md-4">
            <BarChartComponent />
          </div>
          <div className="col-12 col-md-8">
            <BarChartComponent />
          </div>
        </div>
      </div>
    </>
  );
}
