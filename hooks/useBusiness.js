"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.useBusiness = void 0;
var react_hooks_1 = require("@apollo/react-hooks");
var apollo_boost_1 = require("apollo-boost");
var QUERY = apollo_boost_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tquery($id: String!) {\n\t\tbusiness(id: $id) {\n\t\t\tname\n\t\t}\n\t}\n"], ["\n\tquery($id: String!) {\n\t\tbusiness(id: $id) {\n\t\t\tname\n\t\t}\n\t}\n"])));
var useBusiness = function (id) {
    var _a = react_hooks_1.useQuery(QUERY, {
        variables: { id: id }
    }), loading = _a.loading, error = _a.error, data = _a.data;
    return { loading: loading, error: error, data: data };
};
exports.useBusiness = useBusiness;
var templateObject_1;
