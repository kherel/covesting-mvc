import { START, SUCCESS, FAIL, FETCH } from 'constants'

export default function (entity) {
  return [
    FETCH + entity + START,
    FETCH + entity + SUCCESS,
    FETCH + entity + FAIL,
  ]
}