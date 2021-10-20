import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'

@Module({ name: 'urano', stateFactory: true, namespaced: true })
export default class Urano extends VuexModule {
    private urano = {}


    public get $all() {
        return this.urano
    }


    @Mutation
    private SET_ALL(urano: any) {
        this.urano = urano
    }

    @Action
    public async index() {
        const urano = await $axios.$get('/planet/7')
        this.context.commit("SET_ALL", urano)
    }


}

