import { useState } from 'react'
import { books as initialBooks } from './lib/books.js'
import { readingStatuses } from './lib/readingStatuses.js'
import { Route, Routes } from 'react-router'
import AppLayout from './components/AppLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import BooksPage from './pages/BooksPage.jsx'
import AuthorsPage from './pages/AuthorsPage.jsx'
import AuthorBooksPage from './pages/AuthorBooksPage.jsx'
import BookDetailPage from './pages/BookDetailPage.jsx'
import NewBookPage from './pages/NewBookPage.jsx'
import EditBookPage from './pages/EditBookPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

export default function App() {
  // 여러 페이지가 함께 사용하는 책 상태는 공통 부모인 App에 둡니다.
  const [books, setBooks] = useState(initialBooks)

  function changeReadingStatus(id, status) {
    if (!readingStatuses.includes(status)) return
    // 이전 배열을 직접 바꾸지 않고, 해당 책만 새 객체로 교체합니다.
    setBooks((previousBooks) => previousBooks.map((book) => (
      book.id === id ? { ...book, status } : book
    )))
  }

  return (
    <Routes>
      {/* 공통 레이아웃의 Outlet 자리에 URL과 일치하는 페이지가 표시됩니다. */}
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="books" element={<BooksPage books={books} />} />
        <Route path="authors" element={<AuthorsPage />} />
        <Route path="authors/:authorId" element={<AuthorBooksPage books={books} />} />
        <Route path="books/new" element={<NewBookPage />} />
        <Route path="books/:id" element={<BookDetailPage books={books} onStatusChange={changeReadingStatus} />} />
        <Route path="books/:id/edit" element={<EditBookPage books={books} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
