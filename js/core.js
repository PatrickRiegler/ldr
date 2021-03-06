﻿LDR = {

	configDefaults : {
		"template" : "default",
		"market" : "ch",
// 		"lng" : "en",
		"style" : "default"
	},
	config : {
		// "test2" : "hallo2"
	},
	values : {
	},

	// define the standard variables for LDR
	// set cnt to 0 and cntmax to the maximum number of tries to load elements
	cnt : 0,
	cntmax : 100,
	retry : 30,
	started : false,
	
	// content marker
	content : "#LDR",

	// ojv = otherjQueryVersion
	ojv : false,
	// mamo : [{ id: 0, text: 'Audi A3' }, { id: 1, text: 'BMW X5' }, { id: 2, text: 'Lexus Rh300' }, { id: 3, text: 'Mercedes-Benz Viano' }, { id: 4, text: 'VW Sharan' }],

	y : (new Date().getFullYear()-13),
	yrs : [],
	forms : [],
	mamoarr : [],
	mr : [],
	lngl : "CHDE",
	txt : [],
	
	tpl : "",
	tplc : "",
	
	init : function (cont)  {
		this.content = (typeof(cont)!='undefined') ? cont : this.content;
		this.sST();
		this.cJQ();
		
		// console.log(LDR.config);
		// console.log(LDR.config.test);
		// console.log(LDR.gUP("style"));
		// console.log(LDR.gUP("lng"));
			
		// get GoogleAnalytics set up
		if(typeof(ga)!="function") {
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		} 
		// else { console.log("google analytics was already loaded"); }

		ga('create', 'UA-37695130-2', 'auto', { 'name': 'ldr' });
	
		this.sM();
	},

	vals : function (o) {
		if(typeof(LDR.values["vehicle"])=="undefined") LDR.values["vehicle"] = [];
		if(LDR.values["vehicle"][o.attr("id")] != o.val()) {
			LDR.values["vehicle"][o.attr("id")] = o.val();
			LDR.gas(o);
		}
	},
	vals2 : function (i,v) {
		if(typeof(LDR.values["options"])=="undefined") LDR.values["options"] = [];
		LDR.values["options"][i] = v;
		LDR.gas2(i,v);
	},
	vals3 : function (i,v) {
		if(typeof(LDR.values["leadinfo"])=="undefined") LDR.values["leadinfo"] = [];
		LDR.values["leadinfo"][i] = v;
		LDR.gas2(i,v);
	},
	
	// define the required modules and scripts for ldr
	// Mo == Modules
	Mo : [
						// 'n' : name of the module (required)
						// 't' : type of the module (required)
						// 'u' : url of the module (just check if URL empty - default = '')
						// 'p' : prerequisites function (default: true)
						// 'm' : mandatory (default: true)
						// 'l' : loaded? (default: false)
						// 'c' : check function (default: true)
						// 'v' : verified? (default: false)
						// 'ver' : required version (only checked if version is set)
						// 'ts' : time started (default: NULL)
						// 'tv' : time verified (default: NULL)
						// 'ttl' : time to load (default: NULL)
					{
						'n' : 'jQuery',
						't' : 'js',
						'u' : 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js',
						'u' : './js/a/jquery.min.js',
						'c' : "(window.jQuery && LDR.Mo[0]['ver']==jQuery.fn.jquery)",
						'ver' : '2.1.3'
					},
/* when j42 is external...
					{
						'n' : 'j42r',
						't' : 'js',
						'u' : './js/j42r.js',
						'p' : "LDR.vM(LDR.Mo[0])",
						'c' : "(typeof(J42R) == 'object' && typeof(J42R.lang)=='string' && typeof(J42R.text[J42R.lang])=='object' && typeof(J42R.text[J42R.lang].global)=='object' && typeof(J42R.text[J42R.lang].global.sh)=='string')"
//						'c' : "(typeof(J42R) == 'object' && typeof(J42R.lang)=='string' && typeof(J42R.text[J42R.lang])=='object')"
					},
*/
/* translations possible on: http://kirox.de/util/J42R/ */
					{
						'n' : 'j42r',
						't' : 'js',
						'p' : "LDR.vM(LDR.Mo[0])",
						'c' : "(typeof(J42R) == 'object' && typeof(J42R.lang)=='string' && typeof(J42R.text[J42R.lang])=='object' && typeof(J42R.text[J42R.lang].global)=='object' && typeof(J42R.text[J42R.lang].global.sh)=='string')"
	//					'c' : "(typeof(J42R) == 'object' && typeof(J42R.lang)=='string' && typeof(J42R.text[J42R.lang])=='object')"
					},
					{
						'n' : 'bootstrapcss',
						't' : 'css',
						'u' : 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css',
						'a' : './css/a/bootstrap.min.css'
					},
					{
						'n' : 'bootstrapthemecss',
						't' : 'css',
						'u' : 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css',
						'a' : './css/a/bootstrap-theme.min.css',
						'p' : "LDR.vM(LDR.Mo[0])"
					},
					{
						'n' : 'fontawesome',
						't' : 'css',
						'u' : '//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css',
						'a' : './css/a/font-awesome.min.css',
						'm' : false
					},
					{
						'n' : 'select2css',
						't' : 'css',
//						'u' : '//cdnjs.cloudflare.com/ajax/libs/select2/3.5.2/select2.min.css',
 						'u' : '//cdnjs.cloudflare.com/ajax/libs/select2/4.0.0-rc.2/css/select2.min.css',
 						'a' : './css/a/select2.min.css',
						'm' : false
					},
					{
						'n' : 'bootstrapsocialcss',
						't' : 'css',
						'u' : './css/bootstrap-social.css',
						'm' : false
					},
/*
					{
						'n' : 'jqueryCountryDropDownCSS',
						't' : 'css',
						'u' : './css/dd.css',
						'm' : false
					},
					{
						'n' : 'jqueryCountryDropDownCSSFlags',
						't' : 'css',
						'u' : './css/flags.css',
						'm' : false
					},
*/
					{
						'n' : 'corecss',
						't' : 'css',
						'p' : "LDR.vM(LDR.Mo[3])",
						'u' : './css/core.css',
						'm' : false
					},
/*
					{
						'n' : 'slidercss',
						't' : 'css',
						'u' : './css/slider.css',
						'm' : false
					},
					{
						'n' : 'toggleswitchcss',
						't' : 'css',
						'u' : './css/toggle-switch.css',
						'm' : false
					},
*/
					{
						'n' : 'bootstrap',
						't' : 'js',
						'u' : 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js',
						'a' : './js/a/bootstrap.min.js',
						'p' : "LDR.vM(LDR.Mo[0])",
						'c' : "(LDR.vM(LDR.Mo[0]) && (typeof $().modal == 'function'))"
					},
					{
						'n' : 'mustache',
						't' : 'js',
						'u' : 'https://cdnjs.cloudflare.com/ajax/libs/mustache.js/0.8.1/mustache.js',
						'a' : './js/a/mustache.js',
						'p' : "LDR.vM(LDR.Mo[0])",
						'c' : "(typeof(Mustache) == 'object')"
					},
/* if external
					{
						'n' : 'ie10viewportworkaround',
						't' : 'js',
						'u' : './js/ie10-viewport-bug-workaround.js',
						'p' : "LDR.vM(LDR.Mo[0])",
						'c' : "(typeof(ie10viewportworkaround)!='undefined')"
					},
*/					
					{
						'n' : 'select2',
						't' : 'js',
//						'u' : '//cdnjs.cloudflare.com/ajax/libs/select2/3.5.2/select2.min.js',
						'u' : '//cdnjs.cloudflare.com/ajax/libs/select2/4.0.0-rc.2/js/select2.min.js',
						'a' : './js/a/select2.min.js',
						'p' : "LDR.vM(LDR.Mo[0])",
						'c' : "(LDR.vM(LDR.Mo[0]) && (typeof(jQuery.fn.select2) != 'undefined'))"
					},
					{
						'n' : 'bootstrapwizard',
						't' : 'js',
	//					'u' : 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap-wizard/1.2/jquery.bootstrap.wizard.min.js',
						'u' : './js/jquery.bootstrap.wizard.min.js',
						'p' : "(LDR.vM(LDR.Mo[0]) && (typeof $().modal == 'function'))",
						'c' : "(LDR.vM(LDR.Mo[0]) && (typeof $().modal == 'function') && (typeof($('#test').bootstrapWizard) == 'function'))"
					},
					// get more translations for jquery validate here:
					// http://stackoverflow.com/questions/12568860/available-translations-on-cdn-for-jquery-validate
					{
						'n' : 'jqueryvalidate',
						't' : 'js',
//						'u' : '//cdn.jsdelivr.net/jquery.validation/1.13.1/jquery.validate.min.js',
						'u' : '//ajax.aspnetcdn.com/ajax/jquery.validate/1.13.1/jquery.validate.min.js',
						'a' : './js/a/jquery.validate.min.js',
						'p' : "LDR.vM(LDR.Mo[0])",
						'c' : "(LDR.vM(LDR.Mo[0]) && typeof($('#test')) == 'object' && typeof($.validator) == 'function')"
					},
/* translations need to be loaded manually
					{
						'n' : 'jqueryvalidate_de',
						't' : 'js',
//						'u' : '//cdn.jsdelivr.net/jquery.validation/1.13.1/localization/messages_de.js',
						'u' : '//ajax.aspnetcdn.com/ajax/jquery.validate/1.9/localization/messages_de.js',
						'a' : './js/a/messages_de.js',
						'p' : "LDR.vM(LDR.Mo[0])",
						'c' : "(LDR.vM(LDR.Mo[0]) && typeof($('#test')) == 'object' && typeof($.validator) == 'function')"
					},
					{
						'n' : 'jqueryvalidate_fr',
						't' : 'js',
						'u' : '//ajax.aspnetcdn.com/ajax/jquery.validate/1.9/localization/messages_fr.js',
						'a' : './js/a/messages_fr.js',
						'p' : "LDR.vM(LDR.Mo[0])",
						'c' : "(LDR.vM(LDR.Mo[0]) && typeof($('#test')) == 'object' && typeof($.validator) == 'function')"
					},
					{
						'n' : 'jqueryvalidate_it',
						't' : 'js',
						'u' : '//ajax.aspnetcdn.com/ajax/jquery.validate/1.9/localization/messages_it.js',
						'a' : './js/a/messages_it.js',
						'p' : "LDR.vM(LDR.Mo[0])",
						'c' : "(LDR.vM(LDR.Mo[0]) && typeof($('#test')) == 'object' && typeof($.validator) == 'function')"
					},
*/
/*
					{
						'n' : 'jqueryCountryDropDown',
						't' : 'js',
						'u' : './js/jquery.dd.min.js',
						'p' : "LDR.vM(LDR.Mo[0])",
//						'c' : "LDR.vM(LDR.Mo[0])"
						'c' : "(LDR.vM(LDR.Mo[0]) && typeof($('#country')) == 'object' && typeof(msBeautify) == 'object')"
//						'c' : "(LDR.vM(LDR.Mo[0]) && typeof($('#country')) == 'object' && typeof($('#country').msDropdown())!='undefined')"
					},
*/
					{
						'n' : 'googlerecaptcha',
						't' : 'js',
						'u' : 'https://www.google.com/recaptcha/api.js',
						'a' : './js/a/api.js',
						'p' : "LDR.vM(LDR.Mo[0])",
						'c' : "(typeof(grecaptcha) == 'object')"
					},
					{
						'n' : 'phoneformat',
						't' : 'js',
						'u' : 'http://www.phoneformat.com/js/PhoneFormat.js',
						'a' : './js/a/PhoneFormat.js',
						'p' : "LDR.vM(LDR.Mo[0])",
						'c' : "(typeof(countryForE164Number)=='function')"
					},
/*
					{
						'n' : 'phoneformatamd',
						't' : 'js',
						'u' : 'https://www.google.com/recaptcha/api.js',
						'p' : "LDR.vM(LDR.Mo[0])",
						'c' : "(typeof(grecaptcha) == 'object')"
					},
					{
						'n' : 'phoneformatexports',
						't' : 'js',
						'u' : 'https://www.google.com/recaptcha/api.js',
						'p' : "LDR.vM(LDR.Mo[0])",
						'c' : "(typeof(grecaptcha) == 'object')"
					},
					{
						'n' : 'phoneformatglobal',
						't' : 'js',
						'u' : 'https://www.google.com/recaptcha/api.js',
						'p' : "LDR.vM(LDR.Mo[0])",
						'c' : "(typeof(grecaptcha) == 'object')"
					},
*/
/*
					{
						'n' : 'bootstrapslider',
						't' : 'js',
						'u' : './js/bootstrap-slider.js',
						'p' : "(LDR.vM(LDR.Mo[0]) && (typeof $().modal == 'function'))",
						'c' : "(LDR.vM(LDR.Mo[0]) && (typeof $().modal == 'function') && (typeof($('#test').slider()) == 'function'))"
					},
*/
					{
						'n' : 'soapclient',
						't' : 'js',
						'u' : 'http://www.phoneformat.com/js/PhoneFormat.js',
						'a' : './js/a/soapclient.js',
						'p' : "LDR.vM(LDR.Mo[0])",
						'c' : "(typeof(countryForE164Number)=='function')"
					},
					{
						'n' : 'mandatory',
						't' : 'grp'
					},
					{
						'n' : 'all',
						't' : 'grp'
					}
				],
	// define the start time
	// sST = setStartTime
	sST : function () {
		this.Mo[this.Mo.length-2]["ts"] = new Date().getTime();
		this.Mo[this.Mo.length-1]["ts"] = new Date().getTime();
	},
	// check if jquery already exists
	// cJQ == checkJQuery
	cJQ : function () {
		if((typeof(jQuery) != 'undefined') && this.Mo[0]["ver"]!=jQuery.fn.jquery) { 
			// console.log("jquery loaded, but wrong version"); 
			this.ojv=true;
			jQuery.noConflict();
		}
	},
	// define function to load a module
	// lM == loadModule
	lM : function(m) {
		// console.log(m);
		// h = document.head;
		h = document.getElementsByTagName("head")[0];
		if(m["t"]=="js") {
			if(typeof(m["u"])!="undefined" && m["u"]!="") {
				sj = document.createElement('script');
				sj.type = 'text/javascript';
				sj.src = (typeof(m["a"])!="undefined" && typeof(m["l"])!="undefined") ? m["a"] : m["u"];
				h.appendChild(sj);
			}
			// for jquery validate, also load the translations
			if(m["n"]=="jqueryvalidate" && LDR.gUP("lng")!="en") {
				// jquery validate translation url
				// jqvtl=(LDR.gUP("lng")!="")
				jqvtu="//ajax.aspnetcdn.com/ajax/jquery.validate/1.9/localization/messages_"+LDR.gUP("lng")+".js"
				sj = document.createElement('script');
				sj.type = 'text/javascript';
				sj.src = jqvtu;
				h.appendChild(sj);
			}
		} else if(m["t"]=="css") {
			tc="text/css";
			ssh="stylesheet";
			if(m["n"]=="bootstrapthemecss") {
				if(LDR.gUP("style")!="" && LDR.gUP("style")!="default") {
					$.ajax({
						url:'./css/theme-'+LDR.gUP("style")+'.css',
						type:'HEAD',
						error: function() {
							var sth = document.createElement('link');
							sth.type = tc;
							sth.rel = ssh;
							sth.href = m["u"];
							h.appendChild(sth);
							// console.log("error loading the theme CSS file");
						},
						success: function()
						{
							LDR.Mo[3]["u"]="./css/theme-"+LDR.gUP("style")+".css";
							sth = document.createElement('link');
							sth.type = tc;
							sth.rel = ssh;
							sth.href = "./css/theme-"+LDR.gUP("style")+".css";
							h.appendChild(sth);
							// console.log("loaded the theme CSS file successfully");
						}
					});
				} else {
					sth = document.createElement('link');
					sth.type = tc;
					sth.rel = ssh;
					sth.href = m["u"];
					h.appendChild(sth);
				}
			} else {
				sc = document.createElement('link');
				sc.type = tc;
				sc.rel = ssh;
				sc.href = (typeof(m["a"])!="undefined" && typeof(m["l"])!="undefined") ? m["a"] : m["u"];
				h.appendChild(sc);
			}
		} else {
			console.log("undefined module type");
		}
		//m["l"]=true;
	},
	// vM == verifyModule
	vM : function(m) {
		if((m["t"]!="css")) {
			// if(m["n"]=="jQuery") console.log("m: "+m["ver"]);
			// if(m["n"]=="jQuery") console.log("j: "+jQuery.fn.jquery);
			if(this.ojv && m["n"]=="jQuery" && m["ver"]!=jQuery.fn.jquery) return false;
			// if(this.ojv && m["n"]=="jQuery") return false;
			// run the translation tool
			if(m["n"]=="j42r" && LDR.Mo[0]["v"]==true && typeof(J42R) == 'object') {
				if(typeof(LDR.gUP("lng"))=="string" && LDR.gUP("lng")!="")
					J42R.setLang(LDR.gUP("lng").toLowerCase());
				J42R.t();
			}
			/*
			if(m["n"]!="jQuery") {
				document.getElementById("content").appendChild(document.createTextNode(m["n"]+" - "+m["l"]+" - "+m["v"]));
				document.getElementById("content").appendChild(document.createElement("br"));
			}
			*/
			
			if(((new Date().getTime())-m["ts"])>2000 && typeof(LDR.Mo[0]["al"])=="undefined") {
				// console.log("loading alternative for: "+m["n"]);
				if(typeof(m["a"])!="undefined") {
					m["al"] = true;
					LDR.lM(m);
					ga('ldr.send', 'timing', 'componentLoadingDelay', m["n"], (new Date().getTime())-m["ts"]);
				}
			}
			
			return (typeof(m["c"])=="undefined") ? true : eval(m["c"]);
		} else {
			ss=document.styleSheets;
			// this was required in order to avoid the infinitive loop - don't ask me why?!?
			if(ss.length<2) return false;
			//console.log(ss.length);
			for(z=0;z<ss.length;z++) {
				if(m["n"]=="bootstrapthemecss" && ss[z] && !!ss[z].href && 
						((this.gUP("style")!="" && ss[z].href.indexOf(this.gUP("style"))!=-1) || ss[z].href.indexOf("theme")!=-1)) {
					// console.log("bootstrap CSS theme loaded");
					return true;
				}
				// if style sheet contains the string, then return true.
				if(ss[z] && !!ss[z].href && (ss[z].href.indexOf(m["u"].replace(".",""))!=-1 || ss[z].href.indexOf(m["u"])!=-1 || ss[z].href.indexOf(m["u"].substring(m["u"].lastIndexOf("/")))!=-1)) {
					// console.log(m["u"]);
					// console.log(ss[z]);
					// console.log("found");
					return true;
				}
				if((z==LDR.retry)) {
					console.log("one of the stylesheets could not be loaded");
					return true;
				}
			}
			return false;
		}
		// document.getElementById("content").appendChild(document.createTextNode(Mo[i]["n"]+" - "+Mo[i]["l"]+" - "+Mo[i]["v"]));
		// document.getElementById("content").appendChild(document.createElement("br"));
	},
	// sM == startModules
	sM : function() {
		lm=this.Mo;
		// set all and mandatory to loaded
		lm[lm.length-1]["l"]=true;
		lm[lm.length-2]["l"]=true;
		// set all and mandatory to verified
		lm[lm.length-1]["v"]=true;
		lm[lm.length-2]["v"]=true;
		// loop through all the modules and load / verify them
		for(i=0;i<lm.length-2;i++) { // -2 because we don't want to execute it for the groups "mandatory" and "all"
			// load the module if not yet loaded
			if(lm[i]["l"]!=true) { 
			// return true;
				// load the module if it is not verified yet.
				// if(!this.vM(lm[i])) this.lM(lm[i]); else console.log("already loaded");
				// console.log(lm[i]["n"]);
				// console.log(lm[i]["p"]);
				// console.log(eval(lm[i]["p"]));
				if(typeof(lm[i]["p"])=="undefined" || eval(lm[i]["p"])) {
					if(!this.vM(lm[i])) {
						// load the module and mark it as loaded
						this.lM(lm[i]); 
						lm[i]["l"]=true;
						lm[i]["ts"]=new Date().getTime();
						// set the module groups "all" and "mandatory" to loaded = false if not loaded
						if(lm[i]["m"]!=false) lm[lm.length-2]["l"]=false;
						lm[lm.length-1]["l"]=false;
					}
					// else { console.log(lm[i]["n"]+": already loaded"); }
				}
				// else { console.log("prerequisites not ready for: "+m["n"]); }
			}
			// verify the module, if not yet verified
			if(lm[i]["v"]!=true) {
				if(this.vM(lm[i])) {
					lm[i]["v"]=true;
					lm[i]["tv"]=new Date().getTime();
					lm[i]["ttl"]=lm[i]["tv"]-lm[i]["ts"];
					// if(lm[i]["n"]!="jQuery") $(this.content).append(lm[i]["n"]+" loaded...<br><br>");
				}
				// set the module groups "all" and "mandatory" to verified = false if not verified
				if(!lm[i]["v"]) {
					if(lm[i]["m"]!=false) lm[lm.length-2]["v"]=false;
					lm[lm.length-1]["v"]=false;
				}
			}

		}
		// console.log(cnt);
		this.cnt++;
		// console.log(lm);
		// if all important modules are verified, start the start 
		if(lm[lm.length-2]["v"] && !this.started) { 	
			$.when(this.start()).done(function () {
				LDR.prep();
			});
			// set the time of completion for the group "mandatory" as all mandatory modules are loaded now...
			lm[lm.length-2]["tv"]=new Date().getTime();
			lm[lm.length-2]["ttl"]=lm[lm.length-2]["tv"]-lm[lm.length-2]["ts"];
			// console.log(lm);
			// console.log("ldr started"); 
			this.started=true
			// send timing to google analytics
			ga('ldr.send', 'timing', 'componentLoading', 'RequiredComponentsLoaded', lm[lm.length-2]["ttl"]);
		}
		if(this.cnt==this.cntmax) {  
			ga('ldr.send', 'timing', 'loadingDelay', "all", (new Date().getTime())-lm[lm.length-1]["ts"]);
			zt=0;
			zn=0;
			for(z=0;z<lm.length-2;z++) {
				if(((new Date().getTime())-lm[z]["ts"]) > zt) {
					zt = ((new Date().getTime())-lm[z]["ts"]);
					zn = lm[z]["n"];
				}
			}
			ga('ldr.send', 'timing', 'loadingDelay', zn, zt);
			console.log(lm); 
			console.log("loading takes too long - not all modules could be loaded"); 
			//J42R.t();		
			// console.log(J42R);
			/*
			for(ti=0;ti<lm.length-2;ti++) {
				if(!lm[ti]["v"]) $(this.content).append(lm[ti]["n"]+" NOT loaded...<br><br>");
			}
			*/
		}
		// if not all modules are verified, restart myself
		if(!lm[lm.length-1]["v"] 
			// && this.cnt<this.cntmax
			// deactivated as we don't want the app to stop!!
			) { 
			// console.log(lm); 
			setTimeout("LDR.sM()", LDR.retry);
		} else {
			// console.log("everything loaded and verified...");
			// set the time of completion for the group "all" as everything is loaded now...
			lm[lm.length-1]["tv"]=new Date().getTime();
			lm[lm.length-1]["ttl"]=lm[lm.length-1]["tv"]-lm[lm.length-1]["ts"];

		}
	},
	// function to start the process
	start : function () {
		// set up Facebook integration
		window.fbAsyncInit = function() {
			FB.init({
			  appId      : '1127332103948930',
			  xfbml      : true,
			  version    : 'v2.2'
			});
			/*
			FB.getLoginStatus(function(response) {
				statusChangeCallback(response);
			});
			*/
		  };

		  (function(d, s, id){
			 var js, fjs = d.getElementsByTagName(s)[0];
			 if (d.getElementById(id)) {return;}
			 js = d.createElement(s); js.id = id;
			 js.src = "//connect.facebook.net/en_US/sdk.js";
			 fjs.parentNode.insertBefore(js, fjs);
		   }(document, 'script', 'facebook-jssdk'));
		
		// activate resize handler
		$(window).resize(this.cR);
		var timer = setInterval(this.cR, LDR.retry);

	},
	// function to verify the size of the content box and to resize the text 
	// cR == checkResize
	cR : function() {
	//console.log(LDR.content);
	//console.log($(this.content).width());
		w = $(LDR.content).width();
		h = $(LDR.content).height();
		if(w>1040) {
			LDR.rT(20);
			if(!$("#svl img").hasClass("showImg")) $("#svl img").removeClass("hideImg").addClass("showImg");
			$(".vTxt").removeClass("vTxtNoImg");
			$(".vlpt").removeClass("vlptNoImg");
		} else if(w>800) {
			LDR.rT(18);
			if(!$("#svl img").hasClass("showImg")) $("#svl img").removeClass("hideImg").addClass("showImg");
			$(".vTxt").removeClass("vTxtNoImg");
			$(".vlpt").removeClass("vlptNoImg");
		} else if(w>600) {
			LDR.rT(16);
			if(!$("#svl img").hasClass("showImg")) $("#svl img").removeClass("hideImg").addClass("showImg");
			$(".vTxt").removeClass("vTxtNoImg");
			$(".vlpt").removeClass("vlptNoImg");
		} else {
			LDR.rT(14);
			if(!$("#svl img").hasClass("hideImg")) $("#svl img").removeClass("showImg").addClass("hideImg");
			$(".vTxt").addClass("vTxtNoImg");
			$(".vlpt").addClass("vlptNoImg");
			
		}
	},
	// function to resize the text
	// rT == resizeText
	rT : function(s) {
		$(this.content).css('font-size', String(s)+'px');
		// console.log($(this.content).css('font-size'));
		// console.log(s);
	},
	// functions to be called at the end of loading process
	end : function() {
		// console.log("end");
		
		console.log("call ws valuation");
		// callWSValuation();

		// hide the form
		// $("#svp .panel-heading").next().hide();
		$("#svl .btn-filter").hide();

		$(".btn-facebook").on("click", function () {
			LDR.fblogin();
			$("#svp .panel-heading").next().show();	
			$("#fname").focus();
			$('html, body').animate({ 
				scrollTop: $("#svp").offset().top
			}, 1000);
		});

		/*
		$(".btn-social").on("click", function () {
			$("#svp .panel-heading").next().show();	
			$("#fname").focus();
			$('html, body').animate({ 
				scrollTop: $("#svp").offset().top
			}, 1000);
		});
		*/

		if(typeof(grecaptcha)=="object" && $("#grc").length>0)
			grecaptcha.render('grc', {
			  'sitekey' : '6Lck7AMTAAAAAEdVcsSfBLY0bimLFOOzNWiuS1bY'
			});

		// define panel toggle for all panels
		$( ".panel-heading:not(.panel-heading-open)" ).click(function() {
			if($(this).parent().attr("id")!=$("#sv").attr("id") && $(this).parent().attr("id")!=$("#svp").attr("id"))
				$(this).next().toggle();
		});

		/*
		$(document).on('keydown', '.select2-search__field', function (e) {
			if(e.keyCode==9 || e.which==9) {
				// Todo: why does this not work?
				// when selecting an element in the select2 with tab, the focus gets lost
				// trying to replace tab with enter (enter works just fine) does not work here properly. Why?
				e.preventDefault();
				e.keyCode = e.which = 13;
				// console.log("tab pressed");
				// console.log(e.which);
				$(this).trigger(e);
				// console.log($(this));
				// console.log(e.which);
				return false;
			}
				
		});
		*/
		
		// verify all forms
		$("form").each(function (index) {
			// LDR.forms.push("val"+index);
			LDR.forms.push($(this).validate({
				rules: {
					email : {
						required: true,
						email: true
					}
				},
				highlight: function(element) {
					$(element).closest('.control-group').removeClass('success').addClass('error');
				},
				success: function(element) {
					element
	//				.text('OK!').addClass('valid')
					.closest('.control-group').removeClass('error').addClass('success');
				}
			}));
		});
		var higheststep, index = 0;
		$('#rootwizard').bootstrapWizard({
			'onNext': function(tab, navigation, index) {
				if(index==1 && $("#mmt").val()=="") {
					$(".alert").show();
					return false;
				}
				if($("form:visible").length>0) {
					// update the values array object and google analytics
					if($("form:visible").attr("id")=="ldrf3") {
						$("form:visible").find("input, select").each(function () {
							// console.log($(this).attr("id") + " - " + $(this).val());
							LDR.vals3($(this).attr("id"), $(this).val());
						});
					}
					var $valid = $("form:visible").valid();
					if($("#mobile:visible").length>0 && !isValidNumber($("#mobile").val(), LDR.gUP("market"))) {
						$("#mobile").parent().parent().append("<div id='moberr' class='err'>");
						$("#moberr").addClass("error").html(J42R.text[J42R.lang].svp.moberr);
						$("#mobile").focus();
						return false;
					} else {
						$("#moberr").remove();
					}
					if(!$valid) {
						// console.log(LDR.forms);
						// console.log(LDR.forms[index]);
						LDR.forms[index-1].focusInvalid();
						return false;
					}
				}
			},
			'onTabShow': function(tab, navigation, index) {
				if(index>higheststep) higheststep=index+1;
				var $total = navigation.find('li').length;
				var $current = index+1;
				var $percent = ($current/$total) * 100;
				$('#rootwizard').find('.bar').css({width:$percent+'%'}); 
				
				// send virtual pageview to google analytics
				// console.log($("#t .active a").attr("href").substring(1));
				// console.log($("#t .active").attr("title"));
				ga('ldr.send', 'pageview', {'title': $("#t .active").attr("title"), 'page': "/"+$("#t .active a").attr("href").substring(1)+"/" });

				return false;
			},
			'onTabClick': function (tab, navigation, index) {
				// deactivate the click on the Tab - tab click is handled by the #t li below
				return false;
			}
		});
		// update the color if style not default
		// no checking the if inside the function
		// if(typeof(LDR.gUP("style"))!="undefined" && LDR.gUP("style")!="default")
			LDR.defProgressBarColor();
		// color of toggles anyway
		LDR.defToggleColor();
			
		// handle the tab click
		$("#t").find("li a").on("click", function () { 
			a=parseInt($("#t .active").attr("id").substring(1,2)); 
			c=parseInt($(this).parent().attr("id").substring(1,2)); 
			if (a==c) {
				// console.log("you are on this tab already...");
			} else if (a<c) {
				for(i=0;i<c-a;i++) $('.next:not(.last)').click();
			} else if (a>c) {
				for(i=0;i<a-c;i++) $('.previous:not(.first)').click();
			}
		});

		// add the title text to the navigation bar
		$("#t").find("li").each(function (index) {
			$(this).attr("title", J42R.text[J42R.lang].progress["p"+String(index+1)]);
		});
		$(".navbar .glyphicon-arrow-left").attr("title", J42R.text[J42R.lang].global.prev).on("click", function () {
			$('.previous:not(.first)').click();
		});
		$(".navbar .glyphicon-arrow-right").attr("title", J42R.text[J42R.lang].global.next).on("click", function () {
			$('.next:not(.last)').click();
		});
		
		// add styles to the list
		$("#svl th div:not(:first)").not(":first").addClass("notfixed col-xs-6 col-sm-4 col-lg-3");
		$("#svl td div:not(:first)").not(":first").addClass("notfixed col-xs-6 col-sm-4 col-lg-3");
		
		// hide the verification fields on the lead form
		$("#svp #mv, #svp #ev").hide();
		
	},
	prep : function() {
		// load the template
		url="./templates/";
		if(LDR.gUP("template")) 
			url+=LDR.gUP("template")+".php";
		else
			url+="default.php";
		//console.log(LDR.config.template);
		LDR.tpl = url;
		$.ajax({
			url: url,
			type:'HEAD',
			async : false,
			error: function() {
				LDR.tpl = "./templates/default.php";
				console.log("Template was not found");
			},
			success: function()
			{
				// already set to url and does not work here?!?
				// LDR.tpl = url;
			}
		});
		
		$.get(LDR.tpl, function(template) {
			// render the template
			LDR.tplc = template;
			var rendered = Mustache.render(template, { 
				"eqs" : "{{#eqs}}", "eqid" : "{{eqid}}", "eqtxt" : "{{eqtxt}}", 
				"vid" : "{{id}}", "vtxt" : "{{text}}", "vk" : "{{k}}", "vh" : "{{h}}", "vct" : "{{ct}}", "vbd" : "{{bd}}", "vd" : "{{d}}", "vg" : "{{g}}", "vt" : "{{t}}", "vb" : "{{b}}", "ve" : "{{e}}", "vp" : "{{p}}", "vf" : "{{f}}" 
				} );
			
			// paste the template into the app
			$(LDR.content).html(rendered);

			// add fb-root for Facebook
			$(LDR.content).prepend('<div id="fb-root" class="fb_reset"></div>');

			// and start the translations again
			J42R.t();
			
			// hide the vehicle list
			if($("#svl .panel-heading").length>0)
				$("#svl .panel-heading").next().hide();

			// define the selects
			if($('.yyyy').length>0)
				$('.yyyy').select2({
					data: LDR.setYears()
				}).on("change", function() {
					// $('.filterable .btn-filter').click().click();
					LDR.vals($(this));
					LDR.refreshMamo();
				});
			if($('.mm').length>0)
				$('.mm').select2({
					data: LDR.setMonths()
				}).on("change", function() {
					// $('.filterable .btn-filter').click().click();
					LDR.vals($(this));
					LDR.refreshMamo();
					/*
					$('.mamo').change();
					LDR.vals($(this));
					LDR.setFocus();
					*/
				});

			if($('.mamo').length>0) {
				// $.getJSON('./js/vehicle/ml.json', function(ml) {
				urlm="http://be.itilserv.com/services/vehdatarest/mamo";
				// urlm="http://be.itilserv.com/services/vehdata/mamo2";
				$.getJSON(urlm, function(ml) {
					//$('.mm').select2("open");
					$('.yyyy').select2("open");
					$('.mamo').select2({
						placeholder: J42R.text[J42R.lang].sv.mamop13,
						data: []
					}).on("change", function() {
						if(typeof($('.mamo').val())!="undefined" && !!$('.mamo').val()) {
							$("#svl .filters").show();
							
							// remove all existing types
							$("#svl table tbody").not("#vlt").remove();
							// remove all existing filters
							$('.filterable .btn-filter').click().click();
							// console.log($('.mamo').val());
							urlt="http://be.itilserv.com/services/vehdatatypes?modl1=";
							// urlt="http://be.itilserv.com/services/vehdata/types2?modl2=";
							$.getJSON(urlt+$('.mamo').val(), function(t) {
								ty=t.types.type;
								// console.log(ty);
								// remove all existing types
								$("#svl table tbody").not("#vlt").remove();
								// add all the new types
								// console.log(ty);
								reg=((parseInt($("#yyyy").val())*100)+(parseInt($("#mm").val())));
								// select the templat
								t=$("#vlt");
								// console.log(reg);
								for(i=0;i<ty.length;i++) {
									if(ty[i].b<reg && ty[i].e>reg) {
										// console.log(ty[i]);
										// console.log(t.html());
										ty[i].bd=LDR.getText(ty[i].bd);
										ty[i].t=LDR.getText(ty[i].t);
										ty[i].f=LDR.getText(ty[i].f);
										ty[i].e=(ty[i].e=="999999") ? J42R.text[J42R.lang].svl.imptd : ty[i].e;
										// console.log(ty[i].f);
										if(typeof(ty[i].p)=="string") {
											// console.log(ty[i].p);
											ty[i].p="http://media.eurotaxglass.com/s/s"+ty[i].p.toString()+".jpg";
										} else {
											ty[i].p="./img/nopic.gif";
											// console.log("nopic");
										}
										r = Mustache.render(t.html(), ty[i]);
										// paste the template into the app
										$(document.createElement('tbody')).attr("id",ty[i].id).html(r).appendTo(t.parent());
/*
										$("<tbody>").attr("id",ty[i].id).appendTo($("#svl table"));
										tr1=$("<tr>").append(
											$("<td>").attr("colspan","2").attr("rowspan","2").text(ty[i].text),
											$("<td>").text(ty[i].k+" ("+ty[i].h+")"),
											$("<td>").text(ty[i].ct+" "+J42R.text[J42R.lang].svl.ccm),
											$("<td>").text(LDR.getText(ty[i].bd)+", "+ty[i].d)).appendTo($("#svl table tbody:last"));
										tr2=$("<tr>").append(
											$("<td>").text(ty[i].g+", "+LDR.getText(ty[i].t)),
											$("<td>").text(ty[i].b+" - "+((ty[i].e=="999999") ? J42R.text[J42R.lang].svl.imptd : ty[i].e)),
											$("<td>").text(LDR.getText(ty[i].f))).appendTo($("#svl table tbody:last"));
*/
									}
								}
								$("#numf").html($("#svl table tbody:not(#vlt)").length);
								// hide template
								t.hide();
								$('.filterable .btn-filter').click().click();
								// console.log($("#svl table tbody").length);
								// console.log($("#svl table tbody:visible").length);
								if($("#norows:visible").length!=1) {
									$('.filterable tbody').on("click", function () {
										// console.log("clicked...");
										$('.alert').hide();
										$(this).siblings().removeClass("vehicleSelected");
										$(this).addClass("vehicleSelected");
										$('#mmt').val($(this).attr("id")).change();

										LDR.step2($('#mmt').val());
										
										// console.log($('#mmt').val());
										$('.next:not(.last)').click();
										
									});
								}
								$(".svltoptxt").hide();
								if($("#svl table tbody").length<8) {
									// do not hide
									// $("#svl .filters").hide();
									if($("#desc:disabled").length==0) $('.filterable .btn-filter').click();
									$("#svltoptxtnofilters").show();
								} else {
									if($("#desc:disabled").length>0) $('.filterable .btn-filter').click();
									$("#svltoptxt").show();
								}
								if($("#svl table tbody").length>1) {
									ga('ldr.send', 'event', 'listOfVehicles', 'Vehicles Listed', $("#svl table tbody").length);
								} else {
									if($("#norows:visible").length==1) {
										ga('ldr.send', 'event', 'listOfVehicles', 'Vehicles Listed', 0);
										ga('ldr.send', 'event', 'noVehiclesFound', 'infos', JSON.stringify(LDR.values));
									} else {
										ga('ldr.send', 'event', 'listOfVehicles', 'Vehicles Listed', $("#svl table tbody").length);
									}
								}
								
								LDR.rebuildFilterDropDowns();
								
							});
							
							// delete models that do not fit to the registration date
							reg=((parseInt($("#yyyy").val())*100)+(parseInt($("#mm").val())));
							// after selection, show the list
							$("#svl .panel-heading").next().show();
							$(".alert").hide();
							// $("#desc").focus(); // focus does not work?!?!
							// and scroll down to the list
							$('html, body').animate({ 
								scrollTop: $("#svl").offset().top
							}, 1000);
							LDR.vals($(this));
						}
						
					});
					LDR.mamoarr=ml.mamos.mamo;
					LDR.refreshMamo();

				});
				$.getJSON("http://be.itilserv.com/services/vehdatatxt?lng="+LDR.lngl, function(txt) {
					LDR.txt = txt.txts.txt;
					//console.log(txt);
				});

			}
			// define placeholder texts
			$("#mil").attr("placeholder", J42R.text[J42R.lang].sv.milp);
			$("#desc").attr("placeholder", J42R.text[J42R.lang].svl.desc);
			$("#power").attr("placeholder", J42R.text[J42R.lang].svl.power);
			$("#displ").attr("placeholder", J42R.text[J42R.lang].svl.displ);
			$("#body").attr("placeholder", J42R.text[J42R.lang].svl.body);
			$("#transm").attr("placeholder", J42R.text[J42R.lang].svl.transm);
			$("#imp").attr("placeholder", J42R.text[J42R.lang].svl.imp);
			$("#fuel").attr("placeholder", J42R.text[J42R.lang].svl.fuel);
			// define placeholder texts on lead form
			$("#fname").attr("placeholder", J42R.text[J42R.lang].svp.fullname);
			$("#address1").attr("placeholder", J42R.text[J42R.lang].svp.adr1);
			$("#address2").attr("placeholder", J42R.text[J42R.lang].svp.adr2);
			$("#zip").attr("placeholder", J42R.text[J42R.lang].svp.zip);
			$("#city").attr("placeholder", J42R.text[J42R.lang].svp.city);
			$("#country").attr("placeholder", J42R.text[J42R.lang].svp.country);
			$("#email").attr("placeholder", J42R.text[J42R.lang].svp.email);
			$("#ever").attr("placeholder", J42R.text[J42R.lang].svp.emailv);
			$("#mobile").attr("placeholder", J42R.text[J42R.lang].svp.mob);
			$("#mver").attr("placeholder", J42R.text[J42R.lang].svp.mobv);
			$("#sp").attr("placeholder", J42R.text[J42R.lang].svp.sellprice);

			$("#mil, #mmt").on("change", function () {
				LDR.vals($(this));
				LDR.setFocus();
			});
			$("#mil").on("focus", function () {
				$(this).select();
			});
			
			$(".searchclear").on("click", function() {
				$(this).parent().find("input").val("---").change();
				//$(this).parent().find("input").keyup().change();
			});
			// define the table to display the list of vehicles
			if($("#svl .panel-title").next().length>0) {
				LDR.vehicletable();
				// open the filters
				$('.filterable .btn-filter').click();
				
				// define click event on filters
				$('.filterable tbody').on("click", function () {
					 console.log("clicked...");
					$('.alert').hide();
					$('#mmt').val("test");
					$('.next:not(.last)').click();
					LDR.vals($(this));

				});
			}
			$("#svltoptxt").hide();
			// this is required to jump to the mileage field if month is selected
			$("#select2-mm-container").parent().on("focus", function() {
				LDR.setFocus();
			});
				
			// call the closing function
			LDR.end();
			
		});
	},
	rebuildFilterDropDowns : function () {
		// define the drop downs in the filter
		// descriptions
		$("#descs option").remove();
		$.unique($("#svl tbody:not(#vlt) td.vlpt div:odd:visible").map(function(el, i) { return $(i).text() }).sort()).each(function(i,t) { 
			$("#descs").append("<option value='"+t+"'>");
		});
		// powers
		$("#powers option").remove();
		$.unique($("#svl tbody:not(#vlt) div.dpower:visible").map(function(el, i) { return $(i).text() }).sort()).each(function(i,t) { 
			$("#powers").append("<option value='"+t+"'>");
		});
		// displ
		$("#displs option").remove();
		$.unique($("#svl tbody:not(#vlt) div.ddispl:visible").map(function(el, i) { return $(i).text() }).sort()).each(function(i,t) { 
			$("#displs").append("<option value='"+t+"'>");
		});
		// body
		$("#bodys option").remove();
		$.unique($("#svl tbody:not(#vlt) div.dbody:visible").map(function(el, i) { return $(i).text() }).sort()).each(function(i,t) { 
			$("#bodys").append("<option value='"+t+"'>");
		});
		// transm
		$("#transms option").remove();
		$.unique($("#svl tbody:not(#vlt) div.dtransm:visible").map(function(el, i) { return $(i).text() }).sort()).each(function(i,t) { 
			$("#transms").append("<option value='"+t+"'>");
		});
		// imp
		$("#imps option").remove();
		$.unique($("#svl tbody:not(#vlt) div.dimp:visible").map(function(el, i) { return $(i).text() }).sort()).each(function(i,t) { 
			$("#imps").append("<option value='"+t+"'>");
		});
		// fuel
		$("#fuels option").remove();
		$.unique($("#svl tbody:not(#vlt) div.dfuel:visible").map(function(el, i) { return $(i).text() }).sort()).each(function(i,t) { 
			$("#fuels").append("<option value='"+t+"'>");
		});

	},
	step2 : function (nc) {
		// retrieve natcode
		n=nc;
		if($("#opts #et").siblings().length==0) {
			// define template
			t=$("#et");
			// create 6 rows from template
			eqc = { 
				"eqs" : [
					{ "eqid": "1", "eqtxt": J42R.text[J42R.lang].cv.opts1 },
					{ "eqid": "2", "eqtxt": J42R.text[J42R.lang].cv.opts2 },
					{ "eqid": "3", "eqtxt": J42R.text[J42R.lang].cv.opts3 },
					{ "eqid": "4", "eqtxt": J42R.text[J42R.lang].cv.opts4 },
					{ "eqid": "5", "eqtxt": J42R.text[J42R.lang].cv.opts5 },
					{ "eqid": "6", "eqtxt": J42R.text[J42R.lang].cv.opts6 },
					{ "eqid": "7", "eqtxt": J42R.text[J42R.lang].cv.opts7 },
					{ "eqid": "8", "eqtxt": J42R.text[J42R.lang].cv.opts8 },
					{ "eqid": "9", "eqtxt": J42R.text[J42R.lang].cv.opts9 },
					{ "eqid": "99", "eqtxt": J42R.text[J42R.lang].cv.opts99 }
				]
			};
			// render the template
			for(i=0;i<eqc.eqs.length;i++) {
				if(i%2==0) t.parent().append("<div class='row'>");
				r = Mustache.render(t.html(), eqc.eqs[i]);
				// console.log(r);
				// paste the template into the app
				t.parent().find(".row:last-of-type").append(r);
				
				if(i%2==1) t.parent().append("</div>")
				
			}
			// hide template
			t.hide();

			// on click of the header, show the detail section and select the item
			$("#opts .panel-heading").on("click", function () {
				// toggle the detail section
				$(this).next().toggle();
				// check the checkbox
				c=$(this).find("input");
				// console.log($(this).find(".panel-body").is(":visible"));
				if(c.prop("checked")==true && !$(this).parent().find(".panel-body").is(":visible")) 
					c.prop("checked", false); 
				else 
					c.prop("checked", true);
				
				// save the value
				LDR.vals2(c.parent().next().html(), c.prop("checked"));
				// select standard button
				$(this).parent().find("button")[1].click();
			});
			$("#opts .panel-heading").next().toggle();
						
			// add click handler to the option contents
			$("#opts button").on("click", function() { 
				// $(this).parent().find("input:hidden").val(); 
				// $(this).prev().attr("checked", true); 
				// save the value
				$(this).parent().find('input:hidden').val($(this).parent().find('button').index($(this))+1);
				$(this).parent().find('button').removeClass('active');
				$(this).addClass('active');
				LDR.vals2($(this).closest(".panel").find(".panel-heading big").html()+"_val", $(this).parent().find("input:hidden").val());
			});
			$("#opts .eqcl1").attr("title", J42R.text[J42R.lang].cv.eqcl1);
			$("#opts .eqcl2").attr("title", J42R.text[J42R.lang].cv.eqcl2);
			$("#opts .eqcl3").attr("title", J42R.text[J42R.lang].cv.eqcl3);
			$("#opts .eqcl4").attr("title", J42R.text[J42R.lang].cv.eqcl4);
		}
		// build select2 for countries
		$("#country").select2();

/*
		$("#mobile").on("change", function() {
			phone = $(this).val();
			isValidNumber(phone, LDR.gUP("market"))
			// console.log(isValidNumber(phone, "CH"));
			// console.log(phone + " - CH");
		});
*/
		$("#email, #mobile").on("change", function() {
			if($(this).val()!="") {
				if($(this).attr("id")==$("#mobile").attr("id") && isValidNumber($("#mobile").val(), LDR.gUP("market"))) {
					$(this).closest(".row").parent().parent().find(":hidden").show().find("input").val("");
					if($("#moberr").length>0) $("#moberr").remove();
					$("#mver").val("").focus();
				} else if($(this).attr("id")==$("#email").attr("id") && LDR.validateEmail($("#email").val())) {
					$(this).closest(".row").parent().parent().find(":hidden").show().find("input").val("");
					$("#ever").val("").focus();
				} else {
					if($(this).attr("id")==$("#mobile").attr("id")) {
						$("#mobile").parent().parent().append("<div id='moberr'>");
						$("#moberr").addClass("error").html(J42R.text[J42R.lang].svp.moberr);
						$("#moberr").addClass("error").html(J42R.text[J42R.lang].svp.moberr);
					}
					$(this).focus();
				}
			}
		});
		
	},
	validateEmail : function (email) {
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		return re.test(email);
	},
	sendEmail : function (email) {
		if(!validateEmail(email)) return false;
		// Todo: call ws to send email with code
		return true;
	},
	sendSMS : function (mob) {
		if(!isValidNumber(mob, LDR.gUP("market"))) return false;
		// Todo: call ws to send SMS with code
		return true;
	},
	verifyEmail : function (email,code) {
		if(!validateEmail(email)) return false;
		// Todo: call ws to verify if code is correct
		return true;
	},
	verifySMS : function (mob,code) {
		if(!isValidNumber(mob, LDR.gUP("market"))) return false;
		// Todo: call ws to verify if code is correct
		return true;
	},
	callWSValuation : function (mk, nc) {
		// mk = market
		// nc = natcode
		
		// Todo: call ws to verify if code is correct
		return true;
	},
	gas : function (o) {
		val="";
		if(o.data("select2")) {
			val=o.select2("data")[0].text;
		} else {
			val=o.val();
		}
		ga('ldr.send', 'event', o.attr("id"), 'selected', val);
		// console.log("event logged: "+o.attr("id")+" - "+val);
	},
	gas2 : function (i,v) {
		ga('ldr.send', 'event', i, 'selected', v);
		// console.log("event logged: "+o.attr("id")+" - "+val);
	},
	getText : function (id) {
		for (x in LDR.txt) {
			if(LDR.txt[x].id==id)
				return LDR.txt[x].text;
		}
	},
	refreshMamo : function () {
		
		$('.mamo').change();

		v=$('.mamo').val();
		$('.mamo option').remove()
		$(".mamo").select2(
			{
				placeholder: J42R.text[J42R.lang].global.st,
				data:[{id:null, text:null}]
			});
		m=LDR.mamoarr;
		// console.log(m);
		mr=[];
		reg=((parseInt($("#yyyy").val())*100)+(parseInt($("#mm").val())));
		for(i=0;i<m.length;i++) {
			// console.log(reg);
			// console.log(m[i].b);
			// console.log(m[i].e);
			if(m[i].b<reg && m[i].e>reg) {
				mr.push(m[i]);
			}
		}
		// console.log(m.length);
		// console.log(mr.length);
		$(".mamo").select2(
			{
				placeholder: J42R.text[J42R.lang].sv.mamop,
				data: mr
			});
		// console.log($(".mamo option").length);
		$('.mamo').select2("val", v);
		// console.log(v);
		
		// console.log(arguments.callee.caller);
		// console.log(document.activeElement);
		LDR.setFocus();
		// console.log(document.activeElement);

	},
	setFocus : function () {
		//console.log(document.activeElement);
		if($("#yyyy").val()=="") {
			$("#yyyy").select2("open");
			$(".select2-search__field:first").focus();
		} else if($("#mm").val()=="") {
			$("#mm").select2("open");
			$(".select2-search__field").focus();
		} else if($("#mil").val()=="" || $("#mil").val()=="25000") {
			$("#mil").focus();
		} else if($("#mamo").val()=="") {
			$("#mamo").select2("open");
		}
		//$(".select2-search__field:first").focus();
		// console.log(document.activeElement);
		// console.log(arguments.callee.caller);
	},
	setYears : function () {
		this.years(LDR.y);
		yrs = this.yrs.reverse();
		this.yrs = yrs;
		yrs.unshift({id: "", text: ""});
		//console.log(yrs);
		return yrs;
	},
	years : function(startYear) {
		var currentYear = new Date().getFullYear(), years = [];
		startYear = startYear || LDR.y;
		while ( startYear <= currentYear ) {
			LDR.yrs.push({ "id" : startYear, "text" : startYear });
			years.push(startYear++);
		} 
		return years;
	},
	setMonths : function() {
		months = [{id:1,text:1}, {id:2,text:2}, {id:3,text:3}, {id:4,text:4}, {id:5,text:5}, {id:6,text:6}, {id:7,text:7}, {id:8,text:8}, {id:9,text:9}, {id:10,text:10}, {id:11,text:11}, {id:12,text:12}];
		this.mts = months;
		months.unshift({id: "", text: ""});
		//console.log(months);
		return months;
	},
	vehicletable : function () {
		// click function on the filter
		$('.filterable .btn-filter').click(function(){
			var $panel = $(this).parents('.filterable'),
			$filters = $panel.find('.filters input'),
			$tbody = $panel.find('.table tbody');
			if ($filters.prop('disabled') == true) {
				$filters.prop('disabled', false);
				$filters.first().focus();
			} else {
				$filters.val('').prop('disabled', true);
				$tbody.find('.no-result').remove();
				$tbody.find('tr').show();
				$(".filters input").val("").keyup();
			}
		});
		// function to rebuild the drop downs in the filter after change
		$('.filterable .filters input').on("change", function(e){
			LDR.rebuildFilterDropDowns();
		});
		// function to filter the list after key was pressed
		// $(".filters input").not($(this)).keyup();
		$('.filterable .filters input').on("keydown", function(e){
			/* Ignore enter key */
			var code = e.keyCode || e.which;
			if (code == '13') return false;
		});
		$('.filterable .filters input').on("keyup click input change", function(e){
			/* Ignore tab key */
			var code = e.keyCode || e.which;
			// console.log(code);
			if (code == '9' || code == '13') return false;
			// ignore only enter key
			/* Useful DOM data and selectors */
			var $input = $(this),
			inputContent = $input.val().toLowerCase(),
			inputs = $(".filters input");
			$panel = $input.parents('.filterable'),
			column = $panel.find('.filters th').index($input.parents('th')),
			$table = $panel.find('.table'),
			$rows = $table.find('tbody');
			/* Dirtiest filter function ever ;) */
			var $filteredRows = $rows.filter(function(){
				var value = $(this).find('td').eq(column).text().toLowerCase();
				return value.indexOf(inputContent) === -1;
			});
			/* Clean previous no-result if exist */
			$table.find('tbody .no-result').remove();
			/* Show all rows, hide filtered ones (never do that outside of a demo ! xD) */
			// not the proper solutoin, as other filters are not applied if($(this).val()=="")
			// $rows.show();
			//console.log(e);
			if (code == '8' || code == '46' || e.type == 'input' || $(this).val()=="---" ) {
				$rows.show();
				if($(this).val()=="---") $(this).val("");
				// console.log("backspace or del");
				$(".filters input").each(function() { $(this).change(); });
				return;
			}
			$filteredRows.hide();
			$("#vlt").hide();
			$("#numd").html($("#svl table tbody:not(#vlt):visible").length);

			/* Prepend no-result row if all rows are filtered */
			if ($filteredRows.length === $rows.length) {
				//$table.find('tbody').prepend($('<tr class="no-result text-center"><td colspan="'+ $table.find('.filters th').length +'">No result found</td></tr>'));
				$(".table").prepend("<tbody id='norows' class='norows'><tr><td colspan='6'>"+J42R.text[J42R.lang].svl.noresults+"</td></tr></tbody>");
				$("#norows").on("click", function () {
					$(".filters input").val("").keyup();
				});
			} else {
				$(".norows").each(function() { $(this).remove(); });
			}
			
		});
		$('.filterable .filters input').on("change", function(e){
			// sending the information for this used filter
			ga('ldr.send', 'event', 'filter', $(this).attr("id"), $(this).val());
			act=0;
			fi=$('.filterable .filters input');
			fi.each(function () { if($(this).val()!="") act++; });
			// sending the information about how many filters are used
			if(act>0) ga('ldr.send', 'event', 'filterActive', 'ActiveFilters', act);
		});
	},
	// gUP == getURLParameter
	SortByName : function SortByName(a, b){
		var aName = a.name.toLowerCase();
		var bName = b.name.toLowerCase(); 
		return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
	},
	gUP : function(name) {
		if(LDR.config[name]) return LDR.config[name];
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
		if(results != null)
			return decodeURIComponent(results[1].replace(/\+/g, " "));
		else
			return (LDR.configDefaults[name]) ? LDR.configDefaults[name] : (name=="lng") ? J42R.lang : "";
	},
	defToggleColor : function () {
	/*
		cs = "background-color: "+$(".panel-heading").css("background-color")+"; color: "+$(".panel-heading").css("color")+";";
		$(".switch-toggle input:checked + label").css("style", cs);
	*/
	},
	defProgressBarColor : function () {
		c1=$("#t .active a").css("background-color").substring(4,$("#t .active a").css("background-color").length-1).split(",");
		r1=c1[0];
		g1=c1[1];
		b1=c1[2];
		cs = "background-color: #EAEAEA; background-image: linear-gradient(45deg,rgba("+r1+","+g1+","+b1+",0.15) 25%,transparent 25%,transparent 50%,rgba("+r1+","+g1+","+b1+",0.15) 50%,rgba("+r1+","+g1+","+b1+",0.15) 75%,transparent 75%,transparent) !important; width: 25%; ";
				
		if(typeof(LDR.gUP("style"))!="undefined" && LDR.gUP("style")!="default")
			$(".bar").attr("style", cs);
		$(".navbar .glyphicon").css("color", $("#t .active a").css("background-color"));
	},
	// facebook stuff:
	// This is called with the results from from FB.getLoginStatus().
	statusChangeCallback : function (response) {
		// console.log('statusChangeCallback');
		// console.log(response);
		// The response object is returned with a status field that lets the
		// app know the current login status of the person.
		// Full docs on the response object can be found in the documentation
		// for FB.getLoginStatus().
		if (response.status === 'connected') {
		  // Logged into your app and Facebook.
		  //testAPI();
		  // console.log("logged in");
			$("#svp .panel-heading").next().show();	
			$("#svi .panel-heading").next().hide();	
			$("#fname").focus();
			$('html, body').animate({ 
				scrollTop: $("#svp").offset().top
			}, 1000);
			FB.api('/me', function(fbu) {
				// console.log(JSON.stringify(fbu));
				//console.log(fbu.email);
				$("#fname").val(fbu.first_name + " " + fbu.last_name).change();
				$("#email").val(fbu.email).change();
			});

		} else if (response.status === 'not_authorized') {
		  // The person is logged into Facebook, but not your app.
		  // document.getElementById('status').innerHTML = 'Please log ' + 'into this app.';
			FB.login(function(response){
			// Handle the response object, like in statusChangeCallback() in our demo
			// code.
				LDR.checkLoginState();
			},{scope: 'public_profile,email'});
		} else {
		  // The person is not logged into Facebook, so we're not sure if
		  // they are logged into this app or not.
		  // document.getElementById('status').innerHTML = 'Please log ' + 'into Facebook.';
			FB.login(function(response){
				LDR.checkLoginState();
			},{scope: 'public_profile,email'});
		}
	},
	// This function is called when someone finishes with the Login
	// Button.  See the onlogin handler attached to it in the sample
	// code below.
	checkLoginState : function () {
		FB.getLoginStatus(function(response) {
		  LDR.statusChangeCallback(response);
		});
	},
	fblogin : function () {
		LDR.checkLoginState();
	}
};				




