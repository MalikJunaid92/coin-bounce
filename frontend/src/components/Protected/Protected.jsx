import React from 'react'
import { Navigate } from 'react-router-dom';

const Protected = ({isAuth,children}) => {
 if(isAuth){
    return{ children};
 }
 else{
    return <Navigate  to='/log-in'/>
 }
}

export default Protected
