'use client';

import clsx from 'clsx';
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
			<ul
				tabIndex={0}
				className="dropdown-content menu bg-base-300 rounded-box z-1 p-2 shadow-2xl"
			>
				{themes.map((t) => (
					<li key={t}>
						<label className={clsx({ 'menu-active': t === theme })}>
							<input
								type="radio"
								name="theme-dropdown"
								className="hidden"
								onClick={() => setTheme(t)}
								aria-label={t}
								value={t}
								checked={t === theme}
							/>
							<ThemeItem theme={t as Theme} />
						</label>
					</li>
				))}
			</ul>
		</div>
	);
};
