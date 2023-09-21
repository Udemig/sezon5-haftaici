import { Navigate, Route, Routes } from 'react-router-dom';
import NewNote from './components/Form/NewNote';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useMemo, useState } from 'react';
import { NoteData, RawNote, Tag } from './types';
import { useLocaleStorage } from './useLocaleStorage';
import { v4 } from 'uuid';
import MainPage from './MainPage';

function App() {
  const [notes, setNotes] = useLocaleStorage<RawNote[]>('notes', []);
  const [tags, setTags] = useLocaleStorage<Tag[]>('tags', []);

  // notların etiketlerindeki id değerleriyle
  // eşelen etiketleri al
  // hesaplamayı performans cachle
  const noteWithTags = useMemo(() => {
    return notes.map((note) => ({
      ...note,
      tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
    }));
  }, [notes, tags]);

  // lokale'e yeni note ekler
  function onCreateNote({ tags, ...data }: NoteData) {
    console.log('selam');
    setNotes((prev) => {
      return [
        ...prev,
        { ...data, id: v4(), tagIds: tags.map((tag) => tag.id) },
      ];
    });
  }

  // lokal'e yeni etiket ekler
  function addTag(tag: Tag) {
    setTags((prev) => [...prev, tag]);
  }

  return (
    <Container className="my-4">
      <Routes>
        <Route
          path="/"
          element={
            <MainPage notes={noteWithTags} availableTags={tags} />
          }
        />
        <Route
          path="/new"
          element={
            <NewNote
              onSubmit={onCreateNote}
              addTag={addTag}
              availableTags={tags}
            />
          }
        />

        <Route path="/:id">
          <Route index element={<h1>Detay Sayfası</h1>} />
          <Route path="edit" element={<h1>Düzenleme</h1>} />
        </Route>

        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </Container>
  );
}

export default App;
