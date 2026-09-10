import { Link } from 'react-router'

export default function NewBookPage() {
  return (
    <section>
      <Link to="/books">← 나의 책장</Link>
      <h1>책장에 한 권 더</h1>
      <p className="introduction">책의 기본 정보부터 가볍게 기록하는 공간입니다.</p>
      <div className="page-notice">
        <h2>등록 양식을 준비하고 있어요</h2>
        <p>입력과 저장 기능은 폼 구현 단계에서 추가합니다.</p>
      </div>
    </section>
  )
}
