import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Box>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

const HeaderWithNav = () => {
  const headerLinks = [
    { label: "Home", route: "/" },
    { label: "About", route: "/about" },
    { label: "Features", route: "/features" },
    { label: "Blog", route: "/blog" },
    { label: "Contact", route: "/contact" },
  ];

  return (
    <AppBar position="static" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/assets/images/w-light.svg"
            alt="w logo light"
            width={30}
            height={30}
          />
          <img
            src="/assets/images/separator.svg"
            alt="separator"
            width={20}
            height={20}
            className="hidden -rotate-12 sm:block"
          />
          <Typography variant="h6" component="div" sx={{ ml: 2 }}>
            WILL TO CODE
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {headerLinks.map((link) => (
            <Button
              key={link.label}
              color="inherit"
              href={link.route}
              sx={{ mx: 1 }}
            >
              {link.label}
            </Button>
          ))}
          <Button color="inherit">Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { Header, HeaderWithNav };