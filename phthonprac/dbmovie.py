from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbsparta

movie = db.movies.find_one({'title':'가버나움'})
star = movie['star']

db.movies.update_one({'title':'가버나움'},{'$set':{'star':'0'}})