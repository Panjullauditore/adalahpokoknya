<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\User::create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'username' => 'admin',
            'password' => bcrypt('password'),
            'role' => 'admin',
        ]);

        \App\Models\User::create([
            'name' => 'User One',
            'email' => 'user1@example.com',
            'username' => 'user1',
            'password' => bcrypt('password'),
            'role' => 'user',
        ]);

        \App\Models\User::create([
            'name' => 'User Two',
            'email' => 'user2@example.com',
            'username' => 'user2',
            'password' => bcrypt('password'),
            'role' => 'user',
        ]);
    }
}
