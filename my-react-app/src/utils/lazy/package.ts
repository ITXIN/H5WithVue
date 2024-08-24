import React from 'react';
import ReactDom from 'react-dom';
const Packages = {
    react: () => React,
    'react-native': () => require('react-native'),
    'react-dom': () => ReactDom,
};
const fromPairs = pairs => Object.assign({}, ...pairs.map(([k, v]) => ({ [k]: v })));
const AllPackages = fromPairs(Object.keys(Packages).map(k => [k, () => ({ exports: Packages[k]() })]));

export default AllPackages;
