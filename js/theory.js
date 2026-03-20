// theory.js — Nội dung lý thuyết theo chương (LaTeX via KaTeX)
// QUAN TRỌNG: dùng String.raw`...` để backslash trong LaTeX không bị JS xử lý
// Thêm chương: thêm key vào THEORY_DATA với title + content

const THEORY_DATA = {
  'C2': {
    title: 'C2 — Hệ thống Tài chính',
    content: String.raw`
    <h3>Chức năng thị trường tài chính</h3>
    <p>Chuyển vốn từ <b>lenders-savers</b> (tiết kiệm) sang <b>borrowers-spenders</b> (đầu tư).
    Tăng hiệu quả kinh tế, tạo thanh khoản, giảm chi phí giao dịch.</p>

    <h3>Phân loại thị trường</h3>
    <table>
      <tr><th>Tiêu chí</th><th>Loại 1</th><th>Loại 2</th></tr>
      <tr><td>Phát hành</td><td><b>Sơ cấp</b> — IPO, phát hành mới</td><td><b>Thứ cấp</b> — giao dịch lại (NYSE)</td></tr>
      <tr><td>Kỳ hạn</td><td><b>Tiền tệ</b> — $&lt;1$ năm (T-bills)</td><td><b>Vốn</b> — $\geq 1$ năm (cổ phiếu, TP)</td></tr>
      <tr><td>Tổ chức</td><td><b>Tập trung</b> — sàn giao dịch</td><td><b>OTC</b> — qua dealer (NASDAQ)</td></tr>
      <tr><td>Tài trợ</td><td><b>Trực tiếp</b> — mua CK</td><td><b>Gián tiếp</b> — qua TGTC</td></tr>
    </table>

    <h3>Thông tin bất cân xứng (Asymmetric Information)</h3>
    <table>
      <tr><th>Vấn đề</th><th>Thời điểm</th><th>Định nghĩa</th><th>Giải pháp</th></tr>
      <tr><td><b>Adverse Selection</b></td><td>TRƯỚC giao dịch</td><td>Người rủi ro cao tìm vay nhiều hơn</td><td>Sàng lọc, tài sản đảm bảo</td></tr>
      <tr><td><b>Moral Hazard</b></td><td>SAU giao dịch</td><td>Người vay dùng tiền vào việc rủi ro hơn cam kết</td><td>Giám sát, covenant</td></tr>
    </table>

    <h3>Tại sao trung gian tài chính tồn tại?</h3>
    <p><b>(1) Chi phí giao dịch thấp</b> — economies of scale.
    <b>(2) Risk sharing</b> — asset transformation.
    <b>(3) Xử lý thông tin bất cân xứng</b> — screening + monitoring.</p>`,
  },

  'C9': {
    title: 'C9 — Ngân hàng & Quản trị',
    content: String.raw`
    <h3>Bảng CĐKT ngân hàng</h3>
    <table>
      <tr><th>Tài sản (Uses)</th><th>Nợ + Vốn (Sources)</th></tr>
      <tr><td>Dự trữ $R = RR + ER$</td><td>Tiền gửi không kỳ hạn</td></tr>
      <tr><td>Chứng khoán</td><td>Tiền gửi tiết kiệm / CDs</td></tr>
      <tr><td>Cho vay</td><td>Vay Fed funds / Vay chiết khấu</td></tr>
      <tr><td>Tài sản cố định</td><td>Vốn chủ sở hữu $=$ Tổng TS $-$ Tổng Nợ</td></tr>
    </table>

    <h3>4 vấn đề quản trị</h3>
    <table>
      <tr><th>Vấn đề</th><th>Mục tiêu</th><th>Rủi ro nếu không quản lý</th></tr>
      <tr><td><b>Thanh khoản</b></td><td>Đủ $R$ đáp ứng rút tiền</td><td>Bank run, phá sản</td></tr>
      <tr><td><b>Tài sản</b></td><td>Max lợi nhuận, min rủi ro</td><td>Nợ xấu, mất vốn</td></tr>
      <tr><td><b>Nợ</b></td><td>Huy động chi phí thấp</td><td>Chi phí cao, ăn mòn lợi nhuận</td></tr>
      <tr><td><b>Vốn</b></td><td>Đủ an toàn, tối ưu $ROE$</td><td>Phá sản hoặc $ROE$ thấp</td></tr>
    </table>

    <h3>Công thức hiệu quả ngân hàng</h3>
    <p>
      $$ROA = \frac{\text{Lợi nhuận ròng}}{\text{Tổng tài sản}} \qquad (0.5\text{–}1.5\%)$$
      $$ROE = \frac{\text{Lợi nhuận ròng}}{\text{Vốn chủ sở hữu}} \qquad (10\text{–}20\%)$$
      $$EM = \frac{\text{Tổng tài sản}}{\text{Vốn chủ sở hữu}} \quad \text{(Equity Multiplier)}$$
      $$\boxed{ROE = ROA \times EM}$$
    </p>
    <p style="color:var(--danger);font-size:.85rem">
      ⚠️ $EM$ cao → $ROE$ cao nhưng rủi ro phá sản cao.<br>
      NH A ($ROA=1.5\%$, $EM=10$): $ROE=15\%$ &nbsp;|&nbsp;
      NH B ($ROA=0.8\%$, $EM=18$): $ROE=14.4\%$ — NH A an toàn hơn.
    </p>

    <h3>Net Interest Margin (NIM)</h3>
    <p>$$NIM = \frac{\text{Thu lãi} - \text{Chi lãi}}{\text{Tài sản sinh lãi}} \qquad (2\text{–}4\%)$$</p>
    <p>Rủi ro "borrow short, lend long": khi $i$ tăng → chi phí huy động tăng ngay, thu từ cho vay cố định → $NIM$ giảm.</p>`,
  },

  'C15': {
    title: 'C15 — Quá trình Cung tiền',
    content: String.raw`
    <h3>Công thức cốt lõi</h3>
    <p>
      $$MB = C + R = MB_n + BR$$
      $$m = \frac{1 + c}{rr + e + c} \qquad m_{\text{simple}} = \frac{1}{rr} \quad (c = e = 0)$$
      $$\boxed{M = m \times MB}$$
    </p>
    <p style="font-size:.85rem">Trong đó: $c = C/D$ (tỷ lệ tiền mặt), $e = ER/D$ (tỷ lệ dự trữ vượt mức), $rr$ = tỷ lệ dự trữ bắt buộc.</p>

    <h3>Ba chủ thể trong cung tiền</h3>
    <table>
      <tr><th>Chủ thể</th><th>Kiểm soát</th><th>Biến số</th></tr>
      <tr><td><b>Fed (NHTW)</b></td><td>Trực tiếp</td><td>$MB$, $rr$ — qua OMO, Discount, RR</td></tr>
      <tr><td><b>Ngân hàng TM</b></td><td>Gián tiếp</td><td>$e = ER/D$ — giữ bao nhiêu ER</td></tr>
      <tr><td><b>Công chúng</b></td><td>Gián tiếp</td><td>$c = C/D$ — tiền mặt vs gửi NH</td></tr>
    </table>

    <h3>Tác động lên số nhân $m$</h3>
    <table>
      <tr><th>Biến thay đổi</th><th>$m$</th><th>$M$</th><th>$MB$</th><th>Ghi chú</th></tr>
      <tr><td>$rr$ tăng</td><td class="tag-down">↓</td><td class="tag-down">↓</td><td>—</td><td>Fed tăng DTBB</td></tr>
      <tr><td>$e$ tăng</td><td class="tag-down">↓</td><td class="tag-down">↓</td><td>—</td><td>NH thận trọng sau khủng hoảng</td></tr>
      <tr><td>$c$ tăng</td><td class="tag-down">↓</td><td class="tag-down">↓</td><td>—</td><td>⚠️ $MB$ KHÔNG ĐỔI!</td></tr>
      <tr><td>$MB_n$ tăng (OMO mua)</td><td>—</td><td class="tag-up">↑</td><td class="tag-up">↑</td><td>$m \times MB$ tăng</td></tr>
      <tr><td>$BR$ tăng (vay chiết khấu)</td><td>—</td><td class="tag-up">↑</td><td class="tag-up">↑</td><td>$MB = MB_n + BR$</td></tr>
    </table>

    <h3>Ví dụ tính toán</h3>
    <p>Cho $c=0.3$, $rr=0.1$, $e=0.02$, $MB = \$1{,}000$ tỷ:</p>
    <p>
      $$m = \frac{1+0.3}{0.1+0.02+0.3} = \frac{1.3}{0.42} \approx 3.10$$
      $$M = 3.10 \times 1{,}000 = \$3{,}100 \text{ tỷ}$$
    </p>
    <p style="font-size:.85rem;color:var(--muted)">So sánh: $m_{\text{simple}} = 1/0.1 = 10$ — thực tế thấp hơn nhiều do $c$ và $e > 0$.</p>`,
  },

  'C16': {
    title: 'C16 — Công cụ CSTT',
    content: String.raw`
    <h3>Thị trường dự trữ</h3>
    <div class="reserve-diagram">
      <div class="rd-axis-y">$i_{ff}$</div>
      <div class="rd-body">
        <div class="rd-ceiling">$i_d$ — Trần (Discount rate): Rs nằm ngang tại đây</div>
        <div class="rd-mid">$i_{ff}^*$ ← Điểm cân bằng (Rs cắt Rd ở đoạn dốc)</div>
        <div class="rd-floor">$i_{or}$ — Sàn (IOR): $i_{ff}$ không thể xuống dưới</div>
      </div>
      <div class="rd-axis-x">$R$ (Dự trữ) →&nbsp; $NBR$ = điểm Rs thẳng đứng</div>
    </div>

    <h3>Công cụ truyền thống — Tác động</h3>
    <table>
      <tr><th>Hành động</th><th>Dịch chuyển</th><th>$i_{ff}$</th><th>$M$</th></tr>
      <tr><td>Fed <b>MUA</b> OMO</td><td>$Rs$ dịch phải</td><td class="tag-down">↓</td><td class="tag-up">↑</td></tr>
      <tr><td>Fed <b>BÁN</b> OMO</td><td>$Rs$ dịch trái</td><td class="tag-up">↑</td><td class="tag-down">↓</td></tr>
      <tr><td>Giảm $i_d$ (khi $BR=0$)</td><td>Trần hạ, không ràng buộc</td><td class="tag-same">= không đổi!</td><td class="tag-same">=</td></tr>
      <tr><td>Giảm $i_d$ (khi $BR>0$)</td><td>$Rs$ dịch phải ($BR$ tăng)</td><td class="tag-down">↓</td><td class="tag-up">↑</td></tr>
      <tr><td>Giảm $rr$</td><td>$Rd$ dịch trái</td><td class="tag-down">↓</td><td class="tag-up">↑</td></tr>
      <tr><td>Tăng $rr$</td><td>$Rd$ dịch phải</td><td class="tag-up">↑</td><td class="tag-down">↓</td></tr>
      <tr><td>Tăng $i_{or}$ (IOR)</td><td>Sàn nâng lên</td><td class="tag-up">↑</td><td>—</td></tr>
    </table>

    <h3>So sánh 4 công cụ</h3>
    <table>
      <tr><th>Công cụ</th><th>Ưu điểm</th><th>Nhược điểm</th></tr>
      <tr><td><b>OMO</b></td><td>Linh hoạt, đảo ngược được, Fed kiểm soát 100%</td><td>Cần TT CK phát triển</td></tr>
      <tr><td><b>Discount ($i_d$)</b></td><td>LOLR, hỗ trợ NH khủng hoảng</td><td>Phụ thuộc NH vay; moral hazard</td></tr>
      <tr><td><b>Reserve Req ($rr$)</b></td><td>Tác động mạnh</td><td>Không linh hoạt, gây biến động lớn</td></tr>
      <tr><td><b>IOR ($i_{or}$)</b></td><td>Thiết lập sàn $i_{ff}$ chính xác</td><td>—</td></tr>
    </table>

    <h3>Công cụ phi truyền thống (khi $i_{ff} \approx 0$, ZLB)</h3>
    <table>
      <tr><th>Công cụ</th><th>Cơ chế</th><th>Kênh tác động</th></tr>
      <tr><td><b>QE</b></td><td>Mua TS quy mô lớn (CK dài hạn, MBS)</td><td>Giảm $i$ dài hạn, tăng giá tài sản</td></tr>
      <tr><td><b>Forward Guidance</b></td><td>Cam kết giữ $i_{ff}$ thấp lâu dài</td><td>Kênh kỳ vọng — tác động ngay khi thông báo</td></tr>
    </table>`,
  },

  'C17': {
    title: 'C17 — Chiến lược CSTT',
    content: String.raw`
    <h3>Taylor Rule</h3>
    <p>$$\boxed{i_{ff} = \pi + r^* + 0.5(\pi - \pi^*) + 0.5(Y - Y^*)}$$</p>
    <table>
      <tr><th>Ký hiệu</th><th>Ý nghĩa</th><th>Giá trị thường dùng</th></tr>
      <tr><td>$i_{ff}$</td><td>Lãi suất mục tiêu</td><td>Kết quả tính</td></tr>
      <tr><td>$\pi$</td><td>Lạm phát hiện tại</td><td>Số liệu thực tế</td></tr>
      <tr><td>$\pi^*$</td><td>Mục tiêu lạm phát</td><td>$2\%$</td></tr>
      <tr><td>$r^*$</td><td>Lãi suất thực cân bằng dài hạn</td><td>$2\%$</td></tr>
      <tr><td>$Y - Y^*$</td><td>Output gap (dương = nền kinh tế quá nóng)</td><td>$\%$</td></tr>
    </table>

    <h3>Ví dụ: $\pi=4\%$, $\pi^*=2\%$, $r^*=2\%$, output gap $(Y-Y^*)=+2\%$</h3>
    <p>$$i_{ff} = 4 + 2 + 0.5(4-2) + 0.5(2) = 4 + 2 + 1 + 1 = 8\%$$</p>

    <h3>Taylor Principle</h3>
    <p>Khi $\pi$ tăng $1\text{pp}$, lãi suất danh nghĩa phải tăng $1.5\text{pp}$:</p>
    <p>$$\Delta i_{ff} = 1 + 0.5 \times 1 = 1.5\text{ pp}$$</p>
    <p>$$\Rightarrow \Delta r = \Delta i_{ff} - \Delta\pi = 1.5 - 1 = +0.5\text{ pp} \quad \checkmark$$</p>
    <p style="font-size:.85rem;color:var(--danger)">⚠️ Nếu $\Delta i_{ff} = 1\text{pp}$ thì $\Delta r = 0$ → CSTT không đủ thắt chặt → lạm phát không kiềm được.</p>

    <h3>So sánh Mandate</h3>
    <table>
      <tr><th>Tiêu chí</th><th>Hierarchical (ECB)</th><th>Dual (Fed)</th></tr>
      <tr><td>Ưu tiên</td><td>Ổn định giá tuyệt đối</td><td>Ổn định giá và việc làm ngang nhau</td></tr>
      <tr><td>Phản ứng suy thoái</td><td>Chậm hơn nếu $\pi$ chưa thấp</td><td>Nới lỏng sớm hơn</td></tr>
      <tr><td>Ví dụ</td><td>ECB, Bundesbank</td><td>Federal Reserve</td></tr>
    </table>

    <h3>Time-Inconsistency</h3>
    <p>NHTW hứa $\pi$ thấp → kỳ vọng thấp → bị cám dỗ mở rộng tiền tệ bất ngờ → $\pi$ tăng → mất uy tín.</p>
    <p><b>Giải pháp:</b> Neo danh nghĩa + Độc lập NHTW + Minh bạch/trách nhiệm giải trình.</p>

    <h3>Lạm phát mục tiêu — 5 yếu tố</h3>
    <p>(1) Công bố mục tiêu $\pi$ số cụ thể; (2) Ổn định giá là ưu tiên; (3) Sử dụng <b>nhiều</b> chỉ số thông tin (không chỉ $M2$); (4) Minh bạch; (5) Trách nhiệm giải trình.</p>`,
  },

  'C18': {
    title: 'C18 — Tài chính Quốc tế',
    content: String.raw`
    <h3>Can thiệp ngoại hối</h3>
    <table>
      <tr><th>Loại</th><th>$MB$</th><th>$M$</th><th>Tỷ giá nội tệ</th><th>Hiệu quả</th></tr>
      <tr><td><b>Không vô hiệu hóa</b> (Unsterilized)</td><td class="tag-up">Thay đổi</td><td class="tag-up">Thay đổi</td><td class="tag-down">Mất giá (nếu mua NT)</td><td><b>Mạnh</b></td></tr>
      <tr><td><b>Vô hiệu hóa</b> (Sterilized)</td><td class="tag-same">= (OMO bù)</td><td class="tag-same">=</td><td class="tag-down">Mất giá (yếu)</td><td><b>Yếu</b></td></tr>
    </table>

    <h3>Cán cân thanh toán (BOP)</h3>
    <p>$$\boxed{CA + FA = 0}$$</p>
    <table>
      <tr><th>Tài khoản</th><th>Ghi có (+)</th><th>Ghi nợ (−)</th></tr>
      <tr><td><b>Vãng lai (CA)</b></td><td>Xuất khẩu, nhận kiều hối</td><td>Nhập khẩu, gửi kiều hối</td></tr>
      <tr><td><b>Tài chính (FA)</b></td><td>Vốn vào (FDI, Portfolio)</td><td>Vốn ra, tăng dự trữ</td></tr>
    </table>
    <p style="font-size:.85rem;margin-top:8px">$CA &lt; 0$ (thâm hụt) $\Rightarrow FA > 0$ (cần vốn vào). &nbsp; $CA > 0$ (thặng dư) $\Rightarrow FA &lt; 0$ (tích lũy tài sản nước ngoài).</p>

    <h3>Bộ ba bất khả thi (Impossible Trinity)</h3>
    <div class="trinity-diagram">
      <div class="trinity-node top">Tỷ giá cố định</div>
      <div class="trinity-row">
        <div class="trinity-node left">CSTT độc lập</div>
        <div class="trinity-center">Chỉ chọn<br><b>2/3</b></div>
        <div class="trinity-node right">Tự do dòng vốn</div>
      </div>
      <div class="trinity-examples">
        <span class="trinity-eg">🇭🇰 HK: cố định + tự do vốn → mất CSTT độc lập</span>
        <span class="trinity-eg">🇨🇳 TQ: cố định + CSTT độc lập → kiểm soát vốn</span>
        <span class="trinity-eg">🇺🇸 Mỹ: tự do vốn + CSTT độc lập → tỷ giá thả nổi</span>
      </div>
    </div>

    <h3>Tỷ giá mục tiêu — Nhược điểm lớn nhất</h3>
    <p>Mất CSTT độc lập. Khi nước neo tăng $i$ → nước ta phải tăng theo (dù kinh tế không cần).
    Dễ bị tấn công đầu cơ. Bài học: Thái Lan 1997, Anh 1992 (Black Wednesday).</p>`,
  },

  'C26': {
    title: 'C26 — Cơ chế Truyền dẫn',
    content: String.raw`
    <h3>6 kênh truyền dẫn CSTT ($M$ tăng)</h3>
    <table>
      <tr><th>Kênh</th><th>Chuỗi tác động</th></tr>
      <tr><td><b>Lãi suất</b></td><td>$M$ tăng $\to r_{\text{thực}}$ giảm $\to I$ tăng $\to Y$ tăng</td></tr>
      <tr><td><b>Tỷ giá</b></td><td>$M$ tăng $\to i$ giảm $\to$ Vốn ra $\to E$ tăng $\to NX$ tăng $\to Y$ tăng</td></tr>
      <tr><td><b>Tobin's $q$</b></td><td>$M$ tăng $\to i$ giảm $\to P_{CK}$ tăng $\to q$ tăng $\to I$ tăng $\to Y$ tăng</td></tr>
      <tr><td><b>Wealth effect</b></td><td>$M$ tăng $\to P_{\text{tài sản}}$ tăng $\to W$ tăng $\to C$ tăng $\to Y$ tăng</td></tr>
      <tr><td><b>Bank lending</b></td><td>$M$ tăng $\to D$ tăng $\to$ Cho vay tăng $\to I, C$ tăng $\to Y$ tăng</td></tr>
      <tr><td><b>Balance sheet</b></td><td>$M$ tăng $\to NW$ tăng $\to AS, MH$ giảm $\to$ Cho vay tăng $\to Y$ tăng</td></tr>
      <tr><td><b>Kỳ vọng</b></td><td>Thông báo $M$ tăng → kỳ vọng thay đổi ngay → $I, C$ tăng (trước khi thực thi)</td></tr>
    </table>

    <h3>Tobin's $q$</h3>
    <p>$$q = \frac{\text{Giá thị trường doanh nghiệp}}{\text{Chi phí thay thế vốn}}$$</p>
    <table>
      <tr><th>Giá trị</th><th>Hàm ý</th><th>Quyết định</th></tr>
      <tr><td>$q > 1$</td><td>CK đắt hơn xây mới</td><td>Đầu tư mới có lợi → $I$ tăng</td></tr>
      <tr><td>$q < 1$</td><td>Mua DN cũ rẻ hơn xây mới</td><td>Không đầu tư mới → $I$ giảm</td></tr>
    </table>

    <h3>Lãi suất thực (Fisher Equation)</h3>
    <p>$$r = i - \pi^e$$</p>
    <p>Kênh lãi suất dùng $r_{\text{thực}}$ (không phải $i_{\text{danh nghĩa}}$).
    Khi $\pi^e < 0$ (giảm phát): $r > i$ → đầu tư giảm mạnh.</p>

    <h3>4 bài học điều hành CSTT (Mishkin)</h3>
    <table>
      <tr><th>#</th><th>Bài học</th><th>Ứng dụng</th></tr>
      <tr><td>1</td><td>Không chỉ nhìn $i$ ngắn hạn danh nghĩa</td><td>Xem $r_{\text{thực}}$, $i$ dài hạn, credit spread</td></tr>
      <tr><td>2</td><td>Giá tài sản khác cũng quan trọng</td><td>Theo dõi tỷ giá, giá CK, BĐS</td></tr>
      <tr><td>3</td><td>CSTT hiệu quả ngay cả khi $i_{ff} = 0$</td><td>QE, Forward Guidance, kênh tỷ giá</td></tr>
      <tr><td>4</td><td>Tránh giảm phát bằng mọi giá</td><td>Mục tiêu $\pi^* > 0$ (thường $2\%$), hành động sớm</td></tr>
    </table>

    <h3>Tại sao giảm phát ($\pi < 0$) nguy hiểm?</h3>
    <p>
      (1) $r = i - \pi^e$ tăng khi $\pi^e < 0$ → $I$ giảm &nbsp;
      (2) Gánh nợ thực tăng → $NW$ giảm (Debt deflation — Fisher 1933)<br>
      (3) Kỳ vọng giảm phát → hoãn tiêu dùng → $AD$ giảm (tự củng cố) &nbsp;
      (4) ZLB: $i$ không thể âm → CSTT truyền thống mất tác dụng
    </p>`,
  },
};
