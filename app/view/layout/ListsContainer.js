Ext.define('DEMO.view.layout.ListsContainer' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.ListsContainer',

    title : 'Customers',
	region: 'west',
    width: 600,

    split: true,
    collapsible: true,

	layout: 'card',
	items: [
		{xtype : 'CustomerList'},
		{xtype : 'VendorList'}
	],

    initComponent: function() {
        this.callParent(arguments);
    }
});