!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(i=r.key,o=void 0,"symbol"==typeof(o=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"))?o:String(o)),r)}var i,o}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkargon_dashboard_pro_angular=self.webpackChunkargon_dashboard_pro_angular||[]).push([[696],{87696:function(e,r,i){"use strict";i.r(r),i.d(r,{AuthLayoutModule:function(){return h}});var o,Z,a=i(91543),g=i(38583),s=i(93092),c=i(92340),u=i(39063),d=i(25970),l=i(75040),p=i(45832),A=function(t){return{focused:t}},q=function(){var e=function(){function e(n,r,i,o,Z){t(this,e),this.authService=n,this.snackBar=r,this.router=i,this.alertservice=o,this.route=Z,this.username="",this.password="",this.lembrar=!1,console.log("production :"+c.N.production)}return n(e,[{key:"ngOnInit",value:function(){this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/produtos/pesquisar";var t=this.authService.stored_credentials();""!=t.user&&(this.username=t.user,this.password=t.pwd,this.lembrar=!0)}},{key:"login",value:function(){var t=this;return""==this.username.trim()?this.snackBar.Warning("Please insert a valid user!"):""==this.password.trim()?this.snackBar.Warning("Please insert a password!"):void this.authService.login(this.username,this.password).subscribe(function(e){t.snackBar.Success("Logged in!"),console.log(t.returnUrl),t.lembrar?t.authService.store_credentials(t.username,t.password):t.authService.remove_stored_credentials(),t.router.navigate([t.returnUrl])})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(l.Y36(u.e),l.Y36(p.c),l.Y36(a.F0),l.Y36(d.c),l.Y36(a.gz))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-login"]],decls:33,vars:9,consts:[[1,"main-content"],[1,"header","bg-gradient-danger","py-7","py-lg-8","pt-lg-9"],[1,"separator","separator-bottom","separator-skew","zindex-100"],["x","0","y","0","viewBox","0 0 2560 100","preserveAspectRatio","none","version","1.1","xmlns","http://www.w3.org/2000/svg"],["points","2560 0 2560 100 0 100",1,"fill-default"],[1,"container","mt--8","pb-5"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-7"],[1,"card","bg-secondary","border-0","mb-0"],[1,"card-header","bg-transparent","pb-5"],[1,"btn-wrapper","text-center"],["src","assets/img/ilha/logo1.png","width","200px"],[1,"card-body","px-lg-5","py-lg-5"],["role","form"],[1,"form-group","mb-3",3,"ngClass"],[1,"input-group","input-group-alternative"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"ni","ni-email-83"],["placeholder","Usu\xe1rio","type","text","name","user",1,"form-control",3,"ngModel","focus","blur","ngModelChange"],[1,"form-group",3,"ngClass"],[1,"ni","ni-lock-circle-open"],["placeholder","Senha","type","password","name","password",1,"form-control",3,"ngModel","focus","blur","ngModelChange"],[1,"custom-control","custom-checkbox","mb-3"],["id","customCheck1","type","checkbox",1,"custom-control-input",3,"ngModel","ngModelChange"],["for","customCheck1",1,"custom-control-label"],[1,"text-center"],["type","button",1,"btn","btn-primary","my-4","btn-block",3,"click"]],template:function(t,e){1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"div",2),l.O4$(),l.TgZ(3,"svg",3),l._UZ(4,"polygon",4),l.qZA(),l.qZA(),l.qZA(),l.kcU(),l.TgZ(5,"div",5),l.TgZ(6,"div",6),l.TgZ(7,"div",7),l.TgZ(8,"div",8),l.TgZ(9,"div",9),l.TgZ(10,"div",10),l._UZ(11,"img",11),l.qZA(),l.qZA(),l.TgZ(12,"div",12),l.TgZ(13,"form",13),l.TgZ(14,"div",14),l.TgZ(15,"div",15),l.TgZ(16,"div",16),l.TgZ(17,"span",17),l._UZ(18,"i",18),l.qZA(),l.qZA(),l.TgZ(19,"input",19),l.NdJ("focus",function(){return e.focus=!0})("blur",function(){return e.focus=!1})("ngModelChange",function(t){return e.username=t}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(20,"div",20),l.TgZ(21,"div",15),l.TgZ(22,"div",16),l.TgZ(23,"span",17),l._UZ(24,"i",21),l.qZA(),l.qZA(),l.TgZ(25,"input",22),l.NdJ("focus",function(){return e.focus1=!0})("blur",function(){return e.focus1=!1})("ngModelChange",function(t){return e.password=t}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(26,"div",23),l.TgZ(27,"input",24),l.NdJ("ngModelChange",function(t){return e.lembrar=t}),l.qZA(),l.TgZ(28,"label",25),l._uU(29," Lembrar "),l.qZA(),l.qZA(),l.TgZ(30,"div",26),l.TgZ(31,"button",27),l.NdJ("click",function(){return e.login()}),l._uU(32," Entrar "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&t&&(l.xp6(14),l.Q6J("ngClass",l.VKq(5,A,!0===e.focus)),l.xp6(5),l.Q6J("ngModel",e.username),l.xp6(1),l.Q6J("ngClass",l.VKq(7,A,!0===e.focus1)),l.xp6(5),l.Q6J("ngModel",e.password),l.xp6(2),l.Q6J("ngModel",e.lembrar))},directives:[s._Y,s.JL,s.F,g.mk,s.Fj,s.JJ,s.On,s.Wl],styles:[".main-content[_ngcontent-%COMP%] {\r\n    background-color: #ec268f !important\r\n}"]}),e}(),T=function(){var e=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-pricing"]],decls:173,vars:0,consts:[[1,"main-content"],[1,"header","bg-gradient-danger","py-7","py-lg-8","pt-lg-9"],[1,"container"],[1,"header-body","text-center","mb-7"],[1,"row","justify-content-center"],[1,"col-xl-5","col-lg-6","col-md-8","px-5"],[1,"text-white"],[1,"separator","separator-bottom","separator-skew","zindex-100"],["x","0","y","0","viewBox","0 0 2560 100","preserveAspectRatio","none","version","1.1","xmlns","http://www.w3.org/2000/svg"],["points","2560 0 2560 100 0 100",1,"fill-default"],[1,"container","mt--8","pb-5"],[1,"col-lg-10"],[1,"pricing","card-group","flex-column","flex-md-row","mb-3"],[1,"card","card-pricing","border-0","text-center","mb-4"],[1,"card-header","bg-transparent"],[1,"text-uppercase","ls-1","text-primary","py-3","mb-0"],[1,"card-body","px-lg-7"],[1,"display-2"],[1,"text-muted"],[1,"list-unstyled","my-4"],[1,"d-flex","align-items-center"],[1,"icon","icon-xs","icon-shape","bg-gradient-primary","shadow","rounded-circle","text-white"],[1,"fas","fa-terminal"],[1,"pl-2"],[1,"fas","fa-pen-fancy"],[1,"fas","fa-hdd"],["type","button",1,"btn","btn-primary","mb-3"],[1,"card-footer"],["href","javascript:void(0)",1,"text-light"],[1,"card","card-pricing","bg-gradient-success","zoom-in","shadow-lg","rounded","border-0","text-center","mb-4"],[1,"text-uppercase","ls-1","text-white","py-3","mb-0"],[1,"display-1","text-white"],[1,"icon","icon-xs","icon-shape","bg-white","shadow","rounded-circle","text-muted"],[1,"pl-2","text-white"],["type","button",1,"btn","btn-secondary","mb-3"],[1,"card-footer","bg-transparent"],["href","javascript:void(0)",1,"text-white"],[1,"d-flex","justify-content-lg-center","px-3","mt-5"],[1,"icon","icon-shape","bg-gradient-white","shadow","rounded-circle","text-primary"],[1,"ni","ni-building","text-primary"],[1,"col-lg-6"],[1,"row","row-grid","justify-content-center"],[1,"table-responsive"],[1,"table","table-dark","mt-5"],["scope","col",1,"px-0","bg-transparent"],[1,"text-light","font-weight-700"],["scope","col",1,"text-center","bg-transparent"],[1,"px-0"],[1,"text-center"],[1,"fas","fa-check","text-success"],[1,"text-sm","text-light"]],template:function(t,e){1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"div",2),l.TgZ(3,"div",3),l.TgZ(4,"div",4),l.TgZ(5,"div",5),l.TgZ(6,"h1",6),l._uU(7,"Choose the best plan for your business"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(8,"div",7),l.O4$(),l.TgZ(9,"svg",8),l._UZ(10,"polygon",9),l.qZA(),l.qZA(),l.qZA(),l.kcU(),l.TgZ(11,"div",10),l.TgZ(12,"div",4),l.TgZ(13,"div",11),l.TgZ(14,"div",12),l.TgZ(15,"div",13),l.TgZ(16,"div",14),l.TgZ(17,"h4",15),l._uU(18," Bravo pack "),l.qZA(),l.qZA(),l.TgZ(19,"div",16),l.TgZ(20,"div",17),l._uU(21,"$49"),l.qZA(),l.TgZ(22,"span",18),l._uU(23," per application "),l.qZA(),l.TgZ(24,"ul",19),l.TgZ(25,"li"),l.TgZ(26,"div",20),l.TgZ(27,"div"),l.TgZ(28,"div",21),l._UZ(29,"i",22),l.qZA(),l.qZA(),l.TgZ(30,"div"),l.TgZ(31,"span",23),l._uU(32," Complete documentation "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(33,"li"),l.TgZ(34,"div",20),l.TgZ(35,"div"),l.TgZ(36,"div",21),l._UZ(37,"i",24),l.qZA(),l.qZA(),l.TgZ(38,"div"),l.TgZ(39,"span",23),l._uU(40," Working materials in Sketch "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(41,"li"),l.TgZ(42,"div",20),l.TgZ(43,"div"),l.TgZ(44,"div",21),l._UZ(45,"i",25),l.qZA(),l.qZA(),l.TgZ(46,"div"),l.TgZ(47,"span",23),l._uU(48," 2GB cloud storage "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(49,"button",26),l._uU(50," Start free trial "),l.qZA(),l.qZA(),l.TgZ(51,"div",27),l.TgZ(52,"a",28),l._uU(53," Request a demo "),l.qZA(),l.qZA(),l.qZA(),l.TgZ(54,"div",29),l.TgZ(55,"div",14),l.TgZ(56,"h4",30),l._uU(57," Alpha pack "),l.qZA(),l.qZA(),l.TgZ(58,"div",16),l.TgZ(59,"div",31),l._uU(60,"$199"),l.qZA(),l.TgZ(61,"span",6),l._uU(62," per application "),l.qZA(),l.TgZ(63,"ul",19),l.TgZ(64,"li"),l.TgZ(65,"div",20),l.TgZ(66,"div"),l.TgZ(67,"div",32),l._UZ(68,"i",22),l.qZA(),l.qZA(),l.TgZ(69,"div"),l.TgZ(70,"span",33),l._uU(71," Complete documentation "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(72,"li"),l.TgZ(73,"div",20),l.TgZ(74,"div"),l.TgZ(75,"div",32),l._UZ(76,"i",24),l.qZA(),l.qZA(),l.TgZ(77,"div"),l.TgZ(78,"span",33),l._uU(79," Working materials in Sketch "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(80,"li"),l.TgZ(81,"div",20),l.TgZ(82,"div"),l.TgZ(83,"div",32),l._UZ(84,"i",25),l.qZA(),l.qZA(),l.TgZ(85,"div"),l.TgZ(86,"span",33),l._uU(87," 2GB cloud storage "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(88,"button",34),l._uU(89," Start free trial "),l.qZA(),l.qZA(),l.TgZ(90,"div",35),l.TgZ(91,"a",36),l._uU(92," Contact sales "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(93,"div",37),l.TgZ(94,"div"),l.TgZ(95,"div",38),l._UZ(96,"i",39),l.qZA(),l.qZA(),l.TgZ(97,"div",40),l.TgZ(98,"p",6),l.TgZ(99,"strong"),l._uU(100," The Arctic Ocean "),l.qZA(),l._uU(101," freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever. "),l.qZA(),l.qZA(),l.qZA(),l.TgZ(102,"div",41),l.TgZ(103,"div",11),l.TgZ(104,"div",42),l.TgZ(105,"table",43),l.TgZ(106,"thead"),l.TgZ(107,"tr"),l.TgZ(108,"th",44),l.TgZ(109,"span",45),l._uU(110," Features "),l.qZA(),l.qZA(),l.TgZ(111,"th",46),l._uU(112," Bravo Pack "),l.qZA(),l.TgZ(113,"th",46),l._uU(114," Alpha Pack "),l.qZA(),l.qZA(),l.qZA(),l.TgZ(115,"tbody"),l.TgZ(116,"tr"),l.TgZ(117,"td",47),l._uU(118,"IMAP/POP Support"),l.qZA(),l.TgZ(119,"td",48),l._UZ(120,"i",49),l.qZA(),l.TgZ(121,"td",48),l._UZ(122,"i",49),l.qZA(),l.qZA(),l.TgZ(123,"tr"),l.TgZ(124,"td",47),l._uU(125,"Email Forwarding"),l.qZA(),l.TgZ(126,"td",48),l._UZ(127,"i",49),l.qZA(),l.TgZ(128,"td",48),l._UZ(129,"i",49),l.qZA(),l.qZA(),l.TgZ(130,"tr"),l.TgZ(131,"td",47),l._uU(132,"Active Sync"),l.qZA(),l.TgZ(133,"td",48),l._UZ(134,"i",49),l.qZA(),l.TgZ(135,"td",48),l._UZ(136,"i",49),l.qZA(),l.qZA(),l.TgZ(137,"tr"),l.TgZ(138,"td",47),l._uU(139,"Multiple domain hosting"),l.qZA(),l.TgZ(140,"td",48),l._UZ(141,"i",49),l.qZA(),l.TgZ(142,"td",48),l.TgZ(143,"span",50),l._uU(144," Limited to 1 domain only "),l.qZA(),l.qZA(),l.qZA(),l.TgZ(145,"tr"),l.TgZ(146,"td",47),l._uU(147,"Additional storage upgrade"),l.qZA(),l.TgZ(148,"td",48),l._UZ(149,"i",49),l.qZA(),l.TgZ(150,"td",48),l._UZ(151,"i",49),l.qZA(),l.qZA(),l.TgZ(152,"tr"),l.TgZ(153,"td",47),l._uU(154,"30MB Attachment Limit"),l.qZA(),l.TgZ(155,"td",48),l._UZ(156,"i",49),l.qZA(),l.TgZ(157,"td",48),l._uU(158,"-"),l.qZA(),l.qZA(),l.TgZ(159,"tr"),l.TgZ(160,"td",47),l._uU(161,"Password protected / Expiry links"),l.qZA(),l.TgZ(162,"td",48),l._UZ(163,"i",49),l.qZA(),l.TgZ(164,"td",48),l._uU(165,"-"),l.qZA(),l.qZA(),l.TgZ(166,"tr"),l.TgZ(167,"td",47),l._uU(168,"Unlimited Custom Apps"),l.qZA(),l.TgZ(169,"td",48),l._UZ(170,"i",49),l.qZA(),l.TgZ(171,"td",48),l._uU(172,"-"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA())},encapsulation:2}),e}(),v=function(t){return{focused:t}},m=function(){var e=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-register"]],decls:72,vars:9,consts:[[1,"main-content"],[1,"header","bg-gradient-danger","py-7","py-lg-8","pt-lg-9"],[1,"container"],[1,"header-body","text-center","mb-7"],[1,"row","justify-content-center"],[1,"col-xl-5","col-lg-6","col-md-8","px-5"],[1,"text-white"],[1,"text-lead","text-white"],[1,"separator","separator-bottom","separator-skew","zindex-100"],["x","0","y","0","viewBox","0 0 2560 100","preserveAspectRatio","none","version","1.1","xmlns","http://www.w3.org/2000/svg"],["points","2560 0 2560 100 0 100",1,"fill-default"],[1,"container","mt--8","pb-5"],[1,"col-lg-6","col-md-8"],[1,"card","bg-secondary","border-0"],[1,"card-header","bg-transparent","pb-5"],[1,"text-muted","text-center","mt-2","mb-4"],[1,"text-center"],["href","javascript:void(0)",1,"btn","btn-neutral","btn-icon","mr-4"],[1,"btn-inner--icon"],["src","assets/img/icons/common/github.svg"],[1,"btn-inner--text"],["href","javascript:void(0)",1,"btn","btn-neutral","btn-icon"],["src","assets/img/icons/common/google.svg"],[1,"card-body","px-lg-5","py-lg-5"],[1,"text-center","text-muted","mb-4"],["role","form"],[1,"form-group",3,"ngClass"],[1,"input-group","input-group-alternative","mb-3"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"ni","ni-hat-3"],["placeholder","Name","type","text",1,"form-control",3,"focus","blur"],[1,"ni","ni-email-83"],["placeholder","Email","type","email",1,"form-control",3,"focus","blur"],[1,"input-group","input-group-alternative"],[1,"ni","ni-lock-circle-open"],["placeholder","Password","type","password",1,"form-control",3,"focus","blur"],[1,"text-muted","font-italic"],[1,"text-success","font-weight-700"],[1,"row","my-4"],[1,"col-12"],[1,"custom-control","custom-control-alternative","custom-checkbox"],["id","customCheckRegister","type","checkbox",1,"custom-control-input"],["for","customCheckRegister",1,"custom-control-label"],["href","javascript:void(0)"],["type","button",1,"btn","btn-primary","mt-4"]],template:function(t,e){1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"div",2),l.TgZ(3,"div",3),l.TgZ(4,"div",4),l.TgZ(5,"div",5),l.TgZ(6,"h1",6),l._uU(7,"Create an account"),l.qZA(),l.TgZ(8,"p",7),l._uU(9," Use these awesome forms to login or create new account in your project for free. "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(10,"div",8),l.O4$(),l.TgZ(11,"svg",9),l._UZ(12,"polygon",10),l.qZA(),l.qZA(),l.qZA(),l.kcU(),l.TgZ(13,"div",11),l.TgZ(14,"div",4),l.TgZ(15,"div",12),l.TgZ(16,"div",13),l.TgZ(17,"div",14),l.TgZ(18,"div",15),l.TgZ(19,"small"),l._uU(20," Sign up with "),l.qZA(),l.qZA(),l.TgZ(21,"div",16),l.TgZ(22,"a",17),l.TgZ(23,"span",18),l._UZ(24,"img",19),l.qZA(),l.TgZ(25,"span",20),l._uU(26," Github "),l.qZA(),l.qZA(),l.TgZ(27,"a",21),l.TgZ(28,"span",18),l._UZ(29,"img",22),l.qZA(),l.TgZ(30,"span",20),l._uU(31," Google "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(32,"div",23),l.TgZ(33,"div",24),l.TgZ(34,"small"),l._uU(35," Or sign up with credentials "),l.qZA(),l.qZA(),l.TgZ(36,"form",25),l.TgZ(37,"div",26),l.TgZ(38,"div",27),l.TgZ(39,"div",28),l.TgZ(40,"span",29),l._UZ(41,"i",30),l.qZA(),l.qZA(),l.TgZ(42,"input",31),l.NdJ("focus",function(){return e.focus=!0})("blur",function(){return e.focus=!1}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(43,"div",26),l.TgZ(44,"div",27),l.TgZ(45,"div",28),l.TgZ(46,"span",29),l._UZ(47,"i",32),l.qZA(),l.qZA(),l.TgZ(48,"input",33),l.NdJ("focus",function(){return e.focus1=!0})("blur",function(){return e.focus1=!1}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(49,"div",26),l.TgZ(50,"div",34),l.TgZ(51,"div",28),l.TgZ(52,"span",29),l._UZ(53,"i",35),l.qZA(),l.qZA(),l.TgZ(54,"input",36),l.NdJ("focus",function(){return e.focus2=!0})("blur",function(){return e.focus2=!1}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(55,"div",37),l.TgZ(56,"small"),l._uU(57,"password strength: "),l.TgZ(58,"span",38),l._uU(59,"strong"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(60,"div",39),l.TgZ(61,"div",40),l.TgZ(62,"div",41),l._UZ(63,"input",42),l.TgZ(64,"label",43),l.TgZ(65,"span"),l._uU(66,"I agree with the "),l.TgZ(67,"a",44),l._uU(68,"Privacy Policy"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(69,"div",16),l.TgZ(70,"button",45),l._uU(71," Create account "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&t&&(l.xp6(37),l.Q6J("ngClass",l.VKq(3,v,!0===e.focus)),l.xp6(6),l.Q6J("ngClass",l.VKq(5,v,!0===e.focus1)),l.xp6(6),l.Q6J("ngClass",l.VKq(7,v,!0===e.focus2)))},directives:[s._Y,s.JL,s.F,g.mk],encapsulation:2}),e}(),f=[{path:"",children:[{path:"login",component:q}]},{path:"",children:[{path:"logout",component:(o=function(){function e(n){t(this,e),this.authService=n}return n(e,[{key:"ngOnInit",value:function(){this.authService.logout()}}]),e}(),o.\u0275fac=function(t){return new(t||o)(l.Y36(u.e))},o.\u0275cmp=l.Xpm({type:o,selectors:[["app-logout"]],decls:2,vars:0,template:function(t,e){1&t&&(l.TgZ(0,"p"),l._uU(1,"logout works!"),l.qZA())},styles:[""]}),o)}]},{path:"",children:[{path:"register",component:m}]},{path:"",children:[{path:"pricing",component:T}]}],h=((Z=n(function e(){t(this,e)})).\u0275fac=function(t){return new(t||Z)},Z.\u0275mod=l.oAB({type:Z}),Z.\u0275inj=l.cJS({imports:[[g.ez,a.Bz.forChild(f),s.u5]]}),Z)}}])}();