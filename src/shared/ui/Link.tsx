import { Link as NextLink } from '@nextui-org/react';
import { MDComponent } from '../kernel';

// @ts-ignore
export const Link: MDComponent<'a'> = props => <NextLink {...props} />;
