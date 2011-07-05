Ext.define('DEMO.view.customers.CustomerEdit',{
    extend  : 'Ext.form.Panel',
    alias   : 'widget.CustomerEdit',
    itemId	: 'customer-edit',

    title   : 'Edit Customer Details',

    bodyPadding : 10,
    trackResetOnLoad    : true,
    
    
    items   : [
        {
            xtype           : 'hiddenfield',
            name            : 'customers_id',
            id              : 'customers_id',
            value			: 0
        },
        {
            xtype           : 'textfield',
            name            : 'customer_name',
            fieldLabel      : 'Customer Name',
            emptyText		: 'Enter the new customer\'s name here',
            size            : 50,
            allowBlank      : false,
            dirtyCls        : 'dirtyfield',
            maxLength       : 50,
            maxLengthText   : 'The Customer Name cannot be more than 50 characters',
        },
        {
            xtype           : 'textfield',
            name            : 'address',
            fieldLabel      : 'Address',
            emptyText		: 'Enter the new customer\'s street address here.',
            size            : 50,
            allowBlank      : false,
            dirtyCls        : 'dirtyfield',
            maxLength       : 50,
            maxLengthText   : 'The customer\'s street address cannot be more than 125 characters',
        },                    
        {
            xtype           : 'textfield',
            name            : 'city',
            fieldLabel      : 'City',
            emptyText		: 'Enter the new customer\'s city here.',
            size            : 50,
            allowBlank      : false,
            dirtyCls        : 'dirtyfield',
            maxLength       : 50,
            maxLengthText   : 'The customer\'s city cannot be more than 25 characters',
        },                    
		{
			xtype			: 'combobox',
			name			: 'state',
		    fieldLabel      : 'State',
			store			: 'StatesStore',
			displayField	: 'state',
			valueField		: 'abbr',
			allowBlank      : false,
			queryMode		: 'local',
			forceSelection	: true
		},
        {
            xtype           : 'textfield',
            name            : 'zip',
            fieldLabel      : 'Zip Code',
            emptyText		: 'Enter the new customer\'s zip code here.',
            size            : 50,
            allowBlank      : false,
            dirtyCls        : 'dirtyfield',
            maskRe			: /[\d\-]/,
            regex			: /^\d{5}\-\d{4}$/,
            regexText		: 'The zip code must be in the format 12345-1234.'
        }                    



    ],
    
    tbar	: [
    	{
	    	text		: 'Save',
	    	operation	: 'save',
	        tooltip		: 'Save customer details.',
	        disabled	: true,
    	},
    	{
	    	text		: 'Cancel',
	    	operation	: 'cancel',
	        tooltip		: 'Cancel editing details.',
	        disabled	: true
	    }
    ],
    initComponent	: function() {
    	this.addEvents( {
    		customerSelected	: true
    	});
    	
        this.callParent(arguments);
    }
});
