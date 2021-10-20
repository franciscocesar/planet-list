import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'

@Module({ name: 'saturno', stateFactory: true, namespaced: true })
export default class Saturno extends VuexModule {
    private saturno = {}


    public get $all() {
        return this.saturno
    }


    @Mutation
    private SET_ALL(saturno: any) {
        this.saturno = saturno
    }

    @Action
    public async index() {
        const saturno = await $axios.$get('/planet/6')
        this.context.commit("SET_ALL", saturno)
    }


}

