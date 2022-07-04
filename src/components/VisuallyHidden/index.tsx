import { FunctionComponent } from 'preact';
import styles from './styles.module.css';

export const VisuallyHidden: FunctionComponent<{}> = ({ children }) => {
  return <div class={styles.visuallyHidden}>{children}</div>;
};
