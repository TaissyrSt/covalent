function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{prFk:function(e,t,n){"use strict";n.r(t);var o,i,r,a=n("ofXK"),s=n("l09l"),c=n("tyNb"),l=n("fXoL"),u=n("MJ5V"),d=n("bTqV"),f=((o=function(){function e(t){_classCallCheck(this,e),this._markdownNavigatorWindowService=t,this.windowOpen=!1,this.oneItem=[{url:"https://github.com/Teradata/covalent/blob/develop/README.md"}],this.options=[{name:"One item",value:this.oneItem}],this.selected=this.options[0],this.currentItems=this.selected.value}return _createClass(e,[{key:"openDialog",value:function(){var e=this;this.windowOpen&&this.closeDialog(),this.ref=this._markdownNavigatorWindowService.open({items:this.currentItems}),this.ref.afterOpened().subscribe((function(){e.windowOpen=!0})),this.ref.afterClosed().subscribe((function(){e.windowOpen=!1}))}},{key:"closeDialog",value:function(){this.ref.close()}}]),e}()).\u0275fac=function(e){return new(e||o)(l.Tb(s.b))},o.\u0275cmp=l.Nb({type:o,selectors:[["markdown-navigator-demo-basic"]],decls:2,vars:0,consts:[["mat-raised-button","","color","primary",3,"click"]],template:function(e,t){1&e&&(l.Yb(0,"button",0),l.gc("click",(function(e){return t.openDialog()})),l.Qc(1,"\n  Open Markdown Navigator\n"),l.Xb())},directives:[d.b],styles:[""]}),o),p=[{path:"",component:(i=function e(){_classCallCheck(this,e)},i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=l.Nb({type:i,selectors:[["markdown-navigator-demo"]],decls:2,vars:1,consts:[[3,"demoId"]],template:function(e,t){1&e&&(l.Yb(0,"demo-component",0),l.Ub(1,"markdown-navigator-demo-basic"),l.Xb()),2&e&&l.qc("demoId","markdown-navigator-demo-basic")},directives:[u.a,f],styles:[""]}),i)}],m=((r=function e(){_classCallCheck(this,e)}).\u0275mod=l.Rb({type:r}),r.\u0275inj=l.Qb({factory:function(e){return new(e||r)},imports:[[c.f.forChild(p)],c.f]}),r),b=n("Krbs");n.d(t,"MarkdownNavigatorDemoModule",(function(){return w}));var h,w=((h=function e(){_classCallCheck(this,e)}).\u0275mod=l.Rb({type:h}),h.\u0275inj=l.Qb({factory:function(e){return new(e||h)},imports:[[b.a,m,s.a,a.c,d.c]]}),h)}}]);