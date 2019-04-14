import React from 'react';
import { Layout } from 'src/components/Layout';
import { Redirect } from 'react-router-dom';
import { Loader } from './styled';
import { Audio } from './Audio';

const Tracks = ({ tracks, album, playTrack, pauseTrack }) => {
  if (!album) {
    return <Redirect to="/" />;
  }

  return (
    <Layout title={album.name} image={album.image}>
      {!tracks.length && <Loader>Loading...</Loader>}
      {tracks &&
        tracks.map(track => (
          <Audio key={track.id} track={track} play={playTrack} pause={pauseTrack} />
        ))}
    </Layout>
  );
};

export default Tracks;
