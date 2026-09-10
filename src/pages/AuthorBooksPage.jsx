import { Link, useParams } from 'react-router'
import { authors } from '../lib/authors.js'
import NotFoundPage from './NotFoundPage.jsx'

export default function AuthorBooksPage() {
  const { authorId } = useParams()
  const author = authors.find((item) => item.id === authorId)

  if (!author) return <NotFoundPage />

  return (
    <section>
      <Link to="/authors">← 작가별 책장</Link>
      <h1>{author.name}</h1>
      <p className="introduction">이 작가의 작품과 독서 자료를 모아보는 공간입니다.</p>
      <div className="page-notice">
        <h2>작가의 책장을 준비하고 있어요</h2>
        <p>작가별 책 목록은 다음 단계에서 연결합니다.</p>
        {authorId === 'lermontov' && (
          <Link className="button-link" to="/books/masquerade">가면무도회 · 예시 상세</Link>
        )}
      </div>
    </section>
  )
}
