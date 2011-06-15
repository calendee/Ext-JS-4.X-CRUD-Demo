Ext.define('DEMO.model.VendorListModel', {
    extend	: 'Ext.data.Model',
    fields	: [
		'vendors_id', 'vendor_name', 'start_date',
		{
			name		: 'last_order',
			type		:'date',
			dateFormat	: 'Y-m-d'
		}
	],

	proxy	: {
		type			: 'ajax',
		url				: 'vendor_list.php',
		extraParams		: {
			total: 50
		},

		reader			: {
			type			: 'json',
			root			: 'vendors',
			totalProperty	: 'totalCount'
		},
	
		simpleSortMode	: true
	}	
	
});