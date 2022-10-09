const { range } = require('lodash')
axios = require('axios')

baseUrl = 'http://localhost:3000'

function addRandomNumbers(array) {
    let novo_array = ""
    for (var i = 0; i < array.length; i++) {
        if (array[i]) {
            const c = (Math.floor(Math.random() * 5) - 2)
            n = +array[i] + c
            novo_array += (`${n},`)
        } else {
            novo_array += (',')
        }
    }
    return novo_array
}

function axios_post(obj) {
    url = `${baseUrl}/alterado`
    axios.post(url, obj)
}

function run_randomizer(n) {
    axios.get(`${baseUrl}/puro`)
    .then(resp => resp.data)
    .then(data => {
        let obj = {}
        for (i in range(n)) {
            data.map(macro => {
                const array1 = addRandomNumbers(macro.array1.split(','))
                const array2 = addRandomNumbers(macro.array2.split(','))
                obj = { id: i, array1, array2 }
                return axios_post(obj)
            })
        }
    })
}

run_randomizer(99)