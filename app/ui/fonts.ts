import { Inter, Lusitana, Oswald, Lato, Montserrat, Public_Sans } from 'next/font/google';
import {undefined} from "zod";

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});
export const oswald = Oswald({ subsets: ['latin'] });
export const lato = Lato({weight: ['400','700'], subsets: ['latin'] });
export const montserrat = Montserrat({ subsets: ['latin'] })
export const publicSans = Public_Sans({ subsets: ['latin'] })