<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    public function test_it_registers_the_root_redirect_route(): void
    {
        $matched = static fn () => app('router')->getRoutes()->match(
            Request::create('/', 'GET')
        );

        $this->assertSame('/', $matched()->uri());
    }

    /**
     * Root URL redirects guests to the admin login route.
     * Note: $this->get('/') alone can 404 because the test client strips a leading slash before url().
     */
    public function test_root_url_redirects_guests_to_admin_login(): void
    {
        $response = $this->get(url('/'));

        $response->assertRedirect(route('admin.login'));
    }
}