// define custom variable
// ga('
// this pageview is not required anymore (handled in the tab)
// ga('ldr.send', 'pageview');


/*

  // code to remove facebook login:
  //FB.api(
  //  "/me/permissions",
  //  "DELETE",
  //  function (response) {
  //    if (response && !response.error) {
  //      // handle the result 
  //    }
  //  }
  //);

  */
  
  
J42R = {
	defaultLang: 'en',
	cookievalid: 1, //1 day (1000*60*60*24)
	text: {},
	extractLang: function(kvl){
		// console.log(kvl);
		var lang;
		for (var i in kvl) {
			if(!isNaN(i) && kvl[i].split('=')) {
				var kv=kvl[i].split('=');
				if (kv[0]==='lang' || kv[0]==='lng')
					lang=kv[1].length>2
						?kv[1].charAt(0)+kv[1].charAt(1)
						:kv[1];
			}
		}
		return lang;
	},
	getUrlLang: function() {
		if (window.location.search.length<2)
			return undefined;
		return this.extractLang(window.location.search.substring(1).split('&'));
	},
	getCookieLang: function() {
		return this.extractLang(document.cookie.split('; '));
	},
	getLang: function() {
		if (typeof this.lang!=='string') {
			if (typeof (this.lang=this.getUrlLang())==='string');
			else if (typeof (this.lang=this.getCookieLang())==='string');
			else if (typeof (this.lang=navigator.language)==='string');
			else if (typeof (this.lang=navigator.userLanguage)==='string');
			else this.lang=this.defaultLang;
			if (this.lang.length>2)
				this.lang=this.lang.charAt(0)+this.lang.charAt(1);
		}
		return this.lang;
	},
	setLang: function(lang,cook) {
		this.lang = lang;
		if (cook) {
			var wl = window.location,
				now = new Date(),
				time = now.getTime();
			time += this.cookievalid;
			now.setTime(time);
			document.cookie = 'lang='+lang+';path='+wl.pathname+';domain='+wl.host+';expires='+now.toGMTString();
		}
		return this;
	},
	load: function() {
		var self=this,lang=this.getLang();
		// jQuery.support.cors = true;

		// $.ajaxSetup({ scriptCharset: "utf-8" , contentType: "application/json; charset=utf-8"});
		$.getJSON('./I18N/'+lang+'.json', {format: "json"},function(data) {
		// $.getJSON('http://transmog.net/cgi-bin/nph-mobilewebonastick-scroll.cgi/000000A/http/ldr.intdev.ch/I18N/en.json?format=json', {format: "json"},function(data) {
			// console.log(data);
			// console.log(JSON.parse(data));
			if(typeof(data)=='undefined') {
				// console.log("error interpreting the data...");
				// console.log('/I18N/'+lang+'.json');
				self.put(lang,{}).t();
			} else {
				// console.log("data interpreted...");
				self.put(lang,data).t();
			}
		}).error(function(jqXHR, textStatus, error){
			/*
			console.log("file could not be loaded...");
			console.log('./I18N/'+lang+'.json');
			console.log(jqXHR.responseText);
			console.log(textStatus);
			console.log(error);
			$("#content").append(textStatus+"<br>");
			$("#content").append(jqXHR.responseText);
			*/
			//self.put(lang,{}).t();
			
			$.getJSON('http://transmog.net/cgi-bin/nph-mobilewebonastick-scroll.cgi/000000A/http/ldr.intdev.ch/I18N/en.json?format=json', {format: "json"},function(data) {
				if(typeof(data)=='undefined') {
					// console.log("error interpreting the data...");
					// console.log('/I18N/'+lang+'.json');
					self.put(lang,{}).t();
				} else {
					// console.log("data interpreted...");
					self.put(lang,data).t();
				}
			});
			
		}).complete(function(jqXHR, textStatus) {
			/*
			console.log(textStatus);
			console.log(jqXHR.responseText);
			$("#content").append(jqXHR.responseText);
			*/
			// console.log(jqXHR.responseText);
		});
/*
		$.ajax({
			url: './I18N/'+lang+'.json',
			cache: false,
			contentType: "application/json; charset=utf-8",
			success: function(data) {
				console.log(data);
				if(typeof(data)=='undefined') {
					console.log("error interpreting the data...");
					self.put(lang,{}).t();
				} else {
					console.log("data interpreted...");
					self.put(lang,data).t();
				}
			},
			error: function(request, status, error) {
				console.log("file could not be loaded...");
				console.log(status);
				console.log(error);
				self.put(lang,{}).t();
			}
		});
*/
		return this;
	},
	put: function(lang,data) {
		if (typeof lang==='string'&&typeof data==='object') {
			var obj={};
			obj[lang]=data;
		} else
			obj=lang;
		this.text=$.extend(true,this.text,obj);
		return this;
	},
	get: function(key) {
		var keys=key.split('.'),
			lang=this.getLang(),
			obj=this.text[lang];
		while (typeof obj!=='undefined' && keys.length>0)
			obj=obj[keys.shift()];
		return typeof obj==='undefined' ? lang+'.'+key : obj;
	},
	t1: function(item) {
		if (typeof item==='object'&&item instanceof Element) {
			var it = $(item),
				key = it.attr('i18n');
			it.removeClass('I18N');
			if (typeof key==='undefined')
				key = it.text();
			it.attr('i18n',key).text(this.get(key));
		}
		return this;
	},
	t: function(item) {
		if (typeof this.text[this.getLang()]==='undefined') {
			this.load();
			return this;
		}
		if (typeof item==='undefined') {
			item = $('[I18N]');
			$('.I18N').each(function(){
				if (!$.contains(item,this))
					item = item.add(this);
			});
		}
		if (item instanceof jQuery)
			for (var i in item)
				this.t1(item[i]);
		else
			this.t1(item);
		return this;
	}
};


/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width

(function () {
  'use strict';
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    )
    document.querySelector('head').appendChild(msViewportStyle)
  }
})();
var ie10viewportworkaround = true;
