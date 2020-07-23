const homePage = (contentDiv) => {
    let pageContent = document.createElement('div');
    pageContent.innerHTML = `
<header id = "showcase">
    <div class = "showcase-content">
        <h1 class = "l-heading">We Serve <div class = "text-primary txt-type" data-wait="3000" data-words='["Passion", "Food"]'></div></h1>
        <p class = "pad-2 lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla recusandae veritatis quaerat expedita ducimus, suscipit quisquam deserunt adipisci porro neque.</p>
        <button class = "btn btn-primary">Explore Menu</button>
    </div>
</header>

<section id = "about">
    <h2 class = "text-center m-heading"><span class = "text-primary">OUR</span> STORY</h2>
    <div class = container>
        <div class = "about-content">
            <h3 class = "text-primary">IT STARTED, QUITE SIMPLY, LIKE THIS...</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis vitae aut qui cupiditate quo?
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos alias architecto sit incidunt harum quia amet illum eum. Aut ad repellendus id dolores sapiente dolorem itaque.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sint porro soluta corrupti eum explicabo minus debitis temporibus qui quaerat.
            </p>
        </div>
        <div class = "about-img">
            <img src="./images/image2.jpg" alt="RESTAURANT IMAGE">
        </div>
        
    </div>
</section>

<section id = "testimonial"> 
    <div class = "testimonial-content">
        <h2 class = "m-heading text-center">They All <span class = "text-primary">Love Our Food</span></h2>
        <div class = "container">
            <div class = "card">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, rem!
                </p>
                <div class = "person">
                    <img src="./images/person1.png" alt="person1">
                    <p class = "name">- Matt Henry</p>
                </div>   
                
            </div>
            <div class = "card">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, rem!
                </p>
                <div class = "person">
                    <img src="./images/person2.png" alt="person2">
                    <p class = "name">- Brad Powell</p>
                </div>   
                
            </div>
            <div class = "card">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, rem!
                </p>
                <div class = "person">
                    <img src="./images/person2.png" alt="person3">
                    <p class = "name">- Jos Stokes</p>
                </div>   
                
            </div>
            <div class = "card">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A temporibus enim assumenda voluptate unde corporis.
                </p>
                <div class = "person">
                    <img src="./images/person1.png" alt="person4">
                    <p class = "name">- Greame Villiers</p>
                </div>   
                
            </div>
        </div>
    </div>
</section>
<footer class = "text-center">
    <p>Copyright &copy; 2020, EmeraldGrill, All Rights Reserved</p>
</footer>
    `
    contentDiv.appendChild(pageContent);
}

export default homePage;