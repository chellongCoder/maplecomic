# maplecomic
# demo 


https://github.com/chellongCoder/maplecomic/assets/30166352/a5352a46-7c6a-4d54-9d9a-4b93e27a3ef9

# Eventloop là gì?

Eventloop là một phần quan trọng của hệ thống runtime của Node.js, nó xử lý các sự kiện và callback trong ứng dụng Node.js của bạn. Khi bạn chạy một chương trình Node.js, nó sẽ tạo ra một event loop và một thread để xử lý các sự kiện và callback.

Event loop là một vòng lặp vô tận để kiểm tra các sự kiện và thực hiện các callback tương ứng. Nó cũng điều khiển việc thực hiện các tác vụ khác trong chương trình Node.js, như đọc và ghi từ các I/O, gửi và nhận dữ liệu từ mạng, v.v.

Có hai loại sự kiện mà event loop xử lý: sự kiện đồng bộ và sự kiện bất đồng bộ. Sự kiện đồng bộ được xử lý ngay lập tức trong vòng lặp event loop, trong khi sự kiện bất đồng bộ được đưa vào một hàng đợi và xử lý sau khi các sự kiện đồng bộ đã được xử lý xong.



# Thread in react native

Trong React Native, số lượng luồng (thread) được sử dụng phụ thuộc vào nền tảng và các nhiệm vụ cụ thể đang được thực hiện. Dưới đây là một phân loại về các luồng được sử dụng trong React Native:

1. UI Thread: Đây là luồng chính (main thread) chịu trách nhiệm xử lý cập nhật giao diện người dùng, hiển thị các thành phần và phản hồi tương tác của người dùng. Nó còn được gọi là "luồng giao diện người dùng" hoặc "UI thread". Trong React Native, luồng này được quản lý bởi nền tảng cơ bản (ví dụ: iOS hoặc Android).

2. JavaScript Thread: React Native chạy mã JavaScript trên một luồng riêng gọi là "luồng JavaScript". Luồng này chịu trách nhiệm thực thi mã JavaScript, xử lý logic kinh doanh và giao tiếp với các mô-đun native. Nó còn được gọi là "luồng JS" hoặc "luồng Bridge".

3. Shadow Thread: React Native sử dụng một luồng riêng gọi là "luồng Shadow" để tính toán bố cục và đo kích thước của các thành phần. Luồng này chịu trách nhiệm thực hiện các tính toán bố cục và tạo cây bố cục.

4. Worker Threads: React Native cũng hỗ trợ sử dụng các luồng công việc (worker threads) để thực hiện các nhiệm vụ tính toán phức tạp trong nền. Các luồng công việc là các luồng riêng biệt có thể được sử dụng để xử lý các tính toán nặng, yêu cầu mạng hoặc các hoạt động chặn khác từ luồng giao diện người dùng chính.

Lưu ý rằng số lượng luồng và hành vi của chúng có thể thay đổi tùy thuộc vào phiên bản cụ thể của React Native, nền tảng và cấu hình ứng dụng của bạn. React Native xử lý việc đa luồng và đồng thời nội bộ, do đó bạn không cần quản lý luồng một cách rõ ràng trong mã của mình.



