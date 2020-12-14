import dayjs from 'dayjs'
import CALENDAR_SET_MONTH from '../actions/index'

const day = dayjs()

const init = formatMonth()

const calendarReducer = (state = init, action) =>{
    const {type, payload} = action
    switch(type){
        case CALENDAR_SET_MONTH :
            return payload
        default:
            return state
    }
}

export default calendarReducer