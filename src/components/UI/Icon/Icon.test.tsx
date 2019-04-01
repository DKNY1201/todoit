import * as enzyme from 'enzyme';
import * as React from 'react';

import {IconType, IconVersion} from '../../../constants';
import Icon from './Icon';

describe('<Icons > render', () => {
   it('should render icon correctly', () => {
      const wrapper = enzyme.shallow(<Icon type={IconType.Comment} version={IconVersion.Far} />);
      expect(wrapper.find('.icon-' + IconVersion.Far + '-' + IconType.Comment).length).toEqual(1);
   });
});