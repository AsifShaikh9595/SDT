import React, { Component } from 'react'

 class Colors extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         myColors:[
            {id:101,name:"Asif"},
            {id:102,name:"Adnan"},
            {id:103,name:"Arbaaz"},
            {id:104,name:"Umer"},
            {id:105,name:"Rushi"}
         ]
      }
    }
  render() {
    const{myColors}=this.state;
    return (
      <div>
        <ul>
       { //using short circuit
            myColors.length>0 && myColors.map((data,index)=> {
                //It give error in console so we added that KEY attribute in <li> tag
               // return <li key={data.id}>{data.name}</li>
                return <li key={index}>{data.name}</li>
            })
        }
        </ul>
      </div>
    )
  }
}

export default Colors