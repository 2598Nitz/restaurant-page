import homePage from './home.js'
import navbar from './navbar.js';
import contactPage from './contact.js';
import menuPage from './menu.js';
import init from './typeWriter';





let contentDiv = document.querySelector('#content');
navbar(contentDiv);

homePage(contentDiv);
init();
let menu_btn = document.querySelector("#showcase .showcase-content button");
menu_btn.addEventListener('click',changeTab);


function changeTab(e)
{   
    let targetDiv = e.target;
    contentDiv.removeChild(contentDiv.lastElementChild);
    if(targetDiv.innerHTML === "Home")
    { 
        homePage(contentDiv);
        init();
        let menu_btn = document.querySelector("#showcase .showcase-content button");
        menu_btn.addEventListener('click',changeTab);
    }
    else if(targetDiv.innerHTML === "Menu" || targetDiv.innerHTML === "Explore Menu")
    {   
        menuPage(contentDiv);
    }
    else
    {   
        contactPage(contentDiv);
    }
}

let tabs = document.querySelectorAll('li');
tabs.forEach(tab => {
    tab.addEventListener('click',changeTab);
})



 