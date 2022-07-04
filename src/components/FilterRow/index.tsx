import { FunctionalComponent } from 'preact';

import styles from './style.module.css';

export const FilterRow: FunctionalComponent<{ label: string }> = ({
  children,
  label
}) => (
  <>
    <dt class={styles.nadeFilterLabel}>{label}</dt>
    <dd>{children}</dd>
  </>
);
