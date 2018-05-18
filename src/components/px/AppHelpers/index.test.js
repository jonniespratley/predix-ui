import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';


import AppHelpers from './';

const { AssetGraph, AssetGraphBehavior, AssetTree } = AppHelpers;

let fx;
let data = [{
    label: 'United States',
    id: 'united-states',
    children: [{
        label: 'California',
        id: 'calif',
        children: [{
            label: 'San Francisco',
            id: 'sf'
          },
          {
            label: 'Walnut Creek',
            id: 'wc'
          },
          {
            label: 'Sacramento',
            id: 'sc'
          }
        ]
      },
      {
        label: 'Arizona',
        id: 'ariz'
      },
      {
        label: 'Oregon',
        id: 'oregon'
      },
      {
        label: 'Washington',
        id: 'wash'
      }
    ]
  },
  {
    label: 'Canada',
    id: 'canada'
  }
];
let sandbox = null;

describe('AssetGraph', () => {
  beforeEach(() => {
    fx = new AssetGraphBehavior();
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  })

  test('should new instance', () => {
    fx = new AssetGraphBehavior();
    fx.items = data;
    expect(fx._assetGraph);
    expect(fx._assetGraph.hasNode(data[0].children[1])).to.equal(true);
  });


  test('should build items', () => {
    fx = new AssetGraphBehavior();
    fx.items = data;
    expect(fx._assetGraph);
    console.log(fx._assetGraph);
    expect(fx._assetGraph.hasNode(data[0].children[1])).to.equal(true);
  });

  test('should have items as Graph', () => {
    fx = new AssetGraphBehavior();
    fx.items = data;
    expect(fx._assetGraph);
    console.log(fx._assetGraph);
    expect(fx._assetGraph.hasNode(data[0].children[1])).to.equal(true);
  });

  test('builds an asset graph when `items` is first defined', () => {
    fx.items = data;
    expect(fx._assetGraph instanceof AssetGraph).to.equal(true);
    expect(fx._assetGraph.hasNode(data[0].children[1])).to.equal(true);
  });

  test('adds the top-level `items` to the `__rootItems` array', () => {
    fx.items = data;
    expect(fx.__rootItems.length).to.equal(2);
    expect(fx.__rootItems[0]).to.equal(data[0]);
  });

  test('builds a new asset graph when `items` is reassigned to a new reference', () => {
    fx.items = data;
    let firstGraph = fx._assetGraph;
    let newData = [{
      id: 'new-home',
      label: 'New Home',
      children: [{
        id: 'new-child-1',
        label: 'New Child 1'
      }]
    }];
    fx.items = newData;
    expect(fx._assetGraph === firstGraph).to.equal(false);
    expect(fx._assetGraph.hasNode(data[0].children[1])).to.equal(false);
    expect(fx._assetGraph.hasNode(newData[0].children[0])).to.equal(true);
  });

  test('fires a \'px-app-asset-graph-created\' event when `items` is first defined', (done) => {
    fx.addEventListener('px-app-asset-graph-created', function (evt) {
      expect(evt.graph === fx._assetGraph).to.equal(true);
      done();
    });
    fx.items = data;
  });

  test('fires a \'px-app-asset-graph-created\' event when `items` is reassigned to a new reference', (done) => {
    let callCount = 0;
    fx.addEventListener('px-app-asset-graph-created', function (evt) {
      callCount++;
      expect(evt.graph === fx._assetGraph).to.equal(true);
      if (callCount === 2) {
        done();
      }
    });
    fx.items = data;
    fx.items = [{
      id: 'new-home',
      label: 'New Home',
      children: [{
        id: 'new-child-1',
        label: 'New Child 1'
      }]
    }];
  });

  test('assigns the children of the root of the asset graph to ', (done) => {
    let callCount = 0;
    fx.addEventListener('px-app-asset-graph-created', function (evt) {
      callCount++;
      expect(evt.graph === fx._assetGraph).to.equal(true);
      if (callCount === 2) {
        done();
      }
    });
    fx.items = data;
    fx.items = [{
      id: 'new-home',
      label: 'New Home',
      children: [{
        id: 'new-child-1',
        label: 'New Child 1'
      }]
    }];
  });


  describe('[adding and removing items]', function () {
    let children;

    beforeEach(function () {
      children = [{
        id: 'new-child-1',
        label: 'New Child #1'
      }, {
        id: 'new-child-2',
        label: 'New Child #2'
      }];

      fx = new AssetGraphBehavior();
      fx.items = data;
      sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
      //fx = null;
      sandbox.restore();
    });

    ///// ADDING
    test('adds new items to the root of the graph with `addChildren`', function () {
      fx.addChildren(null, children);
      let rootChildren = fx._assetGraph.getRootChildren();
      expect(rootChildren.length).to.equal(4); // 2 existing items + 2 new items
      expect(rootChildren[2]).to.equal(children[0]);
      expect(rootChildren[3]).to.equal(children[1]);
    });

    test('updates the `__rootItems` array when new children are added to root', function () {
      fx.addChildren(null, children);
      expect(fx.__rootItems.length).to.equal(4); // 2 existing items + 2 new items
      expect(fx.__rootItems[2]).to.equal(children[0]);
      expect(fx.__rootItems[3]).to.equal(children[1]);
    });

    test('adds new items to a parent node in the graph with `addChildren`', function () {
      fx.items = data;
      let parent = fx.items[0].children[1];
      fx.addChildren(parent, children);
      let parentChildren = fx._assetGraph.getChildren(parent);
      expect(parentChildren.length).to.equal(2);
      expect(parentChildren[0]).to.equal(children[0]);
      expect(parentChildren[1]).to.equal(children[1]);
    });

    xtest('fires a "px-app-asset-children-updated" event when an item is added to a parent node in the graph', function (done) {
      let parent = fx.items[0].children[1];
      fx.addEventListener('px-app-asset-children-updated', function (evt) {
        console.log('evt', evt);
        expect(evt.item).to.equal(parent);
        done();
      });
      fx.addChildren(parent, children);
    });

    ///// REMOVING
    test('removes items from the root of the graph with `removeChildren`', function () {
      let removed = data[1];
      fx.removeChildren(null, [removed]);
      let rootChildren = fx._assetGraph.getRootChildren();
      expect(rootChildren.length).to.equal(1);
    });

    test('removes all children from a parent node if `removeChildren` is called with null', function () {
      let parent = data[0].children[0];
      fx.removeChildren(parent, null);
      let parentChildren = fx._assetGraph.getChildren(parent);
      expect(parentChildren.length).to.equal(0);
    });

    test('updates the `__rootItems` array when items are removed from the root', function () {
      let removed = data[1];
      fx.removeChildren(null, [removed]);
      expect(fx.__rootItems.length).to.equal(1);
    });

    test('removes items from a parent node in the graph with `removeChildren`', function () {
      let parent = data[0].children[0];
      let removed = [data[0].children[0].children[0], data[0].children[0].children[1]]
      fx.removeChildren(parent, removed);
      let parentChildren = fx._assetGraph.getChildren(parent);
      expect(parentChildren.length).to.equal(1);
    });

    xtest('fires a \'px-app-asset-children-updated\' event when an item is added to a parent node in the graph', function (done) {
      let _fx = new AssetGraphBehavior();
      _fx.items = data;
      let parent = data[0].children[0];
      let removed = [data[0].children[0].children[0], data[0].children[0].children[1]];
      _fx.addEventListener('px-app-asset-children-updated', function (evt) {
        expect(evt.item).to.equal(parent);
        done();
      });
      _fx.removeChildren(parent, removed);
    });

    describe('selected, activated', () => {
      xtest('deselects the selected item if it is removed from the graph', function () {
        let parent = data[0];
        let item = data[0].children[0];
        fx.select(item);
        fx.removeChildren(parent, item);
        expect(fx.selected).to.equal(null);
      });
      xtest('deactivates the active item if it is removed from the graph', function () {
        let parent = data[0];
        let item = data[0].children[0];
        fx.activate(item);
        fx.removeChildren(parent, item);
        expect(fx.active).to.equal(null);
      });
      xtest('deselects the selected item if its ancestor is removed from the graph', function () {
        let ancestor = data[0];
        let parent = data[0].children[0];
        let item = data[0].children[0].children[0];
        fx.select(item);
        fx.removeChildren(null, ancestor);
        expect(fx.selected).to.equal(null);
      });

      xtest('deactivates the active item if its ancestor is removed from the graph', function () {
        let ancestor = data[0];
        let parent = data[0].children[0];
        let item = data[0].children[0].children[0];
        fx.activate(item);
        fx.removeChildren(null, ancestor);
        expect(fx.active).to.equal(null);
      });
    })
  });



});
