@extends('admin.layout.index')
@section('content')
<div id="page-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">Tin Tức
                            <small>{{$bang_tin->TieuDe}}</small>
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
                        <form action="admin/bang_tin/sua/{{$bang_tin->id}}" method="POST" enctype="multipart/form-data">
                             <input type="hidden" name="_token" value="{{csrf_token()}}" />
                            <div class="form-group">
                                <label>Tiêu đề</label>
                                <input class="form-control" name="TieuDe" placeholder="Nhập Tiêu đề" value="{{$bang_tin->TieuDe}}"/>
                            </div>
                            <div class="form-group">
                                <label>Nội dung</label>
                                <textarea id="demo" class="form-control ckeditor" rows="3" name="NoiDung">{{$bang_tin->NoiDung}}</textarea>
                            </div>
                            <div class="form-group">
                                <label>Hình</label>
                                <input type="file" name="urlHinh" value="{{$bang_tin->urlHinh}}>"/>
                            </div>
                            <div class="form-group">
                                <label>Nơi bán</label>
                                <input class="form-control" name="NoiBan" placeholder="Nhập nơi bán" value="{{$bang_tin->NoiBan}}"/>
                            </div>
                            <div class="form-group">
                                <label>Giá</label>
                                <input class="form-control" name="Gia" placeholder="Nhập giá" value="{{$bang_tin->Gia}}"/>
                            </div>
                            <button type="submit" class="btn btn-default">Sửa tin tức</button>
                            <button type="reset" class="btn btn-default">Làm mới</button>
                        </form>
                    </div>
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
        </div>
@endsection