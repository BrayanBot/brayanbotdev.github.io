"use strict";(self.webpackChunkbrayanbot_dev=self.webpackChunkbrayanbot_dev||[]).push([[5542],{4137:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return k}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),p=s(t),c=o,k=p["".concat(d,".").concat(c)]||p[c]||u[c]||i;return t?a.createElement(k,l(l({ref:n},m),{},{components:t})):a.createElement(k,l({ref:n},m))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=c;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r[p]="string"==typeof e?e:o,l[1]=r;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3016:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return p}});var a=t(7462),o=t(3366),i=(t(7294),t(4137)),l=["components"],r={sidebar_place:1,description:"Learn how to create your own addons",title:"Creating Addons"},d="BrayanBot Addon Development",s={unversionedId:"Developers/Addons/creating-addons",id:"version-1.x/Developers/Addons/creating-addons",title:"Creating Addons",description:"Learn how to create your own addons",source:"@site/versioned_docs/version-1.x/Developers/Addons/creating-addons.md",sourceDirName:"Developers/Addons",slug:"/Developers/Addons/creating-addons",permalink:"/docs/Developers/Addons/creating-addons",draft:!1,editUrl:"https://github.com/brayanbot/brayanbot.dev/edit/dev/versioned_docs/version-1.x/Developers/Addons/creating-addons.md",tags:[],version:"1.x",frontMatter:{sidebar_place:1,description:"Learn how to create your own addons",title:"Creating Addons"},sidebar:"docs",previous:{title:"Terms of Conditions for Third Party Developers",permalink:"/docs/Developers/third-party-tos"},next:{title:"First Party Addons",permalink:"/docs/Developers/Addons/first-party"}},m={},p=[{value:"Getting started",id:"getting-started",level:2},{value:"Creating a new addon file",id:"creating-a-new-addon-file",level:2},{value:"Addon Template",id:"addon-template",level:2},{value:"Elaborating Addon Template",id:"elaborating-addon-template",level:3},{value:"Creating custom configs",id:"creating-custom-configs",level:2},{value:"CustomConfig construction:",id:"customconfig-construction",level:3},{value:"Coding your Addon",id:"coding-your-addon",level:2},{value:"Creating Custom Commands",id:"creating-custom-commands",level:2},{value:"SlashCommand Options",id:"slashcommand-options",level:3},{value:"Slash Command Option Choices",id:"slash-command-option-choices",level:4},{value:"Creating Event Listener",id:"creating-event-listener",level:2},{value:"Credits",id:"credits",level:2}],u={toc:p};function c(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"brayanbot-addon-development"},"BrayanBot Addon Development"),(0,i.kt)("p",null,"If you are proficient in Javascript and willing to extend BrayanBot's functionality; you are in luck! BrayanBot comes with an extensive Addon handler, allowing you to easily interact with BrayanBot without having to edit the source code and breaking upstream. This guide will go over the basics of creating your own addon, but it is not a ",(0,i.kt)("a",{parentName:"p",href:"https://discord.js.org/#/docs/"},"Discord.JS guide")," and will not substitute one. You are advised to be proficient in JavaScript, Node.JS and Discord.JS before creating an addon. But even if you are not, this may be a good starting point."),(0,i.kt)("p",null,"You will likely want to know your way around the basic files of BrayanBot. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/BrayanBot/BrayanBot/blob/dev/Modules/Utils.js"},"Utils.js"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/BrayanBot/BrayanBot/blob/dev/Modules/Handlers/AddonHandler.js"},"AddonHandler.js"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/BrayanBot/BrayanBot/blob/dev/AddonTemplate.js"},"AddonTemplate.js")," are good places to start looking."),(0,i.kt)("blockquote",null,(0,i.kt)("h2",{parentName:"blockquote",id:"helpful-resources-for-starters"},"Helpful Resources for starters")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Learning JavaScript & Node.js",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction"},"MDN Docs")," | ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"},"MDN Refrence")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.codecademy.com/catalog/language/javascript"},"CodeCademy")," (Free/Paid Online Course)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eloquentjavascript.net/"},"Eloquent")," (Free Book)"))),(0,i.kt)("li",{parentName:"ul"},"Discord.JS",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/"},"Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://discordjs.guide/"},"Guide"))))),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"Before you start, you should check if you meet all developer requirements."),(0,i.kt)("ol",{start:0},(0,i.kt)("li",{parentName:"ol"},"A working Brain. \ud83e\udde0"),(0,i.kt)("li",{parentName:"ol"},"Basic knowledge about JavaScript"),(0,i.kt)("li",{parentName:"ol"},"A good Integrated Development Environment (IDE)"),(0,i.kt)("li",{parentName:"ol"},"Knowledge about using internet")),(0,i.kt)("p",null,"After you confirm that you meet all the requirements you can start developing your first addon."),(0,i.kt)("h2",{id:"creating-a-new-addon-file"},"Creating a new addon file"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("inlineCode",{parentName:"li"},"Addons")," Folder. (If doesn't exist, Generate by Starting the bot or manually creating it)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Here all addons will be placed, any addons outside this folder won't be loaded."))),(0,i.kt)("li",{parentName:"ol"},"Create your file with extension ",(0,i.kt)("inlineCode",{parentName:"li"},".js"),". Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"AddonName.js"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This file will be your addon in which you will write your code."),(0,i.kt)("li",{parentName:"ul"},"Addon is required to have ",(0,i.kt)("inlineCode",{parentName:"li"},".js")," as extension to work.")))),(0,i.kt)("h2",{id:"addon-template"},"Addon Template"),(0,i.kt)("p",null,"Now, in your addon file copy and paste the code provided below to mark your file as an addon"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const Utils = require("../Modules/Utils")\nconst { Command } = require("../Modules/Handlers/CommandHandler")\nconst {\n  EventListener,\n  EventEmitter,\n} = require("../Modules/Handlers/EventHandler")\n\nmodule.exports = {\n  dependencies: [],\n  priority: 1,\n  name: "addon-name",\n  version: "1.0.0",\n  log: true,\n  author: {\n    name: "developer-name",\n    color: "hex-color-code",\n  },\n  customConfigs: {},\n}\n\nmodule.exports.run = async (bot, addonConfig) => {\n  // Your code goes here\n}\n')),(0,i.kt)("h3",{id:"elaborating-addon-template"},"Elaborating Addon Template"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Modules Required")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Utils"),": Few useful functions for developers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Command"),": Used for Creating Custom Commands."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EventListner"),": Used to listen for events emited."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EventEmitter"),": Used to emit events.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Object Exported")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": This is the name of your addon."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version"),": Version of the addon."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dependencies"),": Array of node_module names to be installed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"customConfigs"),": Object defines custom configs for addon."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"log"),": This is a value which defines what information will be logged in console on addon start.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"String")," - String used to log with Info prefix",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_nonInfo")," - If String starts with ",(0,i.kt)("inlineCode",{parentName:"li"},"_nonInfo")," Info prefix will be removed when logging."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"true")," - Bot will send Default addon loaded message."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"false")," - Addon loaded message won't be sent"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Object")," - This will be used if ",(0,i.kt)("inlineCode",{parentName:"li"},"author.name")," is specified. (",(0,i.kt)("inlineCode",{parentName:"li"},"author.color")," is optional.)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Function")," - Bot will execute this function."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"author"),": This defines author prefix for addon when logging ",(0,i.kt)("inlineCode",{parentName:"li"},"addon loaded"),". (This is Required for log.)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"String"),": Addon Developer's Name (Default Hex Color ",(0,i.kt)("inlineCode",{parentName:"li"},"#007bff")," will be used)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Object"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": Addon Developer's Name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"color"),": Your selected hex color(will be used in default addon start log).")))))),(0,i.kt)("h2",{id:"creating-custom-configs"},"Creating custom configs"),(0,i.kt)("p",null,"As you can see, there is ",(0,i.kt)("inlineCode",{parentName:"p"},"customConfigs")," option in your addon ",(0,i.kt)("inlineCode",{parentName:"p"},"module.exports"),".\nYou can use it to define custom configs for your addon."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"These configs are generated under ",(0,i.kt)("inlineCode",{parentName:"p"},"Addon_Configs/{addon-name}")," Folder.")),(0,i.kt)("h3",{id:"customconfig-construction"},"CustomConfig construction:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"customConfigs")," takes Object Input as displayed below"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'configName: {\n    type: "yml",\n    data: {},\n},\n')),(0,i.kt)("p",null,"In more details:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type"),": This is a extension of your config. (JSON & YAML are officially Supported)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data"),": This object defines your config content.")),(0,i.kt)("p",null,"Example Configs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "config": {\n    "type": "yml",\n    "data": {\n      "Enabled": true,\n      "Permission": "@everyone"\n    }\n  },\n  "lang": {\n    "type": "yml",\n    "data": {\n      "Message": {\n        "Content": "\ud83d\udc4b Hello from Lang",\n        "Embeds": [\n          {\n            "Title": "Hello!"\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"coding-your-addon"},"Coding your Addon"),(0,i.kt)("p",null,"You will write your addon code under ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," function."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bot"),": This parameter is defined as ",(0,i.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/discord.js/stable/class/Client"},"Discord.Client")," (This client object can be not logged into discord via token.)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"customConfig"),": This parameter is defined as your customConfig.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"customConfig[configName]")," to access file's content")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports.run = async (bot, customConfig) => {\n  // Your code goes here\n}\n")),(0,i.kt)("h2",{id:"creating-custom-commands"},"Creating Custom Commands"),(0,i.kt)("p",null,"BrayanBot Command Handler is very advanced and allows you to define multiple things, such as command aliases, permissions, allowed channels and more.\nUsing the config handler, you can create configurable values."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Use below code to create you custom command:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const command = new Command()\n  .setType("command-type")\n  .setCommandData({\n    Name: "command-name",\n    Description: "command-description",\n    Usage: "command-usage", // Without Prefix\n    Aliases: ["command-alias", "command-alias2"],\n    Permission: ["Role", "User-id/tag/username"],\n    SlashCommand: {\n      Enabled: true,\n      Data: {\n        Name: "command-name",\n        Description: "command-description",\n        Options: [],\n      },\n    },\n  })\n  .setRun(async (bot, message, args) => {\n    // Code for Legacy Commands\n  })\n  .setRunSlash(async (bot, interaction, options) => {\n    // Code for Slash Commands\n  })\n  .registerCommand()\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Name"),": Name of your command."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Description"),": Description of your command."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Usage"),": Usage of your command."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Aliases"),": Array of aliases of your command."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Permission"),": Array of permissions of your command. You can use Roles and Users or ",(0,i.kt)("inlineCode",{parentName:"li"},"@everyone")," to set it available for everyone."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SlashCommand"),": Object which defines your Slash Command data.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Enabled"),": Value which defines Slash Command is enabled or not."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Data"),": Object which defines your Slash Command data.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Name"),": Name of your Slash Command."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Description"),": Description of your Slash Command."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Options"),": Array of options of your Slash Command. This part will be described later.")))))),(0,i.kt)("h3",{id:"slashcommand-options"},"SlashCommand Options"),(0,i.kt)("p",null,"You can define options for your slash command.\nThere are multiple options for it, which you can all use in /slash command."),(0,i.kt)("p",null,"Option Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    Type: "option-type",\n    Name: "option-name",\n    Description: "option-description",\n    Required: true,\n    Choices: [],\n    ChannelTypes: [],\n},\n')),(0,i.kt)("p",null,"Where"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Type"),": This is a option type. Avaliable types:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Sub Command")," - Subcommand"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Sub Command Group")," - Subcommand group"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Integer")," - Integer(number) option"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Boolean")," - Boolean(",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"false"),") option"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"User")," - User option"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Channel")," - Channel option."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Role")," - Role option"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Mentionable")," - Mentionable option"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Name"),": Name of your option."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Description"),": Description of your option."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ChannelTypes"),"(Only for ",(0,i.kt)("inlineCode",{parentName:"li"},"channel")," type): Array of allowed channel types. Avaliable types:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Text")," - Text Channel"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Voice")," - Voice Channel"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Category")," - Channel category"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"News")," - News channel"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"News Thread")," - News thread channel"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Public Thread")," - Public thread channel"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Private Thread")," - Private thread channel"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Stage channel")," - Stage channel"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Required"),": Defines if option is required or not."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Choices"),"(Only for ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"integer"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," type): Array of available choices.")),(0,i.kt)("h4",{id:"slash-command-option-choices"},"Slash Command Option Choices"),(0,i.kt)("p",null,"In case of ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"integer"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," type, you can define choices for your option.\n",(0,i.kt)("strong",{parentName:"p"},"Example option:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'Choices: [\n    {\n        Name: "choice-name",\n        Value: "choice-value",\n    },\n]\n')),(0,i.kt)("p",null,"Where"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Name"),": Name of your choice."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Value"),": Value of your choice.")),(0,i.kt)("p",null,"That's everything you should know about CommandHandler.\nYou your Discord.js knowledge and code your command ;-)"),(0,i.kt)("h2",{id:"creating-event-listener"},"Creating Event Listener"),(0,i.kt)("p",null,"Since you know, how to create custom commands, it's time to create your first event listener."),(0,i.kt)("p",null,"To do it, follow the example code below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'new EventListener("event-name", async (bot, eventParameters) => {\n  // Your code for event listener goes here\n})\n')),(0,i.kt)("p",null,"Where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event-name"),": Name of your event. You can find avaliable events list ",(0,i.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/discord.js/stable/class/Client"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"parameters"),": Object which defines your event parameters.")),(0,i.kt)("p",null,"Example Event Listener:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'new EventListener("messageCreate", async (bot, message) => {\n  console.log(message.id, "| New Message:", message?.content)\n})\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Congratulations!")),(0,i.kt)("p",null,"You have successfully completed addon writing guide.\nNow, grab your keyboard, a good IDE and start making your own addons!"),(0,i.kt)("h2",{id:"credits"},"Credits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Zorino & SimonB50 for writing the Addon Guide"),(0,i.kt)("li",{parentName:"ul"},"Zorino for creating all of the handlers")))}c.isMDXComponent=!0}}]);