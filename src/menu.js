const menuPage = (contentDiv) => {
    let pageContent = document.createElement('div');
    pageContent.innerHTML = `
<header id = "menu-showcase">
    <div class = "showcase-content">
        <p class = "l-heading">OUR <span class = "text-primary">MENU</span></p>
    </div>
</header>

<section id = "menu">
    <div class = "container">
         <div class = items>
             <div class="item">
                <div class = "info">
                    <h1>Spaghetti With Grilled Mackarel</h1>
                    <h3 class = "text-primary">$ 50</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perferendis placeat quas quidem officiis adipisci.</p>
                </div>
                <div class = "photo">
                    <img src="./images/Food-Dish-1.png" alt="dish1">
               </div> 
             </div>
             <div class="item">
                <div class = "info">
                    <h1>Chicken Nuggets with Potato</h1>
                    <h3 class = "text-primary">$ 30</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perferendis placeat quas quidem officiis adipisci.</p>
                </div>
                <div class = "photo">
                    <img src="./images/Food-Dish-2.png" alt="dish2">
               </div>
             </div>
             <div class="item">
                <div class = "info">
                    <h1>Chicken in Teriyaki Sauce</h1>
                    <h3 class = "text-primary">$ 40</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perferendis placeat quas quidem officiis adipisci.</p>
                </div>
                <div class = "photo">
                    <img src="./images/food3-free-img.png" alt="dish3">
               </div>
             </div>
             <div class="item">
                <div class = "info">
                    <h1>Grilled Mackerel Steak</h1>
                    <h3 class = "text-primary">$ 45</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perferendis placeat quas quidem officiis adipisci.</p>
                </div>
                <div class = "photo">
                    <img src="./images/food4-free-img.png" alt="dish4">
               </div> 
             </div>
             <div class="item">
                <div class = "info">
                    <h1>Grilled Salmon Fillet with Salad</h1>
                    <h3 class = "text-primary">$ 55</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perferendis placeat quas quidem officiis adipisci.</p>
                </div>
                <div class = "photo">
                    <img src="./images/food4-free-img.png" alt="dish4">
               </div> 
             </div>
             <div class="item">
                <div class = "info">
                    <h1>Grilled and Fried Chicken</h1>
                    <h3 class = "text-primary">$ 50</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perferendis placeat quas quidem officiis adipisci.</p>
                </div>
                <div class = "photo">
                    <img src="./images/food4-free-img.png" alt="dish4">
               </div>
             </div>
         </div>
    </div>
</section>


<footer class = "text-center">
    <p>Copyright &copy; 2020, EmeraldGrill , All Rights Reserved</p>
</footer>
    `
    contentDiv.appendChild(pageContent);
}

export default menuPage;