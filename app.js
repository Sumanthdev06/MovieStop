const arrows= document.querySelectorAll(".arrow");
const movieLists=document.querySelectorAll(".movie-list");
arrows.forEach((arrow,i) =>{
    const itemNum=movieLists[i].querySelectorAll("img").length;
    let clickCounter=0;
    arrow.addEventListener("click",()=> {
        const ratio=Math.floor(window.innerWidth/325);
        clickCounter++;
        if(itemNum-(4+ clickCounter) +(4-ratio)>=0){
            movieLists[i].style.transform=`translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value-358}px)`;
        }
        else{
            movieLists[i].style.transform="translateX(0)";
            clickCounter=0;
        };
        
    });
    
});
const ball=document.querySelector(".toggle-ball");
const items=document.querySelectorAll(".container,.search-container,.dropdown-content,.dropdown-content a,.dropdown-content a:hover,.searchInput,.u_container,.cart-container,.watch-container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle");
ball.addEventListener("click",()=>{
    items.forEach(item =>{
        item.classList.toggle("active");
    });
    ball.classList.toggle("active");
});
const cont=document.querySelector(".container");
const scont=document.querySelector(".search-container");
const ucont=document.querySelector(".u_container");
const wcont=document.querySelector(".watch-container");
const crtcont=document.querySelector(".cart-container");
const sicon=document.querySelector(".searchbtn");
const sform=document.querySelector(".searchForm");
const hicon=document.querySelector(".home1");
const uicon=document.querySelector(".u1");
const mark=document.querySelector(".bmark");
const wtime=document.querySelector(".wbtn");
const cart=document.querySelector(".cartbtn");
const user1=document.querySelector(".user1");
const user2=document.querySelector(".user2");
const user3=document.querySelector(".user3");

sicon.addEventListener("click",()=>{
    cont.style.display="none";
    ucont.style.display="none"; 
    crtcont.style.display="none";
    wcont.style.display="none";
    scont.style.display="inherit";
});
sform.addEventListener("submit",()=>{
    cont.style.removeProperty("display");
    scont.style.display="none";
});
hicon.addEventListener("click",()=>{
    cont.style.removeProperty("display");
    scont.style.display="none";
    ucont.style.display="none";
    wcont.style.display="none";
    crtcont.style.display="none";
});

uicon.addEventListener("click",()=>{
    scont.style.display="none";
    cont.style.display="none";
    wcont.style.display="none";
    crtcont.style.display="none";
    ucont.style.display="flex";  
});
user1.addEventListener("click",()=>{
    ucont.style.display="none";
    cont.style.removeProperty("display");
});
user2.addEventListener("click",()=>{
    ucont.style.display="none";
    cont.style.removeProperty("display");
});
user3.addEventListener("click",()=>{
    ucont.style.display="none";
    cont.style.removeProperty("display");
});

mark.addEventListener("click",()=>{
    let url="https://sumanthdev06.github.io/Movie-Website/";
    let name="Movie-Site";
    alert("Bookmark action is supported by Firefox, Internet Explorer");
    if(window.sidebar){
        window.sidebar.addPanel(name,url,"");
        alert("Bookmark Added");
    }
    else if(window.external){
        window.external.AddFavorite(url,name);
        alert("Bookmark Added");
    }else{
        alert("Your browser does not support bookmark action!");
    }
});
wtime.addEventListener("click",()=>{
    scont.style.display="none";
    cont.style.display="none";
    ucont.style.display="none"; 
    crtcont.style.display="none";
    wcont.style.display="flex";
});
cart.addEventListener("click",()=>{
    scont.style.display="none";
    cont.style.display="none";
    ucont.style.display="none";
    wcont.style.display="none";
    crtcont.style.display="inherit";
});
const navbtn=document.querySelectorAll(".nav1,.nav2,.nav3,.nav4,.nav5,.logo");

navbtn.forEach(btn=>{
    btn.addEventListener("click",()=>{
        cont.style.removeProperty("display");
        scont.style.display="none";
        ucont.style.display="none";
        wcont.style.display="none";
        crtcont.style.display="none";
    });
});
const drpbtn=document.querySelector(".dropdownbtn");
const drpcon=document.querySelector(".dropdown-content");
drpbtn.addEventListener("mouseover",()=>{
    drpcon.style.display="block";
});
drpbtn.addEventListener("mouseout",()=>{
    setTimeout(()=>{drpcon.style.display="none"}, 3000);
});