require("dotenv").config()

// base url
const base_url = `https://api.rawg.io/api/games?key=${process.env.API_KEY}`

// getting date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1
    if (month < 10) {
        return `0${month}`
    } else {
        return month
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate()
    if (day < 10) {
        return `0${day}`
    } else {
        return day
    }
}

// current day/month/year
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

// popular games
const popularGames = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`

const popularGamesURL = () => `${base_url}${popularGames}`
