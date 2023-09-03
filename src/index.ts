import world from './world';

const root: HTMLElement | null = document.getElementById('root');
const world_istance: world = new world('Hello Typescript');
world_istance.setMessage(root);
