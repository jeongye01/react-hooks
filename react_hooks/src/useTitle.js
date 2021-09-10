import { useState,useEffect } from 'react';
export const useTitle=(iniitialTitle)=>{
  const [title,setTitle]=useState(iniitialTitle);
  const updateTitle=()=>{
    const htmlTitle=document.querySelector("title");
    htmlTitle.innerText=title;
  };
  useEffect(updateTitle,[title]);
  return setTitle;
};