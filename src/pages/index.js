import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styled from '@emotion/styled'
import { Box, Container, CssBaseline, Typography } from '@mui/material'
import { bgcolor, color } from '@mui/system'
import ComponentFooter from '../components/footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main>
    
      
      <Container maxWidth ="full"  sx={{
         bgcolor: '#F5F5F5', height: '100vh' , color:'black' ,margin:'0' ,padding:'0'}}>
       <Typography>Hello test</Typography>
          <ComponentFooter/>
      </Container>
    
      
      </main>
    
  )
}
