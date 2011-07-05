<?php
ob_start();
session_start();

date_default_timezone_set('America/Chicago');


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

if( isset($_SESSION['details']) )
{
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
} else
	{
		$details[1]['customers_id']		= 1;
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

$final_details['success'] = true;
$final_details['customer'] = $_SESSION['details'][$customers_id];


if( $form_data->customer_name == 'Test Customer')
{
	header('HTTP/1.1 500 Failed to Save Customer Details');
	exit;
}

echo json_encode($final_details);

ob_flush();
?>