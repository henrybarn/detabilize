/*
    Detabilize by Henry Barnathan
    Converts a table and its table-element children to divs
*/

$.fn.divilize = function() {
    var div = $('<div />'); // Creates a div
    var elemAttrs = this[0].attributes; // Gets attributes of calling element
	var tableAttrs = ['cellpadding','cellspacing','border','align','valign','width', 'colspan', 'rowspan']; // List of table element attributes
    for (var attr = 0; attr < elemAttrs.length; attr++) // Loops through attributes of the calling element
        if (tableAttrs.indexOf(elemAttrs[attr].name.toLowerCase()) === -1) // If attribute is not a table element attribute
            div.attr(elemAttrs[attr].name, elemAttrs[attr].value); // Assign attribute to new div
        }
    div.addClass('divilize-'+$(this)[0].tagName.toLowerCase()); // Assign mandatory class
    $(this).contents().unwrap(this).wrapAll(div); // Copy children
}

$.fn.detabilize = function() {
	var tableElems = ['table','thead','tbody','tfoot','tr','th','td']; // List of table elements
    if (tableElems.indexOf($(this)[0].tagName.toLowerCase()) !== -1) { // If calling element is a table element 
    	$(this).children().each(function(){ // Visits each child of calling element
        	$(this).detabilize(); // Recursion for children
        });
    	$(this).divilize(); // Calls function to convert element to div
    }
}