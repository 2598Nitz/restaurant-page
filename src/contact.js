const contactPage = (contentDiv) => {
    let pageContent = document.createElement('div');
    pageContent.innerHTML = `
    <section class = "container" id = "contact-section">
    <h1><span class = "text-primary">Contact</span> Us</h1>
    <p>Please fill out the below form to contact us</p>
    <form action="">
        <div class = "form-group">
            <label for="name">Name</label>
            <input type="text" id = "name" name = "name">
        </div>
        <div class = "form-group">
            <label for="email">Email Id</label>
            <input type="email" id = "email" name = "email">
        </div>
        <div class = "form-group">
            <label for="msg">Message</label>
            <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
        </div>
        <button>Submit</button>
    </form>
</section>

<section id = "location">
    <div class = "container">
        <div class = "items">
            <div class = "box">
                <i class = "fas fa-hotel fa-3x"></i>
                <h3>Location</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, facere.</p>
            </div>
            <div class = "box">
                <i class = "fas fa-phone fa-3x"></i>
                <h3>Phone Number</h3>
                <p>9876543210</p>
            </div>
            <div class = "box">
                <i class = "fas fa-envelope fa-3x"></i>
                <h3>Email Id</h3>
                <p>lorem@emeraldgrill.com</p>
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

export default contactPage;