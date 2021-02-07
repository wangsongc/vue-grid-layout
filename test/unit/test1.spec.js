import { shallowMount } from '@vue/test-utils'
import GridItem from '../../src/components/GridItem.vue'
/* eslint-env jest */

const eventBus = {
    $on: jest.fn()
}

const factory = (propsData, provide) => {
    return shallowMount(GridItem, {
        propsData: {
            ...propsData
        },
        provide: {
            ...provide
        }
    })
}

const defaultPropsData = () => {
    return {
        x: 0,
        y: 0,
        w: 1,
        h: 1,
        i: 1,
    }
}

const defaultProvide = () => {
    return {
        eventBus,
        layout: {
            rowHeight: 10,
            containerWidth: 100
        }
    }
}

describe.skip('isDraggable', () => {
    it('isDraggable', async () => {
        let propsData = new defaultPropsData(),
            provide = new defaultProvide(),
            wrapper
        //未设置props，未设置layout
        wrapper = new factory(propsData, provide)
        expect(wrapper.vm.draggable).toBe(undefined)
        //未设置props，设置layout，取layout
        provide.layout.isDraggable = false
        wrapper = new factory(propsData, provide)
        expect(wrapper.vm.draggable).toBe(false)
        //设置props，设置layout，优先取props
        propsData.isDraggable = true
        wrapper = new factory(propsData, provide)
        expect(wrapper.vm.draggable).toBe(true)

        //改变props
        await wrapper.setProps({ isDraggable: false })
        //expect(wrapper.vm.tryMakeDraggable).toBeCalled()
    })

    it('createStyle', async () => {
        let propsData = new defaultPropsData(),
            provide = new defaultProvide(),
            wrapper
        //未设置props，未设置layout
        wrapper = new factory(propsData, provide)

        await wrapper.vm.createStyle()
        //rowHeight cols renderRtl x y h w
        // console.log('renderRtl:',wrapper.vm.renderRtl)
        // console.log('top:',wrapper.vm.style.top)
        // console.log('left:',wrapper.vm.style.left)
        // console.log('right:',wrapper.vm.style.right)
        // console.log('width:',wrapper.vm.style.width)
        // console.log('height:',wrapper.vm.style.height)
        // console.log('position:',wrapper.vm.style.position)

        await wrapper.setProps({
            x: 2,
            y: 1,
            w: 9,
            h: 9
        })
        console.log('top:', wrapper.vm.style.top)
        console.log('left:', wrapper.vm.style.left)
        console.log('right:', wrapper.vm.style.right)
        console.log('width:', wrapper.vm.style.width)
        console.log('height:', wrapper.vm.style.height)
        console.log('position:', wrapper.vm.style.position)
    })
})


//创建griditem

//修改griditem

//拖拽