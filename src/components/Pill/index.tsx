import { FunctionalComponent } from 'preact';
import { ButtonUnstyled } from '../Button';
import style from './style.module.css';

export enum PillVariant {
	active,
	contained,
}

function getVariantStyle(variant?: PillVariant): string {
	switch (variant) {
		case PillVariant.active:
			return `${style.pill} ${style.pillActive}`;
		case PillVariant.contained:
			return `${style.pill} ${style.pillContained}`;
		default:
			return style.pill;
	}
}

export type PillListOptionValue = number | string | null;

export interface PillListOption {
	label: string;
	value: PillListOptionValue;
}

interface PillListProps {
	includeAll?: boolean;
	options: PillListOption[];
	value: PillListOptionValue;
	onSelect: (value: PillListOptionValue) => any;
}

export const Pill: FunctionalComponent<{
	variant?: PillVariant;
}> = ({ children, variant }) => {
	return <span class={getVariantStyle(variant)}>{children}</span>;
};

export const PillButton: FunctionalComponent<{
	variant?: PillVariant;
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
	return (
		<ul class={style.pillList}>
			{includeAll && (
				<li>
					<PillButton
						variant={currentValue === null ? PillVariant.active : undefined}
						onClick={() => onSelect(null)}
					>
						All
					</PillButton>
				</li>
			)}

			{options.map(({ label, value }) => (
				<li key={value}>
					<PillButton
						variant={value === currentValue ? PillVariant.active : undefined}
						onClick={() => onSelect(value)}
					>
						{label}
					</PillButton>
				</li>
			))}
		</ul>
	);
};
