# MimboNode React App

이 프로젝트는 Next.js에서 Vite + React로 마이그레이션되었습니다.

## 기술 스택

- **React 18.3** - UI 라이브러리
- **Vite** - 빌드 도구 및 개발 서버
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 스타일링
- **Radix UI** - UI 컴포넌트 라이브러리
- **Lucide React** - 아이콘

## 시작하기

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버는 [http://localhost:5173](http://localhost:5173)에서 실행됩니다.

### 프로덕션 빌드

```bash
npm run build
```

### 빌드 미리보기

```bash
npm run preview
```

## 프로젝트 구조

```
├── src/
│   ├── components/     # React 컴포넌트들
│   ├── hooks/         # 커스텀 훅
│   ├── lib/           # 유틸리티 함수
│   ├── App.tsx        # 메인 앱 컴포넌트
│   ├── main.tsx       # 엔트리 포인트
│   └── index.css      # 글로벌 스타일
├── public/            # 정적 파일
├── index.html         # HTML 템플릿
├── vite.config.ts     # Vite 설정
└── package.json
```

## 주요 변경사항 (Next.js → Vite)

1. **빌드 도구**: Next.js → Vite
2. **프로젝트 구조**: `app/` 디렉토리 → `src/` 디렉토리
3. **엔트리 포인트**: `app/page.jsx` → `src/main.tsx` + `src/App.tsx`
4. **"use client" 지시어 제거**: Vite에서는 필요하지 않음
5. **라우팅**: Next.js App Router → 상태 기반 라우팅 (현재 구현 유지)

## 개발

이 프로젝트는 핫 모듈 리플레이스먼트(HMR)를 지원하여 코드 변경 시 즉시 반영됩니다.

## 라이선스

Private
