import Link from 'next/link'
import React from 'react'
import './Menu.css'

export default function Menu() {
    const MenuItem=[
        {text:"Home",
         path:"/home"
        },
        {text:"About",
            path:"/about"
           },
           {text:"Contact",
            path:"/contact"
           }
    ]
  return (
    <div className='menu'>
        {
            MenuItem.map(({text,path},ind)=>{
                return(
                    <Link key={'key'+ind} href={path}>{ text}</Link>
                )
            })
        }
    
    </div>

  )
}
