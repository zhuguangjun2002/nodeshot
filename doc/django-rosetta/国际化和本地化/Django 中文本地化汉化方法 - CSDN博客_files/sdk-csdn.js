(function(window,document/*,undefined*/){
  function randomStr(len){
    var sb="";var dict="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
    for(var i=0;i<len;++i)sb+=dict.charAt(Math.random()*dict.length|0);return sb;
  }
  function hrTime(x){
    var date=new Date(x*1000),it;
    var MM=(it=date.getMonth()+1)<10?'0'+it:it;
    var dd=(it=date.getDay())<10?'0'+it:it;
    var HH=(it=date.getHours())<10?'0'+it:it;
    var mm=(it=date.getMinutes())<10?'0'+it:it;
    var ss=(it=date.getSeconds())<10?'0'+it:it;
    return date.getFullYear()+'-'+MM+'-'+dd+' '+HH+':'+mm+':'+ss;
  }
  function action(action,itemPfx,itemID,context){
    var url=host+"/action/api/log?requestID="+requestID+"&clientToken="+clientToken,ref={
      "requestID":requestID,"actionTime":Date.now(),"action":action,"sceneId":sceneID,
      "userId":userID,"itemId":itemID,"context":context,"itemSetId":itemPfx,
    };var xhr=new XMLHttpRequest();
    xhr.open("POST",url);xhr.setRequestHeader("Content-Type","application/json");
    xhr.send(JSON.stringify({"date":hrTime(ref.actionTime),"actions":[ref]}));
  }

  var k="paradigmLocalStorageUserIdKey";var clientToken="1f9d3d10b0ab404e86c2e61a935d3888";
  var requestID=randomStr(8);var sceneID=34;var userID=localStorage[k]||(localStorage[k]=randomStr(10));
  var host="https://nbrecsys.4paradigm.com";var seedItemID=(location.href.match(/\b\d{4,}\b/)||[])[0];
  var url=host+"/api/v0/recom/recall?requestID="+requestID+"&sceneID="+sceneID+"&userID="+userID;
  var req="{itemID:"+seedItemID+"}";//console.log("4paradigmRequest: "+url+" "+req);
  var itemPfxBlog=42,itemPfxC=39;

  action("detailPageShow",itemPfxBlog,seedItemID);var xhrRecall=new XMLHttpRequest();xhrRecall.open("POST",url);
  xhrRecall.addEventListener("load",function(){
    var raw=xhrRecall.responseText;var json=JSON.parse(raw);var item=json[0];if(!item)throw raw;
    var timer=setInterval(function renderInit(){
      var marker,divs=document.querySelectorAll("div.recommend-item-box");
      if(!(marker=divs[1]))return;clearInterval(timer); // TODO delay to next render phase
      var div=document.createElement("div");div.className="recommend-item-box";div.style.cursor="pointer";
      div.innerHTML="<img src='' class='p4pfx_img'><h4 class='p4pfx_title text-truncate'></h4><p class='content'><a class='p4pfx_abs'></a></p><div class='p4pfx_extra info-box'></div>";
      var ex="广告";if(item["category_id"])ex+=" | "+item["category_id"];if(item["publisher_id"])ex+=" | "+item["publisher_id"];
      var eTitle;(eTitle=div.querySelector(".p4pfx_title")).innerText=item.title;eTitle.style.display="inline-block";
      var eAbs;(eAbs=div.querySelector(".p4pfx_abs"))/*.innerText=item.content*/;eAbs.style.display="inline-block";
      var eExtra;(eExtra=div.querySelector(".p4pfx_extra")).innerText=ex;eExtra.style.display="inline-block";
      var eImg;(eImg=div.querySelector(".p4pfx_img")).src=item["cover_url"]; // eImg.style="xxx" won't work in IE
      eImg.style.width="120px";eImg.style.height="90px";eImg.style.float="right";

      window.addEventListener("resize",resize);function resize(){
        var style=getComputedStyle(div);var width=parseFloat(style.width)-parseFloat(style.paddingLeft)-parseFloat(style.paddingRight);
        eTitle.style.width=(width-eImg.offsetWidth)+"px";eAbs.style.width=(width-eImg.offsetWidth)+"px";
      }
      window.addEventListener("scroll",scroll);function scroll(){
        var rect=div.getBoundingClientRect();var x=(rect.left+rect.right)/2,y=(rect.top+rect.bottom)/2;
        if(x>=0&&x<=document.documentElement.clientWidth&&y>=0&&y<=document.documentElement.clientHeight){
          action("show",itemPfxC,item["item_id"],item["context"]);window.removeEventListener("scroll",scroll);
        }
      }

      marker.insertAdjacentElement("afterend",div);div.addEventListener("click",function(){
        action("detailPageShow",itemPfxC,item["item_id"],item["context"]);
        var sep=item.url.indexOf('?')<0?'?':'&'; // TODO add before hash(#)
        window.open(item.url+sep+"utm_source=blogre1","_blank");
      });

      setTimeout(resize);setTimeout(scroll);
    });
  });xhrRecall.send(req);
})(window,document);