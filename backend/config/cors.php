<?php

return [

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],

    /*
     * Browser forms on Vercel (https://*.vercel.app) POST multipart to this API; the
     * Origin header must be permitted or the browser hides the response (often seen as "submission failed").
     */
    'allowed_origins' => array_filter(array_map('trim', explode(',', env(
        'CORS_ALLOWED_ORIGINS',
        'http://localhost:3000,http://127.0.0.1:3000,https://project-vxba4.vercel.app,https://luminixprojects.in'
    )))),

    'allowed_origins_patterns' => [
        '#^https://[a-z0-9-]+\.vercel\.app$#i',
    ],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,

];
