const showContent1 = document.getElementById('active-content');
showContent1.innerHTML = `
<div class="col-md-6">
<img class="img-fluid" src="images/ad-1.jpg" alt="Pop-Under Ad">
</div>
<div class="col-md-6">
<h2>POP-UNDER</h2>
<p>This is one of the most popular ads. After user’s click, this 
    ad opens landing page in behind. So, the user experience is 
    not hampered much.
</p>
<a class="btn learn-btn" href="#">Learn more<i class="fa-solid fa-arrow-up-right-from-square learn-icon"></i></a>
</div>
`;
const activeContent1 = () =>{
    const divContent = document.getElementById('active-content');
    divContent.innerHTML = `
    <div class="col-md-6">
    <img class="img-fluid" src="images/ad-1.jpg" alt="Pop-Under Ad">
    </div>
    <div class="col-md-6">
    <h2>POP-UNDER</h2>
    <p>This is one of the most popular ads. After user’s click, this 
        ad opens landing page in behind. So, the user experience is 
        not hampered much.
    </p>
    <a class="btn learn-btn" href="#">Learn more<i class="fa-solid fa-arrow-up-right-from-square learn-icon"></i></a>
    </div>
    `;
}
const activeContent2 = () =>{
    const divContent = document.getElementById('active-content');
    divContent.innerHTML = `
    <div class="col-md-6">
    <img class="img-fluid" src="images/ad-2.jpg" alt="Banner Ad">
    </div>
    <div class="col-md-6">
    <h2>BANNER AD</h2>
    <p>
    Choose between the available banner formats. Highly 
    effective ad for visibility.    
    </p>
    <a class="btn learn-btn" href="#">Learn more<i class="fa-solid fa-arrow-up-right-from-square learn-icon"></i></a>
    </div>
    `;
}
const activeContent3 = () =>{
    const divContent = document.getElementById('active-content');
    divContent.innerHTML = `
    <div class="col-md-6">
    <img class="img-fluid" src="images/ad-3.jpg" alt="NATIVE Ad">
    </div>
    <div class="col-md-6">
    <h2>NATIVE</h2>
    <p>Ad format with the image and the title, that perfectly fits into 
    the content of the site.
    Native ads are placed in the most visible areas of the page 
    and, thus, this format shows good results and the level of 
    interaction.
    </p>
    <a class="btn learn-btn" href="#">Learn more<i class="fa-solid fa-arrow-up-right-from-square learn-icon"></i></a>
    </div>
    `;
}
const activeContent4 = () =>{
    const divContent = document.getElementById('active-content');
    divContent.innerHTML = `
    <div class="col-md-6">
    <img class="img-fluid" src="images/ad-4.jpg" alt="SKIM Ad">
    </div>
    <div class="col-md-6">
    <h2>SKIM</h2>
    <p>SKIM" is a link that a publisher inserts on a specific site 
    element, and after clicking on it, an advertisement appears 
    to the user.
    SKIM gives 100% control of your sold traffic amount, higher 
    CR to advertisers and CPM rates to publishers.
    </p>
    <a class="btn learn-btn" href="#">Learn more<i class="fa-solid fa-arrow-up-right-from-square learn-icon"></i></a>
    </div>
    `;
}
document.getElementById('pop-btn').addEventListener('click', function(){
    activeContent1();
});
document.getElementById('banner-btn').addEventListener('click', function(){
    activeContent2();
});
document.getElementById('native-btn').addEventListener('click', function(){
    activeContent3();
});
document.getElementById('skim-btn').addEventListener('click', function(){
    activeContent4();
});