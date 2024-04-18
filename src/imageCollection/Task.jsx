import React from 'react'
import { Link } from 'react-router-dom'
import "./image-task.css"

import { ImFileVideo } from "react-icons/im";

const Task = () => {
  return (
    <>

      <div className='mx-4'>

        {/* starts */}

        {/* top page nav starts */}
        <div className=' my-3 py-2 bg-red-500 rounded-[8px] flex items-center justify-between px-3'>
          {/* title of task */}
          <p className='text-white font-semibold text-[20px]'> Upload image </p>

          {/*  current task time , overall time , exit , money , total hits done */}
          <div className='flex items-center justify-center gap-x-5 text-[white]'>
            {/* testing , to be deleted */}
            <p className='font-bold '></p>
            {/* <p>10:00</p> */}
            <p>Guidelines</p>
            <Link to="/user-dashboard"><button>Exit</button></Link>
          </div>
        </div>
        {/* top page nav ends */}

        {/* main div */}
        <div className='flex items-start justify-center gap-5 '>
          {/* instructons section */}
          <div className='grey-bg rounded-[8px] w-[50%] p-3'>
            <p className='font-semibold text-red-700'>Goal</p>
            <p>The client provides 3D-authentication security check tools for companies to prevent fraud in the Internet.

              For the improvement of these applications training data is needed.
              </p>


              <p className='font-semibold text-red-700 mt-3'>Your Task</p>
            {/* <p>In order to train the AI tool, you will be asked to simulate the authentication process by providing videos of yourself. Your data will only be used for training purposes. They will not be published or used otherwise.
              </p> */}
              <p className='mt-2'>
                 <ul>
                  <li>1. Use your web cam</li>
                  <li>2. Make sure your face is clearly visible</li>
                  <li>3. Look staright then slowly tilt your face to left</li>
                  <li>4. Look staright then slowly tilt your face to right</li>

                 </ul>
              </p>

              <p className='font-semibold text-red-700 mt-4'>Note</p>
            <p>By accepting this task you are giving the customer the right to save and use the made photos/videos that include your personal data to train AI.
              </p>


              <p className='font-semibold text-red-700 mt-4'>Data Usage</p>
            <p> personal data collected : <b>Yes</b>
              </p>
              <p> Will data be published : <b>No</b>
              </p>
              <p> Field of use : <b>Training of AI</b>
              </p>

          </div>
          {/* upload section */}
          <div className='grey-bg rounded-[8px] w-[50%] p-3 flex flex-col justify-center items-center '>
            <p>Upload your video here</p>
              <div className=''>
              <label for="file-upload" className='mt-10  h-[400px] w-[400px] border-dashed border-red-200 px-5 text-center border-3 flex flex-col items-center justify-center rounded-[20px]'>
              <ImFileVideo className='text-[35px] my-3 text-red-300' />
                 <p>Drag/drop or simple click here to upload your video</p>
              </label>
                <input id='file-upload' className='hidden' type="file" />
              </div>

              <button
                  type="button"
                  className="mt-5 text-[21px] inline-flex items-center rounded-md bg-red-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >

                   Submit
                </button>
          </div>

        </div>


      </div>


    </>
  )
}

export default Task