import React,{Component} from "react";

class ClassComp2 extends Component{

    render(){
        const{name}=this.props;
        return  <div>
        <h3>Class Component 2 <strong>{name}</strong></h3>
        </div>
    }
}

export default ClassComp2;