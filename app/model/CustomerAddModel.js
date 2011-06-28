Ext.define('DEMO.model.CustomerAddModel', {
    extend	: 'Ext.data.Model',
    fields	: [
    	'customers_id',
    	'customer_name',
    	'start_date'
	],

    proxy		: {
        type	: 'ajax',
        url		: 'customers.php',
        reader	: {
			type			: 'json',
        	root			: 'customer',
            successProperty	: 'success'

        },
        listeners	: {
			exception	: function(proxy, response, operation){
				Ext.MessageBox.show({
					title		: 'ERROR',
					msg			: operation.getError().statusText,
					icon		: Ext.MessageBox.ERROR,
					buttons		: Ext.Msg.OK
				});
          	}
        }
    }	
});