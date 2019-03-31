import * as enzyme from 'enzyme';
import * as React from 'react';

import {IconType} from '../../../constants';
import Icon from './Icon';

describe('<Icons > render', () => {
   let wrapper;

   beforeEach(() => {
       wrapper = enzyme.shallow(<Icon type={IconType.Comment}/>);
   });

   it('should render icon correctly', () => {
      expect(wrapper.find('.icon-' + IconType.Comment.name).length).toEqual(1);
   });
});