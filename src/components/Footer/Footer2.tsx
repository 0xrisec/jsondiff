import React from 'react';
import { Container, Grid, Typography, Link, Box, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './Footer.css';

const Footer2: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#111318', py: 5 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <Link href="/" underline="none">
                <h1 className="logo">JSON Diff</h1>
            </Link>
            <Typography variant="body2" color="textSecondary" mt={3} sx={{ color: '#b0b0b0' }}>
              <p>Compare, format, validate, and fix JSON data effortlessly with JSON Diff. Our tool operates entirely client-side using JavaScript, ensuring a secure and ad-free experience. Perfect for professional use, JSON Diff is the top choice for accurate JSON comparisons. It&apos;s open-source; you can check out the <a className="text-[#ff4469]" target="_blank" rel="noopener noreferrer" aria-label="View project on GitHub" href="https://github.com/0xrisec/jsondiff">Github</a> repository for more details.</p>
              <br>
              </br><p>Developed by <a href="https://www.linkedin.com/in/0xrisec/" rel="noopener noreferrer" target="_blank" className='text-[#ff4469]'>0xrisec</a></p>
            </Typography>
            <Box mt={4}>
              <IconButton
                component="a"
                href="https://twitter.com/Semantic_Diff"
                target="_blank"
                rel="noopener"
                sx={{ color: '#b0b0b0' }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/company/sysmagine/"
                target="_blank"
                rel="noopener"
                sx={{ color: '#b0b0b0' }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={8}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={3}>
                <Typography variant="h6" sx={{ color: '#ffffff' }}>
                  Products
                </Typography>
                <Link href="/" sx={{ color: '#b0b0b0' }} display="block" mt={1}>
                  Jsondiff tool
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box textAlign="center" mt={5}>
        <IconButton href="#" sx={{ color: '#b0b0b0' }} title="Top">
          <ArrowUpwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer2;
