import React from 'react'
import Offerslider from './offerslider'
import Mainslider from './Mainslider'
import Newdrops from './Newdrops'
import Parallax from './Parallax'
import Seasonfavs from './Seasonfavs'
import Categories1 from './Categories1'
import Offerbanner from './Offerbanner'
import Categories2 from './Categories2'
import Categories3 from './Categories3'
import Lastslider from './Lastslider'
import Footer from './Footer'
import Menu from './Menu'

function Homepage() {
  return (
    <>
        <Offerslider></Offerslider>
        <Menu></Menu>
        <Mainslider></Mainslider>
        <Newdrops></Newdrops>
        <Parallax></Parallax>
        <Seasonfavs></Seasonfavs>
        <Categories1></Categories1>
        <Offerbanner></Offerbanner>
        <Categories2></Categories2>
        <Categories3></Categories3>
        <Lastslider></Lastslider>
        <Footer></Footer>
    </>
  )
}

export default Homepage