import Menu from "../components/Menu";
import { projects } from "../fakeData/Projects";
import { Tree } from 'primereact/tree';
import { ProjectType } from "../entities/types/Project";


export default function Home () {

    const buildTree = (projects: ProjectType[]) => {
        const tree = {
            root: []
        }
        tree.root = projects.map(project => ({
                key: project.id.toString(),
                label: project.name,
                children: project.contexts.map(context => ({
                    key: context.id.toString(),
                    label: context.name,
                    children: context.grids.map(grid => ({
                        key: grid.id.toString(),
                        label: grid.name
                    }))
                }))
            })
        );
        return tree;
    }

    return (
        <main>
            <Menu projects={projects}/>
            <div className="card">
                <Tree
                    value={buildTree(projects).root}
                />
            </div>
        </main>
    )
}