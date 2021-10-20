import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Planets from '@/store/planets' //Importando modulos
import Venus from '@/store/venus'
import Terra from '@/store/terra'
import Marte from '@/store/marte'
import Jupiter from '@/store/jupiter'
import Saturno from '@/store/saturno'
import Urano from '@/store/urano'
import Netuno from '@/store/netuno'

/* eslint-disable import/no-mutable-exports */
let planets: Planets 
let venus: Venus
let terra: Terra
let marte: Marte
let jupiter: Jupiter
let saturno: Saturno
let urano: Urano
let netuno:Netuno


const initializeStores = (store: Store<any>): void => {
  planets = getModule(Planets, store),
  venus = getModule(Venus,store)
  terra = getModule(Terra, store)
  marte = getModule(Marte, store)
  jupiter = getModule(Jupiter, store)
  saturno = getModule(Saturno, store)
  urano = getModule(Urano, store)
  netuno = getModule(Netuno, store)
}


export { initializeStores, planets, venus, terra, marte, jupiter, saturno, urano, netuno }