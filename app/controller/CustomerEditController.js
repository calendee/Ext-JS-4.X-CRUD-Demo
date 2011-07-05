Ext.define('DEMO.controller.CustomerEditController', {
    extend		: 'Ext.app.Controller',

    models	: ['CustomerEditModel','StatesModel'],
    stores	: ['StatesStore'],

    views		: [
		'customers.CustomerEdit'
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
		var form = panel.getForm();

        model.load(DEMO.selectedCustomersId, {
		    success: function(customer) {
	        	form.loadRecord(customer);

				// Reset the form so it does not seem dirty.
				var fields = form.getFields();
				Ext.Array.each( fields.items, function(field) {
					field.resetOriginalValue();
				});

    		}
		});
    },
       
    onBtnClick	: function(btn, e) {
        var form = btn.up('form').getForm();
        
    	switch(btn.operation) {
    		case 'save'		:
		        var record = form.getRecord();
		        var values = form.getValues();
		        record.set(values);

		        var saved = record.save();
		        form.loadRecord(saved);

				// Reset the form so it does not seem dirty.
				var fields = form.getFields();
				Ext.Array.each( fields.items, function(field) {
					field.resetOriginalValue();
				});

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