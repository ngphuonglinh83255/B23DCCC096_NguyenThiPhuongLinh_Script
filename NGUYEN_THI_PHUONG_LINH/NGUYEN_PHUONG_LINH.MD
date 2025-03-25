# Chọn bản phối Linux và lý do lựa chọn

## 1. Bạn chọn bản phối Linux nào và tại sao lại chọn bản phối đó? Bản phối đó có ưu điểm gì?
Tôi chọn **Ubuntu** làm bản phân phối Linux để sử dụng. Lý do chọn Ubuntu vì:

- **Dễ sử dụng**: Ubuntu có giao diện thân thiện, dễ cài đặt và sử dụng, đặc biệt phù hợp với người mới bắt đầu.
- **Hỗ trợ mạnh mẽ**: Có cộng đồng lớn và nhiều tài liệu hướng dẫn.
- **Tính ổn định cao**: Ubuntu là một bản phân phối phổ biến và có chu kỳ cập nhật lâu dài.
- **Kho phần mềm phong phú**: Hỗ trợ cài đặt nhiều phần mềm thông qua APT package manager.
- **Bảo mật tốt**: Ubuntu thường xuyên cập nhật bản vá bảo mật.
- **Tích hợp tốt với môi trường phát triển**: Hỗ trợ nhiều công cụ lập trình như Python, Node.js, Docker, v.v.
- **Hỗ trợ hệ thống WSL**: Ubuntu là bản phối được hỗ trợ chính thức trên **Windows Subsystem for Linux (WSL)**, giúp người dùng Windows dễ dàng sử dụng.

---

## 2. Tổng hợp kiến thức, ví dụ đã thực hành về các khái niệm, giao thức, công cụ mạng cơ bản

### 2.1. Các khái niệm cơ bản
- **IP Address (Địa chỉ IP)**: Là địa chỉ định danh của một thiết bị trong mạng. IP có hai loại:
  - **IPv4** (ví dụ: `192.168.1.1`)
  - **IPv6** (ví dụ: `2001:db8::ff00:42:8329`)
- **Subnet Mask (Mặt nạ mạng con)**: Dùng để phân chia mạng và xác định phần mạng/phần host.
- **MAC Address (Địa chỉ MAC)**: Địa chỉ vật lý của card mạng, giúp định danh thiết bị trong mạng LAN.
- **Gateway (Cổng mặc định)**: Là điểm truy cập trung gian kết nối mạng nội bộ với mạng bên ngoài (thường là router).
- **DNS (Domain Name System)**: Hệ thống phân giải tên miền thành địa chỉ IP.
- **DHCP (Dynamic Host Configuration Protocol)**: Giao thức cấp phát IP động cho các thiết bị trong mạng.
- **NAT (Network Address Translation)**: Cơ chế giúp nhiều thiết bị trong mạng nội bộ sử dụng một địa chỉ IP công cộng duy nhất để truy cập Internet.

### 2.2. Các giao thức mạng cơ bản
- **TCP/IP (Transmission Control Protocol / Internet Protocol)**: Bộ giao thức chuẩn để truyền dữ liệu trên Internet.
- **HTTP/HTTPS (HyperText Transfer Protocol / Secure)**: Giao thức truyền tải dữ liệu trên web, HTTPS có bảo mật cao hơn nhờ SSL/TLS.
- **FTP/SFTP (File Transfer Protocol / Secure FTP)**: Giao thức truyền tệp giữa máy chủ và máy khách.
- **SSH (Secure Shell)**: Giao thức điều khiển máy chủ từ xa một cách bảo mật.
- **ICMP (Internet Control Message Protocol)**: Giao thức giúp kiểm tra trạng thái kết nối mạng.
- **ARP (Address Resolution Protocol)**: Giao thức chuyển đổi địa chỉ IP sang địa chỉ MAC.

### 2.3. Các công cụ mạng đã thực hành
- **ping**: Kiểm tra kết nối giữa hai thiết bị.
  ```sh
  ping google.com
  ```
- **ifconfig/ip a**: Kiểm tra thông tin mạng của máy.
  ```sh
  ip a
  ```
- **traceroute**: Kiểm tra đường đi của gói tin đến máy đích.
  ```sh
  traceroute google.com
  ```
- **netstat**: Kiểm tra các kết nối mạng đang hoạt động.
  ```sh
  netstat -tulnp
  ```
- **nslookup**: Kiểm tra thông tin DNS của một tên miền.
  ```sh
  nslookup google.com
  ```
- **curl**: Kiểm tra kết nối HTTP/HTTPS.
  ```sh
  curl -I https://google.com
  ```
- **wget**: Tải xuống tệp từ Internet.
  ```sh
  wget https://example.com/file.zip
  ```

---

## 3. Tạo Repository và thực hành các lệnh Git cơ bản

- **Cấu hình Git lần đầu tiên**:
  ```sh
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```

- **Khởi tạo Git repository**:
  ```sh
  git init
  ```

- **Clone một repository từ GitHub/GitLab**:
  ```sh
  git clone https://github.com/username/repository.git
  ```

- **Thêm tệp vào Git**:
  ```sh
  git add filename
  ```

- **Commit thay đổi**:
  ```sh
  git commit -m "Mô tả thay đổi"
  ```

- **Đẩy (push) thay đổi lên repository từ xa**:
  ```sh
  git push origin main
  ```

- **Kéo (pull) thay đổi từ repository từ xa**:
  ```sh
  git pull origin main
  ```

- **Xem trạng thái repository**:
  ```sh
  git status
  ```

- **Xem lịch sử commit**:
  ```sh
  git log
  
