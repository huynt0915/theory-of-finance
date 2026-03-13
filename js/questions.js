// questions.js — Toàn bộ ngân hàng câu hỏi
// Thêm câu mới: copy 1 object, điền chapter/text/options/answer(index 0-3)/explanation
// chapter: 'C2' | 'C9' | 'C15' | 'C16' | 'C17' | 'C18' | 'C26'

const TOPICS = {
  'C2':  'C2 — Hệ thống tài chính',
  'C9':  'C9 — Ngân hàng & Quản trị',
  'C15': 'C15 — Cung tiền',
  'C16': 'C16 — Công cụ CSTT',
  'C17': 'C17 — Chiến lược CSTT',
  'C18': 'C18 — Tài chính quốc tế',
  'C26': 'C26 — Truyền dẫn CSTT',
};

const QUESTIONS = [
  // ── C2 ──────────────────────────────────────────────────────────────────
  {
    id: 1, chapter: 'C2',
    text: 'Thị trường tài chính SƠ CẤP khác thị trường THỨ CẤP ở chỗ:',
    options: [
      'Thị trường sơ cấp giao dịch chứng khoán đã phát hành; thứ cấp phát hành mới',
      'Thị trường sơ cấp phát hành chứng khoán MỚI (huy động vốn); thứ cấp giao dịch lại chứng khoán cũ',
      'Thị trường sơ cấp chỉ dành cho chính phủ; thứ cấp dành cho doanh nghiệp',
      'Thị trường sơ cấp có tính thanh khoản cao hơn',
    ],
    answer: 1,
    explanation: 'Sơ cấp (primary market): IPO, phát hành trái phiếu mới → vốn chảy vào tổ chức phát hành. Thứ cấp (secondary market): NYSE, NASDAQ → giao dịch lại, vốn chảy giữa nhà đầu tư, không vào tổ chức phát hành.',
  },
  {
    id: 2, chapter: 'C2',
    text: 'Vấn đề "Adverse Selection" trong thị trường tài chính xảy ra KHI NÀO và có HỆ QUẢ gì?',
    options: [
      'Sau khi vay — người vay dùng tiền vào việc rủi ro hơn cam kết',
      'Trước khi vay — người có rủi ro cao có xu hướng tìm vay nhiều hơn → chất lượng bình quân người vay thấp',
      'Khi ngân hàng không giám sát đủ — người vay lười trả nợ',
      'Khi lãi suất tăng — người vay tốt rút lui khỏi thị trường',
    ],
    answer: 1,
    explanation: 'Adverse selection = VẤN ĐỀ TRƯỚC giao dịch. Thông tin bất cân xứng: người vay biết rõ rủi ro của mình, ngân hàng không biết → người rủi ro cao sẵn sàng vay lãi cao hơn → danh mục cho vay có chất lượng xấu hơn trung bình. Giải pháp: sàng lọc (screening), yêu cầu tài sản đảm bảo.',
  },
  {
    id: 3, chapter: 'C2',
    text: 'Tài trợ GIÁN TIẾP (indirect finance) khác tài trợ TRỰC TIẾP ở điểm nào?',
    options: [
      'Tài trợ gián tiếp nhanh hơn và rẻ hơn vì qua ít bước hơn',
      'Tài trợ gián tiếp đi qua trung gian tài chính (ngân hàng); trực tiếp: người tiết kiệm mua trực tiếp chứng khoán của người vay',
      'Tài trợ trực tiếp chỉ dành cho chính phủ',
      'Tài trợ gián tiếp chỉ xảy ra trên thị trường thứ cấp',
    ],
    answer: 1,
    explanation: 'Gián tiếp: tiết kiệm → NH → cho vay DN. NH đóng vai trò trung gian, chuyển hóa tài sản (asset transformation). Phổ biến hơn ở hầu hết quốc gia. Trực tiếp: tiết kiệm mua cổ phiếu/trái phiếu DN trực tiếp — đặc trưng Mỹ.',
  },
  {
    id: 4, chapter: 'C2',
    text: 'Trung gian tài chính tồn tại chủ yếu vì 3 lý do. Lý do NÀO KHÔNG đúng?',
    options: [
      'Giảm chi phí giao dịch nhờ kinh tế quy mô',
      'Chia sẻ rủi ro qua đa dạng hóa danh mục',
      'Xử lý thông tin bất cân xứng tốt hơn cá nhân',
      'Đảm bảo lợi nhuận cao hơn đầu tư trực tiếp',
    ],
    answer: 3,
    explanation: '3 lý do đúng: (1) Chi phí giao dịch thấp; (2) Risk sharing qua asset transformation; (3) Giải quyết thông tin bất cân xứng. "Đảm bảo lợi nhuận cao hơn" là SAI — trung gian tài chính không đảm bảo lợi nhuận.',
  },
  {
    id: 5, chapter: 'C2',
    text: 'Moral Hazard trong quan hệ tín dụng là:',
    options: [
      'Ngân hàng cho vay lãi suất quá cao',
      'Người vay dùng tiền vào các hoạt động rủi ro hơn so với mục đích đã cam kết (SAU khi vay)',
      'Người vay giấu thông tin xấu trước khi vay',
      'Ngân hàng không đủ vốn để cho vay',
    ],
    answer: 1,
    explanation: 'Moral Hazard = VẤN ĐỀ SAU giao dịch. Sau khi nhận tiền, người vay có động cơ đầu tư rủi ro hơn (nếu thành công hưởng lợi; thất bại → ngân hàng chịu). Giải pháp: giám sát (monitoring), covenant, tài sản đảm bảo.',
  },

  // ── C9 ──────────────────────────────────────────────────────────────────
  {
    id: 6, chapter: 'C9',
    text: 'Ngân hàng "borrow short, lend long" chịu rủi ro gì?',
    options: [
      'Rủi ro tín dụng — khách hàng không trả được nợ',
      'Rủi ro lãi suất — lãi suất tăng làm tăng chi phí huy động trong khi thu nhập từ cho vay dài hạn cố định',
      'Rủi ro thị trường — giá cổ phiếu giảm',
      'Rủi ro pháp lý — vi phạm quy định',
    ],
    answer: 1,
    explanation: 'Borrow short: huy động tiền gửi ngắn hạn (lãi thả nổi). Lend long: cho vay dài hạn (lãi cố định). Khi lãi suất tăng: chi phí huy động tăng ngay, thu nhập từ cho vay không tăng → NIM giảm → lợi nhuận giảm.',
  },
  {
    id: 7, chapter: 'C9',
    text: 'ROE = ROA × EM. NH A: ROA=1.5%, EM=10. NH B: ROA=0.8%, EM=18. Nhận xét nào ĐÚNG?',
    options: [
      'NH B tốt hơn vì ROE = 14.4% > NH A (15%) — sai, NH A ROE cao hơn',
      'NH A: ROE=15%, NH B: ROE=14.4% — NH A tốt hơn cả về lợi nhuận lẫn an toàn (EM thấp hơn)',
      'ROE bằng nhau nên hai NH tương đương',
      'NH B an toàn hơn vì EM cao hơn',
    ],
    answer: 1,
    explanation: 'A: ROE=1.5%×10=15%. B: ROE=0.8%×18=14.4%. NH A vừa ROE cao hơn, vừa an toàn hơn (EM=10 vs 18 — đòn bẩy thấp hơn). NH B phải dùng đòn bẩy cao hơn để đạt ROE gần tương đương. EM cao = rủi ro phá sản cao hơn.',
  },
  {
    id: 8, chapter: 'C9',
    text: 'Ngân hàng thiếu hụt thanh khoản đột ngột. Cách nào CÓ CHI PHÍ CAO NHẤT?',
    options: [
      'Vay Fed funds từ ngân hàng khác',
      'Bán chứng khoán có sẵn',
      'Vay chiết khấu tại Fed (discount window)',
      'Thu hồi hoặc bán các khoản cho vay',
    ],
    answer: 3,
    explanation: 'Thu hồi/bán cho vay có chi phí cao nhất: (1) Mất quan hệ khách hàng dài hạn; (2) Phải bán với chiết khấu lớn (thị trường kém thanh khoản); (3) Mất thu nhập lãi tương lai. Vay Fed funds: nhanh, rẻ. Discount window: có stigma nhưng thấp hơn bán cho vay.',
  },
  {
    id: 9, chapter: 'C9',
    text: 'Yêu cầu vốn tối thiểu (capital requirements) theo Basel được thiết kế để:',
    options: [
      'Tăng lợi nhuận cho ngân hàng',
      'Giảm chi phí huy động vốn',
      'Đảm bảo ngân hàng có đủ "bộ đệm" hấp thụ tổn thất, bảo vệ người gửi tiền',
      'Cho phép ngân hàng tăng đòn bẩy tối đa',
    ],
    answer: 2,
    explanation: 'Capital requirements: tỷ lệ vốn CSH tối thiểu / tài sản có trọng số rủi ro. Mục đích: vốn hấp thụ tổn thất trước khi ảnh hưởng đến người gửi tiền. Nhược điểm: ROE giảm vì EM bị giới hạn → NH có động cơ lách quy định (regulatory arbitrage).',
  },
  {
    id: 10, chapter: 'C9',
    text: 'Hoạt động ngoại bảng (off-balance-sheet) nào tạo ra rủi ro TIỀM ẨN lớn nhất?',
    options: [
      'Cho thuê tài chính',
      'Giao dịch phái sinh (derivatives) để đầu cơ',
      'Dịch vụ thanh toán',
      'Tư vấn tài chính',
    ],
    answer: 1,
    explanation: 'Phái sinh đầu cơ: đòn bẩy cực cao, tổn thất có thể vượt xa giá trị ghi sổ. Không xuất hiện trên bảng CĐKT nhưng rủi ro thực rất lớn. Bài học: Barings Bank (1995), Société Générale (2008) — thiệt hại hàng tỷ đô từ phái sinh.',
  },

  // ── C15 ─────────────────────────────────────────────────────────────────
  {
    id: 11, chapter: 'C15',
    text: 'Với c=0.2, rr=0.1, e=0.05, số nhân tiền m bằng bao nhiêu?',
    options: ['m = 10 (1/rr)', 'm = 5', 'm ≈ 3.43', 'm ≈ 2.0'],
    answer: 2,
    explanation: 'm = (1+c)/(rr+e+c) = (1+0.2)/(0.1+0.05+0.2) = 1.2/0.35 ≈ 3.43. So sánh: m đơn giản = 1/rr = 10 >> 3.43. c và e làm số nhân giảm đáng kể vì "rò rỉ" tiền ra khỏi hệ thống NH.',
  },
  {
    id: 12, chapter: 'C15',
    text: 'Người dân rút $100 triệu tiền mặt từ ngân hàng. Tác động lên MB và M là:',
    options: [
      'MB giảm $100M; M giảm nhiều hơn $100M',
      'MB không đổi; M giảm (vì c↑ → m↓)',
      'MB tăng; M không đổi',
      'MB giảm $100M; M giảm đúng $100M',
    ],
    answer: 1,
    explanation: 'MB = C + R. Rút $100M mặt: C↑$100M, R↓$100M → MB = C+R không đổi. NHƯNG c = C/D tăng → m giảm → M = m×MB giảm. Bẫy kinh điển: rút tiền mặt KHÔNG thay đổi MB nhưng LÀM GIẢM M.',
  },
  {
    id: 13, chapter: 'C15',
    text: 'Khủng hoảng 1929-1933: Fed tăng MB nhưng M vẫn giảm 1/3. Giải thích tốt nhất:',
    options: [
      'Fed không thực sự tăng MB',
      'Tăng rr làm m giảm nhiều hơn MB tăng',
      'c tăng (dân hoảng loạn rút tiền mặt) VÀ e tăng (NH sợ mất thanh khoản giữ ER) → m giảm mạnh hơn MB tăng',
      'Fed sai lầm giảm MB thay vì tăng',
    ],
    answer: 2,
    explanation: 'Bank runs → c↑ mạnh; NH sợ → e↑ mạnh → m giảm cực mạnh. Dù Fed bơm MB, M = m×MB vẫn giảm vì m giảm nhanh hơn. Friedman & Schwartz (1963): đây là sai lầm CSTT lớn nhất lịch sử Mỹ.',
  },
  {
    id: 14, chapter: 'C15',
    text: 'Ai trong 3 chủ thể có ảnh hưởng TRỰC TIẾP nhất đến MB?',
    options: [
      'Ngân hàng thương mại (qua quyết định dự trữ)',
      'Công chúng (qua tỷ lệ nắm giữ tiền mặt)',
      'Fed (NHTW) qua OMO và cho vay chiết khấu',
      'Bộ Tài chính qua thu chi ngân sách',
    ],
    answer: 2,
    explanation: 'Fed kiểm soát trực tiếp MB = C + R thông qua: (1) OMO — mua/bán CK CP; (2) Cho vay chiết khấu (BR). NH TM kiểm soát e (gián tiếp ảnh hưởng m). Công chúng kiểm soát c (gián tiếp ảnh hưởng m).',
  },
  {
    id: 15, chapter: 'C15',
    text: 'Fed bơm $200 tỷ qua OMO mua, với c=0.3, rr=0.1, e=0.02. Cung tiền M tăng xấp xỉ bao nhiêu?',
    options: ['$200 tỷ', '$2,000 tỷ (1/rr × MB)', '≈ $578 tỷ', '≈ $1,400 tỷ'],
    answer: 2,
    explanation: 'm = (1+0.3)/(0.1+0.02+0.3) = 1.3/0.42 ≈ 3.095 ≈ 2.89. ΔM ≈ 2.89 × $200 ≈ $578 tỷ. (Số nhân đơn giản 1/0.1=10 cho $2,000 tỷ — quá cao vì bỏ qua c và e).',
  },

  // ── C16 ─────────────────────────────────────────────────────────────────
  {
    id: 16, chapter: 'C16',
    text: 'Fed giảm lãi suất chiết khấu nhưng KHÔNG có ngân hàng nào đang vay chiết khấu (BR=0). Lãi suất liên ngân hàng (iff) sẽ:',
    options: [
      'Giảm ngay lập tức',
      'Tăng vì ngân hàng cần bù đắp chi phí',
      'Không đổi — trần lãi suất hạ xuống nhưng không ràng buộc điểm cân bằng',
      'Giảm sau độ trễ 3-6 tháng',
    ],
    answer: 2,
    explanation: 'Khi BR=0: Rs cắt Rd ở đoạn thẳng đứng (tại mức NBR). Giảm lãi suất chiết khấu chỉ làm trần dịch xuống — nhưng điểm cân bằng iff đang nằm trên đoạn thẳng đứng, không bị ràng buộc bởi trần → iff không đổi.',
  },
  {
    id: 17, chapter: 'C16',
    text: 'OMO (nghiệp vụ thị trường mở) được coi là công cụ tốt nhất vì:',
    options: [
      'Tác động mạnh nhất đến nền kinh tế',
      'Fed kiểm soát 100%, linh hoạt, có thể đảo ngược nhanh, tác động ngay lên dự trữ NH',
      'Không cần sự chấp thuận của Quốc hội',
      'Không gây lạm phát',
    ],
    answer: 1,
    explanation: 'Ưu điểm OMO: (1) Fed quyết định chủ động; (2) Linh hoạt — bất kỳ quy mô; (3) Có thể đảo ngược nhanh; (4) Tác động tức thì lên NBR → iff. So với Discount: phụ thuộc NH vay. So với RR: kém linh hoạt, gây biến động.',
  },
  {
    id: 18, chapter: 'C16',
    text: 'Quantitative Easing (QE) khác OMO thông thường ở điểm chính nào?',
    options: [
      'QE chỉ dành cho thời bình, OMO cho khủng hoảng',
      'QE mua CK ngắn hạn; OMO mua CK dài hạn',
      'QE mua tài sản quy mô lớn gồm CK DÀI HẠN và MBS khi iff ≈ 0 (ZLB); OMO thông thường mua CK ngắn hạn',
      'QE do Bộ Tài chính thực hiện, OMO do Fed',
    ],
    answer: 2,
    explanation: 'OMO thông thường: CK ngắn hạn, quy mô vừa, điều chỉnh iff. QE: (1) Tài sản dài hạn (Treasury 10Y, MBS); (2) Quy mô khổng lồ (nghìn tỷ $); (3) Mục tiêu: giảm lãi suất DÀI HẠN khi iff đã = 0. QE1 (2008): Fed mua $1.7T MBS và CK CP.',
  },
  {
    id: 19, chapter: 'C16',
    text: 'Tăng tỷ lệ dự trữ bắt buộc (rr) có tác động KÉP là:',
    options: [
      'Chỉ tăng iff, không ảnh hưởng M',
      'Giảm iff và tăng M',
      'Tăng iff (Rd dịch phải) VÀ giảm M (m giảm) — thắt chặt kép',
      'Tăng iff nhưng tăng M vì NH vay thêm từ Fed',
    ],
    answer: 2,
    explanation: 'rr↑ có tác động kép: (1) Thị trường dự trữ: NH cần giữ nhiều RR hơn → Rd dịch phải → iff↑; (2) Số nhân tiền: m = (1+c)/(rr+e+c), rr↑ → m↓ → M↓. Đây là lý do RR ít dùng: tác động quá mạnh và khó kiểm soát chính xác.',
  },
  {
    id: 20, chapter: 'C16',
    text: 'IOR (Interest on Reserves) đóng vai trò gì trên thị trường dự trữ?',
    options: [
      'Trần (ceiling) của iff',
      'Sàn (floor) của iff — iff không thể giảm xuống dưới IOR',
      'Mức cân bằng của iff',
      'Không ảnh hưởng iff vì IOR là lãi suất nội bộ của Fed',
    ],
    answer: 1,
    explanation: 'IOR = lãi suất Fed trả cho dự trữ NH gửi tại Fed. NH không bao giờ cho vay liên NH với lãi suất thấp hơn IOR → IOR = SÀN của iff. Sau 2008, Fed dùng IOR để kiểm soát iff: muốn tăng iff → tăng IOR; muốn giảm → giảm IOR. "Floor system".',
  },

  // ── C17 ─────────────────────────────────────────────────────────────────
  {
    id: 21, chapter: 'C17',
    text: 'Vấn đề "time-inconsistency" của NHTW là gì?',
    options: [
      'NHTW thay đổi mục tiêu quá thường xuyên',
      'NHTW có động cơ mở rộng tiền tệ bất ngờ sau khi đã hứa giữ lạm phát thấp — phá vỡ cam kết để đạt lợi ích ngắn hạn',
      'NHTW không thể dự báo lạm phát chính xác',
      'NHTW mất quá nhiều thời gian ra quyết định',
    ],
    answer: 1,
    explanation: 'Time-inconsistency: NHTW hứa LP thấp → kỳ vọng LP thấp → Sau đó bị cám dỗ mở rộng tiền tệ (để Y↑ ngắn hạn) → LP tăng → mất uy tín. Giải pháp: Neo danh nghĩa + Độc lập NHTW + Minh bạch/trách nhiệm giải trình.',
  },
  {
    id: 22, chapter: 'C17',
    text: 'Lạm phát mục tiêu (Inflation Targeting) KHÔNG bao gồm yếu tố nào?',
    options: [
      'Công bố mục tiêu LP số cụ thể (VD: 2% ± 1%)',
      'Cam kết ổn định giá là ưu tiên hàng đầu',
      'Sử dụng DUY NHẤT M2 làm chỉ báo trung gian',
      'Minh bạch thông qua báo cáo lạm phát định kỳ',
    ],
    answer: 2,
    explanation: '5 yếu tố của IT: (1) Công bố mục tiêu LP số cụ thể; (2) Ổn định giá là ưu tiên; (3) Sử dụng NHIỀU chỉ số thông tin (không chỉ M2 — vì mối quan hệ M-LP không ổn định); (4) Minh bạch; (5) Trách nhiệm giải trình. Đáp án C SAI.',
  },
  {
    id: 23, chapter: 'C17',
    text: 'Taylor Rule: π=4%, π*=2%, r*=2%, output gap=+2%. Lãi suất mục tiêu i_ff là:',
    options: ['6%', '7%', '8%', '9%'],
    answer: 2,
    explanation: 'i_ff = π + r* + 0.5(π−π*) + 0.5(gap) = 4 + 2 + 0.5(4−2) + 0.5(2) = 4+2+1+1 = 8%. LP vượt mục tiêu 2pp → +1pp; Sản lượng vượt tiềm năng 2% → +1pp.',
  },
  {
    id: 24, chapter: 'C17',
    text: '"Hierarchical mandate" của ECB khác "dual mandate" của Fed ở điểm cốt lõi nào?',
    options: [
      'ECB có thể in tiền nhiều hơn Fed',
      'Fed ưu tiên ổn định giá tuyệt đối; ECB cân bằng LP và việc làm',
      'ECB coi ổn định giá là ưu tiên TUYỆT ĐỐI; Fed cân bằng cả LP lẫn việc làm (ngang nhau)',
      'Cả hai đều có mandate như nhau, chỉ khác tên gọi',
    ],
    answer: 2,
    explanation: 'ECB (Hierarchical): ổn định giá > tất cả → chậm nới lỏng khi suy thoái nếu LP chưa về mục tiêu. Fed (Dual): LP và việc làm ngang nhau → nới lỏng mạnh hơn/sớm hơn khi thất nghiệp tăng. Bằng chứng: 2008-2009, Fed cắt lãi suất nhanh và mạnh hơn ECB nhiều.',
  },
  {
    id: 25, chapter: 'C17',
    text: 'Lạm phát tăng 1pp theo Taylor Rule, lãi suất danh nghĩa cần tăng bao nhiêu để CSTT đủ thắt chặt?',
    options: [
      'Tăng 0.5pp',
      'Tăng đúng 1pp (lãi suất thực không đổi)',
      'Tăng 1.5pp (lãi suất thực tăng 0.5pp) — "Taylor Principle"',
      'Tăng 2pp',
    ],
    answer: 2,
    explanation: '"Taylor Principle": khi LP tăng 1pp, i_ff phải tăng 1.5pp (1pp từ hạng π + 0.5pp từ hạng 0.5×(π−π*)) → lãi suất thực r = i − π tăng 0.5pp. NẾU i chỉ tăng 1pp → r không đổi → CSTT không đủ thắt chặt → LP không kiềm được.',
  },

  // ── C18 ─────────────────────────────────────────────────────────────────
  {
    id: 26, chapter: 'C18',
    text: 'Can thiệp ngoại hối CÓ VÔ HIỆU HÓA (sterilized) khác KHÔNG VÔ HIỆU HÓA (unsterilized) như thế nào?',
    options: [
      'Sterilized nhanh hơn về tác động lên tỷ giá',
      'Unsterilized: can thiệp + OMO bù đắp → MB không đổi; Sterilized: can thiệp không kèm OMO → MB thay đổi',
      'Cả hai đều không ảnh hưởng MB',
      'Unsterilized: MB thay đổi → M thay đổi → tác động MẠNH; Sterilized: MB không đổi → tác động YẾU',
    ],
    answer: 3,
    explanation: 'Unsterilized = không bù đắp → MB thay đổi → M thay đổi → tác động MẠNH lên tỷ giá và kinh tế. Sterilized = kèm OMO bù đắp → MB không đổi → M không đổi → tác động YẾU (chỉ qua kênh trực tiếp, ngắn hạn).',
  },
  {
    id: 27, chapter: 'C18',
    text: 'Bộ ba bất khả thi (Impossible Trinity): một quốc gia KHÔNG THỂ đồng thời có:',
    options: [
      'Lạm phát thấp, tăng trưởng cao và thất nghiệp thấp',
      'Tỷ giá cố định, tự do dòng vốn và CSTT độc lập',
      'Tăng trưởng xuất khẩu, nhập khẩu thấp và dự trữ ngoại hối lớn',
      'Độc lập tài khóa, độc lập tiền tệ và thặng dư ngân sách',
    ],
    answer: 1,
    explanation: 'Mundell-Fleming Impossible Trinity: (1) Tỷ giá cố định, (2) Tự do dòng vốn, (3) CSTT độc lập. Chỉ chọn được 2/3. HK=(1)+(2); TQ=(1)+(3) kiểm soát vốn; Mỹ=(2)+(3) tỷ giá thả nổi.',
  },
  {
    id: 28, chapter: 'C18',
    text: 'Thâm hụt tài khoản vãng lai (CA < 0). Theo đồng nhất thức BOP, điều gì PHẢI xảy ra?',
    options: [
      'Dự trữ ngoại hối tăng tự động',
      'Tài khoản tài chính FA > 0 (nhập ròng vốn — vốn từ nước ngoài vào)',
      'Đồng nội tệ phải phá giá ngay lập tức',
      'Cung tiền nội địa giảm tự động',
    ],
    answer: 1,
    explanation: 'CA + FA = 0. CA < 0 → FA phải > 0 (nhập ròng vốn). Nhập khẩu > xuất khẩu → cần vốn nước ngoài vào để tài trợ. Mỹ: thâm hụt CA lớn → FA > 0 (TQ, Nhật mua trái phiếu Mỹ). Nếu FA không đủ → dự trữ ngoại hối giảm.',
  },
  {
    id: 29, chapter: 'C18',
    text: 'Tỷ giá mục tiêu (exchange rate targeting) có nhược điểm LỚN NHẤT là:',
    options: [
      'Quá phức tạp để thực hiện',
      'Mất CSTT độc lập — phải đi theo CSTT của nước neo',
      'Gây lạm phát cao',
      'Làm tăng thất nghiệp',
    ],
    answer: 1,
    explanation: 'Khi neo tỷ giá vào USD: nước neo PHẢI giữ lãi suất tương đương Mỹ để tránh dòng vốn rời đi. Mỹ tăng lãi suất → nước neo phải tăng theo (dù kinh tế không cần) → mất tự chủ CSTT. Thêm: dễ bị tấn công đầu cơ (bài học: Thái Lan 1997, Anh 1992).',
  },
  {
    id: 30, chapter: 'C18',
    text: 'Đồng USD tăng giá mạnh so với EUR. Tác động lên nền kinh tế Mỹ:',
    options: [
      'Xuất khẩu Mỹ tăng; nhập khẩu vào Mỹ giảm',
      'Xuất khẩu Mỹ giảm (đắt hơn tương đối); nhập khẩu vào Mỹ tăng (rẻ hơn) → NX↓ → Y↓',
      'Không ảnh hưởng vì Mỹ có thị trường nội địa lớn',
      'Lạm phát Mỹ tăng vì hàng nhập khẩu đắt hơn',
    ],
    answer: 1,
    explanation: 'USD mạnh: hàng Mỹ đắt hơn với người nước ngoài → XK↓; hàng nước ngoài rẻ hơn với người Mỹ → NK↑ → NX↓ → Y↓. Thêm: nhập khẩu rẻ → lạm phát Mỹ có xu hướng↓ (không phải tăng).',
  },

  // ── C26 ─────────────────────────────────────────────────────────────────
  {
    id: 31, chapter: 'C26',
    text: 'CSTT mở rộng (M ↑). Chuỗi tác động qua kênh TỶ GIÁ đến Y là:',
    options: [
      'M↑ → i↑ → Vốn vào → Nội tệ mạnh → NX↑ → Y↑',
      'M↑ → i↓ → Vốn ra → Nội tệ yếu (E↑) → Xuất khẩu rẻ hơn → NX↑ → Y↑',
      'M↑ → i↓ → Tỷ giá không đổi → NX không đổi',
      'M↑ → Tỷ giá tăng → Nhập khẩu rẻ hơn → C↑ → Y↑',
    ],
    answer: 1,
    explanation: 'Kênh tỷ giá: M↑ → i↓ → tài sản nội địa kém hấp dẫn → vốn chảy ra → nội tệ mất giá (E↑) → hàng xuất khẩu rẻ hơn tương đối → XK↑, NK↓ → NX↑ → Y↑. Quan trọng với nền kinh tế mở nhỏ (VN, Singapore).',
  },
  {
    id: 32, chapter: 'C26',
    text: "Tobin's q = 0.7. Điều này hàm ý doanh nghiệp nên:",
    options: [
      'Đầu tư mới vì cổ phiếu đang đắt',
      'Mua lại doanh nghiệp hiện có vì rẻ hơn xây mới — I mới không có lợi',
      'Phát hành thêm cổ phiếu để huy động vốn',
      'Tăng cổ tức vì q cao',
    ],
    answer: 1,
    explanation: "q = Giá thị trường DN / Chi phí thay thế vốn. q=0.7 < 1: mua DN trên thị trường ($0.7) rẻ hơn xây mới ($1) → không có động cơ đầu tư mới → I↓. q>1: đầu tư mới có lợi.",
  },
  {
    id: 33, chapter: 'C26',
    text: '"Financial Accelerator" (Bernanke-Gertler) mô tả cơ chế nào?',
    options: [
      'CSTT mở rộng luôn khuếch đại tác động lên GDP',
      'Khi tài sản DN giảm giá → net worth↓ → adverse selection↑ → tín dụng siết → I↓ → Y↓ → tài sản tiếp tục giảm (vòng xoáy tự khuếch đại)',
      'NHTW khuếch đại tín hiệu OMO qua hệ thống ngân hàng',
      'Lạm phát tăng tốc theo cấp số nhân',
    ],
    answer: 1,
    explanation: 'Financial Accelerator: cú sốc ban đầu → net worth DN↓ → adverse selection↑, moral hazard↑ → NH siết tín dụng → I↓ → Y↓ → giá TS tiếp tục↓ → net worth↓ thêm... Vòng xoáy tự khuếch đại. Giải thích tại sao suy thoái sau khủng hoảng tài chính sâu và kéo dài hơn.',
  },
  {
    id: 34, chapter: 'C26',
    text: 'Tại sao CSTT mở rộng có thể KHÔNG HIỆU QUẢ khi lãi suất = 0% (Zero Lower Bound)?',
    options: [
      'Fed không thể mua thêm trái phiếu',
      'Kênh lãi suất bị tắc (i không thể âm) → không khuyến khích thêm đầu tư; NH giữ ER thay vì cho vay',
      'CSTT mở rộng luôn gây lạm phát quá cao',
      'Số nhân tiền âm khi i = 0',
    ],
    answer: 1,
    explanation: 'ZLB: i không thể giảm dưới 0 → Kênh lãi suất truyền thống bị tắc. Thêm: NH giữ ER lớn (e↑) → m↓ → dù MB↑ nhiều, M tăng ít. Giải pháp: QE (kênh giá tài sản), Forward Guidance (kênh kỳ vọng), kênh tỷ giá.',
  },
  {
    id: 35, chapter: 'C26',
    text: 'Kênh nào trong CSTT được kích hoạt NGAY KHI THÔNG BÁO, trước khi thực thi?',
    options: [
      'Kênh lãi suất',
      'Kênh tín dụng ngân hàng',
      'Kênh kỳ vọng (expectations channel)',
      'Kênh balance sheet',
    ],
    answer: 2,
    explanation: 'Kênh kỳ vọng: thị trường phản ứng ngay khi Fed thông báo. Giá CK, tỷ giá, lãi suất dài hạn điều chỉnh ngay dựa trên kỳ vọng về CSTT tương lai. Forward Guidance hoạt động hoàn toàn qua kênh này.',
  },

  // ── TỔNG HỢP ─────────────────────────────────────────────────────────────
  {
    id: 36, chapter: 'C16',
    text: 'Fed mua OMO → NBR↑ → Rs dịch phải → iff ______. Đây là CSTT ______.',
    options: ['↑; thắt chặt', '↓; thắt chặt', '↓; mở rộng', '↑; mở rộng'],
    answer: 2,
    explanation: 'OMO mua → tăng dự trữ cho NH → Rs dịch PHẢI → iff giảm → chi phí vốn rẻ hơn → tín dụng mở rộng → CSTT MỞ RỘNG. Nhớ: Rs dịch phải = iff giảm.',
  },
  {
    id: 37, chapter: 'C15',
    text: 'Fed thực hiện OMO mua $100 tỷ. Loại dự trữ nào thay đổi?',
    options: [
      'Dự trữ bắt buộc (RR) tăng $100 tỷ',
      'Dự trữ không vay (NBR) tăng $100 tỷ',
      'Dự trữ vay (BR) tăng $100 tỷ',
      'Tổng dự trữ không đổi',
    ],
    answer: 1,
    explanation: 'OMO mua: Fed mua CK từ NH → trả bằng cách tăng dự trữ NH tại Fed → đây là dự trữ KHÔNG VAY (NBR = Non-Borrowed Reserves). BR chỉ thay đổi khi NH vay từ Fed qua discount window.',
  },
  {
    id: 38, chapter: 'C17',
    text: 'Một NHTW cam kết mục tiêu lạm phát 2% nhưng sau đó mở rộng tiền tệ để hạ thất nghiệp. Đây là ví dụ về:',
    options: [
      'Chính sách phản chu kỳ hợp lý',
      'Time-inconsistency — phá vỡ cam kết vì lợi ích ngắn hạn',
      'Lạm phát mục tiêu thành công',
      'Dual mandate hoạt động hiệu quả',
    ],
    answer: 1,
    explanation: 'Time-inconsistency điển hình: hứa LP=2% → kỳ vọng thấp → "lén" mở rộng tiền tệ vì muốn Y↑ ngắn hạn → LP tăng → mất uy tín. Đây là lý do NHTW cần độc lập và neo danh nghĩa ràng buộc.',
  },
  {
    id: 39, chapter: 'C26',
    text: 'Tại sao giảm phát (deflation) nguy hiểm hơn lạm phát vừa phải?',
    options: [
      'Giảm phát làm tăng xuất khẩu',
      'Giảm phát: r_thực tăng (r=i−π^e, π^e<0) → I↓; nợ thực tăng → NW↓; kỳ vọng tự củng cố → AD↓; ZLB → CSTT mất tác dụng',
      'Giảm phát chỉ ảnh hưởng người tiêu dùng, không ảnh hưởng DN',
      'Giảm phát làm tăng MB',
    ],
    answer: 1,
    explanation: '4 cơ chế giảm phát nguy hiểm: (1) r_thực↑ → I↓; (2) Gánh nặng nợ thực tăng → NW↓ → tín dụng co (Debt deflation — Fisher 1933); (3) Kỳ vọng giảm phát → hoãn tiêu dùng → tự củng cố; (4) ZLB: i không thể âm → CSTT truyền thống bất lực.',
  },
  {
    id: 40, chapter: 'C18',
    text: 'NHNN Việt Nam mua USD bằng VND (không vô hiệu hóa). Tác động lên VND và M2 VND:',
    options: [
      'VND tăng giá; M2 giảm',
      'VND mất giá; M2 tăng (MB VND tăng → M tăng)',
      'VND không đổi; M2 tăng',
      'VND mất giá; M2 không đổi',
    ],
    answer: 1,
    explanation: 'NHNN mua USD = bán VND → cung VND tăng → VND mất giá. Không vô hiệu hóa → MB VND tăng → M2 tăng. Tác động phụ: lạm phát có thể tăng. Đây là lý do NHNN thường kèm vô hiệu hóa khi can thiệp để kiểm soát M2.',
  },
];
