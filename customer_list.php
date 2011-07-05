<?php
ob_start();
session_start();



if(! isset($_SESSION['details']) )
{		$details[1]['customers_id']		= 1;
		$details[1]['customer_name']	= 'Avery Airconditioning Sucks Wind';
		$details[1]['address']			= '10635 King William Dr';
		$details[1]['city']				= 'Dallas';
		$details[1]['state']			= 'TX';
		$details[1]['zip']				= '75070';
		           
		$details[2]['customers_id']		= 2;
		$details[2]['customer_name']	= 'Trial N Error';
		$details[2]['address']			= '123 Main St.';
		$details[2]['city']				= 'Frisco';
		$details[2]['state']			= 'TX';
		$details[2]['zip']				= '75034';
		           
		$details[3]['customers_id']		= 3;
		$details[3]['customer_name']	= 'In N Out Burger';
		$details[3]['address']			= '9999 Big Street';
		$details[3]['city']				= 'Allen';
		$details[3]['state']			= 'TX';
		$details[3]['zip']				= '70389';

		$details[4]['customers_id']		= 4;
		$details[4]['customer_name']	= 'Lousy Co.';
		$details[4]['address']			= '3283 Stinky st.';
		$details[4]['city']				= 'Plano';
		$details[4]['state']			= 'TX';
		$details[4]['zip']				= '75003';
	
		$_SESSION['details'] = $details;
		$_SESSION['max_id'] = count( $_SESSION['details'] ) + 1;
	
} 

if( isset($_SESSION['customers']) )
{
	$customers = $_SESSION['customers'];
} else
	{
		$customers[] = array('customers_id' => 1, 'customer_name' => 'Avery Airconditioning Sucks Wind', 'start_date' => '2011-05-01', 'last_order' => '2011-05-01');
		$customers[] = array('customers_id' => 2, 'customer_name' => 'Trial N Error',	 'start_date' => '2009-11-21', 'last_order' => '2010-12-18');
		$customers[] = array('customers_id' => 3, 'customer_name' => 'In N Out Burger',		 'start_date' => '2010-03-19', 'last_order' => '2010-03-19');
		$customers[] = array('customers_id' => 4, 'customer_name' => 'Lousy Co.',	 'start_date' => '1998-10-03', 'last_order' => '2011-06-21');
		
		$_SESSION['customers'] = $customers;
		$_SESSION['max_customers_id'] = 4;
		
	}

$customer_list = array();
$customer_list['success']		= true;
$customer_list['customers']		= $customers;

$customer_list['totalCount']	= count( $customer_list['customers'] );


echo json_encode($customer_list);

ob_flush();
?>
