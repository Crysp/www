import { MDComponent } from '../kernel';
import Heading from './Heading';

export const H3: MDComponent<'h3'> = props => <Heading level={3} {...props} />;
