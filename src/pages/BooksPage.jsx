import { Link } from 'react-router'

export default function BooksPage() {
  return (
    <section>
      <p className="eyebrow">나의 책장</p>
      <h1>책과 함께 모은 이야기</h1>
      <p className="introduction">읽은 책과 읽고 싶은 책을 한곳에 모아보세요.</p>
      <div className="page-notice">
        <h2>책장이 준비되고 있어요</h2>
        <p>책 목록은 다음 단계에서 채워집니다. 지금은 예시 책으로 화면 이동을 둘러볼 수 있어요.</p>
        <div className="page-actions">
          <Link className="button-link" to="/books/masquerade">가면무도회 · 예시 상세</Link>
          <Link to="/books/new">책 등록 화면으로</Link>
        </div>
      </div>
    </section>
  )
}
