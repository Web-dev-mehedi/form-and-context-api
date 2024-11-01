
// import './App.css'
// import SimpleFrom from './components/simpleFrom/SimpleFrom'
// import StateFullForm from './components/statefullForm/StateFullForm'
import Grandpha from "./components/grandpa/Grandpha"
import ReUseAble from "./components/reuseAbleForm/ReUseAble"

function App() {
// 
const handleSignUpSubmit = e =>{
    console.log(e)
}
// 

const handleSUpdateProfile = e =>{
  console.log(e)
}

  return (
    <>

        <h1 className='text-5xl text-red-400 bg-black'>helloo from app</h1>
        {/* <SimpleFrom></SimpleFrom> */}
        {/* <StateFullForm></StateFullForm> */}
        {/* <RefForm></RefForm> */}
        {/* <HookForm></HookForm> */}
        {/* <ReUseAble formTitle={"sign Up"} handleSubmit={handleSignUpSubmit}>
            <div>
               <h2>Sign up</h2>
               <p>Please Isgn up now</p>
            </div>
        </ReUseAble>
        <ReUseAble formTitle={"Profile Update"} submitBtnText={'Update'} handleSubmit={handleSUpdateProfile}>
             <div>
                  <h2>Update Profile</h2>
                  <p> Always keep your profile Update </p>
             </div>
        </ReUseAble> */}
        <Grandpha></Grandpha>
    </>
  )
}

export default App
