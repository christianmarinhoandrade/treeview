import React from "react";
import * as reactRedux from 'react-redux'

import { mount } from "../../setupTests.js"

import json from "~/pages/home/data.json"

import HomeFormComponent, { buildArray } from "~/pages/home/components/home-form.component.js"



describe("List tests", () => {
    const result = buildArray(json)
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
    })

    it("should render items", () => {
        const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        //useSelectorMock.mockReturnValue({ dataComponent: { data: [] } })

        const wrapper = mount(
            <HomeFormComponent json={json} />
        );

        const length = wrapper.find("div").find({ id: 'test' }).length


        expect(length).toEqual(result.length);
    })

    const getToggle = (wrapper) => {
        let row = wrapper.find("div").find({ id: 'test' }).at(0)

        let toggle = row.find("div").find({ id: "test-toggle" }).at(0)

        return toggle
    }

    it("should render items after click in toggle", () => {

        const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        //useSelectorMock.mockReturnValue({ dataComponent: { data: [] } })

        const wrapper = mount(
            <HomeFormComponent json={json} />
        );

        //quantidade de items com o primeiro item da treeview aberto
        let totalLength = result.length + result[0].children.length

        const toggle = getToggle(wrapper)

        toggle.simulate('click')

        //quantidade de items atualizado depois de abrir o primeiro item da treeview
        const length = wrapper.find("div").find({ id: 'test' }).length

        expect(length).toEqual(totalLength);

        //volta para o estado inicial
        toggle.simulate('click')
    })

    const getCheckbox = (wrapper) => {

        let row = wrapper.find("div").find({ id: 'test' }).at(0)

        let checkbox = row.find("div").find({ id: "test-checkbox" }).at(0)

        let input = checkbox.find("input").at(0)

        return input
    }

    it("should input checked after click in checkbox", () => {

        const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)

        const wrapper = mount(
            <HomeFormComponent json={json} />
        );

        let input = getCheckbox(wrapper)

        input.simulate("click")

        // pega checbox atualizado
        input = getCheckbox(wrapper)

        expect(input.props()["checked"]).toBe(true)

        //volta para o estado inicial
        input.simulate("click")
    })

    it("should input childrens checked after click in checkbox father", () => {

        const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)

        const wrapper = mount(
            <HomeFormComponent json={json} />
        );

        // primeiro item da treeview mais os filhos da treeview
        const firstIndex = 1
        let totalLength = firstIndex + result[0].children.length


        const toggle = getToggle(wrapper)

        // ao clicar no toggle não esta sendo validado o mouseover sendo assim a função do checkbox é assionado alterando o valor do estado
        // por isso o evento de clique do checkbox não precisa ser assionado.
        toggle.simulate('click')

        const inputs = wrapper.find("input")

        let arr = []
        inputs.forEach((input, i) => {
            if (input.props()["checked"])
                arr.push(i)
        })

        // valida quantidade de checkboxs checados depois do click do checkbox pai
        expect(totalLength).toEqual(arr.length);
    })

})