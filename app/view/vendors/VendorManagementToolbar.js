Ext.define('DEMO.view.vendors.VendorManagementToolbar' ,{
    extend		: 'Ext.toolbar.Toolbar',
    alias		: 'widget.VendorManagementToolbar',

	defaults	: {
		disabled	: true
	},
	
    items		: [
        {
            id			: 'btn-add-vendor',
            text		: 'Add Vendor',
			disabled	: false,
			
			handler	: function() {
				
				// Don't enable other buttons unless an operator is selected
				if( DEMO.selectedVendorsId !== 0 )
				{
					enableSiblings(this, 'button');	
				}

				// Disable this button while in use
				this.setDisabled(true);
				
				vendor_layout.setActiveItem('vendor-add');

			}
        },
        {
            id		: 'btn-edit-vendor',
            text	: 'Edit Vendor',
			handler	: function() {
				
				// Enable any other buttons in toolbar
				enableSiblings(this, 'button');

				// Disable this button while in use
				this.setDisabled(true);
				
				vendor_layout.setActiveItem('vendor-edit');
				
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
		var vendor_content_pnl = Ext.ComponentQuery.query('VendorManagement');
		vendor_layout = vendor_content_pnl[0].getLayout();
		this.callParent(arguments);		
	}
    
});