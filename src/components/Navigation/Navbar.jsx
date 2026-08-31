import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div>
                <h1>Fit Tipper</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/exercises">Exercises</Link>
                    <Link to="/workout-planner">Workout Planner</Link>
                    <Link to="/history">History</Link>
                    <Link to="/progress">Progress</Link>
                </nav>
            </div>
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