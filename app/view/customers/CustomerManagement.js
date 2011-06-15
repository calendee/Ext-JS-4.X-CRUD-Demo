Ext.define('DEMO.view.customers.CustomerManagement' ,{
    extend	: 'Ext.panel.Panel',
    alias : 'widget.CustomerManagement',

	layout	: 'card',
	activeItem: 0,
	
    autoScroll  : true,

	items : [
		// {
			// xtype	: 'CustomerList'
		// },
		// {
			// xtype	: 'CustmomerOrders'
		// }
	],

	// Add the top toolbar
	dockedItems : [{
		// xtype: 'CustomerMgmtToolbar',
		// dock: 'top'
	}],

	
    initComponent: function() {
        this.callParent(arguments);
    }
	
	
});