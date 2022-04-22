import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'


class NavBar extends React.Component {
  render() {
    return (
      <AppBar position="static" style={{ alignItems: 'center', backgroundColor: 'orangered'}}>
          <Toolbar>
            <Button variant="contained" style={{ marginLeft: '10px', marginRight: '10px'}}>
              <Link to='/' >About Me</Link>
            </Button>
            <Button variant="contained" style={{ marginLeft: '10px', marginRight: '10px'}}>
              <Link to='/hobbies' >Hobbies</Link>
            </Button>
          </Toolbar>
      </AppBar>
    )
  }
}

export default NavBar