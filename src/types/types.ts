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
					tokens?: [position?: number[], value?: string];
				}
			];
			title?: string;
		};
	};
}



export const GlobalContext = createContext<GlobalContextType>({});