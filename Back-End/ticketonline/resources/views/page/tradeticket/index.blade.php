@extends('page.layout.index')
@section('content')
<style>
* {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    background-color: #f5f5f5;
}


/* Header */

header#header {
    height: 150px;
    background-color: #f1f1f1;
}

header#header .row {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
}

header#header .logo-left img {
    height: 105px;
    width: 250px;
    margin: 15px;
}

.logo-right img {
    width: 100%;
}

ul.list__qc {
    display: flex;
    list-style: none;
}

ul.list__qc li {
    padding: 10px 5px;
}


/* End Header */


/* Menu Search */

.menu-search .row {
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
    background-color: #50a3b8;
}

.col-md-7.pull-left.search form {
    display: flex;
    justify-content: center;
}

.post-item a {
    text-decoration: none;
    color: black;
}


/* End Menu Search */


/* Content */

.row.news {
    margin-top: 20px;
    margin-bottom: 30px;
}

.content__left {
    background-color: #fff;
    padding-top: 20px;
}

.main-category {
    background-color: #fff;
    margin-left: 20px;
    width: 100%;
}

li.iem__category {
    list-style: none;
    margin: 20px;
}

.main-category h3 {
    font-weight: 600;
    text-align: center;
    padding: 10px;
    background-color: #50a3b8;
}

.new__top {
    margin-left: 5px;
    margin-top: 50px;
    background-color: #fff;
    width: 100%;
}

.new__top h3 {
    text-align: center;
    padding: 10px;
    background-color: #50a3b8;
    font-weight: 600;
}

.new__top .news {
    width: 100%;
    margin: 20px;
}


/* End Content */


/* Type */

ul.list__type {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;
}

.type-ticket {
    height: 50px;
    background: black;
    width: 100%;
    margin-top: 50px;
}

li.item__type a {
    color: #fff;
    font-size: 1rem;
}

li.item__type {
    padding: 0px 70px;
}


/* End Type */


/* Panigation */

ul.list__panigation {
    display: flex;
}

.page {
    height: 50px;
}

ul.list__panigation li {
    list-style: none;
    padding-left: 20px;
}

ul.list__panigation li a {
    text-decoration: none;
    color: black;
}

li.page.selected {
    width: 30px;
    height: 30px;
    background-color: gray;
}


