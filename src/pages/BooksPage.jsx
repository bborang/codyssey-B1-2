import BookList from '../components/BookList.jsx'
import LinkButton from '../components/LinkButton.jsx'
import PageHeading from '../components/PageHeading.jsx'
import { books } from '../lib/books.js'
import { authors } from '../lib/authors.js'

export default function BooksPage() {
  return (
    <section>
      <div className="heading-with-action">
        <PageHeading eyebrow="나의 책장" title="책과 함께 모은 이야기" description="읽은 책과 읽고 싶은 책을 한곳에 모아보세요." />
        <LinkButton to="/books/new">＋ 책 등록</LinkButton>
      </div>
      <p className="sample-notice">예시 책장 · {books.length}권 · 감상과 자료 메모는 화면 구성을 위한 예시입니다.</p>
      <BookList books={books} authors={authors} />
    </section>
  )
}
