import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    counter:0,
}

const Slice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        add:(state,action)=>{
state.counter= ++state.counter
        },

        del:(state,action)=>{
            state.counter= --state.counter
                    }

    }
})

const {actions,reducer}=Slice

export const {add,del} = actions

export default reducer