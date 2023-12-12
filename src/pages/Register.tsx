import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className='w-full h-[100vh] justify-center flex '>
        <div className='w-[85%] h-[85%] flex justify-between items-center'>
            <div className='w-[750px] h-[400px] flex flex-col'>
                <div className='w-full min-h-[200px] flex flex-col justify-between items-center '>
                    <div className='flex w-full justify-between items-center flex-col h-[150px]' >
                        <div className='w-[650px] h-[200px] flex justify-between flex-col '>
                            <input type="text" placeholder='Name' className='flex-1 border border-gray-300 rounded-md bg-white h-[40px] mb-5 pl-2'/>
                            <input type="text" placeholder='Email' className='flex-1 border border-gray-300 rounded-md bg-white h-[40px] mb-5 pl-2'/>                            
                            <input type="text" placeholder='Password' className='flex-1 outline-none border border-gray-300 rounded-md bg-white mb-5 h-[40px] pl-2'/>                            
                        </div>
                        <div className='w-[300px] h-[40px] flex items-center border mr-3 rounded-md'>
                            <Link to="/HomeScreen" className='flex border-r min-w-[100px] h-full mr-10 mx-1'>Back to home </Link>
                            < Link  className='flex min-w-[100px] h-full mx-1' to="/Verify">Verify Your Account  </Link>
                        </div>
                    </div>
                        <hr className='w-full h-[2px] flex bg-gray-500 mb-3'/>
                </div>
             
            </div>
        </div>
    </div>
  )
}

export default Register