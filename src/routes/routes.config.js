import Artists from 'src/views/Artists';
import Albums from 'src/views/Albums';
import Tracks from 'src/views/Tracks';

export default [
  {
    component: Artists,
    path: '/'
  },
  {
    component: Albums,
    path: '/albums'
  },
  {
    component: Tracks,
    path: '/tracks'
  }
];
