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
  return (
    <Routes>
      {/* 공통 레이아웃의 Outlet 자리에 URL과 일치하는 페이지가 표시됩니다. */}
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="books" element={<BooksPage />} />
        <Route path="authors" element={<AuthorsPage />} />
        <Route path="authors/:authorId" element={<AuthorBooksPage />} />
        <Route path="books/new" element={<NewBookPage />} />
        <Route path="books/:id" element={<BookDetailPage />} />
        <Route path="books/:id/edit" element={<EditBookPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
