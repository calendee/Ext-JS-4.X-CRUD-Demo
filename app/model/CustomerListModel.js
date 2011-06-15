Ext.define('DEMO.model.CustomerListModel', {
    extend	: 'Ext.data.Model',
    fields	: [
		'customers_id', 'customer_name', 'start_date',
		{
			name		: 'last_order',
			type		:'date',
			dateFormat	: 'Y-m-d'
		}
	],

	proxy	: {
		type			: 'ajax',
		url				: 'customer_list.php',
		extraParams		: {
			total: 50
		},

		reader			: {
			type			: 'json',
			root			: 'customers',
			totalProperty	: 'totalCount'
		},
	
		simpleSortMode	: true
	}	
	
});