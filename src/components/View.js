import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const View = () => {
    var [courselist,setCourse]=useState([])
    axios.get("https://mylinkurcodesapp.herokuapp.com/getcourses").then(
        (response)=>{
        console.log(response.data)
        setCourse(response.data)
        }
    )

  return (
    <div>
    <Navbar/>
    <div className="container">
    <div className="row">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    <table class="table table-primary table-striped">
<thead>
<tr>
  <th scope="col">#</th>
  <th scope="col">COURSE TITLE</th>
  <th scope="col">COURSE DURATION</th>
  <th scope="col">COURSE DESCRIPTION</th>
  <th scope="col">COURSE VENUE</th>
  <th scope="col">COURSE DATE</th>
</tr>
</thead>
<tbody>
    
        {courselist.map((value,key)=>{
return <tr>
  <th scope="row">1</th>
  <td>{value.courseTitle}</td>
  <td>{value.courseDescription}</td>
  <td>{value.courseDescription}</td>
  <td>{value.courseVenue}</td>
  <td>{value.courseDate}</td>

</tr>

        })}

          </tbody>
</table>

    </div>
    </div>
    </div>
    </div>
  )
}

export default View