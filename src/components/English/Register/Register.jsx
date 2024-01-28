"use client"
import React,{useState} from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Footer from '../Footer/Footer'
import FooterArabic from '@/components/Arabic/Footer/Footer'
import { useLanguage } from '@/context/LanguageContext'
import BottomBar from '@/components/English/bottombar/bottom'
import BottomBarArabic from '@/components/Arabic/bottombar/bottom'



const Register = () => {
    const [username,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [error,setError] = useState('')
    const router = useRouter()
    const { language } = useLanguage();

    const isSpecialChar = (str) => /[!@#$%^&*(),.?":{}|<>]/.test(str);


    const handleSignup = async()=>{

      if (!username || !email || !password || !confirmPassword) {
        setError("All fields are required");
        return;
    }


if(password !== confirmPassword){
  setError("Passwords do not match");
    return;
}

const usernameRegex = /^[A-Za-z]+$/;
if (!usernameRegex.test(username)) {
  setError('Username should contain only letters');
  return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  setError('Invalid email format');
  return;
}

if (password.length < 8 || isSpecialChar(password)) {
  setError('Password must be at least 8 characters long and should not contain special characters');
  return;
}


else{
    const res = await fetch("/api/auth/register",{
        method:'POST',
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            email,
          password
        }),
      })

      const response = await res.json()
      if(res.ok){
 router.push('/login')
      }
}
    }




  return (
    <Box sx={{height:'90dvh',overflow:'auto'}}>
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:"3rem",marginBottom:"3rem"}}>
    <Box
  sx={{
    width: '30%',
    background: '#fff',
    border: '0.5px solid #32385a',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: '20px',
    height: '85vh',
    '@media screen and (max-width: 768px)': {
      width: '100%', 
      margin:'0 1rem',
      height: '90vh',
      
    },
  }}
>              <Typography fontSize='28px'  color='#32385a' fontWeight={600} sx={{padding:'2rem 0 1rem',textDecoration:'underline'}}>REGISTER  </Typography>
               <Box sx={{width:'70%',}}>
               <Typography marginTop='2rem' fontSize='16px' align='left' color='#32385a' fontWeight={500}>User Name*</Typography>
               <TextField sx={{width:'100%',marginTop:'0.2rem'}}  InputProps={{style:{height:'40px'}}} onChange={(e)=>setUserName(e.target.value)}/>
               </Box>
               <Box sx={{width:'70%',}}>
               <Typography marginTop='1rem' fontSize='16px' align='left' color='#32385a' fontWeight={500}>Email*</Typography>
               <TextField sx={{width:'100%',marginTop:'0.2rem'}}  InputProps={{style:{height:'40px'}}} onChange={(e)=>setEmail(e.target.value)}/>
               </Box>
               <Box sx={{width:'70%'}}>
               <Typography marginTop='1rem' fontSize='16px' align='left' color='#32385a' fontWeight={500}>Password*</Typography>
               <TextField type='password' sx={{width:'100%',marginTop:'0.2rem'}}  InputProps={{style:{height:'40px'}}} onChange={(e)=>setPassword(e.target.value)}/>
               </Box>
               <Box sx={{width:'70%'}}>
               <Typography marginTop='1rem' fontSize='16px' align='left' color='#32385a' fontWeight={500}>Confirm Password*</Typography>
               <TextField type='password' sx={{width:'100%',marginTop:'0.2rem'}}  InputProps={{style:{height:'40px'}}} onChange={(e)=>setConfirmPassword(e.target.value)}/>
               {error && (
                <Typography  marginTop='0.2rem' fontSize='12px' align='left' color='red' fontWeight={400}>{error}</Typography>
               )}
               </Box>

               <Button onClick={handleSignup}  sx={{background:'#32385a',color:'#fff',width:'75%',borderRadius:'5px',margin:'2rem 0rem 0rem','&:hover':{background:'#32385a',color:'#fff'}}}>Register</Button>
               <Typography component={Link} href='./login' sx={{ padding: "0 0 3rem", color: '#32385a' }}>
  Already Have an Account?
</Typography>         </Box>
         </Box>
    {language === 'english' ? <Footer/> :  <FooterArabic/> }
     {language === 'english' ? <BottomBar/> :  <BottomBarArabic/> }
    </Box>
  )
}

export default Register