//rfcredux

import React from 'react'
import { connect,useSelector,useDispatch } from 'react-redux'
import { changeNumber } from '../../../../redux/numberReducer';

export default function DemoNumber(props){
  const number = useSelector(state => state.number);
  // const {number} = useSelector(state => state)
  const dispatch = useDispatch();
  return (
    <div className='container'>
      <h3>Number: {number}</h3>
      <button className='btn btn-success' onClick={()=>{
        //tự tạo action để dispatch reducerslice
        // const action = {
        //   type:'numberReducer/changeNumber',
        //   payload: number + 1,
        // }
        const action = changeNumber(number+1);
        dispatch(action);
      }}>+</button>
    </div>
  )
}

