import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	bgdarkBlue: {
		backgroundColor: "#06225C",
	},
	box: {
		border: '1px solid #1B3C7F',
	},
	iconContainer: {
		height: '48px',
		width: '48px',
		borderRadius: '50%',
		backgroundColor: '#133373',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	iconContainer2: {
		height: '38px',
		width: '38px',
		borderRadius: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		background: 'transparent',
		border: '1px solid white',
		marginRight: '8px',
	},
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<div className={classes.bgdarkBlue}>
			<Container>
				<Grid container spacing={2}>
					<Grid
						item
						md={5.5}
						xs={12}
						sx={{paddingBottom: { md: '30px', xs: '5px' } }}
						style={{ paddingTop: '45px', paddingRight: '30px' }}
					>
						<div>
							<img src='/assets/logo-white.svg' alt='LOGO' style={{ height: '50px' }} />
						</div>
						<Grid container spacing={2} sx={{ mt: '0' }}>
							<Grid container item spacing={2} md={5} xs={5}>
								<Grid item>
									<div className={classes.iconContainer}>
										<img src='/assets/icons/call-calling.svg' alt='call-calling' />
									</div>
								</Grid>
								<Grid item sx={{ paddingTop: '20px' }}>
									<Typography variant='caption' color='white'>
										Have a question?
									</Typography>
									<Typography variant='body1' fontWeight='bold' color='white'>
										+91 8939434445
									</Typography>
								</Grid>
							</Grid>
							<Grid container item spacing={2} md={6.5} xs={6}>
								<Grid item>
									<div className={classes.iconContainer}>
										<img src='/assets/icons/sms.svg' alt='call-calling' />
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
							className={classes.iconContainer2}
						>
							<img src='/assets/icons/instagram.svg' alt='call-calling' />
						</a>
						<a
							// href='https://www.facebook.com/Iom-Bioworks-106434405389010/'
							alt='facebook'
							target='_blank'
							rel='noreferrer'
							className={classes.iconContainer2}
						>
							<img src='/assets/icons/facebook.svg' alt='facebook' />
						</a>
						<a alt='twitter' target='_blank' rel='noreferrer' className={classes.iconContainer2}>
							<img src='/assets/icons/twitter.svg' alt='call-calling' />
						</a>
						<a
							// href='https://www.linkedin.com/in/iom-bioworks-58b182246/'
							alt='linkedin'
							target='_blank'
							rel='noreferrer'
							className={classes.iconContainer2}
						>
							<img src='/assets/icons/linkedin.svg' alt='call-calling' />
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
	);
};
export default Footer;
