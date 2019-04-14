import React from 'react';
import { Layout } from 'src/components/Layout';
import { List } from 'src/components/List';
import { Redirect } from 'react-router-dom';
import { Loader } from './styled';

const Albums = ({ artist, albums, setAlbums, fetchTracksByAlbum, history }) => {
  if (!artist) {
    return <Redirect to="/" />;
  }

  const redirect = item => {
    setAlbums(item);
    fetchTracksByAlbum(item.id, () => history.push(`/tracks`));
  };

  return (
    <Layout title={artist.name} image={artist.image}>
      {!albums.length && <Loader>Loading...</Loader>}
      <List items={albums} onClick={redirect} />
    </Layout>
  );
};

export default Albums;
