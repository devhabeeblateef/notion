import React from 'react';
import classes from './CSS/App.module.css';
import './App.css';

function Data({date, imageURL, title, desc}) {
  return (
    <div className={classes.data}>
        <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={imageURL} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
       {desc}</p>
        <p className="card-text"><small className="text-muted">
        Created on {date}</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Data