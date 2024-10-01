"use client";
import { Box, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import React,{useEffect, useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TranslateIcon from '@mui/icons-material/Translate';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import Image from 'next/image';
import ListItemText from '@mui/material/ListItemText';
import Logo from '../../../../public/logo4.png'
import Logo1 from '../../../../public/logos/logowhite.png'
import User from '../../../../public/User.png'
import Userlog from '../../../../public/userlog.webp'
import Link from 'next/link';
import Language from '../../../../public/lgs.png'
import Cart from '../../../../public/cart.png'
 import LoginPopup from '../LoginPopup/LoginPopup'; 
import SignupPopup from '../SigninPopup/signpopup';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import { UserAuth } from '@/context/AuthContext'
import './englishheader.module.css'
import LogoutPop from '../Logout/Logout';






const EnglishHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [anchorEl3, setAnchorEl3] = useState(null);
  const [loginPopupOpen, setLoginPopupOpen] = useState(false);
  const [signupPopupOpen, setSignupPopupOpen] = useState(false);
  const [logoutpop,setLogoutpop] = useState(false)
  const { toggleLanguage,language } = useLanguage();
  const [subscribed,setSubscribed]=useState(false)
  const {user,loginuser,logout} = useUser()
  const router = useRouter()
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const [menuOpen, setMenuOpen] = useState(false);
  const {guser,googleSignIn,logOut} = UserAuth()
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (open) => (event) => {
    
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ top: open });
  };
   
  const list = () => (
    <Box
      sx={{ width: 'auto',background:'#32385a',height:'100%' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >

      <List>
      <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <div style={{ position: 'relative', width: '130px', height: '100px' }}>
    <Image src={Logo1} fill alt='events' style={{ objectFit: 'contain' }} />
        </div>
              </ListItemIcon>
              <ListItemText  />
            </ListItemButton>
          </ListItem>
          
         <Link href='/'>
          <ListItem  disablePadding>
            <ListItemButton >
               {language=='english' ? <Typography sx={{color:'#fff',fontSize:'15px',fontWeight:'500'}} align='right'>Home</Typography> :
               <Typography sx={{color:'#fff',fontSize:'15px',fontWeight:'500'}} align='right'>المنزل</Typography>
               }
              <ListItemText  />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link href='/about'>
          <ListItem  disablePadding>
            <ListItemButton sx={{color:'#fff',fontSize:'15px',fontWeight:'500'}}>
          {language=='english' ? 'About' : 'حولنا' }   
              <ListItemText  />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link href='/bookings'>
          <ListItem  disablePadding>
            <ListItemButton sx={{color:'#fff',fontSize:'15px',fontWeight:'500'}}>
       {language == 'english' ? 'Bookings' : 'احجز الآن'}     
              <ListItemText  />
            </ListItemButton>
          </ListItem>
          </Link>
          
          <Link href='/privatesessions'>
          <ListItem  disablePadding>
            <ListItemButton sx={{color:'#fff',fontSize:'15px',fontWeight:'500'}}>
       {language == 'english' ? 'Private Bookings' : 'حجوزات خاصة'}     
              <ListItemText  />
            </ListItemButton>
          </ListItem>
          </Link>
          {subscribed && (
          <Link href='/news'>
          <ListItem  disablePadding>
            <ListItemButton sx={{color:'#fff',fontSize:'15px',fontWeight:'500'}}>
             
             {language == 'english' ? 'News' : 'أخبار'}
              <ListItemText  />
            </ListItemButton>
          </ListItem>
          </Link>
          )}
           <Link href='/subscription'>
          <ListItem  disablePadding>
            <ListItemButton sx={{color:'#fff',fontSize:'15px',fontWeight:'500'}}>
            {language == 'english' ? 'Subscription' : 'الاشتراكات'}
              
              <ListItemText  />
            </ListItemButton>
          </ListItem>
          </Link>

          {/* <Link href='/contact'>
          <ListItem  disablePadding>
            <ListItemButton sx={{color:'#fff',fontSize:'15px',fontWeight:'500'}}>
              {language == 'english' ? 'Contact Us' : 'اتصل بنا'} 
              <ListItemText  />
            </ListItemButton>
          </ListItem>
          </Link> */}
      </List>
    </Box>
  );


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isSubscribed = localStorage.getItem('subscribed') === 'true';
     
      setSubscribed(isSubscribed)
    }
  }, [loginuser]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickG = (event)=>{

    setAnchorEl2(event.currentTarget);
  }
  const handleClickO = (event)=>{
    setAnchorEl3(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleCloseG = ()=>{
    setAnchorEl2(null)
  }

  const handleCloseO = ()=>{
    setAnchorEl3(null)
  }
  const handleClickLan = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleCloseLan = () => {
    setAnchorEl1(null);
  };


  const handleSignout= async()=>{
    try {
      await logOut()
      await  logout()
    } catch (error) {
      console.log(error.message);
    }
      }

  const handleLogout =()=>{
    setLogoutpop(true)
  }

  const handleCloseLogout =()=>{
    setLogoutpop(false)
  }

  const handleLogin = () => {
    router.push('/login')
  };

  const handleCloseLoginPopup = () => {
    setLoginPopupOpen(false);
  };

  const handleSignup = () => {
    router.push('/register')
  };
  
  const handleCloseSignupPopup = () => {
    setSignupPopupOpen(false);
  };

  const handleSelectLanguage = (lang) => {
    toggleLanguage(lang);
  };

  const handleProfile = ()=>{
    router.push('/myprofile')
  }
  const handleMenuClick = (event) => {
    setMenuOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    setAnchorEl(null);
  };

  const handleNavbarClick = ()=>{

  }



  return (
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',height:'10dvh',padding:'.5rem',background:'#32385a',boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',position: 'relative', overflow: 'hidden' }}>
    
    
    {language == 'english' ? 
     <Box sx={{display:{xs:'block',sm:'block',md:'none'}}}>
       <Box>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon style={{color:'#fff'}}/>
        <Image src={Logo1} style={{width:"100px", height:'auto',margin:"0 10px"}} alt='B&B'/>
      </IconButton>
    
      
      <Drawer
       anchor="top"
       open={state.top}
       onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
     
    </Box>

   </Box>
  :
  <>
  
  
  
  </> 
  }
   {language === 'english' ?
   
   <Link href='/' style={{textDecoration:'none'}}>
   <Box sx={{display:{xs:'none',sm:'none',md:'block'}, width:'180px', height:'60px',marginLeft:".5rem" }}  >
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <Image src={Logo1} fill alt='events' style={{ objectFit: 'contain' }} />
        </div>
   </Box>
   </Link>
   
   : 
   <Box sx={{display:{xs:'none' ,sm:'none',md:'flex'},alignItems:'center',justifyContent:'center',gap:'1rem',color:'#021b79'}}>
     
   <Link href='/cart'><Avatar sx={{cursor:'pointer',width:'30px' ,height:'30px'}}>

   <Image src={Cart} alt="User"  fill />
   </Avatar>
   </Link>

  

   <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 1,color:'#021b79' }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
         <Avatar sx={{width:'30px' ,height:'30px'}}>
   <Image src={User} alt="User"fill />
</Avatar>
           
          </IconButton>

          <IconButton
            onClick={handleClickLan}
            size="small"
            sx={{ ml: 1,color:'#021b79' }}
            aria-controls={open1 ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open1 ? 'true' : undefined}
          >
            <Avatar sx={{width:'30px' ,height:'30px'}}>
    <Image src={Language} alt="User" fill  />
</Avatar>
           
          </IconButton>
    
    
   </Box>
   }

  { language !== 'english'? <Box sx={{display:{xs:'block',sm:'block',md:'none'}}}>
  <Box sx={{alignItems:'center',gap:'1rem',color:'#021b79'}}>
     
     
     <Link href='/cart'>
     <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 1,color:'#021b79' }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
           <Avatar sx={{width:'30px' ,height:'30px'}}>
           <Image src={Cart} alt="User"  fill />
  </Avatar>
             
            </IconButton>
            </Link>
    
  
     <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 1,color:'#021b79' }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
           <Avatar sx={{width:'30px' ,height:'30px'}}>
     <Image src={User} alt="User"fill />
  </Avatar>
             
            </IconButton>
  
            <IconButton
              onClick={handleClickLan}
              size="small"
              sx={{ ml: 1,color:'#021b79' }}
              aria-controls={open1 ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open1 ? 'true' : undefined}
            >
              <Avatar sx={{width:'30px' ,height:'30px'}}>
      <Image src={Language} alt="User" fill  />
  </Avatar>
             
            </IconButton>
      
      
     </Box>

  
     </Box>
    : <></> 
    }
     

     <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 28,
                height: 28,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 15,
                width: 15,
                height: 15,
                bgcolor: 'background.paper',
                transform: 'translateY(-60%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
   
          <MenuItem onClick={handleLogin}  sx={{fontSize:'14px' ,fontWeight:'600'}}>
            Login
          </MenuItem>
          
          <MenuItem onClick={handleSignup} sx={{fontSize:'14px' ,fontWeight:'600'}}>
          Signup
          </MenuItem>
          
        </Menu>
  
        <Menu
          anchorEl={anchorEl1}
          id="account-menu"
          open={open1}
          onClose={handleCloseLan}
          onClick={handleCloseLan}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 15,
                height: 15,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 15,
                width: 15,
                height:15,
                bgcolor: 'background.paper',
                transform: 'translateY(-60%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleCloseLan} sx={{fontSize:'14px' ,fontWeight:'600'}}>
            English
          </MenuItem>
          <MenuItem onClick={handleCloseLan} sx={{fontSize:'14px' ,fontWeight:'600'}}>
            Arabic
          </MenuItem>
        </Menu>
  
        {loginPopupOpen && (
          <LoginPopup open={loginPopupOpen} onClose={handleCloseLoginPopup} />
        )}
         {signupPopupOpen && (
          <SignupPopup open={signupPopupOpen} onClose={handleCloseSignupPopup} />
        )}




    {
      language == 'english' ? <Box sx={{display:{xs:'none' ,sm:'none',md:'flex'},alignItems:'center',justifyContent:'center',gap:'1rem'}}>
      <Link href='/' style={{textDecoration:'none'}}><Typography  fontWeight='500' fontSize='15px' color='#fff' sx={{border: '1px solid rgba(44, 62, 80, 0.5)',paddingLeft:'0.5rem',paddingRight:'0.5rem',paddingTop:'0.2rem',paddingBottom:'0.2rem',cursor:'pointer',borderRadius:'8px' ,'&:hover':{background:'#fff',color:'#000'}}}>Home</Typography></Link>
      <Link href={language === 'english' ?'/about': '/about'} style={{textDecoration:'none'}}><Typography  fontWeight='500' fontSize='15px' color='#fff' sx={{border: '1px solid rgba(44, 62, 80, 0.5)',paddingLeft:'0.5rem',paddingRight:'0.5rem',paddingTop:'0.2rem',paddingBottom:'0.2rem',cursor:'pointer',borderRadius:'8px','&:hover':{background:'#fff',color:'#000'}}}>About Us</Typography></Link>
      <Link href={language === 'english' ? '/bookings' :'/bookingsArabic'} style={{textDecoration:'none'}}><Typography  fontWeight='500' fontSize='15px' color='#fff' sx={{border: '1px solid rgba(44, 62, 80, 0.5)',paddingLeft:'0.5rem',paddingRight:'0.5rem',paddingTop:'0.2rem',paddingBottom:'0.2rem',cursor:'pointer',borderRadius:'8px','&:hover':{background:'#fff',color:'#000'}}}>Book Now</Typography></Link>
      {subscribed && (
   <Link href={language === 'english' ? '/news' : '/news'} style={{textDecoration:'none'}}>
      <Typography fontWeight='500' fontSize='15px' color='#fff' sx={{border: '1px solid rgba(44, 62, 80, 0.5)',paddingLeft:'0.5rem',paddingRight:'0.5rem',paddingTop:'0.2rem',paddingBottom:'0.2rem',cursor:'pointer',borderRadius:'8px','&:hover':{background:'#fff',color:'#000'}}}>
         News
      </Typography>
   </Link>
)}


      {/* <Link href={language ===  'english' ?'/financial' : '/financialArabic'} style={{textDecoration:'none'}}><Typography  fontWeight='500' fontSize='15px' color='#fff' sx={{border: '1px solid rgba(44, 62, 80, 0.5)',paddingLeft:'0.5rem',paddingRight:'0.5rem',paddingTop:'0.2rem',paddingBottom:'0.2rem',cursor:'pointer',borderRadius:'8px','&:hover':{background:'#fff',color:'#000'}}}>Financial Health Clinic</Typography></Link> */}
{/*       
      <Link href={language ===  'english' ?'/subscription' : '/subscription'} style={{textDecoration:'none'}}><Typography  fontWeight='500' fontSize='15px' color='#fff' sx={{border: '1px solid rgba(44, 62, 80, 0.5)',paddingLeft:'0.5rem',paddingRight:'0.5rem',paddingTop:'0.2rem',paddingBottom:'0.2rem',cursor:'pointer',borderRadius:'8px','&:hover':{background:'#fff',color:'#000'}}}>Subscriptions</Typography></Link> */}

      {/* <Link href={language === 'english' ? '/contact' :'/contact'} style={{textDecoration:'none'}}><Typography  fontWeight='500' fontSize='15px' color='#fff' sx={{border:'1px solid rgba(44, 62, 80, 0.5)',paddingLeft:'0.5rem',paddingRight:'0.5rem',paddingTop:'0.2rem',paddingBottom:'0.2rem',cursor:'pointer',borderRadius:'8px','&:hover':{background:'#fff',color:'#000'}}}>Connect with us</Typography></Link> */}
      </Box>
      : 
      <Box sx={{display:{xs:'none' ,sm:'none',md:'flex'},alignItems:'center',justifyContent:'center',gap:'1rem',direction:'rtl'}}>
   <Link href='/' style={{textDecoration:'none'}}><Typography fontWeight='500' fontSize='15px' color='#fff' sx={{border: '1px solid rgba(44, 62, 80, 0.5)',paddingLeft:'0.5rem',paddingRight:'0.5rem',paddingTop:'0.2rem',paddingBottom:'0.2rem',cursor:'pointer',borderRadius:'8px' ,'&:hover':{background:'#fff',color:'#000'}}}>المنزل</Typography></Link>
   <Link href={language === 'english' ?'/about': '/about'} style={{textDecoration:'none'}}><Typography   fontWeight='500' fontSize='15px' color='#fff' sx={{border: '1px solid rgba(44, 62, 80, 0.5)',paddingLeft:'0.5rem',paddingRight:'0.5rem',paddingTop:'0.2rem',paddingBottom:'0.2rem',cursor:'pointer',borderRadius:'8px','&:hover':{background:'#fff',color:'#000'}}}>حولنا</Typography></Link>
   <Link href={language === 'english' ? '/bookings' :'/bookings'} style={{textDecoration:'none'}}><Typography   fontWeight='500' fontSize='15px' color='#fff' sx={{border: '1px solid rgba(44, 62, 80, 0.5)',paddingLeft:'0.5rem',paddingRight:'0.5rem',paddingTop:'0.2rem',paddingBottom:'0.2rem',cursor:'pointer',borderRadius:'8px','&:hover':{background:'#fff',color:'#000'}}}>احجز الآن</Typography></Link>
   {subscribed && (
   <Link href={language === 'english' ? '/news' : '/news'} style={{textDecoration:'none'}}>
      <Typography fontWeight='500' fontSize='15px' color='#fff' sx={{border: '1px solid rgba(44, 62, 80, 0.5)',paddingLeft:'0.5rem',paddingRight:'0.5rem',paddingTop:'0.2rem',paddingBottom:'0.2rem',cursor:'pointer',borderRadius:'8px','&:hover':{background:'#fff',color:'#000'}}}>
      أخبار
      </Typography>
   </Link>
)}
   {/* <Link href={language ===  'english' ?'/financial' : '/financialArabic'} style={{textDecoration:'none'}}><Typography  fontWeight='500' fontSize='15px' color='#fff' sx={{border: '1px solid rgba(44, 62, 80, 0.5)',paddingLeft:'0.5rem',paddingRight:'0.5rem',paddingTop:'0.2rem',paddingBottom:'0.2rem',cursor:'pointer',borderRadius:'8px','&:hover':{background:'#fff',color:'#000'}}}>عيادة الصحة المالية</Typography></Link> */}
{/*    <Link href={language ===  'english' ?'/subscription' : '/subscription'} style={{textDecoration:'none'}}><Typography  fontWeight='500' fontSize='15px' color='#fff' sx={{border: '1px solid rgba(44, 62, 80, 0.5)',paddingLeft:'0.5rem',paddingRight:'0.5rem',paddingTop:'0.2rem',paddingBottom:'0.2rem',cursor:'pointer',borderRadius:'8px','&:hover':{background:'#fff',color:'#000'}}}>الاشتراكات</Typography></Link> */}
   {/* <Link href={language === 'english' ? '/contact' :'/contact'} style={{textDecoration:'none'}}><Typography   fontWeight='500' fontSize='15px' color='#fff' sx={{border:'1px solid rgba(44, 62, 80, 0.5)',paddingLeft:'0.5rem',paddingRight:'0.5rem',paddingTop:'0.2rem',paddingBottom:'0.2rem',cursor:'pointer',borderRadius:'8px','&:hover':{background:'#fff',color:'#000'}}}>تواصل معنا</Typography></Link> */}
   </Box>
    }

   



   {language == 'english' ? 
   
<Box sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:'.5rem',color:'#021b79'}}>
     
     <Link href='/cart'>   <Avatar sx={{cursor:'pointer',width:'30px' ,height:'30px',}}>
     <Image src={Cart} alt="User"  fill />
     </Avatar>
     </Link>
  
    
  

  {
    guser && <IconButton
    onClick={handleClickO}
    size="small"
    sx={{ ml: 2,color:'#021b79' }}
    aria-controls={open ? 'account-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
  >
 <Avatar sx={{width:'30px' ,height:'30px'}}>
<Image src={guser.photoURL} alt="User"fill />

</Avatar>
   
  </IconButton>
  }
  
  {!guser && (
    <>
    { loginuser==true ? 
  <IconButton
  onClick={handleClick}
  size="small"
  sx={{ ml: 2,color:'#021b79' }}
  aria-controls={open ? 'account-menu' : undefined}
  aria-haspopup="true"
  aria-expanded={open ? 'true' : undefined}
>
<Avatar sx={{width:'30px' ,height:'30px'}}>
<Image src={ User  } alt="User"fill />

</Avatar>
 
</IconButton>
  :
  <IconButton
  onClick={handleClick}
  size="small"
  sx={{
    ml: 1,
    color: '#021b79',
    '@media screen and (min-width: 600px)': {
     ml:2
    },
  }}
  aria-controls={open ? 'account-menu' : undefined}
  aria-haspopup="true"
  aria-expanded={open ? 'true' : undefined}
>
  <Avatar sx={{ width: '30px', height: '30px' }}>
    <Image src={Userlog} alt="User" fill />
  </Avatar>
</IconButton>

  }
    </>
  )}
  
     
  
            <IconButton
              onClick={handleClickLan}
              size="small"
              sx={{ ml: 1,color:'#021b79' }}
              aria-controls={open1 ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open1 ? 'true' : undefined}
            >
              <Avatar sx={{width:'30px' ,height:'30px'}}>
      <Image src={Language} alt="User" fill  />
  </Avatar>
             
            </IconButton>
      
      
     </Box>
  :
  <>
  <Box sx={{width:'170px', height:'60px',display:{xs:'none',sm:'none',md:'block'}}} >
  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
<Image src={Logo1} fill alt='events' style={{ objectFit: 'contain' }} />
  </div>
</Box>

<Box sx={{display:{xs:'block',sm:'block',md:'none'}}}>
  <IconButton >
        <Image src={Logo1} style={{width:"100px", height:'auto',margin:"0 10px"}} alt='B&B'/>
        <MenuIcon onClick={toggleDrawer(true)} style={{color:'#fff'}}/>
      </IconButton>
      <Drawer
       anchor="top"
       open={state.top}
       onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
   </Box>
   </>
  }


   {/* login */}

 

           
 
          {!guser ? (<Menu
         anchorEl={anchorEl2}
         id="account-menu"
         open={open2}
         onClose={handleCloseG}
         onClick={handleCloseG}
         PaperProps={{
           elevation: 0,
           sx: {
             overflow: 'visible',
             filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
             mt: 1.5,
             '& .MuiAvatar-root': {
               width: 28,
               height: 28,
               ml: -0.5,
               mr: 1,
             },
             '&:before': {
               content: '""',
               display: 'block',
               position: 'absolute',
               top: 0,
               right: 15,
               width: 15,
               height: 15,
               bgcolor: 'background.paper',
               transform: 'translateY(-60%) rotate(45deg)',
               zIndex: 0,
             },
           },
         }}
         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
       >
          <MenuItem onClick={ handleLogin}  sx={{fontSize:'14px' ,fontWeight:'600'}}>
           Login
         </MenuItem>

         <MenuItem onClick={ handleSignup  }   sx={{fontSize:'14px' ,fontWeight:'600'}}>
          Sign Up
         </MenuItem>

     
         </Menu>) : (

           <>
         <Menu
         anchorEl={anchorEl3}
         id="account-menu"
         open={open3}
         onClose={handleCloseO}
         onClick={handleCloseO}
         PaperProps={{
           elevation: 0,
           sx: {
             overflow: 'visible',
             filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
             mt: 1.5,
             '& .MuiAvatar-root': {
               width: 28,
               height: 28,
               ml: -0.5,
               mr: 1,
             },
             '&:before': {
               content: '""',
               display: 'block',
               position: 'absolute',
               top: 0,
               right: 15,
               width: 15,
               height: 15,
               bgcolor: 'background.paper',
               transform: 'translateY(-60%) rotate(45deg)',
               zIndex: 0,
             },
           },
         }}
         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
       >
          
         <MenuItem onClick={handleSignout}   sx={{fontSize:'14px' ,fontWeight:'600'}}>
         Logout
         </MenuItem>
         </Menu>
           </>
          )}
          
          {loginuser== true ? 
         <Menu
         anchorEl={anchorEl}
         id="account-menu"
         open={open}
         onClose={handleClose}
         onClick={handleClose}
         PaperProps={{
           elevation: 0,
           sx: {
             overflow: 'visible',
             filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
             mt: 1.5,
             '& .MuiAvatar-root': {
               width: 28,
               height: 28,
               ml: -0.5,
               mr: 1,
             },
             '&:before': {
               content: '""',
               display: 'block',
               position: 'absolute',
               top: 0,
               right: 15,
               width: 15,
               height: 15,
               bgcolor: 'background.paper',
               transform: 'translateY(-60%) rotate(45deg)',
               zIndex: 0,
             },
           },
         }}
         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
       >
          <MenuItem onClick={ handleProfile}  sx={{fontSize:'14px' ,fontWeight:'600'}}>
            My Profile
          </MenuItem>

         <MenuItem onClick={ handleLogout  }   sx={{fontSize:'14px' ,fontWeight:'600'}}>
         Logout
         </MenuItem>
         </Menu>
          :

          <Menu
         anchorEl={anchorEl}
         id="account-menu"
         open={open}
         onClose={handleClose}
         onClick={handleClose}
         PaperProps={{
           elevation: 0,
           sx: {
             overflow: 'visible',
             filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
             mt: 1.5,
             '& .MuiAvatar-root': {
               width: 28,
               height: 28,
               ml: -0.5,
               mr: 1,
             },
             '&:before': {
               content: '""',
               display: 'block',
               position: 'absolute',
               top: 0,
               right: 15,
               width: 15,
               height: 15,
               bgcolor: 'background.paper',
               transform: 'translateY(-60%) rotate(45deg)',
               zIndex: 0,
             },
           },
         }}
         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
       >
          <MenuItem onClick={ handleLogin}  sx={{fontSize:'14px' ,fontWeight:'600'}}>
           Login
         </MenuItem>

         <MenuItem onClick={ handleSignup  }   sx={{fontSize:'14px' ,fontWeight:'600'}}>
          Sign Up
         </MenuItem>

     
         </Menu>
          }

   
     

      <Menu
        anchorEl={anchorEl1}
        id="account-menu"
        open={open1}
        onClose={handleCloseLan}
        onClick={handleCloseLan}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 15,
              height: 15,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 15,
              width: 15,
              height:15,
              bgcolor: 'background.paper',
              transform: 'translateY(-60%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => handleSelectLanguage('english')}>English</MenuItem>
        <MenuItem onClick={() => handleSelectLanguage('arabic')}>Arabic</MenuItem>
      </Menu>

      {loginPopupOpen && (
        <LoginPopup open={loginPopupOpen} onClose={handleCloseLoginPopup} />
      )}
       {signupPopupOpen && (
        <SignupPopup open={signupPopupOpen} onClose={handleCloseSignupPopup} />
      )}
      <LogoutPop dialogue={logoutpop} onClose={handleCloseLogout}/>
    </Box>
  )
}

export default EnglishHeader
