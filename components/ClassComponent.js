import React, { Component } from "react";

class ClassComponent extends Component{

        render(){
            const {name,village}=this.props;
            return<div>
                 <h3>This is class component</h3>
                <p> These is the JSX from <strong>{this.props.name}</strong> class <strong >{this.props.village}</strong> component</p>
                <p> These is the JSX from <strong>{name}</strong> class <strong >{village}</strong> component</p>
                 </div>
        }
}

export default ClassComponent;