<?php



date_default_timezone_set('America/Chicago');

$form_data = json_decode(file_get_contents('php://input'));

$response['customer']['customer_name'] = $form_data->customer_name;
$response['customer']['start_date'] = date('Y-m-d');
$response['customer']['customers_id'] = 23;
$response['customer']['success'] = true;


if( $form_data->customer_name == 'Test Customer')
{
	header('HTTP/1.1 500 Failed to Save Customer');
	exit;
}

echo json_encode($response);

?>
