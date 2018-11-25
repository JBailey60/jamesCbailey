		/* Using jquery, find the div/container that holds your items that will be filtered by isotope. For this example, it is the id "#isotopGrid". For this
				id, we then identify the class name that is used to identify each of the boxes within the container, which, for this example, is ".grid-item". */
		$('#isotopeGrid').isotope({
			// options
			itemSelector: '.grid-item',
			layoutMode: 'fitRows'
		});
	
		/* Using jquery, we find the buttons that will cause the filtering to occur. My buttons are grouped together within a div whose id is "#filterButtons". On the 
				click event for any of those buttons which have the data-filter attribute applied, we find the filter name (selector) and we then use the isotope function
				to filter all of the boxes in the grid that contain the class name identified by the value of the data-filter. */
    $('#filterButtons button').click(function(){
        var selector = $(this).attr('data-filter');
        $('#isotopeGrid').isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });