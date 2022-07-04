import { FunctionalComponent } from 'preact';
import { isEqual } from 'lodash';

import { ButtonUnstyled } from '../Button';
import styles from './styles.module.css';

function getVariantStyle(variant: string): string {
  switch (variant) {
    case 'active':
      return `${styles.pill} ${styles.pillActive}`;
    default:
      return styles.pill;
  }
}

export type PillListOptionValue = number | string;

export interface PillListOption {
  label: string;
  value: PillListOptionValue;
}

interface PillListProps {
  options: PillListOption[];
  value: PillListOptionValue;
  onSelect: (value: PillListOptionValue) => any;
}

export const Pill: FunctionalComponent<{
  variant: string;
}> = ({ children, variant }) => {
  return <span class={getVariantStyle(variant)}>{children}</span>;
};

export const PillButton: FunctionalComponent<{
  variant: string;
  onClick: () => any;
}> = ({ children, variant, onClick }) => {
  return (
    <ButtonUnstyled onClick={onClick}>
      <Pill variant={variant}>{children}</Pill>
    </ButtonUnstyled>
  );
};

export const PillList: FunctionalComponent<PillListProps> = ({
  options,
  value,
  onSelect
}) => {
  return (
    <ul class={styles.pillList}>
      {options.map(({ value: v, label }) => (
        <li key={v}>
          <PillButton
            variant={v === value ? 'active' : null}
            onClick={() => onSelect(v)}
          >
            {label}
          </PillButton>
        </li>
      ))}
    </ul>
  );
};
