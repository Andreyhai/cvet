import React from 'react';
import { styled } from '@mui/system';
import { Container, Typography, Link } from '@mui/material';

const FooterContainer = styled('footer')({
  marginTop: 'auto',
  padding: '20px',
  backgroundColor: '#f4f4f4',
  color: '#333',
});

function Footer() {
  return (
    <FooterContainer style={{
      background: "#FEEFDA"
    }}>
      <Container maxWidth="md">
        <Typography variant="body1">
          © {new Date().getFullYear()} Цветочная лавка
        </Typography>
        <Typography variant="body2">
          Создано с использованием Material-UI
        </Typography>
        <Typography variant="body2">
          <Link href="https://www.example.com" color="inherit">
            Политика конфиденциальности
          </Link>
        </Typography>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
