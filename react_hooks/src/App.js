import './App.css';
import React,{useState,useEffect,useRef} from "react";
//import {useInput} from'./useInput'; 
//import {useTabs} from './useTabs';
//import Axios from "axios";
const useFullscreen=()=>{
  const element=useRef();
  const triggerFull=()=>{
    if(element.current){
      element.current.requestFullscreen();
    }
  };
  return {element,triggerFull};
}

const App=()=>{
  const fadeInH1=useFadeIn();
  return(
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
    </div>
  );
};




/*
const App=()=>{
  const begForLife=()=>console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
};



/*
const App=()=>{
  const {enablePrevent,disablePrevent}=usePreventLeave();
  return(
    <div className="App">
      <button onClick={disablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );

};





/*
const App=()=>{
  const deleteWorld=()=>console.log("Deleting the world...");
  const confirmDelete=useConfirm("Are you sure",deleteWord);
  return(
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};



/*
function App(){
  const sayHello=()=>console.log("say hello");
  const title=useClick(sayHello);
  return(
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );

}






/*
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
