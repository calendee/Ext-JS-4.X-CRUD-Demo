Ext.define('DEMO.model.CustomerEditModel', {
    extend	: 'Ext.data.Model',
    fields	: [
    	'customers_id',
    	'customer_name',
    	'address',
    	'city',
    	'state',
    	'zip'
	],

	idProperty : 'customers_id', 
	
    proxy		: {
        type	: 'ajax',
        url		: 'customer_details.php',
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