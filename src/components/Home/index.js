import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'
const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backs = isDarkTheme ? 'dark' : 'light'
      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeName = isDarkTheme ? 'about name' : 'about d'
      return (
        <div>
          <Navbar />

          <div className={`containers ${backs}`}>
            <img src={homeImage} alt="home" className="image" />
            <h1 className={`header ${homeName}`}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
