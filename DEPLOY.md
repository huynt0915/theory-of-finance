# Deploy lên GitHub Pages

## Bước 1: Tạo repo trên GitHub
Truy cập: https://github.com/new
- Repository name: `theory-of-finance-quiz`
- Visibility: **Public**
- Không tích Initialize README
- Bấm **Create repository**

## Bước 2: Push code (chạy trong PowerShell)
```powershell
cd "C:\Users\Huy.NguyenThanh\.openclaw\workspace\projects\theory-of-finance\quiz-web"
git remote add origin https://github.com/huynt0915/theory-of-finance-quiz.git
git branch -M main
git push -u origin main
```

## Bước 3: Bật GitHub Pages
- Vào repo → Settings → Pages
- Source: **Deploy from a branch**
- Branch: **main** / root
- Save

## Bước 4: Truy cập
URL: https://huynt0915.github.io/theory-of-finance-quiz

(Mất ~1-2 phút để deploy lần đầu)
