import { MDComponent } from '../kernel';
import Heading from './Heading';

export const H5: MDComponent<'h5'> = props => <Heading level={5} {...props} />;
