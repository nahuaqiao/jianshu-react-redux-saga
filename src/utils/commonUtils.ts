import { RootState } from '../app/store'

export const timestampToFormatDateString = (timestamp: number) => {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }).format(timestamp * 1000)
}

export const delay = (ms: number) => {
    return new Promise<void>((solve) => {
        setTimeout(() => {
            solve()
        }, ms)
    })
}

export const getReduxState: () => RootState = () => require('../app/store').default.getState()