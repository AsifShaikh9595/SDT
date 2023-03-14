import React from 'react'

const Child=(props)=> {
    //destructuring the props
    const{count,name}=props;
    console.log("Name is: "+name);
  return (
    <div>
        <h6>This is child component <strong>{count}</strong> <strong>{name}</strong></h6>
        
    </div>
  )
}

export default React.memo(Child);