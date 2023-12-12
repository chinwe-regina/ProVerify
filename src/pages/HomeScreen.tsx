
import { Link } from "react-router-dom"
import vid from "../assets/IMG_20231028_100722_585.jpg"

const HomeScreen = () => {
  return (
    <div className='h-[100vh] w-full flex-col pt-[70px]'>
      <div className='w-[75%] h-[75%] items-center justify-center'>
        <div className='flex ml-20'>
          
        </div>
        <div className='h-[200px] w-[200px] object-cover bg-no-repeat '>
        <video src={vid} className=''></video>
        </div>
      </div>
      <div className='h-[20%] flex flex-col items-center justify-center'>
        <div className='flex mb-5'>New User? Signup here</div>
        <div className='w-[600px] justify-between h-[60px] flex ' >
          <input type="text" placeholder='Email' className='w-[180px] h-[40px] text-[15px] border pl-2 rounded-md' />
          <input type="text" placeholder='Password' className='w-[180px] h-[40px] text-[15px] border pl-2 rounded-md' />
          <Link to="/verify" className="font-bold text-black w-[180px] h-[40px] flex border items-center justify-center bg-green-800">
              GET STARTED
            </Link>
        </div>
      </div>
      <div className='w-full flex justify-center items-center'>
      <hr className='w-[46%] flex' />
      <div>Testimonals</div>
      <hr className='w-[46%] flex'/>
      </div>
    </div>
  )
}

export default HomeScreen