Ext.define('DEMO.controller.CustomerListController', {
    extend	: 'Ext.app.Controller',

    stores	: ['CustomerListStore'],
    models	: ['CustomerListModel'],

    views	: [
		'customers.CustomerList'
    ],

    init	: function() {
        this.control({
			'CustomerList' : {
				itemclick	: this.customerClicked,
				show		: this.loadList
			}
        });
    },

	// Reload the list every time it is shown
    loadList	: function(list) {
    	list.getStore().load();
    },


	customerClicked: function(grid, record) {
		enableToolbarButtons('CustomerManagementToolbar');
		
		DEMO.selectedCustomersId = record.data.customers_id;

		// Trigger a click of the customer edit button to switch to  the edit form.		
		var editBtn = Ext.ComponentQuery.query('CustomerManagementToolbar [operation="edit-customer"]');
		if( editBtn[0] ) { 
			editBtn[0].handler.call(editBtn[0].scope || editBtn[0], editBtn[0]); 
		}
		
		// Fire the customer selected event of the edit customer form.
		var custEdit = Ext.ComponentQuery.query('CustomerEdit');
		if( custEdit[0])
		{
			custEdit[0].fireEvent('customerSelected', custEdit[0]);
		}
		
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