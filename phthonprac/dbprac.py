from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:sparta@cluster0.bpshvkk.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta

# 저장 - 예시
doc = {'name':'bobby','age':21}
db.users.insert_one(doc)

