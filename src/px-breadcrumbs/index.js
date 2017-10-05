import React from 'react';
import classnames from 'classnames';

import stylesheet from './px-breadcrumbs.scss';

/**
 * px-breadcrumbs component
 */
export default ({label = 'px-breadcrumbs', children}) => {
  const baseClasses = classnames('px-breadcrumbs', {
    'px-breadcrumbs--children': children
  });

  return (
    <div className={baseClasses}>
      <div className="container flex">
        <ul className="topPath">

          {/*
          <template is="dom-repeat" items="[[_mainPathItems]]">

            <template is="dom-if" if="[[_isNotFirstItemInData(index, _mainPathItems)]]">
              <li className="breadcrumbTopItem flex flex--middle">
                <span className="rightAngle [[_getSeparatorSize(clickOnlyMode)]]"><px-icon icon="px-utl:chevron-right"></px-icon></span>
              </li>
            </template>

            <li data-text="[[item.label]]" data-item="[[item]]" data-index="[[index]]" class="breadcrumbTopItem u-ph- flex flex--row flex--middle" on-tap="_onPathTap">

              <template is="dom-if" if="[[_isLabel(item, clickOnlyMode)]]">
                <span className="actionable actionable--action">[[item.label]]</span>
              </template>

              <template is="dom-if" if="[[_isDropdown(item, clickOnlyMode)]]">
                <px-dropdown display-value="[[item.label]]" items="[[_clickedItemChildren]]" search-mode="[[searchMode]]" button-style="bare" disable-clear></px-dropdown>
              </template>

              <template is="dom-if" if="[[_isOverflow(item)]]">
                <px-dropdown id="dropdown" items="[[_clickedItemChildren]]" button-style="icon" icon="px-nav:more"></px-dropdown>
              </template>
            </li>
          </template>

          */}
        </ul>
      </div>

      <style jsx>{stylesheet}</style>
    </div>
  );
}
