"use client"
import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Newsboard from './Components/Newsboard';


const page = () => {

  const [category, setCategory] = useState("general")
  return (
    <div>
  <Navbar setCategory={setCategory}/>
  <Newsboard category={category}/>
    </div>
  )
}

export default page
