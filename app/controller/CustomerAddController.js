Ext.define('DEMO.controller.CustomerAddController', {
    extend		: 'Ext.app.Controller',

    //stores	: ['CustomerAddStore'],
    //models	: ['CustomerAddModel'],

    views		: [
		'customers.CustomerAdd'
    ],

    init		: function() {
        this.control({
        	'CustomerAdd  #add-operator-save' : {
        		click : this.saveClicked
        	},
        	
        	'CustomerAdd  #add-operator-cancel' : {
        		click : this.cancelClicked
        	},

        	'CustomerAdd'	: {
        		dirtychange : this.formDirty
        	}
        	
        });
    },
    
    // Save the form
    saveClicked		: function(btn) {
		alert('Need to save this form!');
    },
    
    // Reset the form
    cancelClicked	: function(btn) {
        var form = btn.up('form').getForm();
        form.reset();
    },

	// Control what happens when the form is dirty or clean
    formDirty		: function(form, dirty) {
		var disableItems	= ['CustomerList','VendorManagement','CustomerManagementToolbar'];	
		var enableItems		= ['add-operator-save', 'add-operator-cancel'];	
        
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