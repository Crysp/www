import { MDComponent } from '../kernel';
import Heading from './Heading';

export const H1: MDComponent<'h1'> = props => <Heading level={1} {...props} />;
