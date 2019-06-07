import { createRouteBundle } from 'redux-bundler'

import Start from '../pages/Start.html'
import About from '../pages/About.html'
import Demo from '../pages/Demo.html'

export default createRouteBundle({
  '/': Start,
  '/demo': Demo,
  '/about': About
})
