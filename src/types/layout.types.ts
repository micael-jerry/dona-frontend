import React from 'react';

export interface LayoutMenuProps {
	title: string;
	to: string;
	icon: React.ReactNode;
}

export interface LayoutProps {
	children: React.ReactNode;
	menu: LayoutMenuProps[];
	title: string;
}
