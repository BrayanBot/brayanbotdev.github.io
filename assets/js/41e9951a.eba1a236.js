"use strict";(self.webpackChunkbrayanbot_dev=self.webpackChunkbrayanbot_dev||[]).push([[5368],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(b,l(l({ref:t},p),{},{components:n})):a.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(4334),o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},4259:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(7294),o=n(4334),l=n(1048),i=n(3609),s=n(1943),u=n(2957),p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n,l=e.lazy,m=e.block,d=e.defaultValue,b=e.values,f=e.groupId,y=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.l)(h,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,B=w.setTabGroupChoices,T=(0,r.useState)(k),x=T[0],O=T[1],E=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var S=N[f];null!=S&&S!==x&&h.some((function(e){return e.value===S}))&&O(S)}var P=function(e){var t=e.currentTarget,n=E.indexOf(t),a=h[n].value;a!==x&&(I(t),O(a),null!=f&&B(f,String(a)))},C=function(e){var t,n=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":var a,r=E.indexOf(e.currentTarget)+1;n=null!=(a=E[r])?a:E[0];break;case"ArrowLeft":var o,l=E.indexOf(e.currentTarget)-1;n=null!=(o=E[l])?o:E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},y)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return E.push(e)},onKeyDown:C,onClick:P},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(g.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},8667:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),l=n(4259),i=n(425),s=["components"],u={sidebar_position:2},p="Hosting on MacOS",c={unversionedId:"Setup/Hosting/mac-os",id:"version-1.x/Setup/Hosting/mac-os",title:"Hosting on MacOS",description:"---",source:"@site/versioned_docs/version-1.x/Setup/Hosting/mac-os.md",sourceDirName:"Setup/Hosting",slug:"/Setup/Hosting/mac-os",permalink:"/docs/Setup/Hosting/mac-os",draft:!1,editUrl:"https://github.com/brayanbot/brayanbot.dev/edit/dev/versioned_docs/version-1.x/Setup/Hosting/mac-os.md",tags:[],version:"1.x",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Hosting on Linux",permalink:"/docs/Setup/Hosting/linux"},next:{title:"Hosting on Windows",permalink:"/docs/Setup/Hosting/windows"}},m={},d=[{value:"Installation",id:"installation",level:2},{value:"1. Install Depdenencies",id:"1-install-depdenencies",level:2},{value:"2. Download BrayanBot",id:"2-download-brayanbot",level:3},{value:"3. Unzip BrayanBot",id:"3-unzip-brayanbot",level:3},{value:"4. Copy the example config to the main <code>config.yml</code>",id:"4-copy-the-example-config-to-the-main-configyml",level:3},{value:"5. Install node modules &amp; Start BrayanBot",id:"5-install-node-modules--start-brayanbot",level:3},{value:"Power Controls",id:"power-controls",level:2},{value:"Using PM2 Process Manager",id:"using-pm2-process-manager",level:3},{value:"Getting Help",id:"getting-help",level:2}],b={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hosting-on-macos"},"Hosting on MacOS"),(0,o.kt)("hr",null),(0,o.kt)("admonition",{title:"Note",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This page assumes that you have already completed the ",(0,o.kt)("a",{parentName:"p",href:"/docs/Setup/pre-installation"},"Pre-Installation Steps")," If you haven not yet completed the pre-installation steps, please go back and complete them because the bot cannot function without them.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("h2",{id:"1-install-depdenencies"},"1. Install Depdenencies"),(0,o.kt)("p",null,"To install certain dependencies (like ",(0,o.kt)("strong",{parentName:"p"},"wget")," or the latest version of ",(0,o.kt)("strong",{parentName:"p"},"curl"),") you will need ",(0,o.kt)("inlineCode",{parentName:"p"},"brew")," installed on your machine."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install brew")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install necessary packages")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install wget nano curl jq awk\n")),(0,o.kt)("h3",{id:"2-download-brayanbot"},"2. Download BrayanBot"),(0,o.kt)("p",null,"The universal bash script below can be used the download the latest version of BrayanBot from Github Releases. It requires ",(0,o.kt)("strong",{parentName:"p"},"wget"),", ",(0,o.kt)("strong",{parentName:"p"},"curl"),", ",(0,o.kt)("strong",{parentName:"p"},"jq")," , and ",(0,o.kt)("strong",{parentName:"p"},"gawk")," to be installed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\nLATEST=$(curl https://api.github.com/repos/BrayanBot/BrayanBot/releases/latest -s | jq .name -r | awk \'{ print $2 }\')\nURL="https://github.com/BrayanBot/BrayanBot/releases/download/$LATEST/BrayanBot-$LATEST.zip"\n\nwget "$URL"\n')),(0,o.kt)("h3",{id:"3-unzip-brayanbot"},"3. Unzip BrayanBot"),(0,o.kt)("p",null,"After downloading the zip file, we need to unzip it and move into the BrayanBot directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"unzip BrayanBot-*.zip -d ./BrayanBot && cd BrayanBot\n")),(0,o.kt)("h3",{id:"4-copy-the-example-config-to-the-main-configyml"},"4. Copy the example config to the main ",(0,o.kt)("inlineCode",{parentName:"h3"},"config.yml")),(0,o.kt)("p",null,"BrayanBot needs config.yml to be in the BrayanBot directory. We will copy example.config.yml to the main config.yml file and insert our Bot's token."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cp example.config.yml config.yml && nano config.yml\n")),(0,o.kt)("p",null,"Enter your bot token in the config.yml file, save, and exit nano with ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+X")),(0,o.kt)("h3",{id:"5-install-node-modules--start-brayanbot"},"5. Install node modules & Start BrayanBot"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install && npm run start --skip-dependencies\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Install Yarn\nsudo npm i -g Yarn\n\n# Install dependencies and start the bot\nyarn && yarn start --skip-dependencies\n"))),(0,o.kt)(i.Z,{value:"pnpm",label:"pnpm (recommended)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Install pnpm\nsudo npm i -g pnpm\n\n# Install dependencies and start the bot\npnpm install && pnpm run start --skip-dependencies\n")))),(0,o.kt)("p",null,"And that's it, you have successfully installed and started BrayanBot!"),(0,o.kt)("h2",{id:"power-controls"},"Power Controls"),(0,o.kt)("p",null,"If you would like to keep the bot running after you log out of your terminal/machine; you may use ",(0,o.kt)("strong",{parentName:"p"},"PM2"),". It will also allow you to have BrayanBot persist between reboots, if you configure it that way."),(0,o.kt)("h3",{id:"using-pm2-process-manager"},"Using PM2 Process Manager"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Install PM2 through NPM\nnpm install -g pm2\n# Start BrayanBot with PM2\npm2 start index.js --name brayanbot\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pm2 stop brayanbot")," # Stops the pm2 process"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pm2 restart brayanbot")," # Restart the process"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pm2 logs brayanbot")," # View recent logs as well as a live console"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pm2 logs brayanbot --lines 1000 | nc termbin.com 9999")," # Export the bot's past logs and paste them to termbin.")),(0,o.kt)("h2",{id:"getting-help"},"Getting Help"),(0,o.kt)("admonition",{title:"\ud83d\udca1 Ran into a problem?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Join our ",(0,o.kt)("a",{parentName:"p",href:"https://brayanbot.dev/discord"},"support server")," and open a ticket.")))}f.isMDXComponent=!0}}]);