import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'
const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const themeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const backColor = isDarkTheme ? 'white' : 'black'
      const className = isDarkTheme ? 'black-class' : 'white-class'
      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeBgm = () => {
        toggleTheme()
      }
      return (
        <div className={`background ${backColor}`}>
          <div className="contain">
            <img src={websiteLogo} alt="website logo" className="image-2" />
            <ul className="row">
              <li className="list">
                <Link to="/" className={`link ${className}`}>
                  Home
                </Link>
              </li>
              <li className="list">
                <Link to="/about" className={`link ${className}`}>
                  About
                </Link>
              </li>
            </ul>
            <button className="button-container" data-testid="theme" onClick={themeBgm}>
              <img src={themeImg} alt="theme" className="theme-img" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
