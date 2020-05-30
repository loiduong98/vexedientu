<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class khachhang_login extends Model
{
	protected $table = "khachhang_login";

    protected $fillable = [
        'id',
        'name',
        'email',
        'phone',
        'diachi',
        'password',
        'urlHinh',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

}
