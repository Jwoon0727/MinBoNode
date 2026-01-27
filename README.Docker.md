# Docker 배포 가이드

## 🚀 빠른 시작

### 1. Docker Compose로 실행 (권장)

```bash
# 빌드 및 실행
docker-compose up -d

# 로그 확인
docker-compose logs -f

# 중지
docker-compose down
```

앱이 `http://localhost:3000`에서 실행됩니다.

### 2. Docker만 사용

```bash
# 이미지 빌드
docker build -t mimbonode-main-page .

# 컨테이너 실행
docker run -d -p 3000:80 --name mimbonode-app mimbonode-main-page

# 로그 확인
docker logs -f mimbonode-app

# 중지 및 삭제
docker stop mimbonode-app
docker rm mimbonode-app
```

## 📦 프로덕션 배포

### 환경 변수 설정

`.env.production` 파일을 수정하여 프로덕션 환경 변수를 설정하세요:

```env
VITE_API_URL=https://api.yourdomain.com
VITE_APP_ENV=production
```

### Docker Hub에 푸시

```bash
# 이미지에 태그 추가
docker tag mimbonode-main-page yourusername/mimbonode-main-page:latest

# Docker Hub에 로그인
docker login

# 이미지 푸시
docker push yourusername/mimbonode-main-page:latest
```

### 서버에서 실행

```bash
# 이미지 pull
docker pull yourusername/mimbonode-main-page:latest

# 실행
docker run -d -p 80:80 --name mimbonode-app yourusername/mimbonode-main-page:latest
```

## 🔧 유용한 명령어

```bash
# 실행 중인 컨테이너 확인
docker ps

# 컨테이너 내부 접속
docker exec -it mimbonode-app sh

# 이미지 목록 확인
docker images

# 사용하지 않는 이미지 정리
docker image prune -a

# 전체 시스템 정리
docker system prune -a
```

## 🏗️ 빌드 최적화

### 멀티 스테이지 빌드
Dockerfile은 멀티 스테이지 빌드를 사용하여:
- 빌드 단계: Node.js로 앱 빌드
- 프로덕션 단계: Nginx로 정적 파일 서빙

최종 이미지 크기가 약 40MB로 최적화됩니다.

### 레이어 캐싱
- `package*.json` 먼저 복사하여 의존성 캐싱
- 소스 코드는 나중에 복사하여 빌드 시간 단축

## 🌐 Nginx 설정

`nginx.conf`는 다음을 포함합니다:
- Gzip 압축
- 정적 자산 캐싱
- SPA 라우팅 지원
- 보안 헤더
- 헬스 체크 엔드포인트 (`/health`)

## 🔒 보안

프로덕션 환경에서는:
1. HTTPS 사용 (Let's Encrypt 권장)
2. 환경 변수를 `.env.production`에 안전하게 관리
3. 정기적인 이미지 업데이트

## 📊 모니터링

헬스 체크:
```bash
curl http://localhost:3000/health
```

로그 확인:
```bash
docker-compose logs -f mimbonode-web
```

## 🐛 트러블슈팅

### 포트가 이미 사용 중인 경우
`docker-compose.yml`에서 포트 변경:
```yaml
ports:
  - "8080:80"  # 3000 대신 8080 사용
```

### 빌드 실패
캐시 없이 재빌드:
```bash
docker-compose build --no-cache
docker-compose up -d
```

### 컨테이너가 시작되지 않는 경우
로그 확인:
```bash
docker-compose logs mimbonode-web
```
