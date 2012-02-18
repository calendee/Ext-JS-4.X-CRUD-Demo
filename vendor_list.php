<?php


$vendor_list = array();

$vendor_list['success']		= true;

$vendors[] = array('vendors_id' => 1, 'vendor_name' => 'AAA Plumbing',			'payment_terms' => 'COD',	'start_date' => '2011-05-01', 'last_order' => '2011-05-01');
$vendors[] = array('vendors_id' => 2, 'vendor_name' => 'Two Men and A Truck',	'payment_terms' => 'COD',	'start_date' => '2009-11-21', 'last_order' => '2010-12-18');
$vendors[] = array('vendors_id' => 3, 'vendor_name' => 'Dewey Cheatem & How',	'payment_terms' => 'COD',	'start_date' => '2010-03-19', 'last_order' => '2010-03-19');
$vendors[] = array('vendors_id' => 4, 'vendor_name' => 'Avery Air Sucks',		'payment_terms' => 'COD',	'start_date' => '1998-10-03', 'last_order' => '2011-06-21');

$vendor_list['vendors'] = $vendors;

$vendor_list['totalCount']	= count( $vendor_list['vendors'] );

echo json_encode($vendor_list);

?>
