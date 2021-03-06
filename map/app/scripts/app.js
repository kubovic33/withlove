'use strict';

angular.module('withloveApp', [
    'ngCookies',
    'ui.bootstrap'
])
.constant('apiKey', 'eyJpdiI6IlpRYm14OUllSUU2ZDVZdVwvZUZWQ2szcHFzRm85RWpOQ0F1M2JQVGZsdjhZPSIsInZhbHVlIjoiV2VqY0crSTRqZVltVlVLUTB6aTNMZWlDQlh3S2ZwVWxEXC8xOFdYZjFpbUtXUVwvb09DZnl1MFJraHpQZVoxc0lTNGZpdkFXeHdKYWFOSXBoYXBcL09IbVE9PSIsIm1hYyI6IjY5NzY3NWZiMWY5MjUxMGYxYzBjN2QyYzA0MWIwYjRhOTgyMzQwNjNlMThlNTc4ZDM3OTc0NmZhNDZhNzBkZjcifQ==')
.constant('baseUrl', 'http://api.withlove.sk/api/')
.constant('mapTypes', {
    'defaultMap': 'chiwo.geid1fd8',
    'morningMap': 'chiwo.h78l0k1o',
    'dayMap': 'chiwo.geid1fd8',
    'eveningMap': 'chiwo.h78k8i58',
    'nightMap': 'chiwo.geg7cd6d'
})

.run(function($http, apiKey) {
    $http.defaults.headers.common.Authorization = apiKey;
});
