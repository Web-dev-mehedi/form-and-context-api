import { useEffect, useRef, useState } from "react";


const RefForm = () => {

    // useRef for get value
    const nameRef =useRef(null);
    const emailRef =useRef(null)
    const passRef =useRef(null);
    // state for validation
    const [error,setError] = useState("")

    useEffect(()=>{
        // focus for auto stayed in the input field
            nameRef.current.focus()
    },[])

    // for from summitting
    const handleSubmit = e =>{
        //for prevent reload
        e.preventDefault()
        if(passRef.length <= 4) {
            setError("you need upto 4 char password") 
            alert("you need upto 4 char password")
        }else{
           
            console.log("Text",nameRef.current.value);
            console.log("Email",emailRef.current.value);
            console.log("Number",passRef.current.value); 
            setError("") ;
        }
    }


    return (
        <div>
             <div className="w-4/12 mx-auto bg-white text-black ">
            {/* onSubmit={} For form submit on btn click */}
               <form className="space-y-6 p-10 border rounded-lg flex flex-col gap-6" onSubmit={handleSubmit}>
                     <input ref={ nameRef} type="text" placeholder="text"  className="border p-4 rounded-lg" />
                     <input ref={emailRef} type="email" placeholder="email" defaultValue={"rojoniclanto@gmail.com"} className="border p-4 rounded-lg" />  
                     <input ref={passRef} type="password"  placeholder="pass"  className="border p-4 rounded-lg"/>
                     <button className="p-4 rounded-md border" type="submit" >Submit</button>
                     {
                        error && <p>{error}</p>
                     }
               </form>
           </div>
         </div>
    );
};

export default RefForm;
