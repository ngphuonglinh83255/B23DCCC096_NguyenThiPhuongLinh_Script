package PacManGame.src;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class App {
    public static void main(String[] args) throws Exception {
        int rowCount = 21; // Số hàng trong bàn chơi
        int columnCount = 19; // Số cột trong bàn chơi
        int tileSize = 32; // Kích thước mỗi ô (pixel)
        int boardWidth = columnCount * tileSize; // Tính chiều rộng của bàn chơi
        int boardHeight = rowCount * tileSize; // Tính chiều cao của bàn chơi

        JFrame frame = new JFrame("Pac Man"); // Tạo cửa sổ ứng dụng với tiêu đề "Pac Man"
        frame.setSize(boardWidth, boardHeight); // Đặt kích thước cửa sổ tương ứng với bàn chơi
        frame.setLocationRelativeTo(null); // Đặt cửa sổ ở giữa màn hình
        frame.setResizable(false); // Ngăn không cho người dùng thay đổi kích thước cửa sổ
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // Đóng chương trình khi người dùng đóng cửa sổ

        // Tạo màn hình bắt đầu
        JPanel startScreen = new JPanel() {
            @Override
            protected void paintComponent(Graphics g) {
                super.paintComponent(g);
                g.setColor(Color.BLACK);
                g.fillRect(0, 0, getWidth(), getHeight()); // Tô nền đen
                g.setColor(Color.YELLOW);
                g.setFont(new Font("Arial", Font.BOLD, 48));
                g.drawString("Start", getWidth() / 2 - 70, getHeight() / 2); // Hiển thị chữ "Start"
            }
        };

        startScreen.setLayout(null); // Đặt layout null để hiển thị toàn màn hình

        // Thêm nút "Start"
        JButton startButton = new JButton("Start");
        startButton.setBounds(boardWidth / 2 - 50, boardHeight / 2 + 50, 100, 50); // Định vị nút
        startButton.setFocusable(false); // Loại bỏ trọng tâm nút
        startScreen.add(startButton);

        frame.add(startScreen); // Thêm màn hình bắt đầu vào frame
        frame.setVisible(true); // Hiển thị cửa sổ

        // Tạo trò chơi Pac-Man
        PacMan pacmanGame = new PacMan();

        // Sự kiện khi nhấn nút "Start"
        startButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                frame.remove(startScreen); // Xóa màn hình bắt đầu
                frame.add(pacmanGame); // Thêm trò chơi
                frame.revalidate(); // Làm mới giao diện
                frame.repaint(); // Vẽ lại giao diện
                pacmanGame.requestFocus(); // Đặt trọng tâm vào trò chơi để nhận sự kiện bàn phím
            }
        });
    }
}
