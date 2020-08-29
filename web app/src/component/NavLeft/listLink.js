import { faBook, faBomb, faCalendarAlt, faAllergies } from '@fortawesome/free-solid-svg-icons'

const listLink = [
    {
        id : 1,
        icon :  faBook,
        title : 'Dashboard',
        active : true
    },
    {
        id : 2,
        icon :  faBomb,
        title : 'Doing',
        active : false
    },
    {
        id : 3,
        icon : faCalendarAlt,
        title : 'Planning',
        active : false
    },
    {
        id : 4,
        icon : faAllergies,
        title : 'All',
        active : false
    }
]

export default listLink;