import React from 'react'
import "../style/styles.css";
import {Container,Typography, Grid,  Button} from '@mui/material';
import img from "../../common/images/download.png"

  
function Register() {

  return (
 <div className='register'>
    	<Container sx={{ pt: '100px', pb: '100px', textAlign: 'center' }}>
        <Typography variant='h3' component='div' color='#06225C' fontWeight='700' gutterBottom> PERFORM with SEnS </Typography>
        <Typography variant='h5' component='div' color='#E99E1B' fontWeight='500' gutterBottom>Trillions of Bacteria, Infinite Possibilities </Typography>
         <Typography variant='h6'  component='div' color="#000">
         At Iom, we understand that Stress & anxiety, Energy levels and Sleeping challenges impact performance and confidence.
                <br/>
                With a focused combination of bacterial science, technology and ancient Indian dietary practices, we endeavor to create better emotional and cognitive health for you
          
          
       </Typography>

          <Button variant="contained" href="https://akmu7rzwzuh.typeform.com/to/eowerG6J"
          style={{backgroundColor:'#E1AB3B',marginTop:'20px',borderRadius:'20px'}}>Register here</Button>
{/* className="bg" */}
<div style={{textAlign:'center'}} >
<Grid container className="bg-pd"  style={{padding:'30px 0', color:'#fff'}} >
{/* <Grid item lg={0}  md={0} sm={12} xs={12} ></Grid> */}
<Grid item lg={3}  md={3} sm={4} xs={12} style={{textAlign:'center',margin:'auto 0'}}>
<div className="bg-img">
    <div className="bg-color">

                {/* <Typography variant='h6' component='div' color="#fff" fontWeight='400' gutterBottom>The Microbiome People </Typography> */}
            <Typography variant='h4' component='div' color='#E1AB3B' fontWeight='500' gutterBottom> Perform with SEnS</Typography>
         <Typography variant='p' component='div' color="#fff" gutterBottom style={{marginTop:'20px'}}>     We help you perform to your best, each day, by 
         managing the bacteria in your gut.
          {/* We help you harness your inner winning power.  */}
        <p> Your daily performance simply goes up with Better Sleep, Better Energy Levels and Better managed Stress
               .</p> </Typography>
                </div>
                </div>
               </Grid>
               <Grid item lg={9}  md={9} sm={8} xs={12} style={{textAlign:'center',overFlowX:'hidden'}}>
            
                <img src={img} alt="" style={{width:'100%',borderRadius:'50px'}} className="reg-img"/>
               
              
               </Grid>
               {/* <Grid item md={6} xs={12} >
                <div style={{textAlign:'center',alignItems:'center'}}>
               <Button variant="contained" style={{backgroundColor:'#E1AB3B',marginTop:'20px',margin:'auto 0'}}>Order Now</Button>
               </div>
               </Grid> */}
            </Grid>

</div>

          {/* <Grid container spacing={2} style={{padding:'30px 0'}}>
			<Grid item md={6} xs={12}>
                <img src={sens} alr="" />
            </Grid>
            <Grid item md={6} xs={12} style={{textAlign:'justify'}}>
                <Typography variant='h6' component='div' color="#000" fontWeight='400' gutterBottom>The Microbiome People </Typography>
              <br/>  <Typography variant='h4' component='div' color='#06225C' fontWeight='500' gutterBottom> Perform with SEnS</Typography>
             <br/>   <Typography variant='p' component='div' color="#000" gutterBottom> 
                At Iom, we understand that Stress & anxiety, Energy levels and Sleeping challenges impact performance and confidence.
                <br/>
                With a focused combination of bacterial science, technology and ancient Indian dietary practices, we endeavor to create better emotional and cognitive health for you.</Typography>
                <Button variant="contained" style={{backgroundColor:'#E1AB3B',marginTop:'20px'}}>Order Now</Button>
            </Grid>
             </Grid> */}

                    


    </Container>
 </div>
  )
}

export default Register;