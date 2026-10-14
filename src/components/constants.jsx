
import { FaReact, FaJsSquare,FaNodeJs, FaCss3 } from 'react-icons/fa';
import { DiMongodb } from "react-icons/di";
import { TbBrandRedux } from "react-icons/tb";
import { SiExpress, SiTailwindcss,SiTypescript , SiVisualstudiocode } from "react-icons/si";




export const projects = [
  {
    name: 'Code Feelings',
    info: 'A VS Code extension that reacts to coding activity, errors, warnings, and file saves through a reactive mechanical face.',
    tech: [
      { id: 1, icon: <SiTypescript /> },
      { id: 2, icon: <SiVisualstudiocode /> },
    ],
    url: 'https://github.com/ChaplainRafael/stateServo',
    github: 'https://marketplace.visualstudio.com/items?itemName=ChaplainRafael.Wrenchy'
  },
  {
    name: 'Food Finder',
    info: 'Full-Stack Food recipe finder with login',
    tech: [
      { id: 1, icon: <FaReact /> },
      { id: 2, icon: <FaJsSquare /> },
      { id: 3, icon: <FaNodeJs /> },
      { id: 4, icon: <DiMongodb /> },
      { id: 5, icon: <SiExpress /> },
    ],
    url: 'https://findmefood.netlify.app/',
    github: 'https://github.com/ChaplainRafael/foodfinder-front'
  },
    {
      name: 'Memories of a cool Tech-Priest',
      
      info: 'Full-Stack memories app',
      tech: [
        { id: 1, icon: <FaReact /> },
        { id: 2, icon: <FaJsSquare /> },
        { id: 3, icon: <FaNodeJs /> },
        { id: 4, icon: <DiMongodb /> },
        { id: 5, icon: <TbBrandRedux /> },
        { id: 6, icon: <SiExpress /> },
      ], 
      url:'https://techpriest-memories.netlify.app',
      github:'https://github.com/ChaplainRafael/mechanicus-memory-frontend'
    },
    {
      name: 'ToDo Cogitator(App)',
      
      info: 'Simple ToDo app to track tasks in local memory',
      tech: [
        { id: 7, icon: <FaReact /> },
        { id: 8, icon: <FaCss3 /> },
      ], 
      url:'https://todocogitator.netlify.app',
      github:'https://github.com/ChaplainRafael/ToDo'
    },
    {
        name: 'Random Bible Verse',
        
        info: 'Fetching random bible verses from the API',
        tech: [
          { id: 9, icon: <FaReact /> },
          { id: 10, icon: <FaJsSquare /> },
        ], 
        url:'https://randombv.netlify.app',
        github:'https://github.com/ChaplainRafael/bible-advice'
      },
      {
        name: 'Landing Page',
        
        info: 'Medical Landing Page',
        tech: [
          { id: 11, icon: <FaReact /> },
          { id: 12, icon: <SiTailwindcss /> },
        ], 
        url:'https://hospital-lp.netlify.app/#',
        github:'https://github.com/ChaplainRafael/H-LandingPage'
      },
      
  ];

export const skills =[
  {
    skill:'skill1',
    img:'skill-img',
  },
];