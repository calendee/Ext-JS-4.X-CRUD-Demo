Ext.define('DEMO.view.vendors.VendorList' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.VendorList',

    store: 'VendorListStore',

    initComponent: function() {
        this.columns = [
            { header: 'Vendor Name',	dataIndex: 'vendor_name',	flex: 2 },
            { header: 'Payment Terms',	dataIndex: 'payment_terms',	flex: 2 },
            {
            	header: 'Vendor Since',	dataIndex: 'start_date',	flex: 1, 
            	renderer: Ext.util.Format.dateRenderer('Y-m-d')
            },
            {
            	header: 'Last Order',	dataIndex: 'last_order',	flex: 1, 
            	renderer: Ext.util.Format.dateRenderer('Y-m-d')
            }
        ];

        this.callParent(arguments);
    }
});