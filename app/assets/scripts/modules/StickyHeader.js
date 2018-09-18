import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.siteHeader = $(".site-header");
		this.headerTrigger = $(".large-hero__title");
		this.pageSections = $(".page-section");
		this.headerLinks = $(".primary-nav li a");
		this.createHeaderWaypoint();
		this.createSectionWaypoints();
		this.addSmoothScrolling();
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: this.headerTrigger[0],
			handler: function(direction) {
				if ( direction == "down") {
					that.siteHeader.addClass("site-header--dark");
				} else {
					that.siteHeader.removeClass("site-header--dark");
				}
			},
		}); 
	}

	createSectionWaypoints() {
		var that = this;
		this.pageSections.each(function(){
			var currentSection = this;
			new Waypoint({
				element: currentSection,
				handler: function(direction) {
					if (direction == "down") {
						var matchingHeaderLink = currentSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "18%"
			});
			new Waypoint({
				element: currentSection,
				handler: function(direction) {
					if (direction == "up") {
						var matchingHeaderLink = currentSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "-40%"
			});
		});
	}
}

export default StickyHeader;