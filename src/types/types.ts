import { createContext } from "react";

export interface AppProps {
	token?: string;
}

export interface GlobalContextType {
	data?: {
		book?: {
			author?: string;
			pages?: [
				{
					pageIndex?: number;
					content?: string;
					tokens?: token[];
				}
			];
			title?: string;
		};
	}
	handleSplit?: (content: string) => string[]
}

export interface token {
	position?: number[]
	value?: string
}


export const GlobalContext = createContext<GlobalContextType>({});