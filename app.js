// enable and configure loader
Ext.Loader.setConfig({
     enabled:true,

     paths:{
          Ext:'ext/src',
          My:'app'
     }
});

Ext.application({
    name: 'DEMO', // Global namespace

    appFolder: 'app',

    controllers: [
		'LayoutController',
		'CustomerListController',
		'VendorListController',
		'CustomerAddController',
		'CustomerEditController',
		'VendorAddController'
    ],
    autoCreateViewport	: false,

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
			items: [
					{ xtype: 'ManagementArea' },
					{ xtype: 'ListsContainer' },
					{ xtype: 'AppHeader' }
				]
        });
        
        DEMO.selectedCustomersId	= 0;
        DEMO.selectedVendorsId		= 0;
    }
});