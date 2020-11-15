const progressBar = document.getElementById( 'kst-wp-reading-progress-bar' );

// Make sure the progress bar exists.
if ( progressBar ) {
	// Get all the elements you need.
	const contentWrap = progressBar.closest( '.wp-reading-progress-bar' );
	const percentHolder = progressBar.nextElementSibling;

	// Calculate Values.
	const parentPaddingTop = parseInt( contentWrap.parentElement.style.paddingTop ) || 0;
	const barHeight = contentWrap.offsetHeight;
	const contentHeight = contentWrap.parentElement.offsetHeight - barHeight; // 100%
	const parentOffestTop = contentWrap.parentElement.offsetTop;
	const scrollingOffset = parentOffestTop + barHeight;
	const percentScrolled = contentHeight / 100;

	// Used later for adding the scrolled/viewed percents.
	let alreadyScrolled = 0;

	// Add the percent on page load.
	percentHolder.innerHTML = progressBar.value + '%';

	// If there is no location selected, make a default configuration, by adding a class.
	if ( ! contentWrap.classList.contains( 'nolocation' ) ) {
		contentWrap.parentElement.classList.add( 'kst-wp-reading-progress-bar-container' );
	}

	window.addEventListener( 'scroll', () => {
		// Get the page scrolling amount.
		let scrolled = window.pageYOffset || ( document.documentElement || document.body.parentNode || document.body ).scrollTop;

		// Make the progress element sticky to the side, if is scrolled out of window.
		if ( scrolled > parentOffestTop ) {
			contentWrap.parentElement.style.paddingTop = barHeight + parentPaddingTop + 60 + 'px';
			contentWrap.classList.add( 'fixed' );
		} else {
			contentWrap.parentElement.style.paddingTop = parentPaddingTop + 'px';
			contentWrap.classList.remove( 'fixed' );
		}

		// Adjusting the scroll now, so we can create the percents.
		scrolled = scrolled - scrollingOffset + ( window.innerHeight / 2 );

		if ( scrolled < 0 ) {
			scrolled = 0;
		}
		if ( scrolled > contentHeight ) {
			scrolled = contentHeight;
		}

		// Calculating percents.
		const scrollingAmount = Math.floor( scrolled / percentScrolled );

		// Make sure we add only once the same percent.
		if ( alreadyScrolled !== scrollingAmount ) {
			alreadyScrolled = scrollingAmount;

			progressBar.value = scrollingAmount;
			percentHolder.innerHTML = scrollingAmount + '%';
		}
	} );
}

