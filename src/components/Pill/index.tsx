import { FunctionalComponent } from 'preact';
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

interface PillListOption {
	label: string;
	value: PillListOptionValue;
}

interface PillListProps {
	includeAll?: boolean;
	options: PillListOption[] | PillListOptionValue[];
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
	includeAll = false,
	options,
	value: currentValue,
	onSelect,
}) => {
	const optionObjects = options.map((option: PillListOption | PillListOptionValue) => {
		if (typeof option === 'string' || typeof option === 'number') {
			return {
				label: option.toString(),
				value: option,
			};
		}

		return option;
	});

	return (
		<ul class={styles.pillList}>
			{includeAll && (
				<li>
					<PillButton
						variant={currentValue === null ? 'active' : null}
						onClick={() => onSelect(null)}
					>
						All
					</PillButton>
				</li>
			)}

			{optionObjects.map(({ label, value }) => (
				<li key={value}>
					<PillButton
						variant={value === currentValue ? 'active' : null}
						onClick={() => onSelect(value)}
					>
						{label}
					</PillButton>
				</li>
			))}
		</ul>
	);
};
