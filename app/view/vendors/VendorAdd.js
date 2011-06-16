Ext.define('DEMO.view.vendors.VendorAdd',{
    extend  :   'Ext.form.Panel',
    alias   :   'widget.VendorAdd',

    title   : 'Add Vendor',

    bodyPadding : 10,
    
    items   : [
        {
            xtype           : 'textfield',
            name            : 'vendor_name',
            id              : 'vendor_name',
            fieldLabel      : 'Vendor Name',
            size            : 55,
            allowBlank      : false,
            dirtyCls        : 'dirtyfield',
            maxLength       : 50,
            maxLengthText   : 'The Vendor Name cannot be more than 50 characters',
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
                    id			: 'add-vendor-save',
                    tooltip		: 'Save this new customer.',
                    action  	: 'save',
                    disabled	: true
                },
                {
                    text		: 'Cancel',
                    tooltip 	: 'Cancel adding this customer.',
                    id			: 'add-vendor-cancel',
                    disabled	: true,
                }
            ]
        }
    ],
    
    initComponent	: function() {
        this.callParent(arguments);
    }
});
