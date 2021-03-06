import { useEffect, useState } from 'react';
import defaultAxios from "axios";

export const useAxios=(opts,axiosInstance=defaultAxios)=>{
  const [state,setState]=useState({
    loading:true,
    error:null,
    data:null
  });
  const [trigger,setTrigger]=useState(0);
  if(!opts.url){
    return;
  }   
  const refetch=()=>{
    setState({
      ...state,
      loading:true
    });
    setTrigger(new Date());
  }
  useEffect(()=>{
    axiosInstance(opts).then(response=>{
      setState({
      ...state,
      loading:false,
      data
    }).catch(error=>{
      setState({...state,loading:false,error});
    });
    });
  },[trigger]);
  return {...state,refetch}
}