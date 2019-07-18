<?php

print_r($_GET);
if($_GET['action']=='food'){
   $dataresponce = '"<option value="AL">new saga</option>
                <option value="AK">new milk</option>
                <option value="AZ">new roti</option>"';
}
else if($_GET['action']=='state'){
    $dataresponce = '"<option value="AL">saga1</option>
                <option value="AK">milk2</option>
                <option value="AZ">roti3</option>"';
}

echo $dataresponce;
