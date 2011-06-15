Ext.define('DEMO.store.VendorListStore', {
    extend: 'Ext.data.Store',
	model: 'DEMO.model.VendorListModel',

	pageSize: 50,
	autoLoad: false,

	remoteSort: false,
});