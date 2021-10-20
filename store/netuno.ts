import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'

@Module({ name: 'netuno', stateFactory: true, namespaced: true })
export default class Netuno extends VuexModule {
    private netuno = {}


    public get $all() {
        return this.netuno
    }


    @Mutation
    private SET_ALL(netuno: any) {
        this.netuno = netuno
    }

    @Action
    public async index() {
        const netuno = await $axios.$get('/planet/8')
        this.context.commit("SET_ALL", netuno)
    }


}

