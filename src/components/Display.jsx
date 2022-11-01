import React from 'react'
import { StyledBox } from './StyledBox';
const Display = (props) => {
  const list = props.list;
  return (
    <div className='d-flex gap-3 justify-content-center mt-3'>
        
        {
            list.map((box, i) =>
                <StyledBox key={i} bgColor = {box.color} size = {box.size}/>)
        }
    </div>
  );
}

export default Display

