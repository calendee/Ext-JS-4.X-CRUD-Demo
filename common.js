/**
 * Enable any previously disabled button when any button is clicked.
 *
 * @param Object node
 * @param String selector
 *
 * @returns void
 */
function enableSiblings(node, selector){

	var sibling = node.previousSibling(selector);
	while( sibling != null) {
		sibling.setDisabled(false);
		var sibling = sibling.previousSibling(selector);
	}


	var sibling = node.nextSibling(selector);
	while( sibling != null) {
		sibling.setDisabled(false);
		var sibling = sibling.nextSibling(selector);
	}
}


/**
 * Enable all the buttons in a toolbar.
 * 
 * @param Object toolbar - The alias of an existing toolbar
 *
 * @returns void
 */
function enableToolbarButtons(toolbar)
{
    // Need to get all siblings of the add operator, it is only button that
    // is enabled by default on page load.
    var btns = Ext.ComponentQuery.query(toolbar + ' > button');
    
    Ext.Array.each(btns, function(button) {
    	button.enable();
    });
    
}