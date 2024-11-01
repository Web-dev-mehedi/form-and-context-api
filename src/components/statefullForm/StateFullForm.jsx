
// 2. controlled element: use individual field state for each input field 

import { useState } from "react";

// set value on state
const StateFullForm = () => {

// 
const [email,setEmail]= useState(null);
const [pass,setPass] = useState(null);
const [text,setText] = useState("rojoni klanto");
const [error,setError] = useState("")

 // for from summitting
const handleSubmit = e =>{
    //for prevent reload
    e.preventDefault();
   ;

 if ( pass.length <= 4) {
    alert('you need upto 4 charecter pass');
    setError("you need upto 4 charecter pass")
 } else{
    console.log(text);
     console.log(pass);
    console.log(email);
    setError("")
 }
   
  
        
 
}
// 
const handleText =(e) =>{
    console.log(e.target.value);
    setText(e.target.value)
    
}
// 
const handleEmail =(e)=>{
           console.log(e.target.value);
           setEmail(e.target.value)
}
// 
const handlePass =(e) =>{
    console.log(e.target.value);
    setPass(e.target.value)
}

    return (
        <div>
            <h1>hello form data</h1>

            <div className="w-4/12 mx-auto bg-white text-black ">
            {/* onSubmit={} For form submit on btn click */}
               <form className="space-y-6 p-10 border rounded-lg flex flex-col gap-6" onSubmit={handleSubmit}>
                {/* onChange for keyup event hendaler */}
                     <input onChange={handleText} value={text}  type="text" placeholder="text" name="name" className="border p-4 rounded-lg" />
                     <input onChange={handleEmail} type="email" placeholder="email" name="email" className="border p-4 rounded-lg" />  
                     <input onChange={handlePass} type="password"  placeholder="pass" name="password" required className="border p-4 rounded-lg"/>
                     <button className="p-4 rounded-md border" type="submit" >Submit</button>
                     {
                        error && <p>{error}</p>
                     }
               </form>
         </div>
        </div>
    );
};

export default StateFullForm;