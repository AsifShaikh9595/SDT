import React, { Component } from 'react'

 class ConditionalRendering extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLogin:true
      }
    }
  render() {
    
      let msg;
        // <h1>This is ConditionalRendering</h1>
        //1.>>>>>If else
        //2.>>>>>elment as avariable
        // if(this.state.isLogin){
        //        // return <h2> Admin Log inned</h2>
        //        msg="Admin log in";
        // }else{
        //     //return <h2> User Log inned</h2>
        //     msg="User log in";
        // }
        // return msg;

        //3.>>>>Ternary operator
        //return(!this.state.isLogin?"Admin Log":"User log");

        //4.short circuit
        return this.state.isLogin && "Admin";      
    
  }
}

export default ConditionalRendering