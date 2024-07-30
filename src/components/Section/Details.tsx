import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Link, Box, Divider, Paper } from '@mui/material';

const Details = () => {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Paper elevation={0} sx={{ padding: 4, paddingTop:14, backgroundColor: '#1C1F25' }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#FFFFFF', fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
            How to Use Our Free Online JSON Comparison Tool
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: '#B0B0B0', fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' } }}>
            Using our JSON comparison tool is simple and efficient. Follow these steps to compare JSON data:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="1. Enter Your JSON Data: Copy and paste or fill in the input fields with the JSON data you want to compare. Place one dataset on the left side and the other on the right side." sx={{ color: '#B0B0B0', fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' } }} />
            </ListItem>
            <ListItem>
              <ListItemText primary="2. Click &apos;Compare&apos;: Hit the &apos;Compare&apos; button to start the comparison process." sx={{ color: '#B0B0B0', fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' } }} />
            </ListItem>
            <ListItem>
              <ListItemText primary="3. Fix Incorrect JSON: If the JSON data is dirty or incorrect, a &apos;Fix JSON&apos; button will appear. Click this button to automatically fix the JSON." sx={{ color: '#B0B0B0', fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' } }} />
            </ListItem>
            <List>
                <ListItem>
                    <ListItemText 
                    primary="4. View the Side-by-Side Comparison: You will see a side-by-side comparison of your JSON objects and arrays. The diff shows the original data you entered, now aligned for easy comparison. Highlights in green, blue, and red help you spot differences quickly." 
                    sx={{ color: '#B0B0B0', fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' } }} 
                    />
                </ListItem>
                <ListItem>
                    <List>
                    <ListItem>
                        <ListItemText 
                        primary="Blue: Highlights missing keys or values in one dataset." 
                        sx={{ color: '#B0B0B0', fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' } }} 
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText 
                        primary="Green: Highlights unequal values." 
                        sx={{ color: '#B0B0B0', fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' } }} 
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText 
                        primary="Red: Indicates mismatched values." 
                        sx={{ color: '#B0B0B0', fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' } }} 
                        />
                    </ListItem>
                    </List>
                </ListItem>
                </List>
          </List>
          <Typography variant="body1" paragraph sx={{ color: '#B0B0B0', fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' } }}>
            Check out the <Link href="/about" sx={{ color: '#ff4469' }}>info</Link> section to learn more.
          </Typography>
        </Paper>

        <Divider sx={{ my: 4, backgroundColor: '#ff4469' }} />

        <Paper elevation={0} sx={{ padding: 4, backgroundColor: '#1C1F25' }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ color: '#FFFFFF', fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
            Frequently Asked Questions (FAQ)
          </Typography>
          <List>
            <ListItem>
              <ListItemText 
                primary={
                  <>
                    <Typography variant="body1" component="span" sx={{ color: '#B0B0B0' }}>Q: </Typography>
                    <Typography variant="body1" component="span" sx={{ color: '#B0B0B0' }}>What is a JSON Comparison Tool?</Typography>
                  </>
                } 
                secondary={
                  <Typography variant="body2" sx={{ color: '#B0B0B0' }}>A: A JSON comparison tool allows you to compare two JSON data structures to identify differences and similarities. It&apos;s essential for debugging, data validation, and ensuring consistency between different data sources.</Typography>
                } 
                sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' } }} 
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary={
                  <>
                    <Typography variant="body1" component="span" sx={{ color: '#B0B0B0' }}>Q: </Typography>
                    <Typography variant="body1" component="span" sx={{ color: '#B0B0B0' }}>Is the JSON Comparison Tool free to use?</Typography>
                  </>
                } 
                secondary={
                  <Typography variant="body2" sx={{ color: '#B0B0B0' }}>A: Yes, our JSON comparison tool is completely free to use. There are no hidden costs or premium features.</Typography>
                } 
                sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' } }} 
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary={
                  <>
                    <Typography variant="body1" component="span" sx={{ color: '#B0B0B0' }}>Q: </Typography>
                    <Typography variant="body1" component="span" sx={{ color: '#B0B0B0' }}>What if I encounter errors while using the tool?</Typography>
                  </>
                } 
                secondary={
                  <Typography variant="body2" sx={{ color: '#B0B0B0' }}>A: If you encounter any issues or errors, you can reach out to us via our GitHub repository.</Typography>
                } 
                sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' } }} 
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary={
                  <>
                    <Typography variant="body1" component="span" sx={{ color: '#B0B0B0' }}>Q: </Typography>
                    <Typography variant="body1" component="span" sx={{ color: '#B0B0B0' }}>Is my data secure when using the tool?</Typography>
                  </>
                } 
                secondary={
                  <Typography variant="body2" sx={{ color: '#B0B0B0' }}>A: Yes, your data is processed securely. We do not store or share your JSON data. It&apos;s a client-side comparison tool, ensuring your information remains private.</Typography>
                } 
                sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' } }} 
              />
            </ListItem>

            <ListItem>
              <ListItemText 
                primary={
                  <>
                    <Typography variant="body1" component="span" sx={{ color: '#B0B0B0' }}>Q: </Typography>
                    <Typography variant="body1" component="span" sx={{ color: '#B0B0B0' }}>Can this tool fix JSON data as well?</Typography>
                  </>
                } 
                secondary={
                  <Typography variant="body2" sx={{ color: '#B0B0B0' }}>A: Yes, our tool can help with fixing JSON data. After comparing the JSON files, if any discrepancies are found, we offer an option to automatically correct certain types of errors based on predefined rules. If your JSON does not conform to specific rules and requires additional fixes, you can raise a query on our GitHub repository for further assistance.</Typography>
                } 
                sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' } }} 
              />
            </ListItem>

            <ListItem>
              <ListItemText 
                primary={
                  <>
                    <Typography variant="body1" component="span" sx={{ color: '#B0B0B0' }}>Q: </Typography>
                    <Typography variant="body1" component="span" sx={{ color: '#B0B0B0' }}>Will our tool display Google ads?</Typography>
                  </>
                } 
                secondary={
                  <Typography variant="body2" sx={{ color: '#B0B0B0' }}>A: No, our tool does not display Google ads. Instead, we may include promotional banners to support the continued development and maintenance of the tool. Rest assured, we ensure that any promotional content does not include adult material or inappropriate ads.</Typography>
                } 
                sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' } }} 
              />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default Details;
