<nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="admin/index">Admin - Vé xe online</a>
            </div>
            <!-- /.navbar-header -->

            <ul class="nav navbar-top-links navbar-right">
                <!-- /.dropdown -->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                    @if (Auth::check())
                    <li>
                    Bạn đang đăng nhập với quyền 
                    @if( Auth::User()->level == 1)
                        {{ "SuperAdmin" }}
                    @elseif( Auth::User()->level == 2)
                        {{ "Admin" }}
                    @elseif( Auth::User()->level == 3)
                        {{ "Thành viên" }}
                    @endif
                    </li>
                    <div class="pull-right" style="margin-top: 3px;"><a class="btn btn-primary" href="{{ url('/logout') }}">Đăng xuất</a></div>
                    @endif
                    </ul>
                    <!-- /.dropdown-user -->
                </li>
                <!-- /.dropdown -->
            </ul>
            <!-- /.navbar-top-links -->

            @include('admin.layout.menu')
            <!-- /.navbar-static-side -->
        </nav>