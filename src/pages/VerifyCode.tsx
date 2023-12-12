import {FcFlashAuto} from "react-icons/fc"
import { FaTimes } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import React, { useRef, useState, useEffect, FC } from "react";
// import { useNavigate } from "react-router-dom";
import pix from"../assets/phone.jpg";
import { Link } from "react-router-dom";

interface iProps {
  callback?: any;
  reset?: any;
  isLoading?: boolean;
  verifyFunction?: any;
}
const VerifyCode: FC <iProps>= ({
  verifyFunction,
  reset,
  isLoading,
}) => {
  const [code, setCode]: any = useState("");
  const inputRefs: any = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const resetCode = () => {
    inputRefs.forEach((ref: React.MutableRefObject<any>) => {
      ref.current.value = "";
    });

    inputRefs[0]?.current?.focus();
    setCode("");
  };

  
  // Call our callback when code = 6 chars
  useEffect(() => {
    if (code.length === 6) {
      {
        verifyFunction;
      }
    }
  }, [code]); //eslint-disable-line

  // Listen for external reset toggle
  useEffect(() => {
    resetCode();
  }, [reset]); //eslint-disable-line

  // Handle input
  function handleInput(e: any, index: number) {
    const input = e.target;
    const previousInput = inputRefs[index - 1];
    const nextInput = inputRefs[index + 1];

    input.select();

    if (input.value === "") {
      // If the value is deleted, select previous input, if exists
      if (previousInput) {
        previousInput.current.focus();
      }
    } else if (nextInput) {
      // Select next input on entry, if exists
      nextInput.current.select();
    }
  }

  // Select the contents on focus
  function handleFocus(e: any) {
    e.target.select();
  }

  // Handle backspace key
  function handleKeyDown(e: any, index: number) {
    const input = e.target;
    const previousInput = inputRefs[index - 1];

    if ((e.keyCode === 8 || e.keyCode === 46) && input.value === "") {
      e.preventDefault();
      setCode(
        (prevCode: any) => prevCode.slice(0, index) + prevCode.slice(index + 1)
      );
      if (previousInput) {
        previousInput.current.focus();
      }
    }
  }

  // Capture pasted characters
  const handlePaste = (e: any) => {
    const pastedCode = e.clipboardData.getData("text");
    if (pastedCode.length === 6) {
      setCode(pastedCode);
      inputRefs.forEach((inputRef: any, index: number) => {
        inputRef.current.value = pastedCode.charAt(index);
      });
    }
  };

  // Clear button deletes all inputs and selects the first input for entry
  const ClearButton = () => {
    return (
      <div className="w-full flex  justify-center">
        <button onClick={resetCode} className="text-2xl flex items-center">
          <FaTimes />
          <span>Cancel</span>
        </button>
      </div>
    );
  };
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[#39A88E]">
      <div className="w-[95%] h-[95%] flex justify-center items-center">
        <div className="w-[50%] h-full flex flex-col justify-between S320:w-full S375:w-full S425:w-full S800:w-full">
          <div className="min-h-[200px] w-full items-center flex justify-center flex-col my-[200px] S320:my-[50px] S375:my-[50px] S425:my-[100px]">
            <div className="flex flex-col justify-center items-center">
              <div className="flex w-full items-center justify-center">
            <div className=" flex font-bold  w-full text-[20px] text-white items-center justify-center">Verify your Account</div>
            <div className="items-center flex justify-center text-[25px]"><FcFlashAuto/></div>
              </div>
            <div className=" flex text-[17px] text-white">We just sent a six(6) digit code to your email</div>
            <div className=" flex text-[15px] text-white">Enter the code in the box below to continue</div>
            </div>
            <div className="flex items-center justify-center my-8 flex-col">
              <div className="flex gap-2 relative mb-2">
                {[0, 1, 2, 3, 4, 5].map((index)=>(
                  <input type="text" className="bg-transparent border rounded-lg w-8 flex p-2 text-center" 
                  maxLength={1} key={index}
                  onChange={(e) => handleInput(e, index)}
                  ref={inputRefs[index]}
                  autoFocus={index === 0}
                  onFocus={handleFocus}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={handlePaste}
                  disabled={isLoading} />
                ))}
              </div>
              <div className="">{code.length ? <ClearButton /> : <></>}</div>
              <div className="text-[14px]">Did'nt recieve a code? <span className="text-yellow-500 hover:cursor-pointer">Resend code</span></div>
            </div>

          </div>
          <div className="h-[50px] w-full flex mb-[40px] items-center gap-3 justify-center">
            <div className="flex h-[35px] px-1 w-[80px] hover:cursor-pointer rounded-lg border bg-[#65e9ca]">
              <div className="flex text-yellow-600 text-[30px] items-center">
              <IoIosArrowRoundBack/>
              </div>
              <Link to="/Verify" className="flex items-center">Back</Link>
            </div>
            <div className="flex px-1 h-[35px] w-[160px] rounded-lg border hover:cursor-pointer bg-[#65e9ca] items-center justify-center">Verify</div>
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
}

export default VerifyCode