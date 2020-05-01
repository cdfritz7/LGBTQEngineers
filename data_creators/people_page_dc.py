import json

data = {}
data['people'] = []

data['people'].append({
    'name':'Adriana Pedroza',
    'position':'President',
    'description':'4th year ECE Student',
    'image':'./imgs/profile_stock.jpg',
    'link':'//google.com',
    'link_name':'link'
})

data['people'].append({
    'name':'Andrea Vigil',
    'position':'Treasurer',
    'description':'3rd Year MechE Student',
    'image':'./imgs/profile_stock.jpg',
    'link':'//google.com',
    'link_name':'link'
})

data['people'].append({
    'name':'Shelby Hobohm',
    'position':'Socials Coordinator',
    'description':'Double Major in MechE/Govt',
    'image':'./imgs/profile_stock.jpg',
    'link':'//google.com',
    'link_name':'link'
})

data['people'].append({
    'name':'Carson Reed',
    'position':'Corporate Liaison',
    'description':'3rd Year ChemE Student',
    'image':'./imgs/profile_stock.jpg',
    'link':'//google.com',
    'link_name':'link'
})

data['people'].append({
    'name':'Hadar Rozenberg',
    'position':'Social Media Coordinator',
    'description':'4th Year ECE Student',
    'image':'./imgs/profile_stock.jpg',
    'link':'//google.com',
    'link_name':'link'
})

data['people'].append({
    'name':'Aspen Mixon',
    'position':'Secretary',
    'description':'2nd Year ECE Student',
    'image':'./imgs/profile_stock.jpg',
    'link':None,
    'link_name':'link'
})

with open('../my-app/src/data/PeoplePageData.json', 'w') as outfile:
    json.dump(data, outfile)
