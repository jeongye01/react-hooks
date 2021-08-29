import './App.css';
import React,{useState,useEffect} from "react";
//import {useInput} from'./useInput'; 
//import {useTabs} from './useTabs';
//import Axios from "axios";

const useTitle=(iniitialTitle)=>{
  const [title,setTitle]=useState(iniitialTitle);
  const updateTitle=()=>{
    const htmlTitle=document.querySelector("title");
    htmlTitle.innerText=title;
  };
  useEffect(updateTitle,[title]);
  return setTitle;
};
function App(){
  const titleUpdater=useTitle("Loding...");
  setTimeout(()=>titleUpdater("Home"),5000);
  return(
    <div></div>
  );

}
























/*const content=[
  {
    tab: "Section 1",
    cont: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    cont: "I'm the content of the Section 2"
  }
];

 /*function App(){
   
   const [item,setItem]=useState(1);
   const incrementItem=()=>setItem(item+1);
   const decrementItem=()=>setItem(item-1);
   const maxLen=(value)=> value.length<10;
   const name=useInput("Mr ",maxLen);
   const {currentItem,changeItem}=useTabs(0,content);
   return (
     <div className="App">
       <h1>Hello {item}</h1>
       <button onClick={incrementItem}>+</button>
       <button onClick={decrementItem}>-</button>
       <input placeholder="Name" {...name}/>
       {content.map((section,index)=>(
         <button onClick={()=>changeItem(index)}>{section.tab}</button>
       ))}
       <div>{currentItem.cont}</div>
     </div>
   );
};*/

export default App;
