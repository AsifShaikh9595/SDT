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
/*
package main

import(
    "bufio"
    "os"
    "strings"
    "strconv"
    "fmt"
)

func main(){
 reader:=bufio.NewReader(os.Stdin)
 iterations,_:=reader.ReadString('\n')
 iterations=strings.TrimSpace(iterations)
 iterationsInt,_:=strconv.ParseInt(iterations,10,64)

 for i:=0; i < int(iterationsInt) ; i++ {
 
 dimensions,_:=reader.ReadString('\n')
 dimensions=strings.TrimSpace(dimensions)
 dimensionsNew:=strings.Fields(dimensions)

 row,_:=strconv.ParseInt(dimensionsNew[0],10,64)
//  column,_:=strconv.ParseInt(dimensionsNew[1],10,64)
  
 var twoD [][]string


 for j:=0; j < int(row) ; j++ {
    dimensions1,_:=reader.ReadString('\n')
 dimensions1=strings.TrimSpace(dimensions1)
 dimensions1New:=strings.Fields(dimensions1)

 twoD[j]=dimensions1New

 }
  fmt.Println(twoD)




 }



}
*/
export default Parent
