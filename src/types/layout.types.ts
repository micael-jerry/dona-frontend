import React from 'react';

export interface LayoutMenuProps {
	title: string;
	to: string;
	icon: any;
}

export interface LayoutProps {
	children: React.ReactNode;
	menu: LayoutMenuProps[];
}
