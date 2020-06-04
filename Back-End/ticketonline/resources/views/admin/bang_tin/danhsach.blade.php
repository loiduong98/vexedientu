@extends('admin.layout.index')
@section('content')
<div id="page-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">Bảng tin
                            <small>danh sách</small>
                        </h1>
                    </div>
                    <!-- /.col-lg-12 -->
                    <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                        <thead>
                            <tr align="center">
                                <th>ID</th>
                                <th>Tiêu đề</th>
                                <th>Nội dung</th>
                                <th>Hình</th>
                                <th>Nơi bán</th>
                                <th>Giá</th>
                                <th>Xóa</th>
                                <th>Sửa</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($bang_tin as $bt)
                            <tr class="odd gradeX" align="center">
                                <td>{{$bt->id}}</td>
                                <td>{{$bt->TieuDe}}</td>
                                <td>{{$bt->NoiDung}}</td>
                                <td>{{$bt->urlHinh}}</td>
                                <td>{{$bt->NoiBan}}</td>
                                <td>{{$bt->Gia}}</td>
                                <td class="center"><i class="fa fa-trash-o  fa-fw"></i><a href="admin/bang_tin/xoa/{{$bt->id}}"> Xóa</a></td>
                                <td class="center"><i class="fa fa-pencil fa-fw"></i> <a href="admin/bang_tin/sua/{{$bt->id}}">Sửa</a></td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
        </div>
@endsection