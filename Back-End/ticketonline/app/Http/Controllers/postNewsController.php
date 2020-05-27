<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\tintuc;

class postNewsController extends Controller
{
    public function getLayout()
    {
    	return view('admin.tradeticket.danhsach');
    }

    public function postNews()
    {
    	return view('admin.tradeticket.them');
    }
}
