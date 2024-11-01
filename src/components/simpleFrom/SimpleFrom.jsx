
// 1. use form tag and onSubmit handler with event (e) 
const SimpleFrom = () => {

    // for from summitting
const handleSubmit = e =>{
    //for prevent reload
    e.preventDefault()
    console.log("Text",e.target.name.value);
    console.log("Email",e.target.email.value);
    console.log("Number",e.target.age.value)
}

    return (
        <div className="w-4/12 mx-auto bg-white text-black ">
            {/* onSubmit={} For form submit on btn click */}
               <form className="space-y-6 p-10 border rounded-lg flex flex-col gap-6" onSubmit={handleSubmit}>
                     <input type="text" placeholder="text" name="name" className="border p-4 rounded-lg" />
                     <input type="email" placeholder="email" name="email" className="border p-4 rounded-lg" />  
                     <input type="number"  placeholder="number" name="age" className="border p-4 rounded-lg"/>
                     <button className="p-4 rounded-md border" type="submit" >Submit</button>
               </form>
         </div>
    );
};

export default SimpleFrom;