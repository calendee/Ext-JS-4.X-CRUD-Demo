Ext.define('DEMO.view.customers.CustomerAdd',{
    extend  :   'Ext.form.Panel',
    alias   :   'widget.CustomerAdd',

    title   : 'Add Customer',

    bodyPadding : 10,
    
    items   : [
        {
            xtype           : 'textfield',
            name            : 'customer_name',
            id              : 'customer_name',
            fieldLabel      : 'Customer Name',
            size            : 55,
            allowBlank      : false,
            dirtyCls        : 'dirtyfield',
            maxLength       : 50,
            maxLengthText   : 'The Customer Name cannot be more than 50 characters',
            margin          : '0 10 0 0'
        }                    
    ],

    dockedItems : [
        {
            xtype   : 'toolbar',
            dock    : 'top',
            items   : [
                {
                    text    	: 'Save',
                    id			: 'add-operator-save',
                    tooltip		: 'Save this new operator.',
                    action  	: 'save',
                    disabled	: true
                },
                {
                    text		: 'Cancel',
                    tooltip 	: 'Cancel adding this operator.',
                    id			: 'add-operator-cancel',
                    disabled	: true,
                }
            ]
        }
    ],
    
    initComponent	: function() {
        this.callParent(arguments);
    }
});
