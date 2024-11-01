import { Children } from "react";


const ReUseAble = ({formTitle,handleSubmit,submitBtnText="Submit",children}) => {
    // for from summitting
 
     const handleLocalSubmit =e=>{
        e.preventDefault();
        // to get data on object Format
        const data={
            name : e.target.name.value,
            email : e.target.name.value,
            password : e.target.password

        }
        handleSubmit(data)
     }
    
        return (
        
            <div className="w-4/12 mx-auto bg-white text-black p-6 ">
                {/* we can write form title in props */}
                    {/* <h1 className="p-4 text-4xl">{formTitle}</h1> */}
                    {children}
                {/* onSubmit={} For form submit on btn click */}
                   <form className="space-y-6 p-10 border rounded-lg flex flex-col gap-6" onSubmit={handleLocalSubmit}>
                         <input type="text" placeholder="text" name="name" className="border p-4 rounded-lg" />
                         <input type="email" placeholder="email" name="email" className="border p-4 rounded-lg" />  
                         <input type="password"  placeholder="password" name="password" className="border p-4 rounded-lg"/>
                         <button className="p-4 rounded-md border" type="submit" >{submitBtnText}</button>
                   </form>
             </div>
        );
};

export default ReUseAble;