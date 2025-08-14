const menu = [
    {
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img:
            "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img:
            "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img:
            "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img:
            "https://thewoksoflife.com/wp-content/uploads/2014/11/dan-dan-noodles-15-1.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img:
            "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img:
            "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img:
            "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img:
            "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img:
            "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
];

const sectionCenter = document.querySelector(`.section-center`);
const container = document.querySelector(`.btn-container`)
const searchBox = document.querySelector('#searchBox'); // search box için

// load items
window.addEventListener(`DOMContentLoaded`, function () {
    displayMenuItems(menu);
    displayMenuButtons();
});

// Tema toggle
/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2025 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

// Tema toggle için mevcut tema
const storedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-bs-theme', storedTheme);

// Butondaki ikon güncelle
const themeIcon = document.getElementById('themeIcon');
if (themeIcon) {
    themeIcon.className = storedTheme === 'light' ? 'bi bi-sun' : 'bi bi-moon';
}

// Tema toggle butonu
const themeToggleBtn = document.getElementById('themeToggle');
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeIcon.className = newTheme === 'light' ? 'bi bi-sun' : 'bi bi-moon';
    });
}


// Search box filtreleme
    // Kullanıcı yazı yazdığında tetiklenecek olay
    searchBox.addEventListener('input', function () {
        // Kullanıcının yazdığı metin
        const search = searchBox.value.toLowerCase();

        // Menüdeki yemekleri filtrele
        // Sadece başlığı aranan metni içerenler kalır
        const filtrelenmisMenu = menu.filter(function (item) {
            return item.title.toLowerCase().includes(search);
        });

        //  Filtrelenmiş menüyü ekrana bas
        displayMenuItems(filtrelenmisMenu);
    });


function displayMenuItems(MenuItems) {
    let displayMenu = MenuItems.map(function (item) {

        return `
         <div class="col-md-6 mb-4">
        <article class="menu-item ">
            <img src=${item.img} class="photo" alt=${item.title} >
            <div class="item-info">
                <header class="menu-title">
                    <h4>${item.title}</h4>
                    <h4 class="price">${item.price}</h4>
                </header>
                <p class="item-text">
                   ${item.desc}

                </p>

            </div>
        </article>
        </div>
        `;

    }).join("");

    // row kapsayıcısı ekliyoruz
    sectionCenter.innerHTML = `<div class="row">${displayMenu}</div>`;
}

function displayMenuButtons() {

    const categories = ['all']; // Başlangıç olarak "all" kategorisi 

    // Menüdeki her item için dön
    menu.forEach(item => {
        // Eğer bu kategori listede yoksa ekle
        if (!categories.includes(item.category)) {
            categories.push(item.category);
        }
    });

    const categoryBtns = categories.map(function (category) {
        return `
        <button class="btn btn-outline-primary filter-btn m-1" type="button" 
        data-id=${category}> ${category} </button>
        `
    })
        .join("");

    container.innerHTML = categoryBtns;

    const filterBtns = document.querySelectorAll(`.filter-btn`);
    // filter items

    filterBtns.forEach(btn => {
        btn.addEventListener("click", e => {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(menuItem => menuItem.category === category);

            displayMenuItems(category === `all` ? menu : menuCategory);
        });
    });

}

