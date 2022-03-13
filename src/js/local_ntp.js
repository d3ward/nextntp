/* -------------------------------------------- */
/*                          COMPONENTS                             */
/* -------------------------------------------- */
import Sortable from 'sortablejs';
import { inputNumber } from './inputNumber';
import { Modal } from './modal';
import { Tabs } from './tabs';
import { BottomSheet } from './bottomSheet';
import '../css/local_ntp.css';
import {newsLoader} from './newsLoader';
import { LocalStorageManager } from './localStorage';

const LS = new LocalStorageManager('nextntp');
var ntp_ver = "1.0.0";
LS.set('version', '1.0.0');
console.log(LS.get('version'));
document.querySelector(".version").innerText="v"+ntp_ver;

/* ---- Reset ntp by clearing localStorage and reload page ---- */
function reset_ntp() {
  if (confirm("This will reset NTP back to default, are you sure ?")) {
    LS.clearAll();
    location.reload();
  }
}
document.getElementById("ntp-res").addEventListener("click",reset_ntp);

/* -------------------------------------------- */
/*                            Utilities                               */
/* -------------------------------------------- */
function getBase64Image(imgd,url) {
  var img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = function () {
    var canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d');
    canvas.height = img.naturalHeight;
    canvas.width = img.naturalWidth;
    ctx.drawImage(img, 0, 0);
    var uri = canvas.toDataURL('image/png');
    imgd.src= uri; //-> "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWP4z8DwHwAFAAH/q842iQAAAABJRU5ErkJggg=="
  };
  img.src = url;
}
/* --- Fix url by adding https:// if missing -- */
function fixURL(value) {
  if (value.indexOf('https://') < 0 && value.indexOf('http://') < 0 && value.indexOf('kiwi://') < 0 && value.indexOf('chrome://') < 0) return "https://" + value;
  return value;
}
/* -------- Function to get rootDomain -------- */
function get_root_domain(url) {
  return url.replace('http://', '').replace('https://', '').replace('kiw://', '').replace('chrome://', '').replace('www.', '').replace(':', '').split(/[/?#]/)[0];
}
/* ------------- Get Device Width ------------- */
//Used for: calculate number of tiles in grid
const device_width = ((window.innerWidth) ? window.innerWidth : screen.width) - 28; 
/* ----- Retrieve ideal number of columns ----- */
/* ---------- to fit a grid of tiles -------- */
function f_get_ncols() {
  if (device_width > 253 && device_width < 337) return 3;
  else if (device_width > 336 && device_width < 421) return 4;
  else if (device_width > 420 && device_width < 510) return 5;
  else if (device_width > 509 && device_width < 672) return 6;
  else if (device_width > 671) return 8;
  return 2;
}
  /* ----- Set css variables for grid tiles ----- */
  function set_gt_css(data) {
    ntp_bdy.style.setProperty("--tile-n", data.n);
    ntp_bdy.style.setProperty("--tile-w", data.w + 'px');
    ntp_bdy.style.setProperty("--tile-m", data.m + 'px');
    ntp_bdy.style.setProperty("--tile-r", data.r + 'px');
    f_cache_style();
  }
/* ---------- Check if touch enabled ---------- */
const isTD =()=>{
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}
var mLstnr = ['touchmove', 'touchend', 'touchstart'];
if (!isTD) {
  mLstnr = ['mousemove', 'mouseup', 'mousedown'];
}
/* ------ Cache the tiles  ------ */
function f_cache_tl() {
  var tiles = document.getElementById('tlg').innerHTML;
  LS.set("tiles",tiles)
}
function f_cache_news() {
  ntp_news.cache = document.getElementById('news').innerHTML;
  LS.set("news",ntp_news)
}
function f_cache_style(){
  LS.set("style",ntp_bdy.getAttribute("style"))
}

/* --------------- Tile grid dom -------------- */
var tlg = document.getElementById("tlg");
/* ---- get cached grid tiles and load them --- */

var ntp_tiles = LS.get("tiles");
if(ntp_tiles){
  tlg.innerHTML = ntp_tiles;
}else{
  try{
  if (chrome.embeddedSearch.newTabPage != undefined) {
    var pages = chrome.embeddedSearch.newTabPage.mostVisited;
    console.log("Most visited: "+ pages);
    for (var i = 0; i < Math.min(8, pages.length); ++i) {
      var url= chrome.embeddedSearch.newTabPage.getMostVisitedItemData(pages[i].rid).url;
      f_create_tile_data(url);
    }
  }
}catch{
    var pages = ["https://d3ward.github.io","https://kiwibrowser.com","chrome://bookmarks",
    "chrome://extensions","chrome://downloads","chrome://flags"];
    pages.forEach(el=> {
        f_create_tile_data(el);
    });
  }
  f_cache_tl();
}
/* ------ get cached style body and load ------ */
var ntp_bdy = document.body;
if (LS.get("style")) ntp_bdy.setAttribute("style", LS.get("style"));
/* ------------- News dom ------------- */
var news=document.getElementById('news');
/* --------- get cached news and load --------- */
var ntp_news = LS.get("news");
console.log("🚀 ~ file: local_ntp.js ~ line 121 ~ ntp_news", ntp_news)
if(!ntp_news){
    ntp_news= {
      enabled: true,//
      topics: ["topstories","foryou"],
      filters : "wordtest",
      cache: "",
      items: [],
      lang_country: "?hl=en-GB&gl=GB&ceid=GB:en",
      timespan: undefined,
      timeToReload: "0.5",
    }
    f_cache_news();
}

var gridT;

/* ---------- Delete  tile from grid ---------- */
function f_delete_tile(){
  currentSelectedTile.parentNode.removeChild(currentSelectedTile);
  f_cache_tl();
}
/* ----------- Open tile in new tab ----------- */
function f_open_tile(){
  var url = currentSelectedTile.querySelector("a").href;
  const tab = window.open(url, '_blank');
}
/* ------------- Grid tile config ------------- */
var targetBlank = getComputedStyle(ntp_bdy).getPropertyValue("--o2");
var timeoutVariable;
var currentSelectedTile;

new GoTopButton();

/* -------- Settings modal config -------- */
var settings_modal= new Modal("#settings_modal");
var setting_tabs = new Tabs("#tabs");

function f_codef_c() {
  document.getElementById("code_f").value = "";
}

function f_codef_e() {
  try {
    eval(document.getElementById("code_f").value);
    document.getElementById("code_f").value = "";
  } catch (error) {
    showBox("Something gone wrong ! Info _:" + error.message);
  }
}
document.getElementById("b_codec").addEventListener("click", f_codef_c);
document.getElementById("b_codee").addEventListener("click", f_codef_e);
/* ----- Initialize bottom sheet component ---- */
const bottomSheet = new BottomSheet("bs_newt");

const p_tile = document.getElementById('p_tile');//Tile image preview
const i_url = document.getElementById('i_url');//Tile image url input
const t_ac = document.getElementById('t_ac');//Tile image auto fetch toggle
const t_url = document.getElementById('t_url');//Tile url input
const t_lab = document.getElementById('t_lab');//Tile label input
const b_save = document.getElementById('b_save');
const b_add = document.getElementById('b_add');
t_ac.onchange = ()=>{f_sac(t_ac, 1);};
i_url.onpaste = ()=>{f_spti(i_url);};
i_url.onblur = ()=>{f_sptt(i_url);};
t_url.onkeyup = ()=>{f_sptt(t_url);};
/* ------- Event listener to close modal ------ */
document.getElementById("b_close").addEventListener("click", () => {
  bottomSheet.deactivate();
  
    i_url.value = "";
    t_url.value = "";
    t_lab.value = "";
    t_ac.checked = true;
    i_url.disabled = true;
    b_add.style.display = 'inline';
    b_save.style.display = 'none';

});
/* ------- Event listener to open bottom sheet ------- */
document.getElementById("b_newt").addEventListener("click", () => {
  b_add.style.display = "inline";
  b_save.style.display = 'none';
  bottomSheet.activate();
});

/* -- Event listener for not found image tile - */
document.getElementById("p_tile").onerror = function () {
  p_tile.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxnPg0KCQkJPHJlY3QgeD0iMSIgeT0iNC41IiBzdHlsZT0iZmlsbDojRUNGMEYxOyIgd2lkdGg9IjU1IiBoZWlnaHQ9IjQyIi8+DQoJCQk8cGF0aCBzdHlsZT0iZmlsbDojNTQ1RTczOyIgZD0iTTU3LDQ3LjVIMHYtNDRoNTdWNDcuNXogTTIsNDUuNWg1M3YtNDBIMlY0NS41eiIvPg0KCQk8L2c+DQoJCTxnPg0KCQkJPHJlY3QgeD0iNSIgeT0iOC41IiBzdHlsZT0iZmlsbDojNTQ1RTczOyIgd2lkdGg9IjQ3IiBoZWlnaHQ9IjM0Ii8+DQoJCQk8cGF0aCBzdHlsZT0iZmlsbDojRUNGMEYxOyIgZD0iTTUzLDQzLjVINHYtMzZoNDlWNDMuNXogTTYsNDEuNWg0NXYtMzJINlY0MS41eiIvPg0KCQk8L2c+DQoJCTxjaXJjbGUgc3R5bGU9ImZpbGw6I0YzRDU1QTsiIGN4PSIxNSIgY3k9IjE3LjA2OSIgcj0iNC41NjkiLz4NCgkJPHBvbHlnb24gc3R5bGU9ImZpbGw6IzExQTA4NTsiIHBvaW50cz0iNTEsMzIuNjExIDUwLDMxLjUgMzgsMjAuNSAyNy41LDMyIDMyLjk4MywzNy40ODMgMzcsNDEuNSA1MSw0MS41IAkJIi8+DQoJCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiMyNkI5OTk7IiBwb2ludHM9IjYsNDEuNSAzNyw0MS41IDMyLjk4MywzNy40ODMgMjIuMDE3LDI2LjUxNyA2LDQwLjUgCQkiLz4NCgk8L2c+DQoJPGc+DQoJCTxjaXJjbGUgc3R5bGU9ImZpbGw6I0VENzE2MTsiIGN4PSI0OCIgY3k9IjQ0LjUiIHI9IjEyIi8+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNNDkuNDE0LDQ0LjVsMy41MzYtMy41MzZjMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNHMtMS4wMjMtMC4zOTEtMS40MTQsMEw0OCw0My4wODYNCgkJCWwtMy41MzYtMy41MzZjLTAuMzkxLTAuMzkxLTEuMDIzLTAuMzkxLTEuNDE0LDBzLTAuMzkxLDEuMDIzLDAsMS40MTRsMy41MzYsMy41MzZsLTMuNTM2LDMuNTM2Yy0wLjM5MSwwLjM5MS0wLjM5MSwxLjAyMywwLDEuNDE0DQoJCQljMC4xOTUsMC4xOTUsMC40NTEsMC4yOTMsMC43MDcsMC4yOTNzMC41MTItMC4wOTgsMC43MDctMC4yOTNMNDgsNDUuOTE0bDMuNTM2LDMuNTM2YzAuMTk1LDAuMTk1LDAuNDUxLDAuMjkzLDAuNzA3LDAuMjkzDQoJCQlzMC41MTItMC4wOTgsMC43MDctMC4yOTNjMC4zOTEtMC4zOTEsMC4zOTEtMS4wMjMsMC0xLjQxNEw0OS40MTQsNDQuNXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==";
};
/* ---- Event listener to create a new tile --- */
document.getElementById("b_add").addEventListener("click", f_create_tile);
/* ----- Event listener to save edite tile ---- */
document.getElementById("b_save").addEventListener("click", f_save_edit_tile);
/* --------- Save current edited tile --------- */
function f_save_edit_tile() {
  var item = currentSelectedTile;
  let title = t_lab.value;
  if (title == "") title = get_root_domain(newt["url"]);
  item.querySelector(".tile_url").href = t_url.value;
  item.querySelector(".tile_title").innerText = title;
  item.querySelector(".tile_img").src = p_tile.src;
  f_cache_tl();
  bottomSheet.deactivate();
}
/* ---- Toggle auto detection image of tile --- */
function f_sac(e, s) {
  if (s == 1) {
    if (i_url.disabled) {
      e.checked = false;
      i_url.value = "";
      i_url.disabled = false;
      i_url.select();
      i_url.focus();
    } else {
      e.checked = true;
      var iUrl = "https://logos.kiwibrowser.com/" + get_root_domain(t_url.value);
      window.clearTimeout(timeoutVariable);
      timeoutVariable = setTimeout(function () {
        p_tile.src = iUrl;
      }, 1000);
      i_url.value = iUrl;
      i_url.disabled = true;
    }
  }
}
/* ------ Set preview image from tile url ----- */
function f_sptt(t) {
  if (i_url.disabled) {
    window.clearTimeout(timeoutVariable);
    timeoutVariable = setTimeout(function () {
      
      var iUrl = "https://logos.kiwibrowser.com/" + get_root_domain(t.value);
      p_tile.src = iUrl;
      i_url.value = iUrl;
    }, 1000);
  }
}
/* ----- Set preview image from image url ----- */
function f_spti(t) {
  window.clearTimeout(timeoutVariable);
  timeoutVariable = setTimeout(function () {
    p_tile.src = t.value;
  }, 1000);
}

/* ------- Build tile and append to grid ------ */
function f_build_tile(item) {
  var tile = document.createElement('div');
  tile.className = 'tlg_item';
  tile.innerHTML =
    '<a class="tile_url" href="' + item.url + '" rel="noreferrer">' +
    '<img class="tile_img" src="' + item.imgSrc +
    '" /><span class="tile_title">' +
    item.title + '</span></a>';
  var target = document.getElementById("tlg").querySelector(".new_tile");
  target.parentNode.insertBefore(tile, target);
  if((item.imgSrc).indexOf('https://') < 0 || (item.imgSrc).indexOf('http://') < 0)
    getBase64Image(tile.querySelector(".tile_img"),item.imgSrc);
  console.log("f_build_tile -> url : " + item.url + "   |  title : " + item.title + " | img : " + item.imgSrc);
  f_evl_gtiles();
  f_cache_tl();
}
/* -------- Create tile ------- */
function f_create_tile_data(url) {
  //Retrieve tile data from modal
  var data = {};
  data["url"] = fixURL(url);
  var title = "";
  if (title == "") title = get_root_domain(data["url"]);
  data["title"] = title;
  var imgSrc = "https://logos.kiwibrowser.com/" + title;
  data["imgSrc"] = imgSrc;
  //Build tile with data and append to grid 
  f_build_tile(data); //Create new tile and add to grid
}
/* -------- Create tile from modal data ------- */
function f_create_tile() {
  //Retrieve tile data from modal
  var data = {};
  data["url"] = fixURL(t_url.value);
  var title = t_lab.value;
  if (title == "") title = get_root_domain(data["url"]);
  data["title"] = title;
  data["imgSrc"] = p_tile.src;
  //Build tile with data and append to grid 
  f_build_tile(data); //Create new tile and add to grid
  //Close bottom sheet
  bottomSheet.deactivate();
}
/* ------------ Edit tile from grid ----------- */
function f_edit_tile() {
  var title = currentSelectedTile.querySelector('.tile_title').innerText;
  var url = currentSelectedTile.querySelector('.tile_url').href;
  var img = currentSelectedTile.querySelector('.tile_img').src;
  t_ac.checked = false;
  i_url.disabled = false;
  p_tile.src = img;
  i_url.value = img;
  t_url.value = url;
  t_lab.value = title;
  b_add.style.display = "none";
  b_save.style.display = 'inline';
  bottomSheet.activate();
}
/* ----- Normalize x,y to container scope ----- */
const normalizePosition = (scope,mouseX, mouseY) => {
  let {left: scopeOffsetX,top: scopeOffsetY} = scope.getBoundingClientRect();
  scopeOffsetX = scopeOffsetX < 0 ? 0 : scopeOffsetX;
  scopeOffsetY = scopeOffsetY < 0 ? 0 : scopeOffsetY;
  const scopeX = mouseX - scopeOffsetX;
  const scopeY = mouseY - scopeOffsetY;
  const outOfBoundsOnX = scopeX + cm_menu.clientWidth > scope.clientWidth;
  const outOfBoundsOnY =scopeY + cm_menu.clientHeight > scope.clientHeight;
  let normalizedX = mouseX;
  let normalizedY = mouseY;
  if (outOfBoundsOnX) normalizedX = scopeOffsetX + scope.clientWidth - cm_menu.clientWidth;
  if (outOfBoundsOnY) normalizedY =scopeOffsetY + scope.clientHeight - cm_menu.clientHeight;
  return { normalizedX, normalizedY };
};
/* ------- Setup context menu component ------- */
const contextMenu = document.querySelector(".context-menu");
const cm_menu = document.querySelector(".context-menu .cm-menu");
const body = document.querySelector("body");
const cm_actions = document.querySelectorAll(".context-menu .cm-menu>div");
//Edit tile action
cm_actions[0].addEventListener("click",f_edit_tile);
//Open in new tab
cm_actions[1].addEventListener("click",f_open_tile);
//Delete tile action
cm_actions[2].addEventListener("click",f_delete_tile);
/* --------- Event listeners for tiles -------- */
function f_evl_tile(t) {
  //Context menu
  t.addEventListener("contextmenu", (event) => {
    currentSelectedTile=t;
    event.preventDefault();
    const {
      clientX: mouseX,
      clientY: mouseY
    } = event;
    const {
      normalizedX,
      normalizedY
    } = normalizePosition(body,mouseX, mouseY);
    contextMenu.classList.remove("visible");
    cm_menu.style.top = `${normalizedY}px`;
    cm_menu.style.left = `${normalizedX}px`;
    navigator.vibrate(200);
    setTimeout(() => {
      contextMenu.classList.add("visible");
    });
  });
}

/* ----- Add event listeners to all tiles ----- */
function f_evl_gtiles() {
  var items = document.querySelectorAll(".tlg_item:not(.new_tile)");
  Array.from(items).forEach(t => {
    f_evl_tile(t);
  });
}
/* ------------- Setup grid tiles ------------- */
function f_setup_gtiles() {
  tlg = document.getElementById("tlg");
  //Create sortable grid for tiles
  gridT = new Sortable(tlg, {
    fallbackOnBody: true,
    animation: 150,
    delay: 50,
    easing: "cubic-bezier(1, 0, 0, 1)",
    ghostClass: 'hidden',
    direction: "horizontal",
    draggable: ".tlg_item",
    //Prevent the new tile item to be sorted and moved
    filter: ".new_tile",
    onStart: function(evt){
      navigator.vibrate(100);
    },
    onMove: function (evt) {
      return evt.related.className.indexOf('new_tile') === -1;
    },
    onEnd: function(evt){
      f_cache_tl();
    }
  });
  //Add event listeners
  f_evl_gtiles();
  //Tiles parameters from css inline style
  var ntp_tlg = {
    w: parseInt(ntp_bdy.style.getPropertyValue("--tile-w").replace("px", "")),
    m: parseInt(ntp_bdy.style.getPropertyValue("--tile-m").replace("px", "")),
    n: parseInt(ntp_bdy.style.getPropertyValue("--tile-n")),
    r: parseInt(ntp_bdy.style.getPropertyValue("--tile-r").replace("px", "")),
  };
  if (isNaN(ntp_tlg.w)) {
    ntp_tlg = {
      w: 64,
      m: 10,
      n: f_get_ncols(),
      r: 6
    };
    set_gt_css(ntp_tlg);
  }
  //Config setting for number of cols picker
  const in_ncols = new inputNumber(".input-number", (v) => {
    var nCol = parseInt(v),tWidth = 64,tMargin = 10;
    var calc = (nCol * (tWidth + tMargin)) + 1;
    while (calc > device_width) {
      calc = (nCol * (tWidth + tMargin)) + 1;
      if (tMargin > 10) tMargin -= 1;
      else tWidth -= 1;
    }
    ntp_tlg.n = nCol;
    ntp_tlg.m = tMargin;
    ntp_tlg.w = tWidth;
    set_gt_css(ntp_tlg);
  });
  in_ncols.setValue(ntp_tlg.n)
  //Config setting option for tile style
  const t_style = document.getElementsByName("t-style");
  if (ntp_tlg.r == 6) {
    t_style[1].checked = true;
  } else if (ntp_tlg.r == 0) {
    t_style[0].checked = true;
  } else {
    t_style[2].checked = true;
  }
  t_style.forEach((el) => {
    el.addEventListener("input", () => {
      ntp_tlg.r = el.value;
      set_gt_css(ntp_tlg);
    })
  })
  //Cache the tiles grid component
  window.setTimeout(function () {
    f_cache_tl();
  }, 900);
}
//Start setup of tiles 
f_setup_gtiles();

//News Section Widget Config

if (ntp_news.enabled) {
  /* ------- get cached news and load them ------ */
  if(ntp_news.cache != undefined){
    news.innerHTML = ntp_news.cache;
  }

  /* - Event listener delete news item on swipe - */
  function f_astd() {
    var xDown = null;
    var xDiff = null;
    const ntms = document.getElementsByClassName("news_item");
    for (var i = 0; i < ntms.length; i++) {
      ntms[i].addEventListener(mLstnr[2], f_ev_start, {
        passive: true
      });
      ntms[i].addEventListener(mLstnr[0], f_ev_move, {
        passive: true
      });
      ntms[i].addEventListener(mLstnr[1], f_ev_end, {
        passive: true
      });
    }
    function f_ev_start(evt) {
      xDown = (isTD) ? evt.touches[0].clientX : evt.pageX;
    }
    function f_ev_move(evt) {
      var el = (evt.target.closest(".news_item"));
      el.style.transition = "margin 0ms";
      if (!xDown) return;
      var xUp = (isTD) ? evt.touches[0].clientX : evt.pageX;
      xDiff = xDown - xUp;
      if (xDiff < 20 && xDiff > -20) return;
      if (xDiff < -20) el.style.marginLeft = ((Math.abs(xDiff))) + 'px';
      else el.style.marginLeft = "-" + (xDiff) + 'px';
      if (xDiff < 130 && xDiff > -130) el.style.opacity = "1" - ((Math.abs(xDiff)) / 130);
    }
    function f_ev_end(evt) {
      var el = (evt.target.closest(".news_item"));
      if (xDiff > 130 || xDiff < -130) {
        el.parentNode.removeChild(el);
        f_cache_news();
      } else {
        el.style.transition = "margin 600ms";
        el.style.opacity = "1";
        el.style.marginLeft = '4px';
      }
      xDiff = xDown = null;
    }
  }
 
  /* --- Function to reload news, 1=full clean --- */
  function f_news_reset() {
    document.getElementById('news').innerHTML = '';
    ntp_news.items = [];
    ntp_news.cache = "";
    ntp_news.timespan = undefined;
    f_cache_news();
    setTimeout(() => {
      window.location.reload(false)
    }, 1000);
  }
  document.getElementById("reset_news").onclick = () => {
    f_news_reset();
  };
 
 
  const locales = {
    'English | Australia': '?hl=en-AU&gl=AU&ceid=AU:en',
      'English | Botswana': '?hl=en-BW&gl=BW&ceid=BW:en',
      'English | Canada': '?hl=en-CA&gl=CA&ceid=CA:en',
      'English | Ethiopia': '?hl=en-ET&gl=ET&ceid=ET:en',
      'English | Ghana': '?hl=en-GH&gl=GH&ceid=GH:en',
      'English | India': '?hl=en-IN&gl=IN&ceid=IN:en',
      'English | Indonesia': '?hl=en-ID&gl=ID&ceid=ID:en',
      'English | Ireland': '?hl=en-IE&gl=IE&ceid=IE:en',
      'English | Israel': '?hl=en-IL&gl=IL&ceid=IL:en',
      'English | Kenya': '?hl=en-KE&gl=KE&ceid=KE:en',
      'English | Latvia': '?hl=en-LV&gl=LV&ceid=LV:en',
      'English | Malaysia': '?hl=en-MY&gl=MY&ceid=MY:en',
      'English | Namibia': '?hl=en-NA&gl=NA&ceid=NA:en',
      'English | New Zealand': '?hl=en-NZ&gl=NZ&ceid=NZ:en',
      'English | Nigeria': '?hl=en-NG&gl=NG&ceid=NG:en',
      'English | Pakistan': '?hl=en-PK&gl=PK&ceid=PK:en',
      'English | Philippines': '?hl=en-PH&gl=PH&ceid=PH:en',
      'English | Singapore': '?hl=en-SG&gl=SG&ceid=SG:en',
      'English | South Africa': '?hl=en-ZA&gl=ZA&ceid=ZA:en',
      'English | Tanzania': '?hl=en-TZ&gl=TZ&ceid=TZ:en',
      'English | Uganda': '?hl=en-UG&gl=UG&ceid=UG:en',
      'English | United Kingdom': '?hl=en-GB&gl=GB&ceid=GB:en',
      'English | United States': '?hl=en-US&gl=US&ceid=US:en',
      'English | Zimbabwe': '?hl=en-ZW&gl=ZW&ceid=ZW:en',
      'Bahasa Indonesia | Indonesia': '?hl=id&gl=ID&ceid=ID%3Aid',
      'Čeština | Česko': '?hl=cs&gl=CZ&ceid=CZ%3Acs',
      'Deutsch | Deutschland': '?hl=de&gl=DE&ceid=DE%3Ade',
      'Deutsch | Österreich': '?hl=de&gl=AT&ceid=AT%3Ade',
      'Deutsch | Schweiz': '?hl=de&gl=CH&ceid=CH%3Ade',
      'Español | Argentina': '?hl=es-419&gl=AR&ceid=AR%3Aes-419',
      'Español | Chile': '?hl=es-419&gl=CL&ceid=CL%3Aes-419',
      'Español | Colombia': '?hl=es-419&gl=CO&ceid=CO%3Aes-419',
      'Español | Cuba': '?hl=es-419&gl=CU&ceid=CU%3Aes-419',
      'Español | Estados Unidos': '?hl=es-419&gl=US&ceid=US%3Aes-419',
      'Español | México': '?hl=es-419&gl=MX&ceid=MX%3Aes-419',
      'Español | Perú': '?hl=es-419&gl=PE&ceid=PE%3Aes-419',
      'Español | Venezuela': '?hl=es-419&gl=VE&ceid=VE%3Aes-419',
      'Français | Belgique': '?hl=fr&gl=BE&ceid=BE%3Afr',
      'Français | Canada': '?hl=fr-CA&gl=CA&ceid=CA:fr',
      'Français | France': '?hl=fr&gl=FR&ceid=FR%3Afr',
      'Français | Maroc': '?hl=fr&gl=MA&ceid=MA%3Afr',
      'Français | Sénégal': '?hl=fr&gl=SN&ceid=SN%3Afr',
      'Français | Suisse': '?hl=fr&gl=CH&ceid=CH%3Afr',
      'Italiano | Italia': '?hl=it&gl=IT&ceid=IT%3Ait',
      'Latviešu | Latvija': '?hl=lv&gl=LV&ceid=LV%3Alv',
      'Lietuvių | Lietuva': '?hl=lt&gl=LT&ceid=LT%3Alt',
      'Magyar | Magyarország': '?hl=hu&gl=HU&ceid=HU%3Ahu',
      'Nederlands | België': '?hl=nl&gl=BE&ceid=BE%3Anl',
      'Nederlands | Nederland': '?hl=nl&gl=NL&ceid=NL%3Anl',
      'Norsk | Norge': '?hl=no&gl=NO&ceid=NO%3Ano',
      'Polski | Polska': '?hl=pl&gl=PL&ceid=PL%3Apl',
      'Português | Brasil': '?hl=pt-BR&gl=BR&ceid=BR%3Apt-419',
      'Português | Portugal': '?hl=pt-PT&gl=PT&ceid=PT%3Apt-150',
      'Română | România': '?hl=ro&gl=RO&ceid=RO%3Aro',
      'Slovenčina | Slovensko': '?hl=sk&gl=SK&ceid=SK%3Ask',
      'Slovenščina | Slovenija': '?hl=sl&gl=SI&ceid=SI%3Asl',
      'Svenska | Sverige': '?hl=sv&gl=SE&ceid=SE%3Asv',
      'Tiếng Việt | Việt Nam': '?hl=vi&gl=VN&ceid=VN%3Avi',
      'Türkçe | Türkiye': '?hl=tr&gl=TR&ceid=TR%3Atr',
      'Ελληνικά | Ελλάδα': '?hl=el&gl=GR&ceid=GR%3Ael',
      'Български | България': '?hl=bg&gl=BG&ceid=BG%3Abg',
      'Русский | Россия': '?hl=ru&gl=RU&ceid=RU%3Aru',
      'Русский | Украина': '?hl=ru&gl=UA&ceid=UA%3Aru',
      'Српски | Србија': '?hl=sr&gl=RS&ceid=RS%3Asr',
      'Українська | Україна': '?hl=uk&gl=UA&ceid=UA%3Auk',
      'עברית | ישראל': '?hl=he&gl=IL&ceid=IL%3Ahe',
      'العربية | الإمارات العربية المتحدة': '?hl=ar&gl=AE&ceid=AE%3Aar',
      'العربية | المملكة العربية السعودية': '?hl=ar&gl=SA&ceid=SA%3Aar',
      'العربية | لبنان': '?hl=ar&gl=LB&ceid=LB%3Aar',
      'العربية | مصر': '?hl=ar&gl=EG&ceid=EG%3Aar',
      'मराठी | भारत': '?hl=mr&gl=IN&ceid=IN%3Amr',
      'हिन्दी | भारत': '?hl=hi&gl=IN&ceid=IN%3Ahi',
      'বাংলা | বাংলাদেশ': '?hl=bn&gl=BD&ceid=BD%3Abn',
      'தமிழ் | இந்தியா': '?hl=ta&gl=IN&ceid=IN%3Ata',
      'മലയാളം | ഇന്ത്യ': '?hl=ml&gl=IN&ceid=IN%3Aml',
      'తెలుగు | భారతదేశం': '?hl=te&gl=IN&ceid=IN%3Ate',
      'ไทย | ไทย': '?hl=th&gl=TH&ceid=TH%3Ath',
      '中文 | 中国': '?hl=zh-CN&gl=CN&ceid=CN:zh-Hans',
      '中文 | 台灣': '?hl=zh-TW&gl=TW&ceid=TW%3Azh-Hant',
      '中文 | 香港': '?hl=zh-HK&gl=HK&ceid=HK%3Azh-Hant',
      '한국어 | 대한민국': '?hl=ko&gl=KR&ceid=KR%3Ako',
  };

  //Function to create an id for news to track them
  function c_itemnews_ID(title) {
    if (!title) title = "ABCDEF";
    var result = title.toUpperCase().replace(/\b(\S{1,2})\S*/g, '$1').replace(/ /g, '').replace(/[^a-z0-9]/gi, '');
    var tResult = result.substring(0, 8);
    return tResult;
  }
  var newsCounts = 0;
  //Function to add a news item 
  async function add_gnews(el,section) {
    newsCounts++;
    const itemID = c_itemnews_ID(el.title);
    //If the news has been fetched, don't add it
    if ((ntp_news.items && (ntp_news.items).indexOf(itemID) > -1)) return;
    ntp_news.items.push(itemID);
    var innerDiv = document.createElement('a');
    innerDiv.className = 'news_item';
    innerDiv.id = itemID;
    innerDiv.href = el.link;
    if(newsCounts == 1 || newsCounts%4 ==0){
      innerDiv.classList.add("newsBig");
    }
    if (el.image){
      var imgrender = document.createElement("img");
      imgrender.className="news_img";
      innerDiv.prepend(imgrender);
      getBase64Image(imgrender,el.image);
    }
    var source = "<span>"+el.source+"</span>";
    if((el.source_image).indexOf("size") <0)
      source ="";
    var time = '&nbsp;&#183;&nbsp;<span class="news_time" data-time="' + el.datetime + '">' + el.time + '</span></span>';
    if( !el.time)
      time="";
    var dd = document.createElement("div");
    dd.className="news_cnt";
    dd.innerHTML = 
      '<span class="news_attr"><img src="' + el.source_image+ '"/ alt="Article Image">&nbsp;' + source +
       time+
      '</span><div class="news_title">' +
      el.title + '</div>';
    innerDiv.prepend(dd);
    section.appendChild(innerDiv);
  }

  //Create news Loader with options
  var gNews = new newsLoader({lang_country: ntp_news.lang_country,filters: ntp_news.filters,topics:ntp_news.topics})
  console.log('News locale is ' + ntp_news.lang_country);
  //Set topics settings
  const news_topics = document.getElementsByName("news_topics");
  (ntp_news.topics).forEach(t => {
    var c=document.querySelector(".news_topic_chk input[value="+t+"]");
    if(c)
      c.checked = true;
  });
  const timetoreloadoptions={
    'Auto':'auto',
    '30m':'0.5',
    '1h':'1',
    '3h':'3',
    '6h':'6',
    '12h':'12',
    '24h':'24',
    'Manual':'manual'
  }
  //Set topics settings
  const news_timetoreload = document.querySelector("#news_timetoreload");
  if (news_timetoreload.options.length < 7) {
    for (var el in timetoreloadoptions) {
      var opt = document.createElement('option');
      opt.appendChild(document.createTextNode(el));
      opt.value = timetoreloadoptions[el];
      news_timetoreload.appendChild(opt);
      if (timetoreloadoptions[el] == ntp_news.timeToReload) opt.selected = true;
    }
  }
  
  //Set location settings
  const news_loc = document.getElementById("news_loc");
  if (news_loc.options.length < 20) {
    for (var el in locales) {
      var opt = document.createElement('option');
      opt.appendChild(document.createTextNode(el));
      opt.value = locales[el];
      news_loc.appendChild(opt);
      if (locales[el] == ntp_news.lang_country) opt.selected = true;
    }
  }
  //Set filters news settings
  const news_filter = document.getElementById("news_filters");
  news_filter.value = ntp_news.filters;

  document.addEventListener("close",()=>{
    var news_reload_type=0;
    var t = document.getElementsByName("news_topics");
    var topics = [];
    for (var checkbox of t) {  
      if (checkbox.checked)  
        topics.push(checkbox.value); 
    } 
    gNews.setTopics(topics);
    gNews.setFilter(news_filter.value);
    gNews.setLocation(news_loc.value);
    if(ntp_news.filters != news_filter.value)
      news_reload_type = 1; // Soft reload new news 
    if(ntp_news.lang_country != news_loc.value || JSON.stringify(ntp_news.topics) != JSON.stringify(topics)){
      news_reload_type = 2;//Remove all news and reload them 
      news.innerHTML = "";
      ntp_news.items=[];
    }
    ntp_news.timeToReload = news_timetoreload.value;
    ntp_news.topics= topics;
    ntp_news.filters=news_filter.value;
    ntp_news.lang_country = news_loc.value;
    //Save and cache 
    f_cache_news();
    if(news_reload_type==2){
      refresh_or_load_news();
    }
  })

  function render_news(r,t){
    var section = document.querySelector("#ns_"+t);
    if(!section){
      section =document.createElement("section");
      section.id = "ns_"+t;
      section.innerHTML = "<div class='news_showMore'><button>Show More...</button></div>"+
      "<span class='news_topic'>"+t+"</span>"+
      "<div class='news_wrapper'></div>";
      news.append(section);
    }
    if(r)
      r.forEach(el=>{
        if(el.title && el.source)
          add_gnews(el,section.querySelector(".news_wrapper"))
      })
  }
  /* -- Check if 30h passed and clean the news -- */
  function should_refresh_news() {
    const date1 = new Date();
    const date2 = new Date(ntp_news.timespan);
    if (ntp_news.timespan == undefined ) {
      ntp_news.timespan = date1;
      f_cache_news();
      return true;
    }
    const diffTime = Math.abs(date2 - date1);
    const diffH = Math.ceil(diffTime / (1000 * 60));
    console.log("🚀 ~ file: local_ntp.js ~ line 761 ~ should_refresh_news ~ diffH", diffH)
    var ttr = parseFloat(ntp_news.timeToReload)*60;
    console.log("🚀 ~ file: local_ntp.js ~ line 763 ~ should_refresh_news ~ ttr", ttr)
    
    if (diffH < ttr) return false;
    ntp_news.timespan = date1;
    f_cache_news();
    return true;
  }
  //Function to load news 
  async function loadGNews() {
    return await gNews.get()
      .then(r =>{
        console.log(r)
        r.forEach(n => {
            render_news(n.items,n.topic);
        });
      });
  }
 const loader=document.getElementById("loader");
    function refresh_or_load_news(){
      loader.classList.add("loading");
        //preconnectTo(newsServer);
        loadGNews().then(r=>{
          window.setTimeout(function () {
            //remove loading 
            loader.classList.remove("loading");
            //Cache news fetched
            f_cache_news();
            //Add event listeners
            news_event_listeners();
          }, 1000);
        });
    }

if(should_refresh_news()){
  refresh_or_load_news();
}else{
  loader.classList.remove("loading");
}
 //TODO : Launch after news are rendered
 function check_show_more(w){
    var pe = w.querySelector(".news_showMore");
    var npv = w.querySelectorAll(".news_item");
    if( npv.length < 5){
      w.style.maxHeight = "unset";
      pe.style.display="none";
    }else{
      w.style.maxHeight = "700px";
      pe.style.display="flex";
    }
    if(npv.length == 0 && !w.querySelector(".no_news")){
      var d = document.createElement("div");
      d.className="no_news";
      d.innerHTML= '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 997.861 450.808">\n'+
      '      <path fill="#f2f2f2" d="M871.992 181.558h30.159v104.398h-30.159z" />\n'+
      '      <path fill="#f2f2f2"\n'+
      '          d="M922.068 266.317l-73.353-87.265-147.24 1.346-89.319 86.998 1.805 1.16h-.645v180.957h308.555V268.556l.197-2.239z" />\n'+
      '      <path fill="#e6e6e6" d="M848.792 179.238l-91.638 107.436v162.839h164.717V266.236l-73.079-86.998z" />\n'+
      '      <path fill="#3f3d56" d="M823.272 359.461h33.639v29.733h-33.639zM823.272 307.996h33.639v29.262h-33.639z" />\n'+
      '      <path fill="#fff"\n'+
      '          d="M823.272 359.461h33.639v29.733h-33.639zM823.272 307.996h33.639v29.262h-33.639zM673.777 351.571h33.639v29.733h-33.639zM673.777 300.106h33.639v29.262h-33.639z" />\n'+
      '      <path fill="#f2f2f2" d="M633.992 181.558h30.159v104.398h-30.159z" />\n'+
      '      <path fill="#f2f2f2"\n'+
      '          d="M684.068 266.317l-73.353-87.265-147.24 1.346-89.319 86.998 1.805 1.16h-.645v180.957h308.555V268.556l.197-2.239z" />\n'+
      '      <path fill="#e6e6e6" d="M610.792 179.238l-91.638 107.436v162.839h164.717V266.236l-73.079-86.998z" />\n'+
      '      <path fill="#3f3d56" d="M585.272 359.461h33.639v29.733h-33.639zM585.272 307.996h33.639v29.262h-33.639z" />\n'+
      '      <path fill="#fff"\n'+
      '          d="M585.272 359.461h33.639v29.733h-33.639zM585.272 307.996h33.639v29.262h-33.639zM435.777 351.571h33.639v29.733h-33.639zM435.777 300.106h33.639v29.262h-33.639z" />\n'+
      '      <path fill="#f2f2f2" d="M380.154 91.46h40.3v139.501h-40.3z" />\n'+
      '      <path fill="#f2f2f2"\n'+
      '          d="M447.068 204.718L349.051 88.112 152.302 89.91 32.951 206.161l2.411 1.55h-.861v241.802h412.303V207.711l.264-2.993z" />\n'+
      '      <path fill="#e6e6e6" d="M349.153 88.36L226.702 231.921v217.592h220.102V204.611L349.153 88.36z" />\n'+
      '      <path fill="#3f3d56" d="M315.053 329.181h44.95v39.731h-44.95zM315.053 260.412h44.95v39.101h-44.95z" />\n'+
      '      <path fill="#fff"\n'+
      '          d="M315.053 329.181h44.95v39.731h-44.95zM315.053 260.412h44.95v39.101h-44.95zM115.29 318.639h44.95v39.731h-44.95zM115.29 249.869h44.95v39.101h-44.95z" />\n'+
      '      <path fill="#3f3d56" d="M0 448.62h963.951v2H0z" />\n'+
      '      <ellipse cx="151.872" cy="352.472" rx="29.099" ry="59.374" fill="#3f3d56" />\n'+
      '      <path d="M154.56 449.658c-11.655-69.925-.118-139.598 0-140.293l2.267.384c-.117.692-11.588 69.999 0 139.532z"\n'+
      '          fill="var(--primary)" />\n'+
      '      <path fill="var(--primary)"\n'+
      '          d="M151.178 353.78l26.313-14.075 1.085 2.028-26.313 14.074zM123.406 348.783l1.085-2.028 26.31 14.083-1.085 2.027z" />\n'+
      '      <ellipse cx="81.955" cy="260.903" rx="56.915" ry="116.129" fill="var(--primary)" />\n'+
      '      <path d="M88.295 450.808c-22.765-136.585-.23-272.673 0-274.032l2.267.384c-.23 1.356-22.698 137.077 0 273.27z"\n'+
      '          fill="#3f3d56" />\n'+
      '      <path fill="#3f3d56"\n'+
      '          d="M81.114 264.43l51.468-27.53 1.085 2.029-51.468 27.529zM26.797 252.72l1.086-2.029 51.46 27.544-1.085 2.028z" />\n'+
      '      <ellipse cx="216.754" cy="191.008" rx="77.883" ry="158.914" fill="var(--primary)" />\n'+
      '      <path d="M225.847 450.808c-31.14-186.837-.315-372.992 0-374.85l2.267.384c-.314 1.855-31.073 187.644 0 374.089z"\n'+
      '          fill="#3f3d56" />\n'+
      '      <path fill="#3f3d56"\n'+
      '          d="M215.803 196.207l70.43-37.671 1.084 2.028-70.429 37.67zM141.474 179.434l1.085-2.027 70.42 37.69-1.086 2.027z" />\n'+
      '      <ellipse cx="871.029" cy="352.472" rx="29.099" ry="59.374" fill="#3f3d56" />\n'+
      '      <path d="M868.342 449.658c11.655-69.925.117-139.598 0-140.293l-2.267.384c.117.692 11.588 69.999-.001 139.532z"\n'+
      '          fill="var(--primary)" />\n'+
      '      <path fill="var(--primary)"\n'+
      '          d="M844.325 341.733l1.085-2.029 26.313 14.075-1.085 2.028zM872.1 360.838l26.31-14.083 1.085 2.028-26.31 14.082z" />\n'+
      '      <ellipse cx="940.946" cy="260.903" rx="56.915" ry="116.129" fill="var(--primary)" />\n'+
      '      <path d="M934.607 450.808c22.765-136.585.23-272.673 0-274.032l-2.268.384c.23 1.356 22.699 137.077 0 273.27z"\n'+
      '          fill="#3f3d56" />\n'+
      '      <path fill="#3f3d56"\n'+
      '          d="M889.234 238.928l1.085-2.028 51.468 27.53-1.085 2.028zM943.559 278.235l51.46-27.544 1.086 2.028-51.46 27.544z" />\n'+
      '      <ellipse cx="806.148" cy="191.008" rx="77.883" ry="158.914" fill="var(--primary)" />\n'+
      '      <path d="M797.055 450.808c31.14-186.837.314-372.992 0-374.85l-2.268.384c.315 1.855 31.074 187.644 0 374.089z"\n'+
      '          fill="#3f3d56" />\n'+
      '      <path fill="#3f3d56"\n'+
      '          d="M735.584 160.563l1.085-2.028 70.429 37.671-1.085 2.028zM809.923 215.097l70.42-37.69 1.084 2.028-70.419 37.69zM589.604 101.466l9.206-7.363c-7.151-.789-10.09 3.111-11.292 6.198-5.587-2.32-11.67.72-11.67.72l18.42 6.688a13.938 13.938 0 00-4.664-6.243zM364.604 36.466l9.206-7.363c-7.151-.789-10.09 3.111-11.292 6.198-5.587-2.32-11.67.72-11.67.72l18.42 6.688a13.938 13.938 0 00-4.664-6.243zM731.604 7.466L740.81.103c-7.151-.789-10.09 3.111-11.292 6.198-5.587-2.32-11.67.72-11.67.72l18.42 6.688a13.938 13.938 0 00-4.664-6.243zM750.19 437.052a13.918 13.918 0 00-6.969 1.87 14.982 14.982 0 00-25.03 11.13h45.95a13.99 13.99 0 00-13.95-13zM283.19 437.052a13.918 13.918 0 00-6.969 1.87 14.982 14.982 0 00-25.03 11.13h45.95a13.99 13.99 0 00-13.95-13zM522.19 437.052a13.918 13.918 0 00-6.969 1.87 14.982 14.982 0 00-25.03 11.13h45.95a13.99 13.99 0 00-13.95-13zM471.759 404.228H339.191v4.276h20.675v40.626h4.276v-40.626h80.527v40.626h4.277v-40.626h22.813v-4.276zM339.452 391.434H472.02v4.276H339.452zM339.452 380.743H472.02v4.276H339.452zM339.452 370.052H472.02v4.276H339.452zM678.759 404.228H546.191v4.276h20.675v40.626h4.276v-40.626h80.527v40.626h4.277v-40.626h22.813v-4.276zM546.452 391.434H679.02v4.276H546.452zM546.452 380.743H679.02v4.276H546.452zM546.452 370.052H679.02v4.276H546.452z" />\n'+
      '      </svg>\n'+
      '      <h3>No more news there </h3>';;
      w.querySelector(".news_wrapper").append(d);
    }
 }

 function news_event_listeners(){
  //Add swipe to delete on news items
  f_astd();
  document.querySelectorAll("#news>section").forEach((w)=>{
      check_show_more(w);
      var btn= w.querySelector(".news_showMore>button")
      btn.addEventListener("click",()=>{
        var pe = w.querySelector(".news_showMore");
        w.style.maxHeight = "unset";
        pe.style.display="none";
      })
  })
 }
 document.addEventListener("DOMContentLoaded", () => {
   news_event_listeners();
 });
}
//End of News Section Widget Config
document.body.addEventListener("click", (e) => {
  // ? close the menu if the user clicks outside of it
  if (e.target.offsetParent != contextMenu) {
    contextMenu.classList.remove("visible");
  }
});