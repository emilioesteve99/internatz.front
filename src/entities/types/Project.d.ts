import { ProjectContextType } from './ProjectContext';

type ProjectType = {
  id: number;
  name: string;
  description: string;
  contexts: ProjectContextType[];
}