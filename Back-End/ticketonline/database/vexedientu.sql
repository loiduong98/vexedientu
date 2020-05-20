-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 17, 2020 lúc 08:44 AM
-- Phiên bản máy phục vụ: 10.4.11-MariaDB
-- Phiên bản PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `haha`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ben`
--

CREATE TABLE `ben` (
  `id` int(10) UNSIGNED NOT NULL,
  `TenBen` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `ben`
--

INSERT INTO `ben` (`id`, `TenBen`) VALUES
(1, 'Thành phố Hồ Chí Minh'),
(2, 'Đà Lạt'),
(3, 'Phan Thiết'),
(4, 'Cần Thơ'),
(5, 'Đà nẵng'),
(6, 'Cà Mau');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitietghe`
--

CREATE TABLE `chitietghe` (
  `id` int(10) UNSIGNED NOT NULL,
  `idSoDoGhe` int(10) UNSIGNED NOT NULL,
  `TenGhe` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `chitietghe`
--

INSERT INTO `chitietghe` (`id`, `idSoDoGhe`, `TenGhe`) VALUES
(1, 1, 'A1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitietve`
--

CREATE TABLE `chitietve` (
  `idVe` int(10) UNSIGNED NOT NULL,
  `idGhe` int(10) UNSIGNED NOT NULL,
  `Gia` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `SoLuong` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `MaBiMat` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chucvu`
--

CREATE TABLE `chucvu` (
  `id` int(10) UNSIGNED NOT NULL,
  `TenCV` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `chucvu`
--

INSERT INTO `chucvu` (`id`, `TenCV`) VALUES
(1, 'Nhân viên bán vé'),
(2, 'Nhân viên soát vé');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ct_hoadon`
--

CREATE TABLE `ct_hoadon` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_hoadon` int(10) UNSIGNED NOT NULL,
  `idVe` int(10) UNSIGNED NOT NULL,
  `SoLuong` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hinhthucthanhtoan`
--

CREATE TABLE `hinhthucthanhtoan` (
  `id` int(10) UNSIGNED NOT NULL,
  `TenHTTT` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `hinhthucthanhtoan`
--

INSERT INTO `hinhthucthanhtoan` (`id`, `TenHTTT`) VALUES
(1, 'Chuyển khoản ngân hàng'),
(2, 'Thanh toán qua ví MOMO'),
(3, 'Thanh toán qua ví Airpay');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hoadon`
--

CREATE TABLE `hoadon` (
  `id` int(10) UNSIGNED NOT NULL,
  `NgayDatVe` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `TongTien` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `GhiChu` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `idKH` int(10) UNSIGNED NOT NULL,
  `idHTTT` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khachhang`
--

CREATE TABLE `khachhang` (
  `id` int(10) UNSIGNED NOT NULL,
  `HoTen` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `SDT` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `DiaChi` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lichchay`
--

CREATE TABLE `lichchay` (
  `id` int(10) UNSIGNED NOT NULL,
  `Gia` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idTuyen` int(10) UNSIGNED NOT NULL,
  `idXe` int(10) UNSIGNED NOT NULL,
  `TenLC` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `lichchay`
--

INSERT INTO `lichchay` (`id`, `Gia`, `idTuyen`, `idXe`, `TenLC`) VALUES
(1, '220000', 1, 1, 'TPHCM - Đà Lạt'),
(2, '250000', 5, 1, 'Đà Lạt - TPHCM'),
(3, '220000', 1, 1, 'TPHCM - Đà Lạt'),
(4, '220000', 3, 2, 'TPHCM - Phan Thiết'),
(5, '150000', 4, 4, 'TPHCM - Cần thơ'),
(6, '300000', 6, 3, 'Đà Lạt - Cần Thơ'),
(7, '220000', 5, 1, 'Đà Lạt - TPHCM'),
(8, '200000', 7, 4, 'Phan Thiết - Đà Lạt'),
(9, '220000', 14, 1, NULL),
(10, '220000', 17, 4, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lichsuve`
--

CREATE TABLE `lichsuve` (
  `id` int(10) UNSIGNED NOT NULL,
  `MoTa` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idNV` int(10) UNSIGNED NOT NULL,
  `idVe` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(18, '2014_10_12_000000_create_users_table', 1),
(19, '2014_10_12_100000_create_password_resets_table', 1),
(20, '2019_10_02_003623_ben', 1),
(21, '2019_10_02_003635_tuyen', 1),
(22, '2019_10_02_003636_sodoghe', 1),
(23, '2019_10_02_003637_xe', 1),
(24, '2019_10_02_003638_lichchay', 1),
(25, '2019_10_02_003639_chitietghe', 1),
(26, '2019_10_02_003640_khachhang', 1),
(27, '2019_10_02_003641_hinhthucthanhtoan', 1),
(28, '2019_10_02_003642_hoadon', 1),
(29, '2019_10_02_003643_ve', 1),
(30, '2019_10_02_003644_chucvu', 1),
(31, '2019_10_02_003645_nhanvien', 1),
(32, '2019_10_02_003646_lichsuve', 1),
(33, '2019_10_02_003722_chitietve', 1),
(34, '2019_10_02_003948_nv_tuyen', 1),
(35, '2019_10_30_153236_ct_hoadon', 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhanvien`
--

CREATE TABLE `nhanvien` (
  `id` int(10) UNSIGNED NOT NULL,
  `HoTen` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `SDT` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `DiaChi` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `NgaySinh` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idCV` int(10) UNSIGNED NOT NULL,
  `idUsers` int(10) UNSIGNED NOT NULL,
  `GioiTinh` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `TinhTrang` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `nhanvien`
--

INSERT INTO `nhanvien` (`id`, `HoTen`, `SDT`, `Email`, `DiaChi`, `NgaySinh`, `idCV`, `idUsers`, `GioiTinh`, `TinhTrang`) VALUES
(1, 'Trần Minh Tuấn', '0774025555', 'aaa@gmail.com', 'aaa', '1', 1, 2, 'Nam', NULL),
(2, 'Đức Huy', '0774201515', 'duchuy11@gmail.com', 'Quận phú nhuận', '1998-02-07', 2, 3, 'Nam', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nv_tuyen`
--

CREATE TABLE `nv_tuyen` (
  `idNV` int(10) UNSIGNED NOT NULL,
  `idTuyen` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_resets`
--

CREATE TABLE `password_resets` (
  `Email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sodoghe`
--

CREATE TABLE `sodoghe` (
  `id` int(10) UNSIGNED NOT NULL,
  `TenSoDo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `SoDong` int(11) NOT NULL,
  `SoCot` int(11) NOT NULL,
  `UrlHinh` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sodoghe`
--

INSERT INTO `sodoghe` (`id`, `TenSoDo`, `SoDong`, `SoCot`, `UrlHinh`) VALUES
(1, 'Xe Limousine', 15, 2, 'KQQx_giuongnam.png'),
(2, 'Xe giường nằm', 15, 2, 'Ntcw_giuongnam.png'),
(3, 'Xe phòng vip', 7, 2, 'X1wd_xephong.png');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tintuc`
--

CREATE TABLE `tintuc` (
  `id` int(11) NOT NULL,
  `TieuDe` varchar(255) NOT NULL,
  `NoiDung` varchar(255) NOT NULL,
  `urlHinh` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `tintuc`
--

INSERT INTO `tintuc` (`id`, `TieuDe`, `NoiDung`, `urlHinh`) VALUES
(1, 'Sạt lỡ đèo bảo  lộc', '<p>aaaaaaaaaaaaaaaaaaaaa</p>', 'zwN9_blackberry-key2-4-600x600.jpg'),
(2, 'Sạt lỡ đèo bảo  lộc', '<p>aaaaaaaaaaaaaaaaaaaaa</p>', 'MjMw_dell-inspiron-3576-c5i3132w-vv-ch-1-1-600x600.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tuyen`
--

CREATE TABLE `tuyen` (
  `id` int(10) UNSIGNED NOT NULL,
  `TenTuyen` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idBenDi` int(10) UNSIGNED NOT NULL,
  `idBenDen` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `tuyen`
--

INSERT INTO `tuyen` (`id`, `TenTuyen`, `idBenDi`, `idBenDen`) VALUES
(1, 'Tp.Hồ Chí Minh - Đà Lạt', 1, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `level` int(10) DEFAULT NULL,
  `urlHinh` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ve`
--

CREATE TABLE `ve` (
  `id` int(10) UNSIGNED NOT NULL,
  `NgayDatVe` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idKH` int(10) UNSIGNED NOT NULL,
  `idLC` int(10) UNSIGNED NOT NULL,
  `idHD` int(10) UNSIGNED NOT NULL,
  `NgayKhoiHanh` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `GioKhoiHanh` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `TrangThai` int(1) NOT NULL,
  `idXe` int(11) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `xe`
--

CREATE TABLE `xe` (
  `id` int(10) UNSIGNED NOT NULL,
  `BSXe` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idSoDoGhe` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `xe`
--

INSERT INTO `xe` (`id`, `BSXe`, `idSoDoGhe`) VALUES
(1, '51F - 151.55', 1),
(2, '51F - 999.99', 2),
(3, '51F - 612.45', 1),
(4, '51F - 777.77', 1),
(5, '51F - 612.22', 2);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `ben`
--
ALTER TABLE `ben`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `chitietghe`
--
ALTER TABLE `chitietghe`
  ADD PRIMARY KEY (`id`),
  ADD KEY `chitietghe_idsodoghe_foreign` (`idSoDoGhe`);

--
-- Chỉ mục cho bảng `chitietve`
--
ALTER TABLE `chitietve`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `chucvu`
--
ALTER TABLE `chucvu`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `ct_hoadon`
--
ALTER TABLE `ct_hoadon`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ct_hoadon_id_hoadon_foreign` (`id_hoadon`),
  ADD KEY `ct_hoadon_idve_foreign` (`idVe`);

--
-- Chỉ mục cho bảng `hinhthucthanhtoan`
--
ALTER TABLE `hinhthucthanhtoan`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `hoadon`
--
ALTER TABLE `hoadon`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hoadon_idkh_foreign` (`idKH`),
  ADD KEY `hoadon_idhttt_foreign` (`idHTTT`);

--
-- Chỉ mục cho bảng `khachhang`
--
ALTER TABLE `khachhang`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `lichchay`
--
ALTER TABLE `lichchay`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lichchay_idtuyen_foreign` (`idTuyen`),
  ADD KEY `lichchay_idxe_foreign` (`idXe`);

--
-- Chỉ mục cho bảng `lichsuve`
--
ALTER TABLE `lichsuve`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lichsuve_idnv_foreign` (`idNV`),
  ADD KEY `lichsuve_idve_foreign` (`idVe`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD PRIMARY KEY (`id`),
  ADD KEY `nhanvien_idcv_foreign` (`idCV`),
  ADD KEY `nhanvien_idusers_foreign` (`idUsers`);

--
-- Chỉ mục cho bảng `nv_tuyen`
--
ALTER TABLE `nv_tuyen`
  ADD PRIMARY KEY (`idNV`,`idTuyen`);

--
-- Chỉ mục cho bảng `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`Email`);

--
-- Chỉ mục cho bảng `sodoghe`
--
ALTER TABLE `sodoghe`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tintuc`
--
ALTER TABLE `tintuc`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tuyen`
--
ALTER TABLE `tuyen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tuyen_idbendi_foreign` (`idBenDi`),
  ADD KEY `tuyen_idbenden_foreign` (`idBenDen`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `ve`
--
ALTER TABLE `ve`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ve_idkh_foreign` (`idKH`),
  ADD KEY `ve_idlc_foreign` (`idLC`),
  ADD KEY `ve_idhd_foreign` (`idHD`),
  ADD KEY `ve_idlc1_foreign` (`idXe`);

--
-- Chỉ mục cho bảng `xe`
--
ALTER TABLE `xe`
  ADD PRIMARY KEY (`id`),
  ADD KEY `xe_idsodoghe_foreign` (`idSoDoGhe`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `ben`
--
ALTER TABLE `ben`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `chitietghe`
--
ALTER TABLE `chitietghe`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `chitietve`
--
ALTER TABLE `chitietve`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `chucvu`
--
ALTER TABLE `chucvu`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `ct_hoadon`
--
ALTER TABLE `ct_hoadon`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `hinhthucthanhtoan`
--
ALTER TABLE `hinhthucthanhtoan`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `hoadon`
--
ALTER TABLE `hoadon`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `khachhang`
--
ALTER TABLE `khachhang`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `lichchay`
--
ALTER TABLE `lichchay`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `lichsuve`
--
ALTER TABLE `lichsuve`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT cho bảng `nhanvien`
--
ALTER TABLE `nhanvien`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `sodoghe`
--
ALTER TABLE `sodoghe`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `tintuc`
--
ALTER TABLE `tintuc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `tuyen`
--
ALTER TABLE `tuyen`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `ve`
--
ALTER TABLE `ve`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `xe`
--
ALTER TABLE `xe`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `chitietghe`
--
ALTER TABLE `chitietghe`
  ADD CONSTRAINT `chitietghe_idsodoghe_foreign` FOREIGN KEY (`idSoDoGhe`) REFERENCES `sodoghe` (`id`);

--
-- Các ràng buộc cho bảng `ct_hoadon`
--
ALTER TABLE `ct_hoadon`
  ADD CONSTRAINT `ct_hoadon_id_hoadon_foreign` FOREIGN KEY (`id_hoadon`) REFERENCES `hoadon` (`id`),
  ADD CONSTRAINT `ct_hoadon_idve_foreign` FOREIGN KEY (`idVe`) REFERENCES `ve` (`id`);

--
-- Các ràng buộc cho bảng `hoadon`
--
ALTER TABLE `hoadon`
  ADD CONSTRAINT `hoadon_idhttt_foreign` FOREIGN KEY (`idHTTT`) REFERENCES `hinhthucthanhtoan` (`id`),
  ADD CONSTRAINT `hoadon_idkh_foreign` FOREIGN KEY (`idKH`) REFERENCES `khachhang` (`id`);

--
-- Các ràng buộc cho bảng `lichchay`
--
ALTER TABLE `lichchay`
  ADD CONSTRAINT `lichchay_idtuyen_foreign` FOREIGN KEY (`idTuyen`) REFERENCES `tuyen` (`id`),
  ADD CONSTRAINT `lichchay_idxe_foreign` FOREIGN KEY (`idXe`) REFERENCES `xe` (`id`);

--
-- Các ràng buộc cho bảng `lichsuve`
--
ALTER TABLE `lichsuve`
  ADD CONSTRAINT `lichsuve_idnv_foreign` FOREIGN KEY (`idNV`) REFERENCES `nhanvien` (`id`),
  ADD CONSTRAINT `lichsuve_idve_foreign` FOREIGN KEY (`idVe`) REFERENCES `ve` (`id`);

--
-- Các ràng buộc cho bảng `tuyen`
--
ALTER TABLE `tuyen`
  ADD CONSTRAINT `tuyen_idbenden_foreign` FOREIGN KEY (`idBenDen`) REFERENCES `ben` (`id`),
  ADD CONSTRAINT `tuyen_idbendi_foreign` FOREIGN KEY (`idBenDi`) REFERENCES `ben` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
