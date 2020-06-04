<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Ve extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ve',function($table){
            $table->increments('id');
            $table->string('NgayDatVe');
            $table->integer('idKH');
            $table->integer('idLC');
            $table->integer('idHD');
            $table->integer('idXe');
            $table->string('NgayKhoiHanh');
            $table->string('GioKhoiHanh');
            $table->integer('TrangThai');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ve');
    }
}
