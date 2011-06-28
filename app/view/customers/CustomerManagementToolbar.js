Ext.define('DEMO.view.customers.CustomerManagementToolbar' ,{
    extend		: 'Ext.toolbar.Toolbar',
    alias		: 'widget.CustomerManagementToolbar',

	defaults	: {
		disabled	: true
	},
	
    items		: [
        {
            id			: 'btn-add-customer',
            text		: 'Add Customer',
			disabled	: false,
			
			handler	: function() {
				
				// Don't enable other buttons unless an operator is selected
				if( DEMO.selectedCustomersId !== 0 )
				{
					enableSiblings(this, 'button');	
				}

				// Disable this button while in use
				this.setDisabled(true);
				
				custLayout.setActiveItem('customer-add');

			}
        },
        {
            id		: 'btn-edit-customer',
            text	: 'Edit Customer',
			handler	: function() {
				
				// Enable any other buttons in toolbar
				enableSiblings(this, 'button');

				// Disable this button while in use
				this.setDisabled(true);

				custLayout.setActiveItem('customer-edit');
				
				// var customer_edit = Ext.ComponentQuery.query('CustomerEdit');
				// Ext.Array.each(customer_edit, function(cmp){
					// cmp.enable();
				// });

			}
        }
    ],
    
    initComponent	: function() {
		this.callParent(arguments);
    },
	
	afterRender		: function() {
		custPanel = Ext.ComponentQuery.query('CustomerManagement');
		custLayout = custPanel[0].getLayout();
	}
    
});