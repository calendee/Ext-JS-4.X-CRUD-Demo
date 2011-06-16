Ext.define('DEMO.controller.VendorAddController', {
    extend		: 'Ext.app.Controller',

    //stores	: ['VendorAddStore'],
    //models	: ['VendorAddModel'],

    views		: [
		'vendors.VendorAdd'
    ],

    init		: function() {
        this.control({
        	'VendorAdd  #add-vendor-save' : {
        		click : this.saveClicked
        	},
        	
        	'VendorAdd  #add-vendor-cancel' : {
        		click : this.cancelClicked
        	},

        	'VendorAdd'	: {
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
		var disableItems	= ['VendorList','CustomerManagement','VendorManagementToolbar'];	
		var enableItems		= ['add-vendor-save', 'add-vendor-cancel'];	
        
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