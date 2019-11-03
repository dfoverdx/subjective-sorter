(this["webpackJsonponline-sorter"]=this["webpackJsonponline-sorter"]||[]).push([[0],[,,,,function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a,r,s=n(0),i=n.n(s);!function(e){e.items="items",e.question="question",e.maxItems="maxItems"}(a||(a={})),function(e){e.quicksort="qs",e.binaryInsertion="binIns",e.insertionSort="ins"}(r||(r={}));var o=i.a.createContext({items:[],updateItems:function(){},algorithm:null,setAlgorithm:function(){},question:"",setQuestion:function(){},maxWeight:!1,setMaxWeight:function(){}});t.c=o},,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(7),r=n(8),s=function(){function e(t,n,r,s){Object(a.a)(this,e),this.items=t,this.triggerPrompt=n,this.progress=r,this.updateProgress=s}return Object(r.a)(e,[{key:"swap",value:function(e,t){var n=[this.items[t],this.items[e]];this.items[e]=n[0],this.items[t]=n[1]}}],[{key:"createPrompt",value:function(e,t,n){var a={item1:e,item2:t,item3:n};return[new Promise((function(e){return a.resolve=e})),a]}}]),e}()},,,,,,function(e,t,n){"use strict";function a(e,t){return null===e||null===t||void 0===e||void 0===t?e===t:e.text===t.text&&e.required===t.required&&e.weight===t.weight}n.d(t,"a",(function(){return a}))},,,function(e,t,n){"use strict";var a=n(36),r=n(0),s=n.n(r),i=n(18),o=n(23),c=n(24),l=n(3),u=n.n(l);t.a=function(e){var t=e.className,n=Object(a.a)(e,["className"]);return s.a.createElement(i.b,Object.assign({to:"/data-entry",className:u()("btn btn-secondary",t)},n),s.a.createElement(o.a,{icon:c.a})," Back to Item Entry")}},function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(7),r=n(8),s=n(10),i=n(9),o=n(11),c=n(0),l=n.n(c),u=n(14),m=n(4),h=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).context=void 0,n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return this.context.items.length<3?l.a.createElement(u.a,{to:"/data-entry"}):this.props.redirectIfNoAlg&&!this.context.algorithm?l.a.createElement(u.a,{to:"/algorithm"}):l.a.createElement(l.a.Fragment,null,this.props.children)}}]),t}(c.PureComponent);h.contextType=m.c},,,,,,,,,,,function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(89);t.a=function(e){var t,n;return!function(e){return"number"===typeof e.progress}(e)?(t=e.progress.filter((function(e){return!1!==e})).length,n=e.progress.length):(t=e.progress,n=e.max),r.a.createElement(s.a,{value:t,striped:!0,max:n})}},function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(58),r=n(22),s=n(13),i=n.n(s),o=n(19),c=n(7),l=n(8),u=n(10),m=n(9),h=n(11),p=n(26),d=n(20),f=function(e){function t(e,n,a){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).call(this,e,n,new Array(e.length).fill(!1),a))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"run",value:function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.updateProgress&&this.updateProgress(this.progress),e.abrupt("return",this.qs(0,this.items.length-1));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"cancel",value:function(){}},{key:"qs",value:function(){var e=Object(o.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t<n)){e.next=10;break}return e.next=3,this.partition(t,n);case 3:return a=e.sent,this.progress[a]=this.items[a],this.updateProgress&&this.updateProgress(this.progress),e.next=8,this.qs(t,a-1);case 8:return e.next=10,this.qs(a+1,n);case 10:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"partition",value:function(){var e=Object(o.a)(i.a.mark((function e(t,n){var s,o,c,l,u,m,h,f,g,b,v,y,x,E,w,k;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n-t>5)){e.next=10;break}if(!((s=this.items.slice(n-2).filter((function(e){return!e.required}))).length>1)){e.next=10;break}return o=d.a.createPrompt.apply(d.a,Object(a.a)(s)),c=Object(r.a)(o,2),l=c[0],u=c[1],this.triggerPrompt(u),e.next=7,l;case 7:m=e.sent,-1===(h=this.items.indexOf(m))?console.warn("Did not find item ".concat(m.text)):this.swap(h,n);case 10:if(!(f=this.items[n]).required){e.next=14;break}return this.swap(t,n),e.abrupt("return",t);case 14:g=t,b=t;case 16:if(!(b<n)){e.next=31;break}if(!(v=this.items[b]).required||f.required){e.next=22;break}return this.swap(g,b),g++,e.abrupt("continue",28);case 22:return y=d.a.createPrompt(f,v),x=Object(r.a)(y,2),E=x[0],w=x[1],this.triggerPrompt(w),e.next=26,E;case 26:k=e.sent,Object(p.a)(k,v)&&(this.swap(g,b),g++);case 28:b++,e.next=16;break;case 31:return this.swap(g,n),e.abrupt("return",g);case 33:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),t}(d.a)},,,,,,,,function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return j}));var a=n(7),r=n(8),s=n(10),i=n(9),o=n(11),c=n(0),l=n.n(c),u=n(18),m=n(27),h=n.n(m),p=n(63),d=n(86),f=n(59),g=n(60),b=n(61),v=n(62),y=n(23),x=n(24),E=n(51),w=n(52),k=n(53),I=n(4),j=(n(82),function(t){function n(){var e,t;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(o)))).context=void 0,t.state={hasItems:!1,maxItems:0},t}return Object(o.a)(n,t),Object(r.a)(n,[{key:"componentDidMount",value:function(){this.context.setAlgorithm(null),this.setState({hasItems:this.context.items.length>2,maxItems:this.getMaxWeight()})}},{key:"onInputChange",value:function(e){this.setState({hasItems:e.target.value.split("\n").filter((function(e){return e.trim().length})).length>2})}},{key:"onInputSaved",value:function(){var t=this;e((function(){var e=t.getMaxWeight();(!1!==t.context.maxWeight&&t.state.maxItems<=t.context.maxWeight||e<t.state.maxItems)&&(t.setState({maxItems:e}),t.context.setMaxWeight(e))}))}},{key:"onQuestionChange",value:function(e){this.context.setQuestion(e.target.value)}},{key:"onMaxItemsChange",value:function(e){this.context.setMaxWeight(e)}},{key:"getMaxWeight",value:function(){return this.context.items.reduce((function(e,t){return e+(t.weight||1)}),0)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"display-1"},"Item Entry"),l.a.createElement(h.a,null,"\n        Enter the items you wish to sort.  Each line represents one item.\n\n        If an item is *required*, prepend a `*` to it.  If a line represents multiple items (i.e. has a *weight*)\n        append `| <weight>` to it, where `<weight>` is the number of items the line represents.  See the examples\n        below for more details.\n\n        Your entries will be saved automatically.\n      "),l.a.createElement(E.a,{onChange:this.onInputChange.bind(this),onSaved:this.onInputSaved.bind(this)}),l.a.createElement(k.a,{className:"mt-4",onChange:this.onQuestionChange.bind(this),value:this.context.question}),l.a.createElement("div",{className:"d-flex flex-row justify-content-between my-2"},l.a.createElement(w.a,{value:this.context.maxWeight,onChange:this.onMaxItemsChange.bind(this),maxItems:this.state.maxItems}),l.a.createElement(u.b,{to:"/algorithm",className:"my-auto"},l.a.createElement(p.a,{color:"primary",disabled:!this.state.hasItems,className:"ml-auto",size:"lg"},"Sort Entries ",l.a.createElement(y.a,{icon:x.b,size:"lg"})))),l.a.createElement(d.a,{className:"mt-1"},l.a.createElement(f.a,{color:"light",id:"examples"},l.a.createElement(g.a,null,l.a.createElement(b.a,null,l.a.createElement("h3",null,"Examples"))),l.a.createElement(v.a,null,l.a.createElement(h.a,null,"\n              **Single entries**\n              ```\n              Anna\n              Bob\n              ```\n\n              **Required single entries**\n              ```\n              * Candice\n              * Derek\n              ```\n\n              **Weighted entries**\n              ```\n              The Smiths | 4\n              Edna + 1 | 2\n              ```\n\n              **Required weighted entries**\n              ```\n              * The Jones | 3\n              * Fred and Gwen + 1 | 3\n              ```\n            "))),l.a.createElement("div",{className:"w-100 d-md-none"}),l.a.createElement(f.a,{color:"light"},l.a.createElement(g.a,null,l.a.createElement(b.a,null,l.a.createElement("h3",null,"Tips"))),l.a.createElement(v.a,null,l.a.createElement(h.a,null,'\n              Entries marked required will not require any questions on the quiz.  This will *dramatically* reduce the\n              length of the quiz.\n\n              Required items are not ordered amongst other required items.\n\n              If you have already sorted your list and add new items, don\'t add them to the start; add them "near"\n              where they need to be or to the end of the list.  Then select *Insertion Sort* on the next step.\n\n              If you make a mistake during the sorting quiz, finish the quiz and then do the quiz again with the\n              *Insertion Sort* method.  This quiz will be (relatively) very short.\n            ')))))}}]),n}(c.PureComponent));j.contextType=I.c}).call(this,n(34).setImmediate)},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return p}));var a=n(22),r=n(7),s=n(8),i=n(10),o=n(9),c=n(11),l=n(0),u=n.n(l),m=n(4),h=/^\s*(\*)?\s*(.+?)\s*(?:\|\s*(\d+))?\s*$/,p=function(t){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(s)))).inputRef=u.a.createRef(),t.context=void 0,t.state={text:"",saved:!1,error:null,autosize:!0,canResize:!0},t.saveTimeout=-1,t}return Object(c.a)(n,t),Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.setState({text:this.stringifyItems()}),this.validate();var n=this.inputRef.current,a=n.offsetHeight-n.clientHeight;if(e((function(){return n.style.height=n.scrollHeight+a+"px"})),window.ResizeObserver){var r=new ResizeObserver((function(){t.setState({autosize:!1}),r.disconnect()}));r.observe(n)}else this.setState({canResize:!1})}},{key:"parseItems",value:function(){return this.inputRef.current?this.inputRef.current.value.split("\n").filter((function(e){return e.trim().length})).map((function(e){var t=h.exec(e),n=Object(a.a)(t,4),r=(n[0],n[1]),s=n[2],i=n[3];return{text:s,weight:i?parseInt(i):void 0,required:void 0!==r?!!r:void 0}})):[]}},{key:"updateItems",value:function(){clearTimeout(this.saveTimeout);var e=this.validate();e&&(this.context.updateItems(e),this.props.onSaved&&this.props.onSaved(),this.setState({saved:!0,error:null}))}},{key:"validate",value:function(){for(var e=this.parseItems(),t=0;t<e.length-1;t++)for(var n=t+1;n<e.length;n++)if(e[t].text===e[n].text)return this.setState({saved:!1,error:"Duplicate item: ".concat(e[t].text)}),null;return e}},{key:"onChange",value:function(e){var t=this;clearTimeout(this.saveTimeout);var n=e.target,a=this.validate(),r={text:n.value};if(a&&(this.saveTimeout=window.setTimeout((function(){return t.updateItems()}),3e3),r.saved=!1,r.error=null),this.setState(r),this.state.autosize){var s=n.offsetHeight-n.clientHeight;n.style.height="auto",n.style.height=n.scrollHeight+s+"px"}this.props.onChange&&this.props.onChange(e)}},{key:"stringifyItems",value:function(){return this.context&&this.context.items?this.context.items.map((function(e){var t=e.required?"* ":"";return t+=e.text,e.weight&&(t+=" | "+e.weight),t})).join("\n"):""}},{key:"render",value:function(){var e=this.state,t=e.saved,n=e.error,a=e.canResize,r={height:0,color:t?"green":n?"red":"inherit"};return u.a.createElement(u.a.Fragment,null,u.a.createElement("textarea",{value:this.state.text,onBlur:this.updateItems.bind(this),ref:this.inputRef,onChange:this.onChange.bind(this),className:"form-control",style:{minHeight:"25vh",resize:a?"vertical":"none"}}),u.a.createElement("div",{className:"pt-1",style:r},t?"Items saved":n))}}]),n}(l.PureComponent);p.contextType=m.c}).call(this,n(34).setImmediate)},function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(7),r=n(8),s=n(10),i=n(9),o=n(11),c=n(0),l=n.n(c),u=n(43),m=n(4),h=function(e){function t(){return Object(a.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"onCBChange",value:function(e){e.target.checked?this.props.onChange(this.props.maxItems):this.props.onChange(!1)}},{key:"onNumChange",value:function(e){this.props.onChange(parseInt(e.target.value))}},{key:"onNumBlur",value:function(e){var t=parseInt(e.target.value);isNaN(t)||t>this.props.maxItems?t=this.props.maxItems:t<1&&(t=1),this.props.onChange(t)}},{key:"render",value:function(){var e=this.props,t=e.value,n=e.maxItems;return l.a.createElement("div",null,l.a.createElement("h5",null,"Maximum Items"),l.a.createElement("div",{className:"d-flex flex-row align-items-baseline"},l.a.createElement(u.a,{type:"checkbox",onChange:this.onCBChange.bind(this),checked:!1!==t,className:"ml-0 mr-2 position-relative"}),l.a.createElement(u.a,{type:"number",onChange:this.onNumChange.bind(this),value:!1===t?"":t,min:1,max:n,disabled:!1===t,onBlur:this.onNumBlur.bind(this),className:"text-right"})))}}]),t}(c.PureComponent);h.contextType=m.c},function(e,t,n){"use strict";var a=n(36),r=n(0),s=n.n(r),i=n(43);t.a=function(e){var t=e.className,n=Object(a.a)(e,["className"]);return s.a.createElement(s.a.Fragment,null,s.a.createElement("h5",{className:t},"Ask yourself a question to help compare items, such as ",s.a.createElement("i",null,"Who would you rather have at your wedding?")),s.a.createElement(i.a,Object.assign({},n,{type:"text",placeholder:"(Optional)"})))}},function(e,t,n){"use strict";(function(e){var a=n(13),r=n.n(a),s=n(19),i=n(7),o=n(8),c=n(10),l=n(9),u=n(16),m=n(11),h=n(0),p=n.n(h),d=n(14),f=n(29),g=n(55),b=n(41),v=n(4),y=n(56),x=n(57),E=n(42),w=n(30),k=function(t){function n(e){var t;return Object(i.a)(this,n),(t=Object(c.a)(this,Object(l.a)(n).call(this,e))).context=void 0,t.state={promptCount:0,progress:0},t.sorter=void 0,t.algorithmName=void 0,t.bodyElement=document.getElementsByTagName("body")[0],t.triggerPromptUser=t.triggerPromptUser.bind(Object(u.a)(t)),t.updateProgress=t.updateProgress.bind(Object(u.a)(t)),t.onKeyPress=t.onKeyPress.bind(Object(u.a)(t)),t.cancel=t.cancel.bind(Object(u.a)(t)),t}return Object(m.a)(n,t),Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,n,a,s=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.context,n=t.algorithm,a=t.items,e.t0=n,e.next=e.t0===v.a.quicksort?4:e.t0===v.a.binaryInsertion?7:e.t0===v.a.insertionSort?10:13;break;case 4:return this.sorter=new E.a(a,this.triggerPromptUser,this.updateProgress),this.algorithmName="Quicksort",e.abrupt("break",13);case 7:return this.sorter=new y.a(a,this.triggerPromptUser,this.updateProgress),this.algorithmName="Binary Insertion Sort",e.abrupt("break",13);case 10:return this.sorter=new x.a(a,this.triggerPromptUser,this.updateProgress),this.algorithmName="Insertion Sort",e.abrupt("break",13);case 13:this.sorter&&this.sorter.run().then((function(){return s.props.history.replace("/results")})),window.addEventListener("keypress",this.onKeyPress),window.addEventListener("beforeunload",this.cancel),window.addEventListener("popstate",this.cancel);case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){window.removeEventListener("keypress",this.onKeyPress),window.removeEventListener("beforeunload",this.cancel),window.removeEventListener("popstate",this.cancel)}},{key:"cancel",value:function(){this.sorter&&this.sorter.cancel()}},{key:"flash",value:function(){var t=this;this.bodyElement.classList.remove("flash"),e((function(){return t.bodyElement.classList.add("flash")}))}},{key:"updateProgress",value:function(e){Array.isArray(e)?this.setState({progress:e.slice()}):this.setState({progress:e})}},{key:"triggerPromptUser",value:function(e){this.state.lastLeftItem&&this.state.lastLeftItem!==e.item1&&this.flash(),this.setState({lastLeftItem:e.item3?void 0:e.item1,prompt:e,promptCount:this.state.promptCount+1}),this.context.updateItems(this.context.items)}},{key:"onKeyPress",value:function(e){var t=this.state.prompt;if(t)switch(e.key){case"a":t.resolve(t.item1);break;case"h":if(!t.item3)break;t.resolve(t.item2);break;case"l":if(t.item3){t.resolve(t.item3);break}t.resolve(t.item2)}}},{key:"render",value:function(){if(!this.context.algorithm)return p.a.createElement(d.a,{to:"/algorithm"});if(!this.state.prompt)return p.a.createElement("div",null);var e=this.state.prompt.item3;return p.a.createElement(w.a,null,p.a.createElement("h1",{className:"display-1"},"Sort"),p.a.createElement("h4",null,this.algorithmName),p.a.createElement("div",{className:"d-flex flex-column"},p.a.createElement("h2",{className:"text-center mb-3 mt-4"},e?p.a.createElement(p.a.Fragment,null,"Which item is the ",p.a.createElement("b",{className:"text-primary"},p.a.createElement("i",null,"second"))," most important?"):this.context.question||p.a.createElement(p.a.Fragment,null,"Which item is ",p.a.createElement("span",{className:"text-primary"},"more important"),"?")),p.a.createElement("h4",null,"Question #",this.state.promptCount),p.a.createElement(g.a,{prompt:this.state.prompt}),this.sorter instanceof E.a?p.a.createElement(b.a,{progress:this.state.progress}):p.a.createElement(b.a,{progress:this.state.progress,max:this.context.items.length}),e&&p.a.createElement("span",{className:"text-info mt-2"},"This question has no bearing on the final result, but answering it correctly can reduce the length of the quiz by up to 15% or more on your car insurance.  For real, though, it'll cut out a good 5-15% of the questions."),p.a.createElement("p",{className:"mt-2 mb-1 d-none d-sm-inline"},p.a.createElement("b",null,"Tip:")," ",e?p.a.createElement(p.a.Fragment,null,"You can press ",p.a.createElement("kbd",null,"a")," to select the left item, ",p.a.createElement("kbd",null,"h")," to select the middle item, and"," ",p.a.createElement("kbd",null,"l")," to select the right item."):p.a.createElement(p.a.Fragment,null,"You can press ",p.a.createElement("kbd",null,"a")," to select the left item and ",p.a.createElement("kbd",null,"l")," to select the right item.")),p.a.createElement("p",null,p.a.createElement("b",null,"Tip:")," The screen will flash ",p.a.createElement("span",{className:"text-success"},"green")," when the left item changes."),p.a.createElement(f.a,{className:"align-self-start mt-2",onClick:this.cancel}),p.a.createElement("h4",{className:"mt-3"},"Progress Information"),this.context.algorithm===v.a.quicksort?p.a.createElement(p.a.Fragment,null,"The Quicksort progress bar will fill up slowly at first and then much quicker toward the end.  The first progress bar increase will be after ",this.context.items.length-1," questions.  About midway through and right at the end, the progress bar will fill several segments at a time.  This is just the nature of Quicksort.  It may not feel like it, but you are making progress."):p.a.createElement(p.a.Fragment,null,"The ",this.algorithmName," progress bar will fill up quickly at first and slower toward the end.  The way the algorithm works, it builds an increasingly long sorted list at the front of the list, progressively adding items into the correct place.  This is why the progress bar starts at"," ",Math.round(100/this.context.items.length),"%--the first item is a sorted list of 1 length.  As the sorted portion of the list increases, it requires more questions to figure out where later items belong.")))}}]),n}(h.PureComponent);k.contextType=v.c,t.a=Object(d.g)(k)}).call(this,n(34).setImmediate)},function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(87),i=n(63),o=n(88);t.a=function(e){var t=e.prompt,n=t.resolve,a=t.item1,c=t.item2,l=t.item3,u=function(e){var t=e.opt;return r.a.createElement(s.a,{xs:12,md:l?12:6,lg:l?4:6,className:"align-self-stretch mb-2"},r.a.createElement(i.a,{onClick:function(){return n(t)},className:"w-100 border h-100",color:"light",style:{minHeight:100,fontSize:40}},t.text))};return r.a.createElement(o.a,{className:"align-items-stretch"},r.a.createElement(u,{opt:a}),r.a.createElement(u,{opt:c}),l&&r.a.createElement(u,{opt:l}))}},function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(22),r=n(13),s=n.n(r),i=n(19),o=n(7),c=n(8),l=n(10),u=n(9),m=n(11),h=n(26),p=n(20),d=function(e){function t(e,n,a){var r;return Object(o.a)(this,t),(r=Object(l.a)(this,Object(u.a)(t).call(this,e,n,1,a))).curItem=null,r.curIdx=-1,r}return Object(m.a)(t,e),Object(c.a)(t,[{key:"run",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t,n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.items,n=1;case 2:if(!(n<t.length)){e.next=14;break}return this.updateProgress&&this.updateProgress(this.progress),this.curIdx=n,a=this.curItem=t.splice(n,1)[0],e.next=8,this.binarySearch(a,0,n);case 8:r=e.sent,t.splice(r,0,a),this.progress=n;case 11:n++,e.next=2;break;case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"cancel",value:function(){this.curItem&&this.items.splice(this.curIdx,0,this.curItem)}},{key:"binarySearch",value:function(){var e=Object(i.a)(s.a.mark((function e(t,n,r){var i,o,c,l,u,m,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n>=r)){e.next=2;break}return e.abrupt("return",n);case 2:if(i=Math.floor((r-n)/2+n),o=this.items[i],!t.required){e.next=11;break}if(o.required){e.next=8;break}return e.abrupt("return",this.binarySearch(t,n,i));case 8:return e.abrupt("return",i);case 9:e.next=13;break;case 11:if(!o.required){e.next=13;break}return e.abrupt("return",this.binarySearch(t,i+1,r));case 13:return c=p.a.createPrompt(t,o),l=Object(a.a)(c,2),u=l[0],m=l[1],this.triggerPrompt(m),e.next=17,u;case 17:if(d=e.sent,!Object(h.a)(d,t)){e.next=22;break}return e.abrupt("return",this.binarySearch(t,n,i));case 22:return e.abrupt("return",this.binarySearch(t,i+1,r));case 23:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()}]),t}(p.a)},function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(13),r=n.n(a),s=n(22),i=n(19),o=n(7),c=n(8),l=n(10),u=n(9),m=n(11),h=n(26),p=n(20),d=function(e){function t(e,n,a){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e,n,1,a))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"run",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t,n,a,i,o,c,l,u,m,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.items,n=1;case 2:if(!(n<t.length)){e.next=36;break}this.updateProgress&&this.updateProgress(this.progress),a=t[n],i=n-1;case 6:if(!(i>=0)){e.next=32;break}if(o=t[i],!a.required){e.next=17;break}if(o.required){e.next=14;break}return this.swap(i+1,i),e.abrupt("continue",29);case 14:return e.abrupt("break",32);case 15:e.next=19;break;case 17:if(!o.required){e.next=19;break}return e.abrupt("break",32);case 19:return c=p.a.createPrompt(a,o),l=Object(s.a)(c,2),u=l[0],m=l[1],this.triggerPrompt(m),e.next=23,u;case 23:if(d=e.sent,!Object(h.a)(d,a)){e.next=28;break}this.swap(i+1,i),e.next=29;break;case 28:return e.abrupt("break",32);case 29:i--,e.next=6;break;case 32:this.progress=n+1;case 33:n++,e.next=2;break;case 36:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"cancel",value:function(){}}]),t}(p.a)},,,,,,,function(e,t,n){e.exports=n(85)},,,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(46),i=n.n(s),o=n(7),c=n(8),l=n(10),u=n(9),m=n(16),h=n(11),p=(n(69),n(70),n(90)),d=(n(71),function(){return r.a.createElement(p.a,{fixed:"bottom",color:"light",className:"d-none d-md-flex footer-nav"},r.a.createElement("div",{className:"container justify-content-between"},r.a.createElement("a",{href:"https://github.com/dfoverdx/subjective-sorter"},"Source Code"),r.a.createElement("span",null,r.a.createElement("a",{href:"https://dfdx.us/"},"Haley Hitch")," \xa9 2019")))}),f=n(4),g=n(18),b=n(14),v=n(27),y=n.n(v),x=n(59),E=n(60),w=n(61),k=n(62),I=n(86),j=n(23),O=n(24),q=n(29),S=(n(80),n(30)),N=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).context=void 0,n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"onSelection",value:function(e){this.context.setAlgorithm(e)}},{key:"render",value:function(){var e=this,t=function(t){var n=t.algorithm,a=t.url,s=t.name,i=t.pros,o=t.cons,c=t.color,l=t.inverse;return r.a.createElement(x.a,{color:c||"light",inverse:l},r.a.createElement(E.a,null,r.a.createElement(w.a,null,r.a.createElement("h4",null,s))),r.a.createElement(k.a,{className:"d-flex flex-column"},"Pros:",r.a.createElement("ul",null,i.map((function(e,t){return r.a.createElement("li",{key:t},e)}))),"Cons:",r.a.createElement("ul",null,o.map((function(e,t){return r.a.createElement("li",{key:t},e)}))),r.a.createElement("div",{className:"text-center mt-auto"},r.a.createElement(g.b,{to:"/sort/".concat(a),onClick:e.onSelection.bind(e,n),className:"btn btn-primary btn-lg"},"Select ",r.a.createElement(j.a,{icon:O.b,size:"lg"})))))};return r.a.createElement(S.a,null,r.a.createElement(y.a,null,'\n        Select Algorithm\n        ================\n\n        Here you select which method we\'ll use for sorting your list.  Ultimately, all three methods will produce the\n        same results.  The difference is only in how long the "quiz" will be.\n      '),r.a.createElement(I.a,{className:"my-auto"},r.a.createElement(t,{algorithm:f.a.quicksort,url:"quicksort",name:"Quicksort",pros:["Fewer context switches--questions are faster to answer"],cons:["Slightly more questions than Binary Insertion Sort",r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,"Longest possible")," quiz if list is already mostly sorted")]}),r.a.createElement("div",{className:"w-100 d-lg-none"}),r.a.createElement(t,{algorithm:f.a.binaryInsertion,url:"binary-insertion-sort",name:"Binary Insertion Sort",pros:["Fewest questions for well-shuffled lists","Roughly the same number of questions no matter how sorted or unsorted the list is"],cons:["More context switches--questions are a little slower to answer"]}),r.a.createElement("div",{className:"w-100 d-xl-none"}),r.a.createElement("div",{className:"w-100 d-lg-none"}),r.a.createElement(t,{algorithm:f.a.insertionSort,url:"insertion-sort",name:"Insertion Sort",color:"secondary",inverse:!0,pros:[r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,"Fewest questions by far")," for mostly-ordered lists"),"Fewer context switches than Binary Insertion Sort--questions are quicker to answer"],cons:["More context switches than Quicksort--questions are slower to answer",r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,"Significantly")," more questions than Binary Insertion Sort or Quicksort if list is not already mostly ordered")]}),r.a.createElement("div",{className:"w-50 d-none d-lg-flex d-xl-none"})),r.a.createElement(q.a,{className:"mb-3"}),r.a.createElement(y.a,null,"\n        #### Information ####\n\n        If your list is more or less ordered already, such as when you sort it and then go back to add a couple items,\n        select *Insertion Sort*.  If the list is already completely sorted, [Insertion Sort](https://en.wikipedia.org/wiki/Insertion_sort)\n        will have the absolute minimum number of questions (`number of items - 1`).\n\n        If your list is not sorted, choose either *Quicksort* or *Binary Insertion Sort*.  Both sorting methods take\n        about the same amount of time.  If you're good at switching contexts in your head, choose\n        [Binary Insertion Sort](https://en.wikipedia.org/wiki/Insertion_sort#Variants), otherwise, choose [Quicksort](https://en.wikipedia.org/wiki/Quicksort).\n\n        Your list will be reordered as you answer questions, so if you need to return to item entry in the middle of the\n        quiz, you will not lose your progress.\n      "))}}]),t}(a.PureComponent);N.contextType=f.c;var P=n(49),C=n.n(P),T=function(){return r.a.createElement("div",{className:"d-flex flex-column w-100 h-100"},r.a.createElement("div",{className:"w-100 text-center",style:{marginTop:"20%",marginBottom:"20%"}},r.a.createElement(C.a,{compressor:.745,minFontSize:65},"Subjective Sorter")),r.a.createElement("p",null,"Sometimes it is helpful to order things from most important to least important.  For example, maybe you need to figure out who to invite to your wedding, and you can only invite so many people.  Or maybe you want to determine what your ",r.a.createElement("a",{href:"https://dfdx.us/core-values-quiz"},"core values")," are.  Maybe you just need to figure out who your favorite Backstreet Boy is, idk!"),r.a.createElement("p",null,'The Subjective Sorter allows you to efficiently order your list of items given subjective criteria.  Input your data and the tool will generate a "quiz", presenting you with two options per question.  Choose which is the more important option, and the tool will handle the rest.'),r.a.createElement(g.b,{to:"/item-entry",className:"align-self-end btn btn-primary btn-lg mt-auto"},"Get Started ",r.a.createElement(j.a,{icon:O.b,size:"lg"})))},z=n(50),F=n(91),A=n(92),B=n(3),M=n.n(B),W=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).context=void 0,n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.context.maxWeight,t=0;return r.a.createElement(S.a,{redirectIfNoAlg:!0},r.a.createElement("h1",{className:"display-1"},"Results"),r.a.createElement(F.a,null,this.context.items.map((function(n){return t+=n.weight||1,r.a.createElement(A.a,{key:n.text,className:M()(t<=e&&"bg-success text-white")},n.text)}))),r.a.createElement(q.a,{className:"mt-3"}))}}]),t}(a.PureComponent);W.contextType=f.c;var Q=n(54),R=function(){return r.a.createElement(g.a,null,r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/"},r.a.createElement(T,null)),r.a.createElement(b.b,{path:"/item-entry"},r.a.createElement(z.a,null)),r.a.createElement(b.b,{path:"/algorithm"},r.a.createElement(N,null)),r.a.createElement(b.b,{path:"/sort"},r.a.createElement(Q.a,null)),r.a.createElement(b.b,{path:"/results"},r.a.createElement(W,null)),r.a.createElement(b.b,{path:"*"},r.a.createElement(b.a,{to:"/item-entry"}))))},L=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={items:n.getItemsFromStorage(),updateItems:n.updateItems.bind(Object(m.a)(n)),algorithm:null,setAlgorithm:n.setAlgorithm.bind(Object(m.a)(n)),question:localStorage.getItem(f.b.question)||"",setQuestion:n.setQuestion.bind(Object(m.a)(n)),maxWeight:n.getMaxItems(),setMaxWeight:n.setMaxItems.bind(Object(m.a)(n))},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getItemsFromStorage",value:function(){var e=localStorage.getItem(f.b.items);return e?JSON.parse(e):[]}},{key:"updateItems",value:function(e){localStorage.setItem(f.b.items,JSON.stringify(e)),this.setState({items:e})}},{key:"setAlgorithm",value:function(e){this.setState({algorithm:e})}},{key:"setQuestion",value:function(e){localStorage.setItem(f.b.question,e),this.setState({question:e})}},{key:"setMaxItems",value:function(e){localStorage.setItem(f.b.maxItems,e.toString()),this.setState({maxWeight:e})}},{key:"getMaxItems",value:function(){var e=localStorage.getItem(f.b.maxItems);return!(!e||"false"===e)&&parseInt(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App container"},r.a.createElement("div",{className:"inner-container py-2"},r.a.createElement(f.c.Provider,{value:this.state},r.a.createElement(R,null))),r.a.createElement(d,null))}}]),t}(r.a.PureComponent);n(84),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(26);i.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[64,1,2]]]);
//# sourceMappingURL=main.2d597900.chunk.js.map