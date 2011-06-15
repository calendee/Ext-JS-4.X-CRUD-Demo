Ext.define('DEMO.view.layout.ManagementArea' ,{
    extend	: 'Ext.tab.Panel',
    alias	: 'widget.ManagementArea',

	region	: 'center',

    items: [
        {
			title	: 'Customer Management',
			xtype	: 'CustomerManagement'
        },
        {
			title	: 'Vendor Management',
			xtype	: 'VendorManagement'
        }
    ],

    initComponent: function() {
        this.callParent(arguments);
    }
});