/* eslint-disable */
export default class Breadcrumbs {
  constructor(breadcrumbEl, graph, clickOnlyMode, breadcrumbs = [], keys) {
    this.keys = keys;
    this.breadcrumbEl = breadcrumbEl;
    this.graph = graph;
    this.clickOnlyMode = clickOnlyMode;
    this.breadcrumbs = breadcrumbs;
    this.map = new WeakMap();
    this.ctx = this._createCanvas(breadcrumbEl);
    this._preShortenItems(this.breadcrumbs);
    return this;
  }

  /**
   * A getter that returns the size of the breadcrumb items - at full length.
   * It checks to see if it has a value, and if so, returns the cached one, so we don't have to calculate the value again.
   */
  get sizeOfFullBreadcrumbs() {
    this.__sizeOfFullBreadcrumbs = this.__sizeOfFullBreadcrumbs || this._calculateSizeOfBreadcrumbs(this.breadcrumbs);
    return this.__sizeOfFullBreadcrumbs;
  }
  /**
   * A getter that returns the short size of the breadcrumb items excluding the last item.
   */
  get sizeOfAllShortenedItemsExcludingLastItem() {
    return this._calculateSizeOfBreadcrumbs(this.breadcrumbs.slice(0, this.breadcrumbs.length - 1), false);
  }
  /**
   * A getter that returns the size of the full last item.
   */
  get sizeOfFullLastItem() {
    return this._calculateSizeOfBreadcrumbs(this.breadcrumbs.slice(-1));
  }
  /**
   * A getter that returns the size of the short last item.
   */
  get sizeOfShortLastItem() {
    return this._calculateSizeOfBreadcrumbs(this.breadcrumbs.slice(-1), false);
  }
  /**
   * A getter that returns the last item in the breadcrumb array.
   */
  get lastItemFull() {
    return this.breadcrumbs.slice(-1)[0];
  }
  /**
   * A getter that returns the short version of the last item in the breadcrumbs array.
   */
  get lastItemShort() {
    return this.shortenedItems.slice(-1)[0];
  }
  /**
   * A getter that returns an array of all the shortened items in the breadcrumbs array.
   */
  get shortenedItems() {
    this.__shortenedItems = this.__shortenedItems || this.breadcrumbs.map((item) => {
      const wrapper = {};
      wrapper.source = item;
      wrapper.isTruncated = true;
      const labelKey = this.keys.label;
      const childrenKey = this.keys.children;
      wrapper[labelKey] = this._getShortenedText(item);
      wrapper[childrenKey] = this._getItemProp(item, this.keys.children);
      wrapper.selectedItem = item.selectedItem;
      wrapper.hasChildren = item.hasChildren;
      wrapper.isSelectable = item.isSelectable;
      return wrapper;
    });
    return this.__shortenedItems;
  }
  /**
   * A getter that returns the size - in pixels - of the overflow ellipsis.
   */
  get sizeOfEllipsis() {
    return 36;
  }
  /**
   * A getter that returns the size - in pixels - of all the shortened breadcrumbs items.
   */
  get sizeOfAllShortenedItems() {
    return this._calculateSizeOfBreadcrumbs(this.breadcrumbs, false);
  }
  /**
   * A getter that returns the size - in pixels - of all the shortened breadcrumbs items excluding the last item.
   */
  get allShortenedItemsExcludingLast() {
    return this.shortenedItems.slice(0, this.shortenedItems.length - 1);
  }
  /**
   * Adds the item that is passed in to the weakMap if it is not already there.
   */
  _addToWeakMap(item) {
    const cachedItem = this.map.get(item) || null;
    if (!cachedItem) {
      this.map.set(item, item);
    }
  }
  /**
   * Called when the class is instantiated. it loops through all the passed in items, and calls the _getShortenedText method on
   * each item.
   */
  _preShortenItems(items) {
    for (const item of items) {
      this._getShortenedText(item);
    }
  }
  /**
   * Returns the shortened version of the text in the item that is passed in, as well as add it into the map.
   * Checks for a cached version before it sets it.
   */
  _getShortenedText(item) {
    const cachedItem = this.map.get(item) || {};
    const label = this._getItemProp(item, this.keys.label);
    if (!cachedItem.shortText && label.length > 13) {
      cachedItem.shortText = `${label.substr(0, 6)}...${label.substr(label.length - 6)}`;
    } else if (!cachedItem.shortText) {
      cachedItem.shortText = label;
    }
    this.map.set(item, cachedItem);
    return cachedItem.shortText;
  }
  /**
   * Returns the size - in pixels - of the full size of the text in the passed in item, as well as add that info into the map.
   * Checks for a cached version before setting this value
   */
  _sizeOfIndividualFullItem(item) {
    const cachedItem = this.map.get(item) || {};
    const label = this._getItemProp(item, this.keys.label);
    cachedItem.fullSize = (cachedItem.fullSize || parseInt(this.ctx.measureText(label).width, 10));
    this.map.set(item, cachedItem);
    return cachedItem.fullSize;
  }
  /**
   * Returns the size - in pixels - of the short size of the text in the passed in item, as well as add that info into the map.
   * Checks for a cached version before setting this value
   */
  _sizeOfIndividualShortItem(item) {
    const cachedItem = this.map.get(item) || {};
    cachedItem.shortSize = (cachedItem.shortSize || parseInt(this.ctx.measureText(cachedItem.shortText).width, 10));
    this.map.set(item, cachedItem);
    return cachedItem.shortSize;
  }
  /**
   * Loops through the passed in array, and gets the size - in pixels - of all the items.
   * The size can be determined in either short or full text.
   * It takes into account the size of the px-icons, as well as padding on each item, and padding on the container.
   */
  _calculateSizeOfBreadcrumbs(strArray, useFullSize = true) {
    if (strArray) {
      let accum = 0,
        i = 0,
        len = strArray.length,
        sizeOfItem;
      // run through all the items, and get the sizes.
      for (i = 0; i < len; i++, sizeOfItem = null) {
        if (useFullSize) {
          sizeOfItem = this._sizeOfIndividualFullItem(strArray[i]);
        } else {
          sizeOfItem = this._sizeOfIndividualShortItem(strArray[i]);
        }
        const source = strArray[i].source ? strArray[i].source : strArray[i];
        // add the size of the of the item into our accumulator
        accum += sizeOfItem;
        // if the item has siblings, we need to add the size of the down chevron.
        if (this._getItemProp(strArray[i], this.keys.label) !== '...' && this.graph.hasSiblings(source) && !this.clickOnlyMode) {
          accum += 21;
        }
        // padding on each item (10 on each side)
        accum += 20;
        // right angle arrow - the last item doesn't get a right angle.
        if (i !== len - 1) {
          accum += this.clickOnlyMode ? 30 : 15;
        }
      }
      return accum + 10; // extra padding somewhere? slight miscalculation?
    }
  }
  /**
   * Creates/returns the canvas that we will use to measure the size of the text.
   * We also set the font and font size.
   */
  _createCanvas(breadcrumbEl) {
    let style = window.getComputedStyle(breadcrumbEl, null),
      fontSize = style.getPropertyValue('font-size'),
      fontFamily = style.getPropertyValue('font-family');
    const canvas = document.createElement('canvas');
    canvas.height = 20;
    canvas.width = 9999;
    const ctx = canvas.getContext('2d');
    ctx.font = `${fontSize} ${fontFamily}`;
    return ctx;
  }
  /**
   * Fetches an item's property at the configured key. Used to dynamically
   * fetch the item's label, icon, children, etc. based on the configured
   * `keys` for the component.
   */
  _getItemProp(item, key) {
    if (item && typeof item === 'object' && typeof key === 'string' && item.hasOwnProperty(key)) {
      return item[key];
    }
    return null;
  }
}
