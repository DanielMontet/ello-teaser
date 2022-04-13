import { createContext } from "react";
import { BrowserHistory } from "history"

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
	handleSplit?: (content: string) => string[],
	history?: BrowserHistory
}

export interface token {
	position?: number[]
	value?: string
}


export const GlobalContext = createContext<GlobalContextType>({});