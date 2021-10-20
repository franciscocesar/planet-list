import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'

@Module({ name: 'terra', stateFactory: true, namespaced: true })
export default class Terra extends VuexModule {
    private terra = {}


    public get $all() {
        return this.terra
    }


    @Mutation
    private SET_ALL(terra: any) {
        this.terra = terra
    }

    @Action
    public async index() {
        const terra = await $axios.$get('/planet/3')
        this.context.commit("SET_ALL", terra)
    }


}
