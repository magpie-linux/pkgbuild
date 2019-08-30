if(localStorage.getItem("search") === null){localStorage.setItem("search","ggl")}function hide(div){document.getElementsByClassName(div)[0].style.display = 'none'}function show(div){document.getElementsByClassName(div)[0].style.display = 'initial'}function setText(div,text){document.getElementById(div).innerHTML = text}function appendText(div,text){document.getElementById(div).append(text)}function setLocale(){var locale = navigator.language;if(!locales.hasOwnProperty(locale)){locale = locale.substring(0,2);if(!locales.hasOwnProperty(locale)){locale = "en"}}var localeDict = locales[locale];appendText("link-about",localeDict.discover);appendText("link-community",localeDict.community);appendText("link-shop",localeDict.shop);appendText("link-chat",localeDict.chat);appendText("link-donate",localeDict.donate);document.getElementById("ggl-searchbox").placeholder = localeDict.searchbox;document.getElementById("ddg-searchbox").placeholder = localeDict.searchbox;document.getElementById("darkmode").title = localeDict.darkmode}function setSearch(engine){localStorage.setItem("search",engine);getSearch()}function getSearch(){engine = localStorage.getItem("search");hide("ggl");hide("ddg");if(engine == "ddg"){show("ddg");document.getElementById("ddg").checked = true;document.getElementById("ddg-searchbox").focus()}else{show("ggl");document.getElementById("ggl").checked = true;document.getElementById("ggl-searchbox").focus()}}function setDarkMode(state){if(state === true){document.body.className = "dark"}else{document.body.className = ""}}function toggleDarkMode(){if(localStorage.getItem("darkmode") === "true"){localStorage.setItem("darkmode","false");setDarkMode(false)}else{localStorage.setItem("darkmode","true");setDarkMode(true)}}setTimeout(function(){document.body.setAttribute("style","transition: background-color 0.2s linear; -moz-transition: none;")},500);if(localStorage.getItem("darkmode") === "true"){setDarkMode(true)}getSearch();setLocale();