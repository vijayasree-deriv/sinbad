import { useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import extend from 'extend'
import { EMAIL } from 'common/constants'

export const getPathName = () => typeof window !== 'undefined' && window.location.pathname

export const trimSpaces = (value) => value?.trim()

export const toISOFormat = (date) => {
    if (date instanceof Date) {
        const utc_year = date.getUTCFullYear()
        const utc_month = (date.getUTCMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1)
        const utc_date = (date.getUTCDate() < 10 ? '0' : '') + date.getUTCDate()

        return `${utc_year}-${utc_month}-${utc_date}`
    }

    return ''
}

export const toHashFormat = (string) => string.replace(/\s+/g, '-').toLowerCase() // change space to dash then lowercase all

export const isBrowser = () => typeof window !== 'undefined'

export const isEmptyObject = (obj) => {
    let is_empty = true
    if (obj && obj instanceof Object) {
        Object.keys(obj).forEach((key) => {
            if (Object.prototype.hasOwnProperty.call(obj, key)) is_empty = false
        })
    }
    return is_empty
}

export const scrollTop = () => {
    if (isBrowser()) {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }
}

export const cloneObject = (obj) =>
    !isEmptyObject(obj) ? extend(true, Array.isArray(obj) ? [] : {}, obj) : obj

export const getPropertyValue = (obj, k) => {
    let keys = k
    if (!Array.isArray(keys)) keys = [keys]
    if (!isEmptyObject(obj) && keys[0] in obj && keys && keys.length > 1) {
        return getPropertyValue(obj[keys[0]], keys.slice(1))
    }
    // else return clone of object to avoid overwriting data
    return obj ? cloneObject(obj[keys[0]]) : undefined
}
export const getLocationHash = () =>
    isBrowser() && location.hash ? location.hash.slice(1).replace(/(\/)$/g, '') : ''

export const setLocationHash = (tab) => {
    if (isBrowser()) {
        location.hash = `#${tab}`
    }
}

export const routeBack = () => {
    if (isBrowser) {
        window.history.back()
    }
}
export const checkElemInArray = (tab_list, tab) => tab_list.includes(tab)

export const getWindowWidth = () => (isBrowser() && window.screen ? window.screen.width : '')

export const sanitize = (input) => input.replace(/[.*+?^${}()|[\]\\]/g, '')

export const sentenceCase = (input) => input.charAt(0).toUpperCase() + input.slice(1)

export const getCryptoDecimals = (input) =>
    input.toFixed(1 - Math.floor(Math.log(input) / Math.log(10)))

export const applyDefaultValues = (props, default_props_object) => {
    let style = ''

    Object.keys(default_props_object).forEach((prop) => {
        if (!(prop in props)) {
            const current_prop = prop.replace(/_/g, '-')
            style += `${current_prop}: ${default_props_object[prop]};`
        }
    })

    return style
}

export const getDateFromToday = (num_of_days) => {
    const today = new Date()
    const end_date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + num_of_days)

    return end_date
}

export const isNullUndefined = (value) => value === null || typeof value === 'undefined'

export const isObject = (value) => typeof value === 'object'

export const isJSONString = (value) => {
    try {
        return JSON.parse(value) && !!value
    } catch (e) {
        return false
    }
}

export const parseJSONString = (value) => (isJSONString(value) ? JSON.parse(value) : value)

export const convertDate = (date) => {
    const newdate = new Date(date)
    return (
        newdate.toLocaleString('en', { day: 'numeric' }) +
        ' ' +
        newdate.toLocaleString('en', { month: 'short' }) +
        ' ' +
        newdate.toLocaleString('en', { year: 'numeric' })
    )
}

// remove spaces before appending "..." on truncated strings
const getLimit = (input, limit) => {
    if (input[limit - 1] === ' ') {
        return limit - 1
    }
    return limit
}

export const truncateString = (input, limit) =>
    input.length > limit ? `${input.substring(0, getLimit(input, limit))}...` : input

// Function to manually add external js files.
export const addScript = (settings) => {
    const script = document.createElement('script')

    Object.keys(settings).forEach((key) => {
        if (key === 'text') {
            script.text = settings['text']
        } else {
            script.setAttribute(key, settings[key])
        }
    })
    document.body.appendChild(script)
}

export const stripHTML = (str) => str?.replace(/<[^>]*>?/gm, '')

export const slugify = (text) =>
    text &&
    text
        .toString()
        .normalize('NFD') // The normalize() method returns the Unicode Normalization Form of a given string.
        .replace(/[\u0300-\u036f]/g, '') // Remove all previously split accents
        .toLowerCase()
        .trim() // Remove whitespace from both sides of a string
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/--+/g, '-') // Replace multiple - with single -

export const unslugify = (slug) => {
    if (slug) {
        const result = slug.replace(/-/g, ' ')
        return result.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        })
    }
}
export const removeSpecialCharacterUrl = (url) =>
    url &&
    slugify(url)
        .replace(/\?+/g, '') // Replace question mark with empty value
        .replace(/[/]/g, '-') //Replace '/' with single -

export const queryParams = {
    get: (key) => {
        const params = new URLSearchParams(location.search)
        let param_values = {}
        //To get the params from the url

        if (typeof key === 'string') {
            return params.get(key)
        } else {
            key.forEach((k) => {
                param_values[key] = params.get(k)
            })
        }
        return param_values
    },
    set: (objects) => {
        // To set the params from the url
        const url = new URL(location)

        Object.keys(objects).forEach((k) => {
            const value = objects[k]
            url.searchParams.set(k, value)
        })

        return window.history.replaceState(null, null, url)
    },
    delete: (key) => {
        //To delete the params from the url
        const url = new URL(location)
        if (typeof key === 'string') {
            url.searchParams.delete(key)
        } else {
            key.forEach((k) => {
                url.searchParams.delete(k)
            })
        }

        return history.replaceState(null, null, url)
    },
}

export const useCallbackRef = (callback) => {
    const callback_ref = useRef()

    useEffect(() => {
        callback_ref.current = callback
    }, [callback])

    return callback_ref
}

export const isLocalhost = () => !!(isBrowser() && process.env.NODE_ENV === 'development')

export const contactUsAction = () => {
    window.open(`mailto:${EMAIL}`, '_blank')
}

export const openPositionActions = () => {
    navigate('/open-positions')
}
