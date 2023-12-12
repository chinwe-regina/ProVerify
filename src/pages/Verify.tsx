import { Link } from "react-router-dom";
import pix from"../assets/phone.jpg";
import { IoIosArrowRoundBack } from "react-icons/io";

const Verify = () => {

  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[#39A88E]">
      <div className="w-[95%] h-[95%] flex justify-center items-center">
        <div className="w-[50%] h-full flex flex-col justify-between S320:w-full S375:w-full S425:w-full S800:w-full">
          <div className="min-h-[200px] w-full items-center flex justify-center flex-col my-[50px] S320:my-[20px] S375:my-[20px] S425:my-[20px]">
            <div className="flex flex-col justify-center items-center">
              <div className="flex w-full items-center justify-center">
              <div className='w-full min-h-[200px] flex flex-col justify-between items-center '>
                    <div className='flex w-full justify-between items-center flex-col h-[150px]' >
                        <div className='w-full h-[200px] flex justify-between flex-col '>
                            <input type="text" placeholder='Email' className='flex-1 border border-gray-300 rounded-md bg-white h-[40px] mb-5 pl-2'/>                            
                            <input type="text" placeholder='Password' className='flex-1 outline-none border border-gray-300 rounded-md bg-white mb-5 h-[40px] pl-2'/>                            
                        </div>
                        <div  className="h-[50px] w-full flex mb-[40px] items-center gap-3 justify-center">
                            <div className="flex h-[35px] px-1 w-[80px] hover:cursor-pointer rounded-lg border bg-[#65e9ca]">
                            <div className="flex text-yellow-600 text-[30px] items-center">
                              <IoIosArrowRoundBack/>
                              </div>
                            <div className="flex items-center">Back</div>
                             </div>
                            < Link  className="flex px-1 h-[35px] w-[160px] rounded-lg border hover:cursor-pointer bg-[#65e9ca] items-center justify-center" to="/VerifyCode">Verify Your Account  </Link>
                        </div>
                    </div>
                    
                </div>
              </div>
              </div>
              </div>
              <div className="flex justify-center w-full items-center ">
                        <hr className='w-[49%] h-[2px] flex bg-gray-500 justify-center items-center'/>
                        <div className="flex justify-center items-center ">OR</div>
                        <hr className='w-[49%] h-[2px] flex bg-gray-500 justify-center items-center'/>
                    </div>
            <div className="flex flex-col justify-center items-center">
                    <div className='flex w-full justify-between items-center flex-col h-[150px]' >
                        <div className='w-full h-[200px] flex justify-between flex-col '>
                            <input type="text" placeholder='verify with Google' className='flex-1 border border-gray-300 rounded-md bg-white h-[40px] mb-5 pl-2'/>                            
                            <input type="text" placeholder='verify with Facebook' className='flex-1 outline-none border border-gray-300 rounded-md bg-white mb-5 h-[40px] pl-2'/>                            
                        </div>
                </div>
            </div>
        </div>
        <div className="w-[45%] h-[95%]  m-4 mr-0 flex items-center justify-center bg-[#65e9ca] rounded-2xl shadow-lg flex-col S320:hidden S375:hidden S425:hidden S768:hidden S800:hidden ">
                <div  className="w-[500px] h-[400px] rounded-[50%] S800:border-hidden S1000:border-hidden border m-6 flex items-center justify-center  border-orange-200">
                    <div  className="w-[450px] h-[400px] rounded-[50%] bg-[#39A88E] S800:border-hidden S1000:border-hidden S1000:bg-transparent border flex justify-center items-center border-orange-200 ">
                    <div  className="w-[400px] h-[400px] rounded-[50%] border bg-[#65e9ca] flex justify-center items-center border-orange-200 ">
                    <div className="w-[350px] h-[350px] rounded-[50%] border ">
                        <img src={pix} className= "object-cover w-full h-[100%] rounded-[50%]" />
                     </div>
                    </div>
                    </div>
                </div>
                <div className="w-full flex items-center flex-col">
          <div className="mt-4 font-bold relative flex justify-center bg-[#39A88E] items-center">
            <div className="w-[60px] h-1 rounded-sm bg-orange-600 absolute right-0 top-0" />

            <div className="w-[95px] h-1 rounded-sm bg-[#39A88E] absolute left-0 top-0 " />
          </div>
          <div className="px-4 text-center mt-3 font-bold text-[25px] text-white">
            Full Contactless Experience
          </div>
          <div className=" text-center font-medium text-[12px] text-white ">
            From ordering to paying, that's all contactless
          </div>
          <div className="font-bold my-5  text-[30px] text-orange-600 "><span className="text-black">Eat</span>Easy</div>
        </div> 
          </div>
          
      </div>
    </div>
  )
};

export default Verify;
