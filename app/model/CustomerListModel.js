Ext.define('DEMO.model.CustomerListModel', {
    extend	: 'Ext.data.Model',
    fields	: [
		'customers_id', 'customer_name', 'start_date',
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
		url				: 'customer_list.php',

		reader			: {
			type			: 'json',
			root			: 'customers',
			totalProperty	: 'totalCount',
			successProperty	: 'success'
		},
	
		simpleSortMode	: true
	}	
	
});