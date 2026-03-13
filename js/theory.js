// theory.js — Nội dung lý thuyết theo chương
// Thêm chương mới: thêm 1 key vào THEORY_DATA với title + content (HTML)

const THEORY_DATA = {
  'C2': {
    title: 'C2 — Hệ thống Tài chính',
    content: `
    <h3>Chức năng thị trường tài chính</h3>
    <p>Chuyển vốn từ <b>lenders-savers</b> (tiết kiệm) sang <b>borrowers-spenders</b> (đầu tư). Tăng hiệu quả kinh tế, tạo thanh khoản, giảm chi phí giao dịch.</p>
    <h3>Phân loại thị trường</h3>
    <table>
      <tr><th>Tiêu chí</th><th>Loại 1</th><th>Loại 2</th></tr>
      <tr><td>Phát hành</td><td><b>Sơ cấp</b> — IPO, phát hành mới</td><td><b>Thứ cấp</b> — giao dịch lại (NYSE)</td></tr>
      <tr><td>Kỳ hạn</td><td><b>Tiền tệ</b> — &lt;1 năm (T-bills)</td><td><b>Vốn</b> — ≥1 năm (cổ phiếu, TP)</td></tr>
      <tr><td>Tổ chức</td><td><b>Tập trung</b> — sàn giao dịch</td><td><b>OTC</b> — qua dealer (NASDAQ)</td></tr>
      <tr><td>Tài trợ</td><td><b>Trực tiếp</b> — mua CK</td><td><b>Gián tiếp</b> — qua TGTC</td></tr>
    </table>
    <h3>Thông tin bất cân xứng</h3>
    <table>
      <tr><th>Vấn đề</th><th>Thời điểm</th><th>Định nghĩa</th><th>Giải pháp</th></tr>
      <tr><td><b>Adverse Selection</b></td><td>TRƯỚC giao dịch</td><td>Người rủi ro cao tìm vay nhiều hơn</td><td>Sàng lọc, tài sản đảm bảo</td></tr>
      <tr><td><b>Moral Hazard</b></td><td>SAU giao dịch</td><td>Người vay dùng tiền vào việc rủi ro hơn cam kết</td><td>Giám sát, covenant</td></tr>
    </table>
    <h3>Tại sao trung gian tài chính tồn tại?</h3>
    <p><b>(1) Chi phí giao dịch thấp</b> — economies of scale. <b>(2) Risk sharing</b> — asset transformation. <b>(3) Xử lý thông tin bất cân xứng</b> — screening + monitoring.</p>`,
  },

  'C9': {
    title: 'C9 — Ngân hàng & Quản trị',
    content: `
    <h3>Bảng CĐKT ngân hàng</h3>
    <div class="formula-box">TÀI SẢN (Uses)         NỢ + VỐN (Sources)
Dự trữ R = RR + ER     Tiền gửi không kỳ hạn
Chứng khoán            Tiền gửi tiết kiệm / CDs
Cho vay                Vay Fed funds / Vay chiết khấu
Tài sản cố định        Vốn chủ sở hữu (= TS − Nợ)</div>
    <h3>4 vấn đề quản trị</h3>
    <table>
      <tr><th>Vấn đề</th><th>Mục tiêu</th><th>Rủi ro nếu không quản lý</th></tr>
      <tr><td><b>Thanh khoản</b></td><td>Đủ R đáp ứng rút tiền</td><td>Bank run, phá sản</td></tr>
      <tr><td><b>Tài sản</b></td><td>Max lợi nhuận, min rủi ro</td><td>Nợ xấu, mất vốn</td></tr>
      <tr><td><b>Nợ</b></td><td>Huy động chi phí thấp</td><td>Chi phí cao, ăn mòn lợi nhuận</td></tr>
      <tr><td><b>Vốn</b></td><td>Đủ an toàn, tối ưu ROE</td><td>Phá sản hoặc ROE thấp</td></tr>
    </table>
    <h3>Công thức hiệu quả</h3>
    <p>
      $$ROA = \frac{\text{Lợi nhuận}}{\text{Tổng tài sản}} \quad \text{(benchmark: 0.5–1.5\%)}$$
      $$ROE = \frac{\text{Lợi nhuận}}{\text{Vốn CSH}} \quad \text{(benchmark: 10–20\%)}$$
      $$EM = \frac{\text{Tổng TS}}{\text{Vốn CSH}} \quad \text{(đòn bẩy)}$$
      $$\boxed{ROE = ROA \times EM}$$
    </p>
    <p style="color:var(--danger);font-size:.85rem">⚠️ EM cao → ROE cao nhưng RỦI RO PHÁ SẢN cao. NH A (ROA=1.5%, EM=10) an toàn hơn NH B (ROA=0.8%, EM=18) dù ROE gần bằng nhau.</p>`,
  },

  'C15': {
    title: 'C15 — Quá trình Cung tiền',
    content: `
    <h3>Công thức cốt lõi</h3>
    <p>
      $$MB = C + R = MB_n + BR$$
      $$m = \frac{1 + c}{rr + e + c} \qquad m_{simple} = \frac{1}{rr} \text{ (khi } c=e=0\text{)}$$
      $$\boxed{M = m \times MB}$$
    </p>
    <h3>Ba chủ thể trong cung tiền</h3>
    <table>
      <tr><th>Chủ thể</th><th>Kiểm soát</th><th>Biến số</th></tr>
      <tr><td><b>Fed (NHTW)</b></td><td>Trực tiếp</td><td>MB, rr — qua OMO, Discount, RR</td></tr>
      <tr><td><b>Ngân hàng TM</b></td><td>Gián tiếp</td><td>e (ER/D) — giữ bao nhiêu ER</td></tr>
      <tr><td><b>Công chúng</b></td><td>Gián tiếp</td><td>c (C/D) — tiền mặt vs gửi NH</td></tr>
    </table>
    <h3>Tác động lên số nhân m</h3>
    <table>
      <tr><th>Biến thay đổi</th><th>m</th><th>M</th><th>Ghi chú</th></tr>
      <tr><td>rr ↑</td><td>↓</td><td>↓</td><td></td></tr>
      <tr><td>e ↑</td><td>↓</td><td>↓</td><td>NH thận trọng sau khủng hoảng</td></tr>
      <tr><td>c ↑</td><td>↓</td><td>↓</td><td>⚠️ MB KHÔNG ĐỔI!</td></tr>
      <tr><td>MB ↑ (OMO mua)</td><td>—</td><td>↑</td><td>m không đổi</td></tr>
    </table>`,
  },

  'C16': {
    title: 'C16 — Công cụ CSTT',
    content: `
    <h3>Sơ đồ thị trường dự trữ</h3>
    <div class="formula-box">    iff
     |
  id |─────────→  Trần (Discount rate)
     |        /|
iff* |......./  |  ← Điểm cân bằng
     |      /   |
 ior |─────/────|  Sàn (IOR)
     |         R (Dự trữ)
     NBR (Rs cắt Rd ở đoạn dốc = cân bằng thông thường)</div>
    <h3>Bốn công cụ truyền thống</h3>
    <table>
      <tr><th>Công cụ</th><th>Cơ chế</th><th>Ưu điểm</th><th>Nhược điểm</th></tr>
      <tr><td><b>OMO</b></td><td>Mua/bán CK CP</td><td>Linh hoạt, đảo ngược được, 100% Fed kiểm soát</td><td>Cần TT CK phát triển</td></tr>
      <tr><td><b>Discount</b></td><td>Cho vay tại id</td><td>LOLR, hỗ trợ NH</td><td>Phụ thuộc NH vay; moral hazard</td></tr>
      <tr><td><b>Reserve Req</b></td><td>Thay đổi rr</td><td>Tác động mạnh</td><td>Không linh hoạt, gây biến động</td></tr>
      <tr><td><b>IOR</b></td><td>Trả lãi trên R</td><td>Thiết lập sàn iff chính xác</td><td></td></tr>
    </table>
    <h3>Công cụ phi truyền thống (khi iff ≈ 0)</h3>
    <table>
      <tr><th>Công cụ</th><th>Cơ chế</th></tr>
      <tr><td><b>QE</b></td><td>Mua TS quy mô lớn (CK dài hạn, MBS) → giảm lãi suất dài hạn</td></tr>
      <tr><td><b>Forward Guidance</b></td><td>Cam kết giữ lãi suất thấp lâu dài → ảnh hưởng kỳ vọng ngay hôm nay</td></tr>
    </table>`,
  },

  'C17': {
    title: 'C17 — Chiến lược CSTT',
    content: `
    <h3>Taylor Rule</h3>
    <p>$$\boxed{i_{ff} = \pi + r^* + 0.5(\pi - \pi^*) + 0.5 \cdot (Y - Y^*)}$$</p>
    <table>
      <tr><th>Ký hiệu</th><th>Ý nghĩa</th><th>Giá trị thường dùng</th></tr>
      <tr><td>$\pi$</td><td>Lạm phát hiện tại</td><td>Số liệu thực tế</td></tr>
      <tr><td>$\pi^*$</td><td>Mục tiêu lạm phát</td><td>2%</td></tr>
      <tr><td>$r^*$</td><td>Lãi suất thực cân bằng</td><td>2%</td></tr>
      <tr><td>$Y - Y^*$</td><td>Output gap (dương = quá nóng)</td><td>%</td></tr>
    </table>
    <p style="font-size:.85rem;margin-top:8px"><b>Taylor Principle:</b> Khi $\pi\uparrow 1\text{pp}$ → $i_{ff}$ phải tăng $1.5\text{pp}$ → lãi suất thực tăng $0.5\text{pp}$ → CSTT mới đủ thắt chặt.</p>
    <h3>So sánh Mandate</h3>
    <table>
      <tr><th>Tiêu chí</th><th>Hierarchical (ECB)</th><th>Dual (Fed)</th></tr>
      <tr><td>Ưu tiên</td><td>LP trước, việc làm sau</td><td>LP và việc làm ngang nhau</td></tr>
      <tr><td>Phản ứng suy thoái</td><td>Chậm hơn nếu LP chưa thấp</td><td>Nới lỏng sớm hơn</td></tr>
    </table>
    <h3>Lạm phát mục tiêu — 5 yếu tố</h3>
    <p>(1) Công bố mục tiêu LP số cụ thể; (2) Ổn định giá là ưu tiên; (3) Sử dụng <b>nhiều</b> chỉ số thông tin (không chỉ M2); (4) Minh bạch; (5) Trách nhiệm giải trình.</p>
    <h3>Time-Inconsistency</h3>
    <p>NHTW hứa LP thấp → kỳ vọng thấp → bị cám dỗ mở rộng tiền tệ bất ngờ → LP tăng → mất uy tín. <b>Giải pháp:</b> Neo danh nghĩa + Độc lập NHTW + Minh bạch.</p>`,
  },

  'C18': {
    title: 'C18 — Tài chính Quốc tế',
    content: `
    <h3>Can thiệp ngoại hối</h3>
    <table>
      <tr><th>Loại</th><th>MB</th><th>Hiệu quả</th></tr>
      <tr><td><b>Không vô hiệu hóa</b></td><td>Thay đổi</td><td>Mạnh (qua MB + trực tiếp)</td></tr>
      <tr><td><b>Vô hiệu hóa</b></td><td>Không đổi (OMO bù)</td><td>Yếu (chỉ trực tiếp)</td></tr>
    </table>
    <h3>Bộ ba bất khả thi (Impossible Trinity)</h3>
    <div class="formula-box">Chỉ chọn được 2/3:
(1) Tỷ giá cố định
(2) Tự do dòng vốn
(3) CSTT độc lập

HK = (1)+(2) → mất (3)
TQ = (1)+(3) → mất (2) — kiểm soát vốn
Mỹ = (2)+(3) → mất (1) — tỷ giá thả nổi</div>
    <h3>Cán cân thanh toán (BOP)</h3>
    <p><b>CA + FA = 0</b>. CA &lt; 0 (thâm hụt) → FA > 0 (cần vốn vào). CA > 0 (thặng dư) → FA &lt; 0 (tích lũy tài sản nước ngoài).</p>
    <h3>Tỷ giá mục tiêu — Nhược điểm lớn nhất</h3>
    <p>Mất CSTT độc lập. Dễ bị tấn công đầu cơ khi thị trường nghi ngờ. Bài học: Thái Lan 1997, Anh 1992 (Black Wednesday).</p>`,
  },

  'C26': {
    title: 'C26 — Cơ chế Truyền dẫn',
    content: `
    <h3>6 kênh truyền dẫn CSTT (M ↑)</h3>
    <table>
      <tr><th>Kênh</th><th>Chuỗi tác động</th></tr>
      <tr><td><b>Lãi suất</b></td><td>M↑ → i_thực↓ → I↑ → Y↑</td></tr>
      <tr><td><b>Tỷ giá</b></td><td>M↑ → i↓ → Vốn ra → E↑ → NX↑ → Y↑</td></tr>
      <tr><td><b>Tobin's q</b></td><td>M↑ → i↓ → P_CK↑ → q↑ → I↑ → Y↑</td></tr>
      <tr><td><b>Wealth effect</b></td><td>M↑ → P_tài sản↑ → Wealth↑ → C↑ → Y↑</td></tr>
      <tr><td><b>Bank lending</b></td><td>M↑ → Tiền gửi↑ → Cho vay↑ → I, C↑ → Y↑</td></tr>
      <tr><td><b>Balance sheet</b></td><td>M↑ → NW↑ → AS↓, MH↓ → Cho vay↑ → Y↑</td></tr>
    </table>
    <h3>Tobin's q</h3>
    <p>$$q = \frac{\text{Giá thị trường DN}}{\text{Chi phí thay thế vốn}}$$</p>
    <p style="font-size:.9rem">$q > 1$ → đầu tư mới có lợi &nbsp;|&nbsp; $q < 1$ → mua DN cũ rẻ hơn → $I\downarrow$</p>
    <h3>4 bài học điều hành CSTT</h3>
    <p>(1) Không chỉ nhìn i ngắn hạn danh nghĩa — xem i thực, i dài hạn. (2) Giá tài sản khác cũng quan trọng. (3) CSTT hiệu quả ngay cả khi iff=0 — QE, Forward Guidance. (4) Tránh giảm phát bằng mọi giá — mục tiêu LP dương (+2%).</p>
    <h3>Giảm phát nguy hiểm vì</h3>
    <p>(1) r_thực↑ → I↓; (2) Gánh nợ thực tăng → NW↓ (Debt deflation); (3) Hoãn tiêu dùng → AD↓; (4) ZLB → CSTT mất tác dụng.</p>`,
  },
};
