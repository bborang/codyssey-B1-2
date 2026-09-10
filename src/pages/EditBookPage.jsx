import { Link, useParams } from 'react-router'
import NotFoundPage from './NotFoundPage.jsx'

export default function EditBookPage() {
  const { id } = useParams()
  if (id !== 'masquerade') return <NotFoundPage />

  return (
    <section>
      <Link to={`/books/${id}`}>← 책 상세로</Link>
      <h1>책 정보 수정</h1>
      <p className="introduction">가면무도회</p>
      <div className="page-notice">
        <h2>수정 양식을 준비하고 있어요</h2>
        <p>내용을 수정하고 저장하는 기능은 폼 구현 단계에서 추가합니다.</p>
      </div>
    </section>
  )
}
