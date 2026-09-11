import ReadingStatusSelect from '../components/ReadingStatusSelect.jsx'
import { Link, useParams } from 'react-router'
import BookCover from '../components/BookCover.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import LinkButton from '../components/LinkButton.jsx'
import ResourceList from '../components/ResourceList.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { authors } from '../lib/authors.js'
import NotFoundPage from './NotFoundPage.jsx'

export default function BookDetailPage({ books, onStatusChange }) {
  const { id } = useParams()
  const book = books.find((item) => item.id === id)
  if (!book) return <NotFoundPage />
  const author = authors.find((item) => item.id === book.authorId)

  return (
    <section>
      <Link to="/books">← 나의 책장</Link>
      <div className="book-detail-header">
        <BookCover title={book.title} author={author.name} genre={book.genre} color={book.color} />
        <div>
          <p className="eyebrow">{book.genre}</p>
          <h1>{book.title}</h1>
          <p className="detail-author"><Link to={`/authors/${author.id}`}>{author.name}</Link></p>
          <StatusBadge status={book.status} />
          <ReadingStatusSelect value={book.status} onChange={(status) => onStatusChange(book.id, status)} />
          <div className="page-actions"><LinkButton to={`/books/${book.id}/edit`}>책 수정 화면으로</LinkButton></div>
        </div>
      </div>
      <p className="sample-notice">임시 저장 단계 · 등록·수정한 내용은 새로고침하면 초기화됩니다. {!book.isUserEdited && '감상과 질문 메모는 예시입니다.'}</p>
      <section className="detail-section" aria-label="이 책과 나">
        <SectionHeading title="이 책과 나" />
        {book.note ? <p className="reading-note">{book.note}</p> : <EmptyState title="아직 남긴 기록이 없어요" description="읽게 된 계기나 읽고 난 뒤의 생각을 남길 자리입니다." />}
      </section>
      <section className="detail-section" aria-label="함께 보는 자료">
        <SectionHeading title="함께 보는 자료" count={book.resources.length} description="검색했던 궁금함을, 여기에서 다시." />
        <ResourceList resources={book.resources} />
      </section>
    </section>
  )
}
