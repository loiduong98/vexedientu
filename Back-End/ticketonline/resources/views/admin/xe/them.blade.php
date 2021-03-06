@extends('admin.layout.index')
@section('content')
<div id="page-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">Xe
                            <small>thêm</small>
                        </h1>
                    </div>
                    <!-- /.col-lg-12 -->
                    <div class="col-lg-7" style="padding-bottom:120px">
                        @if(count($errors) > 0)
                            <div class="alert alert-danger">
                                @foreach($errors->all() as $err){{$err}}<br>
                                @endforeach      
                            </div>
                        @endif

                        @if(session('thongbao'))
                            <div class="alert alert-success">
                                {{session('thongbao')}}
                            </div>
                        @endif
                        <form action="admin/xe/them" method="POST" enctype="multipart/form-data">
                             <input type="hidden" name="_token" value="{{csrf_token()}}" />
                            <div class="form-group">
                                <label>Biển số xe</label>
                                <input class="form-control" name="BSXe" placeholder="Nhập biển số xe" />
                            </div>
                            <div class="form-group">
                                <label>Danh sách ghế</label>
                                <input class="form-control" name="TatCaGhe" placeholder="Nhập tên ghế" value="A1,A2,A3,A4,B1,B2,B3,B4,C1,C2,C3,C4,D1,D2,D3,D4,E1,E2,E3,E4,F1,F2,F3,F4" />
                            </div>
                            <div class="form-group">
                                <label>Sơ đồ ghế</label>
                                <input class="form-control" name="SoDoGhe" placeholder="Nhập tên ghế" />
                            </div>
                            <button type="submit" class="btn btn-default">Thêm Xe</button>
                            <button type="reset" class="btn btn-default">Làm mới</button>
                        <form>
                    </div>
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
        </div>
@endsection