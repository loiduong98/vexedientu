<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class sodoghe extends Model
{
    protected $fillable = [
        'id',
        'TenSoDo',
        'SoDong',
        'SoCot',
        'UrlHinh',
    ];
    protected $table = "sodoghe";
    public $timestamps = false;
}
