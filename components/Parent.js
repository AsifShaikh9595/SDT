import React, { Component } from 'react'
import Child from './Child';

 class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:101,
         name:"Asif"
      }
    }

    counterIncrement = ()=>{
        this.setState((preState)=>({count:preState.count+1,name:"Asif"}))
     }

  render() {
    const{count,name}=this.state
    return (
      <div>
        <h3>This is parent component</h3>
        <p>Counter valuie is:<strong>{count}</strong></p>
        <button type="button" onClick={this.counterIncrement}> Increment count</button>
        <hr></hr>
        <Child count={count} name={name}/>
        </div>
    )
  }
}

export default Parent