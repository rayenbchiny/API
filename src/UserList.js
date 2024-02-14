import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserList() {
  const [data, setdata] = useState()


useEffect(() => {
  console.log('object')
 axios.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
 
    console.log(response.data);
    setdata(response.data)
  }
 ).catch( function (error) {
    // handle error
    console.log(error);
  }
 )


}, [])

console.log(data)
  return (
  <div>
      <table>
       <thead>
         <tr>
             <th>NAME</th>
             <th>USERNAME</th>
             <th>E-MAIL</th>
             <th>CITY</th>
             <th>PHONE</th>
         </tr>
         <br></br>

       </thead>
        <tbody>
                {data&&data.map((el)=><tr>
            <th>{el.name}</th>
            <th>{el.username}</th>
            <th>{el.email}</th>
            <th>{el.address.city}</th>
            <th>{el.phone}</th>
          </tr>)}
        </tbody>

      </table>
      
    </div>
  )
}

export default UserList
