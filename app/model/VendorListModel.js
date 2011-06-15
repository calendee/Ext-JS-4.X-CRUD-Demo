Ext.define('DEMO.model.VendorListModel', {
    extend	: 'Ext.data.Model',
    fields	: [
		'vendors_id', 'vendor_name', 'payment_terms', 'start_date',
		{
			name		: 'start_date',
			type		:'date',
			dateFormat	: 'Y-m-d'
		},
		{
			name		: 'last_order',
			type		:'date',
			dateFormat	: 'Y-m-d'
		}
	],

	proxy	: {
		type			: 'ajax',
		url				: 'vendor_list.php',

		reader			: {
			type			: 'json',
			root			: 'vendors',
			totalProperty	: 'totalCount',
			successProperty	: 'success'
		},
	
		simpleSortMode	: true
	}	
	
});