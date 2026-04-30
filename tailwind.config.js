import animate from 'tailwindcss-animate';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
const obj = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		screens: {
			sm: '480px', //was 100% but i had to change it to prevent bug
			md: '768px', //was 100% but i had to change it to prevent bug
			lg: '992px',
			xl: '1280px',
			xxl: '1440px'
		},

		container: {
			center: true,
			screens: {
				sm: '480px',
				md: '768px',
				lg: '992px',
				xl: '1280px'
			}
		},

		maxWidth: {
			xxs: '20rem',
			xs: '25rem',
			sm: '30rem',
			md: '35rem',
			lg: '48rem',
			xl: '64rem',
			xxl: '80rem',
			full: '100%'
		},

		boxShadow: {
			xxsmall: '0px 1px 2px rgba(0, 0, 0, 0.05)',
			xsmall: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
			small:
				'0px 4px 8px -2px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06)',
			medium:
				'0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03)',
			large:
				'0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03)',
			xlarge: '0px 24px 48px -12px rgba(0, 0, 0, 0.18)',
			xxlarge: '0px 32px 64px -12px rgba(0, 0, 0, 0.14)'
		},

		fontSize: {
			xs: ['0.75rem', { lineHeight: '1.5' }],
			sm: ['0.875rem', { lineHeight: '1.5' }],
			base: ['1rem', { lineHeight: '1.5' }],
			md: ['1.125rem', { lineHeight: '1.5' }],
			lg: ['1.25rem', { lineHeight: '1.5' }],
			xl: ['1.25rem', { lineHeight: '1.4' }],
			'2xl': ['1.5rem', { lineHeight: '1.4' }],
			'3xl': ['1.75rem', { lineHeight: '1.4' }],
			'4xl': ['2rem', { lineHeight: '1.3' }],
			'5xl': ['2.25rem', { lineHeight: '1.2' }],
			'6xl': ['2.5rem', { lineHeight: '1.2' }],
			'7xl': ['2.75rem', { lineHeight: '1.2' }],
			'8xl': ['3rem', { lineHeight: '1.2' }],
			'9xl': ['3.25rem', { lineHeight: '1.2' }],
			'10xl': ['3.5rem', { lineHeight: '1.2' }]
		},

		borderRadius: {
			sm: '0',
			md: '0',
			lg: '0',
			xl: '0',
			'2xl': '0',
			'3xl': '0',
			full: '9999px'
		},

		extend: {
			spacing: {
				px: '1px',
				0: '0px',
				1: '0.25rem',
				2: '0.5rem',
				3: '0.75rem',
				4: '1rem',
				5: '1.25rem',
				6: '1.5rem',
				8: '2rem',
				10: '2.5rem',
				12: '3rem',
				14: '3.5rem',
				16: '4rem',
				18: '4.5rem',
				20: '5rem',
				24: '6rem',
				28: '7rem',
				30: '7.5rem',
				32: '8rem',
				36: '9rem',
				40: '10rem',
				44: '11rem',
				48: '12rem',
				52: '13rem',
				56: '14rem',
				60: '15rem',
				64: '16rem',
				72: '18rem',
				80: '20rem',
				96: '24rem'
			},

			colors: {
				brand: {
					black: '#0C0A0D',
					white: '#ffffff'
				},
				neutral: {
					DEFAULT: '#858486',
					white: '#ffffff',
					lightest: '#F2F2F2',
					lighter: '#DADADA',
					light: '#B6B5B6',
					dark: '#545355',
					darker: '#242225',
					darkest: '#0C0A0D'
				},
				mauve: {
					DEFAULT: '#EDC8FF',
					lightest: '#FDF9FF',
					lighter: '#FBF4FF',
					light: '#F2D8FF',
					dark: '#BDA0CC',
					darker: '#5E5066',
					darkest: '#473C4C'
				},
				astra: {
					DEFAULT: '#F7FABC',
					lightest: '#FEFEF8',
					lighter: '#FDFEF1',
					light: '#F9FBD0',
					dark: '#C5C896',
					darker: '#62644B',
					darkest: '#4A4B38'
				},
				'french-pass': {
					DEFAULT: '#C1FDFD',
					lightest: '#F8FEFE',
					lighter: '#F2FEFE',
					light: '#D3FDFD',
					dark: '#9ACACA',
					darker: '#4D6565',
					darkest: '#394B4B'
				},
				system: {
					'success-green': '#027a48',
					'success-green-light': '#ecfdf3',
					'error-red': '#b42318',
					'error-red-light': '#fef3f2'
				},
				background: {
					DEFAULT: 'var(--background)',
					primary: 'var(--background-primary)',
					secondary: 'var(--background-secondary)',
					tertiary: 'var(--background-tertiary)',
					alternative: 'var(--background-alternative)',
					success: 'var(--background-success)',
					error: 'var(--background-error)'
				},
				foreground: {
					DEFAULT: 'var(--foreground)',
					primary: 'var(--foreground-primary)',
					secondary: 'var(--foreground-secondary)',
					tertiary: 'var(--foreground-tertiary)',
					alternative: 'var(--foreground-alternative)',
					success: 'var(--foreground-success)',
					error: 'var(--foreground-error)'
				},
				border: {
					DEFAULT: 'var(--border)',
					primary: 'var(--border-primary)',
					secondary: 'var(--border-secondary)',
					tertiary: 'var(--border-tertiary)',
					alternative: 'var(--border-alternative)',
					success: 'var(--border-success)',
					error: 'var(--border-error)'
				},
				text: {
					DEFAULT: 'var(--text)',
					primary: 'var(--text-primary)',
					secondary: 'var(--text-secondary)',
					alternative: 'var(--text-alternative)',
					success: 'var(--text-success)',
					error: 'var(--text-error)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					primary: 'var(--accent-primary)',
					primary: 'var(--accent-secondary)',
					primary: 'var(--accent-alternative)'
				},
				link: {
					DEFAULT: 'var(--link)',
					primary: 'var(--link-primary)',
					secondary: 'var(--link-secondary)',
					alternative: 'var(--link-alternative)'
				}
			},

			typography: ({ theme }) => ({
				DEFAULT: {
					css: [
						{
							color: '#0C0A0D',
							lineHeight: '1.5',
							maxWidth: '100%',
							p: {
								marginTop: '1rem',
								marginBottom: '1rem'
							},
							'h1, h2, h3, h4, h5, h6': {
								fontWeight: theme('fontWeight.bold')
							},
							h2: {
								marginBottom: theme('spacing.4'),
								marginTop: theme('spacing.6'),
								fontSize: '2.25rem',
								lineHeight: '1.2'
							},
							h3: {
								marginTop: theme('spacing.6'),
								marginBottom: theme('spacing.6'),
								fontSize: '2rem',
								lineHeight: '1.2'
							},
							h4: {
								marginBottom: theme('spacing.5'),
								marginTop: theme('spacing.6'),
								fontSize: '1.5rem',
								lineHeight: '1.4'
							},
							h5: {
								fontSize: '1.25rem',
								marginTop: theme('spacing.5'),
								marginBottom: theme('spacing.4'),
								lineHeight: '1.4'
							},
							h6: {
								fontSize: '1.125rem',
								marginTop: theme('spacing.5'),
								marginBottom: theme('spacing.4'),
								lineHeight: '1.4'
							},
							blockquote: {
								marginTop: theme('spacing.6'),
								marginBottom: theme('spacing.6'),
								borderLeftWidth: '0.1875rem',
								borderLeftColor: theme('colors.border.primary'),
								paddingLeft: theme('spacing.5'),
								paddingRight: theme('spacing.5'),
								paddingTop: theme('spacing.3'),
								paddingBottom: theme('spacing.3'),
								fontSize: '1.25rem',
								fontWeight: theme('fontWeight.normal'),
								lineHeight: '1.5'
							},
							figure: {
								marginTop: theme('spacing.10'),
								marginBottom: theme('spacing.10')
							},
							figcaption: {
								marginTop: theme('spacing.2'),
								borderLeftWidth: '2px',
								borderLeftColor: theme('colors.border.DEFAULT'),
								paddingLeft: theme('spacing.2'),
								fontSize: '.875rem',
								color: theme('colors.text.primary'),
								opacity: '0.8',
								lineHeight: '1.5'
							},
							strong: {
								fontWeight: theme('fontWeight.bold')
							}
						},
						{
							':where(&)': {
								'> h2:first-child': {
									marginTop: theme('spacing.6')
								},
								'> h3:first-child': {
									marginTop: theme('spacing.6')
								},
								'> h4:first-child': {
									marginTop: theme('spacing.6')
								},
								'> h5:first-child': {
									marginTop: theme('spacing.5')
								},
								'> h6:first-child': {
									marginTop: theme('spacing.5')
								}
							}
						}
					]
				},
				md: {
					css: [
						{
							h2: {
								fontSize: '2.75rem',
								marginTop: theme('spacing.6'),
								marginBottom: theme('spacing.4'),
								lineHeight: '1.2'
							},
							h3: {
								fontSize: '2.25rem',
								marginTop: theme('spacing.6'),
								marginBottom: theme('spacing.6'),
								lineHeight: '1.2'
							},
							h4: {
								fontSize: '1.75rem',
								lineHeight: '1.3',
								marginTop: theme('spacing.6'),
								marginBottom: theme('spacing.5')
							},
							h5: {
								fontSize: '1.5rem',
								marginTop: theme('spacing.5'),
								marginBottom: theme('spacing.4'),
								lineHeight: '1.4'
							},
							h6: {
								fontSize: '1.25rem',
								marginTop: theme('spacing.5'),
								marginBottom: theme('spacing.4'),
								lineHeight: '1.4'
							},
							figure: {
								marginTop: theme('spacing.12'),
								marginBottom: theme('spacing.12')
							},
							figcaption: {
								marginTop: theme('spacing.2'),
								fontSize: theme('fontSize.sm')
							},
							p: {
								fontSize: '1rem',
								marginTop: '0',
								marginBottom: '1rem'
							},
							blockquote: {
								marginTop: theme('spacing.6'),
								marginBottom: theme('spacing.6')
							}
						},
						{
							':where(&)': {
								'> h2:first-child': {
									marginTop: theme('spacing.6')
								},
								'> h3:first-child': {
									marginTop: theme('spacing.6')
								},
								'> h4:first-child': {
									marginTop: theme('spacing.6')
								},
								'> h5:first-child': {
									marginTop: theme('spacing.5')
								},
								'> h6:first-child': {
									marginTop: theme('spacing.5')
								}
							}
						}
					]
				},
				lg: {
					css: [
						{
							h2: {
								fontSize: '3rem',
								marginTop: theme('spacing.6'),
								marginBottom: theme('spacing.4'),
								lineHeight: '1.2'
							},
							h3: {
								fontSize: '2.5rem',
								marginTop: theme('spacing.6'),
								marginBottom: theme('spacing.6'),
								lineHeight: '1.2'
							},
							h4: {
								fontSize: '2rem',
								lineHeight: '1.3',
								marginTop: theme('spacing.6'),
								marginBottom: theme('spacing.5')
							},
							h5: {
								fontSize: '1.5rem',
								marginTop: theme('spacing.5'),
								marginBottom: theme('spacing.4'),
								lineHeight: '1.4'
							},
							h6: {
								fontSize: '1.25rem',
								marginTop: theme('spacing.5'),
								marginBottom: theme('spacing.4'),
								lineHeight: '1.4'
							},
							figure: {
								marginTop: theme('spacing.12'),
								marginBottom: theme('spacing.12')
							},
							figcaption: {
								marginTop: theme('spacing.2'),
								fontSize: theme('fontSize.sm')
							},
							p: {
								fontSize: '1rem',
								lineHeight: '1.5',
								marginTop: '0',
								marginBottom: '1rem'
							},
							blockquote: {
								marginTop: theme('spacing.6'),
								marginBottom: theme('spacing.6')
							}
						},
						{
							':where(&)': {
								'> h2:first-child': {
									marginTop: theme('spacing.6')
								},
								'> h3:first-child': {
									marginTop: theme('spacing.6')
								},
								'> h4:first-child': {
									marginTop: theme('spacing.6')
								},
								'> h5:first-child': {
									marginTop: theme('spacing.5')
								},
								'> h6:first-child': {
									marginTop: theme('spacing.5')
								}
							}
						}
					]
				}
			}),

			keyframes: {
				'accordion-down': {
					from: { height: '0px' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0px' }
				},
				'loop-horizontally': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' }
				},
				'loop-testimonials': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-135rem)' }
				},
				'loop-vertically': {
					from: { transform: 'translateY(0)' },
					to: { transform: 'translateY(-50%)' }
				},
				'loop-vertically-top': {
					from: { transform: 'translateY(0)' },
					to: { transform: 'translateY(-50%)' }
				},
				'loop-vertically-bottom': {
					from: { transform: 'translateY(-50%)' },
					to: { transform: 'translateY(0)' }
				},
				'marquee-horizontally': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-50%)' }
				},
				'marquee-top': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-50%)' }
				},
				'marquee-right': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(100%)' }
				},
				'marquee-bottom': {
					from: { transform: 'translateX(-50%)' },
					to: { transform: 'translateX(0%)' }
				},
				'marquee-left': {
					from: { transform: 'translateX(100%)' },
					to: { transform: 'translateX(0)' }
				},
				tabs: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				}
			},

			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'loop-horizontally': 'loop-horizontally 60s linear infinite',
				'loop-testimonials': 'loop-testimonials 30s linear infinite',
				'loop-vertically': 'loop-vertically 30s linear infinite',
				'loop-vertically-top': 'loop-vertically-top 50s linear infinite',
				'loop-vertically-bottom': 'loop-vertically-bottom 50s linear infinite',
				'marquee-horizontally': 'marquee-top 30s linear infinite',
				'marquee-top': 'marquee-top 50s linear infinite',
				'marquee-right': 'marquee-right 25s linear infinite',
				'marquee-bottom': 'marquee-bottom 50s linear infinite',
				'marquee-left': 'marquee-left 25s linear infinite',
				tabs: 'tabs 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards'
			}
		}
	},
	plugins: [
		animate,
		typography,
		({ addComponents }) => {
			const newComponents = {
				'.animate-disable': {
					animationName: 'none',
					animationDuration: '0s',
					'--tw-enter-opacity': 'initial',
					'--tw-enter-scale': 'initial',
					'--tw-enter-rotate': 'initial',
					'--tw-enter-translate-x': 'initial',
					'--tw-enter-translate-y': 'initial'
				},
				'.no-scrollbar::-webkit-scrollbar': {
					display: 'none'
				},
				'.no-scrollbar': {
					'-ms-overflow-style': 'none',
					scrollbarWidth: 'none'
				}
			};
			addComponents(newComponents);
		}
	]
};
export default obj;
