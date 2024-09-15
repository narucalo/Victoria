// src/components/Skills.jsx
import React from 'react';
import JavascriptIcon from '@mui/icons-material/JavascriptSharp';
import HtmlSharpIcon from '@mui/icons-material/HtmlSharp';
import CssSharpIcon from '@mui/icons-material/CssSharp';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';



function SkillArray() {
  const SkillList =  ["JavaScript", "React", "Bootstrap", "HTML", "CSS", "Node.js", "Figma", "Git" ];
  
  return (
    <div>
      <ul>
        {SkillList.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}



export default function BoxSx() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0066CC',
          },
        },
      }}
    >
      <Box
        sx={{
          width: 600,
          height: 100,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      />
    </ThemeProvider>
  );
}







function Post() {
  return (
    <>
      <PostTitle />
      <PostBody />
    </>
  );
}
