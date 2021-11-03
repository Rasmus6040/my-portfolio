import React from 'react'
import Navbar from '../../components/Navbar'
import Contact from '../../components/Contact'
import MyCV from './MyCV'


function CV({language}) {
    return (
        <>
        <MyCV language={language}/>
      </>
    )
}

export default CV
