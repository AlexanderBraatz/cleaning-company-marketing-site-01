'use client';

import * as React from 'react';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@relume_io/relume-ui';

// some customization changes wer made to fit the button that i have chosen in Relume, could be further coupled to theme selection but this is fine for now.
const buttonVariants = cva(
	'rounded-[12px] focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				primary: 'border-0 bg-accent text-text-primary',
				secondary:
					'border-0 text-text-primary bg-[var(--opacity-neutral-darkest-5)]',
				'secondary-alt':
					'border-0 text-text-primary  bg-[var(--opacity-white-80)]',
				tertiary: 'text-text-primary',
				link: 'border-0 text-text-primary gap-2',
				'link-alt': 'border-0 text-text-alternative gap-2',
				ghost: 'hover:bg-background-alternative hover:text-text-alternative'
			},
			size: {
				primary: 'px-6 py-3',
				primaryHalf: 'px-3 py-[1.5]',
				sm: 'px-5 py-2',
				link: 'p-0',
				icon: 'size-10'
			}
		},
		defaultVariants: {
			variant: 'primary',
			size: 'primary'
		}
	}
);

type CustomProps = {
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
	asChild?: boolean;
};

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		CustomProps,
		VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			iconLeft,
			iconRight,
			children,
			asChild = false,
			...props
		},
		ref
	) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			>
				{iconLeft && iconLeft}
				<Slottable>{children}</Slottable>
				{iconRight && iconRight}
			</Comp>
		);
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };
