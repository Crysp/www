import { MDComponent } from '../kernel';
import Heading from './Heading';

export const H6: MDComponent<'h6'> = props => <Heading level={6} {...props} />;
