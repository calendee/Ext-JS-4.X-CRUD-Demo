Ext.define('DEMO.controller.CustomerEditController', {
    extend		: 'Ext.app.Controller',

    models	: ['CustomerEditModel'],

    views		: [
		'customers.CustomerEdit'
    ],
    
	refs	: [{
		 ref		:'CustomerEdit'
		,selector	:'CustomerEdit'
		}
	],
    

    init		: function() {
        this.control({
        	'CustomerEdit'	: {
        		dirtychange 		: this.formDirty,
        		customerSelected	: this.customerSelected
        	},

        	'CustomerEdit  button'	: {
        		click : this.onBtnClick,
        	}
        	
        });
    },
    
    customerSelected : function(panel, options) {
		// Load any existing record for the currently selected customer.
        var model = Ext.ModelMgr.getModel('DEMO.model.CustomerEditModel');
        model.load(DEMO.selectedCustomersId);
    },
       
    onBtnClick	: function(btn, e) {
        var form = btn.up('form').getForm();
        var model = Ext.ModelMgr.getModel('DEMO.model.CustomerEditModel');
        
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
    					
						Ext.Msg.alert('Customer Details Saved', 'Thanks for filling out the form.');    					
    					
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
				console.warn('An invalid button was pressed on the Customer Edit form.')
    	}
    },
    
	// Control what happens when the form is dirty or clean
    formDirty		: function(form, dirty) {
		var disableItems	= ['CustomerList','VendorManagement','CustomerManagementToolbar'];	
		var enableItems		= ['CustomerEdit  button'];	
        
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