import Student from "../src/Components/Student/Student.jsx";
import React from "react";

class Mainbody extends React.Component
{
  render(){
  const whatWeWillLearn= "React JS with .Net Core web API";
  const totalLectureCount=3;
  return(
  
  <div style={{minHeight:"70vh"}}>
     
  <p> In this course, we will learn <b> {whatWeWillLearn} </b> by building TaskOpedia</p>
  <p>Toal lectures - {totalLectureCount}</p>
  <ul>
    <li> Basic Foundation</li>
    <li> Functional and Class components</li>
  </ul>
  {/* <div> Enter Task: <input maxLength={8}  placeholder='Prashant'></input></div> */}

  <div className='row'>
        Student Enrolled
      </div>
  <Student experience={2} name="Prashant Devkate" headshot="https://api.lorem.space/image/face?w=150&h=153" />
  <Student experience={5} name="XYZ Devkate" headshot="https://api.lorem.space/image/face?w=150&h=151"/>
  <Student experience={7} name="ABC Devkate" headshot="https://api.lorem.space/image/face?w=150&h=152" />
  
  </div>
  );
  }
}

export default Mainbody;