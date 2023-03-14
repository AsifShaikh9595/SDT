import React, { Component } from 'react'

export class MyState extends Component {
//creating constructor
    constructor(){
        super();
        // creating property in constructor
        this.state={
            count:0
        }
        // setTimeout(()=>{
        //    // this.setState({count:this.state.count+1})
        //     this.setState((preState)=>({count:preState.count+1}))
        // },5000)
    }

    counterIncrement = ()=>{
       // window.alert("How are you Boys?")
       this.setState((preState)=>({count:preState.count+1}))
    }

    counterDecrement = ()=>{
        // window.alert("How are you Boys?")
        this.setState((preState)=>({count:preState.count-1}))
     }

     greeting=(name)=>{
        window.alert(`Welcome mr.${name}`);
     }

   render() {
    //destructuring state
    const {count}=this.state;
    return (       
      <div>MyState
        <h2>This is my state comnponent</h2>
        {/* Accessing the data from the state */}
        <p> Count value  is:<strong>{this.state.count}</strong></p>
         <p> Count value  is:<strong>{count}</strong></p>
         <button type="button" onClick={this.counterIncrement}> Increment count</button>
         <button type="button" onClick={this.counterDecrement }> Decrement count</button>
         <button type="button" onClick={()=>this.greeting("Asif")}>Greeting</button>

      </div>
    )
  }
}

export default MyState