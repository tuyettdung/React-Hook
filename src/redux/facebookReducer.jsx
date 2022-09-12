import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrComent: [
        {name:'Hậu mentor',content:'ahihi'},
        {name:'Quân mentor',content:'ahihi 2'}
    ]

}

const facebookReducer = createSlice({
  name: 'facebookReducer',
  initialState,
  reducers: {
    addComent:(state,action)=>{
        //Lấy dữ liệu về
        let userComent = action.payload;
        //Cập nhật
        state.arrComent.push(userComent);

    }
  }
});

export const {addComent} = facebookReducer.actions

export default facebookReducer.reducer