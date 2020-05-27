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
    background-color: #03A9F4;
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

.insert-content {
    display: inline-block;
    height: 28px;
    margin-top: 5px;
    font-size: 18px;
    color: #183048;
    font-weight: 600;
}
</style>
<!-- header -->
    <div class="new-post">
        <div class="container">
            <div class="row">
                <form action="#" method="post" id="insert-form">
                    <h3>Đăng Tin</h3>
                    <div class="insert-content">1. Nội Dung Tin
                        <span class="insert-alert hidden-xs">(Vui lòng điền đầy đủ tất cả các mục có dấu <span class="insert-require">*</span>)
                        </span>
                    </div>
                    <div class="form-group">
                        <label for="">Tuyến*</label>
                        <div class="list-tuyen">
                            <select name="TenTuyen" id="" class="form-control">
                                <option value="0">--Chọn tuyến bán (đổi)--</option>
                                <option value="1">Thành Phố Hồ Chí Minh - Đà Lạt</option>
                                <option value="2">Thành Phố Hồ Chí Minh - Đà Lạt</option>
                                <option value="3">Thành Phố Hồ Chí Minh - Đà Lạt</option>
                        </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="">Vùng*</label>
                        <div class="list-vung">
                            <select name="TenVung" id="" class="form-control">
                                <option value="">--Chọn nơi bán--</option>
                                <option value="">Thành Phố Hồ Chí Minh</option>
                                <option value="">Đà Lạt</option>
                                <option value="">Cần Thơ</option>
                        </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="">Tiêu đề*</label>
                        <div class="title">
                            <input class="form-control" type="text" placeholder="Mời bạn nhập tiêu đề" name="TieuDe">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="">Mô tả*</label>
                        <div class="content">
                            <textarea class="form-control" name="MoTa" id=MoTa cols="30" rows="10" placeholder="Mời bạn nhập mô tả"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="">Giá*</label>
                        <div class="price">
                            <input id="" class="form-control" type="text" name="price" placeholder="Mời bạn nhập giá" maxlength="17" autocomplete="off" data-error="Vui lòng điền đúng giá của sản phẩm">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="">Địa chỉ*</label>
                        <div class="address">
                            <input id="" class="form-control" type="text" name="address" placeholder="Mời bạn nhập địa chỉ" maxlength="100" autocomplete="off" data-error="Vui lòng điền đúng địa chỉ">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="">Hình ảnh*</label>
                        <div class="address">
                            <input type="file" name="urlhinh" id="">
                        </div>
                    </div>
                    <div class="insert-content">2. Thông tin liên hệ
                        <span class="insert-alert hidden-xs">(Vui lòng điền chính xác thông tin của bạn)</span>
                    </div>
                    <div class="form-group">
                        <label for="">Họ và tên*</label>
                        <div class="name">
                            <input id="" class="form-control" type="text" name="name" placeholder="Mời bạn nhập họ tên" maxlength="100" autocomplete="off" data-error="Vui lòng điền đúng họ tên">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="">Email*</label>
                        <div class="name">
                            <input id="" class="form-control" type="email" name="email" placeholder="Mời bạn nhập email" maxlength="100" autocomplete="off" data-error="Vui lòng điền đúng email">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="">Số điện thoại*</label>
                        <div class="phonenumber">
                            <input id="" class="form-control" type="text" name="phonenumber" placeholder="Mời bạn nhập số điện thoại" maxlength="10" autocomplete="off" data-error="Vui lòng điền đúng số điện thoại">
                        </div>
                    </div>
                    <input class="btn btn-success mb-3" type="submit" value="Hoàn tất">
                </form>
            </div>
        </div>
    </div>
@endsection