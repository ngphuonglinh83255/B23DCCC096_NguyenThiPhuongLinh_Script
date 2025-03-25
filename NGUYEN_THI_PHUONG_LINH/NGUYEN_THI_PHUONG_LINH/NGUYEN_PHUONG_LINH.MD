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
  - **IPv4**: Địa chỉ 32-bit, ví dụ: `192.168.1.1`.
  - **IPv6**: Địa chỉ 128-bit, ví dụ: `2001:db8::ff00:42:8329`.
- **Subnet Mask (Mặt nạ mạng con)**: Xác định phần mạng và phần host trong địa chỉ IP. Ví dụ: `255.255.255.0`.
- **MAC Address (Địa chỉ MAC)**: Địa chỉ vật lý của card mạng, giúp định danh thiết bị trong mạng LAN. Ví dụ: `00:1A:2B:3C:4D:5E`.
- **Gateway (Cổng mặc định)**: Điểm truy cập trung gian kết nối mạng nội bộ với mạng bên ngoài (thường là router).
- **DNS (Domain Name System)**: Hệ thống phân giải tên miền thành địa chỉ IP, giúp truy cập trang web qua tên miền thay vì IP.
- **DHCP (Dynamic Host Configuration Protocol)**: Giao thức tự động cấp phát địa chỉ IP cho các thiết bị trong mạng.
- **NAT (Network Address Translation)**: Cơ chế chuyển đổi địa chỉ IP riêng trong mạng nội bộ thành một địa chỉ IP công cộng duy nhất để truy cập Internet.

### 2.2. Các giao thức mạng cơ bản
- **TCP/IP (Transmission Control Protocol / Internet Protocol)**: Bộ giao thức chuẩn để truyền dữ liệu trên Internet. TCP đảm bảo dữ liệu được truyền đầy đủ và theo đúng thứ tự, trong khi IP chịu trách nhiệm định tuyến dữ liệu.
- **HTTP/HTTPS (HyperText Transfer Protocol / Secure)**: 
  - **HTTP**: Giao thức truyền tải dữ liệu trên web, hoạt động theo mô hình yêu cầu - phản hồi.
  - **HTTPS**: Phiên bản bảo mật của HTTP, sử dụng **SSL/TLS** để mã hóa dữ liệu giữa trình duyệt và máy chủ.
- **FTP/SFTP (File Transfer Protocol / Secure FTP)**:
  - **FTP**: Giao thức truyền tệp giữa máy chủ và máy khách, sử dụng cổng 21.
  - **SFTP**: Phiên bản bảo mật của FTP, chạy trên giao thức SSH (cổng 22), giúp bảo mật dữ liệu khi truyền tải.
- **SSH (Secure Shell)**: Giao thức điều khiển máy chủ từ xa một cách bảo mật bằng cách mã hóa dữ liệu trao đổi.
- **ICMP (Internet Control Message Protocol)**: Giao thức hỗ trợ chẩn đoán lỗi mạng, thường được sử dụng trong lệnh `ping` để kiểm tra độ trễ và trạng thái kết nối.
- **ARP (Address Resolution Protocol)**: Giao thức giúp chuyển đổi địa chỉ IP thành địa chỉ MAC trong mạng nội bộ, giúp các thiết bị giao tiếp với nhau.
- **UDP (User Datagram Protocol)**: Giao thức truyền tải không kết nối, nhanh hơn TCP nhưng không đảm bảo dữ liệu đến nơi theo đúng thứ tự.
- **WebSocket**: Giao thức giúp thiết lập kết nối hai chiều giữa máy khách và máy chủ, thường dùng cho ứng dụng thời gian thực.
- **MQTT (Message Queuing Telemetry Transport)**: Giao thức nhẹ dùng trong IoT để truyền tin nhắn giữa các thiết bị.

### 2.3. Các công cụ mạng đã thực hành
#### 1. **ping**: Kiểm tra kết nối giữa hai thiết bị.
  ```sh
  ping google.com
  ```
#### 2. **ifconfig/ip a**: Kiểm tra thông tin mạng của máy.
  ```sh
  ip a
  ```
#### 3. **traceroute**: Kiểm tra đường đi của gói tin đến máy đích.
  ```sh
  traceroute google.com
  ```
#### 4. **netstat**: Kiểm tra các kết nối mạng đang hoạt động.
  ```sh
  netstat -tulnp
  ```
#### 5. **nslookup**: Kiểm tra thông tin DNS của một tên miền.
  ```sh
  nslookup google.com
  ```
#### 6. **curl**: Kiểm tra kết nối HTTP/HTTPS.
  ```sh
  curl -I https://google.com
  ```
#### 7. **wget**: Tải xuống tệp từ Internet.
  ```sh
  wget https://example.com/file.zip
  ```

---

## 3. Cấu hình mạng trong Linux
### 3.1. Kiểm tra thông tin mạng
- **Xem danh sách các interface mạng**
  ```sh
  ip a
  ```
- **Xem gateway mặc định**
  ```sh
  ip route
  ```

### 3.2. Cấu hình địa chỉ IP tĩnh
- **Chỉnh sửa file cấu hình mạng (đối với Ubuntu/Debian)**
  ```sh
  sudo nano /etc/netplan/00-installer-config.yaml
  ```
- **Thêm hoặc chỉnh sửa nội dung như sau:**
  ```yaml
  network:
    ethernets:
      eth0:
        dhcp4: no
        addresses: [192.168.1.100/24]
        gateway4: 192.168.1.1
        nameservers:
          addresses: [8.8.8.8, 8.8.4.4]
    version: 2
  ```
- **Áp dụng cấu hình**
  ```sh
  sudo netplan apply
  ```

### 3.3. Kiểm tra và restart dịch vụ mạng
- **Restart dịch vụ mạng**
  ```sh
  sudo systemctl restart networking
  ```
- **Kiểm tra trạng thái mạng**
  ```sh
  systemctl status networking
  ```
