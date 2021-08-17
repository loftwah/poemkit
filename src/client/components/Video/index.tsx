/* 
 *************************************
 * <!-- Video -->
 *************************************
 */
import React, { Component } from 'react';

/*-- Apply Third-party plugins (import location should be in front of "global scripts and styles") --*/
import '@uixkit.react/components/_plugins/_lib-bootstrap';
import '@uixkit.react/components/_plugins/_lib-icons';
import TweenMax, { TimelineMax } from '@uixkit.react/components/_plugins/_lib-gsap';

// Player
import { Plyr } from '@uixkit.react/components/_plugins/_lib-player';


/*-- Apply global scripts and styles --*/
import '@uixkit.react/components/_utils/styles/_all.scss';
import '@uixkit.react/components/_utils/styles/rtl/_all.scss';
import { __ } from '@uixkit.react/components/_utils/_all';


interface VideoConfig {
	muted?: boolean | undefined;
	autoplay?: boolean | undefined;
	controls?: string[] | undefined;
	loop?: {
		[key: string]: boolean | undefined;
	};
}

type VideoProps = {
	config: string | VideoConfig;
	src?: string;
	/** -- */
	attributes?: any;
};
type VideoState = false;



export default class Video extends Component<VideoProps, VideoState> {

	constructor(props) {
		super(props);
	}
	
	componentDidMount(){
		

		__( document ).ready( function() {

			
		
			__( '[data-plyr-config]' ).each( function(this: any, index: number, curSelector: string ) {
				const videoID = 'app-video-' + __.GUID.create();
				__( this ).attr( 'id', videoID );
				const player = new Plyr('#' + videoID);	
				
				
				player.on('ready', function( event ) {
					const instance: any = event.detail.plyr;
					const config = JSON.parse( instance.media.dataset.plyrConfig );

					/* ---------  Video Modal initialize */
					instance.on( 'loadedmetadata', function( e ) {

						const obj = instance.media,
							  clientHeight =  obj.clientHeight,
							  clientWidth =  obj.clientWidth,

							  //retrieve the dimensions (height and width)
							  videoWidth = obj.videoWidth,
							  videoHeight = obj.videoHeight;


						console.log('video#'+videoID+' : ', {
							'clientHeight: ': clientHeight,
							'clientWidth: ': clientWidth,
							'videoHeight: ': videoHeight,
							'videoWidth: ': videoWidth
						});




					});


					/* ---------  Default settings  */
					if ( typeof(config.muted) !== 'undefined' ) {
						instance.media.muted = config.muted;
					}
				


					/* ---------  Fix an error of Video auto play is not working in browser  */
					if ( config.autoplay ) {
						instance.media.muted = true;
						instance.media.play();
					}




					/* ---------  Display video playback progress  */
					let autoPlayOK = false;
					instance.on( 'timeupdate', function() {

						//The currentTime attribute has been updated. Again.
						autoPlayOK = true;
						if ( instance.currentTime >= instance.duration ) {
							autoPlayOK = true;
							instance.off( 'timeupdate' );

							console.log( 'replay ready...' );
						} 

					});

					/* ---------  Callback for when a video has ended */
					instance.on( 'ended', function() {
						console.log( 'video is done!' );
					});

					

				});
				
				

				
				
				
				
			});
			

		});

		
	}
	
	render() {
		
		
		const {
			config,
			src,
			...attributes
		} = this.props;
		
	
		return (
		  <>
			{/* Note: data-* attributes are passed using props to 
			avoid  `Warning: Invalid value for prop `poster` on <video> tag.` */}
			<video playsInline controls src={src} data-plyr-config={config || '{"muted":false,"autoplay":false,"controls":["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],"loop":{"active":false}}'}  {...attributes}></video>
		
		  </>
		)
	}
}

