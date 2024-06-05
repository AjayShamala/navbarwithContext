import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'
const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const back = isDarkTheme ? 'dark' : 'light'
      const aboutImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutName = isDarkTheme ? 'about name' : 'about d'
      return (
        <div>
          <Navbar />
          <div className={`containers ${back}`}>
            <img src={aboutImage} alt="about" className="image" />
            <h1 className={`header ${aboutName}`}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
