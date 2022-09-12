import React, {useState} from 'react'

/*
    
 */

export default function DemoChonXe() {
    const [img,setImg] = useState('./img/red-car.jpg');
    const changeImg = (color) =>{
        setImg(`./img/${color}-car.jpg`);
    }

  return (
    <div>
        <h3>Demo chọn xe</h3>
        <div className='row'>
            <div className='col-6'>
                <img src={img} alt="" className='w-100' />
            </div>
            <div className='col-6'>
                <button className='btn mx-2' style={{background:'red',color:'#fff'}} onClick={()=>{
                    changeImg('red');
                }}>Red </button>
                <button className='btn mx-2' style={{background:'silver',color:'#fff'}} onClick={()=>{
                    changeImg('silver');
                }}>Silver </button>
                <button className='btn mx-2' style={{background:'black',color:'#fff'}} onClick={()=>{
                    changeImg('black');
                }}>Black </button>
                <button className='btn mx-2' style={{background:'#EEE',color:'#fff'}} onClick={()=>{
                    changeImg('steel');
                }}>Steel </button>
            </div>
        </div>
    </div>
  )
}
