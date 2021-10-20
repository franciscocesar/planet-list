import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'

@Module({ name: 'venus', stateFactory: true, namespaced: true })
export default class Venus extends VuexModule {
    private venus = {}


    public get $all() {
        return this.venus
    }


    @Mutation
    private SET_ALL(venus: any) {
        this.venus = venus
    }

    @Action
    public async index() {
        const venus = await $axios.$get('/planet/2')
        this.context.commit("SET_ALL", venus)
    }


}
