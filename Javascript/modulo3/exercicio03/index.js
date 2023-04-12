const dayjs = require('dayjs')
const customParseFormat = require('dayjs/plugin/customParseFormat')
const relativeTime = require('dayjs/plugin/relativeTime')

dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)

function birthday(date){
    const birthday = dayjs(date)
    const today = dayjs()

    const ageInYears = today.diff(birthday, 'year')
    const nextBirthday = birthday.add(ageInYears + 1, 'year')
    const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1

   console.log(ageInYears)
   console.log(nextBirthday.format("DD/MM/YYYY"))
   console.log(daysToNextBirthday)

}

birthday("2001-07-02")