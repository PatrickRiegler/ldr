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
						<li id="t1"><a href="#tab1" data-toggle="tab" class="I18N">progress.p1</a></li>
						<li id="t2"><a href="#tab2" data-toggle="tab" class="I18N">progress.p2</a></li>
						<li id="t3"><a href="#tab3" data-toggle="tab" class="I18N">progress.p3</a></li>
						<li id="t4"><a href="#tab4" data-toggle="tab" class="I18N">progress.p4</a></li>
					</ul>
				</div>
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
						<h3 class="panel-title">DEFAULT1 <big class="I18N">sv.title</big><span class="pull-right I18N">global.sh</span></h3>
					</div>
					<div class="panel-body">
						<div><p class="I18N">sv.toptxt</p></div>
						<div class="row">
							<div class="col-sm-4">
							  <label for="yyyy" class="I18N">sv.yyyy</label>
							  <select id="yyyy" class="yyyy js-example-basic-simple form-control" style="width: 100%"></select>
							</div>
							<div class="col-sm-4">
								<label for="mm" class="I18N">sv.mm</label>
								<select id="mm" class="mm js-example-basic-simple form-control" style="width: 100%"></select>
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
								<div class="desc"><p class="I18N">svl.toptxt</p></div>
								<table class="table table-hover">
									<thead>
										<tr class="filters">
											<th colspan="2" rowspan="2"><input type="text" id="desc" class="form-control" placeholder="" disabled></th>
											<th><input type="text" id="power" class="form-control" placeholder="" disabled></th>
											<th><input type="text" id="displ" class="form-control" placeholder="" disabled></th>
											<th><input type="text" id="body" class="form-control" placeholder="" disabled></th>
										</tr>
										<tr class="filters">
											<th><input type="text" id="transm" class="form-control" placeholder="" disabled></th>
											<th><input type="text" id="imp" class="form-control" placeholder="" disabled></th>
											<th><input type="text" id="price" class="form-control" placeholder="" disabled></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td colspan="2" rowspan="2">R8 4.2 FSI quattro</td>
											<td>346 (430)</td>
											<td>4163</td>
											<td>Coupe, 2d</td>
										</tr>
										<tr>
											<td>6 Gear Manual</td>
											<td>07/10-08/12</td>
											<td>111.100 €</td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td colspan="2" rowspan="2">R8 4.2 FSI quattro</td>
											<td>346 (430)</td>
											<td>4163</td>
											<td>Coupe, 2d</td>
											</tr><tr>
											<td>6 Gear Manual</td>
											<td>07/12-today</td>
											<td>117.100 €</td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td colspan="2" rowspan="2">R8 4.2 FSI quattro R tronic</td>
											<td>346 (430)</td>
											<td>4163</td>
											<td>Coupe, 2d</td>
											</tr><tr>
											<td>6 Gear Automatic</td>
											<td>07/10-08/12</td>
											<td>111.100 €</td>
										</tr>
									</tbody>
									<tbody>
										<tr>
											<td colspan="2" rowspan="2">R8 5.2 FSI quattro</td>
											<td>404 (550)</td>
											<td>5204</td>
											<td>Coupe, 2d</td>
											</tr><tr>
											<td>6 Gear Automatic</td>
											<td>07/12-today</td>
											<td>175.700 €</td>
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
						<div class="row">
<!--
							<div class="col-sm-12">
							  <label for="mamo" class="I18N">sv.mamo</label>
							  <select id="mamo" class="mamo js-example-basic-multiple form-control" style="width: 100%" multiple="multiple"></select>
							</div>
