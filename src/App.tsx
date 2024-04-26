import { Fragment } from 'react'

import './App.css'
import { Header } from './Components/Header'
import { Services } from './Components/Services'
import { Blog } from './Components/Blog'
import { Contact } from './Components/Contact'
import { Footer } from './Components/Footer'

export const App=() => {


  return (
   <Fragment>
   <Header/>
   <Services/>
   <Blog/>
   <Contact/>
   <Footer/>
   </Fragment>
  )
}

