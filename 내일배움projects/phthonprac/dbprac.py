from pymongo import MongoClient
client = MongoClient('')
db = client.dbsparta

# 저장 - 예시
doc = {'name':'bobby','age':21}
db.users.insert_one(doc)

