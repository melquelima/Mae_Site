!function(){function Z(Z,i){if(!(Z instanceof i))throw new TypeError("Cannot call a class as a function")}function i(Z,i){for(var t=0;t<i.length;t++){var a=i[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(Z,(e=a.key,n=void 0,"symbol"==typeof(n=function(Z,i){if("object"!=typeof Z||null===Z)return Z;var t=Z[Symbol.toPrimitive];if(void 0!==t){var a=t.call(Z,i||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(Z)}(e,"string"))?n:String(n)),a)}var e,n}function t(Z,t,a){return t&&i(Z.prototype,t),a&&i(Z,a),Object.defineProperty(Z,"prototype",{writable:!1}),Z}(self.webpackChunkargon_dashboard_pro_angular=self.webpackChunkargon_dashboard_pro_angular||[]).push([[828],{29828:function(i,a,e){"use strict";e.r(a),e.d(a,{ChartsModule:function(){return v}});var n,r,d=e(38583),g=e(91543),o=e(6823),c=e.n(o),T=e(30235),A=e(75040),q=[{path:"",children:[{path:"",component:(n=function(){function i(){Z(this,i)}return t(i,[{key:"ngOnInit",value:function(){(0,T.I6)(c(),(0,T.q_)());var Z=document.getElementById("myChart");new(c())(Z,{type:"bar",data:T.mf.data,options:T.mf.options});var i=document.getElementById("chart-doughnut"),t=(new(c())(i,{type:"doughnut",data:T.FN.data,options:T.FN.options}),document.getElementById("chart-pie")),a=(new(c())(t,{type:"pie",data:T.mS.data,options:T.mS.options}),document.getElementById("chart-points")),e=(new(c())(a,{type:"line",data:T.OJ.data,options:T.OJ.options}),document.getElementById("chart-sales2")),n=(new(c())(e,{type:"line",data:T.Ug.data,options:T.Ug.options}),document.getElementById("chart-bars2"));new(c())(n,{type:"bar",data:T.pW.data})}}]),i}(),n.\u0275fac=function(Z){return new(Z||n)},n.\u0275cmp=A.Xpm({type:n,selectors:[["app-charts"]],decls:159,vars:0,consts:[[1,"header","bg-danger","pb-6"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"col-lg-6","col-7"],[1,"h2","text-white","d-inline-block","mb-0"],["aria-label","breadcrumb",1,"d-none","d-md-inline-block","ml-md-4"],[1,"breadcrumb","breadcrumb-links","breadcrumb-dark"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"fas","fa-home"],["aria-current","page",1,"breadcrumb-item","active"],[1,"col-lg-6","col-5","text-right"],["href","javascript:void(0)",1,"btn","btn-sm","btn-neutral"],[1,"row"],[1,"col-xl-3","col-md-6"],[1,"card","card-stats"],[1,"card-body"],[1,"col"],[1,"card-title","text-uppercase","text-muted","mb-0"],[1,"h2","font-weight-bold","mb-0"],[1,"col-auto"],[1,"icon","icon-shape","bg-gradient-red","text-white","rounded-circle","shadow"],[1,"ni","ni-active-40"],[1,"mt-3","mb-0","text-sm"],[1,"text-success","mr-2"],[1,"fa","fa-arrow-up"],[1,"text-nowrap"],[1,"icon","icon-shape","bg-gradient-orange","text-white","rounded-circle","shadow"],[1,"ni","ni-chart-pie-35"],[1,"icon","icon-shape","bg-gradient-green","text-white","rounded-circle","shadow"],[1,"ni","ni-money-coins"],[1,"icon","icon-shape","bg-gradient-info","text-white","rounded-circle","shadow"],[1,"ni","ni-chart-bar-32"],[1,"container-fluid","mt--6"],[1,"col-xl-6"],[1,"card"],[1,"card-header"],[1,"surtitle"],[1,"h3","mb-0"],[1,"chart"],["id","chart-sales2",1,"chart-canvas"],["id","chart-bars2",1,"chart-canvas"],["id","chart-points",1,"chart-canvas"],["id","chart-doughnut",1,"chart-canvas"],["id","chart-pie",1,"chart-canvas"],["id","myChart",1,"chart-canvas"]],template:function(Z,i){1&Z&&(A.TgZ(0,"div",0),A.TgZ(1,"div",1),A.TgZ(2,"div",2),A.TgZ(3,"div",3),A.TgZ(4,"div",4),A.TgZ(5,"h6",5),A._uU(6,"Charts"),A.qZA(),A.TgZ(7,"nav",6),A.TgZ(8,"ol",7),A.TgZ(9,"li",8),A.TgZ(10,"a",9),A._UZ(11,"i",10),A.qZA(),A.qZA(),A.TgZ(12,"li",8),A.TgZ(13,"a",9),A._uU(14," Charts "),A.qZA(),A.qZA(),A.TgZ(15,"li",11),A._uU(16," Charts "),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(17,"div",12),A.TgZ(18,"a",13),A._uU(19," New "),A.qZA(),A.TgZ(20,"a",13),A._uU(21," Filters "),A.qZA(),A.qZA(),A.qZA(),A.TgZ(22,"div",14),A.TgZ(23,"div",15),A.TgZ(24,"div",16),A.TgZ(25,"div",17),A.TgZ(26,"div",14),A.TgZ(27,"div",18),A.TgZ(28,"h5",19),A._uU(29," Total traffic "),A.qZA(),A.TgZ(30,"span",20),A._uU(31," 350,897 "),A.qZA(),A.qZA(),A.TgZ(32,"div",21),A.TgZ(33,"div",22),A._UZ(34,"i",23),A.qZA(),A.qZA(),A.qZA(),A.TgZ(35,"p",24),A.TgZ(36,"span",25),A._UZ(37,"i",26),A._uU(38," 3.48% "),A.qZA(),A.TgZ(39,"span",27),A._uU(40," Since last month "),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(41,"div",15),A.TgZ(42,"div",16),A.TgZ(43,"div",17),A.TgZ(44,"div",14),A.TgZ(45,"div",18),A.TgZ(46,"h5",19),A._uU(47," New users "),A.qZA(),A.TgZ(48,"span",20),A._uU(49," 2,356 "),A.qZA(),A.qZA(),A.TgZ(50,"div",21),A.TgZ(51,"div",28),A._UZ(52,"i",29),A.qZA(),A.qZA(),A.qZA(),A.TgZ(53,"p",24),A.TgZ(54,"span",25),A._UZ(55,"i",26),A._uU(56," 3.48% "),A.qZA(),A.TgZ(57,"span",27),A._uU(58," Since last month "),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(59,"div",15),A.TgZ(60,"div",16),A.TgZ(61,"div",17),A.TgZ(62,"div",14),A.TgZ(63,"div",18),A.TgZ(64,"h5",19),A._uU(65," Sales "),A.qZA(),A.TgZ(66,"span",20),A._uU(67," 924 "),A.qZA(),A.qZA(),A.TgZ(68,"div",21),A.TgZ(69,"div",30),A._UZ(70,"i",31),A.qZA(),A.qZA(),A.qZA(),A.TgZ(71,"p",24),A.TgZ(72,"span",25),A._UZ(73,"i",26),A._uU(74," 3.48% "),A.qZA(),A.TgZ(75,"span",27),A._uU(76," Since last month "),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(77,"div",15),A.TgZ(78,"div",16),A.TgZ(79,"div",17),A.TgZ(80,"div",14),A.TgZ(81,"div",18),A.TgZ(82,"h5",19),A._uU(83," Performance "),A.qZA(),A.TgZ(84,"span",20),A._uU(85," 49,65% "),A.qZA(),A.qZA(),A.TgZ(86,"div",21),A.TgZ(87,"div",32),A._UZ(88,"i",33),A.qZA(),A.qZA(),A.qZA(),A.TgZ(89,"p",24),A.TgZ(90,"span",25),A._UZ(91,"i",26),A._uU(92," 3.48% "),A.qZA(),A.TgZ(93,"span",27),A._uU(94," Since last month "),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(95,"div",34),A.TgZ(96,"div",14),A.TgZ(97,"div",35),A.TgZ(98,"div",36),A.TgZ(99,"div",37),A.TgZ(100,"h6",38),A._uU(101,"Overview"),A.qZA(),A.TgZ(102,"h5",39),A._uU(103,"Total sales"),A.qZA(),A.qZA(),A.TgZ(104,"div",17),A.TgZ(105,"div",40),A._UZ(106,"canvas",41),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(107,"div",35),A.TgZ(108,"div",36),A.TgZ(109,"div",37),A.TgZ(110,"h6",38),A._uU(111,"Performance"),A.qZA(),A.TgZ(112,"h5",39),A._uU(113,"Total orders"),A.qZA(),A.qZA(),A.TgZ(114,"div",17),A.TgZ(115,"div",40),A._UZ(116,"canvas",42),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(117,"div",14),A.TgZ(118,"div",35),A.TgZ(119,"div",36),A.TgZ(120,"div",37),A.TgZ(121,"h6",38),A._uU(122,"Growth"),A.qZA(),A.TgZ(123,"h5",39),A._uU(124,"Sales value"),A.qZA(),A.qZA(),A.TgZ(125,"div",17),A.TgZ(126,"div",40),A._UZ(127,"canvas",43),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(128,"div",35),A.TgZ(129,"div",36),A.TgZ(130,"div",37),A.TgZ(131,"h6",38),A._uU(132,"Users"),A.qZA(),A.TgZ(133,"h5",39),A._uU(134,"Audience overview"),A.qZA(),A.qZA(),A.TgZ(135,"div",17),A.TgZ(136,"div",40),A._UZ(137,"canvas",44),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(138,"div",14),A.TgZ(139,"div",35),A.TgZ(140,"div",36),A.TgZ(141,"div",37),A.TgZ(142,"h6",38),A._uU(143,"Partners"),A.qZA(),A.TgZ(144,"h5",39),A._uU(145,"Affiliate traffic"),A.qZA(),A.qZA(),A.TgZ(146,"div",17),A.TgZ(147,"div",40),A._UZ(148,"canvas",45),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.TgZ(149,"div",35),A.TgZ(150,"div",36),A.TgZ(151,"div",37),A.TgZ(152,"h6",38),A._uU(153,"Overview"),A.qZA(),A.TgZ(154,"h5",39),A._uU(155,"Product comparison"),A.qZA(),A.qZA(),A.TgZ(156,"div",17),A.TgZ(157,"div",40),A._UZ(158,"canvas",46),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA(),A.qZA())},encapsulation:2}),n)}]}],v=((r=t(function i(){Z(this,i)})).\u0275fac=function(Z){return new(Z||r)},r.\u0275mod=A.oAB({type:r}),r.\u0275inj=A.cJS({imports:[[d.ez,g.Bz.forChild(q)]]}),r)}}])}();