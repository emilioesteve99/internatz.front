import { ProjectContextGridType } from './ProjectContextGrid';

type ProjectContextType = {
    id: number;
    name: string;
    description: string;
    grids: ProjectContextGridType[];
}