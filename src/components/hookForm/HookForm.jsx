import useInputState from "../../hooks/useInputState";

const HookForm = () => {

    // const [name, handleNameChange] = useInputState("rojoni klanto")
    // 2nd methood
    const emailState = useInputState("rojoniklanto@gmail.com")
        // for from summitting
const handleSubmit = e =>{
   
    //for prevent reload
    e.preventDefault()
    
    // console.log("Text",name);
    console.log("email", emailState.value);
  
}
    return (
        <div>
             <div className="w-4/12 mx-auto bg-white text-black ">
            {/* onSubmit={} For form submit on btn click */}
               <form className="space-y-6 p-10 border rounded-lg flex flex-col gap-6" onSubmit={handleSubmit}>
                     {/* <input value={name} onChange={handleNameChange} type="text" placeholder="text" name="name" className="border p-4 rounded-lg" /> */}
                     <input {...emailState} type="email" placeholder="email" className="border p-4 rounded-lg" />  
                     <input type="number"  placeholder="number" name="age" className="border p-4 rounded-lg"/>
                     <button className="p-4 rounded-md border" type="submit" >Submit</button>
               </form>
         </div>
        </div>
    );
};

export default HookForm;