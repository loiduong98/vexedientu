<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class chitietghe extends Model
{
    protected $fillable = [
        'id',
        'idSoDoGhe',
        'TenGhe',
        'TrangThai',
    ];
    protected $table = "chitietghe";
    public $timestamps = false;

    public function chitietve()
    {
    	return $this->belongsTo('App\chitietve','idGhe','id');
    }
    public function sodoghe()
    {
    	return $this->belongsTo('App\sodoghe','idSoDoGhe','id');
    }
}
