import React from 'react';
import { Layout } from 'src/components/Layout';
import { List } from 'src/components/List';

const Artists = ({ artists, fetchTopArtists, fetchAlbumsByArtist, setArtist, history }) => {
  if (!artists.length) {
    fetchTopArtists();
  }

  const redirect = item => {
    setArtist(item);
    fetchAlbumsByArtist(item.id, () => history.push(`/albums`));
  };

  return (
    <Layout title="Your Top Artists">
      <List items={artists} onClick={redirect} />
    </Layout>
  );
};

export default Artists;
