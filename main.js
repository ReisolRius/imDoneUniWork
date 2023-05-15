let about = document.querySelector('#about')
let tangle = document.querySelector('.tangle')
let more = document.querySelector('.more-about')

let faq = document.querySelector('#faq')
let modelwindow = document.querySelector('.model-window')
let close = document.querySelector('.close')

about.addEventListener('mouseover', tangledown, false)
about.addEventListener('mouseout', tangleup, false)
more.addEventListener('mouseover', moreup, false)
more.addEventListener('mouseout', moredown, false)

faq.addEventListener('click', modelgo, false)
close.addEventListener('click', modelaway, false)

function tangledown() {
    tangle.style.transform = 'rotate(180deg)';
    more.style.height = '100px';
}

function tangleup() {
    tangle.style.transform = 'rotate(0deg)';
    more.style.height = '0px';
}

function moreup() {
    tangle.style.transform = 'rotate(180deg)';
    more.style.height = '100px';
}

function moredown() {
    tangle.style.transform = 'rotate(0deg)';
    more.style.height = '0px';
}


function modelgo() {
    modelwindow.style.display = 'block';
}

function modelaway() {
    modelwindow.style.display = 'none';
}

/* FILTERS THEMES */

const list = document.querySelector('.list'),
    items = document.querySelectorAll('.post'),
    listItems = document.querySelectorAll('.list__item')

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        const target = event.target
        if(target.classList.contains('list__item')) {
            listItems.forEach(listItem => listItem.classList.remove('list_active'))
            target.classList.add('list_active')
        }
        
        switch(targetId) {
            case 'all':
                getItems('post')
                break
            case 'fantasyy':
                getItems(targetId)
                break
            case 'industriall':
                getItems(targetId)
                break
            case 'vanilla':
                getItems(targetId)
                break
        }
    })
}
filter()

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block'
        }
        else {
            item.style.display = 'none'
        }
    })
}

/* FILTERS VERSIONS */

const version_list = document.querySelector('.list_versions'),
    version_items = document.querySelectorAll('.post'),
    versionsItems = document.querySelectorAll('.versions__item')

function versions_filter() {
    version_list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        const target = event.target
        if(target.classList.contains('versions__item')) {
            versionsItems.forEach(versionsItems => versionsItems.classList.remove('version_active'))
            target.classList.add('version_active')
        }

        switch(targetId) {
            case 'ver_all':
                getVersions('post')
                break
            case '1182':
                getVersions(targetId)
                break
            case '1122':
                getVersions(targetId)
                break
            case '1710':
                getVersions(targetId)
                break
        }
    })
}

versions_filter()

function getVersions(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block'
        }
        else {
            item.style.display = 'none'
        }
    })
}

/* CLEAR ON OTHER FILTER*/

let ver_all = document.querySelector('.ver_all')
let all = document.querySelector('.all')

function clear() {
    version_list.addEventListener('click', event => {
        listItems.forEach(listItem => listItem.classList.remove('list_active'))
        all.classList.add('list_active')
    })
    list.addEventListener('click', event => {
        versionsItems.forEach(versionsItem => versionsItem.classList.remove('version_active'))
        ver_all.classList.add('version_active')
    })
}

clear()

/* MOBILE MENU */

let but = document.querySelector('.mobile_button')
let menu = document.querySelector('.menu')
let chek = false

let more_mob = document.querySelector('.more-mobile')
let about_mob = document.querySelector('#about-mobile')
let more_chek = false
let mob_tangle = document.querySelector('.tangle-mobile')

but.addEventListener('click', goMenu, false)

function goMenu() {
    if (chek == false) {
        menu.style.height = '200px'
        chek = true
    } else {
        menu.style.height = '0px'
        chek = false
        more_mob.style.height = '0px'
        more_chek = false
        mob_tangle.style.transform = 'rotate(0deg)'
    }
}

about_mob.addEventListener('click', moreGo, false) 

function moreGo() {
    if (more_chek == false) {
        menu.style.height = '300px'
        more_mob.style.height = '100px'
        mob_tangle.style.transform = 'rotate(180deg)'
        more_chek = true
    } else {
        menu.style.height = '200px'
        more_mob.style.height = '0px'
        mob_tangle.style.transform = 'rotate(0deg)'
        more_chek = false
    }

}

/* MOBILE WINDOW */

let mob_faq = document.querySelector('#mobile_faq')
let mob_win = document.querySelector('.model-window-mobile')
let mob_close = document.querySelector('.close-mobile')

mob_faq.addEventListener('click', goMobModel, false)
mob_close.addEventListener('click', backMobWin, false)

function goMobModel() {
    mob_win.style.display = 'block'
}

function backMobWin() {
    mob_win.style.display = 'none'
}
