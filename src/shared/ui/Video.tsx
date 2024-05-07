import { MDComponent } from '~/shared/kernel';

export const Video: MDComponent<'video'> = props => (
  <video loop muted autoPlay className='rounded-2xl' {...props} />
);
