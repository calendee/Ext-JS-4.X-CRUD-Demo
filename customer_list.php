<?php


$customer_list = array();

$customer_list['success']		= true;
$customer_list['totalCount']	= 500;

$customers[] = array('customers_id' => 1, 'customer_name' => 'Janet Moore',	 'start_date' => '2011-05-01', 'last_order' => '2011-05-01');
$customers[] = array('customers_id' => 2, 'customer_name' => 'Jane Doe',	 'start_date' => '2009-11-21', 'last_order' => '2010-12-18');
$customers[] = array('customers_id' => 3, 'customer_name' => 'Jim Doe',		 'start_date' => '2010-03-19', 'last_order' => '2010-03-19');
$customers[] = array('customers_id' => 4, 'customer_name' => 'Mystery Man',	 'start_date' => '1998-10-03', 'last_order' => '2011-06-21');

$customer_list['customers'] = $customers;

echo json_encode($customer_list);

?>
