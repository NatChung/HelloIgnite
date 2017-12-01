import 'react-native'
import React from 'react'
import Counter from '../../App/Components/Counter'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'


test('Counter component renders correctly', () => {
    const tree = renderer.create(<Counter
        value={9}
        onSyncIncrease={() => { }}
        onSyncDecrease={() => { }}
        onAsyncIncrease={() => { }}
        onAsyncDecrease={() => { }}
    />).toJSON()
    expect(tree).toMatchSnapshot()
})

test('setValue', () => {
    let i = 0 // i guess i could have used sinon here too... less is more i guess
    const onPress = () => ++i
    const wrapperPress = shallow(<Counter value={13} />)

    expect(wrapperPress.find('Text').prop('children')).toBe(13)
})

test('onSyncIncrease', () => {
    let i = 0 // i guess i could have used sinon here too... less is more i guess
    const onPress = () => ++i
    const wrapperPress = shallow(<Counter onSyncIncrease={onPress} />)

    expect(wrapperPress.find('BlueButton').at(0).prop('onPress')).toBe(onPress) // uses the right handler
    expect(i).toBe(0)
    wrapperPress.find('BlueButton').at(0).simulate('press')
    expect(i).toBe(1)
})

test('onSyncDecrease', () => {
    let i = 0 // i guess i could have used sinon here too... less is more i guess
    const onPress = () => ++i
    const wrapperPress = shallow(<Counter onSyncDecrease={onPress} />)

    expect(wrapperPress.find('RedButton').at(0).prop('onPress')).toBe(onPress) // uses the right handler
    expect(i).toBe(0)
    wrapperPress.find('RedButton').at(0).simulate('press')
    expect(i).toBe(1)
})

test('onAsyncIncrease', () => {
    let i = 0 // i guess i could have used sinon here too... less is more i guess
    const onPress = () => ++i
    const wrapperPress = shallow(<Counter onAsyncIncrease={onPress} />)

    expect(wrapperPress.find('BlueButton').at(1).prop('onPress')).toBe(onPress) // uses the right handler
    expect(i).toBe(0)
    wrapperPress.find('BlueButton').at(1).simulate('press')
    expect(i).toBe(1)
})

test('onAsyncDecrease', () => {
    let i = 0 // i guess i could have used sinon here too... less is more i guess
    const onPress = () => ++i
    const wrapperPress = shallow(<Counter onAsyncDecrease={onPress} />)

    expect(wrapperPress.find('RedButton').at(1).prop('onPress')).toBe(onPress) // uses the right handler
    expect(i).toBe(0)
    wrapperPress.find('RedButton').at(1).simulate('press')
    expect(i).toBe(1)
})