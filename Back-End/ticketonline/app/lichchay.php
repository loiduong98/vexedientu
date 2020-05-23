<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class lichchay extends Model
{
    protected $fillable = [
        'id',
        'Gia',
        'idTuyen',
        'idXe',
        'TenLC',
    ];
    protected $table = "lichchay";
    public $timestamps = false;

    public function xe()
    {
    	return $this->belongsTo('App\xe','idXe','id');
    }
    public function tuyen()
    {
    	return $this->belongsTo('App\tuyen','idTuyen','id');
    }
}
