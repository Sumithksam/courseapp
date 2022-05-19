import React from 'react'
import Navbar from './Navbar'

const View = () => {
    var courselist=[{"_id":"6285a2a31887dc001619415c","courseTitle":"Python Django Internship","courseDescription":"Internship programme","courseDuration":"3 months","courseVenue":"ONLINE","courseDate":"02/01/2023"},{"_id":"6285a2c21887dc001619415d","courseTitle":"MERN Stack","courseDescription":"Internship programme","courseDuration":"6 months","courseVenue":"ONLINE","courseDate":"02/06/2022"}]
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