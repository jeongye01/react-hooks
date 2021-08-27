import './App.css';
import React,{useState} from "react";
import {useInput} from'./useInput'; 
//import Axios from "axios";


const content=[
  {
    tab: "Section 1",
    cont: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    cont: "I'm the content of the Section 2"
  }
];
const useTabs=(initialTab,allTabs)=>{
  const [currentIndex,setCurrentIndex]=useState(initialTab);
 
  if(!allTabs || Array.isArray(allTabs)){
    return;
  }
  
  return{
    currentItem: allTabs[currentIndex],
    changeItem:setCurrentIndex
  };
};
 function App(){
   
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
};

export default App;
