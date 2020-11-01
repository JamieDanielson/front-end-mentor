// Menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.mobile-nav');
const menu = document.querySelector('.menu-items');
const mobileLogo = document.querySelector('.mobile-logo');
const mainLogo = document.querySelector('#main-logo');

function hideOnMobile() {
  if (window.innerWidth <= 600) {
    menu.classList.add('none');
    mobileLogo.classList.add('none');
    burger.classList.remove('none');
  }
}

hideOnMobile();

burger.addEventListener('click', function (e) {
  this.classList.toggle('is-open');
  nav.classList.toggle('nav-open');
  menu.classList.toggle('none');
  menu.classList.toggle('menu-open');
  mobileLogo.classList.toggle('none');
  mainLogo.classList.toggle('hidden');
});

// Tabs
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add('tab-border');
  this.classList.add('tab-bold');
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove('tab-border'));
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove('show'));
}

tabItems.forEach((item) => item.addEventListener('click', selectItem));

// Accordion

const question = document.querySelectorAll('.question');
let i;

for (i = 0; i < question.length; i++) {
  question[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}
