(self.webpackChunkargon_dashboard_pro_angular=self.webpackChunkargon_dashboard_pro_angular||[]).push([[696],{87696:function(t,e,r){"use strict";r.r(e),r.d(e,{AuthLayoutModule:function(){return T}});var n=r(91543),i=r(38583),o=r(93092),Z=r(92340),s=r(39063),g=r(25970),a=r(75040),c=r(45832);const d=function(t){return{focused:t}};let u=(()=>{class t{constructor(t,e,r,n,i){this.authService=t,this.snackBar=e,this.router=r,this.alertservice=n,this.route=i,this.username="",this.password="",this.lembrar=!1,console.log("production :"+Z.N.production)}ngOnInit(){this.returnUrl=this.route.snapshot.queryParams.returnUrl||"produtos/novo";var t=this.authService.stored_credentials();""!=t.user&&(this.username=t.user,this.password=t.pwd,this.lembrar=!0)}login(){return""==this.username.trim()?this.snackBar.Warning("Please insert a valid user!"):""==this.password.trim()?this.snackBar.Warning("Please insert a password!"):void this.authService.login(this.username,this.password).subscribe(t=>{this.snackBar.Success("Logged in!"),console.log(this.returnUrl),this.lembrar?this.authService.store_credentials(this.username,this.password):this.authService.remove_stored_credentials(),this.router.navigate([this.returnUrl])})}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(s.e),a.Y36(c.c),a.Y36(n.F0),a.Y36(g.c),a.Y36(n.gz))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-login"]],decls:33,vars:9,consts:[[1,"main-content"],[1,"header","bg-gradient-danger","py-7","py-lg-8","pt-lg-9"],[1,"separator","separator-bottom","separator-skew","zindex-100"],["x","0","y","0","viewBox","0 0 2560 100","preserveAspectRatio","none","version","1.1","xmlns","http://www.w3.org/2000/svg"],["points","2560 0 2560 100 0 100",1,"fill-default"],[1,"container","mt--8","pb-5"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-7"],[1,"card","bg-secondary","border-0","mb-0"],[1,"card-header","bg-transparent","pb-5"],[1,"btn-wrapper","text-center"],["src","assets/img/ilha/logo1.png","width","200px"],[1,"card-body","px-lg-5","py-lg-5"],["role","form"],[1,"form-group","mb-3",3,"ngClass"],[1,"input-group","input-group-alternative"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"ni","ni-email-83"],["placeholder","Usu\xe1rio","type","text","name","user",1,"form-control",3,"ngModel","focus","blur","ngModelChange"],[1,"form-group",3,"ngClass"],[1,"ni","ni-lock-circle-open"],["placeholder","Senha","type","password","name","password",1,"form-control",3,"ngModel","focus","blur","ngModelChange"],[1,"custom-control","custom-checkbox","mb-3"],["id","customCheck1","type","checkbox",1,"custom-control-input",3,"ngModel","ngModelChange"],["for","customCheck1",1,"custom-control-label"],[1,"text-center"],["type","button",1,"btn","btn-primary","my-4","btn-block",3,"click"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.O4$(),a.TgZ(3,"svg",3),a._UZ(4,"polygon",4),a.qZA(),a.qZA(),a.qZA(),a.kcU(),a.TgZ(5,"div",5),a.TgZ(6,"div",6),a.TgZ(7,"div",7),a.TgZ(8,"div",8),a.TgZ(9,"div",9),a.TgZ(10,"div",10),a._UZ(11,"img",11),a.qZA(),a.qZA(),a.TgZ(12,"div",12),a.TgZ(13,"form",13),a.TgZ(14,"div",14),a.TgZ(15,"div",15),a.TgZ(16,"div",16),a.TgZ(17,"span",17),a._UZ(18,"i",18),a.qZA(),a.qZA(),a.TgZ(19,"input",19),a.NdJ("focus",function(){return e.focus=!0})("blur",function(){return e.focus=!1})("ngModelChange",function(t){return e.username=t}),a.qZA(),a.qZA(),a.qZA(),a.TgZ(20,"div",20),a.TgZ(21,"div",15),a.TgZ(22,"div",16),a.TgZ(23,"span",17),a._UZ(24,"i",21),a.qZA(),a.qZA(),a.TgZ(25,"input",22),a.NdJ("focus",function(){return e.focus1=!0})("blur",function(){return e.focus1=!1})("ngModelChange",function(t){return e.password=t}),a.qZA(),a.qZA(),a.qZA(),a.TgZ(26,"div",23),a.TgZ(27,"input",24),a.NdJ("ngModelChange",function(t){return e.lembrar=t}),a.qZA(),a.TgZ(28,"label",25),a._uU(29," Lembrar "),a.qZA(),a.qZA(),a.TgZ(30,"div",26),a.TgZ(31,"button",27),a.NdJ("click",function(){return e.login()}),a._uU(32," Entrar "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(14),a.Q6J("ngClass",a.VKq(5,d,!0===e.focus)),a.xp6(5),a.Q6J("ngModel",e.username),a.xp6(1),a.Q6J("ngClass",a.VKq(7,d,!0===e.focus1)),a.xp6(5),a.Q6J("ngModel",e.password),a.xp6(2),a.Q6J("ngModel",e.lembrar))},directives:[o._Y,o.JL,o.F,i.mk,o.Fj,o.JJ,o.On,o.Wl],styles:[".main-content[_ngcontent-%COMP%]{background-color:#ec268f!important}"]}),t})(),l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-pricing"]],decls:173,vars:0,consts:[[1,"main-content"],[1,"header","bg-gradient-danger","py-7","py-lg-8","pt-lg-9"],[1,"container"],[1,"header-body","text-center","mb-7"],[1,"row","justify-content-center"],[1,"col-xl-5","col-lg-6","col-md-8","px-5"],[1,"text-white"],[1,"separator","separator-bottom","separator-skew","zindex-100"],["x","0","y","0","viewBox","0 0 2560 100","preserveAspectRatio","none","version","1.1","xmlns","http://www.w3.org/2000/svg"],["points","2560 0 2560 100 0 100",1,"fill-default"],[1,"container","mt--8","pb-5"],[1,"col-lg-10"],[1,"pricing","card-group","flex-column","flex-md-row","mb-3"],[1,"card","card-pricing","border-0","text-center","mb-4"],[1,"card-header","bg-transparent"],[1,"text-uppercase","ls-1","text-primary","py-3","mb-0"],[1,"card-body","px-lg-7"],[1,"display-2"],[1,"text-muted"],[1,"list-unstyled","my-4"],[1,"d-flex","align-items-center"],[1,"icon","icon-xs","icon-shape","bg-gradient-primary","shadow","rounded-circle","text-white"],[1,"fas","fa-terminal"],[1,"pl-2"],[1,"fas","fa-pen-fancy"],[1,"fas","fa-hdd"],["type","button",1,"btn","btn-primary","mb-3"],[1,"card-footer"],["href","javascript:void(0)",1,"text-light"],[1,"card","card-pricing","bg-gradient-success","zoom-in","shadow-lg","rounded","border-0","text-center","mb-4"],[1,"text-uppercase","ls-1","text-white","py-3","mb-0"],[1,"display-1","text-white"],[1,"icon","icon-xs","icon-shape","bg-white","shadow","rounded-circle","text-muted"],[1,"pl-2","text-white"],["type","button",1,"btn","btn-secondary","mb-3"],[1,"card-footer","bg-transparent"],["href","javascript:void(0)",1,"text-white"],[1,"d-flex","justify-content-lg-center","px-3","mt-5"],[1,"icon","icon-shape","bg-gradient-white","shadow","rounded-circle","text-primary"],[1,"ni","ni-building","text-primary"],[1,"col-lg-6"],[1,"row","row-grid","justify-content-center"],[1,"table-responsive"],[1,"table","table-dark","mt-5"],["scope","col",1,"px-0","bg-transparent"],[1,"text-light","font-weight-700"],["scope","col",1,"text-center","bg-transparent"],[1,"px-0"],[1,"text-center"],[1,"fas","fa-check","text-success"],[1,"text-sm","text-light"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"div",3),a.TgZ(4,"div",4),a.TgZ(5,"div",5),a.TgZ(6,"h1",6),a._uU(7,"Choose the best plan for your business"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(8,"div",7),a.O4$(),a.TgZ(9,"svg",8),a._UZ(10,"polygon",9),a.qZA(),a.qZA(),a.qZA(),a.kcU(),a.TgZ(11,"div",10),a.TgZ(12,"div",4),a.TgZ(13,"div",11),a.TgZ(14,"div",12),a.TgZ(15,"div",13),a.TgZ(16,"div",14),a.TgZ(17,"h4",15),a._uU(18," Bravo pack "),a.qZA(),a.qZA(),a.TgZ(19,"div",16),a.TgZ(20,"div",17),a._uU(21,"$49"),a.qZA(),a.TgZ(22,"span",18),a._uU(23," per application "),a.qZA(),a.TgZ(24,"ul",19),a.TgZ(25,"li"),a.TgZ(26,"div",20),a.TgZ(27,"div"),a.TgZ(28,"div",21),a._UZ(29,"i",22),a.qZA(),a.qZA(),a.TgZ(30,"div"),a.TgZ(31,"span",23),a._uU(32," Complete documentation "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(33,"li"),a.TgZ(34,"div",20),a.TgZ(35,"div"),a.TgZ(36,"div",21),a._UZ(37,"i",24),a.qZA(),a.qZA(),a.TgZ(38,"div"),a.TgZ(39,"span",23),a._uU(40," Working materials in Sketch "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(41,"li"),a.TgZ(42,"div",20),a.TgZ(43,"div"),a.TgZ(44,"div",21),a._UZ(45,"i",25),a.qZA(),a.qZA(),a.TgZ(46,"div"),a.TgZ(47,"span",23),a._uU(48," 2GB cloud storage "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(49,"button",26),a._uU(50," Start free trial "),a.qZA(),a.qZA(),a.TgZ(51,"div",27),a.TgZ(52,"a",28),a._uU(53," Request a demo "),a.qZA(),a.qZA(),a.qZA(),a.TgZ(54,"div",29),a.TgZ(55,"div",14),a.TgZ(56,"h4",30),a._uU(57," Alpha pack "),a.qZA(),a.qZA(),a.TgZ(58,"div",16),a.TgZ(59,"div",31),a._uU(60,"$199"),a.qZA(),a.TgZ(61,"span",6),a._uU(62," per application "),a.qZA(),a.TgZ(63,"ul",19),a.TgZ(64,"li"),a.TgZ(65,"div",20),a.TgZ(66,"div"),a.TgZ(67,"div",32),a._UZ(68,"i",22),a.qZA(),a.qZA(),a.TgZ(69,"div"),a.TgZ(70,"span",33),a._uU(71," Complete documentation "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(72,"li"),a.TgZ(73,"div",20),a.TgZ(74,"div"),a.TgZ(75,"div",32),a._UZ(76,"i",24),a.qZA(),a.qZA(),a.TgZ(77,"div"),a.TgZ(78,"span",33),a._uU(79," Working materials in Sketch "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(80,"li"),a.TgZ(81,"div",20),a.TgZ(82,"div"),a.TgZ(83,"div",32),a._UZ(84,"i",25),a.qZA(),a.qZA(),a.TgZ(85,"div"),a.TgZ(86,"span",33),a._uU(87," 2GB cloud storage "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(88,"button",34),a._uU(89," Start free trial "),a.qZA(),a.qZA(),a.TgZ(90,"div",35),a.TgZ(91,"a",36),a._uU(92," Contact sales "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(93,"div",37),a.TgZ(94,"div"),a.TgZ(95,"div",38),a._UZ(96,"i",39),a.qZA(),a.qZA(),a.TgZ(97,"div",40),a.TgZ(98,"p",6),a.TgZ(99,"strong"),a._uU(100," The Arctic Ocean "),a.qZA(),a._uU(101," freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever. "),a.qZA(),a.qZA(),a.qZA(),a.TgZ(102,"div",41),a.TgZ(103,"div",11),a.TgZ(104,"div",42),a.TgZ(105,"table",43),a.TgZ(106,"thead"),a.TgZ(107,"tr"),a.TgZ(108,"th",44),a.TgZ(109,"span",45),a._uU(110," Features "),a.qZA(),a.qZA(),a.TgZ(111,"th",46),a._uU(112," Bravo Pack "),a.qZA(),a.TgZ(113,"th",46),a._uU(114," Alpha Pack "),a.qZA(),a.qZA(),a.qZA(),a.TgZ(115,"tbody"),a.TgZ(116,"tr"),a.TgZ(117,"td",47),a._uU(118,"IMAP/POP Support"),a.qZA(),a.TgZ(119,"td",48),a._UZ(120,"i",49),a.qZA(),a.TgZ(121,"td",48),a._UZ(122,"i",49),a.qZA(),a.qZA(),a.TgZ(123,"tr"),a.TgZ(124,"td",47),a._uU(125,"Email Forwarding"),a.qZA(),a.TgZ(126,"td",48),a._UZ(127,"i",49),a.qZA(),a.TgZ(128,"td",48),a._UZ(129,"i",49),a.qZA(),a.qZA(),a.TgZ(130,"tr"),a.TgZ(131,"td",47),a._uU(132,"Active Sync"),a.qZA(),a.TgZ(133,"td",48),a._UZ(134,"i",49),a.qZA(),a.TgZ(135,"td",48),a._UZ(136,"i",49),a.qZA(),a.qZA(),a.TgZ(137,"tr"),a.TgZ(138,"td",47),a._uU(139,"Multiple domain hosting"),a.qZA(),a.TgZ(140,"td",48),a._UZ(141,"i",49),a.qZA(),a.TgZ(142,"td",48),a.TgZ(143,"span",50),a._uU(144," Limited to 1 domain only "),a.qZA(),a.qZA(),a.qZA(),a.TgZ(145,"tr"),a.TgZ(146,"td",47),a._uU(147,"Additional storage upgrade"),a.qZA(),a.TgZ(148,"td",48),a._UZ(149,"i",49),a.qZA(),a.TgZ(150,"td",48),a._UZ(151,"i",49),a.qZA(),a.qZA(),a.TgZ(152,"tr"),a.TgZ(153,"td",47),a._uU(154,"30MB Attachment Limit"),a.qZA(),a.TgZ(155,"td",48),a._UZ(156,"i",49),a.qZA(),a.TgZ(157,"td",48),a._uU(158,"-"),a.qZA(),a.qZA(),a.TgZ(159,"tr"),a.TgZ(160,"td",47),a._uU(161,"Password protected / Expiry links"),a.qZA(),a.TgZ(162,"td",48),a._UZ(163,"i",49),a.qZA(),a.TgZ(164,"td",48),a._uU(165,"-"),a.qZA(),a.qZA(),a.TgZ(166,"tr"),a.TgZ(167,"td",47),a._uU(168,"Unlimited Custom Apps"),a.qZA(),a.TgZ(169,"td",48),a._UZ(170,"i",49),a.qZA(),a.TgZ(171,"td",48),a._uU(172,"-"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA())},encapsulation:2}),t})();const p=function(t){return{focused:t}};let A=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-register"]],decls:72,vars:9,consts:[[1,"main-content"],[1,"header","bg-gradient-danger","py-7","py-lg-8","pt-lg-9"],[1,"container"],[1,"header-body","text-center","mb-7"],[1,"row","justify-content-center"],[1,"col-xl-5","col-lg-6","col-md-8","px-5"],[1,"text-white"],[1,"text-lead","text-white"],[1,"separator","separator-bottom","separator-skew","zindex-100"],["x","0","y","0","viewBox","0 0 2560 100","preserveAspectRatio","none","version","1.1","xmlns","http://www.w3.org/2000/svg"],["points","2560 0 2560 100 0 100",1,"fill-default"],[1,"container","mt--8","pb-5"],[1,"col-lg-6","col-md-8"],[1,"card","bg-secondary","border-0"],[1,"card-header","bg-transparent","pb-5"],[1,"text-muted","text-center","mt-2","mb-4"],[1,"text-center"],["href","javascript:void(0)",1,"btn","btn-neutral","btn-icon","mr-4"],[1,"btn-inner--icon"],["src","assets/img/icons/common/github.svg"],[1,"btn-inner--text"],["href","javascript:void(0)",1,"btn","btn-neutral","btn-icon"],["src","assets/img/icons/common/google.svg"],[1,"card-body","px-lg-5","py-lg-5"],[1,"text-center","text-muted","mb-4"],["role","form"],[1,"form-group",3,"ngClass"],[1,"input-group","input-group-alternative","mb-3"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"ni","ni-hat-3"],["placeholder","Name","type","text",1,"form-control",3,"focus","blur"],[1,"ni","ni-email-83"],["placeholder","Email","type","email",1,"form-control",3,"focus","blur"],[1,"input-group","input-group-alternative"],[1,"ni","ni-lock-circle-open"],["placeholder","Password","type","password",1,"form-control",3,"focus","blur"],[1,"text-muted","font-italic"],[1,"text-success","font-weight-700"],[1,"row","my-4"],[1,"col-12"],[1,"custom-control","custom-control-alternative","custom-checkbox"],["id","customCheckRegister","type","checkbox",1,"custom-control-input"],["for","customCheckRegister",1,"custom-control-label"],["href","javascript:void(0)"],["type","button",1,"btn","btn-primary","mt-4"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"div",3),a.TgZ(4,"div",4),a.TgZ(5,"div",5),a.TgZ(6,"h1",6),a._uU(7,"Create an account"),a.qZA(),a.TgZ(8,"p",7),a._uU(9," Use these awesome forms to login or create new account in your project for free. "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(10,"div",8),a.O4$(),a.TgZ(11,"svg",9),a._UZ(12,"polygon",10),a.qZA(),a.qZA(),a.qZA(),a.kcU(),a.TgZ(13,"div",11),a.TgZ(14,"div",4),a.TgZ(15,"div",12),a.TgZ(16,"div",13),a.TgZ(17,"div",14),a.TgZ(18,"div",15),a.TgZ(19,"small"),a._uU(20," Sign up with "),a.qZA(),a.qZA(),a.TgZ(21,"div",16),a.TgZ(22,"a",17),a.TgZ(23,"span",18),a._UZ(24,"img",19),a.qZA(),a.TgZ(25,"span",20),a._uU(26," Github "),a.qZA(),a.qZA(),a.TgZ(27,"a",21),a.TgZ(28,"span",18),a._UZ(29,"img",22),a.qZA(),a.TgZ(30,"span",20),a._uU(31," Google "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(32,"div",23),a.TgZ(33,"div",24),a.TgZ(34,"small"),a._uU(35," Or sign up with credentials "),a.qZA(),a.qZA(),a.TgZ(36,"form",25),a.TgZ(37,"div",26),a.TgZ(38,"div",27),a.TgZ(39,"div",28),a.TgZ(40,"span",29),a._UZ(41,"i",30),a.qZA(),a.qZA(),a.TgZ(42,"input",31),a.NdJ("focus",function(){return e.focus=!0})("blur",function(){return e.focus=!1}),a.qZA(),a.qZA(),a.qZA(),a.TgZ(43,"div",26),a.TgZ(44,"div",27),a.TgZ(45,"div",28),a.TgZ(46,"span",29),a._UZ(47,"i",32),a.qZA(),a.qZA(),a.TgZ(48,"input",33),a.NdJ("focus",function(){return e.focus1=!0})("blur",function(){return e.focus1=!1}),a.qZA(),a.qZA(),a.qZA(),a.TgZ(49,"div",26),a.TgZ(50,"div",34),a.TgZ(51,"div",28),a.TgZ(52,"span",29),a._UZ(53,"i",35),a.qZA(),a.qZA(),a.TgZ(54,"input",36),a.NdJ("focus",function(){return e.focus2=!0})("blur",function(){return e.focus2=!1}),a.qZA(),a.qZA(),a.qZA(),a.TgZ(55,"div",37),a.TgZ(56,"small"),a._uU(57,"password strength: "),a.TgZ(58,"span",38),a._uU(59,"strong"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(60,"div",39),a.TgZ(61,"div",40),a.TgZ(62,"div",41),a._UZ(63,"input",42),a.TgZ(64,"label",43),a.TgZ(65,"span"),a._uU(66,"I agree with the "),a.TgZ(67,"a",44),a._uU(68,"Privacy Policy"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(69,"div",16),a.TgZ(70,"button",45),a._uU(71," Create account "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(37),a.Q6J("ngClass",a.VKq(3,p,!0===e.focus)),a.xp6(6),a.Q6J("ngClass",a.VKq(5,p,!0===e.focus1)),a.xp6(6),a.Q6J("ngClass",a.VKq(7,p,!0===e.focus2)))},directives:[o._Y,o.JL,o.F,i.mk],encapsulation:2}),t})();const q=[{path:"",children:[{path:"login",component:u}]},{path:"",children:[{path:"logout",component:(()=>{class t{constructor(t){this.authService=t}ngOnInit(){this.authService.logout()}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(s.e))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-logout"]],decls:2,vars:0,template:function(t,e){1&t&&(a.TgZ(0,"p"),a._uU(1,"logout works!"),a.qZA())},styles:[""]}),t})()}]},{path:"",children:[{path:"register",component:A}]},{path:"",children:[{path:"pricing",component:l}]}];let T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[i.ez,n.Bz.forChild(q),o.u5]]}),t})()}}]);