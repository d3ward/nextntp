function navbar(){
    var t = this;
    t.n = document.querySelector("nav");
    t.bo = document.body.style.overflow;
    t.close = function(){
      t.bo="auto";
      t.n.classList.remove("active");
    }
    t.open = function(){
      t.bo="hidden";
      t.n.classList.add("active");
    }
    if (t.n) {
      document.querySelector("nav>button").addEventListener("click", function(){
        console.log("toggleNav");
        if(t.n.classList.contains("active"))
          t.close();
        else
          t.open();
      });
      document.querySelectorAll("nav ul > a").forEach(n => n.addEventListener("click", t.close()));
    }
}
function modal(id){
  var t = this;
  t.m = document.querySelector( (id)?id:'.modal');
  if(t.m){
    t.bdy = document.body.classList;
    t.targets = document.querySelectorAll('[data-toggle="'+t.m.id+'"]');
    t.closebtns = t.m.querySelectorAll('.close-modal');
  }
  t.show = function(){
    t.bdy.add('_overflowhidden');
    t.m.classList.add('_show-modal');
  }
  t.hide = function(){
    t.m.classList.remove('_show-modal');
    t.bdy.remove('_overflowhidden');
  }
  t.listeners= function(){
    t.targets.forEach(el=> {
      el.addEventListener('click', function (e) {
          t.show();
      });
    });
    t.closebtns.forEach(function (item) {
      item.addEventListener('click', function (e) {
        t.hide();
      });
    });
  }
  if(t.m)
    t.listeners();
}
function themeManager(){
    //Theme Switcher
    var toggles = document.getElementsByClassName("theme-toggle");

    if (window.CSS && CSS.supports("color", "var(--bg)") && toggles) {
      var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ?
        "dark" : "light");
      if (storedTheme)
        document.documentElement.setAttribute('data-theme', storedTheme)
      for(var i=0;i<toggles.length;i++){
          toggles[i].onclick = function () {
            var currentTheme = document.documentElement.getAttribute("data-theme");
            var targetTheme = "light";

            if (currentTheme === "light") {
              targetTheme = "dark";
            }

            document.documentElement.setAttribute('data-theme', targetTheme)
            localStorage.setItem('theme', targetTheme);
          };
      }
      
    }
  }
function aos() {
    //Get and observe all the items with the item class
    let items = document.querySelectorAll("[class*=_aos]");
    //Only Use the IntersectionObserver if it is supported and _aos elements exist
    if (IntersectionObserver && items) {
      //When the element is visible on the viewport, 
      //add the _aos-done class so it creates the _aos animation.
      let callback = function (entries) {
        entries.forEach(entry => {
          //if the element is visible, add the _aos-done class
          if (entry.isIntersecting && !entry.target.classList.contains('_aos-done')) {
            entry.target.classList.add('_aos-done');
          } else {
            //else the element do reverse animation
            entry.target.classList.remove('_aos-done');
          }
        });
      }
      //Create the observer
      let observer = new IntersectionObserver(callback, {
        root: null,
        threshold: 0
      });
      //Add each _aos element to the observer
      items.forEach((item) => {
          observer.observe(item);
      });
    }
  }
function gotop(){
    var el =this;
    el.gt =document.getElementById('gt-link');
    el.scrollToTop= function(){
      window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }
    el.listeners= function(){
      window.addEventListener("scroll", () => {
        let y = window.scrollY;
        if (y > 0) {
          el.gt.classList.remove("hide");
        } else {
          el.gt.classList.add("hide");
        }
      });
      el.gt.onclick = function (e) {
        e.preventDefault();
        if (document.documentElement.scrollTop || document.body.scrollTop > 0) {
          el.scrollToTop();
        }
      }
    }
    if(el.gt){
      el.listeners();
    }
  }

function createItems(){
  var gi =document.getElementById("themeItems");
  data.forEach(element => {
    var d = document.createElement("div");
    d.className = "col-4";
    d.innerHTML = '<div class="card _aos">'+
                  '<img src="'+element.img+'">'+
                  '<div><span><b>'+element.title+'</b></span><span> by '+element.author+'</span></div>'+
                  
                  '<p>'+element.description+'</p>'+

                  '<a class="btn" href="'+element.file+'">Download</a>'+
                  '</div>';
    gi.appendChild(d);
  });
}
// Call the function when the DOM is loaded
document.addEventListener("DOMContentLoaded", ()=>{
  themeManager();
  navbar();
  gotop();
 
  new modal("#mdl1");
  createItems(); aos();

});