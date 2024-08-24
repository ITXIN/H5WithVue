const path = require('path');
const { resolve } = path;
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { htmWebpackConfig, shouldSplitChunks } = require('./config');
const WebPackBar = require('webpackbar');
