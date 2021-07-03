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
    d.innerHTML = '<div class="card _aos-bottom">'+
                  '<img class="_fit-cover" src="./src/img/'+element.preview+'">'+
                  '<div><span><b>'+element.title+'</b></span><span> by '+element.author+'</span></div>'+
                  '<p>'+element.description+'</p>'+
                  '<button><svg class="_icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg> Preview</button>'+
                  '<a class="btn" href="'+element.file+'"><svg class="_icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> Download</a>'+
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