$(document).ready(function(){
    $('.slider').slick({
        dots:true,
        adaptiveHeight:true,
        autoplay:true,
        autoplaySpeed: 50000000,
        waitForAnimate:false
    });
});

/* TABS */

const tabsBtn = document.querySelectorAll('.tabs__item')
const tabsItems = document.querySelectorAll('.tabs__block')

tabsBtn.forEach(item => {
    item.addEventListener('click', function() {
        let currentBtn = item
        let tabId = currentBtn.getAttribute('data-tab')
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('tab_active')) {
            tabsBtn.forEach(item => {
                item.classList.remove('tab_active__button')
            })
    
            tabsItems.forEach(item => {
                item.classList.remove('tab_active')
            })
    
            currentBtn.classList.add('tab_active__button')
            currentTab.classList.add('tab_active')
        }
    })
})
