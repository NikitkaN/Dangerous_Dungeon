<?php
// Получение IP-адреса пользователя
$userIP = $_SERVER['REMOTE_ADDR'];

// Генерация имени на основе IP-адреса
$generatedName = 'user_' . str_replace('.', '_', $userIP);

// Формирование пути к файлу JSON на сервере
$jsonFilePath = 'json_data/' . $generatedName . '.json';

// Проверка наличия файла JSON
if (file_exists($jsonFilePath)) {
    // Чтение данных из файла JSON
    $jsonData = file_get_contents($jsonFilePath);

    // Отправка данных на клиентскую сторону
    header('Content-Type: application/json'); // Устанавливаем заголовок Content-Type для указания типа данных
    echo $jsonData; // Выводим данные на клиентскую сторону
} else {
    // Если файл JSON не найден, возвращаем ошибку
    header('HTTP/1.1 404 Not Found');
    echo "Файл JSON не найден";
}
?>