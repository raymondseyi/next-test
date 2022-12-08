import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'

const PostDetails = (props) => {
    const router = useRouter()
    if(router.isFallback){
        return <div>loading...</div>
    }
    return (
        <>
        {/* PostDetails {router.query.id} */}
        <div>{props.postDetail.title}</div>
        <div>{props.postDetail.body}</div>
        </>
    )
}

export default PostDetails;

export async function getStaticPaths(){
    let res = await axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>response.data)
    let allPaths = res.map((items)=>{
        return {params:{id:`${items.id}`}}
    })
    // return {
    //     paths:allPaths,
    //     fallback:false
    // }
    return{
        paths:[
            {params:{id:"1"}}
        ],
        fallback:true
    }
}

export const getStaticProps = async(context)=>{
    let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`).then((response)=>response.data)
    if(!res.id){
        return {
            notFound : true
        }
    }
    return {
        props:{postDetail:res}
    }
}