import axios from 'axios'

export async function getArtist() {
    return axios.get('https://run.mocky.io/v3/6d4dbed9-ee8b-45f0-93c3-95d79b8206c6')
}

export async function getArtistById(id) {
    return axios.get('https://run.mocky.io/v3/497e6460-37e1-47f8-9216-4633e8860670')
}

export async function getMyMusics() {
    return axios.get('https://run.mocky.io/v3/31e3a37a-69cc-47f2-a03f-efbf64c140f1')
}

export async function getMusicSelected() {
    return axios.get('https://run.mocky.io/v3/74d15b24-d699-425d-95a1-1fbad3fdbd85')
}

