function runPage() {
    //search for city weather server side API keys
    const APIKey = "de7012882f4c3c7eb567c8837eb90a14"

    const inputEl = document.getElementById("city-search")
    //store search history as buttons with city names on the page below searchbox
    const searchEl = document.getElementById("search-button")
    //create clear button for search list
    const clearEl = document.getElementById("clear-button")
    
    //display current city's search and weather and maybe current condition icons results in "current weather" div
    const weatherIcon = document.getElementById("current-pic")
    
    //display current date, temp, wind, humidity, UV index and city name using server APIs
    const cityNameEl = document.getElementById("city-name")
    const tempEl = document.getElementById("temperature")
    const windEl = document.getElementById("wind-speed")
    const humidityEl = document.getElementById("humidity")
    const uvEl = document.getElementById("UV-index")
    const historyEl = document.getElementById("history")
    let searchHistory = JSON.parse(localStorage.getItem("search")) || []
    console.log(searchHistory)

    //display 5 day forecast in "five-day" div

    //date, temp, wind, humidity, maybe current condition icons using serverside APIs
}