import merge from 'ramda/src/merge'
import pathOr from 'ramda/src/pathOr'

export default {
  name: "primes",
  doFetchPrimes(threads) {
    return ({dispatch}) => {
      dispatch({type: 'PRIMES_FETCH_STARTED'})
      return fetch('/api/primes?w=' + threads)
        .then(r => {
          if (!r.statusCode === 200) { throw new Error('Server Error') }
          r.json()
        })
        .then(result => {
          dispatch({type: 'PRIMES_FETCH_SUCCESS', payload: result})
          return true
        })
        .catch(err => {
          dispatch({type: 'PRIMES_FETCH_ERROR', payload: err.message})
          return false
        })
    }
  },
  reducer(
    state={loading: false, data: null, error: null},
    { type, payload }
  ) {
    if (type === 'PRIMES_FETCH_STARTED') {
      return merge(state, { loading: true })
    }
    if (type === 'PRIMES_FETCH_SUCCESS') {
      return merge(state, { loading: false, data: payload})
    }
    if (type === 'PRIMES_FETCH_ERROR') {
      return merge(state, { loading: false, error: payload})
    }
    return state
  },
  selectPrimes: pathOr({}, ['primes', 'data'])
}
