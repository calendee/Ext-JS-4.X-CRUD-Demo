Ext.define('DEMO.store.VendorListStore', {
    extend: 'Ext.data.Store',
	model: 'DEMO.model.VendorListModel',

	pageSize: 50,
	autoLoad: false,

	remoteSort: true,
	sorters: {
		property: 'vendor_name',
		direction: 'ASC'
	},



});