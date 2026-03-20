import { useMediaQuery } from '@relume_io/relume-ui';
import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

export const useTabletOrMobile = () => {
	const mounted = useSyncExternalStore(
		emptySubscribe,
		() => true,
		() => false
	);
	const isTablet = useMediaQuery('(min-width: 768px)');
	const isMobile = useMediaQuery('(max-width: 767px)');

	return {
		isTablet: mounted && isTablet,
		isMobile: mounted && isMobile
	};
};
