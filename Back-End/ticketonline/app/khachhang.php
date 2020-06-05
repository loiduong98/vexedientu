<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class khachhang extends Model
{
    protected $fillable = [
        'id',
        'HoTen',
        'SDT',
        'Email',
        'DiaChi',
    ];
    protected $table = "khachhang";
    public $timestamps = false;

    
}
