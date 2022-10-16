import React from 'react';
import Enzyme, { mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import App from '../components/App';


describe("Conditional rendering tests",function(){
  test("Check main div is not altered",function(){
    const wrapper = mount(<App />);
    expect(wrapper.exists("#main")).toEqual(true);
  });
  test("Check state info is not altered",function(){
    const wrapper = mount(<App />);
    expect(wrapper.exists("#main")).toEqual(true);
    const main = wrapper.find("#main");
    const tot = wrapper.state().list;
    expect(tot).toBeDefined();
    expect(tot.length).toEqual(7);
  });
  test("Check if number of child is correct",function(){
    const wrapper = mount(<App />);
    expect(wrapper.exists("#main")).toEqual(true);
    const main = wrapper.find("#main");
    const tot = wrapper.state().list;
    expect(tot).toBeDefined();
    expect(tot.length).toEqual(7);
    const child = main.children();
    expect(child.length).toEqual(5);
  });
  test("Check if the decimal point is correct",function(){
    const wrapper = mount(<App />);
    expect(wrapper.exists("#main")).toEqual(true);
    const main = wrapper.find("#main");
    const tot = wrapper.state().list;
    expect(tot).toBeDefined();
    expect(tot.length).toEqual(7);
    const child = main.children();
    let filter = [];
    tot.forEach((item,index)=>{
      if(item.percent > 75)
      {
        filter.push({
          name : item.name,
          percent : item.percent.toFixed(2)
        });
      }
    });
    expect((filter.length)===(child.length)).toEqual(true);
    let cnt = 0;
    for(let i = 0;i<filter.length;i++)
    {
      let children = main.childAt(i);
      expect(children.length).toEqual(1);
      expect(filter[i].name === children.childAt(0).text()).toEqual(true);
      expect(filter[i].percent == children.childAt(1).text()).toEqual(true);
    }
  });
  test("Check if child with percent greater than equal 90 have background color",function(){
    const wrapper = mount(<App />);
    expect(wrapper.exists(".bg-pink")).toEqual(true);
    const bgPink = wrapper.find(".bg-pink");
    expect(bgPink.length).toEqual(1);
    const child = bgPink.children();
    expect(child.length).toEqual(2);
    expect(bgPink.childAt(0).text()).toEqual("ritesh");
    expect(bgPink.childAt(1).text()).toEqual("99.94");
  });
});



