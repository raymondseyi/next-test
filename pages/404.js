import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const PageNot = () => {
  const router = useRouter()
  return (
    <>
    <div>You don miss way ba, not to worry, i will take you home</div>
    <Link href="/">Go home</Link>
    <h1>You can as well use this <button onClick={()=>router.push('/')}>Go Home</button></h1>
    </>
  )
}

export default PageNot