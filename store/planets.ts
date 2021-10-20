import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'

@Module({ name: 'planets', stateFactory: true, namespaced: true })
export default class Planets extends VuexModule {
    private planets = {}


    public get $all() {
        return this.planets
    }


    @Mutation
    private SET_ALL(planets: any) {
        this.planets = planets
    }

    @Action
    public async index() {
        const planets = await $axios.$get('/planet/1')
        this.context.commit("SET_ALL", planets)
    }


}

