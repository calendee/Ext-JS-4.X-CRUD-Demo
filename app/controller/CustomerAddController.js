Ext.define('DEMO.controller.CustomerAddController', {
    extend		: 'Ext.app.Controller',

    models	: ['CustomerAddModel'],

    views		: [
		'customers.CustomerAdd'
    ],
    
	refs	: [{
		 ref		:'CustomerAdd'
		,selector	:'CustomerAdd'
		}
	],
    

    init		: function() {
        this.control({
        	'CustomerAdd'	: {
        		dirtychange : this.formDirty,
        	},

        	'CustomerAdd  button'	: {
        		click : this.onBtnClick,
        	}
        	
        });
    },
        
    onBtnClick	: function(btn, e) {
        var form = btn.up('form').getForm();
        var model = Ext.ModelMgr.getModel('DEMO.model.CustomerAddModel');
        
    	switch(btn.operation) {
    		case 'save'		:
    			var customer = Ext.create(model, form.getValues());
    			customer.save( {
    				success: function(record) {
    					var fields = {
    						customers_id	: record.get('customers_id'),
    						customer_name	: record.get('customer_name'),
    						start_date		: record.get('start_date')
    					};
    					
    					// Add this customer to the list store for display
    					var listStore = Ext.data.StoreManager.lookup('CustomerListStore');
    					listStore.add(fields);
    					
    					// Rese the form for later use.  Focus will be moved elsewhere now.
    					form.reset();

						Ext.Msg.alert('Customer Saved', 'Please complete the customer details form.');    					
    					
    				},
					failure	: function(){
						console.log('Failed to save the customer record.');
		          	},
    			})
    			
    			break;

    		case 'cancel'	:
		        form.reset();
    			break;

			default:
				console.warn('An invalid button was pressed on the Customer Add form.')
    	}
    },
    
	// Control what happens when the form is dirty or clean
    formDirty		: function(form, dirty) {
		var disableItems	= ['CustomerList','VendorManagement','CustomerManagementToolbar'];	
		var enableItems		= ['CustomerAdd  button'];	
        
        if(form.isDirty())
        {
        	// Prevent leaving the form while unsaved changes exist
            toggleEnabled(disableItems,	'disable');
            toggleEnabled(enableItems,	'enable');
        } else
            {
                toggleEnabled(disableItems,	'enable');
                toggleEnabled(enableItems,	'disable');
            }
    }
});