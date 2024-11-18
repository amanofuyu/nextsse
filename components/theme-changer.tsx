'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const map = {
	light: {
		label: 'Light',
		icon: 'i-lucide:sun',
	},
	dark: {
		label: 'Dark',
		icon: 'i-lucide:moon',
	},
	system: {
		label: 'System',
		icon: 'i-lucide:monitor',
	},
};

type Theme = 'light' | 'dark' | 'system';

const ThemeItem = ({ theme }: { theme: Theme }) => {
	return (
		<div className="flex items-center gap-2">
			<span className={map[theme].icon} />
			<span>{map[theme].label}</span>
		</div>
	);
};

export const ThemeChanger = () => {
	const { theme, setTheme, themes } = useTheme();

	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted || !theme) {
		return null;
	}

	return (
		<div className="dropdown">
			<div tabIndex={0} role="button" className="btn m-1">
				<ThemeItem theme={theme as Theme} />
			</div>
			<ul className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow">
				{themes.map((t) => (
					<li key={t}>
						<button type="button" onClick={() => setTheme(t)}>
							<ThemeItem theme={t as Theme} />
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