/* End Panigation */
</style>
<div class="menu-search">
        <div class="row">
            <div class="col-md-9 pull-left search">
                <form class="form-inline search-form" action="#">
                    <div class="form-group search-category">
                        <select class="form-control" name="DanhMuc" id="DanhMuc">
                                    <option value="">Danh mục</option>
                                    <option value="1">Vé xe khách</option>
                                </select>
                    </div>
                    <div class="form-group search-location">
                        <select class="form-control" name="Tuyen" id="Tuyen">
                                <option>--Mời bạn chọn tuyến đi--</option>
                                    @foreach($tuyen as $t)
                                        <option value="{{$t->id}}">{{$t->TenTuyen}}</option>
                                    @endforeach
                        </select>
                    </div>
                    <div class="form-group search-text">
                        <input class="form-control" type="text" name="keyword" placeholder="Nhập từ khóa tìm kiếm">
                    </div>
                    <div class="btn-search font-bold text-center form-group pull-right">
                        <button class="">Tìm</button>
                    </div>
                </form>
            </div>
            <div class="col-md-3 pull-right post-item">
                <a href="#">
                    <div class="btn-post-item font-bold text-center">Đăng tin miễn phí</div>
                </a>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="content">
            <div class="row news">
                <div class="col-md-8 content__left">
                    <div class="row">
                        <div class="col-md-2">
                            <a href="">
                                <img src="master-asset/img/thumb_1.png" alt="">
                            </a>
                        </div>
                        <div class="col-md-8">
                            <div class="title">
                                <a data-toggle="modal" data-target="#modelId" href="#">Cần bán 2 vé tàu từ Sài Gòn về Bảo Lộc</a>
                            </div>
                            <div class="price">
                                <p>Giá thỏa thuận</p>
                            </div>
                            <div class="location">
                                <a href="">Vé Xe ở Hồ Chí Minh</a>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="date">
                                6 phút trước
                            </div>
                            <div class="view">
                                (67 lượt xem)
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-md-2">
                            <a href="">
                                <img src="master-asset/img/thumb_1.png" alt="">
                            </a>
                        </div>
                        <div class="col-md-8">
                            <div class="title">
                                <a data-toggle="modal" data-target="#modelId" href="#">Cần bán 2 vé tàu từ Sài Gòn về Bảo Lộc</a>
                            </div>
                            <div class="price">
                                <p>Giá thỏa thuận</p>
                            </div>
                            <div class="location">
                                <a href="">Vé Xe ở Hồ Chí Minh</a>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="date">
                                6 phút trước
                            </div>
                            <div class="view">
                                (67 lượt xem)
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-md-2">
                            <a href="">
                                <img src="master-asset/img/thumb_1.png" alt="">
                            </a>
                        </div>
                        <div class="col-md-8">
                            <div class="title">
                                <a data-toggle="modal" data-target="#modelId" href="#">Cần bán 2 vé tàu từ Sài Gòn về Bảo Lộc</a>
                            </div>
                            <div class="price">
                                <p>Giá thỏa thuận</p>
                            </div>
                            <div class="location">
                                <a href="">Vé Xe ở Hồ Chí Minh</a>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="date">
                                6 phút trước
                            </div>
                            <div class="view">
                                (67 lượt xem)
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-md-2">
                            <a href="">
                                <img src="master-asset/img/thumb_1.png" alt="">
                            </a>
                        </div>
                        <div class="col-md-8">
                            <div class="title">
                                <a data-toggle="modal" data-target="#modelId" href="#">Cần bán 2 vé tàu từ Sài Gòn về Bảo Lộc</a>
                            </div>
                            <div class="price">
                                <p>Giá thỏa thuận</p>
                            </div>
                            <div class="location">
                                <a href="">Vé Xe ở Hồ Chí Minh</a>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="date">
                                6 phút trước
                            </div>
                            <div class="view">
                                (67 lượt xem)
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-md-2">
                            <a href="">
                                <img src="master-asset/img/thumb_1.png" alt="">
                            </a>
                        </div>
                        <div class="col-md-8">
                            <div class="title">
                                <a data-toggle="modal" data-target="#modelId" href="#">Cần bán 2 vé tàu từ Sài Gòn về Bảo Lộc</a>
                            </div>
                            <div class="price">
                                <p>Giá thỏa thuận</p>
                            </div>
                            <div class="location">
                                <a href="">Vé Xe ở Hồ Chí Minh</a>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="date">
                                6 phút trước
                            </div>
                            <div class="view">
                                (67 lượt xem)
                            </div>
                        </div>
                    </div>
                    <hr>
                </div>
                <div class="col-md-4 content__right">
                    <div class="row">
                        <div class="main-category">
                            <h3>Danh mục chính</h3>
                            <ul class="list__maincategory">
                                <li class="iem__category">
                                    <a href="">Vé xe đi Đà Lạt</a>
                                </li>
                                <li class="iem__category">
                                    <a href="">Vé xe đi Cần Thơ</a>
                                </li>
                                <li class="iem__category">
                                    <a href="">Vé xe đi Phan Thiết</a>
                                </li>
                                <li class="iem__category">
                                    <a href="">Vé xe đi Thành Phố Hồ Chí Minh</a>
                                </li>
                                <li class="iem__category">
                                    <a href="">Vé xe đi Đà Nẵng</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="new__top">
                        <h3>Xem Nhiều Nhất</h3>
                        <div class="row news">
                            <div class="col-md-2">
                                <a href="">
                                    <img src="master-asset/img/vexe.png" alt="">
                                </a>
                            </div>
                            <div class="col-md-8">
                                <div class="title">
                                    <a href="#">Pass lại vé xe về cần thơ 27 tết</a>
                                </div>
                                <div class="price">
                                    <p>200.000VND</p>
                                </div>
                                <div class="location">
                                    <a href="">Vé Xe ở Hồ Chí Minh</a>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="row news">
                            <div class="col-md-2">
                                <a href="">
                                    <img src="master-asset/img/vexe.png" alt="">
                                </a>
                            </div>
                            <div class="col-md-8">
                                <div class="title">
                                    <a href="#">Pass lại vé xe về cần thơ 27 tết</a>
                                </div>
                                <div class="price">
                                    <p>200.000VND</p>
                                </div>
                                <div class="location">
                                    <a href="">Vé Xe ở Hồ Chí Minh</a>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="row news">
                            <div class="col-md-2">
                                <a href="">
                                    <img src="master-asset/img/vexe.png" alt="">
                                </a>
                            </div>
                            <div class="col-md-8">
                                <div class="title">
                                    <a href="#">Pass lại vé xe về cần thơ 27 tết</a>
                                </div>
                                <div class="price">
                                    <p>200.000VND</p>
                                </div>
                                <div class="location">
                                    <a href="">Vé Xe ở Hồ Chí Minh</a>
                                </div>
                            </div>
                        </div>
                        <hr>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="page">
        <div class="container">
            <ul class="pagination" id="pagination">
                <ul class="list__panigation">
                    <li class="first hidden-mod"><a href="">Trang đầu</a></li>
                    <li class="previous hidden-mod"><a href="">&lt;&lt;</a></li>
                    <li class="page selected"><a href="">1</a></li>
                    <li class="page"><a href="">2</a></li>
                    <li class="page"><a href="">3</a></li>
                    <li class="page"><a href="">4</a></li>
                    <li class="page"><a href="">5</a></li>
                    <li class="page"><a href="">6</a></li>
                    <li class="page"><a href="">7</a></li>
                    <li class="page"><a href="">8</a></li>
                    <li class="page"><a href="">9</a></li>
                    <li class="page"><a href="">10</a></li>
                    <li class="next"><a href="">&gt;&gt;</a></li>
                    <li class="last"><a href="">Trang cuối</a></li>
                </ul>
            </ul>
        </div>
    </div>
    </div>
    <!-- Modal -->
<div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Trao đổi vé</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>
            <div class="modal-body">
                <section class="ticket">
                    <div class="ticket__content">
                        <div class="ticket__items">
                            <img src="./img/bx-my-dinh.jpg" alt="" style="width: 480px; height: 250px;">
                            <h2>Thông tin vé </h2>
                            <p> <i class="fa fa-bus"></i> Tuyến đi:</p>
                            <p> <i class="fa fa-clock"></i> Giờ đi: </p>
                            <p> <i class="fa fa-money-bill"></i> Giá vé:</p>
                        </div>
                    </div>
                </section>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">Liên hệ</button>
            </div>
        </div>
    </div>
</div>
@endsection