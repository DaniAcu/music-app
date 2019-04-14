import React, { useRef, useEffect, Fragment } from 'react';
import { ItemContainer, Card } from './styled';
import { Icon } from 'src/components/Icon';

const AudioCard = ({ name, preview, iconType, children, onClick }) => (
  <Card>
    <h4>{name}</h4>
    <Icon type={iconType} onClick={() => onClick()} />
    {children}
  </Card>
);

export const Audio = ({ track, play, pause }) => {
  const audio = useRef(null);
  const { isPlaying } = track;

  useEffect(() => {
    if (audio.current) {
      if (isPlaying) {
        audio.current.play();
      } else {
        audio.current.pause();
      }
    }
  }, [isPlaying]);

  const iconType = isPlaying ? 'pause' : 'play';

  return (
    <Fragment>
      <ItemContainer onClick={() => (isPlaying ? pause(track) : play(track))}>
        <h3>{track.name}</h3>
        <Icon type={iconType} color="#ee4b6b" />
      </ItemContainer>
      {isPlaying && (
        <AudioCard
          {...track}
          iconType={iconType}
          onClick={() => (isPlaying ? pause(track) : play(track))}
        >
          <audio ref={audio} src={track.preview} onEnded={() => pause(track)} />
        </AudioCard>
      )}
    </Fragment>
  );
};

export default Audio;
