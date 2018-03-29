module.exports = {
    'secret': '!l0ve!nd!@',
    'database': 'mongodb://admin:admin@ds249718.mlab.com:49718/ecommerce',
    'authRules': [
        {
            'name': 'allow all',
            'path': '*',
            'permission': 'allow',
            'errorcode': 0
        },
        {
            'name': 'deny specific',
            'path': 'dashboard',
            'permission': 'deny',
            'errorcode': 401
        }
    ]
};