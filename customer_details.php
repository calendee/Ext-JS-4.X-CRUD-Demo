<?php
ob_start();
session_start();

date_default_timezone_set('America/Chicago');

error_reporting(E_ALL);
ini_set( 'display_errors','1');

if( isset($_GET['id']) )
{
	$customers_id = $_GET['id'];
} else
	{
		$form_data = json_decode(file_get_contents('php://input'));
		
		$customers_id					= $form_data->customers_id;
		$form_details['customers_id']	= $customers_id;
		$form_details['customer_name']	= $form_data->customer_name;
		$form_details['address']		= $form_data->address;
		$form_details['city']			= $form_data->city;
		$form_details['state']			= $form_data->state;
		$form_details['zip']			= $form_data->zip;

		$_SESSION['details'][$customers_id] = $form_details;
	}

if( ! isset( $_SESSION['details'][$customers_id] ) )
{
	$empty_details['customers_id']	= $customers_id;
	$empty_details['customer_name']	= '';
	$empty_details['address']		= '';
	$empty_details['city']			= '';
	$empty_details['state']			= '';
	$empty_details['zip']			= '';		

	$_SESSION['details'][$customers_id] = $empty_details;
} 

$final_details['success'] = true;
$final_details['customer'] = $_SESSION['details'][$customers_id];


if( isset($form_data->customer_name) && $form_data->customer_name == 'Test Customer')
{
	header('HTTP/1.1 500 Failed to Save Customer Details');
	exit;
}

echo json_encode($final_details);

ob_flush();
?>