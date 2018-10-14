import React from 'react'
import { Link } from 'gatsby'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'

const Header = ({ siteTitle }) => (
  <div className="header">
    <AppBar color="secondary">
      <Toolbar>
        <Typography variant="h6" color="inherit">Lenyes</Typography>
        <Button color="inherit">HOME</Button>
        <Button color="inherit">ABOUT</Button>
        <Button color="inherit">WORKS</Button>
        <Button color="inherit">ORIGINAL MUSIC</Button>
        <Button color="inherit">ARRANGE MUSIC</Button>
        <Button color="inherit">LINK</Button>
      </Toolbar>
    </AppBar>
  </div>
)

export default Header
