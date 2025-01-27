import React from 'react';
import { __ } from '@/components/_utils/_all';
import { TabsAnimated, TabList, TabPanel } from '@/components/TabsAnimated/index.tsx';

//Create or Remove Sidebar Menu
import { SidebarMenu } from '@/pages/ComponentsDemo/_SidebarMenu.js';


export default () => {

	React.useEffect(() => { // Equivalent to componentDidMount and componentDidUpdate:
		
		__( document ).ready( () => {
			//Create sidebar menu
	        SidebarMenu();
		});  
	});


	
    return (
	  <>
		  

		{/*<!-- Content 
		====================================================== -->*/}
		<section>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h1 className="poemkit-typo--h2">
							Tabs Animated
							<a className="poemkit-typo--h3 align-middle" href="https://github.com/xizon/poemkit/tree/main/src/client/components/TabsAnimated" target="_blank"><span className="poemkit-dir--right" style={{fontSize:"0.75rem",color: "#ababab",margin:".5rem .5rem 0 0"}}><svg style={{marginRight:".5rem"}} width="16" viewBox="0 0 122.88 91.26"><path fill="#d2d2d2" d="M8.32,0h106.24c4.58,0,8.32,3.74,8.32,8.32v74.62c0,4.57-3.74,8.32-8.32,8.32H8.32C3.74,91.26,0,87.51,0,82.94 V8.32C0,3.74,3.74,0,8.32,0L8.32,0z M54.46,72.22L32,58.61v-8.63l22.46-13.61v10.26l-13.65,7.69l13.65,7.7V72.22L54.46,72.22z M68.42,72.22l22.46-13.61v-8.63L68.42,36.37v10.26l13.65,7.69l-13.65,7.7V72.22L68.42,72.22z M117.97,23.29H5.29v60.46 c0,0.64,0.25,1.2,0.67,1.63c0.42,0.42,0.99,0.67,1.63,0.67h108.04c0.64,0,1.2-0.25,1.63-0.67c0.43-0.43,0.67-0.99,0.67-1.63V23.29 H117.97L117.97,23.29z M106.64,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11 C102.54,11.19,104.38,9.35,106.64,9.35L106.64,9.35z M78.8,9.35c2.27,0,4.11,1.84,4.11,4.11c0,2.27-1.84,4.11-4.11,4.11 c-2.27,0-4.11-1.84-4.11-4.11C74.69,11.19,76.53,9.35,78.8,9.35L78.8,9.35z M92.72,9.35c2.27,0,4.11,1.84,4.11,4.11 c0,2.27-1.84,4.11-4.11,4.11c-2.27,0-4.11-1.84-4.11-4.11C88.61,11.19,90.45,9.35,92.72,9.35L92.72,9.35z"/></svg>Docs on GitHub</span></a>
						</h1>
						<p>This is a Tabbed interfaces that can customize CSS transition effects.</p>
					</div>
				</div>
				{/*<!-- .row end -->*/}

			</div>
			{/*<!-- .container end -->*/}

		</section>




		{/*<!-- Content 
		====================================================== -->*/}
		<section className="poemkit-spacing--s poemkit-spacing--no-bottom">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3 className="app-header-title">Demos</h3>
						<hr />


					</div>
				</div>
				{/*<!-- .row end -->*/}

			</div>
			{/*<!-- .container end -->*/}

		</section>	

	   {/*<!-- Content 
		====================================================== -->*/}
		<section className="poemkit-spacing--s">
			<div className="container">
					<div className="row">
						<div className="col-12">

							<TabsAnimated>
								<TabList key="tab-list-1" defaultActive>Tab 1</TabList>
								<TabList key="tab-list-2">Tab 2</TabList>
								<TabList key="tab-list-3">Tab 3</TabList>

								<TabPanel key="tab-panel-1" defaultActive>
									<p>Hi, this is the first tab.</p>
								</TabPanel>
								<TabPanel key="tab-panel-2">
									<p>This is the 2nd tab.</p>
									<p>This is the 2nd tab.</p>
									<p>This is the 2nd tab.</p>
								</TabPanel>
								<TabPanel key="tab-panel-3">
									<p>And this is the 3rd tab.</p>
								</TabPanel>    
							</TabsAnimated>	


						</div>
					</div>
					{/*<!-- .row end -->*/}


			</div>
			{/*<!-- .container end -->*/}

		</section>



 
		{/*<!-- API 
		====================================================== -->*/}
		<section>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3 className="app-header-title">API</h3>
						<hr />


						<article className="poemkit-spacing--s" itemProp="text">
							<h4>Tabs Animated</h4>
							<div>
								<pre>import {`{TabsAnimated}`} from '@/components/TabsAnimated/index.tsx';</pre>
							</div>

							<div className="table-responsive-md">

								<table className="table table-bordered table-striped mb-5">
									<thead>
										<tr>
											<th>Property</th>
											<th>Type</th>
											<th>Default</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
										</tr>
										
									</tbody>
								</table>

							</div>

							{/*<!-- ++++++++ -->*/}

							<h4>Tab List</h4>
							<div>
								<pre>import {`{TabList}`} from '@/components/TabsAnimated/index.tsx';</pre>
							</div>

							<div className="table-responsive-md">
								<table className="table table-bordered table-striped mb-5">
									<thead>
										<tr>
											<th>Property</th>
											<th>Type</th>
											<th>Default</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>key</code></td>
											<td>string | <code>tab-list-*</code></td>
											<td>-</td>
											<td>A “key” is a special string attribute you need to include when creating lists of elements. Let’s assign a key to our list of items. Must contain the string <code>tab-list</code></td>
										</tr>
										<tr>
											<td><code>defaultActive</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Set an item to activate by default</td>
										</tr>
									</tbody>
								</table>



							</div>

							{/*<!-- ++++++++ -->*/}

							<h4>Tab Panel</h4>
							<div>
								<pre>import {`{TabPanel}`} from '@/components/TabsAnimated/index.tsx';</pre>
							</div>

							<div className="table-responsive-md">
								<table className="table table-bordered table-striped">
									<thead>
										<tr>
											<th>Property</th>
											<th>Type</th>
											<th>Default</th>
											<th>Description</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><code>key</code></td>
											<td>string | <code>tab-panel-*</code></td>
											<td>-</td>
											<td>A “key” is a special string attribute you need to include when creating lists of elements. Let’s assign a key to our list of items. Must contain the string <code>tab-panel</code></td>
										</tr>
										<tr>
											<td><code>defaultActive</code></td>
											<td>boolean</td>
											<td>false</td>
											<td>Set an item to activate by default</td>
										</tr>
										<tr>
											<td><code>tabpanelClass</code></td>
											<td>string</td>
											<td>-</td>
											<td>Additional style name, such as <code>poemkit-outer-shadow--regular</code></td>
										</tr>
									</tbody>
								</table>

								<p className="mb-5">It accepts all props(include data-* attributes) which native div support.</p>


							</div>



						</article>


					</div>
				</div>
				{/*<!-- .row end -->*/}


			</div>
			{/*<!-- .container end -->*/}
		</section>



        
      </>
    );
};