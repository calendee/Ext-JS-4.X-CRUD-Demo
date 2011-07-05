<?php
ob_start();
session_start();

date_default_timezone_set('America/Chicago');

$form_data = json_decode(file_get_contents('php://input'));

if( $form_data->customer_name == 'Test Customer')
{
	header('HTTP/1.1 500 Failed to Save Customer');
	exit;
}


$response['customer']['customer_name'] = $form_data->customer_name;
$response['customer']['start_date'] = date('Y-m-d');
$response['customer']['customers_id'] = $_SESSION['max_customers_id'] + 1;
$_SESSION['max_customers_id']  = $_SESSION['max_customers_id'] + 1;
$response['customer']['success'] = true;

$_SESSION['customers'][] = $response['customer'];


echo json_encode($response);

ob_flush();
?>
