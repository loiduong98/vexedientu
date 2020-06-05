<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ve extends Model
{
    
    protected $fillable = [
        'id',
        'NgayDatVe',
        'idKH',
        'idLC',
        'idHD',
        'idXe',
        'NgayKhoiHanh',
        'GioKhoiHanh',
        'TrangThai'
    ];
    protected $table = "ve";

    public $timestamps = false;


    
}
