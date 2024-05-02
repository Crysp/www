import { MDComponent } from '../kernel';
import Heading from './Heading';

export const H4: MDComponent<'h4'> = props => <Heading level={4} {...props} />;
