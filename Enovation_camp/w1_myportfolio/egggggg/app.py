from pymongo import MongoClient
import jwt
import datetime
import hashlib
from flask import Flask, render_template, jsonify, request, redirect, url_for
from werkzeug.utils import secure_filename
from datetime import datetime, timedelta
from flask import Flask, render_template, request, jsonify
import certifi

app = Flask(__name__)

app.config["TEMPLATES_AUTO_RELOAD"] = True
app.config['UPLOAD_FOLDER'] = "./static/profile_pics"

SECRET_KEY = 'SPARTA'



#몽고db에 접속하는 코드
client = MongoClient('mongodb+srv://isnoopy:5492@cluster0.izbrf.mongodb.net/?retryWrites=true&w=majority', tlsCAFile=certifi.where())
#aws에 접속하는 코드. db 에접속하는 aws ip를 왜 쓰는거지? 여튼 이 방법으로 db접속하는법도 알아내야함.
#client = MongoClient('43.200.183.105', 27017, username="isnoopy", password="5492")

db = client.dbsparta_plus_week2

@app.route('/')
def main():
    # DB에서 저장된 단어 찾아서 HTML에 나타내기
    token_receive = request.cookies.get('mytoken')
    try:
        payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])
        user_info = db.personal_info.find_one({"id": payload["id"]})  # 유저정보 읽어오기

        personal_info_list=list(db.personal_info.find({},{"_id": False}))

        return render_template("index.html",user_info=user_info,personal_info_list=personal_info_list)
    except jwt.ExpiredSignatureError:
        return redirect(url_for("", msg="로그인 시간이 만료되었습니다."))
    except jwt.exceptions.DecodeError:
        return redirect(url_for("login", msg="로그인 정보가 존재하지 않습니다."))

@app.route('/<keyword>')
def connect(keyword):
    token_receive = request.cookies.get('mytoken')
    try:
        payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])

        status = (keyword == payload["id"])  # 내 프로필이면 True, 다른 사람 프로필 페이지면 False
        user_info = db.personal_users.find_one({"id": payload["id"]}) #jinja2

        personal_info=db.personal_info.find_one({"id":keyword})
        personal_career_list = list(db.personal_career.find({"id":keyword}, {"_id": False}))
        personal_career_list.sort(key = lambda x:x["begin"])

        personal_skill_list=list(db.personal_skill.find({"id":keyword},{"_id":False}))

        personal_project_list=list(db.personal_project.find({"id":keyword},{"_id":False}))

        #print
        print("personal_career_list")
        print(personal_career_list)
        print("personal_skill_list")
        print(personal_skill_list)#personal_skill의 docment에 카테고리 index 필드를 추가해야할듯.
        print(personal_info["name"])
        print("personal_project_list")
        print(personal_project_list)

        if payload is not None:
            # 유저정보가 있다면
            return render_template("personal.html", user_info=user_info, status=status, personal_info=personal_info,
                                   personal_career_list=personal_career_list, personal_skill_list=personal_skill_list,
                                   personal_project_list=personal_project_list)
            # 유저정보가 없다면
        else:
            return render_template("personal.html", personal_info=personal_info,
                                   personal_career_list=personal_career_list, personal_skill_list=personal_skill_list,
                                   personal_project_list=personal_project_list)

    except jwt.ExpiredSignatureError:
        return redirect(url_for("/login", msg="로그인 시간이 만료되었습니다."))
    except jwt.exceptions.DecodeError:
        return redirect(url_for("/login", msg="로그인 정보가 존재하지 않습니다."))

    except (jwt.ExpiredSignatureError, jwt.exceptions.DecodeError):
        return redirect(url_for(f"/{keyword}"))


@app.route('/test')
def test():
    # DB에서 저장된 단어 찾아서 HTML에 나타내기

    return render_template("test.html")

@app.route('/index_old')
def index_old():
    # DB에서 저장된 단어 찾아서 HTML에 나타내기

    return render_template("index_old.html")

@app.route('/login')
def login():
    msg = request.args.get("msg")
    return render_template('login.html', msg=msg)

@app.route('/user/<username>')
def user(username):
    # 각 사용자의 프로필과 글을 모아볼 수 있는 공간
    token_receive = request.cookies.get('mytoken')
    try:
        payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])
        status = (username == payload["id"])  # 내 프로필이면 True, 다른 사람 프로필 페이지면 False

        user_info = db.personal_info.find_one({"username": username}, {"_id": False})
        return render_template('user.html', user_info=user_info, status=status)
    except (jwt.ExpiredSignatureError, jwt.exceptions.DecodeError):
        return redirect(url_for("home"))

@app.route('/modal')
def modal():
    POSTS = ['hello world', 'how are you', 'you good man']
    return render_template("modal.html", posts=POSTS)


@app.route('/sign_in', methods=['POST'])
def sign_in():
    # 로그인
    username_receive = request.form['username_give']
    password_receive = request.form['password_give']

    pw_hash = hashlib.sha256(password_receive.encode('utf-8')).hexdigest()
    result = db.personal_users.find_one({'id': username_receive, 'password': pw_hash})

    if result is not None:
        payload = {
         'id': username_receive,
         'exp': datetime.utcnow() + timedelta(seconds=60 * 60 * 24)  # 로그인 24시간 유지
        }
        token = jwt.encode(payload, SECRET_KEY, algorithm='HS256')

        return jsonify({'result': 'success', 'token': token})
    # 찾지 못하면
    else:
        return jsonify({'result': 'fail', 'msg': '아이디/비밀번호가 일치하지 않습니다.'})


@app.route('/sign_up/save', methods=['POST'])
def sign_up():
    username_receive = request.form['username_give']
    password_receive = request.form['password_give']
    password_hash = hashlib.sha256(password_receive.encode('utf-8')).hexdigest()
    doc_users = {
        "id": username_receive,  # "id" = DB 아이디 변수
        "password": password_hash,  # DB 비밀번호
    }
    db.personal_users.insert_one(doc_users)

    doc_info = {
        "id": username_receive,
        "username": username_receive,  # info_name의 기본값은 id와 같게
        "birth": "",
        "address": "",
        "phone_number": "",
        "email": "",
        "education": "",
    }
    db.personal_info.insert_one(doc_info)
    return jsonify({'result': 'success'})

# info 업데이트
@app.route('/update_info', methods=['POST'])
def update_info():
    token_receive = request.cookies.get('mytoken')
    try:
        payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])

        name_receive = request.form["name_give"]
        birth_receive = request.form["birth_give"]
        address_receive = request.form["address_give"]
        phone_number_receive = request.form["phone_number_give"]
        email_receive = request.form["email_give"]
        education_receive = request.form["education_give"]
        new_doc = {
            "name": name_receive, # "info_name"> DB personal information 이름 변수
            "birth": birth_receive,
            "address": address_receive,
            "phone_number": phone_number_receive,
            "email": email_receive,
            "education": education_receive,
        }
        db.personal_info.update_one({'id': payload['id']}, {'$set': new_doc}) # users = DB명 (personal information) /변수 바꿔야해용

        return jsonify({"result": "success", 'msg': '수정 성공'})
    except (jwt.ExpiredSignatureError, jwt.exceptions.DecodeError):
        return redirect(url_for("home"))



@app.route('/sign_up/check_dup', methods=['POST'])
def check_dup():
    username_receive = request.form['username_give']
    exists = bool(db.users.find_one({"username": username_receive}))
    return jsonify({'result': 'success', 'exists': exists})



if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)