-->
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
										<label for="fname" class="control-label">Full Name</label>
									</div>
									<div class="col-md-7">
										<input id="fname" name="fname" type="text" placeholder="full name"
											class="input-xlarge" minlength="3" maxlength="100" required>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="row">
									<div class="col-md-5">
										<label for="address-line1" class="control-label">Address Line 1</label>
									</div>
									<div class="col-md-7">
										<input id="address1" name="address1" type="text" placeholder="address line 1"
										class="input-xlarge">
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="row">
									<div class="col-md-5">
										<label for="adress2" class="control-label">Address Line 2</label>
									</div>
									<div class="col-md-7">
										<input id="adress2" name="adress2" type="text" placeholder="address line 2"
											class="input-xlarge">
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="row">
									<div class="col-md-5">
										<label for="zip" class="control-label">Zip code</label>
									</div>
									<div class="col-md-7">
											<input id="zip" name="zip" type="text" placeholder="zip" class="input-xlarge" minlength="4" maxlength="10" required>
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="row">
									<div class="col-md-5">
										<label class="control-label">City / Town</label>
									</div>
									<div class="col-md-7">
										<input id="city" name="city" type="text" placeholder="city"
											class="input-xlarge">
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="row">
									<div class="col-md-5">
										<label for="country" class="control-label">Country</label>
									</div>
									<div class="col-md-7">
										<input id="country" name="country" type="text" placeholder="country"
											class="input-xlarge">
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="row">
									<div class="col-md-5">
										<label for="email" class="control-label">Email Address</label>
									</div>
									<div class="col-md-7">
										<input id="email" name="email" type="text" placeholder="email address"
											class="input-xlarge">
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="row">
									<div class="col-md-5">
										<label for="mobile" class="control-label">Mobile Phone</label>
									</div>
									<div class="col-md-7">
										<input id="mobile" name="mobile" type="text" placeholder="mobile phone"
											class="input-xlarge">
									</div>
								</div>
							</div>
							<div id="mv" class="col-sm-6">
								<div class="row">
									<div class="col-md-5">
										<label for="mver" class="control-label">Mobile Verification</label>
									</div>
									<div class="col-md-7">
										<input id="mver" name="mver" type="text" placeholder="mobile verification"
											class="input-xlarge">
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12">
								<div class="desc">
									For speeding up the process, we recommend you to using the above login options like Facebook, Google, Twitter, etc.
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="row">
									<div class="col-md-5">
										<label for="bp" class="control-label">Buying Price:</label>
									</div>
									<div class="col-md-7">
										<input id="bp" name="bp" type="text" placeholder="buying price"
											class="input-xlarge">
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12">
								<div class="desc" style="clear:both">
									Please specify the price for which you would buy the vehicle you have specified.<br>
									If we can organise this vehicle for you for the price given and you do not want to buy the vehicle anymore, we can charge a service fee of 10€ to you for our service.
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-3">
								<label for="toc" class="control-label">Terms and Conditions:</label>
							</div>
							<div class="col-md-9">
								<input id="toc" name="toc" type="checkbox" placeholder="terms and conditions"
									class="input-xlarge"> I accept:
									<ul>
										<li>That the company can share my personal details for the purpose of this particular vehicle with 3rd parties</li>
										<li>That I will buy the vehicle for the price given</li>
										<li>And the Terms of Conditions of this service</li>
									</ul>
							</div>
						</div>
						<div class="row">
							<div class="col-md-3">
								<label for="toc" class="control-label">Verify that you are a person:</label>
							</div>
							<div class="col-md-9">
								<!-- <div class="g-recaptcha" data-sitekey="6Lck7AMTAAAAAEdVcsSfBLY0bimLFOOzNWiuS1bY"></div> -->
								<div id="grc"></div>
								<div class="desc" style="clear:both">
								Please confirm that you are not a robot by verifying this captcha.
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-12">
								<div class="desc"><p class="I18N">cvi.bottomtxt</p></div>
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
			<li class="previous first" style="display:none;"><a href="#">First</a></li>
			<li class="previous"><a href="#">Previous</a></li>
			<li class="next last" style="display:none;"><a href="#">Last</a></li>
			<li class="next"><a href="#">Next</a></li>
		</ul>		
	</div>
	</form>
</section>