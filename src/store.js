import { configureStore } from '@reduxjs/toolkit'

import pageCount from './component/pageCount'

export default configureStore({
    
  reducer: {
    pageCount:pageCount
  }
})