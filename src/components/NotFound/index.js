import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'
const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const darkTheme = isDarkTheme ? 'darks' : 'lightss'
      const backGroundColor = isDarkTheme ? 'whi' : 'bla'
      return (
        <div>
          <Navbar />
          <div className={`${backGroundColor}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="theme"
              className="img"
            />
            <h1 className={`${darkTheme}`}>Lost your Way?</h1>
            <p className={`${darkTheme}`}>
              We cannot Seem to find the page you are looking for{' '}
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
