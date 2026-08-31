import { Link, useLocation } from 'react-router-dom'
import { AppBar, Box, Container, IconButton, Toolbar, Typography, Menu, MenuItem } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'


function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


    return (
        <>
            <AppBar position='fixed'>
              <Container maxWidth="xl">
                {/* <AdbIcon /> */}
                <Toolbar>
                  <Typography
                    variant='h6'
                    noWrap
                    component="a"
                    sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      fontWeight: 700,
                      textDecoration: 'none'
                    }}
                  >Fit Tipper</Typography>

                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'}}}>
                    <IconButton
                      size='large'
                      onClick={handleOpenNavMenu}
                      color='inherit'
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left'
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{ display: { xs: 'block', md: 'none' }}}
                    >
                      <MenuItem key={'home'} onClick={handleCloseNavMenu}>
                        <Typography sx={{ textAlign: 'center'}}>Home</Typography>
                      </MenuItem>
                      <MenuItem key={'exercises'} onClick={handleCloseNavMenu}>
                        <Typography sx={{ textAlign: 'center'}}>Exercises</Typography>
                      </MenuItem>
                      <MenuItem key={'workout-planner'} onClick={handleCloseNavMenu}>
                        <Typography sx={{ textAlign: 'center'}}>Workout Planner</Typography>
                      </MenuItem>
                      <MenuItem key={'history'} onClick={handleCloseNavMenu}>
                        <Typography sx={{ textAlign: 'center'}}>History</Typography>
                      </MenuItem>
                      <MenuItem key={'progress'} onClick={handleCloseNavMenu}>
                        <Typography sx={{ textAlign: 'center'}}>Progress</Typography>
                      </MenuItem>
                    </Menu>
                  </Box>
                  <nav>
                      <Link to="/">Home</Link>
                      <Link to="/exercises">Exercises</Link>
                      <Link to="/workout-planner">Workout Planner</Link>
                      <Link to="/history">History</Link>
                      <Link to="/progress">Progress</Link>
                  </nav>
                </Toolbar>
              </Container>
            </AppBar>
        </>
    )
}

export default Navbar

{/**
    <nav className={styles.navbar}>

      <Link 

        to="/" 

        className={location.pathname === '/' ? styles.active : ''}

      >

        Home

      </Link>

      <Link 

        to="/exercises"

        className={location.pathname.includes('/exercises') ? styles.active : ''}

      >

        Exercises

      </Link>

      <Link 

        to="/workout-planner"

        className={location.pathname === '/workout-planner' ? styles.active : ''}

      >

        Workout Planner

      </Link>

      <Link 

        to="/history"

        className={location.pathname === '/history' ? styles.active : ''}

      >

        History

      </Link>

      <Link 

        to="/progress"

        className={location.pathname === '/progress' ? styles.active : ''}

      >

        Progress

      </Link>

    </nav>

    */}