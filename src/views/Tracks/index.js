import Albums from './component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { playTrack, pauseTrack } from 'src/store/Tracks/actions';

const mapStateToProps = state => ({ tracks: state.tracks.list, album: state.tracks.album });

const mapDispatchToProps = {
  playTrack,
  pauseTrack
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Albums));
