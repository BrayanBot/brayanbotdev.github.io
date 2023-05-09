"use strict";(self.webpackChunkbrayanbot_dev=self.webpackChunkbrayanbot_dev||[]).push([[2601],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return y}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),g=r,y=c["".concat(s,".").concat(g)]||c[g]||u[g]||a;return n?o.createElement(y,i(i({ref:t},p),{},{components:n})):o.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9077:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var o=n(7462),r=n(3366),a=(n(7294),n(4137)),i=["components"],l={sidebar_position:4},s="Pterodactyl Hosting",d={unversionedId:"Setup/Hosting/pterodactyl",id:"version-1.x/Setup/Hosting/pterodactyl",title:"Pterodactyl Hosting",description:"---",source:"@site/versioned_docs/version-1.x/Setup/Hosting/pterodactyl.md",sourceDirName:"Setup/Hosting",slug:"/Setup/Hosting/pterodactyl",permalink:"/docs/Setup/Hosting/pterodactyl",draft:!1,editUrl:"https://github.com/brayanbot/brayanbot.dev/edit/dev/versioned_docs/version-1.x/Setup/Hosting/pterodactyl.md",tags:[],version:"1.x",sidebarPosition:4,frontMatter:{sidebar_position:4}},p={},c=[{value:"Installing BrayanBot on Pterodactyl",id:"installing-brayanbot-on-pterodactyl",level:2},{value:"Self-Hosted Pterodactyl",id:"self-hosted-pterodactyl",level:3},{value:"Using a Provider (Hosting Company)",id:"using-a-provider-hosting-company",level:3},{value:"Installation",id:"installation",level:4},{value:"Getting Help",id:"getting-help",level:2}],u={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pterodactyl-hosting"},"Pterodactyl Hosting"),(0,a.kt)("hr",null),(0,a.kt)("admonition",{title:"Unsupported!",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Pterodactyl is currently ",(0,a.kt)("strong",{parentName:"p"},"unsupported")," and the instructions below are left only for archiving purposes. Please join our ",(0,a.kt)("a",{parentName:"p",href:"/discord"},"Discord Server")," if you would like to request support with installing BrayanBot on Pterodactyl. The official Pterodactyl Egg is ",(0,a.kt)("strong",{parentName:"p"},"OUTDATED"),".")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pterodactyl.io/"},"Pterodactyl Panel")," is a server management panel that is used by many hosting providers.\nIf you are using a Hosting Provider, you should take a look at our Using a Hosting Provider below. This only covers instructions for ",(0,a.kt)("strong",{parentName:"p"},"self-hosted")," Pterodactyl instances."),(0,a.kt)("h2",{id:"installing-brayanbot-on-pterodactyl"},"Installing BrayanBot on Pterodactyl"),(0,a.kt)("h3",{id:"self-hosted-pterodactyl"},"Self-Hosted Pterodactyl"),(0,a.kt)("p",null,"Start by downloading our ",(0,a.kt)("a",{parentName:"p",href:"/"},"Official Pterodactyl Egg")," and create a server on your Pterodactyl Panel using the Pterodactyl Egg. (Video Instructions Below)"),(0,a.kt)("figure",{class:"mdx-video",markdown:!0},(0,a.kt)("div",{align:"center",class:"mdx-video__inner"},(0,a.kt)("iframe",{src:"https://i.zorino.in/ZLXmsedge_Q4FbuWKa1a.mp4",allowfullscreen:!0}))),(0,a.kt)("p",null,"You may also install additional node modules directly from ",(0,a.kt)("strong",{parentName:"p"},"Settings > Variables > Node Modules")," section. Simply add the names of the modules you'd like to install and reboot."),(0,a.kt)("figure",{class:"mdx-video",markdown:!0},(0,a.kt)("div",{align:"center",class:"mdx-video__inner"},(0,a.kt)("iframe",{src:"https://i.zorino.in/ESJmsedge_uhfR8DiFF6.mp4",allowfullscreen:!0}))),(0,a.kt)("p",null,"The Pterodactyl Egg allows you to customize your bot's settings directly from the ",(0,a.kt)("strong",{parentName:"p"},"Variables")," section under ",(0,a.kt)("strong",{parentName:"p"},"Settings"),"."),(0,a.kt)("figure",null,(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://i.zorino.in/KGTmsedge_g5opAI43OX.png"}))),(0,a.kt)("h3",{id:"using-a-provider-hosting-company"},"Using a Provider (Hosting Company)"),(0,a.kt)("p",null,"Using a Provider is ",(0,a.kt)("em",{parentName:"p"},"not recommended")," due to the nature of most hosting providers and the scope of control you will have on your machine. However if you really would like to use a hosting provider (probably because it's cheaper) make sure that their ",(0,a.kt)("strong",{parentName:"p"},"NodeJS")," version is ",(0,a.kt)("strong",{parentName:"p"},"16.6.0")," or higher."),(0,a.kt)("p",null,"We recommend ",(0,a.kt)("a",{parentName:"p",href:"https://revivenode.com/discord.html"},"Revivenode")," to host BrayanBot."),(0,a.kt)("h4",{id:"installation"},"Installation"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Using a NodeJS Egg"),"\nIf you are not allowed to upload your own egg but to choose from a batch of NodeJS eggs; you may initialize a server using a NodeJS v16 egg and then upload the files. Simply choose the correct NodeJS version, upload the .zip file to the panel and then extract the zip."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Using Official Pterodactyl Egg"),"\nIf you are allowed to uplaod custom Pterodactyl Eggs, then you can use our ",(0,a.kt)("a",{parentName:"p",href:"/"},"Official Pterodactyl Egg")," which will download the bot as well as its dependencies."),(0,a.kt)("p",null,"If you have customized the source code of the bot or would like to use the ",(0,a.kt)("a",{parentName:"p",href:"/"},"unstable Dev Branch")," then you are still advised to go with a NodeJS egg."),(0,a.kt)("h2",{id:"getting-help"},"Getting Help"),(0,a.kt)("admonition",{title:"\ud83d\udca1 Ran into a problem?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Join our ",(0,a.kt)("a",{parentName:"p",href:"https://brayanbot.dev/discord"},"support server")," and open a ticket.")))}g.isMDXComponent=!0}}]);