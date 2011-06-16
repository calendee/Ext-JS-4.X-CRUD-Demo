Ext.define('DEMO.controller.VendorListController', {
    extend	: 'Ext.app.Controller',

    stores	: ['VendorListStore'],
    models	: ['VendorListModel'],

    views	: [
		'vendors.VendorList'
    ],

    init	: function() {
    	
        this.control({
			'VendorList' : {
				itemclick	: this.vendorClicked,
				show		: this.loadList
			}
        });
    },

	// Reload the list every time it is shown
    loadList : function(list) {
    	list.getStore().load();
    },


	vendorClicked	: function(grid, record) {

		enableToolbarButtons('VendorManagementToolbar');
		
		DEMO.selectedVendorsId = record.data.vendors_id;
		
		// // Get the selected operators id and update all the operators forms.
		// // Keep it in name space for use by other non-form based events
		// GSP.selectedOperatorsId = record.data.operators_id;
// 		
		// enableOperatorToolbarButtons();
// 
		// // Each time a different operator is selected, make sure the operator
		// // management section is updated.
		// var opMgmt = Ext.ComponentQuery.query('OperatorMgmt');
		// var opMgmtActive = opMgmt[0].getLayout().getActiveItem();
		// opMgmtActive.enable();
// 		
		// var operName = record.data.operators_name;
// 		
		// // Update all the panels with the name of the current operator
		// var panels = Ext.ComponentQuery.query('OperatorMgmt  panel, form');
// 		
		// if( ! GSP.originalOperatorTitles.hasOwnProperty('origsSaved') )
		// {
			// originalTitles(panels, GSP.originalOperatorTitles);
		// }
// 		
		// Ext.Array.each(panels, function(item) {
			// var title = item.title;
			// var xtype = item.xtype;
// 			
			// if(title !== 'Add Operator')
			// {
				// item.setTitle(GSP.originalOperatorTitles[xtype] + ' - ' + operName);
			// }
// 			
		// });
	}
	
});