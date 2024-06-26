import React , {useEffect, useState} from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';

import TaskListA from '../companyA/TaskListA'
import UserDashboardHeader from './UserDashboardHeader';

// clerk
import { useUser } from '@clerk/clerk-react';
import TaskListA2 from '../companyA/TaskListA2';
import TaskList from '../videoCollection/TaskList';

import ImageTaskList from '../imageCollection/TaskList'
import TaskListPotHoles from '../potHolesImgAnnotation/TaskList';



const UserDashboard = () => {

  const { user } = useUser();
   
   const [email , setEmail] = useState(user.primaryEmailAddress.emailAddress)

   const [userData , setUserData] = useState()
   


  //  const [refreshState , setRefereshState] = useState(true)
  //  const [moneyEarned , setMoneyEarned] = useState()

 

  useEffect(() => {
     
   const fetchData = async () => {

      
      console.log(user.primaryEmailAddress.emailAddress)

      setEmail(user.primaryEmailAddress.emailAddress)

      const userEmail = user.primaryEmailAddress.emailAddress

     await axios.post('https://intellicrowd-main-backend.onrender.com/api/me', { email : userEmail }) // Send a POST request with email in the body
     .then(response => {
      const user = response.data; // Access the user data from the response
      setUserData(user)
    //  const money = user.tasks[0].earnedMoney // Access the tasks array from the user object

       console.log(user)

      // console.log(tasks);
      // setMoneyEarned(money)

       

      // Do something with the tasks data, e.g., display it in your UI
    })
    .catch(error => {
      console.error(error);
      // Handle errors gracefully, e.g., display an error message to the user
    });
      
    };

    // fetchData()

  }, [])

  useEffect(() => {
    // Delay the execution of useEffect by 2 seconds (adjust as needed)
    const delay = setTimeout(() => {
      fetchData();
    }, 2000);
  
    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(delay);
  }, []); // Run useEffect only once on component mount


  const fetchData = async () => {

      
    console.log(user.primaryEmailAddress.emailAddress)

    setEmail(user.primaryEmailAddress.emailAddress)

    const userEmail = user.primaryEmailAddress.emailAddress

   await axios.post('https://intellicrowd-main-backend.onrender.com/api/me', { email : userEmail }) // Send a POST request with email in the body
   .then(response => {
    const user = response.data; // Access the user data from the response
    setUserData(user)
  //  const money = user.tasks[0].earnedMoney // Access the tasks array from the user object

     console.log(user)

    // console.log(tasks);
    // setMoneyEarned(money)

     

    // Do something with the tasks data, e.g., display it in your UI
  })
  .catch(error => {
    console.error(error);
    // Handle errors gracefully, e.g., display an error message to the user
  });
    
  };
  
  

  
  return (

    <>  
     <UserDashboardHeader email={email} userData={userData}></UserDashboardHeader>

     <div className='flex items-center justify-center w-[100vw] mt-12'>
        {/* task list div */}
        <div className=' lg:w-[45vw] md:w-[80vw] w-[90vw] mb-12'>
        {/* <p>{userEmail}</p> */}
            {/*  map of all tasks ( for this testing there will be only one ) */}

             {/* image data collection task */}
             <ImageTaskList email={email}></ImageTaskList>

             <TaskListA email={email}></TaskListA>
             {/* <TaskListA2 email={email}></TaskListA2> */}
             {/* video data collection task */}
             <TaskList email={email}></TaskList>

            

              {/* image annotation task ( pot holes mark) */}
              <TaskListPotHoles email={email}></TaskListPotHoles>
             
            
        </div>
    </div>

    </>
   
  )
}

export default UserDashboard

// components
// 1) 