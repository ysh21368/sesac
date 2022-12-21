from ..db import db
from flask import Blueprint, render_template, redirect, url_for

bp = Blueprint('main',__name__,url_prefix='/')



@bp.route('/answer')
def answer_List():
    cursor = db.cursor() #DB와 상호작용을 하기 위한 cursor객체를 생성
    sql = 'SELECT * FROM answer'
    cursor.execute(sql) #sql을 실행
    answer_list = cursor.fetchall() #가져온다

    return render_template('answer/answer_list.html', answer_list=answer_list)

@bp.route('/')
def index():
    return redirect(url_for('question._list'))