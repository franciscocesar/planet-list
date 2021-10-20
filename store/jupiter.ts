import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'

@Module({ name: 'jupiter', stateFactory: true, namespaced: true })
export default class Jupiter extends VuexModule {
    private jupiter = {}


    public get $all() {
        return this.jupiter
    }


    @Mutation
    private SET_ALL(jupiter: any) {
        this.jupiter = jupiter
    }

    @Action
    public async index() {
        const jupiter = await $axios.$get('/planet/5')
        this.context.commit("SET_ALL", jupiter)
    }


}

