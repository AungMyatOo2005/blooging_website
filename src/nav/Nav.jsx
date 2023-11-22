import React from 'react'
import styles from '../styles'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <nav className={`py-2 px-6 ${styles.flexCenter} justify-between`}>
      <h1 className='text-white font-semibold text-[18px] sm:text-[26px] md:text-[32px] font-Poppins'>Assignment six</h1>
      <ul className='text-white items-center gap-6 md:text-[16px] md:flex hidden font-Poppins'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/feature"}>Feature Posts</NavLink>
        <NavLink to={"allPost"}>All Posts</NavLink>
      </ul>
    </nav>
  )
}

export default Nav
