import { MDComponent } from '../kernel';
import Heading from './Heading';

export const H2: MDComponent<'h2'> = props => <Heading level={2} {...props} />;
