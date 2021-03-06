import * as enzyme from 'enzyme';
import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';

import {IconType, IconVersion} from '../../../constants';
import Icon from './Icon';

// Need to explicitly add icon here because test files is not under root component (App)
library.add(faCommentDots);

describe('<Icons > render', () => {
    it('should render a icon correctly', () => {
        const wrapper = enzyme.shallow(<Icon name={["far", "comment-dots"]} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a font awesome icon', () => {
      const wrapper = enzyme.mount(<Icon name={["far", "comment-dots"]} />);
      // Mock Font Awesome. https://www.npmjs.com/package/@fortawesome/react-fontawesome#unit-testing
      expect(wrapper.find('.fa').length).toEqual(1);
    });
});