Ext.define('DEMO.view.customers.CustomerList' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.CustomerList',

    store: 'CustomerListStore',

    initComponent: function() {
        this.columns = [
            { header: 'Customer Name',	dataIndex: 'customer_name',	flex: 2 },
            {
            	header: 'Customer Since',	dataIndex: 'start_date',	flex: 1, 
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