Ext.define('DEMO.view.customers.CustomerManagement' ,{
    extend		: 'Ext.panel.Panel',
    alias		: 'widget.CustomerManagement',

	layout		: 'card',
	activeItem	: 0,
	
    autoScroll  : true,

	items 		: [
		{
			xtype	: 'CustomerAdd'
		},
		{
			xtype	: 'CustomerEdit'
		}
	],

	// Add the top toolbar
	dockedItems : [{
		xtype: 'CustomerManagementToolbar',
		dock: 'top'
	}],

	
    initComponent	: function() {
        this.callParent(arguments);
    }
});