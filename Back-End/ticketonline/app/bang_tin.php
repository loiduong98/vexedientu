<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class bang_tin extends Model
{
    protected $fillable = [
        'id_new',
        'idVe',
        'TieuDe',
        'Gia',
        'urlHinh',
        'LuotXem',
        'TrangThai_new',
        'idKH_trade',
        'idKH_old'
    ];
    protected $table = "bang_tin";
    public $timestamps = false;
}