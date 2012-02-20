Ext.define('DEMO.view.customers.CustomerManagementToolbar' ,{
    extend		: 'Ext.toolbar.Toolbar',
    alias		: 'widget.CustomerManagementToolbar',

	defaults	: {
		disabled	: true
	},
	
    items		: [
        {
            text		: 'Add Customer',
			disabled	: false,
			operation	: 'add-customer',
			
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
            text	: 'Edit Customer',
			operation	: 'edit-customer',

			handler	: function() {
				
				// Enable any other buttons in toolbar
				enableSiblings(this, 'button');

				// Disable this button while in use
				this.setDisabled(true);

				// Make the customer edit form panel the active card
				// in the CustomerManagement view
				custLayout.setActiveItem('customer-edit');
			}
        }
    ],
    
    initComponent	: function() {
		this.callParent(arguments);
    },

	afterRender	: function() {
		
		custPanel = Ext.ComponentQuery.query('CustomerManagement');
		custLayout = custPanel[0].getLayout();
		this.callParent(arguments);
	}
	
});