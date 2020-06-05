<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class bang_tin extends Model
{
    protected $fillable = [
        'id',
        'idVe',
        'TieuDe',
        'Gia',
    ];
    protected $table = "bang_tin";
    public $timestamps = false;
}
