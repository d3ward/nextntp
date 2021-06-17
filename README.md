
# Next NTP

*Mobile first New Tab Page.Feature rich and higly customizable.*

You can this NTP online from any browser ( Desktop/Mobile) at https://d3ward.github.io/ntp/local_ntp
This project is bundled in Kiwi Browser ( Android) 

The  original ntp  was made up of two part:
 - A list of most visited websites, ordered on a grid of tiles
 - A list of recent news

This fork has removed the two parts and created a "modular" ones that we can call widgets:
- Search Bar
- Tiles Grid
- Weather
- News Section
- Tabs 


The main goal is to provide all the options to customize anything.

Settings and widgets are stored with localStorage API.

Once the page is loaded, the pre-rendered version of all enabled widgets is instantly displayed on screen 

Some widget have limited functionality ( like access the most visited pages,history,downloaded files etc.)
Fully widgets working/support is gradually implemented into Kiwi Browser.

Favicons are retrieved from 
- Kiwi Browser's server (https://logos.kiwibrowser.com/cnn.com - No analytics, no logs, no identifier to send).
- or user can add custom links for favicons

News are fetched via a proxy server from Kiwi Browser


For security reasons, the new tab page should only establish connection to HTTPS servers.
CORS (loading requests from remote servers), XHR and CSP policies can be adapted if you need, feel free to ask on Discord (or open an issue).


You can directly try this fork of the new tab page online by going with your favorite browser (Chrome or Kiwi Browser) on .html 

Forked Repo - https://kiwibrowser.github.io/ntp/local_ntp.html 

Libraries included in this project 
 - (Sortable 1.10.0-rc3)[https://sortablejs.github.io/Sortable/] (MIT License)[https://github.com/SortableJS/Sortable/blob/master/LICENSE]  | JavaScript library for reorderable drag-and-drop lists 
 - (Croppie)[http://foliotek.github.io/Croppie/] | (MIT License)[https://github.com/Foliotek/Croppie/blob/master/LICENSE] A Javascript Image Cropper  
 - (Vanilla-Picker v2.10.1)[https://vanilla-picker.js.org] | (ISC License)[https://github.com/Sphinxxxx/vanilla-picker/blob/master/LICENSE.md] A simple, easy to use vanilla JS color picker with alpha selection.
Copyright 2019 Geometry OU / Kiwi Browser
Licensed under https://creativecommons.org/licenses/by-nc-sa/4.0/

*__Made with <3 for Kiwi Browser__*

