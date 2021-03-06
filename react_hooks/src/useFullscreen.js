import { useRef } from 'react';

export const useFullscreen=()=>{
  const element=useRef();
  const triggerFull=()=>{
    if(element.current){
      element.current.requestFullscreen();
      
    };
  }
  const exitFullscreen=()=>{
    document.exitFullscreen();
  } 
  return {element,triggerFull,exitFullscreen};
};
