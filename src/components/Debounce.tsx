import React ,{useState}from 'react'

function Debounce() {
    const [input,setInput]=useState("type something to see how debounce works ");
    const [debounceCount,setDebounceCount]=useState(0);
    const myDebounce=function(callback:Function,delay:number){
        let timer:any;
        return function(...args:any){
            if(timer) clearTimeout(timer);
            timer=setTimeout(()=>{callback(...args)},delay)
        }
    }
    const debounceEffect=myDebounce((e:any)=>{
        setInput(e.target.value);
        setDebounceCount(p=>p+1);
    },800)
  return (
    <div>
        <input placeholder='type something to see debounce effect' className='border p-2' type='text' onChange={(e)=>{debounceEffect(e)}}/>
        <h3 className='text-center text-2xl p-2 m-2'>this is debounce effect: </h3>
        <p className='text-center p-1 '>{input}</p>
        <h3 className='text-center text-2xl p-2 m-2'>this shows how many times the state changed:</h3>
        <p className='text-center p-1'>{debounceCount}</p>
    </div>
  )
}

export default Debounce