import Artists from './component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTopArtists } from 'src/store/Artists/actions';
import { setArtist, fetchAlbumsByArtist } from 'src/store/Albums/actions';

const mapStateToProps = state => ({ artists: state.artists.list });

const mapDispatchToProps = {
  fetchTopArtists,
  fetchAlbumsByArtist,
  setArtist
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Artists));
