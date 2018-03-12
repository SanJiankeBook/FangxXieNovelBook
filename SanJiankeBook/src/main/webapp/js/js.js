(function() {
    var siteConfig = {
        "channelList": [],
        "siteId": "3677118700255927857",
        "isDemo": false,
        "resultUrl": "",
        "settings": {
            "customChannel": [],
            "useSetting": true,
            "inurl": "",
            "id": "127097",
            "useZone": false,
            "cseUrl": null,
            "inputPlaceholder": "\u8bf7\u8f93\u5165\u4e66\u540d\u6216\u4f5c\u8005",
            "inputSubmitValue": "\u641c\u7d22",
            "templateId": "1",
            "is_mobile": "0",
            "useInputSubmitMagnifier": false,
            "buttonType": 0,
            "useSug": true,
            "sugType": "novel",
            "sugNum": 10,
            "sugListOffset": {
                "left": 0,
                "top": 0
            },
            "useChannels": false,
            "css": {
                ".bdcs-search-form-input-wrap": [],
                ".bdcs-search-form-input-notspan": {
                    "margin-left": "0px",
                    "font-family": "Arial,SimSun,sans-serif",
                    "color": "#000000",
                    "font-size": "14px"
                },
                ".bdcs-search-form-input .icon-nofocus": {
                    "left": "",
                    "right": "",
                    "top": "",
                    "height": "",
                    "width": ""
                },
                ".bdcs-search": {
                    "width": "428px",
                    "height": "36px",
                    "overflow": "visible",
                    "border-color": "#ffffff",
                    "border-radius": "0px",
                    "border-width": "0px",
                    "box-shadow": "none",
                    "background-color": "none"
                },
                ".bdcs-search-form-input": {
                    "border-color": "#a6a6a6",
                    "margin-right": "10px",
                    "width": "318px",
                    "height": "34px",
                    "line-height": "34px",
                    "font-family": "Arial,SimSun,sans-serif",
                    "color": "#000000",
                    "font-size": "14px",
                    "border-radius": "0px",
                    "background-color": "#FFFFFF"
                },
                ".bdcs-search-form-input:focus": {
                    "border-color": "#f79646"
                },
                ".bdcs-search-form-submit-wrap": [],
                ".bdcs-search-form-submit": {
                    "border-color": "#a6a6a6",
                    "height": "34px",
                    "width": "96px",
                    "background-color": "#f5f5f5",
                    "color": "#000000",
                    "font-family": "Arial,SimSun,sans-serif",
                    "font-size": "14px",
                    "border-radius": "0px"
                },
                ".bdcs-search-sug-list": {
                    "width": "px"
                },
                ".bdcs-search-sug-list-item": {
                    "height": "28px",
                    "line-height": "28px",
                    "font-family": "Arial,SimSun,sans-serif",
                    "font-size": "14px"
                },
                ".bdcs-search-sug-list-item-value": {
                    "color": "#000000"
                }
            }
        },
        "hotWords": [],
        "isUrlEmpty": 0,
        "isGbk": false,
        "settings_2": {
            "useSliding": 0
        },
        "settings_3": {
            "usePopup": 0
        },
        "settings_4": {
            "useFloat": 0
        },
        "settings_5": {
            "useCustom": 0
        }
    };
    siteConfig.logId = '3678683514';
    var bdcsTpl = '<meta http-equiv="x-ua-compatible" content="IE=9" >\n<%if(settings.useSetting){%>\r\n<!-- 嵌入式 -->\r\n<div class="bdcs-main bdcs-clearfix" id="default-searchbox">\r\n    <div class="bdcs-search bdcs-clearfix" id="bdcs-search-inline">\r\n        <form action="<%=resultUrl%>" method="get" target="<%=resultTarget%>" class="bdcs-search-form" autocomplete="off" id="bdcs-search-form">\r\n            <input type="hidden" name="s" value="<%=siteId%>" />\r\n            <input type="hidden" name="entry" value="1" />\r\n            <% var charset = document.charset || document.characterSet; %>\r\n            <% if(isGbk || charset.toLowerCase() == \'gbk\' || charset.toLowerCase() == \'gb2312\') { %>\r\n                <input type="hidden" name="ie" value="gbk" />\r\n            <% } %>\r\n\r\n            <% if(settings.inurl) {%>\r\n                <input type="hidden" name="inurl" value="<%=settings.inurl%>" />\r\n            <% } %>\r\n            <% if(channelList[0]) {%>\r\n                <input type="hidden" name="cid" value="<%=channelList[0]%>" />\r\n            <% } %>\r\n            <% if(settings.useChannels && settings.customChannel.length != 0) {%>\r\n            <div class="default-channel-meun" id="default-channel-meun">\r\n                <div class="default-channel-current"><span id="default-channel-curr"><%= settings.customChannel[0].name %></span><i></i></div>\r\n\r\n                <input type="hidden" name="nsid" value="<%= settings.customChannel[0].key %>" id="default-channel-nsid"/>\r\n            </div><% } %><input type="text" name="q" class="bdcs-search-form-input" id="bdcs-search-form-input" placeholder="<%= (settings.useSetting ? window.bdcs.utils.encodeHTML(settings.inputPlaceholder) : \'\')%>" />\r\n            <input type="submit" class="bdcs-search-form-submit <%= (settings.useSetting && settings.useInputSubmitMagnifier ? "bdcs-search-form-submit-magnifier" : "") %>" id="bdcs-search-form-submit" value="<%= (settings.useSetting ? window.bdcs.utils.encodeHTML(settings.inputSubmitValue) : \'搜索\') %>" />             \r\n        </form>\r\n    </div>\r\n    <% if(settings.useSug) {%>\r\n        <div class="bdcs-search-sug" id="bdcs-search-sug">\r\n            <ul class="bdcs-search-sug-list" id="bdcs-search-sug-list"></ul>\r\n        </div>\r\n    <% } %>\r\n\r\n    <% if(settings.useHot) {%>\r\n    	<div class="bdcs-hot" id="bdcs-hot">\r\n        	\r\n		</div>\r\n	<% } %>\r\n\r\n</div>\r\n<% } %>   \r\n    \r\n    <% if(settings_2.useSliding) {%>                   \r\n<!-- 侧滑式 -->\r\n        <div id="sliding-searchbox" class="<%=settings_2.slidingTemplate %>">\r\n            <form action="<%=resultUrl%>" method="get" target="<%=resultTarget%>" class="bdcs-search-form" id="sliding-search-form">\r\n                <div id="sliding-box-detail">\r\n                    <div id="sliding-icon-left"></div>\r\n                    <div id="sliding-back-right"></div>\r\n                    <div class="sliding-box-item" id="sliding-box-item"> \r\n\r\n                    	<div class="sliding-box-meun bdcs-clearfix" id="sliding-box-meun">\r\n\r\n            		<% if(settings_2.useChannels && settings_2.customChannel.length != 0) {%>\r\n            		<div class="sliding-channel-meun" id="sliding-channel-meun">\r\n            			<div class="sliding-channel-current"><span id="sliding-channel-curr"><%=settings_2.customChannel[0].name %></span><i></i></div>\r\n\r\n            			<input type="hidden" name="nsid" value="<%= settings_2.customChannel[0].key %>" id="sliding-channel-nsid"/>\r\n            		</div><% } %><input type="text" name="q" class="bdcs-search-form-input" id="sliding-search-form-input" placeholder="<%= (settings_2.useSliding ? window.bdcs.utils.encodeHTML(settings_2.slidingInputPlaceholder) : \'\')%>" /><input type="submit" class="bdcs-search-form-submit <%= (settings_2.useSliding && settings_2.slidingUseInputSubmitMagnifier ? "sliding-submit-magnifier" : " ") %>" id="sliding-search-form-submit" value="<%= (settings_2.slidingInputSubmitValue ? window.bdcs.utils.encodeHTML(settings_2.slidingInputSubmitValue) : \'搜索\') %>" />\r\n	                        <input type="hidden" name="s" value="<%=siteId%>" />\r\n\r\n	            			<% var charset = document.charset || document.characterSet; %>\r\n                            <% if(isGbk || charset.toLowerCase() == \'gbk\' || charset.toLowerCase() == \'gb2312\') { %>\r\n                            <input type="hidden" name="ie" value="gbk" />\r\n                            <% } %>\r\n\r\n	            		<% if(settings_2.useSug) {%>\r\n			            <div class="bdcs-search-sug" id="sliding-search-sug">\r\n				        <ul class="bdcs-search-sug-list" id="sliding-search-sug-list"></ul>\r\n				    </div>\r\n			        <% } %>\r\n\r\n                    <% if(settings_2.useHot) {%>\r\n                        <div class="bdcs-hot" id="sliding-hot">\r\n                            \r\n                        </div>\r\n                    <% } %>\r\n\r\n	    		</div>\r\n            </div>\r\n            <div id="sliding-back"></div>\r\n            <div id="sliding-icon-right"> </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<% } %>\r\n\r\n<%if(settings_3.usePopup){%>\r\n<!-- 弹窗式 -->\r\n<div id="popup-box" class="<%=settings.popupTemplate %>">\r\n    <div id="popup-searchbox">\r\n        <div class="popup-icon"></div>\r\n        <div class="popupbox-item">\r\n        	<div id="popup-top">\r\n                <span class="top-bg"><span class="span-font"><%=settings_3.popupTitle%>:</span></span>\r\n                <span id="popup-back">一</span>\r\n            </div>\r\n            <form action="<%=resultUrl%>" method="get" target="<%=resultTarget%>" class="bdcs-search-form" id="popup-search-form">             \r\n                <div id="popup-box-detail">\r\n                    <input type="hidden" name="s" value="<%=siteId%>" />\r\n                    <% var charset = document.charset || document.characterSet; %>\r\n                    <% if(isGbk || charset.toLowerCase() == \'gbk\' || charset.toLowerCase() == \'gb2312\') { %>\r\n                    <input type="hidden" name="ie" value="gbk" />\r\n                    <% } %>\r\n\r\n                    <% if(settings_3.useChannels && settings_3.customChannel.length != 0) {%>\r\n            		<div class="popup-channel-meun" id="popup-channel-meun">\r\n            			<div class="popup-channel-current"><span id="popup-channel-curr"><%= settings_3.customChannel[0].name %></span><i></i></div>\r\n\r\n            			<input type="hidden" name="nsid" value="<%= settings_3.customChannel[0].key %>" id="popup-channel-nsid"/>\r\n            		</div><% } %><input type="text" name="q" class="bdcs-search-form-input" id="popup-search-form-input" placeholder="<%= (settings_3.usePopup ? window.bdcs.utils.encodeHTML(settings_3.popupInputPlaceholder) : \'\')%>" /><input type="submit" class="bdcs-search-form-submit <%= (settings_3.usePopup && settings_3.popupUseInputSubmitMagnifier ? "pop-submit-magnifier" : "pop-submit-nomagnifier ") %>" style="<%= (settings_3.usePopup && settings_3.popupUseInputSubmitMagnifier ? "" : "text-indent:0") %>" id="popup-search-form-submit" value="<%= (settings_3.popupInputSubmitValue ? window.bdcs.utils.encodeHTML(settings_3.popupInputSubmitValue) : \'搜索\') %>" />\r\n                    <% if(settings_3.useSug) {%>\r\n			            <div class="bdcs-search-sug" id="popup-search-sug">\r\n			                <ul class="bdcs-search-sug-list" id="popup-search-sug-list"></ul>\r\n			            </div>\r\n			        <% } %>\r\n\r\n                    <% if(settings_3.useHot) {%>\r\n                        <div class="bdcs-hot" id="popup-hot">\r\n                            \r\n                        </div>\r\n                    <% } %>\r\n\r\n                </div>\r\n            </form> \r\n        </div>\r\n    </div>\r\n</div>\r\n<%}%>\r\n\r\n<%if(settings_4.useFloat){%>\r\n<!-- 悬浮式 -->\r\n<div id="float-search-box" class="<%=settings_4.floatTemplate %>">\r\n    <div id="float-searchbox">\r\n        <form action="<%=resultUrl%>" method="get" target="<%=resultTarget%>" class="bdcs-search-form" id="float-search-form" >         \r\n            <div id="float-box-detail" class="bdcs-clearfix">\r\n                <div id="float-logo"></div>\r\n                <div id="float-box" class="bdcs-clearfix">\r\n                    <input type="hidden" name="s" value="<%=siteId%>" />\r\n                    <% var charset = document.charset || document.characterSet; %>\r\n                    <% if(isGbk || charset.toLowerCase() == \'gbk\' || charset.toLowerCase() == \'gb2312\') { %>\r\n                    <input type="hidden" name="ie" value="gbk" />\r\n                    <% } %>\r\n                            \r\n                    <% if(settings_4.useChannels && settings_4.customChannel.length != 0) {%>\r\n            		<div class="float-channel-meun" id="float-channel-meun">\r\n            			<div class="float-channel-current"><span id="float-channel-curr"><%= settings_4.customChannel[0].name %></span><i></i></div>\r\n\r\n            			<input type="hidden" name="nsid" value="<%= settings_4.customChannel[0].key %>" id="float-channel-nsid"/>\r\n            		</div><% } %><input type="text" name="q" class="bdcs-search-form-input" id="float-search-form-input" placeholder="<%= (settings_4.floatInputPlaceholder ? window.bdcs.utils.encodeHTML(settings_4.floatInputPlaceholder) : \'\')%>" /><input type="submit" class="bdcs-search-form-submit <%= (settings_4.useFloat && settings_4.floatUseInputSubmitMagnifier ? "float-submit-magnifier" : " ") %>" id="float-search-form-submit" value="<%= (settings_4.floatInputSubmitValue ? window.bdcs.utils.encodeHTML(settings_4.floatInputSubmitValue) : \'搜索\') %>" />\r\n                    <% if(settings_4.useSug) {%>\r\n                        <div class="bdcs-search-sug" id="float-search-sug">\r\n                            <ul class="bdcs-search-sug-list" id="float-search-sug-list"></ul>\r\n                        </div>\r\n                    <% } %>\r\n\r\n                    <% if(settings_4.useHot) {%>\r\n                        <div class="bdcs-hot bdcs-clearfix" id="float-hot">\r\n                            \r\n                        </div>\r\n                    <% } %>\r\n\r\n                </div>\r\n           </div>\r\n        </form> \r\n    </div>    \r\n</div>\r\n<%}%>\r\n',
    sugNormalTpl = '\n<%if(boxType==1){%>\n	<% for ( var i = 0; i < limit; i++ ) { %>	\n	    <li data-index="<%=i%>" class="bdcs-search-sug-list-item <%= (i == selectedIndex) ? "bdcs-search-sug-list-item-current" : "" %>">\n	        <span class="bdcs-search-sug-list-item-value"><%=data[i].title%></span>\n	    </li>\n	<% } %>\n<% } %>\n\n<%if(boxType==2){%>\n	<% for ( var i = 0; i < limit; i++ ) { %>	\n	    <li data-index="<%=i%>" class="sliding-search-sug-list-item <%= (i == selectedIndex) ? "sliding-search-sug-list-item-current" : "" %>">\n	        <span class="sliding-search-sug-list-item-value"><%=data[i].title%></span>\n	    </li>\n	<% } %>\n<% } %>\n\n<%if(boxType==3){%>\n	<% for ( var i = 0; i < limit; i++ ) { %>	\n	    <li data-index="<%=i%>" class="popup-search-sug-list-item <%= (i == selectedIndex) ? "popup-search-sug-list-item-current" : "" %>">\n	        <span class="popup-search-sug-list-item-value"><%=data[i].title%></span>\n	    </li>\n	<% } %>\n<% } %>\n\n<%if(boxType==4){%>\n	<% for ( var i = 0; i < limit; i++ ) { %>	\n	    <li data-index="<%=i%>" class="float-search-sug-list-item <%= (i == selectedIndex) ? "float-search-sug-list-item-current" : "" %>">\n	        <span class="float-search-sug-list-item-value"><%=data[i].title%></span>\n	    </li>\n	<% } %>\n<% } %>\n\n<%if(boxType==5){%>\n	<% for ( var i = 0; i < limit; i++ ) { %>	\n	    <li data-index="<%=i%>" class="bdcs-search-custom-sug-list-item <%= (i == selectedIndex) ? "bdcs-search-custom-sug-list-item-current" : "" %>">\n	        <span class="bdcs-search-custom-sug-list-item-value"><%=data[i].title%></span>\n	    </li>\n	<% } %>\n<% } %>\n\n\n\n',
    sugNovelTpl = '<%if(boxType==1){%>\n	<% for ( var i = 0; i < limit; i++ ) { %>\n	    <li data-index="<%=i%>" class="bdcs-search-sug-list-item bdcs-search-sug-list-item-novel <%= (i == selectedIndex) ? "bdcs-search-sug-list-item-current" : "" %>">\n	        <span class="bdcs-search-sug-list-item-value"><%=data[i].title%></span>\n	        <span class="bdcs-search-sug-list-item-author-novel"><%=data[i].author%></span>\n	    </li>\n	<% } %>\n<% } %>\n\n<%if(boxType==2){%>\n	<% for ( var i = 0; i < limit; i++ ) { %>\n	    <li data-index="<%=i%>" class="sliding-search-sug-list-item sliding-search-sug-list-item-novel <%= (i == selectedIndex) ? "sliding-search-sug-list-item-current" : "" %>">\n	        <span class="sliding-search-sug-list-item-value"><%=data[i].title%></span>\n	        <span class="sliding-search-sug-list-item-author-novel"><%=data[i].author%></span>\n	    </li>\n	<% } %>\n<% } %>\n\n<%if(boxType==3){%>\n	<% for ( var i = 0; i < limit; i++ ) { %>\n	    <li data-index="<%=i%>" class="popup-search-sug-list-item popup-search-sug-list-item-novel <%= (i == selectedIndex) ? "sliding-search-sug-list-item-current" : "" %>">\n	        <span class="popup-search-sug-list-item-value"><%=data[i].title%></span>\n	        <span class="popup-search-sug-list-item-author-novel"><%=data[i].author%></span>\n	    </li>\n	<% } %>\n<% } %>\n\n<%if(boxType==4){%>\n	<% for ( var i = 0; i < limit; i++ ) { %>\n	    <li data-index="<%=i%>" class="float-search-sug-list-item float-search-sug-list-item-novel <%= (i == selectedIndex) ? "float-search-sug-list-item-current" : "" %>">\n	        <span class="float-search-sug-list-item-value"><%=data[i].title%></span>\n	        <span class="float-search-sug-list-item-author-novel"><%=data[i].author%></span>\n	    </li>\n	<% } %>\n<% } %>\n\n<%if(boxType==5){%>\n	<% for ( var i = 0; i < limit; i++ ) { %>\n	    <li data-index="<%=i%>" class="bdcs-search-custom-sug-list-item bdcs-search-custom-sug-list-item-novel <%= (i == selectedIndex) ? "bdcs-search-custom-sug-list-item-current" : "" %>">\n	        <span class="bdcs-search-custom-sug-list-item-value"><%=data[i].title%></span>\n	        <span class="bdcs-search-custom-sug-list-item-author-novel"><%=data[i].author%></span>\n	    </li>\n	<% } %>\n<% } %>',
    sugMusicTpl = '<%if(boxType==1){%>\n	<% for ( var i = 0; i < limit; i++ ) { %>\n	    <li data-index="<%=i%>" class="bdcs-search-sug-list-item bdcs-search-sug-list-item-music <%= (i == selectedIndex) ? "bdcs-search-sug-list-item-current" : "" %>">\n	        <span class="bdcs-search-sug-list-item-value"><%=data[i].title%></span>\n	        <span class="bdcs-search-sug-list-item-author-music"><%=data[i].author%></span>\n	    </li>\n	<% } %>\n<% } %>\n\n<%if(boxType==2){%>\n	<% for ( var i = 0; i < limit; i++ ) { %>\n	    <li data-index="<%=i%>" class="sliding-search-sug-list-item sliding-search-sug-list-item-music <%= (i == selectedIndex) ? "sliding-search-sug-list-item-current" : "" %>">\n	        <span class="sliding-search-sug-list-item-value"><%=data[i].title%></span>\n	        <span class="sliding-search-sug-list-item-author-music"><%=data[i].author%></span>\n	    </li>\n	<% } %>\n<% } %>\n\n<%if(boxType==3){%>\n	<% for ( var i = 0; i < limit; i++ ) { %>\n	    <li data-index="<%=i%>" class="popup-search-sug-list-item popup-search-sug-list-item-music <%= (i == selectedIndex) ? "popup-search-sug-list-item-current" : "" %>">\n	        <span class="popup-search-sug-list-item-value"><%=data[i].title%></span>\n	        <span class="popup-search-sug-list-item-author-music"><%=data[i].author%></span>\n	    </li>\n	<% } %>\n<% } %>\n\n<%if(boxType==4){%>\n	<% for ( var i = 0; i < limit; i++ ) { %>\n	    <li data-index="<%=i%>" class="float-search-sug-list-item float-search-sug-list-item-music <%= (i == selectedIndex) ? "float-search-sug-list-item-current" : "" %>">\n	        <span class="float-search-sug-list-item-value"><%=data[i].title%></span>\n	        <span class="float-search-sug-list-item-author-music"><%=data[i].author%></span>\n	    </li>\n	<% } %>\n<% } %>\n\n<%if(boxType==5){%>\n	<% for ( var i = 0; i < limit; i++ ) { %>\n	    <li data-index="<%=i%>" class="bdcs-search-custom-sug-list-item bdcs-search-custom-sug-list-item-music <%= (i == selectedIndex) ? "bdcs-search-custom-sug-list-item-current" : "" %>">\n	        <span class="bdcs-search-custom-sug-list-item-value"><%=data[i].title%></span>\n	        <span class="bdcs-search-custom-sug-list-item-author-music"><%=data[i].author%></span>\n	    </li>\n	<% } %>\n<% } %>',
    sugMovieTpl = '<%if(boxType==1){%>\n	<% for ( var i = 0; i < limit; i++ ) { %>\n	    <li data-index="<%=i%>" class="bdcs-search-sug-list-item bdcs-search-sug-list-item-movie <%= (i == selectedIndex) ? "bdcs-search-sug-list-item-current" : "" %>">\n	        <span class="bdcs-search-sug-list-item-value bdcs-search-sug-list-item-value-movie"><%=data[i].title%></span>\n	        <span class="bdcs-search-sug-list-item-type-movie"><%=data[i].type%></span>\n	    </li>\n	<% } %>\n<% } %>\n\n<%if(boxType==2){%>\n	<% for ( var i = 0; i < limit; i++ ) { %>\n	    <li data-index="<%=i%>" class="sliding-search-sug-list-item sliding-search-sug-list-item-movie <%= (i == selectedIndex) ? "sliding-search-sug-list-item-current" : "" %>">\n	        <span class="sliding-search-sug-list-item-value sliding-search-sug-list-item-value-movie"><%=data[i].title%></span>\n	        <span class="sliding-search-sug-list-item-type-movie"><%=data[i].type%></span>\n	    </li>\n	<% } %>\n<% } %>\n\n<%if(boxType==3){%>\n	<% for ( var i = 0; i < limit; i++ ) { %>\n	    <li data-index="<%=i%>" class="popup-search-sug-list-item popup-search-sug-list-item-movie <%= (i == selectedIndex) ? "popup-search-sug-list-item-current" : "" %>">\n	        <span class="popup-search-sug-list-item-value popup-search-sug-list-item-value-movie"><%=data[i].title%></span>\n	        <span class="popup-search-sug-list-item-type-movie"><%=data[i].type%></span>\n	    </li>\n	<% } %>\n<% } %>\n\n<%if(boxType==4){%>\n	<% for ( var i = 0; i < limit; i++ ) { %>\n	    <li data-index="<%=i%>" class="float-search-sug-list-item float-search-sug-list-item-movie <%= (i == selectedIndex) ? "float-search-sug-list-item-current" : "" %>">\n	        <span class="float-search-sug-list-item-value float-search-sug-list-item-value-movie"><%=data[i].title%></span>\n	        <span class="float-search-sug-list-item-type-movie"><%=data[i].type%></span>\n	    </li>\n	<% } %>\n<% } %>\n\n<%if(boxType==5){%>\n	<% for ( var i = 0; i < limit; i++ ) { %>\n	    <li data-index="<%=i%>" class="bdcs-search-custom-sug-list-item bdcs-search-custom-sug-list-item-movie <%= (i == selectedIndex) ? "bdcs-search-custom-sug-list-item-current" : "" %>">\n	        <span class="bdcs-search-custom-sug-list-item-value bdcs-search-custom-sug-list-item-value-movie"><%=data[i].title%></span>\n	        <span class="bdcs-search-custom-sug-list-item-type-movie"><%=data[i].type%></span>\n	    </li>\n	<% } %>\n<% } %>',
    searchTpl = '<%if(recShowType !== "2" && recShowType !== 2){%>\n<div id="bdcs-rec-type">\n    <div class="bdcs-rec-one" id="bdcs-rec-temple">\n        <div class="bdcs-rec-title">\n            <div class="bdcs-rec-title-logo"></div>\n            <div class="bdcs-rec-title-font" id="bdcs-rec-title-font">热门关键词</div>\n            <div class="bdcs-rec-clear"></div>\n        </div>\n        <div class="bdcs-rec-clear" id="clear-left"></div>\n        <div class="bdcs-rec-detail">\n            <ul id="bdcs-rec-detail-con">              \n            </ul>\n            <div class="bdcs-rec-clear"></div>\n        </div>\n        <div class="bdcs-rec-clear"></div>\n    </div> \n</div>\n<% } %>\n\n<%if(recShowType === "2" || recShowType === 2){%>\n<div class="bdcs-rec-float-container">\n    <div class="bdcs-rec-float-icon bdcs-rec-float-icon-close"></div>\n    <div class="bdcs-rec-float-content">\n        <div class="bdcs-rec-float-title"><%= window.bdcs.utils.encodeHTML(recTitleContent) %></div>\n        <ul id="bdcsFlRecList"></ul>\n    </div>\n</div>\n<% } %>',
    wncardTpl = '<div class="bcse-card-top">\n<span class="bcse-card-title">搜索到关于</span>\n<span class="bcse-card-query" title=""></span>\n<span class="bcse-card-title">的其他站内文章</span>：<span class="bcse-card-close">×</span>\n</div>\n<div class="bcse-card-center">\n<iframe width="125" height="71" scrolling="no" class="bcse-card-frame" id="bdcsCardFrame" frameborder="0" src=""></iframe>\n<div class="bcse-card-result-title">\n<a class="bcse-card-first-link" href="" target="_blank" title="" cpos="1"></a>\n</div>\n<div class="bcse-card-result-abstract"></div>\n<div class="bcse-card-result-next">\n<a class="bcse-card-next-link" href="" target="_blank" title="" cpos="2"></a>\n</div>\n</div>\n',
    searchRecCSS = "#bdcs-rec{font-size:12px;font-family:微软雅黑;border:solid 1px;overflow:hidden}#bdcs-rec li{list-style-type:none}#bdcs-rec ul{margin:0;padding:0}#bdcs-rec .bdcs-rec-title-logo{float:left}#bdcs-rec .bdcs-rec-cross .bdcs-rec-title{margin-bottom:5px}#bdcs-rec .bdcs-rec-down .bdcs-rec-title{margin-bottom:5px}#bdcs-rec .bdcs-rec-down .bdcs-rec-clear-dn{clear:both;margin:0;padding:0}#bdcs-rec .bdcs-rec-clear{clear:both}#bdcs-rec .bdcs-rec-cross .bdcs-rec-detail{}#bdcs-rec .bdcs-rec-cross .bdcs-rec-detail-item{margin-bottom:5px}#bdcs-rec{border:solid 1px #fff}#bdcs-rec-temple{margin:10px 0}#bdcs-rec .bdcs-rec-one .bdcs-rec-title-logo{background:url(http://znsv.baidu.com/static/customer-search/component/search-rec/rec-logo-one.png) no-repeat center center;height:20px;width:20px}#bdcs-rec .bdcs-rec-one{//font-size:16px}.bdcs-rec-one .bdcs-rec-title-font{//color:#999;padding-left:5px;float:left;height:20px;line-height:20px}.bdcs-rec-one .bdcs-rec-detail-item{text-align:center}.rec-span-img{display:block;margin-bottom:5px}.bdcs-rec-one .bdcs-rec-detail-item a{//color:#1a89ed}#bdcs-rec .bdcs-rec-down .bdcs-rec-one .bdcs-rec-clear-dn{clear:both}#bdcs-rec .bdcs-rec-down .bdcs-rec-one li{margin-bottom:5px}#bdcs-rec .bdcs-rec-cross .bdcs-rec-one li{float:left;margin-right:20px}#bdcs-rec .bdcs-rec-cross .bdcs-rec-one .bdcs-rec-clear-dn{margin-bottom:0}#bdcs-rec .bdcs-rec-two .bdcs-rec-title-logo{background:url(http://znsv.baidu.com/static/customer-search/component/search-rec/rec-logo-two.png) no-repeat center center;height:20px;width:20px}#bdcs-rec .bdcs-rec-two{font-size:12px}.bdcs-rec-two .bdcs-rec-title-font{color:#999;padding-left:5px;float:left;position:relative;height:20px;line-height:20px;//top:3px}.bdcs-rec-two .bdcs-rec-detail-item a{color:#1a89ed;text-decoration:none;display:block}#bdcs-rec .bdcs-rec-two .bdcs-rec-detail-item{background-color:#ebf6ff;padding:3px 10px;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;text-align:center}#bdcs-rec .bdcs-rec-down .bdcs-rec-two .bdcs-rec-clear-dn{clear:both}#bdcs-rec .bdcs-rec-down .bdcs-rec-two li{margin-bottom:5px;float:left}#bdcs-rec .bdcs-rec-cross .bdcs-rec-two li{float:left;margin-left:10px}#bdcs-rec .bdcs-rec-cross .bdcs-rec-two .bdcs-rec-clear-dn{margin-bottom:0}#bdcs-rec .bdcs-rec-three .bdcs-rec-title-logo{background:url(http://znsv.baidu.com/static/customer-search/component/search-rec/rec-logo-three.png) no-repeat center center;height:20px;width:20px;position:relative;//top:5px}#bdcs-rec .bdcs-rec-three{font-size:12px}.bdcs-rec-three .bdcs-rec-title-font{color:#999;padding-left:5px;float:left;position:relative;height:20px;line-height:20px;//top:3px}.bdcs-rec-three .bdcs-rec-detail-item a{color:#fff;font-weight:700;text-decoration:none}#bdcs-rec .bdcs-rec-three .bdcs-rec-detail-item{padding:3px 10px;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px}#bdcs-rec .bdcs-rec-down .bdcs-rec-three .bdcs-rec-clear-dn{clear:both}#bdcs-rec .bdcs-rec-down .bdcs-rec-three li{margin-bottom:5px;float:left}#bdcs-rec .bdcs-rec-cross .bdcs-rec-three li{float:left;margin-left:10px}#bdcs-rec .bdcs-rec-cross .bdcs-rec-three .bdcs-rec-clear-dn{margin-bottom:0}#bdcs-rec .bdcs-rec-four .bdcs-rec-title-logo{background:url(http://znsv.baidu.com/static/customer-search/component/search-rec/rec-logo-one.png) no-repeat center center;height:20px;width:20px}#bdcs-rec .bdcs-rec-four{font-size:15px}.bdcs-rec-four .bdcs-rec-title-font{color:#616466;padding-left:5px;float:left;font-weight:700;height:20px;line-height:20px}.bdcs-rec-four .bdcs-rec-detail-item a{color:#474f70;text-decoration:none;font-weight:700;font-size:15px}#bdcs-rec .bdcs-rec-four .bdcs-rec-detail-item{border:solid 1px #cae6ff;padding:3px 10px;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px}#bdcs-rec .bdcs-rec-down .bdcs-rec-four .bdcs-rec-clear-dn{clear:both}#bdcs-rec .bdcs-rec-down .bdcs-rec-four li{margin-bottom:5px;float:left}#bdcs-rec .bdcs-rec-cross .bdcs-rec-four li{float:left;margin-right:10px;margin-bottom:10px}#bdcs-rec .bdcs-rec-cross .bdcs-rec-four .bdcs-rec-clear-cs{clear:both}#bdcs-rec .bdcs-rec-cross .bdcs-rec-four .bdcs-rec-clear-dn{margin-bottom:0}.bdcs-rec-cross .bdcs-rec-four{}#bdcs-rec .bdcs-rec-five .bdcs-rec-title-logo{background:url(http://znsv.baidu.com/static/customer-search/component/search-rec/rec-logo-five.png) no-repeat center center;height:25px;width:155px}#bdcs-rec .bdcs-rec-five{font-size:15px}.bdcs-rec-five .bdcs-rec-title-font{color:#7da6cc;padding-left:5px;float:left;margin-left:-130px;height:24px;line-height:24px;font-size:14px}.bdcs-rec-five .bdcs-rec-detail-item a{text-decoration:none}#bdcs-rec .bdcs-rec-five .bdcs-rec-detail-item{height:30px}#bdcs-rec .bdcs-rec-down .bdcs-rec-five .bdcs-rec-clear-dn{clear:both}#bdcs-rec .bdcs-rec-down .bdcs-rec-five li{margin-bottom:5px;float:left}#bdcs-rec .bdcs-rec-cross .bdcs-rec-five li{float:left;margin-right:20px;margin-bottom:10px}#bdcs-rec .bdcs-rec-cross .bdcs-rec-five .bdcs-rec-clear-dn{margin-bottom:0}#bdcs-rec .bdcs-rec-cross .bdcs-rec-five .bdcs-rec-clear-cs{clear:both}",
    floatRecCSS = "#bdcsFlRec{z-index:999999;position:fixed;width:100%;height:50px;bottom:0;left:0;border:0;overflow:hidden}#bdcsFlRec .bdcs-rec-float-container{width:100%;height:100%;position:relative}#bdcsFlRec .bdcs-rec-float-icon{width:44px;height:50px;border:0;position:absolute;cursor:pointer;left:0;top:0}.bdcs-rec-float-icon-close{background-image:url(http://znsv.baidu.com/static/customer-search/component/search-rec/rec-float-close.png)}.bdcs-rec-float-icon-open{background-image:url(http://znsv.baidu.com/static/customer-search/component/search-rec/rec-float-open.png)}#bdcsFlRec .bdcs-rec-float-content{width:100%;height:49px;border-top:1px solid #e4f2ff;background-color:#f7fbff;overflow:hidden}#bdcsFlRec .bdcs-rec-float-title{font-size:14px;line-height:49px;margin-left:70px;color:#539dd6;width:auto;margin-right:10px;float:left}#bdcsFlRec #bdcsFlRecList{height:49px;padding:0;margin:0}#bdcsFlRec .bdcs-rec-float-item{height:28px;line-height:28px;border:1px solid #e4f2ff;border-radius:8px;padding:0 30px;margin:10px;background-color:#fff;float:left;text-align:center;font-size:13px;color:#29456f;list-style-type:none;cursor:pointer;background-image:none}#bdcsFlRec .bdcs-rec-float-item:hover{background-color:#f5faff;color:#29456f}",
    floatRecCSS1 = "#bdcsFlRec{z-index:999999;position:fixed;width:100%;height:43px;bottom:0;left:0;border:0;overflow:hidden}#bdcsFlRec .bdcs-rec-float-container{width:100%;height:100%;position:relative}#bdcsFlRec .bdcs-rec-float-icon{width:40px;height:43px;border:0;position:absolute;cursor:pointer;left:0;top:0}.bdcs-rec-float-icon-close{background-image:url(http://znsv.baidu.com/static/customer-search/component/search-rec/rec-float-close-1.png)}.bdcs-rec-float-icon-open{background-image:url(http://znsv.baidu.com/static/customer-search/component/search-rec/rec-float-open-1.png)}#bdcsFlRec .bdcs-rec-float-content{width:100%;height:42px;border-top:1px solid #e4f2ff;background-color:#f7fbff;overflow:hidden}#bdcsFlRec .bdcs-rec-float-title{font-size:14px;line-height:42px;margin-left:70px;color:#539dd6;width:auto;margin-right:10px;float:left}#bdcsFlRec #bdcsFlRecList{height:42px;padding:0;margin:0}#bdcsFlRec .bdcs-rec-float-item{height:24px;line-height:24px;border:0;border-radius:3px;padding:0 20px;margin:9px;background-color:#daefff;float:left;text-align:center;font-size:13px;color:#539dd6;list-style-type:none;cursor:pointer;background-image:none}#bdcsFlRec .bdcs-rec-float-item:hover{background-color:#3fa4ff;color:#fff}",
    floatRecCSSPic = "#bdcsFlRec{z-index:999999;position:fixed;width:100%;height:85px;bottom:0;left:0;border:0;overflow:hidden}#bdcsFlRec .bdcs-rec-float-container{width:100%;height:100%;position:relative}#bdcsFlRec .bdcs-rec-float-icon{width:44px;height:85px;border:0;position:absolute;cursor:pointer;left:0;top:0}.bdcs-rec-float-icon-close{background-image:url(http://znsv.baidu.com/static/customer-search/component/search-rec/rec-float-pic-close.png)}.bdcs-rec-float-icon-open{background-image:url(http://znsv.baidu.com/static/customer-search/component/search-rec/rec-float-pic-open.png)}#bdcsFlRec .bdcs-rec-float-content{width:100%;height:84px;border-top:1px solid #e4f2ff;background-color:#f7fbff;overflow:hidden}#bdcsFlRec .bdcs-rec-float-title{font-size:14px;line-height:84px;margin-left:70px;color:#539dd6;width:auto;margin-right:10px;float:left}#bdcsFlRec #bdcsFlRecList{height:95px;padding:0;margin:0}#bdcsFlRec .bdcs-rec-float-item{height:auto;line-height:normal;border:1px solid #e4f2ff;border-radius:8px;padding:5px 30px;margin:5px;background-color:#fff;float:left;text-align:center;font-size:13px;color:#29456f;list-style-type:none;cursor:pointer;background-image:none}#bdcsFlRec .bdcs-rec-float-item:hover{background-color:#f5faff;color:#29456f}#bdcsFlRec .bdcs-rec-float-span{display:block;margin-bottom:5px}",
    commonCSS = ".bdcs-container,.bdcs-container *{box-sizing:content-box;margin:0;padding:0;float:none;clear:none;overflow:hidden;white-space:nowrap;word-wrap:normal;border:0;background:0 0;width:auto;height:auto;max-width:none;min-width:none;max-height:none;min-height:none;border-radius:0;box-shadow:none;transition:none}.bdcs-container table{border-collapse:collapse;border-spacing:0}.bdcs-container img{border:0;display:block}.bdcs-container ol,.bdcs-container ul{list-style:none}.bdcs-container li{display:block;list-style:none}.bdcs-container h1,.bdcs-container h2,.bdcs-container h3,.bdcs-container h4{font-size:100%}.bdcs-container i,.bdcs-container em{font-style:normal;font-weight:400}.bdcs-container button,.bdcs-container input,.bdcs-container select,.bdcs-container textarea{font:12px/1.5 Helvetica,Arial,\\5b8b\\4f53,sans-serif}.bdcs-container .bdcs-clearfix:after{content:'';display:block;clear:both;height:0}.bdcs-container .bdcs-clearfix{zoom:1}",
    searchCSS = ".bdcs-main,.bdcs-main *{box-sizing:content-box;margin:0;padding:0;float:none;clear:none;overflow:hidden;white-space:nowrap;word-wrap:normal;border:0;background:0 0;width:auto;height:auto;max-width:none;min-width:none;max-height:none;min-height:none;border-radius:0;box-shadow:none;transition:none;text-align:left}.bdcs-clearfix:after{content:'';display:block;clear:both;height:0}.bdcs-clearfix{zoom:1}.bdcs-main{overflow:visible}.bdcs-search{display:block;overflow:visible;position:relative;border-style:solid}.bdcs-search-form-input-wrap{display:inline-block}.bdcs-search-form-input{border-width:1px;border-style:solid;display:inline-block;vertical-align:top;text-indent:5px;background-color:#fff;float:left}.bdcs-search-form-input:focus{border-width:1px;border-style:solid;outline:0}.bdcs-search-form-submit-wrap{display:inline-block}.bdcs-search-form-submit{display:inline-block;cursor:pointer;border-width:1px;border-style:solid;vertical-align:top;text-align:center;width:50px;//_overflow:hidden}.bdcs-search-form-submit-magnifier{width:45px;padding:0;text-indent:-999em;overflow:hidden;background:url(http://znsv.baidu.com/static/customer-search/component/search/magnifier-icon.png) no-repeat center center;_background:url(http://znsv.baidu.com/static/customer-search/component/search/magnifier-icon_ie6.png) no-repeat center center}div#default-searchbox .default-channel-meun{position:relative;width:75px;display:inline-block;vertical-align:middle;cursor:pointer;background:#fff;float:left;overflow:visible}div#default-searchbox .default-channel-current{border:1px solid;position:relative;width:100%;border-right:0}div#default-searchbox .default-channel-current span{margin-left:8px}div#default-searchbox .default-channel-current i{overflow:hidden;width:0;height:0;border-width:6px 6px 0;border-color:#9E9E9E #fff;border-style:solid;display:block;position:absolute;right:10px;top:11px}div.cse-default-channel-container{display:block;position:absolute;z-index:30061000000}div.cse-default-channel-container .default-channel-list{display:none;width:99%;list-style:none;background:#fff;border:1px solid #DDD;border-top:0;margin:0;padding:0}div.cse-default-channel-container .default-channel-list li{background:0 0;line-height:24px;list-style:none;display:block;padding-left:7px;cursor:pointer}div.cse-default-channel-container .default-channel-list li:hover{background:#DDD}",
    sugCSS = ".bdcs-clearfix:after{content:'';display:block;clear:both;height:0}.bdcs-clearfix{zoom:1}.bdcs-search{overflow:visible;position:relative}.bdcs-search-sug,.bdcs-search-sug *{box-sizing:content-box;margin:0;padding:0;float:none;clear:none;overflow:hidden;white-space:nowrap;word-wrap:normal;border:0;background:0 0;width:auto;height:auto;max-width:none;min-width:none;max-height:none;min-height:none;border-radius:0;box-shadow:none;transition:none;text-align:left}.bdcs-search-sug{display:none;position:absolute;z-index:2147483647}.bdcs-search-sug-list{list-style:none;border:1px solid #DDD;background-color:#FFF}.bdcs-search-sug-list{}.bdcs-search-sug-list-item{display:block;list-style:none;cursor:pointer;padding:0 5px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.bdcs-search-sug-list-item-current{background-color:#EBEBEB}.bdcs-search-sug-list-item-author-novel,.bdcs-search-sug-list-item-author-music,.bdcs-search-sug-list-item-type-movie{color:#BABABA}.bdcs-search-sug-list-item-author-novel,.bdcs-search-sug-list-item-author-music{margin-left:5px}.bdcs-search-sug-list-item-music{overflow:hidden;*zoom:1}.bdcs-search-sug-list-item-value-movie{float:left}.bdcs-search-sug-list-item-type-movie{float:right}.bdcs-search-sug-skin{display:none;width:85px;height:85px;position:absolute;right:1px;bottom:1px}.bdcs-search-sug-skin-img{width:85px;height:85px}.bdcs-search-sug-i{color:#e64fa3;font-weight:700;margin-left:10px;font-family:simsun;font-style:normal}.bdcs-search-sug-adv{width:105px;position:absolute;right:1px;top:1px;display:none}.bdcs-search-sug-adv-img{position:absolute;top:0;right:0}",
    hotCSS = ".bdcs-clearfix:after{content:'';display:block;clear:both;height:0}.bdcs-clearfix{zoom:1}.bdcs-hot,.bdcs-hot *{box-sizing:content-box;margin:0;padding:0;float:none;clear:none;overflow:hidden;white-space:nowrap;word-wrap:normal;border:0;background:0 0;width:auto;height:auto;max-width:none;min-width:none;max-height:none;min-height:none;border-radius:0;box-shadow:none;transition:none;text-align:left}.bdcs-hot{display:block;white-space:normal}.bdcs-hot-item{margin-right:10px}",
    customSugCSS = ".bdcs-clearfix:after{content:'';display:block;clear:both;height:0}.bdcs-clearfix{zoom:1}.bdcs-search-custom-sug,.bdcs-search-custom-sug *{box-sizing:content-box;margin:0;padding:0;float:none;clear:none;overflow:hidden;white-space:nowrap;word-wrap:normal;border:0;background:0 0;width:auto;height:auto;max-width:none;min-width:none;max-height:none;min-height:none;border-radius:0;box-shadow:none;transition:none;text-align:left}.bdcs-search-custom-sug{display:none;position:absolute;z-index:2147483647}.bdcs-search-custom-sug-list{list-style:none;border:1px solid #DDD;background-color:#FFF}.bdcs-search-custom-sug-list{}.bdcs-search-custom-sug-list-item{display:block;list-style:none;cursor:pointer;padding:0 5px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.bdcs-search-custom-sug-list-item-current{background-color:#EBEBEB}.bdcs-search-custom-sug-list-item-author-novel,.bdcs-search-custom-sug-list-item-author-music,.bdcs-search-custom-sug-list-item-type-movie{color:#BABABA}.bdcs-search-custom-sug-list-item-author-novel,.bdcs-search-custom-sug-list-item-author-music{margin-left:5px}.bdcs-search-custom-sug-list-item-music{overflow:hidden;*zoom:1}.bdcs-search-custom-sug-list-item-value-movie{float:left}.bdcs-search-custom-sug-list-item-type-movie{float:right}.bdcs-search-custom-sug-skin{display:none;width:85px;height:85px;position:absolute;right:1px;bottom:1px}.bdcs-search-custom-sug-skin-img{width:85px;height:85px}.bdcs-search-custom-sug-i{color:#e64fa3;font-weight:700;margin-left:10px;font-family:simsun;font-style:normal}.bdcs-search-custom-sug-adv{width:105px;position:absolute;right:1px;top:1px;display:none}.bdcs-search-custom-sug-adv-img{position:absolute;top:0;right:0}",
    customHotCSS = ".bdcs-clearfix:after{content:'';display:block;clear:both;height:0}.bdcs-clearfix{zoom:1}.bdcs-custom-hot,.bdcs-custom-hot *{box-sizing:content-box;margin:0;padding:0;float:none;clear:none;overflow:hidden;white-space:nowrap;word-wrap:normal;border:0;background:0 0;width:auto;height:auto;max-width:none;min-width:none;max-height:none;min-height:none;border-radius:0;box-shadow:none;transition:none;text-align:left}.bdcs-custom-hot{display:block;white-space:normal}.bdcs-custom-hot-item{margin-right:10px}",
    slidingCSS = "div#sliding-searchbox.sliding-searchbox-one #sliding-icon-left{height:60px;width:50px;background:url(http://znsv.baidu.com/static/customer-search/img/slidingbox-icon-right.png) no-repeat center center;margin-right:15px;float:left}div#sliding-searchbox.sliding-searchbox-two #sliding-icon-left{height:60px;width:50px;background:url(http://znsv.baidu.com/static/customer-search/img/slidingbox-icon-two-left.png) no-repeat center center;margin-right:15px;float:left}div#sliding-searchbox.sliding-searchbox-three #sliding-icon-left{height:60px;width:50px;background:url(http://znsv.baidu.com/static/customer-search/img/slidingbox-icon-three-left.png) no-repeat center center;margin-right:15px;float:left}div#sliding-searchbox.sliding-searchbox-four #sliding-icon-left{height:60px;width:50px;background:url(http://znsv.baidu.com/static/customer-search/img/slidingbox-icon-four-left.png) no-repeat center center;margin-right:15px;float:left}#sliding-searchbox #sliding-back-right{float:left;height:60px;width:14px;background:url(http://znsv.baidu.com/static/customer-search/img/back-right-common.png) no-repeat center center}#sliding-searchbox.sliding-searchbox-four #sliding-back-right{float:left;height:60px;width:14px;border-top:1px solid #C8E2F9;border-left:1px solid #C8E2F9;border-bottom:1px solid #C8E2F9;background:#F0F8FF url(http://znsv.baidu.com/static/customer-search/img/back-right-common-four.png) no-repeat center center}#sliding-box-item{width:383px;border:solid 1px;float:left}#sliding-box-item input{border:solid 1px;margin-right:0;text-indent:.5em}.sliding-box-meun #sliding-search-form-submit{text-indent:0}#sliding-hot{float:none;width:100%;margin-top:10px;overflow:hidden}#sliding-box-item .bdcs-hot{height:50px}#sliding-searchbox #sliding-search-form .sliding-submit-magnifier{background:url(http://znsv.baidu.com/static/customer-search/img/search-icon.png) no-repeat center center;text-indent:-999em}.sliding-searchbox-four #sliding-searchbox .sliding-submit-magnifier{background:url(http://znsv.baidu.com/static/customer-search/img/search-icon-four.png) no-repeat center center;text-indent:-999em}#sliding-searchbox #sliding-box-item #sliding-search-form-submit{width:40px;text-align:center;margin-left:0;position:relative}#sliding-box-item input:focus{border:1px solid}#sliding-back{height:60px;width:14px;background:url(http://znsv.baidu.com/static/customer-search/img/back-left-common.png) no-repeat center center;float:left}.sliding-searchbox-four #sliding-back{height:60px;width:14px;background:url(http://znsv.baidu.com/static/customer-search/img/back-left-common-four.png) no-repeat center center;float:left}#sliding-search-sug-list{position:relative;//margin-left:10px}#sliding-search-sug .sliding-search-sug-list-item-current{background-color:#F5F5F5}div#sliding-searchbox.sliding-searchbox-one #sliding-icon-right{height:60px;width:50px;background:url(http://znsv.baidu.com/static/customer-search/img/slidingbox-icon-left.png) no-repeat center center;float:left;margin-left:15px}div#sliding-searchbox.sliding-searchbox-two #sliding-icon-right{height:60px;width:50px;background:url(http://znsv.baidu.com/static/customer-search/img/slidingbox-icon-two-right.png) no-repeat center center;float:left;margin-left:15px}div#sliding-searchbox.sliding-searchbox-three #sliding-icon-right{height:60px;width:50px;background:url(http://znsv.baidu.com/static/customer-search/img/slidingbox-icon-three-right.png) no-repeat center center;float:left;margin-left:15px}div#sliding-searchbox.sliding-searchbox-four #sliding-icon-right{height:60px;width:50px;background:url(http://znsv.baidu.com/static/customer-search/img/slidingbox-icon-four-right.png) no-repeat center center;float:left;margin-left:15px}#sliding-box-detail a{text-decoration:none;padding:3px;display:inline-block}#sliding-hot{width:0}.sliding-search-sug-list-item{cursor:pointer}.sliding-search-sug-list-item-value{position:relative;left:5px}.sliding-search-sug-list-item-author-novel,.sliding-search-sug-list-item-author-music,.sliding-search-sug-list-item-type-movie{color:#BABABA}.sliding-search-sug-list-item-author-novel,.sliding-search-sug-list-item-author-music{position:relative;left:5px}.sliding-search-sug-list-item-music{overflow:hidden;*zoom:1}#sliding-search-sug .sliding-search-sug-list-item-value-movie{float:left}#sliding-search-sug .sliding-search-sug-list-item-type-movie{float:right}#sliding-search-form-input{border-radius:0;float:none;padding:0;vertical-align:middle}#sliding-search-form-submit{border-radius:0;float:none;vertical-align:middle}#sliding-searchbox{overflow:visible;z-index:99999}div#sliding-searchbox .sliding-box-meun{padding-left:20px;padding-top:20px;position:relative;text-align:left}div#sliding-searchbox .sliding-channel-meun{position:relative;width:75px;display:inline-block;vertical-align:middle;background:#fff;cursor:pointer}div#sliding-searchbox .sliding-channel-current{border:1px solid;position:relative;width:100%;border-right:0}div#sliding-searchbox .sliding-channel-current span{margin-left:8px}div#sliding-searchbox .sliding-channel-current i{overflow:hidden;width:0;height:0;border-width:6px 6px 0;border-color:#9E9E9E #fff;border-style:solid;display:block;position:absolute;right:10px;top:15px}div.cse-sliding-channel-container{display:block;position:absolute;z-index:30061000000}div.cse-sliding-channel-container .sliding-channel-list{display:none;width:99%;list-style:none;background:#fff;border:1px solid #DDD;border-top:0;margin:0;padding:0}div.cse-sliding-channel-container .sliding-channel-list li{background:0 0;line-height:24px;list-style:none;padding-left:7px;cursor:pointer;display:block}div.cse-sliding-channel-container .sliding-channel-list li:hover{background:#DDD}",
    popupCSS = "div#popup-searchbox{position:fixed;bottom:0;z-index:10;font-size:12px}#popup-searchbox .popupbox-item{border:solid 1px;position:relative}#popup-box-detail .bdcs-hot{margin-top:5px}#popup-top{border-bottom:solid 1px #ececec}#popup-back{padding-right:5px;padding-left:5px;display:inline-block;*display:inline;*zoom:1;font-size:18px;border-left:solid 1px;height:29px;cursor:pointer;float:right}#popup-top .top-bg{margin-left:10px;float:left}#popup-box-detail{padding:20px}#popup-searchbox input{border:solid 1px;margin-right:0;text-indent:.5em}#popup-box-detail #popup-search-form-submit{}#popup-searchbox .popup-icon{height:40px;width:40px;background:url(http://znsv.baidu.com/static/customer-search/img/search-icon.png) no-repeat center center}#popup-searchbox .pop-submit-magnifier{background:url(http://znsv.baidu.com/static/customer-search/img/search-icon.png) no-repeat center center;text-indent:-999em}#popup-searchbox #popup-search-form-submit{padding:0;width:40px;text-align:center;position:relative}html[data-useragent*='MSIE 10.0'] #popup-box #popup-searchbox #popup-search-form-submit{top:0}#popup-box-detail a{font-size:12px;text-decoration:none;padding:3px;display:inline-block}#popup-hot{float:none;width:100%;margin-top:10px;overflow:hidden}.popup-search-sug-list-item{cursor:pointer}.popup-search-sug-list-item-value{position:relative;left:5px}.popup-search-sug-list-item-author-novel,.popup-search-sug-list-item-author-music,.popup-search-sug-list-item-type-movie{color:#BABABA}.popup-search-sug-list-item-author-novel,.popup-search-sug-list-item-author-music{position:relative;left:5px}.popup-search-sug-list-item-music{overflow:hidden;*zoom:1}#popup-search-sug .popup-search-sug-list-item-current{background-color:#F5F5F5}#popup-search-sug .popup-search-sug-list-item-value-movie{float:left}#popup-search-sug .popup-search-sug-list-item-type-movie{float:right;margin-right:5px}#popup-search-form-input{border-radius:0;float:none;padding:0;vertical-align:middle}#popup-search-form-submit{border-radius:0;float:none;vertical-align:middle}div#popup-searchbox .popup-channel-meun{position:relative;width:75px;display:inline-block;vertical-align:middle;background:#fff;cursor:pointer}div#popup-searchbox .popup-channel-current{border:1px solid;position:relative;width:100%;border-right:0}div#popup-searchbox .popup-channel-current span{margin-left:8px}div#popup-searchbox .popup-channel-current i{overflow:hidden;width:0;height:0;border-width:6px 6px 0;border-color:#9E9E9E #fff;border-style:solid;display:block;position:absolute;right:10px;top:15px}div.cse-popup-channel-container{display:block;position:absolute;z-index:30061000000}div.cse-popup-channel-container .popup-channel-list{display:none;width:99%;list-style:none;background:#fff;border:1px solid #DDD;border-top:0;margin:0;padding:0;overflow:auto;height:62px}div.cse-popup-channel-container .popup-channel-list li{background:0 0;line-height:21px;list-style:none;padding-left:7px;cursor:pointer;display:block}div.cse-popup-channel-container .popup-channel-list li:hover{background:#DDD}",
    floatCSS = ".body{margin:0;padding:0}#float-search-box{}.bdcs-container .bdcs-clearfix:after{content:'';display:block;clear:both;height:0}.bdcs-container .bdcs-clearfix{zoom:1}#float-searchbox{visibility:hidden;height:100px;border:solid 1px;z-index:20000000000000}#float-searchbox #float-box{position:relative;float:left;overflow:visible}#float-searchbox #float-logo{height:100px;width:200px;float:left;background:url(http://znsv.baidu.com/static/customer-search/img/floatlogo.png) no-repeat center center;_background:url(http://znsv.baidu.com/static/customer-search/img/floatlogo.png) no-repeat center center;position:relative;bottom:20px;margin-right:10px}#float-search-form-input{border:solid 1px;text-indent:.5em;border-radius:0;vertical-align:top;padding:0;float:none}#float-search-form-submit{text-indent:0;cursor:pointer;border-radius:0;box-sizing:border-box}#float-searchbox .float-submit-magnifier{background:url(http://znsv.baidu.com/static/customer-search/img/search-icon.png) no-repeat center center;_background:url(http://znsv.baidu.com/static/customer-search/img/search-icon.png) no-repeat center center;text-indent:-999em}#float-box-detail{padding-top:20px;margin-left:auto;margin-right:auto;overflow:visible}#float-box-detail input{margin-right:0}#float-box-detail #float-search-form-submit{width:60px;text-align:center;font-size:14px;border:solid 1px}#float-box-detail a{text-decoration:none;padding:3px}#float-hot{margin-top:10px;float:left;overflow:hidden}#float-hot a{float:left}#float-search-form,#float-searchbox{overflow:visible;left:0}#float-search-sug .float-search-sug-list-item-current{background-color:#F5F5F5}.float-search-sug-list-item{cursor:pointer}.float-search-sug-list-item-value{position:relative;left:5px}.float-search-sug-list-item-author-novel,.float-search-sug-list-item-author-music,.float-search-sug-list-item-type-movie{color:#BABABA}.float-search-sug-list-item-author-novel,.float-search-sug-list-item-author-music{position:relative;left:5px}.float-search-sug-list-item-music{overflow:hidden;*zoom:1}#float-search-sug .float-search-sug-list-item-value-movie{float:left}#float-search-sug .float-search-sug-list-item-type-movie{float:right}div#float-searchbox .float-channel-meun{position:relative;width:75px;display:inline-block;vertical-align:top;background:#f5f5f5;cursor:pointer}div#float-searchbox .float-channel-current{border:1px solid;position:relative;width:100%;border-right:0}div#float-searchbox .float-channel-current span{margin-left:8px}div#float-searchbox .float-channel-current i{overflow:hidden;width:0;height:0;border-width:6px 6px 0;border-color:#9E9E9E #f5f5f5;border-style:solid;display:block;position:absolute;right:10px;top:15px}div.cse-float-channel-container{display:block;position:absolute;z-index:30061000000}div.cse-float-channel-container .float-channel-list{display:none;width:99%;list-style:none;background:#fff;border:1px solid #DDD;border-top:0;margin:0;padding:0}div.cse-float-channel-container .float-channel-list li{background:0 0;line-height:24px;list-style:none;padding-left:7px;cursor:pointer;display:block}div.cse-float-channel-container .float-channel-list li:hover{background:#DDD}",
    wncardCSS = "#bdcsWnCard{position:fixed;bottom:50px;left:0;width:326px;max-height:158px;box-shadow:2px 3px 3px #ccc;background-color:#fff;display:none;left:-328px;z-index:99999999;font-family:'Microsoft Yahei',微软雅黑,serif}#bdcsWnCard .bcse-card-top{width:316px;height:28px;line-height:28px;font-size:13px;color:#ebedfb;background-color:#2C85FF;padding-left:10px}#bdcsWnCard .bcse-card-title{float:left;display:inline-block}#bdcsWnCard .bcse-card-query{float:left;display:inline-block;font-weight:700;margin:0 3px;max-width:110px;overflow:hidden;white-space:nowrap;color:#fff;-o-text-overflow:ellipsis;text-overflow:ellipsis}#bdcsWnCard .bcse-card-close{float:right;font-size:22px;margin-right:5px;margin-top:-2px;cursor:pointer}#bdcsWnCard .bcse-card-center{padding:15px 10px}#bdcsWnCard .bcse-card-frame{float:left;height:75px;width:121px;margin-right:15px;margin-bottom:10px}#bdcsWnCard .bcse-card-result-title{word-break:break-all;line-height:16px;max-height:33px;overflow:hidden}#bdcsWnCard .bcse-card-center a{font-size:14px;color:#333;text-decoration:none}#bdcsWnCard .bcse-card-result-title a:visited{color:#333}#bdcsWnCard .bcse-card-result-abstract{font-size:12px;word-break:break-all;color:#bfbfbf;height:28px;line-height:14px;margin-top:10px;overflow:hidden}#bdcsWnCard .bcse-card-result-next{font-size:14px;width:100%;line-height:16px;height:16px;overflow:hidden;color:#333;margin-top:15px}.clearfix:after{content:'';display:block;clear:both;height:0}.clearfix{zoom:1}",
    AceTemplate = function() {
        function e(e) {
            var t = [];
            return t.push("with(this){"),
            t.push(e.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/g,
            function(e) {
                return ['#{decodeURIComponent("', encodeURIComponent(e), '")}'].join("")
            }).replace(/[\r\n]+/g, "\n").replace(/^\n+|\s+$/gm, "").replace(/((^\s*[#<].*$)\s?)+/gm,
            function(e) {
                return e = ['"', e.replace(/&none;/g, "").replace(/["'\\]/g, "\\$&").replace(/\n/g, "\\n").replace(/(!?#)\{(.*?)\}/g,
                function(e, t, i) {
                    i = i.replace(/\\n/g, "\n").replace(/\\([\\'"])/g, "$1");
                    var n = /^[a-z$][\w+$]+$/i.test(i) && !/^(true|false|NaN|null|this)$/.test(i);
                    return ['",', n ? ["typeof ", i, '=="undefined"?"":'].join("") : "", "String(" + i + ').replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\'/g, "&#39;")', ',"'].join("")
                }), '"'].join("").replace(/^"",|,""$/g, ""),
                e ? ["_output_.push(", e, ");"].join("") : ""
            })),
            t.push("}"),
            new Function("_output_", "helper", t.join(""))
        }
        function t(t) {
            var i = e(t);
            return function(e, t) {
                var n = [];
                return i.call(e, n, t),
                n.join("")
            }
        }
        return {
            format: function(e, i, n) {
                return e ? t(e)(i, n) : ""
            },
            rander: t
        }
    } (),
    utils = function() {
        function e(e) {
            var t = "";
            for (var i in e) if (e.hasOwnProperty(i)) {
                t += i + "{";
                for (var n in e[i]) e[i].hasOwnProperty(n) && (t += n + ":" + e[i][n] + ";");
                t += "}"
            }
            return t
        }
        function t(e, t) {
            var i, n = e || {};
            for (i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
            return n
        }
        function i(e, t) {
            var n, s = e || {};
            for (n in t) t.hasOwnProperty(n) && ("[object Object]" === Object.prototype.toString.call(t[n]) ? (e[n] = e[n] || {},
            s[n] = i(e[n], t[n])) : s[n] = t[n]);
            return s
        }
        function n(e, t) {
            if (t = t || document, t.getElementsByClassName) return t.getElementsByClassName(e);
            for (var i = [], n = t.getElementsByTagName("*"), s = new RegExp("(^|\\s)" + e.replace(/\-/g, "\\-") + "(\\s|$)"), o = 0, r = n.length; r > o; o++) s.test(n[o].className) && i.push(n[o]);
            return i
        }
        function s(e, t) {
            var i = /\W/.test(e) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + e.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : N[e] = N[e] || _tmpl(document.getElementById(e).innerHTML);
            return t ? i(t) : i
        }
        function o(e) {
            return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
        }
        function r(e) {
            var t = String(e).replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
            return t.replace(/&#([\d]+);/g,
            function(e, t) {
                return String.fromCharCode(parseInt(t, 10))
            })
        }
        function a(e) {
            return e.replace(/-([\da-z])/gi,
            function(e, t) {
                return (t + "").toUpperCase()
            })
        }
        function l(e) {
            return e.replace(/([A-Z])/g, "-$1").toLowerCase()
        }
        function c() {
            var e = document.createElement("div");
            return e.style.cssText = "float:left",
            e.style.cssFloat ? "cssFloat": "styleFloat"
        }
        function d(e, t) {
            var i = "float" === t ? c() : a(t),
            n = l(t);
            return e.style.inlineName ? e.style[i] : document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(e, null).getPropertyValue(n) : e.currentStyle ? e.currentStyle[i] : null
        }
        function u(e) {
            return e && e.preventDefault ? e.preventDefault() : window.event.returnValue = !1,
            !1
        }
        function g(e) {
            return e ? e.replace(/^\s+|\s+$/g, "") : void 0
        }
        function p(e) {
            return e ? e.replace(/\s+/g, " ") : void 0
        }
        function f(e, t) {
            var i, n, s = t;
            if ("string" == typeof t && (s = s.split(" ")), 1 === e.nodeType) if (e.className || 1 !== s.length) for (var o = 0,
            r = s.length; r > o; o++) i = s[o],
            n = new RegExp("\\b(" + i + ")\\b"),
            n.test(e.className) || (e.className = e.className + " " + i);
            else e.className = s[0];
            e.className = g(e.className),
            e.className = p(e.className)
        }
        function m(e) {
            var t = e.elements,
            i = "";
            if (t) {
                for (var n = 0; n < t.length; n++)("hidden" == t[n].type || "text" == t[n].type) && n < t.length - 1 && "" != t[n].name && (i += t[n].name + "=" + t[n].value + "&"),
                "hidden" != t[n].type && "text" != t[n].type || n != t.length - 1 || "" != t[n].name && (i += t[n].name + "=" + t[n].value);
                return i
            }
            return ""
        }
        function h(e, t) {
            var i, n;
            for (i in t) t.hasOwnProperty(i) && (n = "float" === i ? c() : a(i), e.style[n] = t[i])
        }
        function b(e) {
            var t = new RegExp("(^| )" + e + "=([^;]*)(;|$)"),
            i = t.exec(document.cookie);
            return i ? i[2] : null
        }
        function C(e, t, i) {
            document.addEventListener ? e.addEventListener(t, i, !1) : document.attachEvent && e.attachEvent("on" + t,
            function(t) {
                t.preventDefault = function() {
                    t.returnValue = !1
                },
                t.stopPropagation = function() {
                    t.cancelBubble = !0
                },
                i.call(e, t)
            })
        }
        function v(e, t, i) {
            document.removeEventListener ? e.removeEventListener(t, i, !1) : document.detachEvent ? e.detachEvent("on" + t, i) : e["on" + t] = null
        }
        function y(e) {
            var t = navigator.userAgent.toLowerCase(),
            i = -1 != t.indexOf("opera"),
            n = ( - 1 != t.indexOf("msie") && !i, document.getElementById(e));
            if (null === n.parentNode || "none" == n.style.display) return ! 1;
            var s, o = null,
            r = [];
            if (n.getBoundingClientRect) {
                s = n.getBoundingClientRect();
                var a = Math.max(document.documentElement.scrollTop, document.body.scrollTop),
                l = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
                return {
                    x: s.left + l,
                    y: s.top + a
                }
            }
            if (document.getBoxObjectFor) {
                s = document.getBoxObjectFor(n);
                var c = n.style.borderLeftWidth ? parseInt(n.style.borderLeftWidth) : 0,
                d = n.style.borderTopWidth ? parseInt(n.style.borderTopWidth) : 0;
                r = [s.x - c, s.y - d]
            } else {
                if (r = [n.offsetLeft, n.offsetTop], o = n.offsetParent, o != n) for (; o;) r[0] += o.offsetLeft,
                r[1] += o.offsetTop,
                o = o.offsetParent; ( - 1 != t.indexOf("opera") || -1 != t.indexOf("safari") && "absolute" == n.style.position) && (r[0] -= document.body.offsetLeft, r[1] -= document.body.offsetTop)
            }
            for (o = n.parentNode ? n.parentNode: null; o && "BODY" != o.tagName && "HTML" != o.tagName;) r[0] -= o.scrollLeft,
            r[1] -= o.scrollTop,
            o = o.parentNode ? o.parentNode: null;
            return {
                x: r[0],
                y: r[1]
            }
        }
        function w(e, t) {
            var i = " " + t + " ",
            n = /[\t\r\n]/g;
            return 1 === e.nodeType && (" " + e.className + " ").replace(n, " ").indexOf(i) >= 0 ? !0 : !1
        }
        function x(e, t, i, n) {
            C(e, t,
            function(t) {
                for (var s = t.target || t.srcElement; ! w(s, i) && s != e;) s = s.parentNode;
                w(s, i) && n.call(s, t)
            })
        }
        function _(e) {
            var t, i, n = document.createElement("div");
            return n.style.cssText = "position: absolute; top: 0; left: 0",
            document.body.appendChild(n),
            t = n.getBoundingClientRect().top,
            i = n.getBoundingClientRect().left,
            document.body.removeChild(n),
            n = null,
            {
                top: e.getBoundingClientRect().top - t,
                left: e.getBoundingClientRect().left - i,
                bottom: e.getBoundingClientRect().bottom - t,
                right: e.getBoundingClientRect().right - i
            }
        }
        function E(e) {
            var t = _(e);
            return t.right - t.left
        }
        function S(e) {
            var t = _(e);
            return t.bottom - t.top
        }
        function I(e) {
            return "" == e || e.match(/^\s+$/) ? !0 : !1
        }
        function k(e, t) {
            var i = document.createElement("script");
            i.readyState ? i.onreadystatechange = function() { ("loaded" === i.readyState || "complete" === i.readyState) && (i.onreadystatechange = null, t())
            }: i.onload = function() {
                t()
            },
            i.src = e,
            i.charset = "utf-8",
            i.async = !0,
            document.getElementsByTagName("head")[0].appendChild(i)
        }
        function F(e) {
            var t = [];
            for (e = e.firstChild; e; e = e.nextSibling) 3 !== e.nodeType || e.nodeValue.match(/^(\s|\n)+$/) ? t = t.concat(arguments.callee(e)) : t.push(e);
            return t
        }
        function T(e, t, i) {
            var n, s = Array.prototype.indexOf,
            o = e.length;
            if (0 === o) return - 1;
            if (i = +i || 0, n = 0 > i ? Math.max(0, i + o) : i, s) return s.call(e, t, n);
            for (; o > n; n++) if (n in e && e[n] === t) return n;
            return - 1
        }
        var N;
        return {
            convertJSON2CSS: e,
            extend: t,
            extendDeep: i,
            getElementsByClassName: n,
            tmpl: s,
            encodeHTML: o,
            decodeHTML: r,
            getStyle: d,
            setStyle: h,
            addClass: f,
            getCookie: b,
            addEvent: C,
            removeEvent: v,
            stopDefault: u,
            formSerialize: m,
            delegateEvent: x,
            getBoundingClientRect: _,
            getElementPos: y,
            getWidth: E,
            getHeight: S,
            isEmptyOrSpacing: I,
            loadScript: k,
            getTextNodes: F,
            indexOf: T
        }
    } ();
    utils.DOMReady = function(e) {
        function t(e) {
            for (p = 1; e = n.shift();) e()
        }
        var i, n = [],
        s = !1,
        o = document,
        r = o.documentElement,
        a = r.doScroll,
        l = "DOMContentLoaded",
        c = "addEventListener",
        d = "onreadystatechange",
        u = "readyState",
        g = a ? /^loaded|^c/: /^loaded|c/,
        p = g.test(o[u]);
        return o[c] && o[c](l, i = function() {
            o.removeEventListener(l, i, s),
            t()
        },
        s),
        a && o.attachEvent(d, i = function() { / ^c / .test(o[u]) && (o.detachEvent(d, i), t())
        }),
        e = a ?
        function(t) {
            self != top ? p ? t() : n.push(t) : function() {
                try {
                    r.doScroll("left")
                } catch(i) {
                    return setTimeout(function() {
                        e(t)
                    },
                    50)
                }
                t()
            } ()
        }: function(e) {
            p ? e() : n.push(e)
        }
    } (),
    utils.EventEmitter = function() {
        function e() {
            this.events = {},
            this.on = this.bind,
            this.off = this.remove,
            this.emit = this.trigger
        }
        return e.prototype.bind = function(e, t, i) {
            var n, s;
            return this.events[e] = this.events[e] || [],
            s = this.events[e],
            n = {
                handler: t,
                context: i
            },
            s.push(n),
            this
        },
        e.prototype.once = function(e, t, i) {
            function n() {
                s.remove(e, n),
                t.apply(this, arguments)
            }
            var s = this;
            return n.handler = t,
            this.bind(e, n, i),
            this
        },
        e.prototype.trigger = function() {
            var e = arguments[0],
            t = this.events[e] || [],
            i = Array.prototype.slice.call(arguments, 1);
            t = Array.prototype.slice.call(t, 0);
            for (var n = 0,
            s = t.length; s > n; n++) t[n].handler.apply(t[n].context || this, i);
            return this
        },
        e.prototype.remove = function(e, t) {
            var i = this.events[e] || [];
            if (0 === arguments.length) return this.events = {},
            this;
            if (1 === arguments.length) return this.events[e] = [],
            this;
            for (var n = 0,
            s = i.length; s > n; n++) if (i[n].handler === t || i[n].handler.handler === t) {
                i.splice(n, 1);
                break
            }
            return this
        },
        e
    } ();
    var FlyJSONP = function(e) {
        "use strict";
        var t, i, n, s, o, r, a, l, c;
        return i = function(e, t, i) {
            e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent ? e.attachEvent("on" + t, i) : e["on" + t] = i
        },
        n = function(i, n) {
            t.log("Garbage collecting!"),
            n.parentNode.removeChild(n),
            e[i] = void 0;
            try {
                delete e[i]
            } catch(s) {}
        },
        s = function(e, t) {
            var i, n, s = "";
            for (i in e) e.hasOwnProperty(i) && (i = t ? encodeURIComponent(i) : i, n = t ? encodeURIComponent(e[i]) : e[i], s += i + "=" + n + "&");
            return s.replace(/&$/, "")
        },
        o = function() {
            var e = "",
            t = [],
            i = "0123456789ABCDEF",
            n = 0;
            for (n = 0; 32 > n; n += 1) t[n] = i.substr(Math.floor(16 * Math.random()), 1);
            return t[12] = "4",
            t[16] = i.substr(3 & t[16] | 8, 1),
            e = "flyjsonp_" + t.join("")
        },
        r = function(e, i) {
            t.log(i),
            "undefined" != typeof e && e(i)
        },
        a = function(e, i) {
            t.log("GET success"),
            "undefined" != typeof e && e(i),
            t.log(i)
        },
        l = function(e, i) {
            t.log("POST success"),
            "undefined" != typeof e && e(i),
            t.log(i)
        },
        c = function(e) {
            t.log("Request complete"),
            "undefined" != typeof e && e()
        },
        t = {},
        t.options = {
            debug: !1
        },
        t.init = function(e) {
            var i;
            t.log("Initializing!");
            for (i in e) e.hasOwnProperty(i) && (t.options[i] = e[i]);
            return t.log("Initialization options"),
            t.log(t.options),
            !0
        },
        t.log = function(i) {
            e.console && t.options.debug && e.console.log(i)
        },
        t.get = function(d) {
            d = d || {};
            var u = d.url,
            g = d.callbackParameter || "callback",
            p = d.parameters || {},
            f = e.document.createElement("script"),
            m = o(),
            h = "?";
            if (!u) throw new Error("URL must be specified!");
            p[g] = m,
            u.indexOf("?") >= 0 && (h = "&"),
            u += h + s(p, !0),
            e[m] = function(e) {
                "undefined" == typeof e ? r(d.error, "Invalid JSON data returned") : "post" === d.httpMethod ? (e = e.query.results, e && e.postresult ? (e = e.postresult.json ? e.postresult.json: e.postresult, l(d.success, e)) : r(d.error, "Invalid JSON data returned")) : a(d.success, e),
                n(m, f),
                c(d.complete)
            },
            t.log("Getting JSONP data"),
            f.setAttribute("src", u),
            f.setAttribute("charset", "utf-8"),
            e.document.getElementsByTagName("head")[0].appendChild(f),
            i(f, "error",
            function() {
                n(m, f),
                c(d.complete),
                r(d.error, "Error while trying to access the URL")
            })
        },
        t.post = function(e) {
            e = e || {};
            var i, n, o = e.url,
            r = e.parameters || {},
            a = {};
            if (!o) throw new Error("URL must be specified!");
            i = encodeURIComponent('select * from jsonpost where url="' + o + '" and postdata="' + s(r, !1) + '"'),
            n = "http://query.yahooapis.com/v1/public/yql?q=" + i + "&format=json&env=" + encodeURIComponent("store://datatables.org/alltableswithkeys"),
            a.url = n,
            a.httpMethod = "post",
            "undefined" != typeof e.success && (a.success = e.success),
            "undefined" != typeof e.error && (a.error = e.error),
            "undefined" != typeof e.complete && (a.complete = e.complete),
            t.get(a)
        },
        t
    } (window),
    urlConfig = {
        urlAdRoot: "http://rp.baidu.com/rpadroute/router?",
        urlRoot: "http://znsv.baidu.com/"
    };
    urlConfig.sug = urlConfig.urlRoot + "customer_search/api/sug",
    urlConfig.hot = urlConfig.urlRoot + "customer_search/api/hot",
    urlConfig.log = urlConfig.urlRoot + "customer_search/click",
    urlConfig.adClickLog = urlConfig.urlRoot + "customer_search/adclick",
    urlConfig.adDispLog = urlConfig.urlRoot + "customer_search/addisp",
    urlConfig.rec = urlConfig.urlRoot + "customer_search/api/rec",
    urlConfig.link = urlConfig.urlRoot + "customer_search/api/link",
    urlConfig.ping = urlConfig.urlRoot + "customer_search/api/ping",
    urlConfig.card = "http://zhannei.baidu.com/api/customsearch/search",
    urlConfig.ad = urlConfig.urlAdRoot + "logid=" + siteConfig.logId + "&plate_url=" + encodeURIComponent(window.location.href) + "&prod_id=ad_cse_site&referrer=" + encodeURIComponent(document.referrer);
    var pageLog = {
        version: "1.0",
        logid: siteConfig.logId,
        prod_id: "cse",
        page_id: "content_page",
        source: "new",
        site_id: siteConfig.siteId
    },
    adLog = {
        version: "1.0",
        logid: siteConfig.logId,
        site_id: siteConfig.siteId,
        clk_type: 0,
        log_type: 1
    },
    adDispLog = {
        version: "1.0",
        logid: siteConfig.logId,
        site_id: siteConfig.siteId,
        disp_type: 0,
        log_type: 0
    },
    bdcsUtils = function() {
        function insertCSS(e, t, i) {
            t = t === !1 ? !1 : !0,
            i = i || "bdcs-styleElem",
            t && (e = (e || "").replace(bdcsClassRegex, ".bdcs-container .bdcs-"));
            var n = document.getElementById("znBdcsStyle");
            if (n) n.styleSheet ? (cssCache.push(e), n.styleSheet.cssText = cssCache.join("\n")) : n.appendChild(document.createTextNode(e));
            else {
                var s = document.createElement("style");
                s.id = "znBdcsStyle",
                s.rel = "stylesheet",
                s.type = "text/css";
                var o = document.getElementsByTagName("head");
                if (o) {
                    var r = o[0];
                    r.children[0] ? r.insertBefore(s, r.children[0]) : r.appendChild(s)
                }
                s.styleSheet ? (s.styleSheet.cssText = e, cssCache.push(e)) : s.appendChild(document.createTextNode(e))
            }
        }
        function removeCSS(e) {
            e = e || "bdcs-styleElem";
            for (var t = document.getElementsByTagName("style"), i = t.length - 1; i >= 0; i--) t[i].name == e && t[i].parentNode.removeChild(t[i])
        }
        function getCSSFromSetting(e) {
            var t = e + "{",
            i = siteConfig.settings.css[e];
            for (var n in i) i.hasOwnProperty(n) && (t += n + ":" + i[n] + ";");
            return t += "}"
        }
        function getNest(target) {
            var result;
            try {
                return result = eval(target)
            } catch(e) {
                return 0
            }
        }
        var bdcsClassRegex = /\.bdcs-/g,
        cssCache = [];
        return {
            insertCSS: insertCSS,
            removeCSS: removeCSS,
            getCSSFromSetting: getCSSFromSetting,
            getNest: getNest
        }
    } ();
    window.bdcs = {
        utils: {
            encodeHTML: function(e) {
                return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
            }
        }
    };
    var log = function() {
        function e(e) {
            var t = "_rpLog-" + (new Date).getTime(),
            i = new Image;
            window[t] = i,
            i.onload = i.onerror = function() {
                window[t] = null
            },
            i.src = e,
            i = null
        }
        function t(e, t) {
            var i, n = e || {};
            for (i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
            return n
        }
        function i(i) {
            var n, s = {
                logid: 0,
                version: 0,
                prod_id: "rp",
                plate_url: encodeURIComponent(window.location.href),
                referrer: encodeURIComponent(document.referrer),
                time: (new Date).getTime()
            },
            o = s,
            r = [],
            a = i;
            "?" !== a.charAt(a.length - 1) && (a += "?");
            for (var l = 1,
            c = arguments.length; c > l; l++)"[object Object]" === Object.prototype.toString.call(arguments[l]) && (o = t(o, arguments[l]));
            for (var n in o) r.push(n + "=" + o[n]);
            e(a + r.join("&")),
            "[object Function]" === Object.prototype.toString.call(arguments[arguments.length - 1]) && arguments[arguments.length - 1].call()
        }
        return {
            send: i
        }
    } (),
    Placeholder = function() {
        function e(e, t) {
            var i, n = e || {};
            for (i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
            return n
        }
        function t(e) {
            var t, i, n = document.createElement("div");
            return n.style.cssText = "position: absolute; top: 0; left: 0",
            document.body.appendChild(n),
            t = n.getBoundingClientRect().top,
            i = n.getBoundingClientRect().left,
            document.body.removeChild(n),
            n = null,
            {
                top: e.getBoundingClientRect().top - t,
                left: e.getBoundingClientRect().left - i,
                bottom: e.getBoundingClientRect().bottom - t,
                right: e.getBoundingClientRect().right - i
            }
        }
        function i(e) {
            return e.replace(/-([\da-z])/gi,
            function(e, t) {
                return (t + "").toUpperCase()
            })
        }
        function n(e) {
            return e.replace(/([A-Z])/g, "-$1").toLowerCase()
        }
        function s() {
            var e = document.createElement("div");
            return e.style.cssText = "float:left",
            e.style.cssFloat ? "cssFloat": "styleFloat"
        }
        function o(e, t) {
            var o = "float" === t ? s() : i(t),
            r = n(t);
            return e.style.inlineName ? e.style[o] : document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(e, null).getPropertyValue(r) : e.currentStyle ? e.currentStyle[o] : null
        }
        function r(e, t) {
            var n, o;
            for (n in t) t.hasOwnProperty(n) && (o = "float" === n ? s() : i(n), e.style[o] = t[n])
        }
        function a(e, t, i) {
            document.addEventListener ? e.addEventListener(t, i, !1) : document.attachEvent && e.attachEvent("on" + t,
            function(t) {
                t.preventDefault = function() {
                    t.returnValue = !1
                },
                t.stopPropagation = function() {
                    t.cancelBubble = !0
                },
                i.call(e, t)
            })
        }
        function l(t) {
            var i = {
                placeholderColor: "#888",
                paddingLeft: 3,
                type: "labelFocusEmpty"
            };
            this.options = e(i, t || {}),
            this.placeholderPuppet,
            this.focusTimer,
            this.banKeyCode = [27, 37, 38, 39, 40],
            this.init()
        }
        var c = function() {
            for (var e, t = 3,
            i = document.createElement("div"), n = i.getElementsByTagName("i"); i.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->", n[0];);
            return t > 4 ? t: e
        } ();
        return l.prototype.init = function() {
            var e, t = this.options.inputElem,
            i = this;
            if (t && !("placeholder" in document.createElement("input")) && t.getAttribute("placeholder")) {
                switch (this.createPlaceholderPuppet(), e = this.placeholderPuppet, this.options.type) {
                case "labelInputEmpty":
                    a(e, "click",
                    function() {
                        t.focus()
                    }),
                    a(t, "keydown",
                    function(e) {
                        var t = e || window.event; - 1 === utils.indexOf(i.banKeyCode, t.keyCode) && i.hidePlaceholderPuppet()
                    }),
                    a(t, "keyup",
                    function() {
                        i.checkInputEmpty()
                    }),
                    a(t, "propertychange",
                    function() {
                        i.checkInputEmpty()
                    }),
                    a(t, "blur",
                    function(e) {
                        i.checkInputEmpty(),
                        9 == c && ("focus" === e.type ? document.addEventListener("selectionchange",
                        function() {
                            i.checkInputEmpty()
                        },
                        !1) : document.removeEventListener("selectionchange",
                        function() {
                            i.checkInputEmpty()
                        },
                        !1))
                    }),
                    a(t, "focus",
                    function(e) {
                        9 == c && ("focus" === e.type ? document.addEventListener("selectionchange",
                        function() {
                            i.checkInputEmpty()
                        },
                        !1) : document.removeEventListener("selectionchange",
                        function() {
                            i.checkInputEmpty()
                        },
                        !1))
                    });
                    break;
                case "labelFocusEmpty":
                    a(e, "click",
                    function() {
                        t.focus()
                    }),
                    a(t, "focus",
                    function() {
                        i.hidePlaceholderPuppet()
                    }),
                    a(t, "blur",
                    function() {
                        i.checkInputEmpty()
                    })
                }
                t.value && this.hidePlaceholderPuppet()
            }
        },
        l.prototype.createPlaceholderPuppet = function() {
            var e = this.options.inputElem,
            i = e.getAttribute("placeholder"),
            n = (o(e, "height"), o(e, "line-height"), o(e, "font-size")),
            s = o(e, "font-family"),
            a = (o(e, "padding-top"), o(e, "padding-bottom"), o(e, "borderTopWidth"), o(e, "borderBottomWidth"), o(e, "margin-top")),
            l = o(e, "margin-bottom"),
            c = o(e, "margin-left"),
            d = t(e);
            inputElemOuterHeight = d.bottom - d.top,
            inputElemOuterWidth = d.right - d.left,
            this.placeholderPuppet = document.createElement("label"),
            this.placeholderPuppet.setAttribute("for", e.id || ""),
            this.placeholderPuppet.setAttribute("id", e.id + "-label" || ""),
            this.placeholderPuppet.innerHTML = i,
            r(this.placeholderPuppet, {
                cursor: "text",
                position: "absolute",
                "padding-left": this.options.paddingLeft + "px",
                width: Math.max(inputElemOuterWidth - this.options.paddingLeft, 0) + "px",
                height: Math.max(inputElemOuterHeight, 0) + "px",
                "line-height": Math.max(inputElemOuterHeight, 0) + "px",
                "margin-top": a,
                "margin-bottom": l,
                "margin-left": c,
                color: this.options.placeholderColor,
                "font-size": n,
                "font-family": s
            }),
            e.parentNode.insertBefore(this.placeholderPuppet, e)
        },
        l.prototype.setTimer = function() {
            var e = (this.options.inputElem, this);
            this.focusTimer = setInterval(function() {
                e.checkInputEmpty()
            },
            100)
        },
        l.prototype.clearTimer = function() {
            this.focusTimer && clearInterval(this.focusTimer)
        },
        l.prototype.showPlaceholderPuppet = function() {
            this.placeholderPuppet.style.display = ""
        },
        l.prototype.hidePlaceholderPuppet = function() {
            this.placeholderPuppet.style.display = "none"
        },
        l.prototype.checkInputEmpty = function() {
            this.options.inputElem.value ? this.hidePlaceholderPuppet() : this.showPlaceholderPuppet()
        },
        l
    } (),
    Sug = function() {
        function e(e, t) {
            var i, n = e || {};
            for (i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
            return n
        }
        function t(e) {
            return "" == e || e.match(/^\s+$/) ? !0 : !1
        }
        function i(e, t, i) {
            document.addEventListener ? e.addEventListener(t, i, !1) : document.attachEvent && e.attachEvent("on" + t,
            function(t) {
                t.preventDefault = function() {
                    t.returnValue = !1
                },
                t.stopPropagation = function() {
                    t.cancelBubble = !0
                },
                i.call(e, t)
            })
        }
        function n(e) {
            return e.replace(/-([\da-z])/gi,
            function(e, t) {
                return (t + "").toUpperCase()
            })
        }
        function s(e) {
            return e.replace(/([A-Z])/g, "-$1").toLowerCase()
        }
        function o() {
            var e = document.createElement("div");
            return e.style.cssText = "float:left",
            e.style.cssFloat ? "cssFloat": "styleFloat"
        }
        function r(e, t) {
            var i = "float" === t ? o() : n(t),
            r = s(t);
            return e.style.inlineName ? e.style[i] : document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(e, null).getPropertyValue(r) : e.currentStyle ? e.currentStyle[i] : null
        }
        function a(e, t) {
            var i, s;
            for (i in t) t.hasOwnProperty(i) && (s = "float" === i ? o() : n(i), e.style[s] = t[i])
        }
        function l(e) {
            for (var t = 0,
            i = 0; e;) t += e.offsetTop,
            i += e.offsetLeft,
            e = e.offsetParent;
            return {
                top: t,
                left: i
            }
        }
        function c(e) {
            var t, i, n = document.createElement("div");
            return n.style.cssText = "position: absolute; top: 0; left: 0",
            document.body.appendChild(n),
            t = n.getBoundingClientRect().top,
            i = n.getBoundingClientRect().left,
            document.body.removeChild(n),
            n = null,
            {
                top: e.getBoundingClientRect().top - t,
                left: e.getBoundingClientRect().left - i,
                bottom: e.getBoundingClientRect().bottom - t,
                right: e.getBoundingClientRect().right - i
            }
        }
        function d(e) {
            return e ? e.replace(/^\s+|\s+$/g, "") : void 0
        }
        function u(e) {
            return e ? e.replace(/\s+/g, " ") : void 0
        }
        function g(e, t) {
            var i, n, s = t;
            if ("string" == typeof t && (s = s.split(" ")), 1 === e.nodeType) if (e.className || 1 !== s.length) for (var o = 0,
            r = s.length; r > o; o++) i = s[o],
            n = new RegExp("\\b(" + i + ")\\b"),
            n.test(e.className) || (e.className = e.className + " " + i);
            else e.className = s[0];
            e.className = d(e.className),
            e.className = u(e.className)
        }
        function p(e, t) {
            var i, n, s = t;
            if ("string" == typeof t && (s = s.split(" ")), 1 === e.nodeType && e.className) for (var o = 0,
            r = s.length; r > o; o++) i = s[o],
            n = new RegExp("\\b(" + i + ")\\b"),
            n.test(e.className) && (e.className = e.className.replace(n, " "));
            e.className = d(e.className) || "",
            e.className = u(e.className) || ""
        }
        function f(e, t) {
            var i = " " + t + " ",
            n = /[\t\r\n]/g;
            return 1 === e.nodeType && (" " + e.className + " ").replace(n, " ").indexOf(i) >= 0 ? !0 : !1
        }
        function m(e, t) {
            if (t = t || document, t.getElementsByClassName) return t.getElementsByClassName(e);
            for (var i = [], n = t.getElementsByTagName("*"), s = new RegExp("(^|\\s)" + e.replace(/\-/g, "\\-") + "(\\s|$)"), o = 0, r = n.length; r > o; o++) s.test(n[o].className) && i.push(n[o]);
            return i
        }
        function h(e, t, n, s) {
            i(e, t,
            function(t) {
                for (var i = t.target || t.srcElement; ! f(i, n) && i != e;) i = i.parentNode;
                f(i, n) && s.call(i, t)
            })
        }
        function b(e, t) {
            var i = /\W/.test(e) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + e.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : v[e] = v[e] || b(document.getElementById(e).innerHTML);
            return t ? i(t) : i
        }
        function C(t) {
            var i = {
                sugListBorderWidth: 1,
                offset: {
                    top: 0,
                    left: 0
                },
                type: "",
                dataType: "jsonp",
                delay: 150,
                completeWhenKeyUpDown: !1
            };
            this.options = e(i, t || {}),
            this.dataCache = {},
            this.sugJsonData = {},
            this.selectedIndex = -1,
            this.inputTimer,
            this.intervalTimer,
            this.preValue,
            this.valueCache,
            this.init()
        }
        String.prototype.trim || (String.prototype.trim = function() {
            return this.replace("/^s+|s+$/g", "")
        });
        var v, y = function() {
            for (var e, t = 3,
            i = document.createElement("div"), n = i.getElementsByTagName("i"); i.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->", n[0];);
            return t > 4 ? t: e
        } ();
        return C.prototype.init = function() {
            var e = this;
            switch (this.setStyle(), utils.DOMReady(function() {
                e.setStyle()
            }), this.options.type) {
            case "input":
                this.bindInputEvent();
                break;
            case "interval":
                this.bindIntervalEvent()
            }
            this.bindSugListItemEvent(),
            this.addLog()
        },
        C.prototype.bindInputEvent = function() {
            var e = this.options.inputElem,
            n = this,
            s = this.keydownHandler(),
            o = (this.keyupHandler(), this.inputHandler());
            i(e, "keydown", s),
            i(e, "input",
            function() {
                o(),
                window.bdcs.search_input_time || (window.bdcs.search_input_time = +new Date)
            }),
            i(e, "propertychange",
            function() {
                o(),
                window.bdcs.search_input_time || (window.bdcs.search_input_time = +new Date)
            }),
            i(e, "blur",
            function(e) {
                9 == y && ("focus" === e.type ? document.addEventListener("selectionchange", o, !1) : document.removeEventListener("selectionchange", o, !1)),
                setTimeout(function() {
                    n.hideSug()
                },
                n.options.delay)
            }),
            i(e, "focus",
            function(e) {
                setTimeout(function() {
                    n.prepareSug()
                },
                n.options.delay),
                9 == y && ("focus" === e.type ? document.addEventListener("selectionchange", o, !1) : document.removeEventListener("selectionchange", o, !1))
            }),
            i(this.options.sugListElem, "mouseout",
            function() {
                n.selectedIndex = -1
            }),
            this.options.submitElem && i(this.options.submitElem, "click",
            function(e) {
                t(n.getCurrentValue()) && e.preventDefault()
            })
        },
        C.prototype.bindIntervalEvent = function() {
            var e = this.options.inputElem,
            n = this,
            s = this.keydownHandler();
            this.inputHandler(),
            i(e, "focus",
            function() {
                n.intervalTimer && clearInterval(n.intervalTimer),
                n.intervalTimer = setInterval(function() {
                    n.prepareSug()
                },
                100)
            }),
            i(e, "blur",
            function() {
                n.intervalTimer && clearInterval(n.intervalTimer),
                setTimeout(function() {
                    n.hideSug()
                },
                n.options.delay)
            }),
            i(e, "keydown", s),
            i(e, "input",
            function() {
                window.bdcs.search_input_time || (window.bdcs.search_input_time = +new Date)
            }),
            i(e, "propertychange",
            function() {
                window.bdcs.search_input_time || (window.bdcs.search_input_time = +new Date)
            }),
            i(this.options.sugListElem, "mouseout",
            function() {
                n.selectedIndex = -1
            }),
            this.options.submitElem && i(this.options.submitElem, "click",
            function(e) {
                t(n.getCurrentValue()) && e.preventDefault()
            })
        },
        C.prototype.bindSugListItemEvent = function() {
            var e = this;
            h(this.options.sugListElem, "mouseover", this.options.itemClassName,
            function(t) {
                var i = (t.target || t.srcElement, e.getCurrentValue());
                e.clearCurrent(),
                e.highlightItem(i, this),
                e.selectedIndex = this.getAttribute("data-index")
            }),
            h(this.options.sugListElem, "mouseout", this.options.itemClassName,
            function(t) {
                var i = t.target || t.srcElement;
                dataValue = "LI" == i.nodeName ? i.getAttribute("data-value") : i.parentNode.getAttribute("data-value"),
                dataValue ? h(e.options.sugElem, "mouseout", e.options.adRightClassName,
                function() {
                    e.clearCurrent()
                }) : e.clearCurrent()
            }),
            h(this.options.sugListElem, "click", this.options.itemClassName,
            function(t) {
                t.target || t.srcElement,
                e.selectCurrent(),
                log.send(urlConfig.log, pageLog, {
                    search_input_time: window.bdcs.search_input_time,
                    query: encodeURIComponent(e.getCurrentValue()),
                    search_type: "sug",
                    sb: e.options.boxType || "normal",
                    search_time_used: +new Date - window.bdcs.search_input_time
                }),
                e.submit()
            })
        },
        C.prototype.setStyle = function() {
            var e = this.options.inputElem,
            t = c(this.options.inputElem);
            e.setAttribute("autocomplete", "off"),
            this.options.inputElemOuterHeight = t.bottom - t.top,
            this.options.inputElemOuterWidth = t.right - t.left,
            this.options.inputElemOffset = l(this.options.inputElem);
            var i = this.options.sugListWidth ? parseInt(this.options.sugListWidth) : this.options.inputElemOuterWidth - 2 * this.options.sugListBorderWidth;
            i = Math.max(i, 0) + "px";
            var n = this.options.inputElemOuterHeight + this.options.offset.top - this.options.sugListBorderWidth + "px",
            s = this.options.offset.left + "px",
            o = this.options.sugListWidth ? parseInt(this.options.sugListWidth) + "px": this.options.inputElemOuterWidth + 1 - 2 * this.options.sugListBorderWidth + "px";
            this.options.indep ? a(this.options.sugElem, {
                top: this.options.offset.top + this.options.inputElemOuterHeight + "px",
                left: this.options.offset.left + "px",
                width: o
            }) : "float" === this.options.boxType ? (n = this.options.inputElem.offsetTop + this.options.inputElem.offsetHeight + "px", a(this.options.sugElem, {
                top: n,
                left: s,
                width: o
            })) : "slide" === this.options.boxType ? a(this.options.sugElem, {
                top: n,
                left: s,
                width: o
            }) : "popup" === this.options.boxType ? a(this.options.sugElem, {
                top: n,
                left: s,
                width: o
            }) : "1" == this.options.templateId ? siteConfig.settings && "left" == siteConfig.settings.hotPosition && !siteConfig.isDemo ? a(this.options.sugElem, {
                top: document.getElementById("bdcs-search-inline").offsetTop + parseInt(siteConfig.settings.css[".bdcs-search"]["border-width"]) + document.getElementById("bdcs-search-form-input").offsetHeight + "px",
                left: document.getElementById("bdcs-search-inline").offsetLeft + this.options.offset.left + parseInt(siteConfig.settings.css[".bdcs-search"]["border-width"]) + "px",
                width: o
            }) : a(this.options.sugElem, {
                top: document.getElementById("bdcs-search-inline").offsetTop + parseInt(siteConfig.settings.css[".bdcs-search"]["border-width"]) + document.getElementById("bdcs-search-form-input").offsetHeight + "px",
                marginLeft: (siteConfig.settings.useChannels ? parseInt(siteConfig.settings.css["div#default-searchbox  .default-channel-meun"].width) + parseInt(siteConfig.settings.css[".bdcs-search"]["border-width"]) : "") + "px",
                width: o
            }) : siteConfig.isDemo ? a(this.options.sugElem, {
                top: document.getElementById("bdcs-search-inline").offsetTop + parseInt(siteConfig.settings.css[".bdcs-search"]["border-width"]) + document.getElementById("bdcs-search-form-input").offsetHeight + "px",
                width: o
            }) : a(this.options.sugElem, {
                top: document.getElementById("bdcs-search-inline").offsetTop + parseInt(siteConfig.settings.css[".bdcs-search"]["border-width"]) + document.getElementById("bdcs-search-form-input").offsetHeight + "px",
                left: document.getElementById("bdcs-search-inline").offsetLeft + this.options.offset.left + parseInt(siteConfig.settings.css[".bdcs-search"]["border-width"]) + "px",
                width: o
            })
        },
        C.prototype.keydownHandler = function() {
            var e = this;
            return function(t) {
                switch (t.keyCode) {
                case 27:
                    e.hideSug();
                    break;
                case 38:
                    e.selectPrev();
                    break;
                case 40:
                    e.selectNext();
                    break;
                case 13:
                    var i;
                    i = e.selectedIndex > -1 ? "sug": "normal",
                    e.selectCurrent(),
                    log.send(urlConfig.log, pageLog, {
                        search_input_time: window.bdcs.search_input_time,
                        query: encodeURIComponent(e.getCurrentValue()),
                        search_type: e.options.boxType ? e.options.boxType: "normal",
                        search_time_used: +new Date - window.bdcs.search_input_time
                    }),
                    e.focus();
                    break;
                default:
                    return ! 0
                }
                return ! 0
            }
        },
        C.prototype.keyupHandler = function() {
            var e = this;
            return function(t) {
                switch (t.keyCode) {
                case 27:
                case 38:
                case 40:
                    return ! 0
                }
                e.startSug()
            }
        },
        C.prototype.inputHandler = function() {
            var e = this;
            return function() {
                e.startSug()
            }
        },
        C.prototype.startSug = function() {
            var e = this;
            this.inputTimer && clearTimeout(this.inputTimer),
            this.inputTimer = setTimeout(function() {
                e.prepareSug()
            },
            this.options.delay)
        },
        C.prototype.getCurrentValue = function() {
            return this.options.inputElem.value
        },
        C.prototype.prepareSug = function() {
            var e = this.getCurrentValue();
            e != this.preValue ? (this.preValue = e, this.selectedIndex = -1, t(e) ? this.hideSug() : (this.valueCache = e, "undefined" == typeof this.dataCache[e] ? this.getData(e) : this.renderSugList(e))) : !t(e)
        },
        C.prototype.getData = function(e) {
            var t = this,
            i = this.options.url,
            n = "",
            s = this.options.data || {};
            for (var o in s) s.hasOwnProperty(o) && (n += "&" + o + "=" + s[o]);
            i = i.indexOf("?") >= 0 ? this.options.url + "&" + this.options.param + "=" + encodeURIComponent(e) + n: this.options.url + "?" + this.options.param + "=" + encodeURIComponent(e) + n,
            FlyJSONP.get({
                url: i,
                success: function(i) {
                    t.cacheData(e, i.data),
                    t.renderSugList(e)
                }
            })
        },
        C.prototype.cacheData = function(e, t) {
            this.dataCache[e] = t.sug,
            this.sugJsonData[e] = t
        },
        C.prototype.clearDataCache = function(e) {
            e ? this.dataCache[e] = null: this.dataCache = null
        },
        C.prototype.renderSugList = function(e, t) {
            if (e) {
                if ("bdcs-search-sug-list-item" == this.options.itemClassName) var i = 1;
                if ("sliding-search-sug-list-item" == this.options.itemClassName) var i = 2;
                if ("popup-search-sug-list-item" == this.options.itemClassName) var i = 3;
                if ("float-search-sug-list-item" == this.options.itemClassName) var i = 4;
                if ("bdcs-search-custom-sug-list-item" == this.options.itemClassName) var i = 5;
                if (siteConfig.settings) {
                    t = void 0 == t ? -1 : t;
                    var n = this.dataCache[e];
                    if (n && n.length > 0) {
                        var s = b(this.options.tmplString, {
                            data: n,
                            selectedIndex: t,
                            limit: n.length > this.options.sugListItemLimit ? this.options.sugListItemLimit: n.length,
                            boxType: i
                        });
                        this.options.sugListElem.innerHTML = s,
                        eventEmitter.emit("sug:assertSugListItem", this.sugJsonData[e], this),
                        eventEmitter.emit("sug:beforeHideRightSug"),
                        eventEmitter.emit("sug:beforeHideSug"),
                        this.showSug()
                    } else this.hideSug()
                }
            }
        },
        C.prototype.dispose = function() {},
        C.prototype.hideSug = function() {
            eventEmitter.emit("sug:beforeHideSug", this),
            this.options.sugElem.style.display = "none",
            this.getCurrentValue().length > 0 ? (this.preValue = this.valueCache, this.valueCache = this.getCurrentValue()) : (this.preValue = "", this.valueCache = ""),
            this.preValue = "",
            this.selectedIndex = -1
        },
        C.prototype.showSug = function() {
            var e = this.getCurrentValue(),
            t = this.options.sugElem;
            t.getElementsByTagName("li").length > 0 && (eventEmitter.emit("sug:beforeShowSug", this.sugJsonData[e], this), t.style.display = "block")
        },
        C.prototype.getInputHeight = function() {
            return this.options.inputElemOuterHeight
        },
        C.prototype.isShowSug = function() {
            return "none" != r(this.options.sugElem, "display")
        },
        C.prototype.selectNext = function() {
            var e, t, i, n = this.getCurrentValue();
            if (this.isShowSug() && (e = this.options.sugListElem, t = e.getElementsByTagName("li").length, this.selectedIndex == t - 1 ? this.selectedIndex = -1 : ++this.selectedIndex, i = e.getElementsByTagName("li")[this.selectedIndex], this.clearCurrent(), i && this.highlightItem(n, i), this.options.completeWhenKeyUpDown)) if ( - 1 == this.selectedIndex) this.options.inputElem.value = this.valueCache,
            this.preValue = this.valueCache;
            else {
                var s = m(this.options.valueClassName, i)[0].innerHTML;
                this.preValue = s,
                this.options.inputElem.value = s
            }
        },
        C.prototype.selectPrev = function() {
            var e, t, i, n = this.getCurrentValue();
            if (this.isShowSug() && (e = this.options.sugListElem, t = e.getElementsByTagName("li").length, -1 == this.selectedIndex ? this.selectedIndex = t - 1 : --this.selectedIndex, i = e.getElementsByTagName("li")[this.selectedIndex], this.clearCurrent(), i && this.highlightItem(n, i), this.options.completeWhenKeyUpDown)) if ( - 1 == this.selectedIndex) this.options.inputElem.value = this.valueCache,
            this.preValue = this.valueCache;
            else {
                var s = m(this.options.valueClassName, i)[0].innerHTML;
                this.preValue = s,
                this.options.inputElem.value = s
            }
        },
        C.prototype.highlightItem = function(e, t) {
            eventEmitter.emit("sug:beforeHighlightItem", t, this.sugJsonData[e], this),
            g(t, this.options.currentClassName)
        },
        C.prototype.clearCurrent = function() {
            for (var e = m(this.options.currentClassName), t = 0, i = e.length; i > t; t++) p(e[t], this.options.currentClassName);
            eventEmitter.emit("sug:beforeHideRightSug")
        },
        C.prototype.getSelectedItem = function() {
            var e = this.options.sugListElem;
            return this.isShowSug ? m(this.options.currentClassName, e)[0] : null
        },
        C.prototype.selectCurrent = function() {
            var e = this.getSelectedItem();
            if (e) {
                var t = window.bdcs.search_input_time;
                this.options.inputElem.value = m(this.options.valueClassName, e)[0].innerHTML,
                this.hideSug(),
                navigator.userAgent,
                this.options.inputElem.blur(),
                window.bdcs.search_input_time = t
            }
        },
        C.prototype.submit = function() {
            window.bdcs.search_input_time && (window.bdcs.search_input_time = 0),
            t(this.getCurrentValue()) || this.options.formElem.submit()
        },
        C.prototype.focus = function() {
            window.bdcs.search_input_time && (window.bdcs.search_input_time = 0),
            this.options.inputElem.focus()
        },
        C.prototype.addLog = function() {
            var e = this;
            h(this.options.sugElem, "click", this.options.adRightClassName,
            function(t) {
                var i = t.target || t.srcElement;
                log.send(urlConfig.adClickLog, adLog, {
                    ad_id: i.getAttribute("data-id"),
                    ad_price: i.getAttribute("data-num"),
                    ad_type: "search_ad_sug",
                    query: encodeURIComponent(e.getCurrentValue())
                })
            }),
            h(this.options.sugElem, "click", this.options.adSkinClassName,
            function(t) {
                var i = t.target || t.srcElement;
                log.send(urlConfig.adClickLog, adLog, {
                    ad_id: i.getAttribute("data-id"),
                    ad_price: i.getAttribute("data-num"),
                    ad_type: "search_ad_sug_show",
                    query: encodeURIComponent(e.getCurrentValue())
                })
            })
        },
        C
    } (),
    Zone = function() {
        function e(e, t, i) {
            window.attachEvent ? e.attachEvent("on" + t, i) : window.addEventListener && e.addEventListener(t, i, !1)
        }
        function t(e, t) {
            var i, n = e || {};
            for (i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
            return n
        }
        function i(e) {
            var i = {},
            e = t(i, e || {});
            e.inputElem && e.formElem && this.init(e)
        }
        return i.prototype.init = function(t) {
            function i() {
                var e = "getSelection" in window,
                t = document.getElementById("selectsearch-icon");
                t && t.parentNode.removeChild(t),
                setTimeout(function() {
                    selection = e ? window.getSelection() : document.selection.createRange();
                    var t = (e ? selection + "": selection.text).replace(/\n+/g, "");
                    t && t.length && (t.length > 76 && (t = t.substring(0, 76)), n(e, selection, t), log.send(urlConfig.log, pageLog, {
                        text: encodeURIComponent(t),
                        log_type: "zone_show",
                        site_id: siteConfig.siteId
                    }))
                },
                25)
            }
            function n(e, i, n) {
                var s = document.body.scrollTop + document.documentElement.scrollTop,
                o = document.body.scrollLeft + document.documentElement.scrollLeft;
                if (e) {
                    var r = i.getRangeAt(0).getBoundingClientRect();
                    if (0 == r.top && 0 == r.right) return;
                    var a = r.top > 35 ? r.top - 35 + s: s,
                    l = r.right + 70 > document.documentElement.clientWidth ? document.documentElement.clientWidth - 65 + o: r.right + 5 + o
                } else var c = i.boundingLeft + i.boundingWidth,
                a = i.boundingTop > 35 ? i.boundingTop - 35 + s: s,
                l = c + 70 > document.documentElement.clientWidth ? document.documentElement.clientWidth - 65 + o: c + o;
                var d = document.createElement("img");
                d.src = "http://img.baidu.com/img/iknow/qb/select-search.png",
                d.alt = "搜索",
                d.style.cssText = "width:65px; height:31px; border:0px none;";
                var u = document.createElement("a");
                u.id = "selectsearch-icon",
                u.style.cssText = "cursor:pointer; position:absolute;",
                u.onclick = function() {
                    u.parentNode.removeChild(u),
                    t.inputElem.value = n,
                    t.formElem.submit();
                    var e = "zone";
                    log.send(urlConfig.log, pageLog, {
                        search_input_time: window.bdcs.search_input_time,
                        query: encodeURIComponent(n),
                        search_type: e,
                        site_id: siteConfig.siteId,
                        plate_url: siteConfig.locationUrl || window.location.href,
                        search_time_used: +new Date - window.bdcs.search_input_time
                    })
                },
                u.style.left = l + "px",
                u.style.top = a + "px",
                u.appendChild(d),
                document.body.appendChild(u),
                d.onmouseup = function(e) {
                    e = e || window.event,
                    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
                }
            }
            e(document, "mouseup", i)
        },
        i
    } (),
    znDefultBox = window.znDefultBox || {};
    znDefultBox.index = function() {
        function e(e, t, i) {
            utils.addEvent(document.getElementById(e), "submit",
            function() {
                var e = document.getElementById(t).value;
                utils.isEmptyOrSpacing(e) || (log.send(urlConfig.log, pageLog, {
                    search_input_time: window.bdcs.search_input_time,
                    query: encodeURIComponent(e),
                    search_type: i,
                    search_time_used: +new Date - window.bdcs.search_input_time
                }), window.bdcs.search_input_time && (window.bdcs.search_input_time = 0))
            })
        }
        var t, i = 1,
        n = function() {
            new Placeholder({
                inputElem: document.getElementById("bdcs-search-form-input"),
                type: "labelFocusEmpty"
            });
            var n = document.getElementById("bdcs-search-form-input-label");
            n && (n.style.left = siteConfig.settings.useChannels && siteConfig.settings.customChannel.length > 0 ? parseInt(siteConfig.settings.css["div#default-searchbox  .default-channel-meun"].width) + 5 : "0", n.style.top = parseInt(siteConfig.settings.css[".bdcs-search-form-submit"].height) / 2 - 6),
            e("bdcs-search-form", "bdcs-search-form-input", "normal");
            var o = utils.convertJSON2CSS(siteConfig.settings.css);
            bdcsUtils.insertCSS(searchCSS + o),
            siteConfig.settings.useSetting && siteConfig.settings.useSug && (bdcsUtils.insertCSS(sugCSS), bdcsUtils.insertCSS(".bdcs-container{overflow:visible;}", !1)),
            siteConfig.settings.useChannels && siteConfig.settings.customChannel.length > 0 && bdcsUtils.insertCSS(".bdcs-search-form-input{width:" + (parseInt(siteConfig.settings.css[".bdcs-search-form-input"].width) - parseInt(siteConfig.settings.css["div#default-searchbox  .default-channel-meun"].width)) + "px;}");
            var r = parseInt(siteConfig.settings.css[".bdcs-search-form-submit"].height) + 2;
            bdcsUtils.insertCSS(".bdcs-search-form-submit{*height:" + r + "px;*margin-top:1px;}"),
            "MozAppearance" in document.documentElement.style && bdcsUtils.insertCSS(".bdcs-search-form-submit{height:" + r + "px;}");
            var a = parseInt(siteConfig.settings.css[".bdcs-search-form-submit"].height);
            if (bdcsUtils.insertCSS(".bdcs-search-form-submit{line-height:" + a + "px;}"), 0 === parseInt(siteConfig.settings.css[".bdcs-search-form-input"]["margin-right"]) && bdcsUtils.insertCSS(".bdcs-search-form-input{margin-right:-1px;}"), s(a), siteConfig.settings.useSetting && siteConfig.settings.useSug && (bdcsUtils.insertCSS(bdcsUtils.getCSSFromSetting(".bdcs-search-sug-list-item") + bdcsUtils.getCSSFromSetting(".bdcs-search-sug-list-item-value")), "MozAppearance" in document.documentElement.style && bdcsUtils.insertCSS("#bdcs-search-inline{height:" + (r + 2) + "px;}"), siteConfig.settings.css[".bdcs-search-sug-list"] && siteConfig.settings.css[".bdcs-search-sug-list"].width && (sugListWidth = siteConfig.settings.css[".bdcs-search-sug-list"].width)), siteConfig.settings.useSetting && siteConfig.settings.useHot && (bdcsUtils.insertCSS(hotCSS), bdcsUtils.insertCSS(bdcsUtils.getCSSFromSetting(".bdcs-hot") + bdcsUtils.getCSSFromSetting(".bdcs-hot-item")), "right" === siteConfig.settings.hotPosition ? bdcsUtils.insertCSS(".bdcs-search{float:left} .bdcs-hot{float:right}") : "left" === siteConfig.settings.hotPosition && bdcsUtils.insertCSS(".bdcs-search{float:right} .bdcs-hot{float:left}")), siteConfig.settings.useSetting && siteConfig.settings.useSug) {
                switch (eventEmitter.on("sug:beforeShowSug",
                function(e, t) {
                    if (!siteConfig.isDemo) {
                        var i = siteConfig.settings.useSetting ? 0 + (siteConfig.settings.useChannels ? parseInt(siteConfig.settings.css["div#default-searchbox  .default-channel-meun"].width) : 0) : parseInt(siteConfig.settings.sugListOffset.left) + (siteConfig.settings.useChannels ? parseInt(siteConfig.settings.css["div#default-searchbox  .default-channel-meun"].width) : 0),
                        n = document.getElementById("bdcs-search-sug");
                        n.style.top = document.getElementById("bdcs-search-inline").offsetTop + parseInt(siteConfig.settings.css[".bdcs-search"]["border-width"]) + document.getElementById("bdcs-search-form-input").offsetHeight + "px",
                        n.style.left = document.getElementById("bdcs-search-inline").offsetLeft + i + parseInt(siteConfig.settings.css[".bdcs-search"]["border-width"]) + "px",
                        n.style.marginLeft = "0px"
                    }
                    var s = t.options.sugListElem,
                    o = s.getElementsByTagName("li").length,
                    r = parseInt(siteConfig.settings.css[".bdcs-search-form-input"].width) + 2,
                    a = parseInt(siteConfig.settings.css[".bdcs-search-sug-list-item"].height) * o;
                    if (e) {
                        var l = e.skin.length;
                        if (r >= 200 && a >= 85 && 0 != l) {
                            var c = document.getElementById("bdcs-search-sug-skin"),
                            d = document.getElementById("bdcs-search-sug-skin-img");
                            d.src = e.skin.img_url,
                            c.href = urlConfig.ad + "&ad_id=" + e.skin.ad_id + "&ad_url=" + encodeURIComponent(e.skin.target_url) + "&ad_type=search_ad_sug_show&clk_type=0",
                            d.setAttribute("data-id", e.skin.ad_id),
                            d.setAttribute("data-num", e.skin.charge_info.price),
                            d.style.display = "inline",
                            c.style.display = "block",
                            log.send(urlConfig.adDispLog, adDispLog, {
                                ad_id: d.getAttribute("data-id"),
                                ad_price: d.getAttribute("data-num"),
                                ad_type: "search_ad_sug_show"
                            })
                        } else 0 == l && c && (d.style.display = "none", c.style.display = "none")
                    }
                }), eventEmitter.on("sug:beforeHighlightItem",
                function(e, t, i) {
                    null != e.getAttribute("data-value") ? eventEmitter.emit("sug:beforeShowRightSug", t, e, i) : eventEmitter.emit("sug:beforeHideRightSug")
                }), eventEmitter.on("sug:assertSugListItem",
                function(e, t) {
                    var i = t.options.sugListElem,
                    n = i.getElementsByTagName("li"),
                    s = n.length,
                    o = parseInt(siteConfig.settings.css[".bdcs-search-form-input"].width) + 2,
                    r = parseInt(siteConfig.settings.css[".bdcs-search-sug-list-item"].height) * s,
                    a = e.skin.length;
                    if (o >= 200 && r >= 200 && 0 == a) for (var l = 0,
                    c = n.length; c > l; l++) if (n[l].children[0].innerHTML == e.sug[l].title && 0 != e.sug[l].charge_info) {
                        var d = document.createElement("i");
                        utils.addClass(d, "bdcs-search-sug-i"),
                        d.innerHTML = "&gt",
                        n[l].appendChild(d),
                        n[l].setAttribute("data-value", e.sug[l].title),
                        utils.addClass(n[l], " sugRightAdv"),
                        n[l].children[0].style.display = "inline"
                    }
                }), eventEmitter.on("sug:beforeShowRightSug",
                function(e, t, i) {
                    var n = i.options.sugListElem,
                    s = n.getElementsByTagName("li"),
                    o = (s.length, parseInt(siteConfig.settings.css[".bdcs-search-form-input"].width) + 2, document.getElementById("bdcs-search-sug-adv-img")),
                    r = document.getElementById("bdcs-search-sug-adv"),
                    a = 100,
                    l = t.parentNode.clientHeight;
                    r.style.width = a + "px",
                    r.style.height = l + "px",
                    o.style.visibility = "hidden";
                    for (var c = function(e, t) {
                        var i = new Image;
                        i.src = t,
                        i.complete ? (_containImg(e, i, a, l), e.style.visibility = "visible") : i.onload = function() {
                            _containImg(e, i, a, l),
                            e.style.visibility = "visible",
                            i.onload = null
                        }
                    },
                    d = 0, u = e.sug.length; u > d; d++) if (t.children[0].innerHTML == e.sug[d].title) {
                        r.href = urlConfig.ad + "&ad_id=" + e.sug[d].ad_id + "&ad_url=" + encodeURIComponent(e.sug[d].target_url) + "&ad_type=search_ad_sug&clk_type=0",
                        o.src = e.sug[d].img_url,
                        c(o, e.sug[d].img_url),
                        o.setAttribute("data-id", e.sug[d].ad_id),
                        o.setAttribute("data-num", e.sug[d].charge_info.price);
                        break
                    }
                    r.style.display = "block",
                    log.send(urlConfig.adDispLog, adDispLog, {
                        ad_id: o.getAttribute("data-id"),
                        ad_price: o.getAttribute("data-num"),
                        ad_type: "search_ad_sug"
                    })
                }), eventEmitter.on("sug:beforeHideRightSug",
                function() {
                    var e = document.getElementById("bdcs-search-sug-adv");
                    e && (e.style.display = "none")
                }), siteConfig.settings.sugType) {
                case "novel":
                    sugTpl = sugNovelTpl;
                    break;
                case "music":
                    sugTpl = sugMusicTpl;
                    break;
                case "movie":
                    sugTpl = sugMovieTpl;
                    break;
                case "normal":
                default:
                    sugTpl = sugNormalTpl
                }
                new Sug({
                    formElem: document.getElementById("bdcs-search-form"),
                    inputElem: document.getElementById("bdcs-search-form-input"),
                    sugElem: document.getElementById("bdcs-search-sug"),
                    sugListElem: document.getElementById("bdcs-search-sug-list"),
                    submitElem: document.getElementById("bdcs-search-form-submit"),
                    templateId: siteConfig.settings.templateId,
                    offset: {
                        top: siteConfig.settings.useSetting ? 0 : parseInt(siteConfig.settings.sugListOffset.top),
                        left: siteConfig.settings.useSetting ? 0 + (siteConfig.settings.useChannels ? parseInt(siteConfig.settings.css["div#default-searchbox  .default-channel-meun"].width) : 0) : parseInt(siteConfig.settings.sugListOffset.left) + (siteConfig.settings.useChannels ? parseInt(siteConfig.settings.css["div#default-searchbox  .default-channel-meun"].width) : 0)
                    },
                    url: siteConfig.sugUrl || urlConfig.sug,
                    param: "wd",
                    data: {
                        ch: siteConfig.settings.sugType,
                        rn: siteConfig.settings.sugNum,
                        logid: siteConfig.logId,
                        sid: siteConfig.siteId,
                        uid: encodeURIComponent(siteConfig.locationUrl || window.location.href)
                    },
                    sugListWidth: siteConfig.settings.useSetting ? void 0 : sugListWidth,
                    sugListItemLimit: siteConfig.settings.sugNum,
                    tmplString: sugTpl,
                    itemClassName: "bdcs-search-sug-list-item",
                    currentClassName: "bdcs-search-sug-list-item-current",
                    valueClassName: "bdcs-search-sug-list-item-value",
                    itemAdClassName: "sugRightAdv",
                    adRightClassName: "bdcs-search-sug-adv",
                    adSkinClassName: "bdcs-search-sug-skin",
                    type: "interval",
                    completeWhenKeyUpDown: !1
                })
            } else siteConfig.settings.useSetting && (utils.addEvent(document.getElementById("bdcs-search-form-input"), "input",
            function() {
                window.bdcs.search_input_time || (window.bdcs.search_input_time = +new Date)
            }), utils.addEvent(document.getElementById("bdcs-search-form-input"), "propertychange",
            function() {
                window.bdcs.search_input_time || (window.bdcs.search_input_time = +new Date)
            }));
            if (siteConfig.settings.useSetting && siteConfig.settings.useHot) {
                var l = utils.getElementsByClassName("bdcs-hot-item");
                t && (l[i].className = l[i].className + " bdcs-adv", l[i].href = urlConfig.ad + "&ad_id=" + t.ad_id + "&ad_url=" + encodeURIComponent(t.target_url) + "&ad_type=search_ad_hotword&clk_type=0", l[i].setAttribute("data-id", t.ad_id), l[i].setAttribute("data-num", t.charge_info.price), bdcsUtils.insertCSS(".bdcs-adv{color:#f40}"))
            }
            if (siteConfig.settings.useSetting && siteConfig.settings.useHot) {
                for (var c = utils.getElementsByClassName("bdcs-hot-item"), d = 0, u = c.length; u > d; d++) utils.addEvent(c[d], "click",
                function() {
                    var e = this.innerHTML,
                    t = this.parentNode.id;
                    log.send(urlConfig.log, pageLog, {
                        search_input_time: +new Date,
                        query: encodeURIComponent(e),
                        search_type: "hot",
                        sb: t,
                        hot_type: siteConfig.settings.useHot && siteConfig.settings.hotFineWordsEnable ? 2 : 1,
                        search_time_used: 0
                    })
                });
                var g = utils.getElementsByClassName("bdcs-adv");
                0 != g.length && utils.addEvent(g[0], "click",
                function(e) {
                    var t = e.target || e.srcElement;
                    log.send(urlConfig.adClickLog, adLog, {
                        ad_id: t.getAttribute("data-id"),
                        ad_price: t.getAttribute("data-num"),
                        ad_type: "search_ad_hotword",
                        clk_type: 0
                    })
                })
            }
        },
        s = function(e) {
            if (siteConfig.settings.useChannels && siteConfig.settings.customChannel.length > 0) {
                var t = utils.getElementsByClassName("cse-default-channel-container");
                t.length > 0 && document.body.removeChild(t[0]);
                var i = document.createElement("div");
                i.className = "cse-default-channel-container",
                document.body.appendChild(i);
                var n = '<ul class="default-channel-list" id="default-channel-list"><%for(var i=0;i < settings.customChannel.length;i++){%><li data-id="<%= settings.customChannel[i].key%>"><%= settings.customChannel[i].name %></li><% } %></ul>';
                i.innerHTML = utils.tmpl(n, siteConfig);
                var s = document.getElementById("default-channel-meun"),
                o = document.getElementById("default-channel-list"),
                r = document.getElementById("default-channel-curr");
                e = "MozAppearance" in document.documentElement.style ? e + 2 : e,
                i.style.width = siteConfig.settings.css["div#default-searchbox  .default-channel-meun"].width,
                eventEmitter.on("channel:showChannel",
                function() {
                    i.style.left = utils.getElementPos("default-channel-meun").x + "px",
                    i.style.top = utils.getElementPos("default-channel-meun").y + e + 2 + "px"
                }),
                "MozAppearance" in document.documentElement.style && 2 == parseInt(siteConfig.settings.templateId) && bdcsUtils.insertCSS("#bdcs-search-inline{height:" + (e + 2) + "px;}"),
                bdcsUtils.insertCSS("#bdcs-search-inline{overflow:visible;}"),
                bdcsUtils.insertCSS("div#default-searchbox .default-channel-current{border-radius:" + siteConfig.settings.css[".bdcs-search-form-input"]["border-radius"] + ";}"),
                bdcsUtils.insertCSS("div#default-searchbox .default-channel-current i{top:" + (e / 2 - 3) + "px;}"),
                bdcsUtils.insertCSS("div#default-searchbox .default-channel-current{height:" + e + "px;line-height:" + e + "px;border-color:" + siteConfig.settings.css[".bdcs-search-form-input"]["border-color"] + "}", !1, "aaa"),
                bdcsUtils.insertCSS("div#default-searchbox  .default-channel-meun{border-radius:" + siteConfig.settings.css[".bdcs-search-form-input"]["border-radius"] + ";width:" + siteConfig.settings.css["div#default-searchbox  .default-channel-meun"].width + "}");
                var a = function(e) {
                    e.stopPropagation(),
                    utils.setStyle(o, {
                        display: "none"
                    })
                };
                "click" == siteConfig.settings.channelShowType ? (utils.removeEvent(s, "mouseout", a), utils.removeEvent(i, "mouseout", a), utils.addEvent(s, "click",
                function(e) {
                    e.stopPropagation(),
                    "none" == utils.getStyle(o, "display") ? (eventEmitter.emit("channel:showChannel"), utils.setStyle(o, {
                        display: "block"
                    })) : utils.setStyle(o, {
                        display: "none"
                    })
                }), utils.addEvent(window, "scroll",
                function() {
                    siteConfig.isDemo && utils.setStyle(o, {
                        display: "none"
                    }),
                    "none" == utils.getStyle(o, "display") || siteConfig.isDemo || eventEmitter.emit("channel:showChannel")
                })) : (utils.addEvent(s, "mouseover",
                function(e) {
                    e.stopPropagation(),
                    "none" == utils.getStyle(o, "display") && (utils.setStyle(o, {
                        display: "block"
                    }), eventEmitter.emit("channel:showChannel"))
                }), utils.addEvent(i, "mouseover",
                function(e) {
                    e.stopPropagation(),
                    "none" == utils.getStyle(o, "display") && (utils.setStyle(o, {
                        display: "block"
                    }), eventEmitter.emit("channel:showChannel"))
                }), utils.addEvent(i, "mouseout", a), utils.addEvent(s, "mouseout", a)),
                utils.addEvent(o, "click",
                function(e) {
                    var t = e.target || e.srcElement;
                    if ("li" == t.nodeName.toLowerCase()) {
                        r.innerHTML = t.innerHTML;
                        var i = document.getElementById("default-channel-nsid"),
                        n = t.getAttribute("data-id");
                        i.value = n
                    }
                }),
                utils.addEvent(window.document.body, "click",
                function() {
                    "none" != utils.getStyle(o, "display") && utils.setStyle(o, {
                        display: "none"
                    })
                })
            }
        },
        o = function() {
            siteConfig.settings.useSetting && n()
        };
        return {
            init: o
        }
    } ();
    var znSlideBox = window.znSlideBox || {};
    znSlideBox.index = function() {
        function e(e, t, i) {
            utils.addEvent(document.getElementById(e), "submit",
            function() {
                var e = document.getElementById(t).value;
                utils.isEmptyOrSpacing(e) || (log.send(urlConfig.log, pageLog, {
                    search_input_time: window.bdcs.search_input_time,
                    query: encodeURIComponent(e),
                    search_type: i,
                    search_time_used: +new Date - window.bdcs.search_input_time
                }), window.bdcs.search_input_time && (window.bdcs.search_input_time = 0))
            })
        }
        var t = function() {
            var e = document,
            t = e.body,
            i = e.documentElement,
            n = "BackCompat" == e.compatMode ? t: e.documentElement;
            return Math.max(i.scrollHeight, t.scrollHeight, n.clientHeight)
        },
        i = function() {
            function i() {
                var e = parseInt(E),
                t = 5; - 89 > e - t && (utils.setStyle(m, {
                    right: e + t + "px"
                }), window.setTimeout(function() {
                    i()
                },
                1), E = utils.getStyle(m, "right")),
                utils.setStyle(_, {
                    display: "none"
                }),
                utils.setStyle(m, {
                    position: "fixed",
                    top: "150px"
                })
            }
            function s() {
                var e = parseInt(E),
                t = 5;
                e >= parseInt(C + 5) && (utils.setStyle(m, {
                    right: e - t + "px"
                }), window.setTimeout(function() {
                    s()
                },
                1), E = utils.getStyle(m, "right")),
                e <= parseInt(C + 10) && utils.setStyle(_, {
                    display: "block"
                })
            }
            function o() {
                var e = parseInt(E),
                t = 5; - 89 > e - t && (utils.setStyle(m, {
                    left: e + t + "px"
                }), window.setTimeout(function() {
                    o()
                },
                1), E = utils.getStyle(m, "left")),
                utils.setStyle(_, {
                    display: "none"
                }),
                utils.setStyle(m, {
                    position: "fixed",
                    top: "150px"
                })
            }
            function r() {
                var e = parseInt(E),
                t = 5;
                e >= parseInt(C + 5) && (utils.setStyle(m, {
                    left: e - t + "px"
                }), window.setTimeout(function() {
                    r()
                },
                1), E = utils.getStyle(m, "left")),
                e <= parseInt(C + 10) && utils.setStyle(_, {
                    display: "block"
                })
            }
            var a, l = siteConfig.settings_2.slidingTiming,
            c = document.getElementById("sliding-search-form-input");
            new Placeholder({
                inputElem: c,
                type: "labelFocusEmpty"
            });
            var d = document.getElementById("sliding-search-form-input-label");
            d && (d.style.height = siteConfig.settings_2.slidingcss["#sliding-box-item input"].height, d.style.lineHeight = parseInt(siteConfig.settings_2.slidingcss["#sliding-box-item input"].height) + 5 + "px", d.style.fontSize = siteConfig.settings_2.slidingcss["#sliding-box-item input"]["font-size"]);
            var u = document.getElementById("sliding-searchbox");
            switch (siteConfig.settings_2.slidingTemplate) {
            case "8":
                utils.addClass(u, "sliding-searchbox-one");
                break;
            case "9":
                utils.addClass(u, "sliding-searchbox-two");
                break;
            case "10":
                utils.addClass(u, "sliding-searchbox-three");
                break;
            case "11":
                utils.addClass(u, "sliding-searchbox-four")
            }
            var g = utils.convertJSON2CSS(siteConfig.settings_2.css),
            p = utils.convertJSON2CSS(siteConfig.settings_2.slidingcss);
            bdcsUtils.insertCSS(slidingCSS + g + p);
            var f = parseInt(siteConfig.settings_2.slidingBoxDistance),
            m = document.getElementById("sliding-searchbox"),
            h = document.getElementById("sliding-box-item"),
            b = parseInt(utils.getStyle(h, "width")),
            C = (parseInt(b + 158), parseInt( - 108 - b));
            bdcsUtils.insertCSS("#sliding-box-item #sliding-search-form-submit{position:relative;left:" + f + "px}", !1, "aaa"),
            bdcsUtils.insertCSS("#sliding-search-form-input{line-height:" + siteConfig.settings_2.slidingcss["#sliding-box-item input"].height + ";}", !1, "aaa");
            var v = parseInt(b - 20);
            bdcsUtils.insertCSS("#sliding-hot{width:" + v + "px}", !1, "aaa");
            var y = document.getElementById("sliding-search-form-input"),
            w = parseInt(utils.getStyle(y, "height")),
            x = w;
            bdcsUtils.insertCSS("#sliding-box-item #sliding-search-form-submit{height:" + x + "px}", !1, "aaa");
            var y = (document.getElementById("sliding-search-form-submit"), document.getElementById("sliding-search-form-input")),
            w = (parseInt(utils.getStyle(y, "font-size")), parseInt(utils.getStyle(y, "height")));
            if (siteConfig.settings_2.useChannels && siteConfig.settings_2.customChannel.length > 0 && bdcsUtils.insertCSS("#sliding-box-item input{width:" + (parseInt(siteConfig.settings_2.slidingcss["#sliding-box-item input"].width) - parseInt(siteConfig.settings_2.slidingcss["div#sliding-searchbox  .sliding-channel-meun"].width)) + "px;}"), n(x), 1 == siteConfig.settings_2.slidingPosition) {
                bdcsUtils.insertCSS("#sliding-searchbox{position:fixed;right:" + C + "px;top:150px;}", !1, "aaa");
                var _ = document.getElementById("sliding-icon-left"),
                E = utils.getStyle(m, "right"),
                S = document.getElementById("sliding-back-right"),
                I = !1;
                utils.addEvent(_, "mouseover",
                function() {
                    i(),
                    I = !1
                }),
                utils.addEvent(S, "click",
                function(e) {
                    e.stopPropagation(),
                    s()
                }),
                utils.addEvent(document.getElementById("sliding-searchbox"), "click",
                function(e) {
                    e.stopPropagation()
                }),
                utils.addEvent(document, "click",
                function(e) {
                    e.stopPropagation(),
                    s()
                });
                var k = function(e) {
                    e = e || window.event;
                    var t = parseInt(E);
                    if (t > parseInt(C + 10) && !I && (s(), I = !0), e.wheelDelta) {
                        var n = document.documentElement.scrollTop || document.body.scrollTop;
                        e.wheelDelta < 0 ? n >= a - document.documentElement.clientHeight - 200 ? (i(), I = !0) : utils.setStyle(m, {
                            position: "fixed",
                            top: "150px"
                        }) : n < a - document.documentElement.clientHeight - 300 && s()
                    } else if (e.detail) {
                        var n = document.documentElement.scrollTop || document.body.scrollTop;
                        e.detail > 0 ? n >= a - document.documentElement.clientHeight - 200 && (i(), I = !0) : n < a - document.documentElement.clientHeight - 300 && s()
                    }
                };
                utils.DOMReady(function() {
                    a = 1 == parseInt(l) ? parseInt(t()) : 2 == parseInt(l) ? parseInt(t() / 2) : 2 * t() / 3,
                    document.addEventListener && document.addEventListener("DOMMouseScroll", k, !1),
                    window.onmousewheel = document.onmousewheel = k
                })
            } else {
                bdcsUtils.insertCSS("#sliding-searchbox{position:fixed;left:" + C + "px;top:150px;}", !1, "aaa");
                var _ = document.getElementById("sliding-icon-right"),
                E = utils.getStyle(m, "left"),
                S = document.getElementById("sliding-back"),
                F = !1;
                utils.addEvent(_, "mouseover",
                function() {
                    o(),
                    F = !1
                }),
                utils.addEvent(document.getElementById("sliding-searchbox"), "click",
                function(e) {
                    e.stopPropagation()
                }),
                utils.addEvent(S, "click",
                function(e) {
                    e.stopPropagation(),
                    r()
                }),
                utils.addEvent(document, "click",
                function(e) {
                    e.stopPropagation(),
                    r()
                });
                var k = function(e) {
                    e = e || window.event;
                    var t = parseInt(E);
                    if (t > parseInt(C + 10) && !F && (r(), F = !0), e.wheelDelta) {
                        var i = document.documentElement.scrollTop || document.body.scrollTop;
                        e.wheelDelta < 0 ? i >= a - document.documentElement.clientHeight - 200 ? (o(), F = !0) : utils.setStyle(m, {
                            position: "fixed",
                            top: "150px"
                        }) : i < a - document.documentElement.clientHeight - 300 && r()
                    } else if (e.detail) {
                        var i = document.documentElement.scrollTop || document.body.scrollTop;
                        e.detail > 0 ? i >= a - document.documentElement.clientHeight - 200 && (o(), F = !0) : i < a - document.documentElement.clientHeight - 300 && r()
                    }
                };
                utils.DOMReady(function() {
                    a = 1 == parseInt(l) ? parseInt(t()) : 2 == parseInt(l) ? parseInt(t() / 2) : 2 * t() / 3,
                    document.addEventListener && document.addEventListener("DOMMouseScroll", k, !1),
                    window.onmousewheel = document.onmousewheel = k
                })
            }
            switch (siteConfig.settings_2.sugType) {
            case "novel":
                sugTpl = sugNovelTpl;
                break;
            case "music":
                sugTpl = sugMusicTpl;
                break;
            case "movie":
                sugTpl = sugMovieTpl;
                break;
            case "normal":
            default:
                sugTpl = sugNormalTpl
            }
            siteConfig.settings_2.useSug && new Sug({
                formElem: document.getElementById("sliding-search-form"),
                inputElem: document.getElementById("sliding-search-form-input"),
                sugElem: document.getElementById("sliding-search-sug"),
                sugListElem: document.getElementById("sliding-search-sug-list"),
                submitElem: document.getElementById("sliding-search-form-submit"),
                boxType: "slide",
                offset: {
                    top: 21,
                    left: siteConfig.settings_2.useChannels ? parseInt(siteConfig.settings_2.slidingcss["div#sliding-searchbox  .sliding-channel-meun"].width) + 20 : 20
                },
                url: siteConfig.sugUrl || urlConfig.sug,
                param: "wd",
                data: {
                    ch: siteConfig.settings_2.sugType,
                    rn: siteConfig.settings_2.sugNum,
                    logid: siteConfig.logId,
                    sid: siteConfig.siteId,
                    uid: encodeURIComponent(siteConfig.locationUrl || window.location.href)
                },
                sugListWidth: siteConfig.settings_2.useSliding ? void 0 : sugListWidth,
                sugListItemLimit: siteConfig.settings_2.sugNum,
                tmplString: sugTpl,
                itemClassName: "sliding-search-sug-list-item",
                currentClassName: "sliding-search-sug-list-item-current",
                valueClassName: "sliding-search-sug-list-item-value",
                type: "interval",
                completeWhenKeyUpDown: !1
            }),
            e("sliding-search-form", "sliding-search-form-input", "slide")
        },
        n = function(e) {
            if (siteConfig.settings_2.useChannels && siteConfig.settings_2.customChannel.length > 0) {
                var t = utils.getElementsByClassName("cse-sliding-channel-container");
                t.length > 0 && document.body.removeChild(t[0]);
                var i = document.createElement("div");
                i.className = "cse-sliding-channel-container",
                document.body.appendChild(i);
                var n = '<ul class="sliding-channel-list" id="sliding-channel-list"><%for(var i=0;i < settings_2.customChannel.length;i++){%><li data-id="<%= settings_2.customChannel[i].key%>"><%= settings_2.customChannel[i].name %></li><% } %></ul>';
                i.innerHTML = utils.tmpl(n, siteConfig);
                var s = document.getElementById("sliding-channel-meun"),
                o = document.getElementById("sliding-channel-list"),
                r = document.getElementById("sliding-channel-curr");
                i.style.width = siteConfig.settings_2.slidingcss["div#sliding-searchbox  .sliding-channel-meun"].width,
                eventEmitter.on("channel:showslidingChannel",
                function() {
                    i.style.left = utils.getElementPos("sliding-channel-meun").x + "px",
                    i.style.top = utils.getElementPos("sliding-channel-meun").y + e + 2 + "px"
                }),
                bdcsUtils.insertCSS("div#sliding-searchbox .sliding-channel-current i{top:" + (e / 2 - 3) + "px;}"),
                bdcsUtils.insertCSS("div#sliding-searchbox .sliding-channel-current{height:" + e + "px;line-height:" + e + "px;border-color:" + siteConfig.settings_2.slidingcss["#sliding-box-item input"]["border-color"] + "}", !1, "aaa"),
                bdcsUtils.insertCSS("div#sliding-searchbox  .sliding-channel-meun{width:" + siteConfig.settings_2.slidingcss["div#sliding-searchbox  .sliding-channel-meun"].width + "}"),
                "click" == siteConfig.settings_2.channelShowType ? (utils.addEvent(s, "click",
                function(e) {
                    e.stopPropagation(),
                    "none" == utils.getStyle(o, "display") ? (utils.setStyle(o, {
                        display: "block"
                    }), eventEmitter.emit("channel:showslidingChannel")) : utils.setStyle(o, {
                        display: "none"
                    })
                }), utils.addEvent(window, "scroll",
                function() {
                    siteConfig.isDemo && utils.setStyle(o, {
                        display: "none"
                    }),
                    "none" == utils.getStyle(o, "display") || siteConfig.isDemo || eventEmitter.emit("channel:showslidingChannel")
                })) : (utils.addEvent(s, "mouseover",
                function(e) {
                    e.stopPropagation(),
                    "none" == utils.getStyle(o, "display") && (utils.setStyle(o, {
                        display: "block"
                    }), eventEmitter.emit("channel:showslidingChannel"))
                }), utils.addEvent(i, "mouseover",
                function(e) {
                    e.stopPropagation(),
                    "none" == utils.getStyle(o, "display") && (utils.setStyle(o, {
                        display: "block"
                    }), eventEmitter.emit("channel:showslidingChannel"))
                }), utils.addEvent(i, "mouseout",
                function(e) {
                    e.stopPropagation(),
                    utils.setStyle(o, {
                        display: "none"
                    })
                }), utils.addEvent(s, "mouseout",
                function(e) {
                    e.stopPropagation(),
                    utils.setStyle(o, {
                        display: "none"
                    })
                })),
                utils.addEvent(o, "click",
                function(e) {
                    e.stopPropagation();
                    var t = e.target || e.srcElement;
                    if ("li" == t.nodeName.toLowerCase()) {
                        r.innerHTML = t.innerHTML;
                        var i = document.getElementById("sliding-channel-nsid"),
                        n = t.getAttribute("data-id");
                        i.value = n,
                        "none" != utils.getStyle(o, "display") && utils.setStyle(o, {
                            display: "none"
                        })
                    }
                }),
                utils.addEvent(window.document.body, "click",
                function() {
                    "none" != utils.getStyle(o, "display") && utils.setStyle(o, {
                        display: "none"
                    })
                })
            }
        },
        s = function() {
            siteConfig.settings_2.useSliding && i()
        };
        return {
            init: s
        }
    } ();
    var znPopupBox = window.znPopupBox || {};
    znPopupBox.index = function() {
        function e(e, t, i) {
            utils.addEvent(document.getElementById(e), "submit",
            function() {
                var e = document.getElementById(t).value;
                utils.isEmptyOrSpacing(e) || (log.send(urlConfig.log, pageLog, {
                    search_input_time: window.bdcs.search_input_time,
                    query: encodeURIComponent(e),
                    search_type: i,
                    search_time_used: +new Date - window.bdcs.search_input_time
                }), window.bdcs.search_input_time && (window.bdcs.search_input_time = 0))
            })
        }
        var t = function() {
            function e() {
                var t = parseInt(f),
                i = 5;
                d = parseInt(utils.getStyle(c[0], "height")),
                t - i >= -5 - d && (utils.setStyle(l, {
                    bottom: t - i + "px"
                }), window.setTimeout(e, 4), f = utils.getStyle(l, "bottom"), 10 - d >= t && utils.setStyle(m[0], {
                    display: "block"
                }))
            }
            function t() {
                var e = parseInt(f),
                i = 5; - 5 > e - i && (utils.setStyle(l, {
                    bottom: e + i + "px"
                }), window.setTimeout(t, 4), f = utils.getStyle(l, "bottom")),
                utils.setStyle(m[0], {
                    display: "none"
                })
            }
            var s = document.getElementById("popup-search-form-input");
            new Placeholder({
                inputElem: s,
                type: "labelFocusEmpty"
            });
            var o = document.getElementById("popup-search-form-input-label");
            o && (o.style.height = siteConfig.settings_3.popupcss["#popup-searchbox input"].height, o.style.lineHeight = parseInt(siteConfig.settings_3.popupcss["#popup-searchbox input"].height) + 5 + "px", o.style.fontSize = siteConfig.settings_3.popupcss["#popup-searchbox input"]["font-size"]);
            var r = document.getElementById("popup-box");
            switch (siteConfig.settings_3.popupTemplate) {
            case "12":
                utils.addClass(r, "popup-searchbox-one");
                break;
            case "13":
                utils.addClass(r, "popup-searchbox-two");
                break;
            case "14":
                utils.addClass(r, "popup-searchbox-three");
                break;
            case "15":
                utils.addClass(r, "popup-searchbox-four")
            }
            var a = utils.convertJSON2CSS(siteConfig.settings_3.popupcss);
            bdcsUtils.insertCSS(popupCSS + a);
            var l = document.getElementById("popup-searchbox"),
            c = utils.getElementsByClassName("popupbox-item"),
            d = parseInt(utils.getStyle(c[0], "height")),
            u = parseInt(utils.getStyle(c[0], "width")),
            g = utils.getStyle(c[0], "border-color"),
            p = document.getElementById("popup-back"),
            f = utils.getStyle(l, "bottom"),
            m = utils.getElementsByClassName("popup-icon"),
            p = document.getElementById("popup-back"),
            h = document.getElementById("popup-top"),
            b = parseInt(utils.getStyle(h, "height"));
            bdcsUtils.insertCSS("#popup-top{border-bottom-color:" + g + "}", !1, "aaa"),
            bdcsUtils.insertCSS("#popup-back{border-left-color:" + g + "}", !1, "aaa"),
            bdcsUtils.insertCSS("#popup-back{color:" + g + "}", !1, "aaa"),
            utils.setStyle(p, {
                height: +b + "px"
            }),
            utils.setStyle(h, {
                "line-height": +b + "px"
            });
            var C = parseInt(siteConfig.settings_3.popupBoxDistance);
            bdcsUtils.insertCSS("#popup-searchbox #popup-search-form-submit{position:relative;left:" + C + "px}", !1, "aaa");
            var v = document.getElementById("popup-box-detail"),
            y = utils.getStyle(v, "width"),
            w = parseInt(y + 20);
            bdcsUtils.insertCSS("#popup-hot{width:" + w + "px}", !1, "aaa");
            var x = d - b;
            bdcsUtils.insertCSS("#popup-box-detail{height:" + x + "px}", !1, "aaa");
            var _ = document.getElementById("popup-search-form-input"),
            E = parseInt(utils.getStyle(_, "height")),
            S = E;
            if (bdcsUtils.insertCSS("#popup-searchbox #popup-search-form-submit{height:" + S + "px}", !1, "aaa"), bdcsUtils.insertCSS("#popup-search-form-input{line-height:" + siteConfig.settings_3.popupcss["#popup-searchbox input"].height + ";}", !1, "aaa"), "0" == siteConfig.settings_3.isPopupShow ? (utils.setStyle(m[0], {
                display: "block"
            }), utils.setStyle(l, {
                bottom: -5 - d + "px"
            }), f = utils.getStyle(l, "bottom")) : (utils.setStyle(m[0], {
                display: "none"
            }), utils.setStyle(l, {
                bottom: "0px"
            })), siteConfig.settings_3.useChannels && siteConfig.settings_3.customChannel.length > 0 && bdcsUtils.insertCSS("#popup-searchbox input{width:" + (parseInt(siteConfig.settings_3.popupcss["#popup-searchbox input"].width) - parseInt(siteConfig.settings_3.popupcss["div#popup-searchbox  .popup-channel-meun"].width)) + "px;}"), n(E), 1 == siteConfig.settings_3.showPopupPosition) {
                var I = parseInt(u - 38);
                bdcsUtils.insertCSS(".popup-icon{position:relative;left:" + I + "px;}");
                var k = parseInt(document.body.clientWidth) - u + 13;
                bdcsUtils.insertCSS("#popup-searchbox{position:fixed;left:" + k + "px;}"),
                utils.DOMReady(function() {
                    var e = parseInt(document.body.clientWidth) - u + 13;
                    bdcsUtils.insertCSS("#popup-searchbox{position:fixed;left:" + e + "px;}")
                })
            } else bdcsUtils.insertCSS("#popup-searchbox{position:fixed;left:0px;}");
            switch (utils.addEvent(p, "click", e), utils.addEvent(m[0], "mouseover", t), window.onresize = function() {
                if (1 == siteConfig.settings_3.showPopupPosition) {
                    var e = parseInt(u - 38);
                    bdcsUtils.insertCSS(".popup-icon{position:relative;left:" + e + "px;}");
                    var t = parseInt(document.body.clientWidth) - u + 13;
                    bdcsUtils.insertCSS("#popup-searchbox{position:fixed;left:" + t + "px;}")
                }
            },
            siteConfig.settings_3.usePopup && siteConfig.settings_3.useSug && siteConfig.settings_3.sugType) {
            case "novel":
                sugTpl = sugNovelTpl;
                break;
            case "music":
                sugTpl = sugMusicTpl;
                break;
            case "movie":
                sugTpl = sugMovieTpl;
                break;
            case "normal":
            default:
                sugTpl = sugNormalTpl
            }
            i(b)
        },
        i = function(t) {
            siteConfig.settings_3.usePopup && siteConfig.settings_3.useSug && new Sug({
                formElem: document.getElementById("popup-search-form"),
                inputElem: document.getElementById("popup-search-form-input"),
                sugElem: document.getElementById("popup-search-sug"),
                sugListElem: document.getElementById("popup-search-sug-list"),
                submitElem: document.getElementById("popup-search-form-submit"),
                boxType: "popup",
                offset: {
                    top: 21 + t,
                    left: siteConfig.settings_3.useChannels ? parseInt(siteConfig.settings_3.popupcss["div#popup-searchbox  .popup-channel-meun"].width) + 20 : 20
                },
                url: siteConfig.sugUrl || urlConfig.sug,
                param: "wd",
                data: {
                    ch: siteConfig.settings_3.sugType,
                    rn: siteConfig.settings_3.sugNum,
                    logid: siteConfig.logId,
                    sid: siteConfig.siteId,
                    uid: encodeURIComponent(siteConfig.locationUrl || window.location.href)
                },
                sugListWidth: siteConfig.settings_3.usePopup ? void 0 : sugListWidth,
                sugListItemLimit: siteConfig.settings_3.sugNum,
                tmplString: sugTpl,
                itemClassName: "popup-search-sug-list-item",
                currentClassName: "popup-search-sug-list-item-current",
                valueClassName: "popup-search-sug-list-item-value",
                itemAdClassName: "sugRightAdv",
                adRightClassName: "bdcs-search-sug-adv",
                adSkinClassName: "bdcs-search-sug-skin",
                type: "input",
                completeWhenKeyUpDown: !1
            }),
            e("popup-search-form", "popup-search-form-input", "popup")
        },
        n = function(e) {
            if (siteConfig.settings_3.useChannels && siteConfig.settings_3.customChannel.length > 0) {
                var t = utils.getElementsByClassName("cse-popup-channel-container");
                t.length > 0 && document.body.removeChild(t[0]);
                var i = document.createElement("div");
                i.className = "cse-popup-channel-container",
                document.body.appendChild(i);
                var n = '<ul class="popup-channel-list" id="popup-channel-list"><%for(var i=0;i < settings_3.customChannel.length;i++){%><li data-id="<%= settings_3.customChannel[i].key%>"><%= settings_3.customChannel[i].name %></li><% } %></ul>';
                i.innerHTML = utils.tmpl(n, siteConfig);
                var s = document.getElementById("popup-channel-meun"),
                o = document.getElementById("popup-channel-list"),
                r = document.getElementById("popup-channel-curr");
                bdcsUtils.insertCSS("div#popup-searchbox .popup-channel-current i{top:" + (e / 2 - 3) + "px;}"),
                bdcsUtils.insertCSS("div#popup-searchbox .popup-channel-current{height:" + e + "px;line-height:" + e + "px;border-color:" + siteConfig.settings_3.popupcss["#popup-searchbox input"]["border-color"] + "}", !1, "aaa"),
                bdcsUtils.insertCSS("div#popup-searchbox  .popup-channel-meun{width:" + siteConfig.settings_3.popupcss["div#popup-searchbox  .popup-channel-meun"].width + "}"),
                i.style.width = siteConfig.settings_3.popupcss["div#popup-searchbox  .popup-channel-meun"].width,
                eventEmitter.on("channel:showpopupChannel",
                function() {
                    i.style.left = utils.getElementPos("popup-channel-meun").x + "px",
                    i.style.top = utils.getElementPos("popup-channel-meun").y + e + 2 + "px"
                }),
                "click" == siteConfig.settings_3.channelShowType ? (utils.addEvent(s, "click",
                function(e) {
                    e.stopPropagation(),
                    "none" == utils.getStyle(o, "display") ? (utils.setStyle(o, {
                        display: "block"
                    }), eventEmitter.emit("channel:showpopupChannel")) : utils.setStyle(o, {
                        display: "none"
                    })
                }), utils.addEvent(window, "scroll",
                function() {
                    siteConfig.isDemo && utils.setStyle(o, {
                        display: "none"
                    }),
                    "none" == utils.getStyle(o, "display") || siteConfig.isDemo || eventEmitter.emit("channel:showpopupChannel")
                })) : (utils.addEvent(s, "mouseover",
                function(e) {
                    e.stopPropagation(),
                    "none" == utils.getStyle(o, "display") && (utils.setStyle(o, {
                        display: "block"
                    }), eventEmitter.emit("channel:showpopupChannel"))
                }), utils.addEvent(i, "mouseover",
                function(e) {
                    e.stopPropagation(),
                    "none" == utils.getStyle(o, "display") && (utils.setStyle(o, {
                        display: "block"
                    }), eventEmitter.emit("channel:showpopupChannel"))
                }), utils.addEvent(i, "mouseout",
                function(e) {
                    e.stopPropagation(),
                    utils.setStyle(o, {
                        display: "none"
                    })
                }), utils.addEvent(s, "mouseout",
                function(e) {
                    e.stopPropagation(),
                    utils.setStyle(o, {
                        display: "none"
                    })
                })),
                utils.addEvent(o, "click",
                function(e) {
                    var t = e.target || e.srcElement;
                    if ("li" == t.nodeName.toLowerCase()) {
                        r.innerHTML = t.innerHTML;
                        var i = document.getElementById("popup-channel-nsid"),
                        n = t.getAttribute("data-id");
                        i.value = n
                    }
                }),
                utils.addEvent(window.document.body, "click",
                function() {
                    "none" != utils.getStyle(o, "display") && utils.setStyle(o, {
                        display: "none"
                    })
                })
            }
        },
        s = function() {
            siteConfig.settings_3.usePopup && t()
        };
        return {
            init: s
        }
    } ();
    var znFloatBox = window.znFloatBox || {};
    znFloatBox.index = function() {
        function e(e, t, i) {
            utils.addEvent(document.getElementById(e), "submit",
            function() {
                var e = document.getElementById(t).value;
                utils.isEmptyOrSpacing(e) || (log.send(urlConfig.log, pageLog, {
                    search_input_time: window.bdcs.search_input_time,
                    query: encodeURIComponent(e),
                    search_type: i,
                    search_time_used: +new Date - window.bdcs.search_input_time
                }), window.bdcs.search_input_time && (window.bdcs.search_input_time = 0))
            })
        }
        var t = function() {
            var e = document.getElementById("float-search-form-input");
            new Placeholder({
                inputElem: e,
                type: "labelFocusEmpty"
            });
            var t = document.getElementById("float-search-form-input-label");
            t && (t.style.height = parseInt(siteConfig.settings_4.floatcss["#float-search-form-input"].height) + "px", t.style.lineHeight = parseInt(siteConfig.settings_4.floatcss["#float-search-form-input"].height) + 5 + "px", t.style.fontSize = siteConfig.settings_4.floatcss["#float-search-form-input"]["font-size"]);
            var s = document.getElementById("float-search-box");
            switch (siteConfig.settings_4.floatTemplate) {
            case "16":
                utils.addClass(s, "float-searchbox-one");
                break;
            case "17":
                utils.addClass(s, "float-searchbox-two");
                break;
            case "18":
                utils.addClass(s, "float-searchbox-three")
            }
            var o = utils.convertJSON2CSS(siteConfig.settings_4.floatcss);
            bdcsUtils.insertCSS(floatCSS + o);
            var r = document.getElementById("float-box-detail"),
            a = document.getElementById("float-searchbox"),
            l = parseInt(siteConfig.settings_4.topPosition),
            c = parseInt(utils.getStyle(a, "height")),
            d = window.screen.width,
            u = (document.documentElement.clientHeight, parseInt(siteConfig.settings_4.floatBoxDistance));
            bdcsUtils.insertCSS("#float-searchbox #float-search-form-submit{position:relative;top:1px;left:" + u + "px}", !1, "aaa");
            var g = document.getElementById("float-search-form-input"),
            p = parseInt(utils.getStyle(g, "width")),
            f = parseInt(utils.getStyle(g, "height")),
            m = f;
            bdcsUtils.insertCSS("#float-searchbox  #float-search-form-submit{height:" + m + "px;}");
            var h = parseInt(p + u);
            utils.setStyle(r, {
                width: h + 364 + "px"
            });
            var b = document.getElementById("float-box");
            utils.setStyle(b, {
                width: h + 148 + "px"
            });
            var C = document.getElementById("float-hot");
            C && utils.setStyle(C, {
                width: p + "px"
            });
            var v = .01 * siteConfig.settings_4.floatOpacity;
            if (bdcsUtils.insertCSS("#float-searchbox{height:" + c + "px;}"), document.getElementById("float-search-form-submit"), bdcsUtils.insertCSS("#float-searchbox{position:fixed;}"), bdcsUtils.insertCSS("#float-search-form-input{line-height:" + siteConfig.settings_4.floatcss["#float-search-form-input"].height + ";" + (siteConfig.settings_4.useChannels ? "border-left:none;": "") + "}", !1, "aaa"), siteConfig.settings_4.useChannels && siteConfig.settings_4.customChannel.length > 0 && bdcsUtils.insertCSS("#float-search-form-input{width:" + (parseInt(siteConfig.settings_4.floatcss["#float-search-form-input"].width) - parseInt(siteConfig.settings_4.floatcss["div#float-searchbox  .float-channel-meun"].width)) + "px;}"), n(m), siteConfig.settings_4.floatLogo) {
                var y = siteConfig.settings_4.floatLogo;
                bdcsUtils.insertCSS("#float-searchbox #float-logo{background:url(" + y + ") no-repeat center center;_background:url(" + y + ") no-repeat center center;}")
            }
            switch (utils.addEvent(window, "scroll",
            function() {
                bdcsUtils.insertCSS("#float-searchbox{position:fixed;width:" + d + "px;}"),
                bdcsUtils.insertCSS("#float-searchbox{opacity:" + v + ";}");
                var e = document.documentElement.scrollTop || document.body.scrollTop;
                bdcsUtils.insertCSS(1 == siteConfig.settings_4.floatPosition ? "#float-searchbox{position:fixed;bottom:0px;}": "#float-searchbox{position:fixed;top:0px;}"),
                0 == siteConfig.settings_4.floatPosition ? e >= l ? utils.setStyle(a, {
                    visibility: "visible"
                }) : utils.setStyle(a, {
                    visibility: "hidden"
                }) : e >= document.body.scrollHeight - document.documentElement.clientHeight - l ? utils.setStyle(a, {
                    visibility: "visible"
                }) : utils.setStyle(a, {
                    visibility: "hidden"
                })
            }), siteConfig.settings_4.sugType) {
            case "novel":
                sugTpl = sugNovelTpl;
                break;
            case "music":
                sugTpl = sugMusicTpl;
                break;
            case "movie":
                sugTpl = sugMovieTpl;
                break;
            case "normal":
            default:
                sugTpl = sugNormalTpl
            }
            i()
        },
        i = function() {
            0 == siteConfig.settings_4.floatPosition && siteConfig.settings_4.useSug && new Sug({
                formElem: document.getElementById("float-search-form"),
                inputElem: document.getElementById("float-search-form-input"),
                sugElem: document.getElementById("float-search-sug"),
                sugListElem: document.getElementById("float-search-sug-list"),
                submitElem: document.getElementById("float-search-form-submit"),
                boxType: "float",
                offset: {
                    left: siteConfig.settings_4.useChannels ? parseInt(siteConfig.settings_4.floatcss["div#float-searchbox  .float-channel-meun"].width) : 0
                },
                url: siteConfig.sugUrl || urlConfig.sug,
                param: "wd",
                data: {
                    ch: siteConfig.settings_4.sugType,
                    rn: siteConfig.settings_4.sugNum,
                    logid: siteConfig.logId,
                    sid: siteConfig.siteId,
                    uid: encodeURIComponent(siteConfig.locationUrl || window.location.href)
                },
                sugListWidth: siteConfig.settings_4.useFloat ? void 0 : sugListWidth,
                sugListItemLimit: siteConfig.settings_4.sugNum,
                tmplString: sugTpl,
                itemClassName: "float-search-sug-list-item",
                currentClassName: "float-search-sug-list-item-current",
                valueClassName: "float-search-sug-list-item-value",
                itemAdClassName: "sugRightAdv",
                adRightClassName: "bdcs-search-sug-adv",
                adSkinClassName: "bdcs-search-sug-skin",
                type: "interval",
                completeWhenKeyUpDown: !1
            }),
            e("float-search-form", "float-search-form-input", "float")
        },
        n = function(e) {
            if (siteConfig.settings_4.useChannels && siteConfig.settings_4.customChannel.length > 0) {
                var t = utils.getElementsByClassName("cse-float-channel-container");
                t.length > 0 && document.body.removeChild(t[0]);
                var i = document.createElement("div");
                i.className = "cse-float-channel-container",
                document.body.appendChild(i);
                var n = '<ul class="float-channel-list" id="float-channel-list"><%for(var i=0;i < settings_4.customChannel.length;i++){%><li data-id="<%= settings_4.customChannel[i].key%>"><%= settings_4.customChannel[i].name %></li><% } %></ul>';
                i.innerHTML = utils.tmpl(n, siteConfig);
                var s = document.getElementById("float-channel-meun"),
                o = document.getElementById("float-channel-list"),
                r = document.getElementById("float-channel-curr");
                bdcsUtils.insertCSS("div#float-searchbox .float-channel-current i{top:" + (e / 2 - 3) + "px;}"),
                bdcsUtils.insertCSS("div#float-searchbox .float-channel-current{height:" + e + "px;line-height:" + e + "px;border-color:" + siteConfig.settings_4.floatcss["#float-search-form-input"]["border-color"] + "}", !1, "aaa"),
                bdcsUtils.insertCSS("div#float-searchbox  .float-channel-meun{width:" + siteConfig.settings_4.floatcss["div#float-searchbox  .float-channel-meun"].width + "}"),
                i.style.width = siteConfig.settings_4.floatcss["div#float-searchbox  .float-channel-meun"].width,
                eventEmitter.on("channel:showfloatChannel",
                function() {
                    i.style.left = utils.getElementPos("float-channel-meun").x + "px",
                    i.style.top = utils.getElementPos("float-channel-meun").y + e + 2 + "px"
                }),
                1 == siteConfig.settings_4.floatPosition && (bdcsUtils.insertCSS("div.cse-float-channel-container .float-channel-list{overflow:auto;height:62px;}"), bdcsUtils.insertCSS("div.cse-float-channel-container .float-channel-list li{line-height:21px;}")),
                "click" == siteConfig.settings_4.channelShowType ? (utils.addEvent(s, "click",
                function(e) {
                    e.stopPropagation(),
                    "none" == utils.getStyle(o, "display") ? (utils.setStyle(o, {
                        display: "block"
                    }), eventEmitter.emit("channel:showfloatChannel")) : utils.setStyle(o, {
                        display: "none"
                    })
                }), utils.addEvent(window, "scroll",
                function() {
                    siteConfig.isDemo && utils.setStyle(o, {
                        display: "none"
                    }),
                    "none" == utils.getStyle(o, "display") || siteConfig.isDemo || eventEmitter.emit("channel:showfloatChannel")
                })) : (utils.addEvent(s, "mouseover",
                function(e) {
                    e.stopPropagation(),
                    "none" == utils.getStyle(o, "display") && (utils.setStyle(o, {
                        display: "block"
                    }), eventEmitter.emit("channel:showfloatChannel"))
                }), utils.addEvent(i, "mouseover",
                function(e) {
                    e.stopPropagation(),
                    "none" == utils.getStyle(o, "display") && (utils.setStyle(o, {
                        display: "block"
                    }), eventEmitter.emit("channel:showfloatChannel"))
                }), utils.addEvent(i, "mouseout",
                function(e) {
                    e.stopPropagation(),
                    utils.setStyle(o, {
                        display: "none"
                    })
                }), utils.addEvent(s, "mouseout",
                function(e) {
                    e.stopPropagation(),
                    utils.setStyle(o, {
                        display: "none"
                    })
                })),
                utils.addEvent(o, "click",
                function(e) {
                    var t = e.target || e.srcElement;
                    if ("li" == t.nodeName.toLowerCase()) {
                        r.innerHTML = t.innerHTML;
                        var i = document.getElementById("float-channel-nsid"),
                        n = t.getAttribute("data-id");
                        i.value = n
                    }
                }),
                utils.addEvent(window.document.body, "click",
                function() {
                    "none" != utils.getStyle(o, "display") && utils.setStyle(o, {
                        display: "none"
                    })
                })
            }
        },
        s = function() {
            siteConfig.settings_4.useFloat && t()
        };
        return {
            init: s
        }
    } ();
    var znCustomBox = window.znCustomBox || {};
    znCustomBox.index = function() {
        var e = function(e, t) {
            for (e = e.parentNode; e && 9 !== e.nodeType;) {
                if (e.tagName.toLowerCase() == t) return e;
                e = e.parentNode
            }
            return null
        },
        t = function(e, t, i) {
            utils.addEvent(e, "submit",
            function() {
                var e = t.value;
                utils.isEmptyOrSpacing(e) || (log.send(urlConfig.log, pageLog, {
                    search_input_time: window.bdcs.search_input_time,
                    query: encodeURIComponent(e),
                    search_type: i,
                    search_time_used: +new Date - window.bdcs.search_input_time
                }), window.bdcs.search_input_time && (window.bdcs.search_input_time = 0))
            })
        },
        i = function() {
            var e = document.createElement("div");
            e.className = "bdcs-search-custom-sug",
            e.id = "bdcs-search-custom-sug",
            e.innerHTML = '<ul class="bdcs-search-custom-sug-list" id="bdcs-search-custom-sug-list"></ul>',
            document.body.appendChild(e)
        },
        n = function(e, t) {
            var i = document.createElement("div");
            i.className = "bdcs-custom-hot",
            i.id = "bdcs-custom-hot";
            var n = "",
            s = document.charset || document.characterSet,
            o = {
                hotWords: t,
                hotNum: Math.min(parseInt(siteConfig.settings_5.hotNum), t.length),
                channelList: siteConfig.channelList,
                resultUrl: siteConfig.resultUrl,
                siteId: siteConfig.siteId,
                settings: {
                    inurl: siteConfig.settings_5.inurl
                },
                isGbk: siteConfig.isGbk || "gbk" == s.toLowerCase() || "gb2312" == s.toLowerCase()
            };
            n = '<%for(var i=0;i < hotNum;i++){%><a href="<%=resultUrl%>?s=<%=siteId%><%= (isGbk ? "&ie=gbk" : "") %>&entry=1&q=<%=window.bdcs.utils.encodeHTML(hotWords[i])%><%= (settings.inurl ? "&inurl="+ window.bdcs.utils.encodeHTML(settings.inurl) : "")%><%= (channelList[0] ? "&cid="+channelList[0] : "")%>" title="<%= window.bdcs.utils.encodeHTML(hotWords[i]) %>" class="bdcs-custom-hot-item"  target="_blank"><%= window.bdcs.utils.encodeHTML(hotWords[i]) %></a><% } %>',
            i.innerHTML = utils.tmpl(n, o),
            e.appendChild(i)
        },
        s = function() {
            var t = document.getElementById("bdcsMain");
            if (t) {
                var i = e(t, "form");
                if (i) return {
                    input: t,
                    form: i
                }
            }
            return {
                input: null,
                form: null
            }
        },
        o = function(e, t) {
            e.action && -1 != e.action.indexOf("/cse/search") || (e.action = siteConfig.resultUrl),
            e.method && "get" == e.method.toLowerCase() || (e.method = "get"),
            "q" != t.name && (t.name = "q");
            var i = "";
            e.elements.s || (i += '<input type="hidden" name="s" value="<%=siteId%>"/>'),
            e.elements.ie || (i += '<% if(isGbk) { %><input type="hidden" name="ie" value="gbk" /><% } %>'),
            e.elements.entry || (i += '<input type="hidden" name="entry" value="1" />'),
            e.elements.cid || (i += '<% if(channelList[0]) {%><input type="hidden" name="cid" value="<%=channelList[0]%>" /><% } %>'),
            e.elements.inurl || (i += '<% if(settings_5.inurl) {%><input type="hidden" name="inurl" value="<%=settings_5.inurl%>" /><% } %>');
            var n = document.createElement("div");
            n.innerHTML = utils.tmpl(i, siteConfig),
            e.appendChild(n)
        },
        r = function() {
            var n = document.getElementById("bdcsMain");
            if (!n) return null;
            var s = e(n, "form");
            if (!s) return "";
            if (o(s, n), t(s, n, "custom"), siteConfig.settings_5.useSug) {
                var r = utils.convertJSON2CSS(siteConfig.settings_5.customcss);
                bdcsUtils.insertCSS(customSugCSS + r, !1),
                i();
                var a = "";
                switch (siteConfig.settings_5.sugType) {
                case "novel":
                    a = sugNovelTpl;
                    break;
                case "music":
                    a = sugMusicTpl;
                    break;
                case "movie":
                    a = sugMovieTpl;
                    break;
                case "normal":
                default:
                    a = sugNormalTpl
                }
                var l = new Sug({
                    formElem: s,
                    inputElem: n,
                    sugElem: document.getElementById("bdcs-search-custom-sug"),
                    sugListElem: document.getElementById("bdcs-search-custom-sug-list"),
                    submitElem: null,
                    boxType: "custom",
                    indep: 1,
                    offset: {
                        top: utils.getElementPos("bdcsMain").y,
                        left: utils.getElementPos("bdcsMain").x
                    },
                    url: siteConfig.sugUrl || urlConfig.sug,
                    param: "wd",
                    data: {
                        ch: siteConfig.settings_5.sugType,
                        rn: siteConfig.settings_5.sugNum,
                        logid: siteConfig.logId,
                        sid: siteConfig.siteId,
                        uid: encodeURIComponent(siteConfig.locationUrl || window.location.href)
                    },
                    sugListWidth: siteConfig.settings_5.useCustom ? void 0 : sugListWidth,
                    sugListItemLimit: siteConfig.settings_5.sugNum,
                    tmplString: a,
                    itemClassName: "bdcs-search-custom-sug-list-item",
                    currentClassName: "bdcs-search-custom-sug-list-item-current",
                    valueClassName: "bdcs-search-custom-sug-list-item-value",
                    itemAdClassName: "sugRightAdv",
                    adRightClassName: "bdcs-search-custom-sug-adv",
                    adSkinClassName: "bdcs-search-custom-sug-skin",
                    type: "interval",
                    completeWhenKeyUpDown: !1
                });
                eventEmitter.on("sug:beforeShowSug",
                function() {
                    var e = document.getElementById("bdcs-search-custom-sug");
                    e.style.left = utils.getElementPos("bdcsMain").x + "px",
                    e.style.top = utils.getElementPos("bdcsMain").y + l.getInputHeight() + "px"
                })
            }
            return n
        },
        a = function(t) {
            if (siteConfig.settings_5.useHot) {
                var i = document.getElementById("bdcsMain");
                if (!i) return null;
                var s = e(i, "form");
                if (!s) return "";
                var o = utils.convertJSON2CSS(siteConfig.settings_5.customcss);
                bdcsUtils.insertCSS(customHotCSS + o, !1);
                for (var r = [], a = [], l = 0; l < t.length; l++) 0 != t[l].charge_info.length && (t = t.slice(l)),
                1 != t.length && r.push(t[l].keyword);
                a = siteConfig.settings_5.useCustomHotWords && siteConfig.settings_5.customHotWords.length > 0 ? siteConfig.settings_5.customHotWords.concat(r) : Array.prototype.slice.call(r),
                n(s, a);
                for (var c = utils.getElementsByClassName("bdcs-custom-hot-item"), l = 0, d = c.length; d > l; l++) utils.addEvent(c[l], "click",
                function() {
                    var e = this.innerHTML,
                    t = this.parentNode.id;
                    log.send(urlConfig.log, pageLog, {
                        search_input_time: +new Date,
                        query: encodeURIComponent(e),
                        search_type: "hot",
                        sb: t,
                        hot_type: siteConfig.settings_5.useHot && siteConfig.settings_5.hotFineWordsEnable ? 2 : 1,
                        search_time_used: 0
                    })
                });
                for (var u = Math.min(a.length, parseInt(siteConfig.settings_5.hotNum)), g = [], l = 0; u > l; l++) g.push(a[l]);
                return log.send(urlConfig.log, pageLog, {
                    search_input_time: +new Date,
                    hot_words: encodeURIComponent(g.toString()),
                    plate_url: siteConfig.locationUrl || window.location.href,
                    num: g.length,
                    log_type: "hot-show"
                }),
                i
            }
        },
        l = function(e) {
            null == a(e) && utils.DOMReady(function() {
                a(e)
            })
        },
        c = function() {
            siteConfig.settings_5.useCustom && null == r() && utils.DOMReady(function() {
                r()
            })
        };
        return {
            init: c,
            initHot: l,
            getNode: s
        }
    } (),
    siteConfig.recHotWords = [];
    var eventEmitter = new utils.EventEmitter,
    content = function() {
        function e() {
            FlyJSONP.init(),
            siteConfig.recHotWords = [];
            var e = "";
            siteConfig.settings.useHot && siteConfig.settings.hotFineWordsEnable ? e = siteConfig.settings.hotFineDetailType: siteConfig.settings_2.useHot && siteConfig.settings_2.hotFineWordsEnable ? e = siteConfig.settings_2.hotFineDetailType: siteConfig.settings_3.useHot && siteConfig.settings_3.hotFineWordsEnable ? e = siteConfig.settings_3.hotFineDetailType: siteConfig.settings_4.useHot && siteConfig.settings_4.hotFineWordsEnable ? e = siteConfig.settings_4.hotFineDetailType: siteConfig.settings_5.useHot && siteConfig.settings_5.hotFineWordsEnable && (e = siteConfig.settings_5.hotFineDetailType),
            FlyJSONP.get({
                url: siteConfig.hotUrl || urlConfig.hot,
                parameters: {
                    uid: siteConfig.fineHotUid || window.location.href,
                    logid: siteConfig.logId,
                    sid: siteConfig.siteId,
                    rn: siteConfig.isDemo ? 15 : siteConfig.settings.hotNum,
                    prod: e
                },
                success: function(e) {
                    e.data && (siteConfig.recHotWords = e.data),
                    i()
                }
            })
        }
        function t(e, t, i, n, s, o) {
            for (var r = [], a = [], l = 0; l < e.length; l++) 0 != e[l].charge_info.length && (e = e.slice(l)),
            1 != e.length && a.push(e[l].keyword);
            r = i && n.length > 0 ? n.concat(a) : Array.prototype.slice.call(a);
            for (var c = "",
            d = Math.min(r.length, t), u = document.charset || document.characterSet, l = 0; d > l; l++) c += '<a href="' + siteConfig.resultUrl + "?s=" + siteConfig.siteId + (siteConfig.isGbk || "gbk" == u.toLowerCase() || "gb2312" == u.toLowerCase() ? "&ie=gbk": "") + "&entry=1&q=" + window.bdcs.utils.encodeHTML(r[l]) + (siteConfig.settings.inurl ? "&inurl=" + window.bdcs.utils.encodeHTML(siteConfig.settings.inurl) : "") + (siteConfig.channelList[0] ? "&cid=" + siteConfig.channelList[0] : "") + '" title="' + window.bdcs.utils.encodeHTML(r[l]) + '" class="bdcs-hot-item" target="' + siteConfig.resultTarget + '">' + window.bdcs.utils.encodeHTML(r[l]) + "</a>";
            s.innerHTML = c;
            for (var g = utils.getElementsByClassName("bdcs-hot-item", s), p = 0, f = g.length; f > p; p++) utils.addEvent(g[p], "click",
            function() {
                var e = this.innerHTML,
                t = this.parentNode.id;
                log.send(urlConfig.log, pageLog, {
                    search_input_time: +new Date,
                    query: encodeURIComponent(e),
                    search_type: "hot",
                    sb: t,
                    hot_type: o ? 2 : 1,
                    search_time_used: 0
                })
            });
            for (var t = Math.min(r.length, t), m = [], l = 0; t > l; l++) m.push(r[l]);
            log.send(urlConfig.log, pageLog, {
                search_input_time: +new Date,
                hot_words: encodeURIComponent(m.toString()),
                plate_url: siteConfig.locationUrl || window.location.href,
                num: m.length,
                log_type: "hot-show"
            })
        }
        function i() {
            var e = document.getElementById("bdcs"),
            t = /^https?:\/\//;
            if (!e) return null;
            if (! (siteConfig && siteConfig.settings && "isGbk" in siteConfig) || siteConfig.isHideAll) return "";
            n();
            var i = 0;
            siteConfig.settings.useSetting ? siteConfig.settings.cseUrl ? siteConfig.resultUrl = siteConfig.settings.cseUrl: i = 1 : siteConfig.settings_2.useSliding ? siteConfig.settings_2.cseUrl ? siteConfig.resultUrl = siteConfig.settings_2.cseUrl: i = 1 : siteConfig.settings_3.usePopup ? siteConfig.settings_3.cseUrl ? siteConfig.resultUrl = siteConfig.settings_3.cseUrl: i = 1 : siteConfig.settings_4.useFloat ? siteConfig.settings_4.cseUrl ? siteConfig.resultUrl = siteConfig.settings_4.cseUrl: i = 1 : siteConfig.settings_5.useCustom && (siteConfig.settings_5.cseUrl ? siteConfig.resultUrl = siteConfig.settings_5.cseUrl: i = 1),
            1 === i && (siteConfig.isDemo && (siteConfig.isGbk = !1, siteConfig.resultUrl = "zhannei.baidu.com/"), siteConfig.resultUrl = siteConfig.resultUrl || "zhannei.baidu.com", -1 == siteConfig.resultUrl.indexOf("cse/search") && (siteConfig.resultUrl += "/" !== siteConfig.resultUrl.charAt(siteConfig.resultUrl.length - 1) ? "/cse/search": "cse/search")),
            t.test(siteConfig.resultUrl) || (siteConfig.resultUrl = "http://" + siteConfig.resultUrl),
            siteConfig.resultTarget = "_blank";
            var s = document.getElementById("bdcs-frame-box");
            if (s && i) {
                var r = s.getElementsByTagName("iframe")[0];
                r && -1 === r.getAttribute("src").indexOf("rec=1") && (siteConfig.resultUrl = "", siteConfig.resultTarget = "_self")
            } (siteConfig.settings_2.useSliding && siteConfig.settings_2.useSug || siteConfig.settings_3.usePopup && siteConfig.settings_3.useSug || siteConfig.settings_4.useFloat && siteConfig.settings_4.useSug) && (bdcsUtils.insertCSS(sugCSS), bdcsUtils.insertCSS(".bdcs-container{overflow:visible;}", !1));
            var a = document.createElement("div");
            a.className = "bdcs-container",
            e.appendChild(a),
            a.innerHTML = utils.tmpl(bdcsTpl, siteConfig),
            o(),
            siteConfig.settings.useSetting && siteConfig.settings.useZone ? new Zone({
                formElem: document.getElementById("bdcs-search-form"),
                inputElem: document.getElementById("bdcs-search-form-input")
            }) : siteConfig.settings_2.useSliding && siteConfig.settings_2.useZone ? new Zone({
                formElem: document.getElementById("sliding-search-form"),
                inputElem: document.getElementById("sliding-search-form-input")
            }) : siteConfig.settings_3.usePopup && siteConfig.settings_3.useZone ? new Zone({
                formElem: document.getElementById("popup-search-form"),
                inputElem: document.getElementById("popup-search-form-input")
            }) : siteConfig.settings_4.useFloat && siteConfig.settings_4.useZone ? new Zone({
                formElem: document.getElementById("float-search-form"),
                inputElem: document.getElementById("float-search-form-input")
            }) : siteConfig.settings_5.useCustom && siteConfig.settings_5.useZone && new Zone({
                formElem: znCustomBox.index.getNode().form,
                inputElem: znCustomBox.index.getNode().input
            }),
            znDefultBox.index.init(),
            znSlideBox.index.init(),
            znPopupBox.index.init(),
            znFloatBox.index.init(),
            znCustomBox.index.init();
            var l = document.getElementById("bdcs-search-form-submit"),
            c = document.getElementById("bdcs-search-form-input");
            if (l && c) {
                var d = utils.getStyle(l, "height");
                utils.setStyle(c, {
                    height: d,
                    lineHeight: d
                })
            }
            return log.send(urlConfig.ping, pageLog, {
                plate_url: siteConfig.locationUrl || window.location.href
            }),
            e
        }
        function n() {
            var e = document.getElementById("bdcs"),
            t = utils.getElementsByClassName("bdcs-container")[0];
            e && t && e.removeChild(t),
            bdcsUtils.removeCSS()
        }
        function s(e, i, n) {
            FlyJSONP.get({
                url: siteConfig.hotUrl || urlConfig.hot,
                parameters: {
                    uid: siteConfig.fineHotUid ? siteConfig.fineHotUid: window.location.href,
                    logid: siteConfig.logId,
                    sid: siteConfig.siteId,
                    rn: siteConfig.isDemo ? 15 : n,
                    prod: i
                },
                success: function(i) {
                    if (i.data) switch (e) {
                    case 1:
                        t(i.data, siteConfig.settings.hotNum, siteConfig.settings.useCustomHotWords, siteConfig.settings.customHotWords, document.getElementById("bdcs-hot"), siteConfig.settings.hotFineWordsEnable);
                        break;
                    case 2:
                        t(i.data, siteConfig.settings_2.hotNum, siteConfig.settings_2.useCustomHotWords, siteConfig.settings_2.customHotWords, document.getElementById("sliding-hot"), siteConfig.settings_2.hotFineWordsEnable);
                        break;
                    case 3:
                        t(i.data, siteConfig.settings_3.hotNum, siteConfig.settings_3.useCustomHotWords, siteConfig.settings_3.customHotWords, document.getElementById("popup-hot"), siteConfig.settings_3.hotFineWordsEnable);
                        break;
                    case 4:
                        t(i.data, siteConfig.settings_4.hotNum, siteConfig.settings_4.useCustomHotWords, siteConfig.settings_4.customHotWords, document.getElementById("float-hot"), siteConfig.settings_4.hotFineWordsEnable);
                        break;
                    case 5:
                        znCustomBox.index.initHot(i.data)
                    }
                }
            })
        }
        function o() {
            var e;
            siteConfig.settings.useSetting && siteConfig.settings.useHot && (e = "", siteConfig.settings.hotFineWordsEnable && (e = siteConfig.settings.hotFineDetailType), s(1, e, siteConfig.settings.hotNum)),
            siteConfig.settings_2.useSliding && siteConfig.settings_2.useHot && (e = "", siteConfig.settings_2.hotFineWordsEnable && (e = siteConfig.settings_2.hotFineDetailType), s(2, e, siteConfig.settings_2.hotNum)),
            siteConfig.settings_3.usePopup && siteConfig.settings_3.useHot && (e = "", siteConfig.settings_3.hotFineWordsEnable && (e = siteConfig.settings_3.hotFineDetailType), s(3, e, siteConfig.settings_3.hotNum)),
            siteConfig.settings_4.useFloat && siteConfig.settings_4.useHot && (e = "", siteConfig.settings_4.hotFineWordsEnable && (e = siteConfig.settings_4.hotFineDetailType), s(4, e, siteConfig.settings_4.hotNum)),
            siteConfig.settings_5.useCustom && siteConfig.settings_5.useHot && (e = "", siteConfig.settings.hotFineWordsEnable && (e = siteConfig.settings_5.hotFineDetailType), s(5, e, siteConfig.settings_5.hotNum))
        }
        return {
            create: i,
            dispose: n,
            getFineHot: e
        }
    } ();
    "_bdcs" in window && window._bdcs.siteConfig && (siteConfig = utils.extendDeep(siteConfig, window._bdcs.siteConfig)),
    FlyJSONP.init(),
    null == content.create() && utils.DOMReady(function() {
        content.create()
    }),
    !
    function() {
        function replaceWord(elem, wordObject) {
            for (var words = wordObject.word,
            n = 0,
            nLen = words.length; nLen > n; n++) {
                var eword, flag = 1;
                eval("eword = " + words[n] + ";");
                for (var word = eword.entity,
                m = 0; m < replaceBan.length; m++) word === replaceBan[m] && (flag = 0);
                if (! (successWords.length >= replaceNum || 0 === flag)) {
                    for (var link = wordObject.link,
                    wordRegex = new RegExp(word), wordRegexGlobal = new RegExp(word, "g"), matchNum, textNodes = utils.getTextNodes(elem), textNode, validTextNodes = [], parentNode, hook_1 = document.getElementById("bdcs"), hook_2 = document.getElementById("bdcs-rec"), hookParent = hook_1 && hook_2 && hook_1.parentNode && hook_2.parentNode, i = 0, iLen = textNodes.length; iLen > i; i++) textNodes[i].nodeValue.indexOf(word) > -1 && validTextNodes.push(textNodes[i]);
                    for (var i = 0,
                    iLen = validTextNodes.length; iLen > i; i++) {
                        textNode = validTextNodes[i];
                        var isForbidden = 0;
                        try {
                            if (parentNode = textNode.parentNode, textNode.parentNode.parentNode) {
                                var parentNode2 = textNode.parentNode.parentNode;
                                if ( - 1 !== utils.indexOf(forbiddenLinkWrapper2, parentNode2.nodeName.toLowerCase()) && (isForbidden = 1), parentNode2.parentNode) {
                                    var parentNode3 = parentNode2.parentNode; - 1 !== utils.indexOf(forbiddenLinkWrapper2, parentNode3.nodeName.toLowerCase()) && (isForbidden = 1)
                                }
                            }
                            matchNum = textNode.nodeValue.match(wordRegexGlobal) ? textNode.nodeValue.match(wordRegexGlobal).length: 0;
                            for (var j = 0; matchNum > j; j++) wordsStatus[word] = wordsStatus[word] || 0,
                            textNode && parentNode && -1 === utils.indexOf(forbiddenLinkWrapper, parentNode.nodeName.toLowerCase()) && hookParent !== parentNode && word && void 0 != wordsStatus[word] && wordsStatus[word] < replaceLimit && 0 === isForbidden ? (wordsStatus[word]++, textNode.nodeValue = textNode.nodeValue.replace(wordRegex, safeWord), successWords.push(word)) : failWords.push(word); (iLen > i + 1 && validTextNodes[i + 1].parentNode != parentNode || i + 1 == iLen && hookParent !== parentNode) && (parentNode.innerHTML = parentNode.innerHTML.replace(safeWordRegex, '<a href="' + link + "&q=" + encodeURIComponent(word) + '" class="bdcs-inlinelink" target=' + siteConfig.resultTarget + ">" + word + "</a>"))
                        } catch(e) {
                            return void failWords.push(word)
                        }
                    }
                }
            }
        }
        var forbiddenLinkWrapper = ["a", "input", "button", "style", "script", "iframe", "video", "audio", "canvas", "del", "code", "meta", "link", "noscript", "object", "option", "select", "h1", "h2", "h3", "body"],
        forbiddenLinkWrapper2 = ["a", "h1", "h2", "h3"];
        urlConfig.xpathJS = urlConfig.urlRoot + "static/customer-search/js/wgxpath.install.js";
        var inlineLinkElems, wordsStatus = {},
        replaceLimit = 1,
        replaceNum = 10,
        replaceBan = [],
        currentNum = 0,
        safeWord = "PUSDVJ_BAIDURP_38707944",
        safeWordRegex = new RegExp(safeWord, "g"),
        successWords = [],
        failWords = [];
        siteConfig.settings.useInline ? (replaceLimit = 0 === siteConfig.settings.inlineLimit ? 100 : siteConfig.settings.inlineLimit, replaceNum = siteConfig.settings.inlineNum ? siteConfig.settings.inlineNum: 10, replaceBan = siteConfig.settings.inlineBan.length > 0 ? siteConfig.settings.inlineBan: []) : siteConfig.settings_2.useInline ? (replaceLimit = 0 === siteConfig.settings_2.inlineLimit ? 100 : siteConfig.settings_2.inlineLimit, replaceNum = siteConfig.settings_2.inlineNum ? siteConfig.settings_2.inlineNum: 10, replaceBan = siteConfig.settings_2.inlineBan.length > 0 ? siteConfig.settings_2.inlineBan: []) : siteConfig.settings_3.useInline ? (replaceLimit = 0 === siteConfig.settings_3.inlineLimit ? 100 : siteConfig.settings_3.inlineLimit, replaceNum = siteConfig.settings_3.inlineNum ? siteConfig.settings_3.inlineNum: 10, replaceBan = siteConfig.settings_3.inlineBan.length > 0 ? siteConfig.settings_3.inlineBan: []) : siteConfig.settings_4.useInline ? (replaceLimit = 0 === siteConfig.settings_4.inlineLimit ? 100 : siteConfig.settings_4.inlineLimit, replaceNum = siteConfig.settings_4.inlineNum ? siteConfig.settings_4.inlineNum: 10, replaceBan = siteConfig.settings_4.inlineBan.length > 0 ? siteConfig.settings_4.inlineBan: []) : siteConfig.settings_5.useInline && (replaceLimit = 0 === siteConfig.settings_5.inlineLimit ? 100 : siteConfig.settings_5.inlineLimit, replaceNum = siteConfig.settings_5.inlineNum ? siteConfig.settings_5.inlineNum: 10, replaceBan = siteConfig.settings_5.inlineBan.length > 0 ? siteConfig.settings_5.inlineBan: []),
        utils.DOMReady(function() {
            for (var e = ["ikandian.com", "kandian5.com", "zjrxz.com", "yxlady.com", "guatian.com", "shangc.net"], t = 1, i = siteConfig.inlineSites || e, n = 0, s = i.length; s > n; n++) if (window.location.href.indexOf(i[n]) >= 0) {
                t = 0;
                break
            }
            var o = siteConfig.settings.useInline || siteConfig.settings_2.useInline || siteConfig.settings_3.useInline || siteConfig.settings_4.useInline || siteConfig.settings_5.useInline;
            o && t && utils.loadScript(urlConfig.xpathJS,
            function() {
                wgxpath.install(),
                FlyJSONP.get({
                    url: siteConfig.link || urlConfig.link,
                    parameters: {
                        uid: siteConfig.locationUrl || window.location.href
                    },
                    success: function(e) {
                        var t, i, n, s, o = e.word,
                        r = {};
                        if (o && 0 === e.errno) {
                            bdcsUtils.insertCSS("a.bdcs-inlinelink{color:#136EC2}", !1);
                            var a = /^https?:\/\//,
                            l = 0;
                            siteConfig.settings.useSetting ? siteConfig.settings.cseUrl ? siteConfig.resultUrl = siteConfig.settings.cseUrl: l = 1 : siteConfig.settings_2.useSliding ? siteConfig.settings_2.cseUrl ? siteConfig.resultUrl = siteConfig.settings_2.cseUrl: l = 1 : siteConfig.settings_3.usePopup ? siteConfig.settings_3.cseUrl ? siteConfig.resultUrl = siteConfig.settings_3.cseUrl: l = 1 : siteConfig.settings_4.useFloat ? siteConfig.settings_4.cseUrl ? siteConfig.resultUrl = siteConfig.settings_4.cseUrl: l = 1 : siteConfig.settings_5.useCustom && (siteConfig.settings_5.cseUrl ? siteConfig.resultUrl = siteConfig.settings_5.cseUrl: l = 1),
                            1 === l && (siteConfig.resultUrl = siteConfig.resultUrl || "zhannei.baidu.com", -1 === siteConfig.resultUrl.indexOf("cse/search") && (siteConfig.resultUrl += "/" !== siteConfig.resultUrl.charAt(siteConfig.resultUrl.length - 1) ? "/cse/search": "cse/search")),
                            a.test(siteConfig.resultUrl) || (siteConfig.resultUrl = "http://" + siteConfig.resultUrl),
                            siteConfig.resultTarget = "_blank";
                            var c = document.getElementById("bdcs-frame-box");
                            c && l && (siteConfig.resultUrl = "", siteConfig.resultTarget = "_self"),
                            "4195211300598999376" == siteConfig.siteId && (siteConfig.resultUrl = "http://so.39.net/cse/search");
                            var d = siteConfig.resultUrl + "?s=" + siteConfig.siteId + "&entry=1";
                            siteConfig.channelList && siteConfig.channelList[0] && (d += "&cid=" + siteConfig.channelList[0]),
                            siteConfig.settings.useSetting && siteConfig.settings.inurl && (d += "&inurl=" + siteConfig.settings.inurl);
                            for (var u = 0,
                            g = o.length; g > u; u++) t = o[u].xpath,
                            r[t] = r[t] || [],
                            r[t].push({
                                word: o[u].entity_list || [],
                                link: d
                            });
                            for (i in r) {
                                n = document.evaluate(i, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
                                for (var p = 0,
                                f = n.snapshotLength; f > p; p++) s = n.snapshotItem(p),
                                replaceWord(s, r[i][0])
                            }
                            log.send(urlConfig.log, pageLog, {
                                log_type: "inline",
                                site_id: siteConfig.siteId,
                                plate_url: siteConfig.locationUrl || window.location.href,
                                inline_num: successWords.length + failWords.length,
                                success: encodeURIComponent(successWords.toString()),
                                fail: encodeURIComponent(failWords.toString())
                            }),
                            inlineLinkElems = utils.getElementsByClassName("bdcs-inlinelink");
                            for (var p = 0,
                            f = inlineLinkElems.length; f > p; p++) utils.addEvent(inlineLinkElems[p], "click",
                            function() {
                                log.send(urlConfig.log, pageLog, {
                                    log_type: "inline_click",
                                    site_id: siteConfig.siteId,
                                    plate_url: siteConfig.locationUrl || window.location.href,
                                    link_url: encodeURIComponent(this.getAttribute("href")),
                                    word: encodeURIComponent(this.innerHTML)
                                })
                            })
                        }
                    }
                })
            })
        })
    } ();
    var Tooltip = function() {
        function e(e, t, i) {
            e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent ? e.attachEvent("on" + t, i) : e["on" + t] = i
        }
        function t(e, t) {
            var i, n = e || {};
            for (i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
            return n
        }
        function i(e, t) {
            t = t || "tooltip-styleElem";
            var i = document.createElement("style");
            i.name = t;
            var n = document.getElementsByTagName("head");
            n && n[0].appendChild(i),
            i.styleSheet ? i.styleSheet.cssText = e: i.appendChild(document.createTextNode(e))
        }
        function n(e) {
            return e ? e.replace(/^\s+|\s+$/g, "") : void 0
        }
        function s(e) {
            return e ? e.replace(/\s+/g, " ") : void 0
        }
        function o(e, t) {
            var i, o, r = t;
            if ("string" == typeof t && (r = r.split(" ")), 1 === e.nodeType && e.className) for (var a = 0,
            l = r.length; l > a; a++) i = r[a],
            o = new RegExp("\\b(" + i + ")\\b"),
            o.test(e.className) && (e.className = e.className.replace(o, " "));
            e.className = n(e.className) || "",
            e.className = s(e.className) || ""
        }
        function r(e) {
            var i = {
                content: "",
                showEvent: "mouseover",
                hideEvent: "mouseout",
                arrowClass: {
                    top: "arrow-top",
                    innertop: "arrowinner-top",
                    bottom: "arrow-bottom",
                    innerbottom: "arrowinner-bottom"
                },
                GAP: 5,
                arrowHook: null,
                arrowInner: null,
                arrowPosition: null,
                disappearTimerAttr: "data-hide-timer",
                disappearDelay: 500,
                triggerData: []
            };
            this.options = t(i, e || {}),
            this.render(this.options.data)
        }
        var a = document.createElement("div");
        return r.prototype.locate = function(e, t) {
            var i = this;
            refer = e,
            option = i.options || {};
            var n = (option.container, option.position);
            a.style.visibility = "hidden",
            a.style.position = "absolute",
            a.style.display = "block";
            var s = option.gap || option.GAP,
            r = option.arrowHook,
            l = option.arrowInner;
            sLeft = 0 == document.documentElement.scrollLeft ? document.body.scrollLeft: document.documentElement.scrollLeft,
            sTop = 0 == document.documentElement.scrollTop ? document.body.scrollTop: document.documentElement.scrollTop,
            window.innerWidth ? winWidth = window.innerWidth: document.body && document.body.clientWidth && (winWidth = document.body.clientWidth),
            window.innerHeight ? winHeight = window.innerHeight: document.body && document.body.clientHeight && (winHeight = document.documentElement.clientHeight);
            var c = sTop,
            d = sLeft;
            if (refer.offsetWidth > 400) var u = e.innerHTML.length + refer.offsetHeight / 2,
            g = refer.offsetHeight / 2,
            p = t.clientX + sLeft - 20,
            f = t.clientY + sTop - 20;
            else var u = refer.offsetWidth,
            g = refer.offsetHeight,
            m = refer.getBoundingClientRect(),
            f = m.top + sTop,
            p = m.left + sLeft;
            var h = a.offsetWidth,
            b = a.offsetHeight,
            C = r.offsetWidth,
            v = r.offsetHeight / 2;
            a.style.display = "none",
            a.style.visibility = "visible";
            var y = {},
            w = {};
            if (y = {
                top: null,
                left: null,
                arrowPos: null,
                arrowLeft: null
            },
            y.arrowPos = "top", y.top = f + g + s + v, y.left = p, y.arrowLeft = p - C / 2, w.bottomll = y, y = {
                top: null,
                left: null,
                arrowPos: null,
                arrowLeft: null
            },
            y.arrowPos = "top", y.top = f + g + s + v, y.left = p + (u - h), y.arrowLeft = p + u - C / 2, w.bottomrr = y, y = {
                top: null,
                left: null,
                arrowPos: null,
                arrowLeft: null
            },
            y.top = f - s - b - v, y.arrowPos = "bottom", y.left = p, y.arrowLeft = p - C / 2, w.topll = y, y = {
                top: null,
                left: null,
                arrowPos: null,
                arrowLeft: null
            },
            y.top = f - s - b - v, y.arrowPos = "bottom", y.left = p + (u - h), y.arrowLeft = p + u - C / 2, w.toprr = y, n && w[n]) y = w[n];
            else {
                var x, _, E, S;
                for (x in w) y = w[x],
                _ = this.calculateArea(c, d, winWidth, winHeight, y.top, y.left, h, b),
                _ = _.area,
                (!S || _ > E) && (S = x, E = _);
                y = w[S]
            }
            null !== y.arrowLeft && (y.left > y.arrowLeft && (y.arrowLeft = y.left + C), y.arrowLeft + C > y.left + h && (y.arrowLeft = y.left + h - 3 * C)),
            null !== y.arrowLeft && (y.arrowLeft = y.arrowLeft - y.left),
            a.style.top = y.top + "px",
            a.style.left = y.left + "px",
            o(r, option.arrowClass.top),
            o(l, option.arrowClass.innertop),
            o(r, option.arrowClass.bottom),
            o(l, option.arrowClass.innerbottom),
            this.options.arrowPosition = y.arrowPos,
            this.posArrow();
            var I = y.arrowLeft || "";
            "" == I ? (r.style.left = "", l.style.left = "") : (r.style.left = I + "px", l.style.left = I + "px"),
            r.style.zIndex = "2",
            l.style.zIndex = "3"
        },
        r.prototype.calculateArea = function(e, t, i, n, s, o, r, a) {
            var l = s > e ? s: e,
            c = o > t ? o: t,
            d = e + n > s + a ? s + a: e + n,
            u = t + i > o + r ? o + r: t + i;
            return {
                area: (u - c) * (d - l)
            }
        },
        r.prototype.posArrow = function() {
            var e = this,
            t = e.options;
            switch (t.arrowPosition) {
            case "top":
                t.arrowHook.className += " arrow-top",
                t.arrowInner.className += " arrowinner-top";
                break;
            case "bottom":
                t.arrowHook.className += " arrow-bottom",
                t.arrowInner.className += " arrowinner-bottom"
            }
        },
        r.prototype.pop = function(e, t) {
            var i = this;
            i.locate(e, t)
        },
        r.prototype.setData = function(e, t) {
            for (var i = this,
            n = i.options,
            s = 0,
            o = e.length; o > s; s++) for (var r = 0,
            a = t.length; a > r; r++) e[s].innerHTML == t[r].name && e[s].getAttribute("data-offset") == t[r].offset && e[s].getAttribute("data-xpath") == t[r].xpath && (n.triggerData.push(t[r]), i.setTargetData(e[s], s))
        },
        r.prototype.setTargetData = function(e, t) {
            e.setAttribute("data-index", t)
        },
        r.prototype.setTargetCSS = function() {
            i(".bdcs-inlineAdvlink{color:#1e0fbe;}"),
            i(".bdcs-tooltip-panel{box-shadow: 0px 0px 10px #c9c7c7;-moz-box-shadow: 0px 0px 10px #c9c7c7;-webkit-box-shadow: 0px 0px 10px #c9c7c7;background-color: white;border: 1px solid #D9D9D9;color: inherit;display:none;z-index:200000000;line-height: normal;_zoom: 1;}")
        },
        r.prototype.setArrowCSS = function() {
            var e = this,
            t = e.options;
            t.arrowHook = document.createElement("i"),
            t.arrowInner = document.createElement("i"),
            t.arrowHook.innerHTML = "&#9670;",
            t.arrowInner.innerHTML = "&#9670;",
            a.appendChild(t.arrowHook),
            a.appendChild(t.arrowInner),
            i('.bdcs-tooltip-arrow, .bdcs-tooltip-arrowinner{position: absolute;font: 400 14px/18px "宋体";width: 14px;overflow: hidden;}'),
            i(".arrow-top{top: -9px;color:#D9D9D9;}"),
            i(".arrowinner-top{top: -8px;color:#fff;}"),
            i(".arrow-bottom{bottom: -11px;color:#D9D9D9;}"),
            i(".arrowinner-bottom{bottom: -9px;color:#fff;}"),
            t.arrowHook.className = "bdcs-tooltip-arrow",
            t.arrowInner.className = "bdcs-tooltip-arrowinner"
        },
        r.prototype.setContent = function() {
            var e = this;
            e.options,
            document.body.appendChild(a);
            var t = document.createElement("iframe");
            return t.width = 326,
            t.height = 214,
            t.frameborder = "0",
            t.setAttribute("frameborder", "0", 0),
            t.scrolling = "no",
            a.appendChild(t),
            a.className = "bdcs-tooltip-panel",
            a.id = "bdcs-tooltip-panel",
            {
                iframe: t
            }
        },
        r.prototype.render = function(t) {
            var i = this,
            n = i.options,
            s = n.trigger,
            o = i.setContent();
            i.setData(s, t),
            i.setArrowCSS(),
            i.setTargetCSS();
            for (var r = 0,
            l = s.length; l > r; r++) e(s[r], "mouseover",
            function(e) {
                var t = e.target || e.srcElement;
                clearTimeout(a.getAttribute(n.disappearTimerAttr));
                var s = (siteConfig.znsvUrl || urlConfig.urlRoot) + "static/customer-search/html/inlinecard.html?name=" + encodeURIComponent(t.innerHTML) + "&baikeId=" + t.getAttribute("data-baike") + "&plate_url=" + encodeURIComponent(siteConfig.locationUrl || window.location.href) + "&site_id=" + siteConfig.siteId + "&log_id=" + siteConfig.logId + "#" + t.getAttribute("data-entity");
                o.iframe.src = s,
                i.pop(t, e),
                a.style.display = "block"
            }),
            e(s[r], "mouseout",
            function() {
                a.setAttribute(n.disappearTimerAttr, setTimeout(function() {
                    a.style.display = "none",
                    o.iframe.src = ""
                },
                n.disappearDelay))
            }),
            e(a, "mouseover",
            function() {
                a.style.display = "block",
                clearTimeout(a.getAttribute(n.disappearTimerAttr))
            }),
            e(a, "mouseleave",
            function() {
                a.style.display = "none",
                o.iframe.src = ""
            })
        },
        r
    } (); !
    function() {
        function e(e, t) {
            for (var n = t,
            g = 0,
            p = n.length; p > g; g++) {
                for (var f, m, h, b = n[g].name, C = n[g].offset, v = n[g].entity, y = n[g].baike, w = new RegExp(b), x = new RegExp(b, "g"), _ = utils.getTextNodes(e), E = [], S = 1, I = 0; I < a.length; I++) b === a[I] && (S = 0);
                if (! (l.length >= r || 0 === S)) {
                    for (var k = document.getElementById("bdcs"), F = k && k.parentNode, T = 0, N = _.length; N > T; T++) _[T].nodeValue.indexOf(b) > -1 && E.push(_[T]);
                    for (var T = 0,
                    N = E.length; N > T; T++) {
                        m = E[T];
                        try {
                            h = m.parentNode,
                            f = m.nodeValue.match(x) ? m.nodeValue.match(x).length: 0;
                            for (var L = 0; f > L; L++) s[b] = s[b] || 0,
                            m && h && -1 === utils.indexOf(i, h.nodeName.toLowerCase()) && F !== h && b && void 0 != s[b] && s[b] < o ? (s[b]++, m.nodeValue = m.nodeValue.replace(w, d), l.push(b)) : c.push(b); (N > T + 1 && E[T + 1].parentNode != h || T + 1 == N && F !== h) && (h.innerHTML = h.innerHTML.replace(u, '<a href="javascript:void();" class="bdcs-inlinecard" data-offset="' + C + '" data-entity="' + encodeURIComponent(v) + '" data-baike="' + y + '">' + b + "</a>"))
                        } catch(B) {
                            return void c.push(b)
                        }
                    }
                }
            }
        }
        var t = ["ikandian.com", "kandian5.com", "zjrxz.com", "yxlady.com", "guatian.com", "shangc.net"],
        i = ["a", "input", "button", "style", "script", "iframe", "video", "audio", "canvas", "del", "code", "meta", "link", "noscript", "object", "option", "select", "h1", "h2", "h3", "body"];
        urlConfig.xpathJS = urlConfig.urlRoot + "static/customer-search/js/wgxpath.install.js",
        urlConfig.inlineCardLink = urlConfig.urlRoot + "customer_search/api/card";
        var n, s = {},
        o = 1,
        r = 20,
        a = [],
        l = [],
        c = [],
        d = "PUSDVJ_BAIDURP_38707944",
        u = new RegExp(d, "g");
        siteConfig.settings.useInline ? (o = 0 === siteConfig.settings.inlineLimit ? 100 : siteConfig.settings.inlineLimit, r = siteConfig.settings.inlineNum ? siteConfig.settings.inlineNum: 20, a = siteConfig.settings.inlineBan.length > 0 ? siteConfig.settings.inlineBan: []) : siteConfig.settings_2.useInline ? (o = 0 === siteConfig.settings_2.inlineLimit ? 100 : siteConfig.settings_2.inlineLimit, r = siteConfig.settings_2.inlineNum ? siteConfig.settings_2.inlineNum: 20, a = siteConfig.settings_2.inlineBan.length > 0 ? siteConfig.settings_2.inlineBan: []) : siteConfig.settings_3.useInline ? (o = 0 === siteConfig.settings_3.inlineLimit ? 100 : siteConfig.settings_3.inlineLimit, r = siteConfig.settings_3.inlineNum ? siteConfig.settings_3.inlineNum: 20, a = siteConfig.settings_3.inlineBan.length > 0 ? siteConfig.settings_3.inlineBan: []) : siteConfig.settings_4.useInline ? (o = 0 === siteConfig.settings_4.inlineLimit ? 100 : siteConfig.settings_4.inlineLimit, r = siteConfig.settings_4.inlineNum ? siteConfig.settings_4.inlineNum: 20, a = siteConfig.settings_4.inlineBan.length > 0 ? siteConfig.settings_4.inlineBan: []) : siteConfig.settings_5.useInline && (o = 0 === siteConfig.settings_5.inlineLimit ? 100 : siteConfig.settings_5.inlineLimit, r = siteConfig.settings_5.inlineNum ? siteConfig.settings_5.inlineNum: 20, a = siteConfig.settings_5.inlineBan.length > 0 ? siteConfig.settings_5.inlineBan: []),
        utils.DOMReady(function() {
            for (var i = siteConfig.inlineSites || t,
            s = 0,
            o = i.length; o > s; s++) if (window.location.href.indexOf(i[s]) >= 0) {
                utils.loadScript(urlConfig.xpathJS,
                function() {
                    wgxpath.install(),
                    FlyJSONP.get({
                        url: siteConfig.inlineCardUrl || urlConfig.inlineCardLink,
                        parameters: {
                            uid: siteConfig.locationUrl || window.location.href,
                            logid: siteConfig.logId,
                            sid: siteConfig.siteId
                        },
                        success: function(t) {
                            var i, s, o, r, a = t.result.res,
                            d = {};
                            if (a.length) {
                                bdcsUtils.insertCSS("a.bdcs-inlinecard{cursor:default;color:#136EC2}a.bdcs-inlinecard:hover{color:#0050c8;}", !1);
                                for (var u = 0,
                                g = a.length; g > u; u++) i = a[u].xpath,
                                d[i] = d[i] || [],
                                d[i].push({
                                    name: a[u].name,
                                    offset: a[u].offset,
                                    baike: a[u].baikeID,
                                    entity: a[u].ret_value
                                });
                                for (s in d) for (var o = document.evaluate(s, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null), p = 0, f = o.snapshotLength; f > p; p++) r = o.snapshotItem(p),
                                e(r, d[s]);
                                n = utils.getElementsByClassName("bdcs-inlinecard");
                                for (var p = 0,
                                f = n.length; f > p; p++) utils.addEvent(n[p], "mouseover",
                                function() {
                                    log.send(urlConfig.log, pageLog, {
                                        query: encodeURIComponent(content),
                                        inline_type: "show",
                                        site_id: siteConfig.siteId,
                                        plate_url: siteConfig.locationUrl || window.location.href
                                    })
                                });
                                log.send(urlConfig.log, pageLog, {
                                    inline_type: "inline",
                                    site_id: siteConfig.siteId,
                                    plate_url: siteConfig.locationUrl || window.location.href,
                                    inline_num: l.length + c.length,
                                    success: encodeURIComponent(l.toString()),
                                    fail: encodeURIComponent(c.toString())
                                }),
                                new Tooltip({
                                    trigger: utils.getElementsByClassName("bdcs-inlinecard"),
                                    data: a,
                                    tooltipDivClassName: "bdcs-tooltip-panel"
                                })
                            }
                        }
                    })
                });
                break
            }
        })
    } ();
    var reccardCSS = "div#bdcsRecCard .rec-card-container{width:100%;margin-top:5px;margin-bottom:10px}div#bdcsRecCard .rec-card-container .rec-card-title{color:#A6A6A6;font-size:14px;padding:10px;padding-bottom:5px}div#bdcsRecCard .rec-card-container .rec-card-list{width:100%;padding-left:8px;overflow:hidden;height:35px}div#bdcsRecCard .rec-card-container .rec-card-list li{float:left;list-style:none;margin:0;padding:0;display:block;margin-right:9px;margin-top:4px}div#bdcsRecCard .rec-card-container .rec-card-list li a{padding:6px 8px;background:#f7f7f7;margin:0;margin-top:1px;text-decoration:none;font-size:12px;text-align:center;display:inline-block}div#bdcsRecCard .rec-card-container .rec-card-list li a.even{color:#3385ff}div#bdcsRecCard .rec-card-container .rec-card-list li a.even:hover{background:#3385ff;color:#fff}div#bdcsRecCard .rec-card-container .rec-card-list li a.odd{color:#ff860d}div#bdcsRecCard .rec-card-container .rec-card-list li a.odd:hover{background:#ff860d;color:#fff}.clearfix:after{content:'';display:block;clear:both;height:0}.clearfix{zoom:1}"; !
    function() {
        function getRandomSize(e, t) {
            return Math.floor(e + Math.random() * (t - e))
        }
        function create(wordObject) {
            var bdcsRecCard = document.getElementById("bdcsRecCard");
            if (bdcsRecCard) {
                bdcsUtils.insertCSS(reccardCSS, !1, "aaa");
                var tpl = ['<div class="rec-card-container">', '<div class="rec-card-title" id="bdcsRecCardTitle"></div>', '<div class="rec-card-list clearfix" id="bdcsRecCardList">', "</div>", "</div>"].join("");
                bdcsRecCard.innerHTML = tpl;
                var list = document.getElementById("bdcsRecCardList"),
                title = document.getElementById("bdcsRecCardTitle"),
                item = "",
                baike = wordObject.baikeID,
                value = eval("(" + wordObject.ret_value + ")"),
                leftEntity = value[baike].left_entity,
                midEntity = value[baike].mid_entity;
                title.innerHTML = midEntity.name + "和" + leftEntity.name + "之间的那些事";
                for (var lefttags = leftEntity.TAG,
                i = 0; i < lefttags.length; i++) {
                    var tag = midEntity.name + leftEntity.name + lefttags[i];
                    item += i % 2 == 0 ? '<li class="rec-card-list-item"><a class="even" href="http://www.baidu.com/s?wd=' + encodeURIComponent(tag) + '&tn=SE_pscse_053x7tyx" target="_blank">' + tag + "</a></li>": '<li class="rec-card-list-item"><a class="odd" href="http://www.baidu.com/s?wd=' + encodeURIComponent(tag) + '&tn=SE_pscse_053x7tyx" target="_blank">' + tag + "</a></li>"
                }
                list.innerHTML = item
            }
        }
        var recLinkSites = ["ikandian.com", "kandian5.com", "zjrxz.com", "yxlady.com", "guatian.com", "shangc.net"];
        urlConfig.recCardLink = urlConfig.urlRoot + "customer_search/api/card";
        var inlineLinkElems;
        utils.DOMReady(function() {
            for (var e = siteConfig.inlineSites || recLinkSites,
            t = 0,
            i = e.length; i > t; t++) if (window.location.href.indexOf(e[t]) >= 0) {
                FlyJSONP.get({
                    url: siteConfig.inlineCardUrl || urlConfig.recCardLink,
                    parameters: {
                        uid: siteConfig.locationUrl || window.location.href,
                        logid: siteConfig.logId,
                        sid: siteConfig.siteId
                    },
                    success: function(e) {
                        var t = e.result.res,
                        i = 0,
                        n = null,
                        s = document.getElementById("bdcsRecCard");
                        if (s) {
                            if (!t.length) {
                                var s = document.getElementById("bdcsRecCard");
                                return s && (s.style.display = "none"),
                                void log.send(urlConfig.log, pageLog, {
                                    inline_type: "rec_card_show",
                                    site_id: siteConfig.siteId,
                                    num: 0,
                                    num_val: "",
                                    plate_url: siteConfig.locationUrl || window.location.href
                                })
                            }
                            i = getRandomSize(0, t.length - 1),
                            n = t[i],
                            create(n),
                            inlineLinkElems = utils.getElementsByClassName("rec-card-list-item"),
                            num_val = [];
                            for (var o = 0,
                            r = inlineLinkElems.length; r > o; o++) utils.addEvent(inlineLinkElems[o], "click",
                            function(e) {
                                var t = e.target || e.srcElement;
                                log.send(urlConfig.log, pageLog, {
                                    query: encodeURIComponent(t.innerText),
                                    inline_type: "rec_card_click",
                                    site_id: siteConfig.siteId,
                                    plate_url: siteConfig.locationUrl || window.location.href
                                })
                            }),
                            num_val.push(inlineLinkElems[o].innerText);
                            log.send(urlConfig.log, pageLog, {
                                inline_type: "rec_card_show",
                                site_id: siteConfig.siteId,
                                num: inlineLinkElems.length,
                                num_val: encodeURIComponent(num_val.toString()),
                                plate_url: siteConfig.locationUrl || window.location.href
                            })
                        }
                    }
                });
                break
            }
        })
    } ();
    var searchRmd = function() {
        function _trim(e) {
            return e ? e.replace(/^\s+|\s+$/g, "") : void 0
        }
        function _clearMultiSpace(e) {
            return e ? e.replace(/\s+/g, " ") : void 0
        }
        function _addClass(e, t) {
            var i, n, s = t;
            if ("string" == typeof t && (s = s.split(" ")), 1 === e.nodeType) if (e.className || 1 !== s.length) for (var o = 0,
            r = s.length; r > o; o++) i = s[o],
            n = new RegExp("\\b(" + i + ")\\b"),
            n.test(e.className) || (e.className = e.className + " " + i);
            else e.className = s[0];
            e.className = _trim(e.className),
            e.className = _clearMultiSpace(e.className)
        }
        function _removeClass(e, t) {
            var i, n, s = t;
            if ("string" == typeof t && (s = s.split(" ")), 1 === e.nodeType && e.className) for (var o = 0,
            r = s.length; r > o; o++) i = s[o],
            n = new RegExp("\\b(" + i + ")\\b"),
            n.test(e.className) && (e.className = e.className.replace(n, " "));
            e.className = _trim(e.className) || "",
            e.className = _clearMultiSpace(e.className) || ""
        }
        function create(recData, useConfig, useCss, recWords, totleWords) {
            function getRandomColor(e) {
                var t = [];
                switch (e) {
                case 0:
                    t = ["#FFCCCC", "#FF8888", "#FF3333", "#FF0000", "#CC0000", "#AA0000", "#880000", "#FFC8B4", "#FFA488", "#FF7744", "#FF5511", "#E63F00", "#C63300", "#A42D00", "#FFDDAA", "#FFBB66", "#FFAA33", "#FF8800", "#EE7700", "#CC6600", "#BB5500", "#FFEE99", "#FFDD55", "#FFCC22", "#FFBB00", "#DDAA00", "#AA7700", "#886600"];
                    break;
                case 1:
                    t = ["#FFFFBB", "#FFFF77", "#FFFF33", "#FFFF00", "#EEEE00", "#BBBB00", "#888800", "#EEFFBB", "#DDFF77", "#CCFF33", "#BBFF00", "#99DD00", "#88AA00", "#668800", "#CCFF99", "#BBFF66", "#99FF33", "#77FF00", "#66DD00", "#55AA00", "#227700", "#99FF99", "#66FF66", "#33FF33", "#00FF00", "#00DD00", "#00AA00", "#008800"];
                    break;
                case 2:
                    t = ["#BBFFEE", "#77FFCC", "#33FFAA", "#00FF99", "#00DD77", "#00AA55", "#008844", "#99FFFF", "#66FFFF", "#33FFFF", "#00FFFF", "#00DDDD", "#00AAAA", "#008888", "#CCEEFF", "#77DDFF", "#33CCFF", "#00BBFF", "#009FCC", "#0088A8", "#007799", "#CCDDFF", "#99BBFF", "#5599FF", "#0066FF", "#0044BB", "#003C9D", "#003377"];
                    break;
                case 3:
                    t = ["#CCCCFF", "#9999FF", "#5555FF", "#0000FF", "#0000CC", "#0000AA", "#000088", "#CCBBFF", "#9F88FF", "#7744FF", "#5500FF", "#4400CC", "#2200AA", "#220088,", "#D1BBFF", "#B088FF", "#9955FF", "#7700FF", "#5500DD", "#4400B3", "#3A0088,", "#E8CCFF", "#D28EFF", "#B94FFF", "#9900FF", "#7700BB", "#66009D", "#550088"];
                    break;
                case 4:
                    t = ["#F0BBFF", "#E38EFF", "#E93EFF", "#CC00FF", "#A500CC", "#7A0099", "#660077", "#FFB3FF", "#FF77FF", "#FF3EFF", "#FF00FF", "#CC00CC", "#990099", "#770077", "#FFB3FF", "#FF77FF", "#FF3EFF", "#FF00FF", "#CC00CC", "#990099", "#770077", "#FFB7DD", "#FF88C2", "#FF44AA", "#FF0088", "#C10066", "#A20055", "#8C0044"];
                    break;
                default:
                    t = ["#FFCCCC", "#FF8888", "#FF3333", "#FF0000", "#CC0000", "#AA0000", "#880000", "#FFC8B4", "#FFA488", "#FF7744", "#FF5511", "#E63F00", "#C63300", "#A42D00", "#FFDDAA", "#FFBB66", "#FFAA33", "#FF8800", "#EE7700", "#CC6600", "#BB5500", "#FFEE99", "#FFDD55", "#FFCC22", "#FFBB00", "#DDAA00", "#AA7700", "#886600"]
                }
                var i = parseInt(28 * Math.random());
                return t[i]
            }
            function getRandomWeight() {
                return Math.round(Math.random())
            }
            function getRandomSize(e, t) {
                return Math.floor(e + Math.random() * (t - e))
            }
            if (!recData || !recData.wordinfo || recData.wordinfo && recData.wordinfo.length < useConfig.minNum && 2 == useConfig.minShow) bdcsUtils.insertCSS("#bdcs-rec{display:none;}", !1, "aaa");
            else {
                if ((6 == parseInt(useConfig.recTemple) || 7 == parseInt(useConfig.recTemple)) && 0 == recData.picinfo.length) return;
                flDispose(),
                dispose(),
                bdcsUtils.insertCSS("#bdcs-rec{display:block;}", !1, "aaa");
                var searchRec = document.getElementById("bdcs-rec");
                if (!searchRec) return;
                var bdcsRecContainerElem = document.createElement("div");
                bdcsRecContainerElem.className = "bdcs-rec-container",
                searchRec.appendChild(bdcsRecContainerElem),
                bdcsRecContainerElem.innerHTML = utils.tmpl(searchTpl, useConfig);
                var showRecNums = 0;
                recData.wordinfo.length >= useConfig.recNums ? showRecNums = useConfig.recNums: recData.wordinfo.length >= useConfig.minNum ? showRecNums = recData.wordinfo.length: (bdcsUtils.insertCSS("#bdcs-rec{display:none;}", !1, "aaa"), showRecNums = 0);
                for (var i = 0; showRecNums > i; i++) {
                    var bdcsRecDetailContent = document.getElementById("bdcs-rec-detail-con"),
                    bdcsRecDetailItem = document.createElement("li");
                    bdcsRecDetailItem.className = "bdcs-rec-detail-item",
                    bdcsRecDetailContent.appendChild(bdcsRecDetailItem),
                    bdcsRecDetailItem = utils.getElementsByClassName("bdcs-rec-detail-item");
                    var bdcsRecClearDn = document.createElement("li");
                    bdcsRecClearDn.className = "bdcs-rec-clear-dn",
                    bdcsRecDetailContent.appendChild(bdcsRecClearDn)
                }
                var customCSS = utils.convertJSON2CSS(useCss);
                bdcsUtils.insertCSS(searchRecCSS + customCSS, !1, "aaa");
                var bdcsRecTitleFont = document.getElementById("bdcs-rec-title-font");
                bdcsRecTitleFont.innerHTML = useConfig.recTitleContent,
                siteConfig.settings_5.useCustom || (siteConfig.settings.useChannels && siteConfig.settings.customChannel.length > 0 && bdcsUtils.insertCSS(".bdcs-search-form-input{width:" + (parseInt(siteConfig.settings.css[".bdcs-search-form-input"].width) - parseInt(siteConfig.settings.css["div#default-searchbox  .default-channel-meun"].width)) + "px;}"), siteConfig.settings_2.useChannels && siteConfig.settings_2.customChannel.length > 0 && bdcsUtils.insertCSS("#sliding-box-item input{width:" + (parseInt(siteConfig.settings_2.slidingcss["#sliding-box-item input"].width) - parseInt(siteConfig.settings_2.slidingcss["div#sliding-searchbox  .sliding-channel-meun"].width)) + "px;}"), siteConfig.settings_3.useChannels && siteConfig.settings_3.customChannel.length > 0 && bdcsUtils.insertCSS("#popup-searchbox input{width:" + (parseInt(siteConfig.settings_3.popupcss["#popup-searchbox input"].width) - parseInt(siteConfig.settings_3.popupcss["div#popup-searchbox  .popup-channel-meun"].width)) + "px;}"), siteConfig.settings_4.useChannels && siteConfig.settings_4.customChannel.length > 0 && bdcsUtils.insertCSS("#float-search-form-input{width:" + (parseInt(siteConfig.settings_4.floatcss["#float-search-form-input"].width) - parseInt(siteConfig.settings_4.floatcss["div#float-searchbox  .float-channel-meun"].width)) + "px;}"));
                var bdcsRecType = document.getElementById("bdcs-rec-type");
                "cross" == useConfig.recType ? _addClass(bdcsRecType, "bdcs-rec-cross") : _addClass(bdcsRecType, "bdcs-rec-down");
                var bdcsRecTemple = document.getElementById("bdcs-rec-temple");
                switch (useConfig.recTemple) {
                case 1:
                case "1":
                    _addClass(bdcsRecTemple, "bdcs-rec-one");
                    break;
                case 2:
                case "2":
                    _addClass(bdcsRecTemple, "bdcs-rec-two");
                    break;
                case 3:
                case "3":
                    _addClass(bdcsRecTemple, "bdcs-rec-three");
                    break;
                case 4:
                case "4":
                    _addClass(bdcsRecTemple, "bdcs-rec-four");
                    break;
                case 5:
                case "5":
                    _addClass(bdcsRecTemple, "bdcs-rec-five");
                    break;
                case 6:
                case "6":
                    _addClass(bdcsRecTemple, "bdcs-rec-one");
                    break;
                case 7:
                case "7":
                    _addClass(bdcsRecTemple, "bdcs-rec-two")
                }
                if (1 == useConfig.recTitlePosition) {
                    var bdcsRecOne = utils.getElementsByClassName("bdcs-rec-one"),
                    clearLeft = document.getElementById("clear-left");
                    bdcsRecOne[0].removeChild(clearLeft);
                    var bdcsRec = document.getElementById("bdcs-rec"),
                    bdcsRecHeight = parseInt(utils.getStyle(bdcsRec, "height")),
                    recDetailWidth = parseInt(bdcsUtils.getNest("useConfig.css['#bdcs-rec'].width")) - 145;
                    bdcsUtils.insertCSS(".bdcs-rec-title{float:left;} .bdcs-rec-detail{position:relative;left:30px;width:" + recDetailWidth + "px;}", !1, "aaa"),
                    "down" === useConfig.recType && bdcsUtils.insertCSS(".bdcs-rec-title{float:left;} .bdcs-rec-detail{float:left;position:relative;left:30px;width:" + recDetailWidth + "px;}", !1, "aaa")
                }
                3 == useConfig.recTitlePosition ? bdcsUtils.insertCSS(".bdcs-rec-title{display:none;}", !1, "aaa") : bdcsUtils.insertCSS(".bdcs-rec-title{display:block;}", !1, "aaa");
                var bdcsRecDetailItem = utils.getElementsByClassName("bdcs-rec-detail-item"),
                protocolRegex = /^https?:\/\//,
                frameFlag = 0;
                siteConfig.settings.useSetting ? siteConfig.settings.cseUrl ? siteConfig.resultUrl = siteConfig.settings.cseUrl: frameFlag = 1 : siteConfig.settings_2.useSliding ? siteConfig.settings_2.cseUrl ? siteConfig.resultUrl = siteConfig.settings_2.cseUrl: frameFlag = 1 : siteConfig.settings_3.usePopup ? siteConfig.settings_3.cseUrl ? siteConfig.resultUrl = siteConfig.settings_3.cseUrl: frameFlag = 1 : siteConfig.settings_4.useFloat ? siteConfig.settings_4.cseUrl ? siteConfig.resultUrl = siteConfig.settings_4.cseUrl: frameFlag = 1 : siteConfig.settings_5.useCustom && (siteConfig.settings_5.cseUrl ? siteConfig.resultUrl = siteConfig.settings_5.cseUrl: frameFlag = 1),
                1 === frameFlag && (siteConfig.resultUrl = siteConfig.resultUrl || "zhannei.baidu.com", -1 === siteConfig.resultUrl.indexOf("cse/search") && (siteConfig.resultUrl += "/" !== siteConfig.resultUrl.charAt(siteConfig.resultUrl.length - 1) ? "/cse/search": "cse/search")),
                protocolRegex.test(siteConfig.resultUrl) || (siteConfig.resultUrl = "http://" + siteConfig.resultUrl),
                siteConfig.resultTarget = "_blank";
                var frameElem = document.getElementById("bdcs-frame-box");
                frameElem && frameFlag && (siteConfig.resultUrl = "", siteConfig.resultTarget = "_self");
                var link = siteConfig.resultUrl + "?s=" + siteConfig.siteId + "&entry=1";
                siteConfig.isGbk && (link += "&ie=gbk"),
                siteConfig.channelList[0] && (link += "&cid=" + siteConfig.channelList[0]),
                siteConfig.settings.useSetting && siteConfig.settings.inurl && (link += "&inurl=" + siteConfig.settings.inurl);
                for (var i = 0; i < bdcsRecDetailItem.length; i++) {
                    var currentItem = bdcsRecDetailItem[i];
                    _addClass(currentItem, "bdcs-rec-detail-item" + i),
                    bdcsUtils.insertCSS("#bdcs-rec .bdcs-rec-three .bdcs-rec-detail-item" + i + "{background-color:" + getRandomColor(i) + "} #bdcs-rec .bdcs-rec-five .bdcs-rec-detail-item" + i + " a{color:" + getRandomColor(i) + ";font-size:" + getRandomSize(14, 24) + "px}", !1, "aaa"),
                    1 == getRandomWeight() && bdcsUtils.insertCSS("#bdcs-rec .bdcs-rec-five .bdcs-rec-detail-item" + i + " a{font-weight:bold}", !1, "aaa");
                    var bdcsRecDetailItemHref = document.createElement("a"),
                    str = eval("'" + recData.wordinfo[i] + "'");
                    if (bdcsRecDetailItemHref.setAttribute("href", link + "&q=" + encodeURIComponent(str)), bdcsRecDetailItemHref.setAttribute("target", siteConfig.resultTarget), "cross" === useConfig.recType && (6 == parseInt(useConfig.recTemple) || 7 == parseInt(useConfig.recTemple)) && recData.picinfo.length > 0) {
                        if (recData.picinfo[i]) {
                            bdcsRecDetailItemHref.innerHTML = '<span class="rec-span-img">' + decodeURIComponent(str) + "</span>";
                            var iframe = document.createElement("iframe");
                            iframe.src = (siteConfig.znsvUrl || urlConfig.urlRoot) + "static/customer-search/html/recImg.html?img=" + encodeURIComponent(recData.picinfo[i]) + "&w=75&alink=" + encodeURIComponent(link + "&q=" + encodeURIComponent(str)),
                            iframe.width = 75,
                            iframe.height = 75,
                            iframe.frameborder = "0",
                            iframe.setAttribute("frameborder", "0", 0),
                            iframe.scrolling = "no",
                            iframe.onload = function() {},
                            bdcsRecDetailItemHref.appendChild(iframe),
                            bdcsRecDetailItem[i].appendChild(bdcsRecDetailItemHref)
                        }
                    } else bdcsRecDetailItemHref.innerHTML = decodeURIComponent(str),
                    bdcsRecDetailItem[i].appendChild(bdcsRecDetailItemHref);
                    utils.addEvent(currentItem, "click",
                    function() {
                        var e, t = this.innerText;
                        log.send(urlConfig.log, e, {
                            query: encodeURIComponent(t),
                            log_type: "search-rec",
                            site_id: siteConfig.siteId,
                            plate_url: siteConfig.locationUrl || window.location.href
                        })
                    })
                }
                var pageLog;
                log.send(urlConfig.log, pageLog, {
                    totle_words: encodeURIComponent(totleWords.toString()),
                    rec_words: encodeURIComponent(recWords.toString()),
                    num: totleWords.length,
                    log_type: "search-rec-show",
                    site_id: siteConfig.siteId,
                    plate_url: siteConfig.locationUrl || window.location.href
                })
            }
        }
        function dispose() {
            var e = document.getElementById("bdcs-rec");
            e && e.firstChild && e.removeChild(e.firstChild),
            bdcsUtils.removeCSS()
        }
        function flCreate(recData, useConfig, useCss, recWords, totleWords) {
            if (recData && recData.wordinfo && recData.wordinfo.length > 0) {
                if (3 == parseInt(useConfig.recTemple) && 0 == recData.picinfo.length) return;
                dispose(),
                flDispose();
                var flRecElem = document.createElement("div"),
                bdcsElem = document.getElementById("bdcs");
                flRecElem.className = "bdcs-rec-float-container",
                flRecElem.id = "bdcsFlRec",
                document.body.appendChild(flRecElem),
                "" === useConfig.recTitleContent && (useConfig.recTitleContent = "为您推荐"),
                flRecElem.innerHTML = utils.tmpl(searchTpl, useConfig);
                var customCSS = utils.convertJSON2CSS(useCss);
                2 == parseInt(useConfig.recTemple) ? bdcsUtils.insertCSS(floatRecCSS1 + customCSS, !1, "aaa") : 3 == parseInt(useConfig.recTemple) ? bdcsUtils.insertCSS(floatRecCSSPic + customCSS, !1, "aaa") : bdcsUtils.insertCSS(floatRecCSS + customCSS, !1, "aaa"),
                siteConfig.settings_5.useCustom || (siteConfig.settings.useChannels && siteConfig.settings.customChannel.length > 0 && bdcsUtils.insertCSS(".bdcs-search-form-input{width:" + (parseInt(siteConfig.settings.css[".bdcs-search-form-input"].width) - parseInt(siteConfig.settings.css["div#default-searchbox  .default-channel-meun"].width)) + "px;}"), siteConfig.settings_2.useChannels && siteConfig.settings_2.customChannel.length > 0 && bdcsUtils.insertCSS("#sliding-box-item input{width:" + (parseInt(siteConfig.settings_2.slidingcss["#sliding-box-item input"].width) - parseInt(siteConfig.settings_2.slidingcss["div#sliding-searchbox  .sliding-channel-meun"].width)) + "px;}"), siteConfig.settings_3.useChannels && siteConfig.settings_3.customChannel.length > 0 && bdcsUtils.insertCSS("#popup-searchbox input{width:" + (parseInt(siteConfig.settings_3.popupcss["#popup-searchbox input"].width) - parseInt(siteConfig.settings_3.popupcss["div#popup-searchbox  .popup-channel-meun"].width)) + "px;}"), siteConfig.settings_4.useChannels && siteConfig.settings_4.customChannel.length > 0 && bdcsUtils.insertCSS("#float-search-form-input{width:" + (parseInt(siteConfig.settings_4.floatcss["#float-search-form-input"].width) - parseInt(siteConfig.settings_4.floatcss["div#float-searchbox  .float-channel-meun"].width)) + "px;}"));
                var flRecList = document.getElementById("bdcsFlRecList"),
                flRecIcon = utils.getElementsByClassName("bdcs-rec-float-icon")[0],
                flRecContent = utils.getElementsByClassName("bdcs-rec-float-content")[0],
                protocolRegex = /^https?:\/\//,
                frameFlag = 0;
                siteConfig.settings.useSetting ? siteConfig.settings.cseUrl ? siteConfig.resultUrl = siteConfig.settings.cseUrl: frameFlag = 1 : siteConfig.settings_2.useSliding ? siteConfig.settings_2.cseUrl ? siteConfig.resultUrl = siteConfig.settings_2.cseUrl: frameFlag = 1 : siteConfig.settings_3.usePopup ? siteConfig.settings_3.cseUrl ? siteConfig.resultUrl = siteConfig.settings_3.cseUrl: frameFlag = 1 : siteConfig.settings_4.useFloat ? siteConfig.settings_4.cseUrl ? siteConfig.resultUrl = siteConfig.settings_4.cseUrl: frameFlag = 1 : siteConfig.settings_5.useCustom && (siteConfig.settings_5.cseUrl ? siteConfig.resultUrl = siteConfig.settings_5.cseUrl: frameFlag = 1),
                1 === frameFlag && (siteConfig.resultUrl = siteConfig.resultUrl || "zhannei.baidu.com", -1 === siteConfig.resultUrl.indexOf("cse/search") && (siteConfig.resultUrl += "/" !== siteConfig.resultUrl.charAt(siteConfig.resultUrl.length - 1) ? "/cse/search": "cse/search")),
                protocolRegex.test(siteConfig.resultUrl) || (siteConfig.resultUrl = "http://" + siteConfig.resultUrl),
                siteConfig.resultTarget = "_blank";
                var frameElem = document.getElementById("bdcs-frame-box");
                frameElem && frameFlag && (siteConfig.resultUrl = "", siteConfig.resultTarget = "_self");
                var link = siteConfig.resultUrl + "?s=" + siteConfig.siteId + "&entry=1";
                siteConfig.isGbk && (link += "&ie=gbk"),
                siteConfig.channelList && siteConfig.channelList[0] && (link += "&cid=" + siteConfig.channelList[0]),
                siteConfig.settings.useSetting && siteConfig.settings.inurl && (link += "&inurl=" + siteConfig.settings.inurl);
                for (var i = 0; i < recData.wordinfo.length; i++) {
                    var flRecLink = document.createElement("a"),
                    str = eval("'" + recData.wordinfo[i] + "'");
                    flRecLink.target = siteConfig.resultTarget,
                    flRecLink.href = link + "&q=" + encodeURIComponent(str);
                    var flRecWord = document.createElement("li");
                    if (flRecWord.className = "bdcs-rec-float-item", 3 == parseInt(useConfig.recTemple)) {
                        if (recData.picinfo.length > 0 && recData.picinfo[i]) {
                            var html = '<span class="bdcs-rec-float-span">' + decodeURIComponent(str) + "</span>";
                            flRecWord.innerHTML = html;
                            var iframe = document.createElement("iframe");
                            iframe.src = (siteConfig.znsvUrl || urlConfig.urlRoot) + "static/customer-search/html/recImg.html?img=" + encodeURIComponent(recData.picinfo[i]) + "&w=40&alink=" + encodeURIComponent(link + "&q=" + encodeURIComponent(str)) + "&curl=" + encodeURIComponent(window.location.host),
                            iframe.width = 40,
                            iframe.height = 40,
                            iframe.frameborder = "0",
                            iframe.setAttribute("frameborder", "0", 0),
                            iframe.scrolling = "no",
                            flRecWord.appendChild(iframe)
                        }
                    } else flRecWord.innerHTML = decodeURIComponent(str);
                    flRecLink.appendChild(flRecWord),
                    flRecList.appendChild(flRecLink),
                    utils.addEvent(flRecWord, "click",
                    function() {
                        var e, t = this.innerText;
                        log.send(urlConfig.log, e, {
                            query: encodeURIComponent(t),
                            log_type: "search-rec-float",
                            site_id: siteConfig.siteId,
                            plate_url: siteConfig.locationUrl || window.location.href
                        })
                    })
                }
                siteConfig.settings_4.useFloat || (window.onscroll = function() {
                    var e = document.documentElement.scrollTop || document.body.scrollTop;
                    e >= document.body.scrollHeight - document.documentElement.clientHeight ? flRecContent && "none" !== flRecContent.style.display && (flRecContent.style.display = "none", document.getElementById("bdcsFlRec").style.width = "50px", _removeClass(flRecIcon, "bdcs-rec-float-icon-close"), _addClass(flRecIcon, "bdcs-rec-float-icon-open")) : flRecContent && "none" === flRecContent.style.display && (flRecContent.style.display = "block", document.getElementById("bdcsFlRec").style.width = "100%", _removeClass(flRecIcon, "bdcs-rec-float-icon-open"), _addClass(flRecIcon, "bdcs-rec-float-icon-close"))
                }),
                utils.addEvent(flRecIcon, "click",
                function() {
                    "none" !== flRecContent.style.display ? (flRecContent.style.display = "none", document.getElementById("bdcsFlRec").style.width = "50px", _removeClass(flRecIcon, "bdcs-rec-float-icon-close"), _addClass(flRecIcon, "bdcs-rec-float-icon-open")) : (flRecContent.style.display = "block", document.getElementById("bdcsFlRec").style.width = "100%", _removeClass(flRecIcon, "bdcs-rec-float-icon-open"), _addClass(flRecIcon, "bdcs-rec-float-icon-close"))
                });
                var pageLog;
                log.send(urlConfig.log, pageLog, {
                    totle_words: encodeURIComponent(totleWords.toString()),
                    rec_words: encodeURIComponent(recWords.toString()),
                    num: totleWords.length,
                    log_type: "search-rec-float-show",
                    site_id: siteConfig.siteId,
                    plate_url: siteConfig.locationUrl || window.location.href
                })
            } else flDispose()
        }
        function flDispose() {
            var e = document.getElementById("bdcsFlRec");
            e && document.body.removeChild(e),
            bdcsUtils.removeCSS()
        }
        return {
            create: create,
            dispose: dispose,
            flCreate: flCreate,
            flDispose: flDispose
        }
    } ();
    bdcsUtils.insertCSS("#bdcs-rec{display:none;}", !1, "aaa"),
    FlyJSONP.init();
    var searchRmdAll = function() {
        function create() {
            var useConfig = [],
            useCss = [],
            hotFineDetailType = "";
            siteConfig.settings.useRecommand ? (useConfig = siteConfig.settings, useCss = siteConfig.settings.css) : siteConfig.settings_2.useRecommand ? (useConfig = siteConfig.settings_2, useCss = siteConfig.settings_2.slidingcss) : siteConfig.settings_3.useRecommand ? (useConfig = siteConfig.settings_3, useCss = siteConfig.settings_3.popupcss) : siteConfig.settings_4.useRecommand ? (useConfig = siteConfig.settings_4, useCss = siteConfig.settings_4.floatcss) : siteConfig.settings_5.useRecommand && (useConfig = siteConfig.settings_5, useCss = siteConfig.settings_5.customcss),
            siteConfig.settings.useHot && siteConfig.settings.hotFineWordsEnable && (hotFineDetailType = siteConfig.settings.hotFineDetailType);
            var customForbiddenWords = useConfig.customForbiddenWords;
            if (useConfig.useRecommand) {
                if (2 !== useConfig.recShowType && "2" !== useConfig.recShowType && !document.getElementById("bdcs-rec")) return;
                FlyJSONP.get({
                    url: siteConfig.rec || urlConfig.rec,
                    parameters: {
                        uid: siteConfig.locationUrl || window.location.href,
                        sid: siteConfig.siteId,
                        plate_url: siteConfig.locationUrl || window.location.href
                    },
                    success: function(data) {
                        var recData = {},
                        totleWords = [],
                        recWords = [];
                        recData.wordinfo = [],
                        recData.picinfo = [];
                        var recLength = 0;
                        if (data && 0 == data.errno && (recData = data, recData && recData.wordinfo)) {
                            for (var returnInfo = [], returnImg = [], i = 0; i < recData.wordinfo.length; i++) {
                                var isForbinden = !1,
                                str = eval("'" + recData.wordinfo[i] + "'");
                                for (var j in customForbiddenWords) if (str == customForbiddenWords[j]) {
                                    isForbinden = !0;
                                    break
                                }
                                isForbinden || (returnInfo.push(str), recData.picinfo.length > 0 && returnImg.push(recData.picinfo[i]))
                            }
                            recData.wordinfo = returnInfo,
                            recData.picinfo = returnImg,
                            recWords = returnInfo,
                            recLength = recData.wordinfo.length
                        }
                        if (useConfig.useHot && 1 == useConfig.minShow && recLength < useConfig.minNum) {
                            if (useConfig.useCustomHotWords) for (var j = 0; j < useConfig.customHotWords.length; j++) {
                                var isForbindenWord = !1;
                                for (var k in customForbiddenWords) if (useConfig.customHotWords[j] == customForbiddenWords[k]) {
                                    isForbindenWord = !0;
                                    break
                                }
                                isForbindenWord || (recData.wordinfo.push(useConfig.customHotWords[j]), recData.picinfo.length > 0 && recData.picinfo.push(null), recLength++)
                            }
                            recLength < useConfig.recNums ? FlyJSONP.get({
                                url: siteConfig.hotUrl || urlConfig.hot,
                                parameters: {
                                    uid: siteConfig.fineHotUid || window.location.href,
                                    logid: siteConfig.logId,
                                    sid: siteConfig.siteId,
                                    rn: siteConfig.isDemo ? 15 : siteConfig.settings.hotNum,
                                    prod: hotFineDetailType
                                },
                                success: function(e) {
                                    if (e.data && e.data.length > 0) for (var t = 0; t < e.data.length; t++) {
                                        var i = !1;
                                        for (var n in customForbiddenWords) if (e.data[t].keyword == customForbiddenWords[n]) {
                                            i = !0;
                                            break
                                        }
                                        i || (recData.wordinfo.push(e.data[t].keyword), recData.picinfo.length > 0 && recData.picinfo.push(null))
                                    }
                                    totleWords = recData.wordinfo,
                                    2 === useConfig.recShowType || "2" === useConfig.recShowType ? searchRmd.flCreate(recData, useConfig, useCss, recWords, totleWords) : searchRmd.create(recData, useConfig, useCss, recWords, totleWords)
                                }
                            }) : (totleWords = recData.wordinfo, 2 === useConfig.recShowType || "2" === useConfig.recShowType ? searchRmd.flCreate(recData, useConfig, useCss, recWords, totleWords) : searchRmd.create(recData, useConfig, useCss, recWords, totleWords))
                        } else totleWords = recData.wordinfo,
                        2 === useConfig.recShowType || "2" === useConfig.recShowType ? searchRmd.flCreate(recData, useConfig, useCss, recWords, totleWords) : searchRmd.create(recData, useConfig, useCss, recWords, totleWords)
                    }
                })
            }
        }
        return {
            create: create
        }
    } ();
    "_bdcs" in window && window._bdcs.siteConfig && siteConfig.isDemo && (window._bdcs = {
        siteConfig: siteConfig,
        content: {
            create: content.create,
            dispose: content.dispose,
            rec: searchRmdAll.create,
            getFineHot: content.getFineHot
        }
    }),
    utils.DOMReady(function() {
        searchRmdAll.create()
    });
    var Card = function() {
        function e(t) {
            var i = document.getElementById("bdcsWnCard"),
            o = parseInt(utils.getStyle(i, "left"), 10);
            if (0 > o) window.bdcsMncardReady = 0,
            i.style.left = o + 4 + "px",
            window.setTimeout(function() {
                e(t)
            },
            1);
            else {
                window.bdcsMncardReady = 1,
                n = 1,
                s = 0;
                var r;
                log.send(urlConfig.log, r, {
                    query: utils.getElementsByClassName("bcse-card-query")[0].getAttribute("title"),
                    log_type: "wn-card-show",
                    site_id: siteConfig.siteId,
                    type: t,
                    plate_url: siteConfig.locationUrl || window.location.href
                })
            }
        }
        function t() {
            var e = document.getElementById("bdcsWnCard"),
            i = parseInt(utils.getStyle(e, "left"), 10);
            i > -328 ? (window.bdcsMncardReady = 0, e.style.left = i - 4 + "px", window.setTimeout(function() {
                t()
            },
            1)) : (n = 0, s = 1, e.style.display = "none", window.bdcsMncardReady = 1)
        }
        function i(e) {
            var t = {
                data: ""
            };
            this.options = utils.extend(t, e || {}),
            this.render(this.options.data, this.options.qType)
        }
        var n = 1,
        s = 1;
        return i.prototype.render = function(e, t) {
            bdcsUtils.insertCSS(wncardCSS);
            var i = document.createElement("div");
            i.className = "bcse-wn-card",
            i.id = "bdcsWnCard",
            document.body.appendChild(i),
            i.innerHTML = wncardTpl;
            var n = utils.getElementsByClassName("bcse-card-query")[0];
            n.innerHTML = e.query,
            n.setAttribute("title", e.query);
            var s = utils.getElementsByClassName("bcse-card-first-link")[0];
            s.innerHTML = e.results[0].title.replace(/<em>/g, "").replace(/<\/em>/g, ""),
            s.setAttribute("title", e.results[0].title.replace(/<em>/g, "").replace(/<\/em>/g, "")),
            s.setAttribute("href", e.results[0].url);
            var o = utils.getElementsByClassName("bcse-card-next-link")[0];
            o.innerHTML = e.results[1].title.replace(/<em>/g, "").replace(/<\/em>/g, ""),
            o.setAttribute("title", e.results[1].title.replace(/<em>/g, "").replace(/<\/em>/g, "")),
            o.setAttribute("href", e.results[1].url);
            var r = utils.getElementsByClassName("bcse-card-result-abstract")[0];
            r.innerHTML = e.results[0]["abstract"].replace(/<em>/g, "").replace(/<\/em>/g, "");
            var a = document.getElementById("bdcsCardFrame");
            e.results[0].img ? a.setAttribute("src", "http://znsv.baidu.com/static/customer-search/html/wncard.html?a=" + e.results[0].url + "&q=" + utils.getElementsByClassName("bcse-card-query")[0].getAttribute("title") + "&s=" + siteConfig.siteId + "&p=" + window.location.href + "&t=" + t + "#" + e.results[0].img) : a.style.display = "none",
            window.bdcsMncardMtd = 1,
            window.bdcsMncardReady = 1;
            var l = document.documentElement.scrollTop || document.body.scrollTop,
            c = Math.max(document.documentElement.scrollHeight, document.body.clientHeight);
            l >= (c - document.documentElement.clientHeight) / 2 && 1 === window.bdcsMncardMtd && (document.getElementById("bdcsWnCard").style.display = "block", document.getElementById("bdcsWnCard").style.left = 0),
            this.bind(t)
        },
        i.prototype.bind = function(i) {
            utils.addEvent(utils.getElementsByClassName("bcse-card-close")[0], "click",
            function() {
                document.getElementById("bdcsWnCard").style.display = "none",
                window.bdcsMncardMtd = 0
            }),
            window.onscroll = function() {
                var o = document.documentElement.scrollTop || document.body.scrollTop,
                r = Math.max(document.documentElement.scrollHeight, document.body.clientHeight),
                a = document.getElementById("bdcsWnCard");
                o >= (r - document.documentElement.clientHeight) / 2 && 1 === window.bdcsMncardMtd && 1 === window.bdcsMncardReady && 1 === s ? (a.style.display = "block", e(i)) : o < (r - document.documentElement.clientHeight) / 2 && 1 === window.bdcsMncardReady && 1 === n && t()
            };
            for (var o = 0; o < document.getElementById("bdcsWnCard").getElementsByTagName("a").length; o++) utils.addEvent(document.getElementById("bdcsWnCard").getElementsByTagName("a")[o], "click",
            function() {
                var e, t = this.getAttribute("href");
                log.send(urlConfig.log, e, {
                    query: utils.getElementsByClassName("bcse-card-query")[0].getAttribute("title"),
                    url: t,
                    log_type: "wn-card-click",
                    site_id: siteConfig.siteId,
                    plate_url: siteConfig.locationUrl || window.location.href,
                    type: i,
                    cpos: this.getAttribute("cpos") ? this.getAttribute("cpos") : 3
                })
            })
        },
        i
    } (); !
    function() {
        function e() {
            return /AppleWebKit.*Mobile/i.test(navigator.userAgent) || /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent) ? 1 : 0
        }
        var t, i = ["kujiale.com", "xhton.com", "9939.com", "xin.52pk.com", "dnf.52pk.com", "xwh.cn", "shangxueba.com", "benshouji.com", "yaoqi.cc", "jiaodong.net", "jingyan.39.net", "www.nxing.cn", "www.100xhs.com", "www.fjndwb.com", "www.hebnews.cn", "www.sqtv.net", "cd.bendibao.com", "www.7y7.com", "jbk.39.net", "ask.39.net"],
        n = ["http://www.kujiale.com/", "http://www.xhton.com/", "http://www.9939.com/", "http://www.xwh.cn/", "http://www.shangxueba.com/", "http://www.benshouji.com/", "http://www.yaoqi.cc/", "http://jingyan.39.net/", "http://www.jiaodong.net/", "http://www.nxing.cn/", "http://www.100xhs.com/", "http://www.fjndwb.com/", "http://www.hebnews.cn/", "http://www.sqtv.net/", "http://cd.bendibao.com/", "http://www.7y7.com/", "http://jbk.39.net/", "http://ask.39.net/"],
        s = 0,
        o = {
            s: siteConfig.siteId,
            locUrl: window.location.href
        },
        r = document.referrer || siteConfig.cardRefer;
        if (r) {
            var a, l, c = {};
            if (decodeURIComponent(r) && (a = decodeURIComponent(r)), l = a.split("?"), l[1]) for (var d = l[1].split("&"), u = 0; u < d.length; u++) {
                var g = d[u].split("=")[0],
                p = d[u].split("=")[1];
                g && p && (c[g] = p)
            }
            var f = /www\.baidu\.com/,
            m = /cse\/search/;
            f.test(a) && c.eqid ? (o.eqid = c.eqid, t = 1) : m.test(a) && c.q && (o.q = c.q, t = 2)
        }
        if (!o.q) {
            for (var h = document.getElementsByTagName("meta"), b = "", C = [], v = [], u = 0; u < h.length; u++) h[u].getAttribute("name") && h[u].getAttribute("content") && "keywords" === h[u].getAttribute("name").toLowerCase() && (C = h[u].getAttribute("content").split(/,| |、|;|，/));
            if (C.length > 0) {
                for (var u = 0; u < C.length; u++)"" !== C[u] && v.push(C[u]);
                v.length > 0 && (b = v[0], 1 !== t && (t = 3))
            }
            "" === b && document.title && (b = document.title, 1 !== t && (t = 4)),
            "" !== b && (o.q = b)
        }
        for (var y = 0; y < n.length; y++) window.location.href === n[y] && (s = 1);
        for (var u = 0; u < i.length; u++) window.location.href.indexOf(i[u]) >= 0 && 0 === s && 0 === e() && !document.getElementById("bdcsWnCard") && (o.q || o.eqid) && (FlyJSONP.init(), FlyJSONP.get({
            url: siteConfig.wncardUrl || urlConfig.card,
            parameters: o,
            success: function(e) {
                e && 0 === e.error && e.results.length > 1 && new Card({
                    data: e,
                    qType: t
                })
            }
        }))
    } ();
})();