const number1 = document.querySelectorAll('.number1'),
    number2 = document.querySelectorAll('.number2'),
    number3 = document.querySelectorAll('.number3'),
    number4 = document.querySelectorAll('.number4'),
    number5 = document.querySelectorAll('.number5'),
    number6 = document.querySelectorAll('.number6'),
    number7 = document.querySelectorAll('.number7'),
    number8 = document.querySelectorAll('.number8'),
    number9 = document.querySelectorAll('.number9'),
    number10 = document.querySelectorAll('.number10'),
    number11 = document.querySelectorAll('.number11'),
    number12 = document.querySelectorAll('.number12');

const item1 = document.querySelector('.item1'),
    item2 = document.querySelector('.item2'),
    item3 = document.querySelector('.item3'),
    item4 = document.querySelector('.item4'),
    item5 = document.querySelector('.item5'),
    item6 = document.querySelector('.item6'),
    item7 = document.querySelector('.item7'),
    item8 = document.querySelector('.item8'),
    item9 = document.querySelector('.item9'),
    item10 = document.querySelector('.item10'),
    item11 = document.querySelector('.item11'),
    item12 = document.querySelector('.item12');

// item1.style.backgroundColor = 'rgba(0, 0, 0, .94)';
// number1.forEach(element => {



item1.addEventListener('mouseover', () => {
    item1.style.backgroundColor = 'rgba(0, 0, 0, .94)';
    number1.forEach(element => {
        element.style.visibility = 'visible';
    });
});
item1.addEventListener('mouseout', () => {
    item1.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    number1.forEach(element => {
        element.style.visibility = 'hidden';
    });
});

item2.addEventListener('mouseover', () => {
    item2.style.backgroundColor = 'rgba(0, 0, 0, .94)';
    number2.forEach(element => {
        element.style.visibility = 'visible';
    });
});
item2.addEventListener('mouseout', () => {
    item2.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    number2.forEach(element => {
        element.style.visibility = 'hidden';
    });
});

item3.addEventListener('mouseover', () => {
    item3.style.backgroundColor = 'rgba(0, 0, 0, .94)';
    number3.forEach(element => {
        element.style.visibility = 'visible';
    });
});
item3.addEventListener('mouseout', () => {
    item3.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    number3.forEach(element => {
        element.style.visibility = 'hidden';
    });
});

item4.addEventListener('mouseover', () => {
    item4.style.backgroundColor = 'rgba(0, 0, 0, .94)';
    number4.forEach(element => {
        element.style.visibility = 'visible';
    });
});
item4.addEventListener('mouseout', () => {
    item4.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    number4.forEach(element => {
        element.style.visibility = 'hidden';
    });
});

item5.addEventListener('mouseover', () => {
    item5.style.backgroundColor = 'rgba(0, 0, 0, .94)';
    number5.forEach(element => {
        element.style.visibility = 'visible';
    });
});
item5.addEventListener('mouseout', () => {
    item5.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    number5.forEach(element => {
        element.style.visibility = 'hidden';
    });
});

item6.addEventListener('mouseover', () => {
    item6.style.backgroundColor = 'rgba(0, 0, 0, .94)';
    number6.forEach(element => {
        element.style.visibility = 'visible';
    });
});
item6.addEventListener('mouseout', () => {
    item6.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    number6.forEach(element => {
        element.style.visibility = 'hidden';
    });
});

item7.addEventListener('mouseover', () => {
    item7.style.backgroundColor = 'rgba(0, 0, 0, .94)';
    number7.forEach(element => {
        element.style.visibility = 'visible';
    });
});
item7.addEventListener('mouseout', () => {
    item7.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    number7.forEach(element => {
        element.style.visibility = 'hidden';
    });
});

item8.addEventListener('mouseover', () => {
    item8.style.backgroundColor = 'rgba(0, 0, 0, .94)';
    number8.forEach(element => {
        element.style.visibility = 'visible';
    });
});
item8.addEventListener('mouseout', () => {
    item8.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    number8.forEach(element => {
        element.style.visibility = 'hidden';
    });
});

item9.addEventListener('mouseover', () => {
    item9.style.backgroundColor = 'rgba(0, 0, 0, .94)';
    number9.forEach(element => {
        element.style.visibility = 'visible';
    });
});
item9.addEventListener('mouseout', () => {
    item9.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    number9.forEach(element => {
        element.style.visibility = 'hidden';
    });
});

