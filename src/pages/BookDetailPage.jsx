import { Link, useParams } from 'react-router'
import NotFoundPage from './NotFoundPage.jsx'

export default function BookDetailPage() {
  const { id } = useParams()
  // 이번 단계에서는 화면 이동을 확인할 예시 주소 한 개만 제공합니다.
  if (id !== 'masquerade') return <NotFoundPage />

  return (
    <section>
      <Link to="/books">← 나의 책장</Link>
      <h1>가면무도회</h1>
      <p className="introduction"><Link to="/authors/lermontov">미하일 레르몬토프</Link> · 희곡</p>
      <div className="page-notice">
        <h2>책 소개와 함께 보는 자료</h2>
        <p>화면 이동을 위한 예시입니다. 상세 내용과 독서 기록은 다음 단계에서 채워집니다.</p>
        <Link className="button-link" to={`/books/${id}/edit`}>책 수정 화면으로</Link>
      </div>
    </section>
  )
}
