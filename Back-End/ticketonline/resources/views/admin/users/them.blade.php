@extends('admin.layout.index')
@section('content')
<div id="page-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">User
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
                        <form action="admin/users/them" method="POST" enctype="multipart/form-data">
                             <input type="hidden" name="_token" value="{{csrf_token()}}" />
                            <div class="form-group">
                                <label>Họ Tên</label>
                                <input class="form-control" name="name" placeholder="Nhập họ tên" />
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input class="form-control" type="email"  name="email" placeholder="Nhập email" />
                            </div>
                            <div class="form-group">
                                <label>Chức vụ</label>
                                <select class="form-control" name="level" id="level">                                   
                                    <option value="3">Thành viên</option>
                                    <option value="2">Admin</option>
                                    <option value="1">Super Admin</option>
                                </select>
                            </div>                            
                            <div class="form-group">
                                <label>Hình</label>
                                <input type="file" name="urlHinh">
                            </div>                    
                            <button type="submit" class="btn btn-default">Thêm users</button>
                            <button type="reset" class="btn btn-default">Làm mới</button>
                        <form>
                    </div>
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
        </div>
@endsection