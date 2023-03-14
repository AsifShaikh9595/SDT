import React from "react";

// function MyfcComponent(){
//     return <h3>This is my functional component</h3>
// }
const MyfcComponent = (props) =>{
        //destructuring
        const {name,prn}=props;


    return <div>
        <h3>This is my functional component using arrow function</h3>
        <p> I AM <strong>{props.name}</strong> GOOD <strong>{props.prn} </strong></p>
        {/* destructuring */}
        <p> I AM <strong>{name}</strong> GOOD <strong>{prn} </strong></p>
            </div>
}
 export default MyfcComponent;