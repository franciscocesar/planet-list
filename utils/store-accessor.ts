import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Planets from '@/store/planets' //Importando modulos
import Venus from '@/store/venus'
import Terra from '@/store/terra'
/* eslint-disable import/no-mutable-exports */
let planets: Planets 
let venus: Venus
let terra: Terra


const initializeStores = (store: Store<any>): void => {
  planets = getModule(Planets, store),
  venus = getModule(Venus,store)
  terra = getModule(Terra, store)
}


export { initializeStores, planets, venus, terra }