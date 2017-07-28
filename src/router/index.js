import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/common/Hello'
import AddContractProduct from '@/components/AddContractProduct/AddContractProduct'
import AddContractProduct2 from '@/components/AddContractProduct2/AddContractProduct2'
import AddContractProduct3 from '@/components/AddContractProduct3/AddContractProduct3'
import Reviewed from '@/components/Reviewed/Reviewed'
import Pop from '@/components/common/Pop'
import Location from '@/components/common/Location'
import Home from '@/components/Home/Home'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/AddContractProduct',
      name: 'AddContractProduct',
      component: AddContractProduct
    },
    {
      path: '/AddContractProduct2',
      name: 'AddContractProduct2',
      component: AddContractProduct2
    },
    {
      path: '/AddContractProduct3',
      name: 'AddContractProduct3',
      component: AddContractProduct3
    },
    {
      path: '/Reviewed',
      name: 'Reviewed',
      component: Reviewed
    },

    {
      path: '/Pop',
      name: 'Pop',
      component: Pop
    },
    {
      path: '/Location',
      name: 'Location',
      component: Location
    }
  ]
})
