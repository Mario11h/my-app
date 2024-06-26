import React from 'react';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';


// Styled components for improved design control
const FooterContainer = styled('footer')({
  borderTop: '1px solid #e0e0e0',
  backgroundColor: '#f5f5f5',
  padding: '20px 0',
  textAlign: 'center',
});

const SocialIconButton = styled(IconButton)({
  margin: '0 10px',
  '&:hover': {
    backgroundColor: 'transparent',
  },
});

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="body2" sx={{ color: '#666', pr: 1 }}>
          Follow us on:
        </Typography>
        <Link href="https://www.instagram.com" color="inherit" sx={{ mx: 1 }}>
          <SocialIconButton color="inherit">
            <InstagramIcon />
          </SocialIconButton>
        </Link>
        <Link href="https://www.github.com" color="inherit" sx={{ mx: 1 }}>
          <SocialIconButton color="inherit">
            <GitHubIcon />
          </SocialIconButton>
        </Link>
        <Link href="https://www.whatsapp.com" color="inherit" sx={{ mx: 1 }}>
          <SocialIconButton color="inherit">
            <WhatsAppIcon />
          </SocialIconButton>
        </Link>
      </Box>
      <Box mt={2}>
        <Typography variant="caption" sx={{ color: '#888' }}>
          © 2024 Your Website. All rights reserved.
        </Typography>
      </Box>
    </FooterContainer>
  );
};

export default Footer;