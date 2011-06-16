Ext.application({
    name: 'DEMO', // Global namespace

    appFolder: 'app',

    controllers: [
		'LayoutController',
		'CustomerListController',
		'VendorListController'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
			items: [
					{ xtype: 'ManagementArea' },
					{ xtype: 'ListsContainer' },
					{ xtype: 'AppHeader' }
				]
        });
    }
});