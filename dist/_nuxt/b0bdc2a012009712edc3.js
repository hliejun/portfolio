(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{125:function(t,e,i){"use strict";i(21);var s={props:{name:{type:String,default:""},src:{type:String,default:""},title:{type:String,default:""},subtitle:{type:String,default:""},actions:{type:Array,default:[],validator:function(t){return t&&t.length&&t.forEach(function(t){if(!t||"string"!=typeof t.label||"string"!=typeof t.url)return!1}),!0}},theme:{type:String,default:"light"}}},n=i(7),a=Object(n.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"jumbotron"},[i("amp-position-observer",{attrs:{on:"exit:fadeIn.start","intersection-ratios":"0.2",layout:"nodisplay"}}),t._v(" "),i("amp-position-observer",{attrs:{on:"enter:fadeOut.start","intersection-ratios":"0.2",layout:"nodisplay"}}),t._v(" "),i("div",{staticClass:"jumbotron__content"},[t.src?i("amp-img",{class:["jumbotron__image",t.theme,t.name],attrs:{height:"1",src:t.src,width:"1"}}):t._e(),t._v(" "),i("span",{staticClass:"stylized jumbotron__title"},[t._v(t._s(t.title))]),t._v(" "),i("span",{staticClass:"stylized jumbotron__subtitle"},[t._v(t._s(t.subtitle))]),t._v(" "),t.actions.length?i("div",{staticClass:"jumbotron__actions"},t._l(t.actions,function(e){return i("a",{key:e.url,staticClass:"jumbotron__link",attrs:{href:e.url,target:e.in?"_self":"_blank"}},[i("div",{staticClass:"code button jumbotron__button"},[t._v("\n          "+t._s(e.label)+"\n        ")])])})):t._e()],1)],1)},[],!1,null,null,null);a.options.__file="Jumbotron.vue";e.a=a.exports},126:function(t,e,i){"use strict";i(32),i(21);var s={props:{carpet:{type:String,default:""},name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:[],validator:function(t){return t&&t.length&&t.forEach(function(t){if(!t||"string"!=typeof t.name||"string"!=typeof t.text||"string"!=typeof t.title)return!1}),!0}}}},n=i(7),a=Object(n.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.items.length?i("div",{class:["project__section",t.name]},[t.carpet?i("amp-fx-flying-carpet",{staticClass:"section__flying-carpet",attrs:{height:"1"}},[i("amp-img",{staticClass:"section__flying-carpet-image",attrs:{src:t.carpet,height:"1",width:"1"}})],1):t._e(),t._v(" "),i("div",{staticClass:"section__title"},[t._v(t._s(t.label))]),t._v(" "),t._l(t.items,function(e){return i("div",{key:e.name,class:["section__items",e.name]},[i("div",{staticClass:"section__subtitle"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"section__sub-row"},[e.video?i("amp-video",{staticClass:"section__item-image",attrs:{controls:"",autoplay:"",loop:"",noaudio:"",height:"1",poster:e.poster,width:"1"}},[i("source",{attrs:{src:e.webm,type:"video/webm"}}),t._v(" "),i("source",{attrs:{src:e.video,type:"video/mp4"}})]):e.src?i("amp-img",{staticClass:"section__item-image",attrs:{height:"1",on:"tap:lightbox",role:"button",tabindex:"0",src:e.src,width:"1"}}):t._e(),t._v(" "),e.text?i("div",{class:["section__item-text",e.name],domProps:{innerHTML:t._s(e.text)}}):t._e()],1)])})],2):t._e()},[],!1,null,null,null);a.options.__file="HTMLSection.vue";e.a=a.exports},127:function(t,e,i){"use strict";var s={props:{src:{type:String,default:""},orientation:{type:String,default:"landscape"},type:{type:String,default:"wide"}}},n=i(7),a=Object(n.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["mockup",t.orientation,t.type]},[i("div",{staticClass:"mockup__container"},[i("div",{staticClass:"mockup__image"},[t.src?i("amp-img",{staticClass:"isometric__image",attrs:{height:"wide"===t.type?"portrait"===t.orientation?"64vw":"48vw":"portrait"===t.orientation?"64vw":"40vw",src:t.src,width:"wide"===t.type?"portrait"===t.orientation?"48vw":"64vw":"portrait"===t.orientation?"40vw":"64vw"}}):t._e()],1),t._v(" "),i("div",{staticClass:"mockup__shadow"})])])},[],!1,null,null,null);a.options.__file="Mockup.vue";e.a=a.exports},128:function(t,e,i){"use strict";i(21);var s={props:{name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:[],validator:function(t){return t&&t.length&&t.forEach(function(t){if(!t||"string"!=typeof t.description||"string"!=typeof t.label)return!1}),!0}}}},n=i(7),a=Object(n.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.items.length?i("div",{class:["project__section",t.name]},[i("div",{staticClass:"section__title"},[t._v(t._s(t.label))]),t._v(" "),i("div",{class:["section__items",t.name]},t._l(t.items,function(e){return i("div",{key:e.label,staticClass:"section__item"},[i("a",{class:["section__item-link",{disabled:!e.url}],attrs:{href:e.url,target:"_blank"}},[e.src?i("amp-img",{staticClass:"section__item-image",attrs:{src:e.src,height:"1",width:"1"}}):t._e(),t._v(" "),i("div",{staticClass:"section__item-content"},[e.label?i("span",{staticClass:"section__item-label"},[t._v(t._s(e.label))]):t._e(),t._v(" "),e.description?i("span",{staticClass:"section__item-description"},[t._v(t._s(e.description))]):t._e()])],1)])}))]):t._e()},[],!1,null,null,null);a.options.__file="LinksSection.vue";e.a=a.exports},129:function(t,e,i){"use strict";i(21);var s={props:{name:{type:String,default:""},items:{type:Array,default:[],validator:function(t){return t&&t.length&&t.forEach(function(t){if(!t||"string"!=typeof t.label||"string"!=typeof t.url)return!1}),!0}}}},n=i(7),a=Object(n.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.items.length?i("div",{class:["project__section",t.name]},[i("div",{staticClass:"project__actions"},t._l(t.items,function(e){return i("a",{key:e.url,staticClass:"project__link",attrs:{href:e.url,target:e.in?"_self":"_blank"}},[i("div",{staticClass:"code button project__button"},[t._v("\n        "+t._s(e.label)+"\n      ")])])}))]):t._e()},[],!1,null,null,null);a.options.__file="ActionsSection.vue";e.a=a.exports},130:function(t,e,i){"use strict";i(32),i(21);var s={props:{name:{type:String,default:""},label:{type:String,default:""},items:{type:Array,default:[],validator:function(t){return t&&t.length&&t.forEach(function(t){if(!t||"string"!=typeof t.name||"array"!=typeof t.tags||"string"!=typeof t.title)return!1;tags.forEach(function(t){if(!t||"string"!=typeof t.description||"string"!=typeof t.label)return!1})}),!0}}}},n=i(7),a=Object(n.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.items.length?i("div",{class:["project__section",t.name]},[i("div",{staticClass:"section__title"},[t._v(t._s(t.label))]),t._v(" "),i("div",{staticClass:"section__container"},t._l(t.items,function(e){return i("div",{key:e.name,class:["section__items",e.name]},[i("div",{staticClass:"section__subtitle"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"section__row"},t._l(e.tags,function(e){return i("div",{key:e.label,staticClass:"section__item tag"},[e.src?i("amp-img",{staticClass:"section__item-icon",attrs:{src:e.src,height:"1",width:"1"}}):t._e(),t._v(" "),e.label?i("span",{staticClass:"section__item-label tag"},[t._v(t._s(e.label))]):t._e(),t._v(" "),e.description?i("span",{staticClass:"section__item-description"},[t._v(t._s(e.description))]):t._e()],1)}))])}))]):t._e()},[],!1,null,null,null);a.options.__file="TagsSection.vue";e.a=a.exports},147:function(t,e,i){"use strict";i.r(e);var s=i(129),n=i(126),a=i(125),o=i(127),r=i(128),l=i(130),c={components:{ActionsSection:s.a,HTMLSection:n.a,Jumbotron:a.a,Mockup:o.a,LinksSection:r.a,TagsSection:l.a},data:function(){return{jumbotron:{title:"Missing Children of Ann Siang Hill",subtitle:"Interactive pixel story made using Bitsy.",actions:[{label:"Story",url:"https://hliejun.github.io/bitsy-story"},{label:"itch.io",url:"https://hliejun.itch.io/missing-children-of-ann-siang-hill"},{label:"About Bitsy",url:"https://ledoux.itch.io/bitsy"}]},mockup:{src:"/images/projects/bitsy-1.jpg",orientation:"landscape",type:"wide"},carpets:{about:"/images/projects/bitsy-2.jpg"},technologies:[{name:"build",title:"BUILD",tags:[{label:"Javascript"},{label:"HTML"},{label:"CSS"}]},{name:"tools",title:"TOOLS",tags:[{label:"Bitsy"}]},{name:"platforms",title:"PLATFORMS",tags:[{label:"itch.io"},{label:"GitHub Pages"}]}],about:[{name:"description",title:"DESCRIPTION",text:"\n            Set in the small town of Ann Siang Hill, an infamous cold case\n            on children going missing led to the abandonment of the ghastly\n            neighbourhood. Inspector Tan took the case into his own hands\n            for personal reasons, only to struggle between hallucinations\n            and reality. The mysterious visions he encounters as he travels\n            through the ghost town looking for clues leads him closer towards\n            the larger truth behind the disappearances of the children.<br>\n            <br>\n            Throughout the game, you will discover visions of the past through\n            the persona. This is indicated by entering a colorized version of\n            the scene. You may also pick up evidences from NPCs or props on\n            the ground. These evidences will hint at the places to go, or\n            unravel bits of pieces of the storyline. You are encouraged to\n            replay a couple of times to get the whole story!\n          "},{name:"motivation",title:"MOTIVATION",text:"\n            The goal of this pixel story was to learn about the agency of\n            exploration, unraveling a story through unordered discovery\n            and gameplay, driven by interactions and dialogues between\n            characters and key items. It was also an avenue for me to\n            fiddle with pixel art and game design.\n          "},{name:"constraints",title:"CHALLENGES",text:"\n            There were module limitations set on the use of sprites, rooms\n            and items. Bitsy hacks were not allowed too. However, these\n            restrictions did encourage interesting workarounds, such as\n            hiding entrypoints to conversation or event-triggered scenes\n            and using dialogues to guide players to these hiding spots.\n          "}],design:[{name:"world",title:"GAME WORLD",src:"/images/projects/bitsy-3.jpg",text:"\n            The game world comprises of 9 distinct scenes, 6 of them with\n            alternate dimensions. Key items are scattered among these scenes,\n            supplemented with monologues that unravel the plot. Characters can\n            only be found in scenes of the past. Interacting with these NPCs\n            will give clues to their identities, as well as the role they play\n            in the story. Depending on your possession of items, characters\n            will have different replies to your conversations.\n          "}],features:[{name:"dimensions",title:"ALTERNATE DIMENSIONS",video:"/videos/project-bitsy-01.mp4",webm:"/videos/project-bitsy-01.webm",text:"\n            You can travel between scenes to interact across dimensions. These\n            special dimensions represent the haunting of the past. To the\n            protagonist, it can be interpreted in many forms: hallucinations,\n            supernatural occurrences, time portals, recalls, etc. They are\n            distinct from the present dimensions in that they are coloured,\n            filled with NPCs and have slight differences in their setting.\n          "},{name:"hidden",title:"HIDDEN ITEMS",video:"/videos/project-bitsy-02.mp4",webm:"/videos/project-bitsy-02.webm",text:'\n            Some items are hidden from plain sight. This allows you to explore\n            the area, focus on dialogues and the storyline to make interactions\n            with the environment. It can also become a thrilling "treasure hunt"\n            if you prefer searching for them to listening for hints in dialogues.\n          '},{name:"intricate",title:"INTRICATE PIXEL ART & DIALOGUES",video:"/videos/project-bitsy-03.mp4",webm:"/videos/project-bitsy-03.webm",text:"\n            Each glyph, item, or character is designed meticulously to capture\n            traits, setting and character personalities in the scene. Some designs\n            are animated to illustrate events or create ambience.\n          "},{name:"parrot",title:"PARROT",video:"/videos/project-bitsy-04.mp4",webm:"/videos/project-bitsy-04.webm",text:"\n            You will find a parrot in the park scene, imitating random lines\n            of passers-by. The parrot is a mechanism to capture the story from\n            a spectator's point of view, and provides a different perspective\n            to the story. The imitated lines will hint at the story, as well\n            as your objectives in different scenes.\n          "}],references:[{label:"Balloon Diaspora",description:"\n            A game by Cardboard Computer focusing on the agency of exploration\n            and emotion through dialogues.\n          ",src:"/images/links/balloondiaspora.jpg",url:"http://cardboardcomputer.com/games/balloon-diaspora"},{label:"Glass",description:"\n            Interactive text story by Emily Short, putting the narrative in a\n            spectator's perspective.\n          ",src:"/images/links/glass.jpg",url:"http://inform7.com/learn/eg/glass/play.html"},{label:"Galatea",description:"\n            Also created by Emily Short, an interactive text story that inspires\n            player to form associations between key objects and entities with\n            story fragments.\n          ",src:"/images/links/galatea.jpg",url:"http://pr-if.org/play/galatea"}],actions:[{label:"Pokémania",url:"/projects/pokemania",in:!0},{label:"HypeDyn Stories",url:"/projects/hypedyn",in:!0}]}}},u=i(7),p=Object(u.a)(c,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page bitsy project"},[i("amp-image-lightbox",{staticClass:"gallery__lightbox",attrs:{id:"lightbox",layout:"nodisplay"}}),t._v(" "),i("Mockup",{attrs:{src:t.mockup.src,orientation:t.mockup.orientation,type:t.mockup.type}}),t._v(" "),i("Jumbotron",{attrs:{actions:t.jumbotron.actions,name:t.jumbotron.name,src:t.jumbotron.src,subtitle:t.jumbotron.subtitle,title:t.jumbotron.title}}),t._v(" "),i("div",{staticClass:"page__content"},[i("amp-position-observer",{attrs:{on:"enter:fadeIn.start","intersection-ratios":".3",layout:"nodisplay"}}),t._v(" "),i("TagsSection",{attrs:{name:"technologies",label:"TECHNOLOGY",items:t.technologies}}),t._v(" "),i("HTMLSection",{attrs:{name:"about",label:"ABOUT",items:t.about,carpet:t.carpets.about}}),t._v(" "),i("HTMLSection",{attrs:{name:"design",label:"DESIGN",items:t.design}}),t._v(" "),i("HTMLSection",{attrs:{name:"features",label:"FEATURES",items:t.features}}),t._v(" "),i("LinksSection",{attrs:{name:"references",label:"REFERENCES",items:t.references}}),t._v(" "),i("ActionsSection",{attrs:{name:"actions",items:t.actions}})],1)],1)},[],!1,null,null,null);p.options.__file="bitsy.vue";e.default=p.exports}}]);