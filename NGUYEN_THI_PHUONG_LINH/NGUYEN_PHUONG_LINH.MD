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
#### 1. **ping**: Kiểm tra kết nối giữa hai thiết bị.
  ```sh
  ping google.com
  ```
  - Mở Terminal hoặc Command Prompt.
  - Chạy lệnh trên để kiểm tra kết nối đến Google.
  - Nếu có phản hồi, kết nối mạng đang hoạt động tốt.

#### 2. **ifconfig/ip a**: Kiểm tra thông tin mạng của máy.
  ```sh
  ip a
  ```
  - Mở Terminal.
  - Chạy lệnh để xem địa chỉ IP và thông tin mạng.

#### 3. **traceroute**: Kiểm tra đường đi của gói tin đến máy đích.
  ```sh
  traceroute google.com
  ```
  - Dùng lệnh này để xem các điểm trung gian mà gói tin đi qua trước khi đến Google.

#### 4. **netstat**: Kiểm tra các kết nối mạng đang hoạt động.
  ```sh
  netstat -tulnp
  ```
  - Xem danh sách các cổng đang mở và chương trình sử dụng chúng.

#### 5. **nslookup**: Kiểm tra thông tin DNS của một tên miền.
  ```sh
  nslookup google.com
  ```
  - Dùng để lấy địa chỉ IP của Google thông qua DNS.

#### 6. **curl**: Kiểm tra kết nối HTTP/HTTPS.
  ```sh
  curl -I https://google.com
  ```
  - Kiểm tra tiêu đề HTTP của trang web Google.

#### 7. **wget**: Tải xuống tệp từ Internet.
  ```sh
  wget https://example.com/file.zip
  ```
  - Dùng để tải xuống tệp từ một URL.

---
