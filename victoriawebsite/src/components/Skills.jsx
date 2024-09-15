// src/components/Skills.jsx
import React from 'react';
import JavascriptIcon from '@mui/icons-material/JavascriptSharp';
import HtmlSharpIcon from '@mui/icons-material/HtmlSharp';
import CssSharpIcon from '@mui/icons-material/CssSharp';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';




function SkillList() {
  const skills = ["JavaScript", "React", "Bootstrap", "HTML", "CSS", "Node.js", "Figma", "Git" ];
  
    return (
      <List>
        {SkillList.map((item, index) => (
          <ListItem key={index} button component="a" href={item.path}>
            <ListItemIcon>{item.icon}</ListItemIcon>
          </ListItem>
        ))}
      </List>
    );
  }



const CustomJavaScript = () => {
  return (
    <JavaScriptSharp  style={{ color: 'white' }} />
  );
};


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
