import React from 'react'
import { AppBar, Toolbar, Typography } from "@mui/material";
const Header = ({head}) => {
  return (
    <AppBar className='text' position="static">
        <Toolbar >
          <Typography >{head}</Typography>
        </Toolbar>
      </AppBar>
  )
}

export default Header