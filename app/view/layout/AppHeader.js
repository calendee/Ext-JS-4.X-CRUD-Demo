Ext.define('DEMO.view.layout.AppHeader' ,{
    extend: 'Ext.container.Container',
    alias : 'widget.AppHeader',

	id: 'app-header',

	region: 'north',
	layout: 'hbox',
	height: 35,
	xtype: 'box',
	
	html	: 'XYZ Company - <span class="subtitle">Customer and Vendor Management</span>',

    initComponent: function() {
        this.callParent(arguments);
    }
});