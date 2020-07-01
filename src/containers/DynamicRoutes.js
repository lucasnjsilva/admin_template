import Cards from './../components/inside/Cards';
import Forms from './../components/inside/Forms';

const DynamicRoutes = () => ([
    {
        path: "/cards", 
        name: "Cards",
        template: Cards
    },
    {
        path: "/forms",
        name: "Forms",
        template: Forms
    }   

]);

export default DynamicRoutes();