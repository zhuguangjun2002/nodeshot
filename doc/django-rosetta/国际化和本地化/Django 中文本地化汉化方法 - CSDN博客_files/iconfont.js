(function(window){var svgSprite='<svg><symbol id="sousuo" viewBox="0 0 1024 1024"><path d="M768.92565 687.127141l0.879367 0.867797 237.255593 237.255593c22.585853 22.585853 22.585853 59.212655 0 81.804294-22.597424 22.591638-59.224226 22.591638-81.815864 0l-237.255593-237.255593c-0.289266-0.289266-0.578531-0.578531-0.862012-0.879368-71.917198 54.746395-161.682079 87.242486-259.043073 87.242486C191.661559 856.168136 0 664.512362 0 428.089853S191.661559 0 428.084068 0c236.422508 0 428.084068 191.661559 428.084068 428.084068 0 97.360994-32.501876 187.125876-87.242486 259.043073z m-340.841582 53.340565c172.523751 0 312.383638-139.859887 312.383638-312.383638s-139.859887-312.383638-312.383638-312.383639-312.383638 139.859887-312.383639 312.383639 139.859887 312.383638 312.383639 312.383638z"  ></path></symbol><symbol id="gonggong_csdnlogo_" viewBox="0 0 4096 1024"><path d="M1081.536 723.584c74.656 27.296 230.368 54.432 356.288 54.432 135.68 0 211.2-37.568 217.248-95.872 5.504-53.184-50.048-60.384-203.264-96.672-211.712-51.904-346.784-132.256-333.536-260.672 15.392-149.088 214.912-261.76 521.056-261.76 149.248 0 293.952 10.528 368.928 35.104l-25.728 188c-48.672-16.928-234.976-40.448-360.992-40.448-127.776 0-193.92 40.192-198.496 84.256-5.76 55.776 60.64 58.368 226.624 102.56 224.768 57.024 323.04 137.312 310.176 261.792-15.072 146.432-194.592 270.944-553.056 270.944-149.216 0-277.824-27.232-348.672-54.464l23.392-187.168zM3187.936 109.792c816.16-153.888 886.592 122.624 861.376 367.296l-47.52 452.64h-259.072l43.36-412.832c9.376-90.912 67.744-268.736-214.048-262.08-97.536 2.368-145.888 15.744-145.888 15.744s-8.48 109.856-18.752 191.04l-49.12 468.128h-254.08l50.432-461.376 33.312-358.56z m-1030.848-21.408c58.24-6.336 147.712-12.768 270.848-12.768 205.568 0 371.776 35.776 474.688 111.008 92.416 70.144 153.92 183.712 136.896 348.256-15.712 153.12-95.328 260.32-211.232 326.624-106.048 62.528-239.68 89.248-440.64 89.248-118.496 0-231.52-6.4-317.472-19.136L2157.12 88.384z m169.856 675.616c19.808 3.84 45.856 7.648 97.216 7.648 205.632 0 350.624-101.056 365.184-243.136 21.152-205.376-107.456-277.184-324.128-275.936-28.064 0-67.072 0-87.712 3.776l-50.592 507.616z" fill="#262626" ></path><path d="M934.176 936.8c-48.736 16.896-149.696 28.416-290.752 28.416-405.632 0-624.576-190.4-598.688-442.112C75.712 223.2 400.064 54.464 755.2 54.464c137.536 0 218.528 11.072 294.4 29.632l-24.352 202.048c-50.464-16.992-168.736-32.608-264.48-32.608-208.96 0-386.432 62.24-406.784 259.136-18.144 176.064 106.432 260.224 341.504 260.224 81.824 0 202.464-11.712 258.24-28.64l-19.552 192.544z" fill="#CA0C16" ></path></symbol><symbol id="gonggong_csdnlogodanse_" viewBox="0 0 4096 1024"><path d="M1081.536 723.584c74.656 27.296 230.368 54.432 356.288 54.432 135.68 0 211.2-37.568 217.248-95.872 5.504-53.184-50.048-60.384-203.264-96.672-211.712-51.904-346.784-132.256-333.536-260.672 15.392-149.088 214.912-261.76 521.056-261.76 149.248 0 293.952 10.528 368.928 35.104l-25.728 188c-48.672-16.928-234.976-40.448-360.992-40.448-127.776 0-193.92 40.192-198.496 84.256-5.76 55.776 60.64 58.368 226.624 102.56 224.768 57.024 323.04 137.312 310.176 261.792-15.072 146.432-194.592 270.944-553.056 270.944-149.216 0-277.824-27.232-348.672-54.464l23.392-187.168zM3187.936 109.792c816.16-153.888 886.592 122.624 861.376 367.296l-47.52 452.64h-259.072l43.36-412.832c9.376-90.912 67.744-268.736-214.048-262.08-97.536 2.368-145.888 15.744-145.888 15.744s-8.48 109.856-18.752 191.04l-49.12 468.128h-254.08l50.432-461.376 33.312-358.56z m-1030.848-21.408c58.24-6.336 147.712-12.768 270.848-12.768 205.568 0 371.776 35.776 474.688 111.008 92.416 70.144 153.92 183.712 136.896 348.256-15.712 153.12-95.328 260.32-211.232 326.624-106.048 62.528-239.68 89.248-440.64 89.248-118.496 0-231.52-6.4-317.472-19.136L2157.12 88.384z m169.856 675.616c19.808 3.84 45.856 7.648 97.216 7.648 205.632 0 350.624-101.056 365.184-243.136 21.152-205.376-107.456-277.184-324.128-275.936-28.064 0-67.072 0-87.712 3.776l-50.592 507.616z m-1392.768 172.8c-48.736 16.896-149.696 28.416-290.752 28.416-405.632 0-624.576-190.4-598.688-442.112C75.712 223.2 400.064 54.464 755.2 54.464c137.536 0 218.528 11.072 294.4 29.632l-24.352 202.048c-50.464-16.992-168.736-32.608-264.48-32.608-208.96 0-386.432 62.24-406.784 259.136-18.144 176.064 106.432 260.224 341.504 260.224 81.824 0 202.464-11.712 258.24-28.64l-19.552 192.544z"  ></path></symbol><symbol id="xieboke1" viewBox="0 0 1024 1024"><path d="M263.66464 665.6H783.36a25.6 25.6 0 1 1 0 51.2H230.4a25.48736 25.48736 0 0 1-15.4624-5.1968c-13.00992-7.4496-12.5952-21.77536-10.3424-28.9024 54.62528-155.136 141.62432-277.248 240.92672-368.09728 22.272-20.3776 54.1184-36.3776 80.09728-42.50624 108.88704-25.69728 180.0192-22.784 251.19232-21.69344a790.20544 790.20544 0 0 1-45.14816 47.8464c-2.52416 2.46272-129.8688 15.13984-148.23936 35.77344-18.37056 20.6336 102.1952 5.61152 98.7136 8.448a742.92224 742.92224 0 0 1-55.14752 40.97024c-3.55328 2.38592-117.86752-0.27648-137.69728 21.15584-19.82976 21.43232 80.36352 13.78304 75.76064 16.26112-53.1456 28.60032-99.2768 49.1264-167.68512 71.31136-45.48608 14.7456-96.0512 101.1712-115.56864 136.09984-8.43264 15.08352-14.0288 27.15648-18.13504 37.32992zM512 1024C229.23264 1024 0 794.76736 0 512S229.23264 0 512 0s512 229.23264 512 512-229.23264 512-512 512z m0-51.2c254.49472 0 460.8-206.30528 460.8-460.8s-206.30528-460.8-460.8-460.8-460.8 206.30528-460.8 460.8 206.30528 460.8 460.8 460.8z"  ></path></symbol><symbol id="gitchat" viewBox="0 0 1024 1024"><path d="M512 1024C229.23264 1024 0 794.76736 0 512S229.23264 0 512 0s512 229.23264 512 512-229.23264 512-512 512z m0-51.2c254.49472 0 460.8-206.30528 460.8-460.8s-206.30528-460.8-460.8-460.8-460.8 206.30528-460.8 460.8 206.30528 460.8 460.8 460.8z m204.8-343.81312h-58.5216v-87.77216H453.48864v-58.5216H716.8v146.29376z m-351.0784 29.27104v0.02048h263.30624V716.8H307.2V307.2h409.6v117.0176h-58.5216v-58.5216H365.7216v292.5568z m292.57728 0h58.5216v58.5216h-58.5216v-58.5216z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)