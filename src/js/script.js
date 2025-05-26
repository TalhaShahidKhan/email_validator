let resultCon = document.getElementById('result')
let submit = document.getElementById('submitBtn')
submit.addEventListener("click", async (e) => {
    e.preventDefault()
    resultCon.innerHTML = '<div class="loader"></div>'
    let key = 'ema_live_VWZzRVtS2ieK2istodIblwE1imPJeOVEe4Rdo3Ep'
    let inputEmail = document.getElementById('email').value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${inputEmail}`
    let res = await fetch(url)
    let result = await res.json()
    // console.log(result)
    // console.log(typeof result)

    let str = ``
    for (key of Object.keys(result)) {
        if (!result[key] == "" && !result[key] == " ") {
            str += `<li> ${key} : ${result[key]} </li>`
        }
    }

    resultCon.innerHTML = str
})

