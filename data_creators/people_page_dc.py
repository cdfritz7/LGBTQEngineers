import json

data = {}
data['people'] = []

data['people'].append({
    'name':'John Doe',
    'position':'officer',
    'description':'lorem ipsum dolor sit amut',
    'image':'./imgs/flag.png',
    'link':'//google.com',
    'link_name':'link'
})

data['people'].append({
    'name':'John Doe 2',
    'position':'officer',
    'description':'idk',
    'image':'./imgs/flag.png',
    'link':'//google.com',
    'link_name':'link'
})

data['people'].append({
    'name':'John Doe 3',
    'position':'officer',
    'description':'idk',
    'image':'./imgs/flag.png',
    'link':'//google.com',
    'link_name':'link'
})

data['people'].append({
    'name':'John Doe 4',
    'position':'officer',
    'description':'idk',
    'image':'./imgs/flag.png',
    'link':'//google.com',
    'link_name':'link'
})

data['people'].append({
    'name':'John Doe 5',
    'position':'officer',
    'description':'idk',
    'image':'./imgs/flag.png',
    'link':'//google.com',
    'link_name':'link'
})

data['people'].append({
    'name':'John Doe 6',
    'position':'officer',
    'description':'idk',
    'image':'./imgs/flag.png',
    'link':None,
    'link_name':'link'
})

data['people'].append({
    'name':'John Doe 7',
    'position':'officer',
    'description':'idk',
    'image':'./imgs/flag.png',
    'link':'//google.com',
    'link_name':'link'
})

data['people'].append({
    'name':'John Doe 8',
    'position':'officer',
    'description':'idk',
    'image':'./imgs/flag.png',
    'link':None,
    'link_name':'link'
})

with open('../my-app/src/data/PeoplePageData.json', 'w') as outfile:
    json.dump(data, outfile)
