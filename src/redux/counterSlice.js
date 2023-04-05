/* eslint-disable */
import { createSlice , createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  loading: false,
  todos: []
};

const fetchTodoAsync = createAsyncThunk("fetchTodo", async ()=>{
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json()
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    fetchTodo: createAsyncThunk("fetchTodo", async ()=>{
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      return response.json()
    }),
  },
  extraReducers:(builder) => {
    builder.addCase(fetchTodo.pending, (state)=>{
      return { ...state, loading: true }
    })
    builder.addCase(fetchTodo.fulfilled,(state,action)=>{
      return { ...state, loading: false, todos: action.payload}
    })
    builder.addCase(fetchTodo.rejected,(state)=>{
      return { ...state, loading: false}
    })
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, fetchTodo } = counterSlice.actions;

export default counterSlice.reducer;
