<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ben extends Model
{
    protected $fillable = [
        'id',
        'TenBen',
    ];
    protected $table = "ben";
    public $timestamps = false;
}
