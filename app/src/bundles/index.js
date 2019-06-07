import { composeBundles } from 'redux-bundler'
import routes from './routes'
import primes from './primes'

export default composeBundles(routes, primes)
