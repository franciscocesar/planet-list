import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'

@Module({ name: 'marte', stateFactory: true, namespaced: true })
export default class Marte extends VuexModule {
    private marte = {}


    public get $all() {
        return this.marte
    }


    @Mutation
    private SET_ALL(marte: any) {
        this.marte = marte
    }

    @Action
    public async index() {
        const marte = await $axios.$get('/planet/4')
        this.context.commit("SET_ALL", marte)
    }


}

