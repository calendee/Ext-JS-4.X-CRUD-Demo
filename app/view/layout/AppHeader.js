Ext.define('DEMO.view.layout.AppHeader' ,{
    extend: 'Ext.container.Container',
    alias : 'widget.AppHeader',

	id: 'app-header',

	region: 'north',
	height: 35,

	html	: 'XYZ Company - <span class="subtitle">Customer and Vendor Management</span>',

    initComponent: function() {
        this.callParent(arguments);
    }
});