import './CircleSelector.css'
import { Component } from "react";
import { render } from "react-dom";

export default function CircleSelector(props) {
  return (
  <div className='CircleSelector'>
    
    <button 
    onClick={() => {
          props.Select1("user");
        }} 
        className={props.selectedCircle1  ? 'selected' : ''}
        > Select Circle 1</button>
    
    <button 
    onClick={() => {
      props.Select2("user");
    }} 
    className={props.selectedCircle2  ? 'selected' : ''} > Select Circle 2</button>
    
    <button 
    onClick={() => {
      props.Select3("user");
    }}
    className={props.selectedCircle3  ? 'selected' : ''}> Select Circle 3 </button>
    
    <button 
    onClick={() => {
      props.Select4("user");
    }}
    className={props.selectedCircle4  ? 'selected' : ''}> Select Circle 4</button>
  </div>

  )

}