import  React from 'react';

const YStep = ({done=true, title, number, width}) =>{
  return <div className={done ? 'progress-item done' : 'progress-item'} style={{ width: width ? width + 'px' : ''}}>
      <div className="progress-title">{title}</div>
      <div className="progress-body">
          <h3>{number}</h3>
          <div className="progress-line"></div>
      </div>
    </div>
}

export default YStep;