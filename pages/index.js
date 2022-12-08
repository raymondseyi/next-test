import React from 'react'

import styles from '../styles/Home.module.css'
import Footer from '../components/footer'

const Index = () => {
  return (
    <>Index

    <h1 className={styles.fish}>Kahamsahamida</h1>
    <h1 className='bg-danger'>Palamu Palamu</h1>
    <img src="/fish.jpg" alt="" />
    </>
  )
}

export default Index

Index.getLayout = (page)=>{
  return (
  <>
    {page}
    <Footer/>
  </>
  )
}