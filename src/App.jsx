import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { BiSolidCricketBall } from "react-icons/bi";
import { IoFootball } from "react-icons/io5";
import { BiSolidTennisBall } from "react-icons/bi";
import { FcSportsMode } from "react-icons/fc";
import { MdCasino } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import './App.css'

function App() {


  return (

    <div className="flex flex-col">

      <nav className=' top-0 sticky z-50 w-full flex justify-center items-center md:flex md:justify-between bg-gradient-to-t from-blue-700 to-blue-900 md:px-8 md:py-4 gap-3 p-4'>

        <div className='flex  space-x-4'>
          <div className='flex flex-col md:pt-6 text-white'>
            <h3>BRAND</h3>
            <h3>LOGO</h3>
          </div>
          <div> <h1 className='text-white font-bold text-2xl md:pt-6'>BRAND NAME</h1></div>
        </div>
        <div className='flex wrap gap-4 md:pt-8'>
          <button className=' size-30 bg-red-700 rounded-md  md:px-3 px-2 py-1 text-white font-bold '>Login</button>
          <button className='size-35 bg-green-700 rounded-md md:px-3 px-2 py-1 text-white font-bold'>SIgn Up</button>
        </div>
      </nav>

      <div className='w-full flex flex-wrap justify-evenly p-3 gap-1 '>
        <button className=' size-25 flex justify-center items-center rounded-xl px-2 font-bold bg-white border border-black text-blue-700'><FaHome className=" md:size-5 size-6" />Home</button>
        <button className=' size-25 flex justify-center items-center rounded-xl px-2 font-bold bg-white border border-black text-blue-700'><FcSportsMode className=" md:size-5 size-6" />Sports Book</button>
        <button className=' size-25 flex justify-center items-center rounded-xl px-2 font-bold bg-white border border-black text-blue-700'><MdCasino className=" md:size-5 size-6" />Live Casino</button>
        {/* <button className=' flex justify-center items-center rounded-lg px-2  font-bold bg-white  text-blue-700'><FcSportsMode className="md:size-5 size-6" />Sports Book</button> */}
        {/* <button className=' flex justify-center items-center rounded-lg px-2  font-bold bg-white  text-blue-700'><MdCasino className="md:size-5 size-6"/>Live Casino</button> */}

      </div>
      <hr className="bg-black-500 h-2" />
      <div className=' flex flex-row flex-wrap  justify-center items-center gap-8 mt-5'>
        {/* <div className='w-full flex justify-evenly'> */}
        <div className=' relative h-55 w-[80%] sm:w-[40%] md:w-[40%] lg:w-[25%] bg-cover p-20 rounded-lg bg-red-700' >
          <h4 className=' px-2 absolute bottom-1  font-bold text-white'>Teen Patti</h4></div>
        <div className=' relative h-55 w-[80%] sm:w-[40%] md:w-[40%]  lg:w-[25%] bg-cover p-20 rounded-lg bg-blue-700' >
          <h4 className='  px-3 absolute bottom-1 font-bold text-white'>Big Slot</h4></div>
        <div className=' relative h-55 w-[80%] sm:w-[40%] md:w-[40%] lg:w-[25%] bg-cover p-20 rounded-lg bg-green-700' >
          <h4 className='  px-4 absolute bottom-1 font-bold text-white'>Roullete</h4></div>
        {/* </div> */}
        {/* <div className='w-full flex justify-evenly'> */}
        <div className=' relative h-55 w-[80%] sm:w-[40%] md:w-[40%] lg:w-[25%] bg-cover p-20 rounded-lg bg-blue-700' >
          <h4 className=' px-9 absolute bottom-1 font-bold text-white'>Aviator</h4></div>
        <div className=' relative h-55 w-[80%] sm:w-[40%] md:w-[40%] lg:w-[25%] bg-cover p-20 rounded-lg  bg-green-700'>
          <h4 className='  px-6 absolute bottom-1 font-bold text-white'>Slot2</h4></div>
        <div className=' relative h-55 w-[80%] sm:w-[40%] md:w-[40%] lg:w-[25%] bg-cover p-20 rounded-lg bg-red-700' >
          <h4 className=' px-8 absolute bottom-1 font-bold text-white'>Slot</h4></div>

        {/* ?? */}
      </div>

      <div className='flex gap-10 flex-col justify-center lg:p-20 md:flex-row lg:flex-row sm:flex-row bg-white my-4 p-4'>
        <div className="lg:w-[20%] w-full bg-white rounded-lg space-y-5 border-4 items-center justify-center border-grey">
          <table className='text-center w-full'>
            <thead>
              <tr>
                <th className='flex justify-center space-x-1 border-b-2 border-grey'><FcSportsMode className="size-8" />Sports Game</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=' p-3 flex items-center justify-center space-x-1 border-b-2 border-grey font-bold'><BiSolidCricketBall className="text-red-700 size-5" /><h3>Cricket</h3></td>
              </tr>
              <tr>
                <td className='p-3 flex items-center justify-center space-x-1 border-b-2 border-grey font-bold'><IoFootball className="size-5" /><h3>Football</h3></td>
              </tr>
              <tr>
                <td className='p-3 flex items-center justify-center space-x-1 border-b-2 border-grey font-bold'><BiSolidTennisBall className="text-yellow-500 size-5" /><h3>Tennis</h3></td>
              </tr>

              <tr>
                <td className='p-3'></td>
              </tr>

              <tr>
                <td className='p-3'></td>
              </tr>

              <tr>
                <td className='p-3'></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=' lg:w-[60%] bg-white rounded-lg space-y-5 border-4 border-grey py-4 md:overflow-x-scroll'>
          <div className='flex justify-center items-center'>
            <BiSolidCricketBall className="text-red-700" /><h3 className="font-bold">Cricket</h3>
          </div>

          <table className="lg:w-full w-full text-center overflow-x-auto">
            <thead>
              <tr className="border border-black">
                <th className='sm:p-2'></th>
                <th className='sm:p-2'>1</th>
                <th className='sm:p-2'>X</th>
                <th className='sm:p-2'>2</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className='sm:p-3 font-bold'>Indian Premier League</td>
                <td className='sm:p-3 '>
                  <div className='flex justify-center items-center'>
                    <button className='bg-green-500 px-[14px] mr-0'>0</button>
                    <button className='bg-pink-400 px-[14px] ml-0'>0</button>
                  </div>
                </td>
                <td className='sm:p-3'>
                  <div className='flex justify-center items-center'>
                    <button className='bg-green-500 px-[14px] mr-0'>0</button>
                    <button className='bg-pink-400 px-[14px] ml-0'>0</button>
                  </div>
                </td>
                <td className='sm:p-3'>
                  <div className='flex justify-center items-center'>
                    <button className='bg-green-500 px-[14px] mr-0'>0</button>
                    <button className='bg-pink-400 px-[14px] ml-0'>0</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className='sm:p-3 font-bold'>T20 World Cup</td>
                <td className='sm:p-3 '>
                  <div className='flex justify-center items-center'>
                    <button className='bg-green-500 px-[14px] mr-0'>0</button>
                    <button className='bg-pink-400 px-[14px] ml-0'>0</button>
                  </div>
                </td>
                <td className='sm:p-3'>
                  <div className='flex justify-center items-center'>
                    <button className='bg-green-500 px-[14px] mr-0'>0</button>
                    <button className='bg-pink-400 px-[14px] ml-0'>0</button>
                  </div>
                </td>
                <td className='sm:p-3'>
                  <div className='flex justify-center items-center'>
                    <button className='bg-green-500 px-[14px] mr-0'>0</button>
                    <button className='bg-pink-400 px-[14px] ml-0'>0</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className='sm:p-3 font-bold'>England vs Australia Women's</td>
                <td className='sm:p-3'>
                  <div className='flex justify-center items-center'>
                    <button className='bg-green-500 px-[14px] mr-0'>0</button>
                    <button className='bg-pink-400 px-[14px] ml-0'>0</button>
                  </div>
                </td>
                <td className='sm:p-3'>
                  <div className='flex justify-center items-center'>
                    <button className='bg-green-500 px-[14px] mr-0'>0</button>
                    <button className='bg-pink-400 px-[14px] ml-0'>0</button>
                  </div>
                </td>
                <td className='sm:p-3'>
                  <div className='flex justify-center items-center'>
                    <button className='bg-green-500 px-[14px] mr-0'>0</button>
                    <button className='bg-pink-400 px-[14px] ml-0'>0</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>


        </div>
      </div>

      <div className='footer flex justify-between bg-blue-800 px-8 py-4 border-2 text-white pb-0'>
        <div className='mx-4'>
          <h3>Help Us</h3>
          <h3>Wallet</h3>
          <h3>Deposite</h3>
        </div>

        <div className='my-9'>
          <h3></h3>
          <h3>Contact Us</h3>
          <h3>Withdrawls</h3>
        </div>

      </div>
      <hr className='border-0' />

      <div className='footer2 w-full flex flex-col bg-blue-800 px-8 py-4'>

        <div className="flex justify-center space-x-2"><PiInstagramLogoFill className="text-white w-7 h-7" />
          <FaFacebook className="text-white w-7 h-7" />
        </div>
        <h2 className='text-center font-mono text-white'>All Rights reserved to Brand Name </h2>
      </div>
    </div>




  )
}

export default App;
