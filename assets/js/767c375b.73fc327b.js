"use strict";(self.webpackChunkbrayanbot_dev=self.webpackChunkbrayanbot_dev||[]).push([[1956],{4137:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return f}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return t?i.createElement(f,r(r({ref:n},d),{},{components:t})):i.createElement(f,r({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3050:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=t(7462),a=t(3366),o=(t(7294),t(4137)),r=["components"],l={sidebar_position:1,description:"Documentation for Advanced Verification By Zorino#1110"},s="Advanced Verification (By Zorino#1110)",c={unversionedId:"Addons/advanced-verification",id:"Addons/advanced-verification",title:"Advanced Verification (By Zorino#1110)",description:"Documentation for Advanced Verification By Zorino#1110",source:"@site/docs/Addons/advanced-verification.md",sourceDirName:"Addons",slug:"/Addons/advanced-verification",permalink:"/docs/2.x/Addons/advanced-verification",draft:!1,editUrl:"https://github.com/brayanbot/brayanbot.dev/edit/dev/docs/Addons/advanced-verification.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Documentation for Advanced Verification By Zorino#1110"},sidebar:"docs",previous:{title:"Language File",permalink:"/docs/2.x/Management/lang"},next:{title:"Contibuting",permalink:"/docs/2.x/Developers/contributing"}},d={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Verification Methods",id:"verification-methods",level:2},{value:"Chat",id:"chat",level:3},{value:"Embed",id:"embed",level:3},{value:"Manual",id:"manual",level:3},{value:"TextCaptcha",id:"textcaptcha",level:3},{value:"Website (Discord OAuth2)",id:"website-discord-oauth2",level:3},{value:"Configuration | config.yml",id:"configuration--configyml",level:2},{value:"Configuration | lang.yml",id:"configuration--langyml",level:2},{value:"Configuration | commands.yml",id:"configuration--commandsyml",level:2}],u={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"advanced-verification-by-zorino1110"},"Advanced Verification (By Zorino#1110)"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Advanced Verify is a ",(0,o.kt)("a",{parentName:"p",href:"https://neushore.dev/docs/Developers/Addons/First-Party"},"First-Party")," addon with keeping bots or similar malicious applications away from your server. "),(0,o.kt)("p",null,"It provides 5 separate methods to verification:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Chat"),(0,o.kt)("li",{parentName:"ul"},"Embed"),(0,o.kt)("li",{parentName:"ul"},"Manual"),(0,o.kt)("li",{parentName:"ul"},"TextCaptcha"),(0,o.kt)("li",{parentName:"ul"},"Website")),(0,o.kt)("h2",{id:"verification-methods"},"Verification Methods"),(0,o.kt)("p",null,"The available verification methods and their descriptions are as follows."),(0,o.kt)("h3",{id:"chat"},"Chat"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a verification channel if doesn't exist already."),(0,o.kt)("li",{parentName:"ol"},"Send a ",(0,o.kt)("inlineCode",{parentName:"li"},"How to verify yourself?")," message if needed."),(0,o.kt)("li",{parentName:"ol"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"Verification.Chat.Channel")," to verification channel's name or id."),(0,o.kt)("li",{parentName:"ol"},"Configure ",(0,o.kt)("inlineCode",{parentName:"li"},"RolesToGive"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"RolesToTake")," & ",(0,o.kt)("inlineCode",{parentName:"li"},"Phrases")," accordingly.")),(0,o.kt)("h3",{id:"embed"},"Embed"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a verification channel if doesn't exist already."),(0,o.kt)("li",{parentName:"ol"},"Run command ",(0,o.kt)("inlineCode",{parentName:"li"},"send-verification-embed")," to send verification embed in verification channel."),(0,o.kt)("li",{parentName:"ol"},"Configure ",(0,o.kt)("inlineCode",{parentName:"li"},"RolesToGive")," & ",(0,o.kt)("inlineCode",{parentName:"li"},"RolesToTake")," accordingly.")),(0,o.kt)("h3",{id:"manual"},"Manual"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Required User's DM to be open"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a verification channel if doesn't exist already."),(0,o.kt)("li",{parentName:"ol"},"Create a verification-request channel if doesn't exist already."),(0,o.kt)("li",{parentName:"ol"},"Run command ",(0,o.kt)("inlineCode",{parentName:"li"},"send-verification-embed")," to send verification embed in verification channel."),(0,o.kt)("li",{parentName:"ol"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"Verification.Manual.RequestsChannel")," to verification-request channel's name or id."),(0,o.kt)("li",{parentName:"ol"},"Configure ",(0,o.kt)("inlineCode",{parentName:"li"},"RolesToGive")," & ",(0,o.kt)("inlineCode",{parentName:"li"},"RolesToTake")," accordingly.")),(0,o.kt)("h3",{id:"textcaptcha"},"TextCaptcha"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Requires User's DM to be open"),"\n",(0,o.kt)("strong",{parentName:"p"},"Requires a Port"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a verification channel if doesn't exist already."),(0,o.kt)("li",{parentName:"ol"},"Run command ",(0,o.kt)("inlineCode",{parentName:"li"},"send-verification-embed")," to send verification embed in verification channel."),(0,o.kt)("li",{parentName:"ol"},"Configure ",(0,o.kt)("inlineCode",{parentName:"li"},"RolesToGive")," & ",(0,o.kt)("inlineCode",{parentName:"li"},"RolesToTake")," accordingly.")),(0,o.kt)("h3",{id:"website-discord-oauth2"},"Website (Discord OAuth2)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/developers/applications"},"Discord Developer Application"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select your Proxima's Application.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"OAuth2")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"General")," tab "))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{parentName:"p",src:"https://i.zorino.in/AYUmsedge_txIB1PhHNE.png",alt:"IMG"}))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy your ",(0,o.kt)("inlineCode",{parentName:"p"},"Client ID")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"Verification.Website.ClientID")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"Client ID")," you copied."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Reset & Copy your ",(0,o.kt)("inlineCode",{parentName:"p"},"Client Secret")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"Verification.Website.ClientSecret")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"Client Secret")," you copied. "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Redirect")," & add your ip or domain(with port if available) with ",(0,o.kt)("inlineCode",{parentName:"p"},"/oauth2")," as endpoint then Save your changes."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"Verification.Website.RedirectURL")," to same URL entred above.")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{parentName:"p",src:"https://i.zorino.in/BGFmsedge_Y5a65r4x0r.png",alt:"IMG"}))),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"OAuth2")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"URL Generator")," tab")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{parentName:"p",src:"https://i.zorino.in/HUUmsedge_pPiHEZbqAX.png",alt:"IMG"})," ")),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"identify")," as scopes & Set ",(0,o.kt)("inlineCode",{parentName:"li"},"Redirect URL")," you URL you added before")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{parentName:"p",src:"https://i.zorino.in/PCDmsedge_e0hmKxikXg.png",alt:"IMG"}))),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy ",(0,o.kt)("inlineCode",{parentName:"p"},"Generated URL")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"Verification.Website.GeneratedURL")," to URL you copied."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a verification channel if doesn't exist already.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run command ",(0,o.kt)("inlineCode",{parentName:"p"},"send-verification-embed")," to send verification embed in verification channel.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure ",(0,o.kt)("inlineCode",{parentName:"p"},"RolesToGive")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"RolesToTake")," accordingly."))),(0,o.kt)("h2",{id:"configuration--configyml"},"Configuration | config.yml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Chat | Embed | Manual | TextCaptcha | Website\nType: Chat\nVerification:\n  Chat:\n    # Channel to listen message in\n    Channel: verification\n    # Message Phrases to listen in channel\n    Phrases:\n      - I agree to the terms and conditions\n      - I agree to the TOS\n      - I agree\n    # Roles to give to user when verified\n    RolesToGive:\n      - Member\n    # Roles to take to user when verified\n    RolesToTake:\n      - DJ\n  Embed:\n    # Roles to give to user when verified\n    RolesToGive:\n      - Member\n    # Roles to take to user when verified\n    RolesToTake:\n      - DJ\n  Manual:\n    # Roles to give to user when verified\n    RolesToGive:\n      - Member\n    # Roles to take to user when verified\n    RolesToTake:\n      - DJ\n    RequestsChannel: verification\n  TextCaptcha:\n    # Roles to give to user when verified\n    RolesToGive:\n      - Member\n    # Roles to take to user when verified\n    RolesToTake:\n      - DJ\n  Website:\n    # https://neushore.dev/docs/First-Party-Addons/Advanced-Verification#website-discord-oauth2\n    ClientID: APPLICATION-CLIENT-ID\n    ClientSecret: APPLICATION-CLIENT-SECRET\n    RedirectURL: APPLICATION-CLIENT-OAUTH2-REDIRECT-URL\n    GeneratedURL: APPLICATION-CLIENT-OAUTH2-GENERATEDURL\n    # Roles to give to user when verified\n    RolesToGive:\n      - Member\n    # Roles to take to user when verified\n    RolesToTake:\n      - DJ\n    # Contact Support Team for Guide\n\n")),(0,o.kt)("h2",{id:"configuration--langyml"},"Configuration | lang.yml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'VerificationEmbed:\n  Embeds:\n    - Title: Server Verification\n      Description: "> Please verify your server by clicking the button below."\n      FooterIcon: "{bot-pfp}"\n      Footer: "{bot-tag}"\n  Components:\n    "1":\n      - Type: Button\n        CustomID: advanced_verification_verify\n        Style: Blurple\n        Label: Verify\nTypeChat:\n  InvalidPhrase:\n    Embeds:\n      - Title: Verifier \u2022 Invalid Phrase\n        Description: "> The phrase you entered is invalid. Please try again."\n        FooterIcon: "{user-pfp}"\n        Footer: "{user-tag}"\n        Timestamp: true\nTypeEmbed:\n  Verified:\n    Embeds:\n      - Title: Server Verification \u2022 Verified\n        Description: "> Your have been verified."\n        FooterIcon: "{user-pfp}"\n        Footer: "{user-tag}"\n        Timestamp: true\nTypeManual:\n  Questions:\n    - What is your name?\n    - What is your age?\n    - What is your favorite color?\n  Request:\n    Embeds:\n      - Title: Server Verification \u2022 Request\n        Description: "{answers}"\n        FooterIcon: "{user-pfp}"\n        Footer: "{user-tag}"\n        Timestamp: true\n    Components:\n      "1":\n        - Type: Button\n          Style: Green\n          Label: Accept\n          CustomID: advanced_verification_accept\n        - Type: Button\n          Style: Red\n          Label: Deny\n          CustomID: advanced_verification_deny\n  RequestSent:\n    Embeds:\n      - Title: Server Verification \u2022 Request Sent\n        Description: "> Your request has been sent. You\'ll get a response in DM from the\n          bot once accepted."\n        FooterIcon: "{user-pfp}"\n        Footer: "{user-tag}"\n        Timestamp: true\n  Verified:\n    Embeds:\n      - Title: Server Verification \u2022 Verified\n        Description: "> Your verification request has been accepted."\n        FooterIcon: "{user-pfp}"\n        Footer: "{user-tag}"\n        Timestamp: true\n  Verified2:\n    Embeds:\n      - Title: Server Verification \u2022 Verified\n        Description: "> {target-mention} have been verified."\n        FooterIcon: "{user-pfp}"\n        Footer: "{user-tag}"\n        Timestamp: true\n  Denied:\n    Embeds:\n      - Title: Server Verification \u2022 Verified\n        Description: "> Your request was denied."\n        FooterIcon: "{user-pfp}"\n        Footer: "{user-tag}"\n        Timestamp: true\n  Denied2:\n    Embeds:\n      - Title: Server Verification \u2022 Denied\n        Description: "> {target-mention}\'s Request has been denied."\n        FooterIcon: "{user-pfp}"\n        Footer: "{user-tag}"\n        Timestamp: true\nTypeTextCaptcha:\n  VerificationCaptcha:\n    # Content: {code}\n    Embeds:\n      - Title: Server Verification \u2022 Verification Captcha\n        Description: "> Please enter the captcha below."\n        FooterIcon: "{user-pfp}"\n        Footer: "{user-tag}"\n        Timestamp: true\n  Verified:\n    Embeds:\n      - Title: Server Verification \u2022 Verified\n        Description: "> Your have been verified."\n        FooterIcon: "{user-pfp}"\n        Footer: "{user-tag}"\n        Timestamp: true\n  InvalidCode:\n    Embeds:\n      - Title: Server Verification \u2022 Invalid Code\n        Description: "> The code you entered is invalid. Please try again."\n        FooterIcon: "{user-pfp}"\n        Footer: "{user-tag}"\n        Timestamp: true\nTypeWebsite:\n  VerificationWebsite:\n    Private: true\n    Embeds:\n      - Title: Server Verification \u2022 Verification\n        Description: "> Please verify your server by clicking the button below."\n        FooterIcon: "{bot-pfp}"\n        Footer: "{bot-tag}"\n        Timestamp: true\n    Components:\n      "1":\n        - Type: Button\n          Label: Verify\n          Style: Link\n          Link: "{redirect}"\nQuestions:\n  Embeds:\n    - AuthorIcon: "{user-pfp}"\n      Author: "[{current-question}/{total-questions}] Answer the following"\n      Description: "> {question}"\n      Timestamp: true\nErrors:\n  ErrorOccured: An error occured. Please contact an administrator.\n  ErrorOccuredRole: An error occured while trying to give or take roles. Please\n    contact an administrator.\n  UnableToDM: Unable to DM you. Please open your Direct Messages and try again.\n  Timesup: Times up, you didn\'t respond in 30 seconds time. Please try again.\n  InvalidRequest: Invalid Request Message.\n  InvalidUser: User wasn\'t found in the guild.\n  Website:\n    ErrorOccured: <h1><center>Error Occured, Please contact an adminstrator.</center></h1>\n    GuildNotFound: <h1><center>Guild Not Found. Please contact an adminstrator.</center></h1>\n    UserNotFound: <h1><center>We weren\'t able to find you in server. Please contact\n      an adminstrator if this is a mistake.</center></h1>\nError:\n  Embeds:\n    - Title: Verifier \u2022 Unable to execute action\n      Description: "> {msg}"\n      FooterIcon: "{user-pfp}"\n      Footer: "{user-tag}"\n      Color: "#ff0800"\n      Timestamp: true\n')),(0,o.kt)("h2",{id:"configuration--commandsyml"},"Configuration | commands.yml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"Send-Verification-Embed:\n  Name: send-verification-embed\n  Description: Create polls on your server!\n  Usage: send-verification-embed\n  Aliases: []\n  Permission:\n    - Developer\n  SlashCommand:\n    # Slash Command wont work even if enabled.\n    Enabled: false\n")))}m.isMDXComponent=!0}}]);