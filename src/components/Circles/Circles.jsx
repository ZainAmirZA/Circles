import './Circles.css'
import { Component } from "react";
import { render } from "react-dom";

export default function Circles(props) {
  return (
  <div className='Circles'>
    <div className={props.selectedCircle1  ? 'selected' : ''}> 1 </div>
    <div className={props.selectedCircle2  ? 'selected' : ''}> 2 </div>
    <div className={props.selectedCircle3  ? 'selected' : ''}> 3 </div>
    <div className={props.selectedCircle4  ? 'selected' : ''}> 4 </div>
  </div>

  )

}