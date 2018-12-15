(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{125:function(t,e,i){"use strict";i(21);var s={props:{name:{type:String,default:""},src:{type:String,default:""},title:{type:String,default:""},subtitle:{type:String,default:""},actions:{type:Array,default:[],validator:function(t){return t&&t.length&&t.forEach(function(t){if(!t||"string"!=typeof t.label||"string"!=typeof t.url)return!1}),!0}},theme:{type:String,default:"light"}}},a=i(7),n=Object(a.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"jumbotron"},[i("amp-position-observer",{attrs:{on:"exit:fadeIn.start","intersection-ratios":"0.2",layout:"nodisplay"}}),t._v(" "),i("amp-position-observer",{attrs:{on:"enter:fadeOut.start","intersection-ratios":"0.2",layout:"nodisplay"}}),t._v(" "),i("div",{staticClass:"jumbotron__content"},[t.src?i("amp-img",{class:["jumbotron__image",t.theme,t.name],attrs:{height:"1",src:t.src,width:"1"}}):t._e(),t._v(" "),i("span",{staticClass:"stylized jumbotron__title"},[t._v(t._s(t.title))]),t._v(" "),i("span",{staticClass:"stylized jumbotron__subtitle"},[t._v(t._s(t.subtitle))]),t._v(" "),t.actions.length?i("div",{staticClass:"jumbotron__actions"},t._l(t.actions,function(e){return i("a",{key:e.url,staticClass:"jumbotron__link",attrs:{href:e.url,target:e.in?"_self":"_blank"}},[i("div",{staticClass:"code button jumbotron__button"},[t._v("\n          "+t._s(e.label)+"\n        ")])])})):t._e()],1)],1)},[],!1,null,null,null);n.options.__file="Jumbotron.vue";e.a=n.exports},126:function(t,e,i){"use strict";i(32),i(21);var s={props:{carpet:{type:String,default:""},name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:[],validator:function(t){return t&&t.length&&t.forEach(function(t){if(!t||"string"!=typeof t.name||"string"!=typeof t.text||"string"!=typeof t.title)return!1}),!0}}}},a=i(7),n=Object(a.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.items.length?i("div",{class:["project__section",t.name]},[t.carpet?i("amp-fx-flying-carpet",{staticClass:"section__flying-carpet",attrs:{height:"1"}},[i("amp-img",{staticClass:"section__flying-carpet-image",attrs:{src:t.carpet,height:"1",width:"1"}})],1):t._e(),t._v(" "),i("div",{staticClass:"section__title"},[t._v(t._s(t.label))]),t._v(" "),t._l(t.items,function(e){return i("div",{key:e.name,class:["section__items",e.name]},[i("div",{staticClass:"section__subtitle"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"section__sub-row"},[e.video?i("amp-video",{staticClass:"section__item-image",attrs:{controls:"",autoplay:"",loop:"",noaudio:"",height:"1",poster:e.poster,width:"1"}},[i("source",{attrs:{src:e.webm,type:"video/webm"}}),t._v(" "),i("source",{attrs:{src:e.video,type:"video/mp4"}})]):e.src?i("amp-img",{staticClass:"section__item-image",attrs:{height:"1",on:"tap:lightbox",role:"button",tabindex:"0",src:e.src,width:"1"}}):t._e(),t._v(" "),e.text?i("div",{class:["section__item-text",e.name],domProps:{innerHTML:t._s(e.text)}}):t._e()],1)])})],2):t._e()},[],!1,null,null,null);n.options.__file="HTMLSection.vue";e.a=n.exports},127:function(t,e,i){"use strict";var s={props:{src:{type:String,default:""},orientation:{type:String,default:"landscape"},type:{type:String,default:"wide"}}},a=i(7),n=Object(a.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["mockup",t.orientation,t.type]},[i("div",{staticClass:"mockup__container"},[i("div",{staticClass:"mockup__image"},[t.src?i("amp-img",{staticClass:"isometric__image",attrs:{height:"wide"===t.type?"portrait"===t.orientation?"64vw":"48vw":"portrait"===t.orientation?"64vw":"40vw",src:t.src,width:"wide"===t.type?"portrait"===t.orientation?"48vw":"64vw":"portrait"===t.orientation?"40vw":"64vw"}}):t._e()],1),t._v(" "),i("div",{staticClass:"mockup__shadow"})])])},[],!1,null,null,null);n.options.__file="Mockup.vue";e.a=n.exports},128:function(t,e,i){"use strict";i(21);var s={props:{name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:[],validator:function(t){return t&&t.length&&t.forEach(function(t){if(!t||"string"!=typeof t.description||"string"!=typeof t.label)return!1}),!0}}}},a=i(7),n=Object(a.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.items.length?i("div",{class:["project__section",t.name]},[i("div",{staticClass:"section__title"},[t._v(t._s(t.label))]),t._v(" "),i("div",{class:["section__items",t.name]},t._l(t.items,function(e){return i("div",{key:e.label,staticClass:"section__item"},[i("a",{class:["section__item-link",{disabled:!e.url}],attrs:{href:e.url,target:"_blank"}},[e.src?i("amp-img",{staticClass:"section__item-image",attrs:{src:e.src,height:"1",width:"1"}}):t._e(),t._v(" "),i("div",{staticClass:"section__item-content"},[e.label?i("span",{staticClass:"section__item-label"},[t._v(t._s(e.label))]):t._e(),t._v(" "),e.description?i("span",{staticClass:"section__item-description"},[t._v(t._s(e.description))]):t._e()])],1)])}))]):t._e()},[],!1,null,null,null);n.options.__file="LinksSection.vue";e.a=n.exports},129:function(t,e,i){"use strict";i(21);var s={props:{name:{type:String,default:""},items:{type:Array,default:[],validator:function(t){return t&&t.length&&t.forEach(function(t){if(!t||"string"!=typeof t.label||"string"!=typeof t.url)return!1}),!0}}}},a=i(7),n=Object(a.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.items.length?i("div",{class:["project__section",t.name]},[i("div",{staticClass:"project__actions"},t._l(t.items,function(e){return i("a",{key:e.url,staticClass:"project__link",attrs:{href:e.url,target:e.in?"_self":"_blank"}},[i("div",{staticClass:"code button project__button"},[t._v("\n        "+t._s(e.label)+"\n      ")])])}))]):t._e()},[],!1,null,null,null);n.options.__file="ActionsSection.vue";e.a=n.exports},130:function(t,e,i){"use strict";i(32),i(21);var s={props:{name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:[],validator:function(t){return t&&t.length&&t.forEach(function(t){if(!t||"string"!=typeof t.name||"array"!=typeof t.tags||"string"!=typeof t.title)return!1;tags.forEach(function(t){if(!t||"string"!=typeof t.description||"string"!=typeof t.label)return!1})}),!0}}}},a=i(7),n=Object(a.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.items.length?i("div",{class:["project__section",t.name]},[i("div",{staticClass:"section__title"},[t._v(t._s(t.label))]),t._v(" "),i("div",{staticClass:"section__container"},t._l(t.items,function(e){return i("div",{key:e.name,class:["section__items",e.name]},[i("div",{staticClass:"section__subtitle"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"section__row"},t._l(e.tags,function(e){return i("div",{key:e.label,staticClass:"section__item tag"},[e.src?i("amp-img",{staticClass:"section__item-icon",attrs:{src:e.src,height:"1",width:"1"}}):t._e(),t._v(" "),e.label?i("span",{staticClass:"section__item-label tag"},[t._v(t._s(e.label))]):t._e(),t._v(" "),e.description?i("span",{staticClass:"section__item-description"},[t._v(t._s(e.description))]):t._e()],1)}))])}))]):t._e()},[],!1,null,null,null);n.options.__file="TagsSection.vue";e.a=n.exports},136:function(t,e,i){"use strict";i.r(e);var s=i(129),a=i(126),n=i(125),o=i(127),r=i(128),l=i(130),c={components:{ActionsSection:s.a,HTMLSection:a.a,Jumbotron:n.a,Mockup:o.a,LinksSection:r.a,TagsSection:l.a},data:function(){return{jumbotron:{title:"ToDoList",subtitle:"Group project on keyboard and text-based agenda and organiser Java applet.",actions:[{label:"Repo",url:"https://github.com/cs2103jan2016-w13-2j/ToDoList"},{label:"Release",url:"https://github.com/cs2103jan2016-w13-2j/ToDoList/releases/tag/V0.6"},{label:"Docs",url:"https://hliejun.github.io/ToDoList/docs"},{label:"Guide",url:"https://hliejun.github.io/ToDoList/docs/guide.pdf"}]},mockup:{src:"/images/projects/todolist-1.jpg",orientation:"landscape",type:"wide"},technologies:[{name:"build",title:"BUILD",tags:[{label:"JavaFX"},{label:"ControlsFX"},{label:"JUnit"},{label:"Natty"},{label:"PrettyTime"}]},{name:"tools",title:"TOOLS",tags:[{label:"Eclipse"},{label:"Javadoc"}]}],carpets:{about:"/images/projects/todolist-2.jpg"},about:[{name:"description",title:"DESCRIPTION",text:"\n            ToDoList is an agenda organiser for keyboard experts. It manipulates an\n            agenda list by natural text commands.\n          "},{name:"motivation",title:"MOTIVATION",text:"\n            ToDoList was our first software engineering project, part of a module\n            to learn the essentials of software architecture and software development\n            lifecycle.\n          "},{name:"constraints",title:"CHALLENGES",text:"\n            The challenge in designing ToDoList was the constraint of limiting most\n            interactions to the keyboard. We had to experiment with practical and\n            natural ways to manipulate the agenda items without the use of a pointer\n            device.\n          "}],features:[{name:"natural",title:"NATURAL COMMANDS",src:"/images/projects/todolist-3.jpg",text:"\n            ToDoList will recognize special events or occasions, time of the day and\n            verbs as actions or commands, adverbs of time.\n          "},{name:"search",title:"SEARCH & FILTER",src:"/images/projects/todolist-4.jpg",text:"\n            You can search for an event by its title or name, or filter events by their\n            tagged categories.\n          "},{name:"sort",title:"SORTING",src:"/images/projects/todolist-5.jpg",text:"\n            You can sort events by title, start or end time, duration, and more.\n          "},{name:"undo",title:"UNDO & REDO",video:"/videos/project-todolist-01.mp4",webm:"/videos/project-todolist-01.webm",text:"\n            If you wish to correct your previous action, you can choose to undo or\n            redo changes made to your agenda list.\n          "},{name:"remind",title:"REMINDERS",video:"/videos/project-todolist-02.mp4",webm:"/videos/project-todolist-02.webm",text:"\n            Reminders can be set for important events and you will be notified as\n            long as you have the Java Applet running.\n          "},{name:"recurring",title:"RECURRING TASKS",src:"/images/projects/todolist-6.jpg",text:"\n            You can choose to set a task to be recurring for a specified time interval\n            and it will be reflected in your agenda list.\n          "},{name:"shortcuts",title:"SHORTCUTS",video:"/videos/project-todolist-03.mp4",webm:"/videos/project-todolist-03.webm",text:"\n            You can refer to agenda items by their index, make aliases for commands\n            and use arrow keys to browse the agenda list.\n          "},{name:"night",title:"DAY & NIGHT MODE",video:"/videos/project-todolist-04.mp4",webm:"/videos/project-todolist-04.webm",text:"\n            If you work in low-light environment, you can choose to switch over to\n            night mode.\n          "}],team:[{label:"Xiao Yu Xin",description:"\n            Yu Xin wrote the search and database modules for ToDoList.\n          ",src:"/images/profiles/yuxin.jpg",url:"https://github.com/XiaoYuxin"},{label:"Zhang Jiyi",description:"\n            Jiyi designed and implemented the parsers and logic components.\n          ",src:"/images/profiles/jiyi.jpg",url:"https://github.com/cs2103t"},{label:"Huang Lie Jun",description:"\n            I worked on the UI/UX designs, the views, controllers and project\n            coordination.\n          ",src:"/images/profiles/liejun.jpg",url:"https://github.com/hliejun"}],references:[{label:"JavaFX Tutorial",description:"\n            How to use JavaFX to implement interfaces in a Java applet.\n          ",src:"/images/links/oracle.jpg",url:"https://docs.oracle.com/javase/8/javafx/get-started-tutorial/get_start_apps.htm"},{label:"Natty Repository",description:"\n            Natural language date-time parser built by joestelmach for Java applications.\n          ",src:"/images/links/github.jpg",url:"https://github.com/joestelmach/natty"},{label:"PrettyTime Documentation",description:"\n            Documentation on PrettyTime API.\n          ",src:"/images/links/prettytime.jpg",url:"http://www.ocpsoft.org/prettytime"}],actions:[{label:"Weight",url:"/projects/weight",in:!0},{label:"Return",url:"/work",in:!0}]}}},u=i(7),p=Object(u.a)(c,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page todolist project"},[i("amp-image-lightbox",{staticClass:"gallery__lightbox",attrs:{id:"lightbox",layout:"nodisplay"}}),t._v(" "),i("Mockup",{attrs:{src:t.mockup.src,orientation:t.mockup.orientation,type:t.mockup.type}}),t._v(" "),i("Jumbotron",{attrs:{actions:t.jumbotron.actions,name:t.jumbotron.name,src:t.jumbotron.src,subtitle:t.jumbotron.subtitle,title:t.jumbotron.title}}),t._v(" "),i("div",{staticClass:"page__content"},[i("amp-position-observer",{attrs:{on:"enter:fadeIn.start","intersection-ratios":".3",layout:"nodisplay"}}),t._v(" "),i("TagsSection",{attrs:{name:"technologies",label:"TECHNOLOGY",items:t.technologies}}),t._v(" "),i("HTMLSection",{attrs:{name:"about",label:"ABOUT",items:t.about,carpet:t.carpets.about}}),t._v(" "),i("HTMLSection",{attrs:{name:"features",label:"FEATURES",items:t.features}}),t._v(" "),i("LinksSection",{attrs:{name:"team",label:"TEAM",items:t.team}}),t._v(" "),i("LinksSection",{attrs:{name:"references",label:"REFERENCES",items:t.references}}),t._v(" "),i("ActionsSection",{attrs:{name:"actions",items:t.actions}})],1)],1)},[],!1,null,null,null);p.options.__file="todolist.vue";e.default=p.exports}}]);