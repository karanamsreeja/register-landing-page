import React from 'react';
import {Container,Typography, Grid, Box, Button,Link} from '@mui/material';
import img1 from "../images/logo-white.svg";
import call from "../images/call.svg";
import mail from "../images/mail.svg";
import insta from "../images/insta.svg";
import fb from "../images/fb.svg";
import twitter from "../images/twitter.svg";
import li from "../images/li.svg";
import "../style/styles.css";

function Footer() {
  return (
    <div style={{backgroundColor:'#06225C'}}>
<Container>

				<Grid container spacing={2}>
					<Grid
						item
						md={5.5}
						xs={12}
						sx={{paddingBottom: { md: '30px', xs: '5px' } }}
						style={{ paddingTop: '45px', paddingRight: '30px' ,textAlign:'left'}}
					><img  src={img1} alt="" style={{height:"50px"}}/>
                    
                    
							<Grid container item spacing={2} md={5} xs={5}>
								<Grid item>
<img   src={call} alt="" className="jss8"/>
                                </Grid>
                                <Grid item sx={{ paddingTop: '20px' }}>
									<Typography variant='caption' color='white'>
										Have a question?
									</Typography>
									<Typography variant='body1' fontWeight='bold' color='white'>
										+91 8939434445
									</Typography>
								</Grid>
                                <Grid container item spacing={2} md={6.5} xs={6}>
								<Grid item>
									<div className="iconContainer">
									<img   src={mail} alt="" className="jss8"/>
									</div>
								</Grid>
								<Grid item sx={{ paddingTop: '20px' }}>
									<Typography variant='caption' color='white'>
										Contact us at
									</Typography>
									<Typography variant='body1' fontWeight='bold' color='white'>
										better@iombio.com
									</Typography>
								</Grid>
							</Grid>
                            </Grid>
                    </Grid>
                    </Grid>
</Container>
<div style={{ borderBottom: '1px solid #1B3C7F', marginBottom: '8px' }}></div>
			<Container style={{ paddingTop: '16px', paddingBottom: '32px' }}>
				<Box sx={{ display: 'flex', justifyContent: { md: 'space-between', xs: 'center' }, flexWrap: 'wrap' }}>
					<Typography variant='body2' component='a' fontWeight='bold' color='white'  sx={{ padding: '4px 8px 4px 0' }}>
						Careers
					</Typography>
					<Typography variant='body2' component='a' fontWeight='bold' color='white'  sx={{ padding: '4px 8px' }}>
						Press
					</Typography>
					<Typography variant='body2' component='a' fontWeight='bold' color='white'  sx={{ padding: '4px 8px' }}>
						Blog
					</Typography>
					<Typography variant='body2' component={Link} fontWeight='bold' color='white' sx={{ padding: '4px 8px' }}>
						FAQ
					</Typography>
					<Typography variant='body2' component='a' fontWeight='bold' color='white'  sx={{ padding: '4px 8px' }}>
						Contact
					</Typography>
					<Typography variant='body2' component={Link} fontWeight='bold' color='white' sx={{ padding: '4px 8px' }}>
						Privacy policy
					</Typography>
					<Typography variant='body2' component='a' fontWeight='bold' color='white'  sx={{ padding: '4px 8px' }}>
						Sitemap
					</Typography>
					<Typography
						variant='body2'
						// component={Link}
						fontWeight='bold'
						color='white'
						// to='/term-and-conditions'
						sx={{ padding: '4px 0 4px 8px' }}
					>
						Terms of Use
					</Typography>
				</Box>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: '16px' }}>
					<div style={{ display: 'flex', marginBottom: '20px' }}>
						<a
							// href='https://www.instagram.com/iom_bioworks/?igshid=YmMyMTA2M2Y='
							alt='insta'
							target='_blank'
							rel='noreferrer'
							className="iconContainer2"
						>
						<img   src={insta} alt="" className="jss8"/>
						</a>
						<a
							// href='https://www.facebook.com/Iom-Bioworks-106434405389010/'
							alt='facebook'
							target='_blank'
							rel='noreferrer'
							className="iconContainer2"
						>
							<img src={fb}  alt='facebook' />
						</a>
						<a alt='twitter' target='_blank' rel='noreferrer' className="iconContainer2">
							<img  src={twitter} alt=""/>
						</a>
						<a
							// href='https://www.linkedin.com/in/iom-bioworks-58b182246/'
							alt='linkedin'
							target='_blank'
							rel='noreferrer'
							className="iconContainer2"
						>
							<img  src={li} alt=""/>
						</a>
					</div>
					<div>
						<Typography variant='body2' component='span' color='white' sx={{ padding: '16px 0 4px 8px' }}>
							Copyrights © IOM 2022, All Rights Reserved
						</Typography>
						<br />
						{/*
						<Typography variant='body2' component='span' color='white' sx={{ padding: '16px 0 4px 8px' }}>
							Powered by{' '}
							<a href='http://vtreeglobal.com/' target='_blank' rel='noreferrer'>
							 VTREE Global Solutions
							</a>
						</Typography>
						*/}
					</div>
				</Box>
			</Container>
    </div>
  )
}

export default Footer;