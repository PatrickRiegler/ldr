<?php
//header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset=UTF-8");
?>

<section id="ldr">
	<div id="rootwizard">
		<div class="navbar">
			<div class="navbar-inner">
				<div class="container">
					<ul id="t">
					<span class="glyphicon glyphicon-arrow-left" aria-hidden="true" style="float:left;"></span>
						<li id="t1"><a href="#tab1" data-toggle="tab" class="I18N">progress.p1</a></li>
						<li id="t2"><a href="#tab2" data-toggle="tab" class="I18N">progress.p2</a></li>
						<li id="t3"><a href="#tab3" data-toggle="tab" class="I18N">progress.p3</a></li>
						<li id="t4"><a href="#tab4" data-toggle="tab" class="I18N">progress.p4</a></li>
					<span class="glyphicon glyphicon-arrow-right" aria-hidden="true" style="float:left;"></span>
					</ul>
				</div>
				<div class="panel-footer" style="display:none;"></div>
			</div>
		</div>
		<div id="bar" class="progress progress-striped active">
			<div class="bar"></div>
		</div>
		<div class="tab-content">
			<div class="tab-pane" id="tab1">
				<form id="ldrf" name="ldrf" method="get" class="form-horizontal" onsubmit="return false;">
				<div id="sv" class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title"><big class="I18N">sv.title</big><span class="pull-right I18N">global.sh</span></h3>
					</div>
					<div class="panel-body">
						<div><p class="I18N">sv.toptxt</p></div>
						<div class="row">
							<div class="col-sm-8 form-control-group">
								<div class="row">
									<div class="col-xs-6">
									  <label for="yyyy" class="I18N">sv.yyyy</label>
									  <select id="yyyy" class="yyyy js-example-basic-simple form-control" style="width: 100%"></select>
									</div>
									<div class="col-xs-6">
										<label for="mm" class="I18N">sv.mm</label>
										<select id="mm" class="mm js-example-basic-simple form-control" style="width: 100%"></select>
									</div>
								</div>
							</div>
							<div class="col-sm-4 form-control-group">
							  <label for="mil" class="I18N">sv.mil</label>
							  <input type="text" id="mil" name="mil" class="mil form-control normal-input" style="width: 100%" min="1000" max="500000" step="100" value="25000">
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12">
							  <label for="mamo" class="I18N">sv.mamo</label>
							  <select id="mamo" name="mamo" class="mamo js-example-basic form-control" style="width: 100%"></select>
							</div>
						</div>
						<input type="hidden" name="mmt" id="mmt" value="">
						<div class="desc"><p class="I18N">sv.bottomtxt</p></div>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-12">
						<div class="alert alert-danger">
							<a href="#" class="close" data-dismiss="alert">&times;</a>
							<strong class="I18N">svl.error</strong> <span class="I18N">svl.errortxt</span>
						</div>
					</div>
					<div class="col-sm-12">
						<div id="svl" class="panel panel-primary filterable">
							<div class="panel-heading panel-heading-open">
								<h3 class="panel-title I18N">svl.title</h3>
								<div class="pull-right">
									<button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span> Filter</button>
								</div>
							</div>
							<div class="panel-body">
								<div class="desc svltoptxt" id="svltoptxtnofilters"><p class="I18N">svl.toptxtnofilters</p></div>
								<div class="desc svltoptxt" id="svltoptxt">
									<p class="I18N">svl.toptxt</p>
									<span id="numf">XX</span>&nbsp;<span class="I18N small">svl.found</span>&nbsp;-&nbsp;<span id="numd">XX</span>&nbsp;<span class="I18N small">svl.displayed</span>
								</div>
								<table class="table table-hover">
									<thead>
										<tr class="filters">
											<th width="30%">
												<div class="showImg"></div>
												<div>
													<div class="filtergrp btn-group">
														<input type="text" list="descs" id="desc" class="form-control" placeholder="" disabled>
														<span class="searchclear glyphicon glyphicon-remove-circle"></span>
													</div>
													<datalist id="descs">
														<option value="">
													</datalist>
												</div>
											</th>
											<th>
												<div>
													<div class="filtergrp btn-group">
														<input type="text" list="powers" id="power" class="form-control" placeholder="" disabled>
														<span class="searchclear glyphicon glyphicon-remove-circle"></span>
													</div>
													<datalist id="powers">
														<option value="">
													</datalist>
												</div>
												<div>
													<div class="filtergrp btn-group">
														<input type="text" list="displs" id="displ" class="form-control" placeholder="" disabled>
														<span class="searchclear glyphicon glyphicon-remove-circle"></span>
													</div>
													<datalist id="displs">
														<option value="">
													</datalist>
												</div>
												<div>
													<div class="filtergrp btn-group">
														<input type="text" list="bodys" id="body" class="form-control" placeholder="" disabled>
														<span class="searchclear glyphicon glyphicon-remove-circle"></span>
													</div>
													<datalist id="bodys">
														<option value="">
													</datalist>
												</div>
												<div>
													<div class="filtergrp btn-group">
														<input type="text" list="transms" id="transm" class="form-control" placeholder="" disabled>
														<span class="searchclear glyphicon glyphicon-remove-circle"></span>
													</div>
													<datalist id="transms">
														<option value="">
													</datalist>
												</div>
												<div>
													<div class="filtergrp btn-group">
														<input type="text" list="imps" id="imp" class="form-control" placeholder="" disabled>
														<span class="searchclear glyphicon glyphicon-remove-circle"></span>
													</div>
													<datalist id="imps">
														<option value="">
													</datalist>
												</div>
												<div>
													<div class="filtergrp btn-group">
														<input type="text" list="fuels" id="fuel" class="form-control" placeholder="" disabled>
														<span class="searchclear glyphicon glyphicon-remove-circle"></span>
													</div>
													<datalist id="fuels">
														<option value="">
													</datalist>
												</div>
											</th>
										</tr>
									</thead>
									<tbody id="vlt">
										<tr>
											<td class="vlpt">
												<div class="showImg"><img src="{{vp}}" width="100em"></div>
												<div class="vTxt ddesc">{{vtxt}}</div>
											</td>
											<td>
												<div class="dpower">{{vk}} ({{vh}})</div>
												<div class="ddispl">{{vct}} <span class="I18N">svl.ccm</span></div>
												<div class="dbody">{{vbd}}, {{vd}} <span class="I18N">svl.doors</span></div>
												<div class="dtransm">{{vg}}, {{vt}}</div>
												<div class="dimp">{{vb}} - {{ve}}</div>
												<div class="dfuel">{{vf}}</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div class="col-sm-12">
						<div class="alert alert-danger">
							<a href="#" class="close" data-dismiss="alert">&times;</a>
							<strong class="I18N">svl.error</strong> <span class="I18N">svl.errortxt</span>
						</div>
					</div>
				</div>
				</form>
			</div>
			<div class="tab-pane" id="tab2">
				<form id="ldrf2" name="ldrf2" method="get" class="form-horizontal" onsubmit="return false;">
				<div id="sv" class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title"><big class="I18N">cv.title</big><span class="pull-right I18N">global.sh</span></h3>
					</div>
					<div class="panel-body">
						<div><p class="I18N">cv.toptxt</p></div>
						<div class="row" id="opts">
							<div id="et">
								{{#eqs}}
								<div id="{{eqid}}" class="col-sm-6 col-md-6" >
									<div class="panel panel-primary">
										<div class="panel-heading">
											<h3 class="panel-title">
												<div class="checkbox" style="float:left">
													<input type="checkbox" style="float:inherit;"/>
												</div>
												<big>{{eqtxt}}</big>
											</h3>
										</div>
										<div class="panel-body">
											<div class="btn-group" role="group" aria-label="sw_{{eqid}}">
												<button type="button" class="btn btn-default I18N eqcl1" onClick="" title="">cv.eqcl1</button>
												<input type="hidden" name="sw_{{eqid}}_val" value="2">
												<button type="button" class="btn btn-default I18N eqcl2" onClick="" title="">cv.eqcl2</button>
												<button type="button" class="btn btn-default I18N eqcl3" onClick="" title="">cv.eqcl3</button>
												<button type="button" class="btn btn-default I18N eqcl4" onClick="" title="">cv.eqcl4</button>
											</div>
										</div>
									</div>
								</div>
								{{/eqs}}
							</div>
						</div>
						<div class="desc"><p class="I18N">cv.bottomtxt</p></div>
					</div>
				</div>
				</form>
			</div>
			<div class="tab-pane" id="tab3">
				<form id="ldrf3" name="ldrf3" method="get" class="form-horizontal" onsubmit="return false;">
				<div id="svi" class="panel panel-primary">
					<div class="panel-heading">
					  <h3 class="panel-title"><big class="I18N">cvi.title</big><span class="pull-right I18N">global.sh</span></h3>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-sm-12">
								<div class=""><p class="I18N">cvi.toptxt</p></div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-4">
								<a class="btn btn-block btn-social btn-facebook">
									<i class="fa fa-facebook"></i> <span class="I18N">cvi.facebook</span>
									<!-- <i class="fa fa-facebook"></i> <fb:login-button scope="public_profile,email" onlogin="checkLoginState();"><span class="I18N">cvi.facebook</fb:login-button></span> -->
								</a>
							</div>
							<div class="col-sm-4">
								<a class="btn btn-block btn-social btn-google-plus">
									<i class="fa fa-google"></i> <span class="I18N">cvi.google</span>
								</a>
							</div>
							<div class="col-sm-4">
								<a class="btn btn-block btn-social btn-twitter">
									<i class="fa fa-twitter"></i> <span class="I18N">cvi.twitter</span>
								</a>
							</div>
						</div>
						
						<div class="row">
							<div class="col-sm-12">
								<div><div id="status"></div></div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12">
								<div class="desc"><p class="I18N">cvi.bottomtxt</p></div>
							</div>
						</div>
					</div>
				</div>

				
				<div id="svp" class="panel panel-primary">
					<div class="panel-heading">
					  <h3 class="panel-title"><big class="I18N">svp.title</big><span class="pull-right I18N">global.sh</span></h3>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-sm-12">
								<div class=""><p class="I18N">svp.toptxt</p></div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="row">
									<div class="col-md-5">
										<label for="fname" class="control-label I18N">svp.fullname</label>
									</div>
									<div class="col-md-7">
										<input id="fname" name="fname" type="text" placeholder=""
											class="input-xlarge form-control" minlength="3" maxlength="100" required>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="row">
									<div class="col-md-5">
										<label for="address1" class="control-label I18N">svp.adr1</label>
									</div>
									<div class="col-md-7">
										<input id="address1" name="address1" type="text" placeholder=""
										class="input-xlarge form-control">
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="row">
									<div class="col-md-5">
										<label for="address2" class="control-label I18N">svp.adr2</label>
									</div>
									<div class="col-md-7">
										<input id="address2" name="address2" type="text" placeholder=""
											class="input-xlarge form-control">
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="row">
									<div class="col-md-5">
										<label for="zip" class="control-label I18N">svp.zip</label>
									</div>
									<div class="col-md-7">
										<input id="zip" name="zip" type="text" placeholder="" 
											class="input-xlarge form-control" minlength="4" maxlength="10" required>
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="row">
									<div class="col-md-5">
										<label for="city" class="control-label I18N">svp.city</label>
									</div>
									<div class="col-md-7">
										<input id="city" name="city" type="text" placeholder=""
											class="input-xlarge form-control">
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="row">
									<div class="col-md-5">
										<label for="country" class="control-label I18N">svp.country</label>
									</div>
									<div class="col-md-7">
										<select id="country" class="form-control js-example-responsive" style="width: 90%;">
											<option value="AT">Austria</option>
											<option value="DE">Germany</option>
											<option value="LI">Liechtenstein</option>
											<option value="CH" selected>Switzerland</option>
										</select>
<!--
										<div id="country" class="bfh-selectbox bfh-countries" data-country="US" data-flags="false">
										</div>
										<input id="country" name="country" type="text" placeholder=""
											class="input-xlarge">
-->
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="row">
									<div class="col-md-5">
										<label for="email" class="control-label I18N">svp.email</label>
									</div>
									<div class="col-md-7">
										<div class="input-group">
											<span class="input-group-addon" id="sizing-addon1">@</span>
											<input id="email" name="email" type="email" placeholder=""
												class="input-xlarge form-control" required>
										</div>
									</div>
								</div>
							</div>
							<div id="ev" class="col-sm-6">
								<div class="row">
									<div class="col-md-5">
										<label for="ever" class="control-label I18N">svp.emailv</label>
									</div>
									<div class="col-md-7">
										<input id="ever" name="ever" type="text" placeholder=""
											class="input-xlarge form-control">
										<span class="desc I18N">svp.emailvtxt</span>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="row">
									<div class="col-md-5">
										<label for="mobile" class="control-label I18N">svp.mob</label>
									</div>
									<div class="col-md-7">
										<div class="input-group">
											<span class="input-group-addon" id="sizing-addon1"><i class="fa fa-mobile"></i></span>
											<input id="mobile" name="mobile" type="text" placeholder=""
												class="input-xlarge form-control">
										</div>
									</div>
								</div>
							</div>
							<div id="mv" class="col-sm-6">
								<div class="row">
									<div class="col-md-5">
										<label for="mver" class="control-label I18N">svp.mobv</label>
									</div>
									<div class="col-md-7">
										<input id="mver" name="mver" type="text" placeholder=""
											class=" input-xlarge form-control">
										<span class="desc I18N">svp.mobvtxt</span>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12">
								<div class="desc I18N">svp.midtxt</div>
							</div>
						</div>
<!--
						<div class="row">
							<div class="col-sm-6">
								<div class="row">
									<div class="col-md-5">
										<label for="sp" class="control-label I18N">svp.sellprice</label>
									</div>
									<div class="col-md-7">
										<input id="sp" name="sp" type="text" placeholder=""
											class="input-xlarge form-control">
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12">
								<div class="desc" style="clear:both">
									<span class="I18N">svp.sellpriceinfo</span>
								</div>
							</div>
						</div>
-->
						<div class="row">
							<div class="col-md-3">
								<label for="toc" class="control-label I18N">svp.tac</label>
							</div>
							<div class="col-md-9">
								<input id="toc" name="toc" type="checkbox" placeholder=""
									class="input-xlarge" required><span class="I18N">svp.accept</span>
									<ul>
										<li class="I18N">svp.li1</li>
										<li class="I18N">svp.li2</li>
										<li class="I18N">svp.li3</li>
									</ul>
							</div>
						</div>
						<div class="row">
							<div class="col-md-3">
								<label for="toc" class="control-label I18N">svp.captcha</label>
							</div>
							<div class="col-md-9">
								<div class="g-recaptcha" data-sitekey="6Lck7AMTAAAAAEdVcsSfBLY0bimLFOOzNWiuS1bY"></div>
								<div id="grc"></div>
								<div class="desc" style="clear:both">
									<span class="I18N">svp.captchatxt</span>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12">
								<div class="desc"><p class="I18N">svp.bottomtxt</p></div>
							</div>
						</div>

					</div>
				</div>
				</form>
			</div>
			<div class="tab-pane" id="tab4">
				<form id="ldrf4" name="ldrf4" method="get" class="form-horizontal" onsubmit="return false;">
				<div id="sr" class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title"><big class="I18N">sr.title</big><span class="pull-right I18N">global.sh</span></h3>
					</div>
					<div class="panel-body">
						<div><p class="I18N">sr.toptxt</p></div>
						<div class="row">
<!--
							<div class="col-sm-12">
							  <label for="mamo" class="I18N">sv.mamo</label>
							  <select id="mamo" class="mamo js-example-basic-multiple form-control" style="width: 100%" multiple="multiple"></select>
							</div>
-->
						</div>
						<div class="desc"><p class="I18N">sr.bottomtxt</p></div>
					</div>
				</div>
				</form>
			</div>
		</div>
		<ul class="pager wizard">
			<li class="previous first" style="display:none;"><a href="#" class="I18N">global.first</a></li>
			<li class="previous"><a href="#" class="I18N">global.prev</a></li>
			<li class="next last" style="display:none;"><a href="#" class="I18N">global.last</a></li>
			<li class="next"><a href="#" class="I18N">global.next</a></li>
		</ul>		
	</div>
	</form>
</section>