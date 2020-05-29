<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\tuyen;

class TradeTicketController extends Controller
{
    public function getLayout()
    {
    	return view('page.tradeticket.index');
    }

    public function getNews()
    {
    	return view('page.tradeticket.news');
    }

    public function getDanhSachTuyen()
    {
    	$tuyen = tuyen::orderBy('id','DESC')->get();
    	return view('page.tradeticket.index', ['tuyen'=>$tuyen]);
    }
}