item10.addEventListener('mouseover', () => {
    item10.style.backgroundColor = 'rgba(0, 0, 0, .94)';
    number10.forEach(element => {
        element.style.visibility = 'visible';
    });
});
item10.addEventListener('mouseout', () => {
    item10.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    number10.forEach(element => {
        element.style.visibility = 'hidden';
    });
});

item11.addEventListener('mouseover', () => {
    item11.style.backgroundColor = 'rgba(0, 0, 0, .94)';
    number11.forEach(element => {
        element.style.visibility = 'visible';
    });
});
item11.addEventListener('mouseout', () => {
    item11.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    number11.forEach(element => {
        element.style.visibility = 'hidden';
    });
});

item12.addEventListener('mouseover', () => {
    item12.style.backgroundColor = 'rgba(0, 0, 0, .94)';
    number12.forEach(element => {
        element.style.visibility = 'visible';
    });
});
item12.addEventListener('mouseout', () => {
    item12.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    number12.forEach(element => {
        element.style.visibility = 'hidden';
    });
});

const ul = document.querySelector('ul');

ul.addEventListener('click', hoverLink);
ul.firstElementChild.style.backgroundColor = 'white';
ul.firstElementChild.querySelector('a').style.color = 'rgb(49, 49, 49)';


function hoverLink(event) {
    for (let li of ul.children) {
        li.style.backgroundColor = '';
        li.querySelector('a').style.color = '';
    }

    let li = event.target.closest('li');

    if (!li) return;

    li.style.backgroundColor = 'white';
    li.querySelector('a').style.color = 'rgb(49, 49, 49)';
}

const open = document.querySelector('.open');
const close = document.querySelector('.close');
const aside = document.querySelector('.aside');

open.addEventListener('click', () => {
    aside.style.left = '0';
    open.style.display = 'none';
    close.style.display = 'block';
});

close.addEventListener('click', () => {
    aside.style.left = '-100%';
    close.style.display = 'none';
    open.style.display = 'block';
});

const onotherMediaQuerie = window.matchMedia('(max-width: 500px)');

onotherMediaQuerie.addListener(changeForMedia);

function changeForMedia(e) {
    if (e.matches) {
        close.style.display = 'none';
        open.style.display = 'block';
    } else {
        open.style.display = 'none';
        close.style.display = 'none';
        aside.style.left = '0';
    }
}

const mediaQuery = window.matchMedia('(min-width: 850px)');

const asideImg = document.querySelector('.aside-logo');

mediaQuery.addListener(handleDeviceChange);

function handleDeviceChange(e) {
    if (e.matches) {
        asideImg.querySelector('img').src = '../images/logo.png';
    } else {
        asideImg.querySelector('img').src = '../images/mini_logo.png';
    }
}

const homepageLink = document.querySelector('.homepage-btns a'),
    aboutLink = document.querySelector('.left-side-about-btn a'),
    entriesLink = document.querySelector('.left-side-btn a'),
    entriesLinkNr2 = document.querySelectorAll('.left-side-btn a');

const li = document.querySelectorAll('ul li');
const linkArray = [homepageLink, aboutLink, entriesLink];

function removeAllStyles() {
    li.forEach(elem => {
        elem.style.backgroundColor = 'transparent';
        elem.querySelector('a').style.color = 'white';
    });
}

entriesLinkNr2[1].addEventListener('click', function(){
    removeAllStyles();
    li[3].style.backgroundColor = 'white';
    li[3].querySelector('a').style.color = 'rgb(49, 49, 49)';
});

linkArray.forEach((item, i) => {
    item.addEventListener('click', () => {
        removeAllStyles();
        clickOnLink(i + 1);
    });

    function clickOnLink(i) {
        li[i].style.backgroundColor = 'white';
        li[i].querySelector('a').style.color = 'rgb(49, 49, 49)';
    }
});

const form = document.querySelector('form.form');

form.addEventListener('click', (e) => {
    e.preventDefault;
});


const documentHeight = () => {
    const doc = document.body;
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
};

window.addEventListener('resize', documentHeight);
documentHeight();