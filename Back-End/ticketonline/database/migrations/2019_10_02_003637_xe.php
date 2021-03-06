<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Xe extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('xe',function($table){
            $table->increments('id');
            $table->string('BSXe',50);
            $table->string('TatCaGhe');
            $table->string('GheDaDat');
            $table->string('SoDoGhe');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('xe');
    }
}
