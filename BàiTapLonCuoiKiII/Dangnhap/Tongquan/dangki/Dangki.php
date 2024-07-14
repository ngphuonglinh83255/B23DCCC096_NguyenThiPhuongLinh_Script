include('db.php');
 
//xu ly dang ky</em>
    if (isset($_POST['xn'])) {
            if ($_POST['hoten'] == "") {
                print "Bạn chưa nhập họ tên. <a href='javascript:history.go(-1)'>Nhấp vào đây để quay trở lại</a>";
                exit;
            } else
            {
                $hoten = addslashes($_POST['hoten']); //gan hoten va mot bien
            }
 
            if ($_POST['tdn'] == "") {
 
                print "Bạn chưa nhập tên đăng nhập. <a href='javascript:history.go(-1)'>Nhấp vào đây để quay trở lại</a>";
 
                exit;
 
            } else
 
            {
 
                if (mysql_num_rows(mysql_query("SELECT TENDANGNHAP FROM thanhvien WHERE TENDANGNHAP='".$_POST['tdn']."'")) > 0) {
                    echo 'khong su dung ten dang nhap nay';
                    exit;
                } else {
                    $tendangnhap = $_POST['tdn']; //gan hoten va mot bien
                }
 
        }
        if ($_POST['mk'] == "") {
 
            print "Bạn chưa nhập mã khẩu. <a href='javascript:history.go(-1)'>Nhấp vào đây để quay trở lại</a>";
            exit;
        } else
        {
            $matkhau = md5(addslashes($_POST['mk'])); //gan hoten va mot bien
        }
 
        if ($_POST['xnmk'] == "") {
            print "Bạn chưa xác nhận mã khẩu. <a href='javascript:history.go(-1)'>Nhấp vào đây để quay trở lại</a>";
            exit;
 
        } else
        {
            $xacnhanmatkhau = md5(addslashes($_POST['xnmk'])); //gan hoten va mot bien
 
        }
 
            if ($matkhau != $xacnhanmatkhau) {
                print "Mã khẩu không khớp. <a href='javascript:history.go(-1)'>Nhấp vào đây để quay trở lại</a>";
                exit;
 
            } else
            {
                $matkhau = $xacnhanmatkhau;
            }
 
            if ($_POST['gioitinh'] != "") {
                $gioitinh = $_POST['gioitinh']; //gan hoten va mot bien
 
            } else
            {
                print "Bạn chưa check giới tính. <a href='javascript:history.go(-1)'>Nhấp vào đây để quay trở lại</a>";
                exit;
            }
 
        if ($_POST['email'] == "") {
 
            print "Email này ko hợp lệ. <a href='javascript:history.go(-1)'>Nhấp vào đây để quay trở lại</a>";
 
            exit;
 
        } else {
            $email = $_POST['email']; //gan hoten va mot bien
        }
 
 
        if ($_POST['diachi'] == "") {
 
            print "Bạn chưa nhập địa chỉ. <a href='javascript:history.go(-1)'>Nhấp vào đây để quay trở lại</a>";
            exit;
        } else
 
        {
            $diachi = $_POST['diachi']; //gan hoten va mot bien
        }
 
        if (!isset($_POST['xacnhan_dieukhoan'])) {
            print "Bạn chưa check điều khoản. <a href='javascript:history.go(-1)'>Nhấp vào đây để quay trở lại</a>";
            exit;
        } else
 
        {
            $xacnhan_dk = $_POST['xacnhan_dieukhoan']; //gan hoten va mot bien
        }
 
        //quyen han de quan ly thanh vien ta se mat dinh gan cho quyen han nay la 2,co nghia la thanhvien
        $quyen_han = 2;
        if ($hoten && $tendangnhap && $matkhau && $email && $diachi && $xacnhan_dk && $quyen_han) {
         
            $sql = "insert into thanhvien(HOTEN,TENDANGNHAP,MATKHAU,GIOITINH,DIACHI,EMAIL,QUYEN_HAN) values('".$hoten."','".$tendangnhap."','".$matkhau."','".$gioitinh."','".$diachi."','".$email."','".$quyen_han."')";
 
            $query = mysql_query($sql, $con);
            if ($query) {
                echo 'dang ky '.$tendangnhap.
                'thanh cong:<a href="../index.php">quay ve trang chu</a>';
            } else
            {
                echo 'dang ky khong thanh cong:<a href="login.php">dang ky lay</a>';
            }
        } else {
            echo "that bai";
        }
    }
