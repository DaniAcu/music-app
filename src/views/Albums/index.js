import Albums from './component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setAlbums, fetchTracksByAlbum } from 'src/store/Tracks/actions';

const mapStateToProps = state => ({ albums: state.albums.list, artist: state.albums.artist });

const mapDispatchToProps = {
  fetchTracksByAlbum,
  setAlbums
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Albums));
