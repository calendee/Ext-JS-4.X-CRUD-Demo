Ext.define('DEMO.model.StatesModel', {
    extend	: 'Ext.data.Model',
    fields	: [
    	'abbr',
    	'state'
	],

    proxy		: {
        type	: 'ajax',
        url		: 'states.json',
        reader	: {
			type			: 'json',
        	root			: 'states',
            successProperty	: 'success'

        }
    }	
});