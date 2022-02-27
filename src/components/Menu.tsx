import { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { ProjectType } from '../entities/types/Project';
import { projects } from '../fakeData/Projects';

export default function Menu (props: PropsType) {

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const items = projects.map(project => {
      return {
        label: project.name,
        items: project.contexts.map(context => {
          return {
            label: context.name,
            items: context.grids.map(grid => ({label: grid.name}))
          }
        })
      }
    })
    setMenuItems([{label: 'Projects', items}]);
  }, []);

    const start = <img alt="logo" src="showcase/images/logo.png" onError={(e: any) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>;
    const end = null;

    return (
        <div>
            <Menubar model={menuItems} start={start} end={end} />
        </div>
    );
}

type PropsType = {
  projects: ProjectType[];
}