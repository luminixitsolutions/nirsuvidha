<?php

/**
 * PHPUnit bootstrap: pin APP_BASE_PATH so route registration uses this Laravel app
 * (inferBasePath() can otherwise resolve incorrectly depending on autoload order).
 */
$_ENV['APP_BASE_PATH'] = dirname(__DIR__);
$_SERVER['APP_BASE_PATH'] = dirname(__DIR__);

require dirname(__DIR__).'/vendor/autoload.php';
