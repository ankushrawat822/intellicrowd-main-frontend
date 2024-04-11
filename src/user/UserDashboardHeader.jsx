import { UserButton } from '@clerk/clerk-react'
import React , {useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './userDashboardComponents/Sidebar'
import axios from 'axios'
import RENDER_API_URL from '../_helpers'

const UserDashboardHeader = ({email , userData}) => {

   // console.log(userData.tasks[0].earnedMoney)


   const [earnedMoney , setEarnedMoney] = useState()



   useEffect(() => {

      try {
         axios.post(`${RENDER_API_URL}/api/me`, { email }) // Send a POST request with email in the body
           .then(response => {
             const user = response.data; // Access the user data from the response
             console.log(user.tasks[0].earnedMoney); // Logs the user data to the console
             setEarnedMoney(user.tasks[0].earnedMoney)

           })
 
          
      
 
       } catch (error) {
         console.error(error);
       }
    
   }, [])
   
 

  return (
     <>


<div className='bg-red-500 py-2 flex items-center justify-between px-6 text-white'>
           
            <div className='flex items-center justify-center gap-4'> 

               <div> <Sidebar earnedMoney={earnedMoney}></Sidebar></div> 
                  
               <p className='text-[16px]  font-bold'>IntelliCrowd</p>
            </div>
            
             <div className="flex items-center justify-center gap-11">
             {
               email?
                  <p>{email}</p>
              :    
                <Link to="/">go back</Link>
             }
             
             <p className='cursor-pointer' >Refresh</p>
             <p>Total Earning : <b> {earnedMoney} Rs</b> </p>

             <UserButton />

             </div>
            
        </div>

     </>
  )
}

export default UserDashboardHeader