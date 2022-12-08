import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Users = (props) => {
    
    // const [users, setusers] = useState([])
    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //     .then((res)=>{
    //             console.log(res)
    //             setusers(res.data)
    //             console.log(res.data)
    //     })
    // }, [])
  return (
    <div>
        Users
        {props.users.map((item,index)=>(
            <div key={item.id}>
                 <div>{item.name}</div>
            </div>
           
        ))}
    </div>
  )
}
export default Users

export const getStaticProps = async ()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>res.data)
    return {
        props:{
            users:response
        }
    }
}