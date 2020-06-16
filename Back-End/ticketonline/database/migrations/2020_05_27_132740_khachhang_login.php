<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class KhachhangLogin extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('khachhang_login', function (Blueprint $table) {
            $table->Increments('id');
            $table->Integer('id_kh');
            $table->string('name');
            $table->string('email');
            $table->Integer('phone');
            $table->string('diachi');
            $table->string('password');
            $table->rememberToken();
            $table->string('urlHinh');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('khachhang_login');
    }
}
