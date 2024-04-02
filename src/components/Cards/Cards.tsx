import React from 'react'
import './Cards.scss'

function Cards() {
  return (
    <>
      <h2>Responsive Column Cards</h2>
<p>Resize the browser window to see the effect.</p>

<div className="row">
  <div className="column">
    <div className="card">
      <h3>Card 1</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <h3>Card 2</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      <h3>Card 3</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      <h3>Card 4</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
</div>
</>
  )
}

export default Cards;






