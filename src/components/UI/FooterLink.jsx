import React from 'react'
import { NavLink } from 'react-router-dom'

export default function FooterLink({to, children}) {
  return (
    <NavLink to={to} className="font-bold text-xs md:text-xl">
    <i className="fa-solid fa-arrow-right-from-bracket"></i>
    {children}</NavLink>
  )
}
