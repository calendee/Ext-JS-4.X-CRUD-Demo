Ext.define('DEMO.store.CustomerListStore', {
    extend	: 'Ext.data.Store',
	model	: 'DEMO.model.CustomerListModel',

	pageSize	: 50,
	autoLoad	: true,

	remoteSort	: true,
	sorters		: {
		property: 'customer_name',
		direction: 'ASC'
	}
});