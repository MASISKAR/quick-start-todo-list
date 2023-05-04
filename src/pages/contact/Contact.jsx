import {useRef, useState} from 'react';

function Contact(){
const inputRef = useRef(null);
const [value, setValue] = useState('');

const handleClick = ()=>{
    console.log(inputRef.current.value);
    inputRef.current.value = '';
};

    return(
        <div>
        <h1 className="text-center">Contact us page</h1>
       Input 1 <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
       <br/>
        Input 2 <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Contact;