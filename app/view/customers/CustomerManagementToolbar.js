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
				
				customer_layout.setActiveItem('customer-add');

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
				
				customer_layout.setActiveItem('default-gtt-container');
				
				var dflt_gtt = Ext.ComponentQuery.query('DefaultGttContainer');
				Ext.Array.each(dflt_gtt, function(cmp){
					cmp.enable();
				});

			}
        }
    ],
    
    initComponent	: function() {
		this.callParent(arguments);
    },
	
	afterRender		: function() {
		var customer_content_pnl = Ext.ComponentQuery.query('CustomerManagement');
		customer_layout = customer_content_pnl[0].getLayout();
	}
    
});