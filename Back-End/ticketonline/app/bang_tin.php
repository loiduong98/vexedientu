<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class bang_tin extends Model
{
    protected $fillable = [
        'id',
        'TieuDe',
        'NoiDung',
        'urlHinh',
        'NoiBan',
        'Gia',
    ];
    protected $table = "bang_tin";
    public $timestamps = false;
}
