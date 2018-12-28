import PersonalInfo from '@/components/PersonalInfo.vue'
import EditInfo from '@/components/EditInfo.vue'

const routes = [
  {
    path: '/',
    component: PersonalInfo,
  },
  {
    path: '/edit/:id',
    name: 'editinfo',
    component: EditInfo,
    props: true
  },
]


/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  { string } name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes