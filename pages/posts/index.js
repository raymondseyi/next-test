import React from 'react'
import axios from 'axios'
import Link from 'next/link'
const Posts = (props) => {
  return (
    <>
    Posts
    {props.posts.map((post,index)=>(
       
            <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
            <div className='card text-dark my-3'>
                <div className='card-body'>
                    <h4 className='card-title'>{post.title}</h4>
                    <p className='card-text'>{post.body}</p>
                </div>
                
            </div>
            </Link>
            </div>
    
    ))}
    </>
  )
}

export default Posts
export const getStaticProps = async ()=>{
    let res = await axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>response.data)

    return {
        props:{posts:res}
    }
}