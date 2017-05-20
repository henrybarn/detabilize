/*
    Detabilize by Henry Barnathan
    Converts a table and its table-element children to divs
*/

$.fn.divilize = function() {
    var div = $('<div />');
    var elemAttrs = this[0].attributes;
	var tableAttrs = ['cellpadding','cellspacing','border','align','valign','width'];
    for (var attr = 0; attr < elemAttrs.length; attr++)
        if (tableAttrs.indexOf(elemAttrs[attr].name.toLowerCase()) === -1)
            div.attr(elemAttrs[attr].name, elemAttrs[attr].value);
        }
    div.addClass('divilize-'+$(this)[0].tagName.toLowerCase());
    $(this).contents().unwrap(this).wrapAll(div);
}

$.fn.detabilize = function() {
	var tableElems = ['table','thead','tbody','tfoot','tr','th','td'];
    if (tableElems.indexOf($(this)[0].tagName.toLowerCase()) !== -1) {
    	$(this).children().each(function(){
        	$(this).detabilize();
        });
    	$(this).divilize();
    }
}