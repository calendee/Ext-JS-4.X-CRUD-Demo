Ext.define('DEMO.view.customers.CustomerAdd',{
    extend  : 'Ext.form.Panel',
    alias   : 'widget.CustomerAdd',
    itemId	: 'customer-add',

    title   : 'Add Customer',

    bodyPadding : 10,

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
            id              : 'customer_name',
            fieldLabel      : 'Customer Name',
            emptyText		: 'Enter the new customer\'s name here',
            size            : 55,
            allowBlank      : false,
            dirtyCls        : 'dirtyfield',
            maxLength       : 50,
            maxLengthText   : 'The Customer Name cannot be more than 50 characters',
            margin          : '0 10 0 0'
        }                    
    ],
    
    tbar	: [
    	{
	    	text		: 'Save',
	    	operation	: 'save',
	        tooltip		: 'Save this new customer.',
	        disabled	: true,
    	},
    	{
	    	text		: 'Cancel',
	    	operation	: 'cancel',
	        tooltip		: 'Cancel adding this customer.',
	        disabled	: true
	    }
    ],
    initComponent	: function() {
        this.callParent(arguments);
    }
});
