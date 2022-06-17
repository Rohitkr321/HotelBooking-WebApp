import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import SearchItem from "../../components/searchItem/SearchItem"

import "./list.css"

function List() {
  return (
    <div>
      <Navbar/>
      <Header type="list" />
    </div>
  )
}

export default List