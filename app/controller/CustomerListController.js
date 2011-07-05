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
				show		: this.loadList,
				selectionchange	: this.selectionChanged,
			}
        });
    },

	// Reload the list every time it is shown
    loadList	: function(list) {
    	list.getStore().load();
    },

	selectionChanged	: function(model,records) {
		// records is an array of selected records.  Only one member
		enableToolbarButtons('CustomerManagementToolbar');
		DEMO.selectedCustomersId = records[0].get('customers_id')

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

	}
});