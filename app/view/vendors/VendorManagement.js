Ext.define('DEMO.view.vendors.VendorManagement' ,{
    extend		: 'Ext.panel.Panel',
    alias 		: 'widget.VendorManagement',

	layout		: 'card',
	activeItem	: 0,
	
    autoScroll  : true,

	items 		: [
		{
			xtype	: 'VendorAdd'
		},
		// {
			// xtype	: 'VenderEdit'
		// }
	],

	// Add the top toolbar
	dockedItems : [{
		xtype	: 'VendorManagementToolbar',
		dock	: 'top'
	}],

	
    initComponent	: function() {
        this.callParent(arguments);
    }
	
	
});