import { ref } from 'vue'

const defaults = {
    wallpaper: 'https://bbfs.midiidev.xyz/uploads/1uB1XW3/wallhaven-exo2gr.jpg',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png',
    name: 'User',
    search: 'https://www.google.com/search?q=',
    locationDisplay: 'city',
    tempUnit: 'celsius',
    links: [
        {
            name: 'Google',
            url: 'https://www.google.com'
        },
        {
            name: 'YouTube',
            url: 'https://www.youtube.com'
        },
        {
            name: 'GitHub',
            url: 'https://github.com'
        },
        {
            name: 'Vue.js Docs',
            url: 'https://vuejs.org/guide/introduction.html'
        },
        {
            name: 'midiidev.xyz',
            url: 'https://midiidev.xyz'
        }
    ]
}

if (!localStorage.settings) {
    localStorage.settings = JSON.stringify(defaults)
}

export const settings = ref(JSON.parse(localStorage.settings))
