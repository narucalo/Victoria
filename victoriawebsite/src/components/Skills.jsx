// src/components/Skills.jsx
import React from 'react';
import JavascriptIcon from '@mui/icons-material/JavascriptSharp';
import HtmlSharpIcon from '@mui/icons-material/HtmlSharp';
import CssSharpIcon from '@mui/icons-material/CssSharp';
import { ThemeProvider } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import { Css, CssSharp, HtmlSharp, JavascriptSharp } from '@mui/icons-material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Html from '@mui/icons-material/Html';


  const skills = ["JavaScript", "React", "Bootstrap", "HTML", "CSS", "Node.js", "Figma", "Git" ];
  


  return (
    <Stack direction="row" spacing={2}>
      <JavascriptSharp />
      <Html />
      <Css />
    </Stack>
  );
}




  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
  
  export default function ResponsiveStack() {
    return (
      <div>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </div>
    );
  }
  

const CustomJavaScript = () => {
  return (
    <JavaScriptSharp  style={{ color: 'white' }} />
  );
};







function Post() {
  return (
    <>
      <PostTitle />
      <PostBody />
    </>
  );
}
