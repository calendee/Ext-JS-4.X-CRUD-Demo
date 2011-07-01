<?php
ob_start();
session_start();

if( isset($_SESSION['customers']) )
{
	$customers = $_SESSION['customers'];
} else
	{
		$customers[] = array('customers_id' => 1, 'customer_name' => 'Avery Air Sucks Wind', 'start_date' => '2011-05-01', 'last_order' => '2011-05-01');
		$customers[] = array('customers_id' => 2, 'customer_name' => 'Jane Doe',	 'start_date' => '2009-11-21', 'last_order' => '2010-12-18');
		$customers[] = array('customers_id' => 3, 'customer_name' => 'Jim Doe',		 'start_date' => '2010-03-19', 'last_order' => '2010-03-19');
		$customers[] = array('customers_id' => 4, 'customer_name' => 'Mystery Man',	 'start_date' => '1998-10-03', 'last_order' => '2011-06-21');
		
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
